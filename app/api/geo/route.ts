import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  // Vercel automatically provides geo headers
  const country = request.headers.get("x-vercel-ip-country") || ""

  let language: "nl" | "en" | "no" = "en" // default for rest of the world

  if (country === "NL" || country === "BE") {
    // Netherlands and Belgium (Dutch-speaking)
    language = "nl"
  } else if (country === "NO") {
    // Norway
    language = "no"
  }

  return NextResponse.json({ language, country })
}
