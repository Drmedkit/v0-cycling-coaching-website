import { NextResponse, type NextRequest } from "next/server"
import { isLocale } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const firstSegment = pathname.split("/")[1] ?? ""
  if (isLocale(firstSegment)) return NextResponse.next()

  const destination = request.nextUrl.clone()
  destination.pathname = `/en${pathname === "/" ? "" : pathname}`
  destination.search = search
  return NextResponse.redirect(destination, 308)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_vercel|images|logo|og-image|icon|favicon|robots.txt|sitemap.xml|manifest.webmanifest).*)"],
}
