import { ButtonLink } from "@/components/button-link"
import type { getCopy } from "@/lib/copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type Copy = ReturnType<typeof getCopy>

export function FinalCta({ locale, copy }: { locale: Locale; copy: Copy }) {
  return (
    <section className="final-cta grain">
      <div className="section-shell section-space final-cta-inner">
        <div>
          <h2 className="section-title">{copy.home.finalTitle}</h2>
          <p>{copy.home.finalBody}</p>
        </div>
        <ButtonLink href={localizedPath(locale, "contact")} variant="inverse">{copy.common.intake}</ButtonLink>
      </div>
    </section>
  )
}
