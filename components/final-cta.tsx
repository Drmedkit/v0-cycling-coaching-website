import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import type { getCopy } from "@/lib/copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type Copy = ReturnType<typeof getCopy>

export function FinalCta({ locale, copy }: { locale: Locale; copy: Copy }) {
  return (
    <section className="final-cta">
      <div className="final-cta-media"><Image alt="Cyclists moving through a green landscape" fill sizes="(max-width: 760px) 100vw, 52vw" src="/images/cycling-race.webp" style={{ objectFit: "cover" }} /></div>
      <div className="section-shell final-cta-inner">
        <div>
          <h2 className="section-title">{copy.home.finalTitle}</h2>
          <p>{copy.home.finalBody}</p>
        </div>
        <ButtonLink href={localizedPath(locale, "contact")} variant="inverse">{copy.common.intake}</ButtonLink>
      </div>
    </section>
  )
}
