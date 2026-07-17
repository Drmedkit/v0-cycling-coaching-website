import type { Metadata } from "next"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/article-card"
import { ArrowRight } from "@/components/icons"
import { FinalCta } from "@/components/final-cta"
import { JsonLd } from "@/components/json-ld"
import { getArticle, getArticles } from "@/lib/articles"
import { getCopy } from "@/lib/copy"
import { isLocale, locales, localizedPath } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return locales.flatMap((locale) => getArticles(locale).map((article) => ({ locale, slug: article.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const article = getArticle(locale, slug)
  if (!article) return {}
  const base = pageMetadata(locale, `knowledge/${slug}`, article.title, article.description, { article: true })
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: article.date, modifiedTime: article.updated, authors: [site.author] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params
  if (!isLocale(value)) notFound()
  const locale = value
  const article = getArticle(locale, slug)
  if (!article) notFound()
  const copy = getCopy(locale)
  const related = getArticles(locale).filter((item) => item.slug !== slug).slice(0, 3)
  const articleUrl = `${site.url}${localizedPath(locale, `knowledge/${slug}`)}`
  const schema = [
    { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.date, dateModified: article.updated, inLanguage: locale, mainEntityOfPage: articleUrl, author: { "@id": `${site.url}/#tycho-parmentier` }, publisher: { "@id": `${site.url}/#business` }, image: `${site.url}/og-image.png` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Tycho Coaching", item: `${site.url}${localizedPath(locale)}` }, { "@type": "ListItem", position: 2, name: copy.knowledge.title, item: `${site.url}${localizedPath(locale, "knowledge")}` }, { "@type": "ListItem", position: 3, name: article.title, item: articleUrl }] },
  ]

  return (
    <main id="main-content">
      <header className="article-hero grain">
        <div className="section-shell article-hero-inner">
          <Link className="text-link" href={localizedPath(locale, "knowledge")}>← {copy.common.backToKnowledge}</Link>
          <div className="article-meta" style={{ marginTop: "3rem", justifyContent: "flex-start" }}><span>{article.category}</span><span>{article.readingTime} {copy.common.minutes}</span></div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          <div className="article-byline"><span>{site.author}</span><time dateTime={article.updated}>{copy.common.updated} {new Intl.DateTimeFormat(locale === "no" ? "nb-NO" : locale, { dateStyle: "long" }).format(new Date(article.updated))}</time></div>
        </div>
      </header>
      <article className="prose-shell"><MDXRemote source={article.content} /></article>
      {related.length > 0 && <section className="section-shell section-space"><p className="eyebrow">{copy.knowledge.all}</p><div className="article-grid">{related.map((item, index) => <ArticleCard article={item} index={index + 1} key={item.slug} locale={locale} minuteLabel={copy.common.minutes} readLabel={copy.common.readArticle} />)}</div><Link className="text-link related-all-link" href={localizedPath(locale, "knowledge")}>{copy.common.viewAll}<ArrowRight /></Link></section>}
      <FinalCta copy={copy} locale={locale} />
      <JsonLd data={schema} />
    </main>
  )
}
