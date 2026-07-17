import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const locales = ["en", "nl", "no"] as const
const required = ["title", "description", "category", "date", "updated", "readingTime", "featured", "translationStatus"]
const root = path.join(process.cwd(), "content", "knowledge")
const errors: string[] = []
const slugSets = new Map<string, Set<string>>()

for (const locale of locales) {
  const directory = path.join(root, locale)
  const files = fs.existsSync(directory) ? fs.readdirSync(directory).filter((file) => file.endsWith(".mdx")).sort() : []
  slugSets.set(locale, new Set(files.map((file) => file.replace(/\.mdx$/, ""))))
  if (files.length !== 6) errors.push(`${locale}: expected 6 articles, found ${files.length}`)

  let featured = 0
  for (const file of files) {
    const source = fs.readFileSync(path.join(directory, file), "utf8")
    const { data, content } = matter(source)
    for (const field of required) if (data[field] === undefined) errors.push(`${locale}/${file}: missing ${field}`)
    if (data.featured === true) featured += 1
    if (String(data.title ?? "").length < 20) errors.push(`${locale}/${file}: title is too short`)
    if (String(data.description ?? "").length < 80) errors.push(`${locale}/${file}: description is too short`)
    if (content.trim().length < 2500) errors.push(`${locale}/${file}: article body is too short`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.updated))) errors.push(`${locale}/${file}: invalid updated date`)
    if (locale !== "en" && data.translationStatus !== "draft-native-review") errors.push(`${locale}/${file}: translation review status is missing`)
  }
  if (featured !== 1) errors.push(`${locale}: expected exactly one featured article, found ${featured}`)
}

const sourceSlugs = slugSets.get("en") ?? new Set<string>()
for (const locale of locales.slice(1)) {
  const translated = slugSets.get(locale) ?? new Set<string>()
  for (const slug of sourceSlugs) if (!translated.has(slug)) errors.push(`${locale}: missing translation for ${slug}`)
  for (const slug of translated) if (!sourceSlugs.has(slug)) errors.push(`${locale}: unexpected article ${slug}`)
}

if (errors.length > 0) {
  console.error(`Content validation failed:\n- ${errors.join("\n- ")}`)
  process.exit(1)
}

console.log("Content validation passed: 18 articles across 3 locales.")
