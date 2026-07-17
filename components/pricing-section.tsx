import { ButtonLink } from "@/components/button-link"
import { Check } from "@/components/icons"
import type { getCopy } from "@/lib/copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type Copy = ReturnType<typeof getCopy>

export function PricingSection({ locale, copy, compact = false }: { locale: Locale; copy: Copy; compact?: boolean }) {
  return (
    <div>
      {!compact && <p className="lede">{copy.packagesIntro}</p>}
      <div className="pricing-grid">
        {copy.packages.map((item, index) => {
          const packageId = ["basic", "premium", "pro"][index]
          return (
          <div className="price-bezel" data-featured={item.featured ?? false} key={item.name}>
            <article className="price-card">
              <h3>{item.name}</h3>
              <div className="price"><strong>{item.price}</strong><span>{copy.common.perMonth}</span></div>
              <p className="price-audience">{item.audience}</p>
              <ul className="feature-list">
                {item.features.map((feature) => <li key={feature}><Check /><span>{feature}</span></li>)}
              </ul>
              <ButtonLink href={`${localizedPath(locale, "contact")}?package=${packageId}`} variant={item.featured ? "primary" : "secondary"}>{copy.common.choosePackage}</ButtonLink>
            </article>
          </div>
          )
        })}
      </div>
      {!compact && <p className="package-note">{copy.packageNote}</p>}
    </div>
  )
}
