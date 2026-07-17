import Image from "next/image"
import type { getCopy } from "@/lib/copy"

type Copy = ReturnType<typeof getCopy>

export function TestimonialGrid({ copy }: { copy: Copy }) {
  return (
    <div className="testimonial-grid">
      {copy.testimonials.map((item) => (
        <article className="testimonial-card" key={item.name}>
          <div className="testimonial-media"><Image alt={`${item.name}, ${item.role}`} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" src={item.image} style={{ objectFit: "cover", objectPosition: "center 28%" }} /></div>
          <div className="testimonial-copy">
            <blockquote>“{item.quote}”</blockquote>
            <div className="testimonial-footer"><span><strong>{item.name}</strong><br />{item.role}</span><span className="testimonial-stat"><strong>{item.stat}</strong>{item.statLabel}</span></div>
          </div>
        </article>
      ))}
    </div>
  )
}
