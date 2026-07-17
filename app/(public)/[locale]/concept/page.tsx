import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google"
import { notFound } from "next/navigation"
import { FieldManualNav } from "@/components/concept/field-manual-nav"
import { MethodStory, type MethodStep } from "@/components/concept/method-story"
import styles from "@/components/concept/field-manual.module.css"
import { ArrowRight, ArrowUpRight } from "@/components/icons"
import { getCopy } from "@/lib/copy"
import { site } from "@/lib/site"

const instrumentSans = Instrument_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--concept-sans",
})

const instrumentSerif = Instrument_Serif({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--concept-serif",
  weight: "400",
})

const plexMono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--concept-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Field manual concept",
  description: "A private art-direction concept for Tycho Coaching.",
  robots: { follow: false, index: false },
}

const navItems = [
  { href: "/en/coaching", key: "coaching" },
  { href: "/en/method", key: "method" },
  { href: "/en/for-cyclists", key: "cyclists" },
  { href: "/en/about", key: "about" },
  { href: "/en/knowledge", key: "knowledge" },
  { href: "/en/packages", key: "packages" },
  { href: "/en/contact", key: "contact" },
] as const

const methodImages = [
  {
    alt: "Cyclists riding closely together on an open road",
    image: "/images/cycling-race.webp",
    label: "Context / baseline",
  },
  {
    alt: "Tycho Parmentier riding a road bike",
    image: "/images/coach-profile.webp",
    label: "Direction / load",
  },
  {
    alt: "A long group of cyclists climbing through a green landscape",
    image: "/images/hero-bg.webp",
    label: "Review / adapt",
  },
] as const

export default async function ConceptPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== "en") notFound()

  const copy = getCopy("en")
  const methods: MethodStep[] = copy.home.process.map((step, index) => ({
    ...step,
    ...methodImages[index],
  }))

  return (
    <main
      className={`${styles.page} concept-page ${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
      id="main-content"
    >
      <FieldManualNav
        intakeLabel={copy.common.intake}
        items={navItems.map((item) => ({ href: item.href, label: copy.nav[item.key] }))}
      />

      <section aria-labelledby="concept-hero-title" className={styles.hero}>
        <div className={styles.heroVisual}>
          <Image
            alt="A long group of cyclists climbing through a vivid green landscape"
            fill
            priority
            quality={92}
            sizes="100vw"
            src="/images/hero-bg.webp"
          />
        </div>
        <div aria-hidden="true" className={styles.heroScrim} />
        <div aria-hidden="true" className={styles.heroCurtain} />

        <div className={styles.heroFrame}>
          <div className={styles.heroTopline}>
            <p>{copy.home.eyebrow}</p>
            <p>Field notes / No. 001</p>
          </div>

          <div className={styles.heroTitleWrap}>
            <p className={styles.heroCoordinate}>63° 25′ N<br />10° 24′ E</p>
            <h1 aria-label={copy.home.title} id="concept-hero-title">
              <span aria-hidden="true"><span>Turn your ambition</span></span>
              <span aria-hidden="true"><span>into better days</span></span>
              <span aria-hidden="true"><span>on the bike.</span></span>
            </h1>
          </div>

          <div className={styles.heroBottom}>
            <p className={styles.heroLead}>{copy.home.lead}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/en/contact">
                <span>{copy.home.primaryCta}</span>
                <span className={styles.actionGlyph}><ArrowUpRight /></span>
              </Link>
              <Link className={styles.textAction} href="/en/coaching">
                <span>{copy.home.secondaryCta}</span>
                <ArrowRight />
              </Link>
            </div>
            <div className={styles.heroProof}>
              {copy.home.proof.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a aria-label="Continue to the premise" className={styles.scrollMarker} href="#premise">
          <span>Scroll</span>
          <span aria-hidden="true" />
        </a>
      </section>

      <section aria-labelledby="premise-title" className={styles.premise} id="premise">
        <div className={styles.sectionFrame}>
          <div className={styles.sectionIndex}>
            <span>01</span>
            <span>Premise</span>
            <span>Why coaching</span>
          </div>

          <div className={styles.premiseHeading}>
            <h2 aria-label={copy.home.cardsTitle} id="premise-title">
              <span aria-hidden="true">More than a schedule</span>
              <span aria-hidden="true">in your calendar.</span>
            </h2>
            <p>{copy.home.cardsLead}</p>
          </div>

          <figure className={styles.premiseImage}>
            <Image
              alt="Cyclists working together in a close group"
              fill
              sizes="(min-width: 768px) 88vw, 100vw"
              src="/images/cycling-race.webp"
            />
            <figcaption>
              <span>Physiology</span>
              <span>Training data</span>
              <span>Real life</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="method-title" className={styles.method} id="method-story">
        <div className={styles.methodIntroduction}>
          <div className={styles.sectionIndexLight}>
            <span>02</span>
            <span>Method</span>
            <span>Adaptive by design</span>
          </div>
          <div>
            <p className={styles.methodEyebrow}>{copy.home.processEyebrow}</p>
            <h2 id="method-title">{copy.home.processTitle}</h2>
          </div>
          <p>Training becomes useful when every decision has context—and when the plan is allowed to change with the rider.</p>
        </div>
        <MethodStory steps={methods} />
      </section>

      <section aria-labelledby="result-title" className={styles.result}>
        <div className={styles.resultImage}>
          <Image
            alt="Max, an amateur cyclist coached by Tycho"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            src="/images/testimonial-max.webp"
          />
          <span>Rider 03 / Max</span>
        </div>
        <div className={styles.resultCopy}>
          <div className={styles.sectionIndex}>
            <span>03</span>
            <span>Rider proof</span>
            <span>Structure → confidence</span>
          </div>
          <p className={styles.resultEyebrow}>{copy.home.resultEyebrow}</p>
          <h2 id="result-title">“{copy.home.resultQuote}”</h2>
          <div className={styles.resultAttribution}>
            <p><strong>{copy.home.resultName}</strong><span>{copy.home.resultRole}</span></p>
            <Link className={styles.textActionDark} href="/en/results">
              <span>Read rider stories</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="closing-title" className={styles.closing}>
        <div className={styles.closingImage}>
          <Image alt="Cyclists racing together on an open road" fill sizes="100vw" src="/images/cycling-race.webp" />
        </div>
        <div aria-hidden="true" className={styles.closingWash} />
        <div className={styles.closingInner}>
          <p className={styles.closingLabel}>Start point / One honest conversation</p>
          <h2 id="closing-title">{copy.home.finalTitle}</h2>
          <div className={styles.closingFoot}>
            <p>{copy.home.finalBody}</p>
            <Link className={styles.primaryActionLight} href="/en/contact">
              <span>{copy.common.intake}</span>
              <span className={styles.actionGlyphDark}><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.manualFooter}>
        <div className={styles.manualFooterBrand}>
          <Image alt="" height={34} src="/logo-mark.webp" width={34} />
          <span>Tycho Coaching</span>
        </div>
        <p>Field manual concept / 01</p>
        <p>Trondheim, Norway</p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <Link href="/en">View current website <ArrowUpRight /></Link>
      </footer>
    </main>
  )
}
