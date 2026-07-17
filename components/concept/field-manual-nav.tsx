"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "@/components/icons"
import styles from "@/components/concept/field-manual.module.css"

type NavigationItem = {
  href: string
  label: string
}

type FieldManualNavProps = {
  intakeLabel: string
  items: NavigationItem[]
}

export function FieldManualNav({ intakeLabel, items }: FieldManualNavProps) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusable = () => {
      const panelNodes = Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [])
      return [buttonRef.current, ...panelNodes].filter((node): node is HTMLElement => Boolean(node))
    }

    const nodes = focusable()
    nodes[1]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
        return
      }

      if (event.key !== "Tab") return
      const currentNodes = focusable()
      const first = currentNodes[0]
      const last = currentNodes[currentNodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  const closePanel = () => setOpen(false)

  return (
    <>
      <header className={styles.manualHeader} data-open={open}>
        <Link aria-label="Tycho Coaching home" className={styles.manualBrand} href="/en">
          <span className={styles.manualBrandMark}>
            <Image alt="" height={40} priority src="/logo-mark.webp" width={40} />
          </span>
          <span className={styles.manualBrandType}>
            <span>Tycho</span>
            <span>Coaching</span>
          </span>
        </Link>

        <div className={styles.manualCommands}>
          <span aria-hidden="true" className={styles.manualEdition}>EN / 001</span>
          <Link className={styles.headerIntake} href="/en/contact">
            <span>{intakeLabel}</span>
            <span className={styles.headerIntakeGlyph}><ArrowUpRight /></span>
          </Link>
          <button
            aria-controls="field-manual-index"
            aria-expanded={open}
            aria-label={open ? "Close site index" : "Open site index"}
            className={styles.indexToggle}
            onClick={() => setOpen((value) => !value)}
            ref={buttonRef}
            type="button"
          >
            <span className={styles.indexLabel}>{open ? "Close" : "Index"}</span>
            <span aria-hidden="true" className={styles.indexGlyph}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={styles.indexPanel}
        data-open={open}
        id="field-manual-index"
        ref={panelRef}
      >
        <div className={styles.indexPanelInner}>
          <p className={styles.indexPanelLabel}>Site index / Tycho Coaching</p>
          <nav aria-label="Concept site index" className={styles.indexNavigation}>
            {items.map((item, index) => (
              <Link
                className={styles.indexLink}
                href={item.href}
                key={item.href}
                onClick={closePanel}
                style={{ "--link-index": index } as React.CSSProperties}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
                <ArrowUpRight />
              </Link>
            ))}
          </nav>
          <div className={styles.indexPanelFoot}>
            <p>Personal cycling coaching · worldwide</p>
            <Link href="mailto:tychocoach@gmail.com" onClick={closePanel} tabIndex={open ? 0 : -1}>tychocoach@gmail.com</Link>
          </div>
        </div>
      </div>
    </>
  )
}
