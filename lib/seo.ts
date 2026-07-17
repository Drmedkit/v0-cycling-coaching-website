import type { Metadata } from "next"
import { locales, localizedPath, type Locale } from "@/lib/i18n"
import { ogLocales, site } from "@/lib/site"

export function pageMetadata(locale: Locale, path: string, title: string, description: string, options?: { article?: boolean; noIndex?: boolean }): Metadata {
  const canonicalPath = localizedPath(locale, path)
  const canonical = `${site.url}${canonicalPath}`
  const languageAlternates = Object.fromEntries(locales.map((item) => [item, `${site.url}${localizedPath(item, path)}`]))

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languageAlternates, "x-default": `${site.url}${localizedPath("en", path)}` },
    },
    robots: options?.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: options?.article ? "article" : "website",
      url: canonical,
      siteName: site.name,
      title,
      description,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => ogLocales[item]),
      images: [{ url: `${site.url}/og-image.png`, width: 1200, height: 630, alt: `${site.name} — ${title}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${site.url}/og-image.png`] },
  }
}
