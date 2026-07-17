export const locales = ["en", "nl", "no"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  no: "Norsk",
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function assertLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale
}

export function localizedPath(locale: Locale, path = "") {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  return `/${locale}${normalized}`
}

export function swapLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/")
  if (isLocale(segments[1] ?? "")) segments[1] = locale
  else segments.splice(1, 0, locale)
  return segments.join("/") || `/${locale}`
}
