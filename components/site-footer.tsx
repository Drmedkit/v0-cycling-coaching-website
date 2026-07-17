import Image from "next/image"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { localizedPath } from "@/lib/i18n"
import type { getCopy } from "@/lib/copy"
import { site } from "@/lib/site"

type Copy = ReturnType<typeof getCopy>

export function SiteFooter({ locale, copy }: { locale: Locale; copy: Copy }) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href={localizedPath(locale)}>
            <span className="brand-mark"><Image alt="" height={42} src="/logo-mark.webp" width={42} /></span>
            <span>Tycho Coaching</span>
          </Link>
          <p>{copy.footer.statement}</p>
        </div>
        <div>
          <h2 className="footer-heading">{copy.footer.explore}</h2>
          <ul className="footer-links">
            <li><Link href={localizedPath(locale, "coaching")}>{copy.nav.coaching}</Link></li>
            <li><Link href={localizedPath(locale, "method")}>{copy.nav.method}</Link></li>
            <li><Link href={localizedPath(locale, "results")}>{copy.nav.results}</Link></li>
            <li><Link href={localizedPath(locale, "knowledge")}>{copy.nav.knowledge}</Link></li>
            <li><Link href={localizedPath(locale, "packages")}>{copy.nav.packages}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">{copy.footer.contact}</h2>
          <ul className="footer-links">
            <li><Link href={localizedPath(locale, "contact")}>{copy.nav.contact}</Link></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">{copy.footer.legal}</h2>
          <ul className="footer-links">
            <li><Link href={localizedPath(locale, "privacy")}>{copy.pages.privacy.eyebrow}</Link></li>
            <li><Link href={localizedPath(locale, "terms")}>{copy.nav.faq === "FAQ" ? "Terms" : copy.pages.terms.eyebrow.split(" · ")[0]}</Link></li>
            <li><Link href={localizedPath(locale, "faq")}>{copy.nav.faq}</Link></li>
          </ul>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Tycho Coaching. {copy.footer.rights}</span>
        <span>KVK {site.kvk} · {site.location}</span>
      </div>
    </footer>
  )
}
