"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, MenuIcon } from "@/components/icons"
import { localeNames, locales, localizedPath, swapLocale, type Locale } from "@/lib/i18n"

type HeaderLabels = {
  coaching: string
  method: string
  cyclists: string
  about: string
  knowledge: string
  packages: string
  contact: string
}

export function SiteHeader({ locale, labels, languageLabel, intake, menuLabels }: { locale: Locale; labels: HeaderLabels; languageLabel: string; intake: string; menuLabels: { open: string; close: string } }) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const nav = [
    ["coaching", labels.coaching],
    ["method", labels.method],
    ["for-cyclists", labels.cyclists],
    ["about", labels.about],
    ["knowledge", labels.knowledge],
    ["packages", labels.packages],
  ] as const

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", close)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", close)
    }
  }, [open])

  return (
    <>
      <div className="site-header-wrap">
        <header className="site-header">
          <Link aria-label="Tycho Coaching home" className="brand" href={localizedPath(locale)}>
            <span className="brand-mark">
              <Image alt="" height={42} priority src="/logo-mark.webp" width={42} />
            </span>
            <span>Tycho Coaching</span>
          </Link>

          <nav aria-label="Primary" className="desktop-nav">
            {nav.map(([path, label]) => {
              const href = localizedPath(locale, path)
              const active = pathname === href || (path === "knowledge" && pathname.startsWith(`${href}/`))
              return <Link aria-current={active ? "page" : undefined} className="nav-link" href={href} key={path}>{label}</Link>
            })}
          </nav>

          <div className="header-actions">
            <label className="sr-only" htmlFor="site-language">{languageLabel}</label>
            <select
              aria-label={languageLabel}
              className="language-select"
              id="site-language"
              onChange={(event) => router.push(swapLocale(pathname, event.target.value as Locale))}
              value={locale}
            >
              {locales.map((item) => <option key={item} value={item}>{localeNames[item]}</option>)}
            </select>
            <Link className="button-primary header-cta" href={localizedPath(locale, "contact")}>
              <span>{intake}</span>
              <span className="button-glyph"><ArrowRight /></span>
            </Link>
            <button aria-expanded={open} aria-label={open ? menuLabels.close : menuLabels.open} className="menu-toggle" onClick={() => setOpen((value) => !value)} type="button">
              <MenuIcon open={open} />
            </button>
          </div>
        </header>
      </div>

      <div aria-hidden={!open} className="mobile-panel" data-open={open}>
        <nav aria-label="Mobile" className="mobile-nav">
          {nav.map(([path, label], index) => (
            <Link href={localizedPath(locale, path)} key={path}><span>{label}</span><small>{String(index + 1).padStart(2, "0")}</small></Link>
          ))}
          <Link href={localizedPath(locale, "contact")}><span>{labels.contact}</span><small>07</small></Link>
        </nav>
      </div>
    </>
  )
}
