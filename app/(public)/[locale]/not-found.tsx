import Link from "next/link"

export default function NotFound() {
  return (
    <main id="main-content" className="page-hero grain">
      <div className="section-shell"><p className="eyebrow">404</p><h1 className="page-title">The road ends here.</h1><p className="lede" style={{ marginTop: "2rem" }}>This page does not exist or has moved.</p><Link className="text-link" href="/en" style={{ marginTop: "2rem" }}>Return home →</Link></div>
    </main>
  )
}
