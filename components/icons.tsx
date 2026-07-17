import type { SVGProps } from "react"

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path d="M4 12 12 4M5.25 4H12v6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  )
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  )
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path d="m3 8.3 3.1 3.1L13 4.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
    </svg>
  )
}

export function MenuIcon({ open, ...props }: SVGProps<SVGSVGElement> & { open: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18" {...props}>
      {open ? (
        <path d="m4 4 10 10M14 4 4 14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
      ) : (
        <path d="M3 6h12M3 12h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
      )}
    </svg>
  )
}

export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18" {...props}>
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 5.5V9l2.6 1.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  )
}
