import Link from "next/link"
import { ArrowRight } from "@/components/icons"
import type { ArticleMeta } from "@/lib/articles"
import { localizedPath, type Locale } from "@/lib/i18n"

export function ArticleCard({ article, locale, readLabel, minuteLabel, index }: { article: ArticleMeta; locale: Locale; readLabel: string; minuteLabel: string; index?: number }) {
  return (
    <article className="article-card">
      <span aria-hidden="true" className="article-index">{String(index ?? 1).padStart(2, "0")}</span>
      <div className="article-meta"><span>{article.category}</span><span>{article.readingTime} {minuteLabel}</span></div>
      <div className="article-card-copy"><h3><Link href={localizedPath(locale, `knowledge/${article.slug}`)}>{article.title}</Link></h3><p>{article.description}</p></div>
      <Link className="text-link" href={localizedPath(locale, `knowledge/${article.slug}`)}>{readLabel}<ArrowRight /></Link>
    </article>
  )
}
