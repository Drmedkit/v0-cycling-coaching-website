import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FinalCta } from "@/components/final-cta"
import { Check } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { PricingSection } from "@/components/pricing-section"
import { Reveal } from "@/components/reveal"
import { TestimonialGrid } from "@/components/testimonial-grid"
import { getCopy } from "@/lib/copy"
import { isLocale, locales, localizedPath } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { isMarketingPage, marketingPages, site, type MarketingPage } from "@/lib/site"

const pageImages: Partial<Record<MarketingPage, { src: string; alt: string; position?: string }>> = {
  coaching: { src: "/images/cycling-race.webp", alt: "Cyclists racing together on an open road" },
  method: { src: "/images/hero-bg.webp", alt: "A group of cyclists climbing together" },
  "for-cyclists": { src: "/images/testimonial-jelle.webp", alt: "An ambitious cyclist outdoors", position: "center 30%" },
  about: { src: "/images/coach-portrait.webp", alt: "Tycho Parmentier outdoors", position: "center 36%" },
  results: { src: "/images/testimonial-max.webp", alt: "Max, an amateur cyclist coached by Tycho", position: "center 28%" },
  packages: { src: "/images/coach-profile.webp", alt: "Tycho Parmentier, cycling coach", position: "center 26%" },
  faq: { src: "/images/cycling-race.webp", alt: "Cyclists training together" },
}

export function generateStaticParams() {
  return locales.flatMap((locale) => marketingPages.map((page) => ({ locale, page })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; page: string }> }): Promise<Metadata> {
  const { locale, page } = await params
  if (!isLocale(locale) || !isMarketingPage(page)) return {}
  const copy = getCopy(locale).pages[page]
  return pageMetadata(locale, page, copy.metaTitle, copy.metaDescription, { noIndex: page === "terms" })
}

export default async function MarketingPageRoute({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale: localeValue, page: pageValue } = await params
  if (!isLocale(localeValue) || !isMarketingPage(pageValue)) notFound()
  const locale = localeValue
  const page = pageValue
  const siteCopy = getCopy(locale)
  const copy = siteCopy.pages[page]
  const heroImage = pageImages[page]
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Tycho Coaching", item: `${site.url}${localizedPath(locale)}` },
      { "@type": "ListItem", position: 2, name: copy.title, item: `${site.url}${localizedPath(locale, page)}` },
    ],
  }
  const schemas: Array<Record<string, unknown>> = [breadcrumb]

  if (page === "faq") {
    schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: siteCopy.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) })
  }
  if (page === "packages") {
    schemas.push({ "@context": "https://schema.org", "@type": "Service", name: "Personal cycling coaching", provider: { "@id": `${site.url}/#business` }, offers: siteCopy.packages.map((item) => ({ "@type": "Offer", name: item.name, price: item.price.replace("€", ""), priceCurrency: "EUR" })) })
  }

  return (
    <main id="main-content">
      <header className="page-hero" data-has-media={Boolean(heroImage)}>
        <div className="section-shell page-hero-grid">
          <div className="page-hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1 className="page-title">{copy.title}</h1><p className="lede">{copy.lead}</p></div>
          {heroImage && (
            <figure className="page-hero-media-bezel">
              <div className="page-hero-media"><Image alt={heroImage.alt} fill priority sizes="(max-width: 760px) 100vw, 42vw" src={heroImage.src} style={{ objectFit: "cover", objectPosition: heroImage.position ?? "center" }} /><figcaption><span>TYCHO / COACHING</span><span>{copy.eyebrow}</span></figcaption></div>
            </figure>
          )}
        </div>
      </header>

      <div className="page-body">
        <div className="section-shell">
          {copy.sections.map((section, index) => (
            <Reveal className="editorial-section" key={`${section.title}-${index}`}>
              <div className="editorial-kicker">{section.kicker ?? String(index + 1).padStart(2, "0")}</div>
              <div className="editorial-content">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul className="editorial-points">{section.points.map((point) => <li key={point}><Check /><span>{point}</span></li>)}</ul>}
              </div>
            </Reveal>
          ))}
        </div>

        {page === "results" && <section className="section-shell section-space"><TestimonialGrid copy={siteCopy} /></section>}
        {page === "packages" && <section className="section-shell section-space"><PricingSection copy={siteCopy} locale={locale} /></section>}
        {page === "faq" && (
          <section className="section-shell section-space">
            <div className="faq-list">
              {siteCopy.faq.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><div className="faq-answer">{item.answer}</div></details>)}
            </div>
          </section>
        )}
      </div>

      {page !== "privacy" && page !== "terms" && <FinalCta copy={siteCopy} locale={locale} />}
      <JsonLd data={schemas} />
    </main>
  )
}
