import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/article-card"
import { ButtonLink } from "@/components/button-link"
import { FinalCta } from "@/components/final-cta"
import { HomeServiceIndex } from "@/components/home-service-index"
import { ArrowUpRight } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { PricingSection } from "@/components/pricing-section"
import { Reveal } from "@/components/reveal"
import { getArticles } from "@/lib/articles"
import { getCopy } from "@/lib/copy"
import { isLocale, localizedPath } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const copy = getCopy(locale)
  return pageMetadata(locale, "", copy.home.metaTitle, copy.home.metaDescription)
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale = value
  const copy = getCopy(locale)
  const articles = getArticles(locale).slice(0, 3)
  const offers = copy.packages.map((item) => ({ "@type": "Offer", name: item.name, price: item.price.replace("€", ""), priceCurrency: "EUR", url: `${site.url}${localizedPath(locale, "packages")}` }))

  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="section-shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1 className="display-title">{copy.home.title}</h1>
            <div className="home-hero-intro">
              <p className="hero-lede">{copy.home.lead}</p>
              <div className="hero-actions">
                <ButtonLink href={localizedPath(locale, "contact")}>{copy.home.primaryCta}</ButtonLink>
                <ButtonLink href={localizedPath(locale, "coaching")} variant="secondary">{copy.home.secondaryCta}</ButtonLink>
              </div>
            </div>
          </div>
          <figure className="hero-visual-bezel">
            <div className="hero-visual">
              <Image alt="Cyclists climbing together on an open road" fill priority sizes="(max-width: 760px) 100vw, 42vw" src="/images/hero-bg.webp" style={{ objectFit: "cover" }} />
              <figcaption className="hero-visual-meta"><span>TYCHO / COACHING</span><span>EST. 2024</span></figcaption>
            </div>
          </figure>
        </div>
        <aside aria-label="Coaching credentials" className="proof-strip">
          <ul className="section-shell proof-list">{copy.home.proof.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
        </aside>
      </section>

      <section className="section-space service-section">
        <div className="section-shell">
          <Reveal className="split-heading">
            <div><p className="eyebrow">{copy.home.cardsEyebrow}</p><h2 className="section-title">{copy.home.cardsTitle}</h2></div>
            <p className="lede">{copy.home.cardsLead}</p>
          </Reveal>
          <HomeServiceIndex cards={copy.home.cards} locale={locale} />
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell section-space process-layout">
          <Reveal className="process-heading">
            <p className="eyebrow">{copy.home.processEyebrow}</p>
            <h2 className="section-title">{copy.home.processTitle}</h2>
          </Reveal>
          <ol className="process-list">
            {copy.home.process.map((step) => (
              <li className="process-step" key={step.number}>
                <span className="process-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space story-section">
        <div className="section-shell quote-layout">
          <Reveal className="quote-image-bezel">
            <figure className="quote-image">
              <Image alt="Max, an amateur cyclist coached by Tycho" fill sizes="(max-width: 760px) 100vw, 42vw" src="/images/testimonial-max.webp" style={{ objectFit: "cover", objectPosition: "center 28%" }} />
              <figcaption><strong>{copy.home.resultName}</strong><span>{copy.home.resultRole}</span></figcaption>
            </figure>
          </Reveal>
          <Reveal className="quote-copy">
            <p className="eyebrow">{copy.home.resultEyebrow}</p>
            <h2 className="section-title">{copy.home.resultTitle}</h2>
            <blockquote className="quote-text">“{copy.home.resultQuote}”</blockquote>
            <Link className="text-link" href={localizedPath(locale, "results")}>{copy.nav.results}<ArrowUpRight /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-space packages-section">
        <div className="section-shell">
          <Reveal className="split-heading package-heading"><div><p className="eyebrow">{copy.home.packagesEyebrow}</p><h2 className="section-title">{copy.home.packagesTitle}</h2></div><p className="lede">{copy.packagesIntro}</p></Reveal>
          <PricingSection compact copy={copy} locale={locale} />
        </div>
      </section>

      {articles.length > 0 && (
        <section className="section-space knowledge-home">
          <div className="section-shell">
            <Reveal className="split-heading"><div><p className="eyebrow">{copy.home.knowledgeEyebrow}</p><h2 className="section-title">{copy.home.knowledgeTitle}</h2></div><div><p className="lede">{copy.home.knowledgeLead}</p><Link className="text-link" href={localizedPath(locale, "knowledge")}>{copy.common.viewAll}<ArrowUpRight /></Link></div></Reveal>
            <div className="article-grid">{articles.map((article, index) => <ArticleCard article={article} index={index + 1} key={article.slug} locale={locale} minuteLabel={copy.common.minutes} readLabel={copy.common.readArticle} />)}</div>
          </div>
        </section>
      )}

      <FinalCta copy={copy} locale={locale} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${site.url}/#coaching`, name: "Personal online cycling coaching", provider: { "@id": `${site.url}/#business` }, areaServed: "Worldwide", offers }} />
    </main>
  )
}
