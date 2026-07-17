import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Clock } from "@/components/icons"
import { IntakeForm } from "@/components/intake-form"
import { JsonLd } from "@/components/json-ld"
import { getCopy } from "@/lib/copy"
import { isLocale, localizedPath } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const copy = getCopy(locale).contact
  return pageMetadata(locale, "contact", copy.metaTitle, copy.metaDescription)
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale = value
  const copy = getCopy(locale)
  return (
    <main className="contact-page" id="main-content">
      <section className="section-shell section-space contact-section">
        <div className="contact-layout">
          <aside className="contact-aside"><p className="eyebrow">{copy.contact.eyebrow}</p><h1>{copy.contact.title}</h1><p>{copy.contact.lead}</p><div className="response-note"><Clock />{copy.contact.response}</div><div className="contact-photo"><Image alt="Tycho Parmentier, cycling coach" fill priority sizes="(max-width: 760px) 100vw, 34vw" src="/images/coach-profile.webp" style={{ objectFit: "cover", objectPosition: "center 22%" }} /></div></aside>
          <IntakeForm copy={copy.contact} locale={locale} />
        </div>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Tycho Coaching", item: `${site.url}${localizedPath(locale)}` }, { "@type": "ListItem", position: 2, name: copy.nav.contact, item: `${site.url}${localizedPath(locale, "contact")}` }] }} />
    </main>
  )
}
