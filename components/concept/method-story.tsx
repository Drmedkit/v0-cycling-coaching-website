"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "@/components/concept/field-manual.module.css"

export type MethodStep = {
  alt: string
  body: string
  image: string
  label: string
  number: string
  title: string
}

export function MethodStory({ steps }: { steps: MethodStep[] }) {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return
        const index = Number((visible.target as HTMLElement).dataset.step)
        if (Number.isFinite(index)) setActiveStep(index)
      },
      { rootMargin: "-32% 0px -48%", threshold: [0.05, 0.2, 0.5, 0.8] },
    )

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.methodLayout}>
      <div aria-hidden="true" className={styles.methodStage}>
        <div className={styles.methodStageFrame}>
          {steps.map((step, index) => (
            <div className={styles.methodStageImage} data-active={activeStep === index} key={step.number}>
              <Image alt="" fill sizes="(min-width: 768px) 58vw, 100vw" src={step.image} />
            </div>
          ))}
          <div className={styles.methodStageTint} />
          <div className={styles.methodInstrument}>
            <div className={styles.instrumentHead}>
              <span>System / adaptive coaching</span>
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
            </div>
            <svg fill="none" role="presentation" viewBox="0 0 640 230">
              <path d="M0 173C67 173 76 144 128 144s66 18 109 18c55 0 64-100 124-100 47 0 59 68 105 68 45 0 56-35 89-35 35 0 42 25 85 25" />
              <path d="M0 192h640M128 30v173M361 30v173M555 30v173" className={styles.instrumentGrid} />
              <circle cx="128" cy="144" r="5" />
              <circle cx="361" cy="62" r="5" />
              <circle cx="555" cy="95" r="5" />
            </svg>
            <div className={styles.instrumentLabels}>
              <span>Context</span>
              <span>Direction</span>
              <span>Adaptation</span>
            </div>
          </div>
          <p className={styles.methodStageCaption}>{steps[activeStep]?.label}</p>
        </div>
      </div>

      <div className={styles.methodSteps}>
        {steps.map((step, index) => (
          <article
            className={styles.methodStep}
            data-active={activeStep === index}
            data-step={index}
            key={step.number}
            ref={(node) => { stepRefs.current[index] = node }}
          >
            <div className={styles.methodMobileImage}>
              <Image alt={step.alt} fill sizes="100vw" src={step.image} />
              <span>{step.label}</span>
            </div>
            <div className={styles.methodStepTopline}>
              <span>{step.number}</span>
              <span>Stage {String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <div aria-hidden="true" className={styles.methodStepRule}><span /></div>
          </article>
        ))}
      </div>
    </div>
  )
}
