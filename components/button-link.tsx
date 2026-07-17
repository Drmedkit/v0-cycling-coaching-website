import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "@/components/icons"

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "inverse" }) {
  return (
    <Link className={`button-${variant}`} href={href}>
      <span>{children}</span>
      <span className="button-glyph"><ArrowRight /></span>
    </Link>
  )
}
