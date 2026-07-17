import type { Locale } from "@/lib/i18n"

export const site = {
  name: "Tycho Coaching",
  url: "https://www.tychocoaching.com",
  email: "tychocoach@gmail.com",
  phoneDisplay: "+31 6 47528472",
  phoneHref: "+31647528472",
  location: "Trondheim, Norway",
  kvk: "97624195",
  author: "Tycho Parmentier",
} as const

export const marketingPages = [
  "coaching",
  "method",
  "for-cyclists",
  "about",
  "results",
  "packages",
  "faq",
  "privacy",
  "terms",
] as const

export type MarketingPage = (typeof marketingPages)[number]

export function isMarketingPage(value: string): value is MarketingPage {
  return marketingPages.includes(value as MarketingPage)
}

export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  nl: "nl_NL",
  no: "nb_NO",
}
