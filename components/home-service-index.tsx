"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "@/components/icons"
import { localizedPath, type Locale } from "@/lib/i18n"

type ServiceCard = {
  href: string
  number: string
  title: string
  body: string
  image: string
}

export function HomeServiceIndex({ cards, locale }: { cards: ServiceCard[]; locale: Locale }) {
  const [active, setActive] = useState(0)

  return (
    <div className="service-index">
      <div aria-hidden="true" className="service-stage-bezel">
        <div className="service-stage">
          {cards.map((card, index) => (
            <Image
              alt=""
              data-active={active === index}
              fill
              key={card.number}
              sizes="(max-width: 900px) 0px, 52vw"
              src={card.image}
              style={{ objectFit: "cover" }}
            />
          ))}
          <div className="service-stage-meta">
            <span>TYCHO / COACHING</span>
            <span>{cards[active]?.number} / {String(cards.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="service-list">
        {cards.map((card, index) => (
          <Link
            className="service-item"
            data-active={active === index}
            href={localizedPath(locale, card.href)}
            key={card.number}
            onFocus={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <div className="service-item-media">
              <Image alt="" fill sizes="100vw" src={card.image} style={{ objectFit: "cover" }} />
            </div>
            <span className="service-number">{card.number}</span>
            <div className="service-item-copy">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
            <span className="service-arrow"><ArrowUpRight /></span>
          </Link>
        ))}
      </div>
    </div>
  )
}
