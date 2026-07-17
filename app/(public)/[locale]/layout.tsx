import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Archivo, Manrope } from "next/font/google"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"
import "@/app/globals.css"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getCopy } from "@/lib/copy"
import { isLocale, locales } from "@/lib/i18n"
import { site } from "@/lib/site"

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  authors: [{ name: site.author, url: site.url }],
  creator: site.author,
  icons: { icon: `${site.url}/logo-mark.webp`, apple: `${site.url}/logo-mark.webp` },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale = value
  const copy = getCopy(locale)
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site.url}/#tycho-parmentier`,
      name: site.author,
      jobTitle: "Cycling coach and movement scientist",
      url: site.url,
      image: `${site.url}/images/coach-portrait.webp`,
      email: site.email,
      knowsAbout: ["Cycling coaching", "Exercise physiology", "Critical Power", "Training load"],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Vrije Universiteit Amsterdam" },
      affiliation: { "@type": "CollegeOrUniversity", name: "Norwegian University of Science and Technology" },
    },
    {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "SportsActivityLocation"],
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneDisplay,
      image: `${site.url}/og-image.png`,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressLocality: "Trondheim", addressCountry: "NO" },
      founder: { "@id": `${site.url}/#tycho-parmentier` },
      priceRange: "€89–€209 per month",
    },
  ]

  return (
    <html className={`${archivo.variable} ${manrope.variable}`} lang={locale}>
      <body>
        <a className="skip-link" href="#main-content">{copy.skip}</a>
        <SiteHeader intake={copy.common.intake} labels={copy.nav} languageLabel={copy.languageLabel} locale={locale} menuLabels={{ open: copy.common.openMenu, close: copy.common.closeMenu }} />
        {children}
        <SiteFooter copy={copy} locale={locale} />
        <JsonLd data={schema} />
        {process.env.VERCEL && <Analytics />}
        {process.env.VERCEL && <SpeedInsights />}
      </body>
    </html>
  )
}
