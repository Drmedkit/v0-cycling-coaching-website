import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/article-card"
import { ButtonLink } from "@/components/button-link"
import { FinalCta } from "@/components/final-cta"
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
      <section className="hero grain">
        <div className="hero-media"><Image alt="Cyclists climbing together on an open road" fill priority sizes="100vw" src="/images/hero-bg.webp" style={{ objectFit: "cover" }} /></div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1 className="display-title">{copy.home.title}</h1>
          <p className="hero-lede">{copy.home.lead}</p>
          <div className="hero-actions">
            <ButtonLink href={localizedPath(locale, "contact")}>{copy.home.primaryCta}</ButtonLink>
            <ButtonLink href={localizedPath(locale, "coaching")} variant="inverse">{copy.home.secondaryCta}</ButtonLink>
          </div>
        </div>
      </section>

      <aside aria-label="Coaching credentials" className="proof-strip">
        <ul className="section-shell proof-list">{copy.home.proof.map((item) => <li key={item}>{item}</li>)}</ul>
      </aside>

      <section className="section-space">
        <div className="section-shell">
          <Reveal className="split-heading">
            <div><p className="eyebrow">{copy.home.cardsEyebrow}</p><h2 className="section-title">{copy.home.cardsTitle}</h2></div>
            <p className="lede">{copy.home.cardsLead}</p>
          </Reveal>
          <div className="feature-grid">
            {copy.home.cards.map((card) => (
              <Link className="feature-card" href={localizedPath(locale, card.href)} key={card.number}>
                <Image alt="" fill sizes="(max-width: 760px) 100vw, 55vw" src={card.image} style={{ objectFit: "cover" }} />
                <div className="feature-card-content">
                  <span className="feature-number">{card.number}</span>
                  <div><h3>{card.title}</h3><p>{card.body}</p></div>
                  <span className="round-link"><ArrowUpRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section grain">
        <div className="section-shell section-space">
          <Reveal>
            <p className="eyebrow">{copy.home.processEyebrow}</p>
            <h2 className="section-title">{copy.home.processTitle}</h2>
          </Reveal>
          <div className="process-grid">
            {copy.home.process.map((step) => <article className="process-step" key={step.number}><span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell quote-layout">
          <Reveal className="quote-image"><Image alt="Max, an amateur cyclist coached by Tycho" fill sizes="(max-width: 760px) 100vw, 42vw" src="/images/testimonial-max.webp" style={{ objectFit: "cover", objectPosition: "center 28%" }} /></Reveal>
          <Reveal>
            <p className="eyebrow">{copy.home.resultEyebrow}</p>
            <h2 className="section-title">{copy.home.resultTitle}</h2>
            <div className="quote-mark">“</div>
            <blockquote className="quote-text">{copy.home.resultQuote}</blockquote>
            <p className="quote-person"><span><strong>{copy.home.resultName}</strong><br />{copy.home.resultRole}</span></p>
            <Link className="text-link" href={localizedPath(locale, "results")}>{copy.nav.results}<ArrowUpRight /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-space" style={{ background: "var(--cream)" }}>
        <div className="section-shell">
          <Reveal><p className="eyebrow">{copy.home.packagesEyebrow}</p><h2 className="section-title">{copy.home.packagesTitle}</h2></Reveal>
          <PricingSection compact copy={copy} locale={locale} />
        </div>
      </section>

      {articles.length > 0 && (
        <section className="section-space">
          <div className="section-shell">
            <Reveal className="split-heading"><div><p className="eyebrow">{copy.home.knowledgeEyebrow}</p><h2 className="section-title">{copy.home.knowledgeTitle}</h2></div><div><p className="lede">{copy.home.knowledgeLead}</p><Link className="text-link" href={localizedPath(locale, "knowledge")}>{copy.common.viewAll}<ArrowUpRight /></Link></div></Reveal>
            <div className="article-grid">{articles.map((article) => <ArticleCard article={article} key={article.slug} locale={locale} minuteLabel={copy.common.minutes} readLabel={copy.common.readArticle} />)}</div>
          </div>
        </section>
      )}

      <FinalCta copy={copy} locale={locale} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${site.url}/#coaching`, name: "Personal online cycling coaching", provider: { "@id": `${site.url}/#business` }, areaServed: "Worldwide", offers }} />
    </main>
  )
}
