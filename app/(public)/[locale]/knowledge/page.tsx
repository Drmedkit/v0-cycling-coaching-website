import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/article-card"
import { ArrowRight } from "@/components/icons"
import { FinalCta } from "@/components/final-cta"
import { JsonLd } from "@/components/json-ld"
import { getArticles } from "@/lib/articles"
import { getCopy } from "@/lib/copy"
import { isLocale, localizedPath } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const copy = getCopy(locale).knowledge
  return pageMetadata(locale, "knowledge", copy.metaTitle, copy.metaDescription)
}

export default async function KnowledgePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale = value
  const copy = getCopy(locale)
  const articles = getArticles(locale)
  const featured = articles.find((article) => article.featured) ?? articles[0]
  const rest = articles.filter((article) => article.slug !== featured?.slug)

  return (
    <main id="main-content">
      <header className="page-hero grain">
        <div className="section-shell page-hero-grid"><div><p className="eyebrow">{copy.knowledge.eyebrow}</p><h1 className="page-title">{copy.knowledge.title}</h1></div><p className="lede">{copy.knowledge.lead}</p></div>
      </header>
      <section className="section-shell section-space">
        {featured && (
          <article className="knowledge-feature">
            <div className="knowledge-feature-media"><Image alt="Cyclists training on an open road" fill priority sizes="(max-width: 760px) 100vw, 58vw" src="/images/cycling-race.webp" style={{ objectFit: "cover" }} /></div>
            <div className="knowledge-feature-content"><span className="article-meta">{copy.knowledge.featured}</span><h2><Link href={localizedPath(locale, `knowledge/${featured.slug}`)}>{featured.title}</Link></h2><p>{featured.description}</p><Link className="button-inverse" href={localizedPath(locale, `knowledge/${featured.slug}`)}><span>{copy.common.readArticle}</span><span className="button-glyph"><ArrowRight /></span></Link></div>
          </article>
        )}
        <div style={{ marginTop: "clamp(5rem, 9vw, 8rem)" }}><p className="eyebrow">{copy.knowledge.all}</p><div className="article-grid">{rest.map((article) => <ArticleCard article={article} key={article.slug} locale={locale} minuteLabel={copy.common.minutes} readLabel={copy.common.readArticle} />)}</div></div>
      </section>
      <FinalCta copy={copy} locale={locale} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Tycho Coaching", item: `${site.url}${localizedPath(locale)}` }, { "@type": "ListItem", position: 2, name: copy.knowledge.title, item: `${site.url}${localizedPath(locale, "knowledge")}` }] }} />
    </main>
  )
}
