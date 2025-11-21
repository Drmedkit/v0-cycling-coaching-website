import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tycho Coaching - Professional Cycling Coach",
  description:
    "Professional cycling coaching with scientific training methodology. Improve your performance with personalized training plans for competitive cyclists.",
  keywords: ["cycling coach", "training plans", "professional cycling", "TrainingPeaks", "WKO5", "power analysis"],
  authors: [{ name: "Tycho Parmentier" }],
  openGraph: {
    title: "Tycho Coaching - Professional Cycling Coach",
    description:
      "Professional cycling coaching with scientific training methodology. Improve your performance with personalized training plans for competitive cyclists.",
    url: "https://www.tychocoaching.nl",
    siteName: "Tycho Coaching",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tycho Coaching Logo",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tycho Coaching - Professional Cycling Coach",
    description:
      "Professional cycling coaching with scientific training methodology. Improve your performance with personalized training plans.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
