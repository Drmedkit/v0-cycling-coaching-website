import type { MetadataRoute } from "next"
import { getArticles } from "@/lib/articles"
import { locales, localizedPath } from "@/lib/i18n"
import { marketingPages, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", ...marketingPages.filter((page) => page !== "terms"), "knowledge", "contact"]
  const staticEntries = locales.flatMap((locale) => staticPaths.map((path) => ({ url: `${site.url}${localizedPath(locale, path)}`, lastModified: new Date("2026-07-17"), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "knowledge" ? 0.8 : 0.7 })))
  const articleEntries = locales.flatMap((locale) => getArticles(locale).map((article) => ({ url: `${site.url}${localizedPath(locale, `knowledge/${article.slug}`)}`, lastModified: new Date(article.updated), changeFrequency: "monthly" as const, priority: 0.65 })))
  return [...staticEntries, ...articleEntries]
}
