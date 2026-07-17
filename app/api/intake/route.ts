import { createHash, randomUUID } from "node:crypto"
import { NextResponse } from "next/server"
import { z } from "zod"

const optionalText = (max: number) => z.string().trim().max(max).optional().transform((value) => value || undefined)
const intakeSchema = z.object({
  locale: z.enum(["en", "nl", "no"]),
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254).transform((value) => value.trim().toLowerCase()),
  phone: optionalText(40),
  country: z.string().trim().min(2).max(80),
  discipline: z.enum(["road", "gravel", "mtb", "cyclocross", "track", "triathlon", "other"]),
  level: z.enum(["beginner", "amateur", "racer", "elite"]),
  weeklyHours: z.number().int().min(1).max(40),
  primaryGoal: z.string().trim().min(5).max(500),
  targetEvent: optionalText(160),
  eventDate: optionalText(10).refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), "Invalid date"),
  powerMeter: z.enum(["yes", "no"]),
  platform: z.enum(["intervals", "trainingpeaks", "garmin", "none", "other"]),
  packageInterest: z.enum(["basic", "premium", "pro", "unsure"]),
  message: optionalText(2000),
  consent: z.literal(true),
  website: optionalText(200),
})

const recentSubmissions = new Map<string, number>()
const duplicateWindowMs = 15 * 60 * 1000

function duplicateKey(email: string, secret: string) {
  return createHash("sha256").update(`${secret}:${email}`).digest("hex")
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
  const secret = process.env.INTAKE_SHARED_SECRET
  if (!scriptUrl || !secret) return NextResponse.json({ ok: false, code: "delivery_unavailable" }, { status: 502 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, code: "invalid_json" }, { status: 422 })
  }

  const parsed = intakeSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok: false, code: "validation_failed", errors: z.flattenError(parsed.error).fieldErrors }, { status: 422 })
  if (parsed.data.website) return NextResponse.json({ ok: true, submissionId: randomUUID() }, { status: 201 })

  const now = Date.now()
  for (const [key, timestamp] of recentSubmissions) if (now - timestamp > duplicateWindowMs) recentSubmissions.delete(key)
  const key = duplicateKey(parsed.data.email, secret)
  if (recentSubmissions.has(key)) return NextResponse.json({ ok: false, code: "duplicate" }, { status: 429 })

  const submissionId = randomUUID()
  try {
    const delivery = await fetch(scriptUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ secret, submissionId, submittedAt: new Date(now).toISOString(), ...parsed.data, website: undefined }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    })
    if (!delivery.ok) return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 })
    const result = await delivery.json() as { ok?: boolean; code?: string }
    if (result.code === "duplicate") return NextResponse.json({ ok: false, code: "duplicate" }, { status: 429 })
    if (!result.ok) return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 })
  } catch {
    return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 })
  }

  recentSubmissions.set(key, now)
  return NextResponse.json({ ok: true, submissionId }, { status: 201 })
}
