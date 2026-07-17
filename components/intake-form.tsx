"use client"

import Link from "next/link"
import { useEffect, useState, type FormEvent } from "react"
import { ArrowRight } from "@/components/icons"
import type { getCopy } from "@/lib/copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type Copy = ReturnType<typeof getCopy>["contact"]
type Status = { kind: "idle" | "loading" | "success" | "error" | "duplicate"; message?: string }

export function IntakeForm({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [packageInterest, setPackageInterest] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("package")
    if (selected && ["basic", "premium", "pro", "unsure"].includes(selected)) setPackageInterest(selected)
  }, [])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ kind: "loading" })
    setErrors({})
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const payload = {
      ...data,
      locale,
      weeklyHours: Number(data.weeklyHours),
      consent: data.consent === "on",
      packageInterest,
    }

    try {
      const response = await fetch("/api/intake", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
      const result = await response.json() as { ok?: boolean; code?: string; errors?: Record<string, string[]> }
      if (response.status === 422 && result.errors) {
        setErrors(Object.fromEntries(Object.keys(result.errors).map((key) => [key, copy.invalid])))
        setStatus({ kind: "error", message: copy.errorBody })
        return
      }
      if (response.status === 429) {
        setStatus({ kind: "duplicate", message: copy.duplicate })
        return
      }
      if (!response.ok) throw new Error(result.code ?? "delivery_failed")
      form.reset()
      setPackageInterest("")
      setStatus({ kind: "success", message: copy.successBody })
    } catch {
      setStatus({ kind: "error", message: copy.errorBody })
    }
  }

  const selectOptions = {
    discipline: [["road", copy.options.road], ["gravel", copy.options.gravel], ["mtb", copy.options.mtb], ["cyclocross", copy.options.cyclocross], ["track", copy.options.track], ["triathlon", copy.options.triathlon], ["other", copy.options.other]],
    level: [["beginner", copy.options.beginner], ["amateur", copy.options.amateur], ["racer", copy.options.racer], ["elite", copy.options.elite]],
    powerMeter: [["yes", copy.options.yes], ["no", copy.options.no]],
    platform: [["intervals", copy.options.intervals], ["trainingpeaks", copy.options.trainingpeaks], ["garmin", copy.options.garmin], ["none", copy.options.none], ["other", copy.options.other]],
  }

  function FieldError({ name }: { name: string }) {
    return errors[name] ? <p className="field-error" id={`${name}-error`}>{errors[name]}</p> : null
  }

  return (
    <form className="intake-form" noValidate onSubmit={submit}>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px" }}>
        <label htmlFor="website">{copy.fields.website}</label><input autoComplete="off" id="website" name="website" tabIndex={-1} />
      </div>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="name">{copy.fields.name}</label><input aria-describedby={errors.name ? "name-error" : undefined} autoComplete="name" id="name" name="name" required /><FieldError name="name" /></div>
        <div className="form-field"><label htmlFor="email">{copy.fields.email}</label><input aria-describedby={errors.email ? "email-error" : undefined} autoComplete="email" id="email" name="email" required type="email" /><FieldError name="email" /></div>
        <div className="form-field"><label htmlFor="phone">{copy.fields.phone}</label><input autoComplete="tel" id="phone" name="phone" type="tel" /><FieldError name="phone" /></div>
        <div className="form-field"><label htmlFor="country">{copy.fields.country}</label><input autoComplete="country-name" id="country" name="country" required /><FieldError name="country" /></div>
        <div className="form-field"><label htmlFor="discipline">{copy.fields.discipline}</label><select defaultValue="" id="discipline" name="discipline" required><option disabled value="">{copy.options.select}</option>{selectOptions.discipline.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><FieldError name="discipline" /></div>
        <div className="form-field"><label htmlFor="level">{copy.fields.level}</label><select defaultValue="" id="level" name="level" required><option disabled value="">{copy.options.select}</option>{selectOptions.level.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><FieldError name="level" /></div>
        <div className="form-field"><label htmlFor="weeklyHours">{copy.fields.hours}</label><input id="weeklyHours" max="40" min="1" name="weeklyHours" required type="number" /><FieldError name="weeklyHours" /></div>
        <div className="form-field"><label htmlFor="powerMeter">{copy.fields.powerMeter}</label><select defaultValue="" id="powerMeter" name="powerMeter" required><option disabled value="">{copy.options.select}</option>{selectOptions.powerMeter.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><FieldError name="powerMeter" /></div>
        <div className="form-field" data-wide="true"><label htmlFor="primaryGoal">{copy.fields.goal}</label><input id="primaryGoal" name="primaryGoal" required /><FieldError name="primaryGoal" /></div>
        <div className="form-field"><label htmlFor="targetEvent">{copy.fields.event}</label><input id="targetEvent" name="targetEvent" /></div>
        <div className="form-field"><label htmlFor="eventDate">{copy.fields.eventDate}</label><input id="eventDate" name="eventDate" type="date" /><FieldError name="eventDate" /></div>
        <div className="form-field"><label htmlFor="platform">{copy.fields.platform}</label><select defaultValue="" id="platform" name="platform" required><option disabled value="">{copy.options.select}</option>{selectOptions.platform.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><FieldError name="platform" /></div>
        <div className="form-field"><label htmlFor="packageInterest">{copy.fields.package}</label><select id="packageInterest" name="packageInterest" onChange={(event) => setPackageInterest(event.target.value)} required value={packageInterest}><option disabled value="">{copy.options.select}</option><option value="basic">{copy.options.basic}</option><option value="premium">{copy.options.premium}</option><option value="pro">{copy.options.pro}</option><option value="unsure">{copy.options.unsure}</option></select><FieldError name="packageInterest" /></div>
        <div className="form-field" data-wide="true"><label htmlFor="message">{copy.fields.message}</label><textarea id="message" maxLength={2000} name="message" /></div>
      </div>
      <label className="consent-row"><input aria-describedby={errors.consent ? "consent-error" : undefined} name="consent" required type="checkbox" /><span>{copy.consent} <Link className="text-link" href={localizedPath(locale, "privacy")}>{copy.privacyLink}</Link><FieldError name="consent" /></span></label>
      <button className="button-primary" disabled={status.kind === "loading"} type="submit"><span>{status.kind === "loading" ? copy.submitting : copy.submit}</span><span className="button-glyph"><ArrowRight /></span></button>
      {status.kind !== "idle" && status.kind !== "loading" && <div aria-live="polite" className="form-status" data-error={status.kind === "error"}><strong>{status.kind === "success" ? copy.successTitle : status.kind === "error" ? copy.errorTitle : ""}</strong>{status.message && <div>{status.message}</div>}</div>}
    </form>
  )
}
