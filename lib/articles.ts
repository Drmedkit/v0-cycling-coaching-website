import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import type { Locale } from "@/lib/i18n"

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  updated: string
  readingTime: number
  featured?: boolean
}

export type Article = ArticleMeta & { content: string }

const contentRoot = path.join(process.cwd(), "content", "knowledge")

function parseArticle(locale: Locale, filename: string): Article {
  const slug = filename.replace(/\.mdx$/, "")
  const source = fs.readFileSync(path.join(contentRoot, locale, filename), "utf8")
  const { data, content } = matter(source)
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    category: String(data.category),
    date: String(data.date),
    updated: String(data.updated ?? data.date),
    readingTime: Number(data.readingTime),
    featured: Boolean(data.featured),
    content,
  }
}

export function getArticles(locale: Locale): ArticleMeta[] {
  const directory = path.join(contentRoot, locale)
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => parseArticle(locale, filename))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      category: article.category,
      date: article.date,
      updated: article.updated,
      readingTime: article.readingTime,
      featured: article.featured,
    }))
}

export function getArticle(locale: Locale, slug: string): Article | null {
  const filename = `${slug}.mdx`
  const file = path.join(contentRoot, locale, filename)
  return fs.existsSync(file) ? parseArticle(locale, filename) : null
}
