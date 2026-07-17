import Link from "next/link"
import { ArrowRight } from "@/components/icons"
import type { ArticleMeta } from "@/lib/articles"
import { localizedPath, type Locale } from "@/lib/i18n"

export function ArticleCard({ article, locale, readLabel, minuteLabel }: { article: ArticleMeta; locale: Locale; readLabel: string; minuteLabel: string }) {
  return (
    <article className="article-card">
      <div className="article-meta"><span>{article.category}</span><span>{article.readingTime} {minuteLabel}</span></div>
      <h3><Link href={localizedPath(locale, `knowledge/${article.slug}`)}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link className="text-link" href={localizedPath(locale, `knowledge/${article.slug}`)}>{readLabel}<ArrowRight /></Link>
    </article>
  )
}
