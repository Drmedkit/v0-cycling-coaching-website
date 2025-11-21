"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { t, isLoaded } = useTranslations()
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".language-dropdown")) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages = [
    { code: "nl", flag: "🇳🇱", name: "Nederlands" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "no", flag: "🇳🇴", name: "Norsk" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as "nl" | "en" | "no")
    setIsLanguageDropdownOpen(false)
  }

  // Don't render navigation items until translations are loaded
  if (!isLoaded) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tycho Coaching" width={120} height={60} className="h-8 w-auto md:h-10" />
            <span className="text-xl font-bold">
              <span className="text-white">Tycho</span>
              <span className="text-teal-500">Coaching</span>
            </span>
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Tycho Coaching" width={120} height={60} className="h-8 w-auto md:h-10" />
          <span className="text-xl font-bold">
            <span className={scrolled ? "text-black" : "text-white"}>Tycho</span>
            <span className="text-teal-500">Coaching</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#contact"
            className={cn(
              "text-sm font-medium hover:text-teal-500 transition-colors",
              scrolled ? "text-gray-700" : "text-white",
            )}
          >
            {t("nav.contact")}
          </Link>

          {/* Language Dropdown */}
          <div className="relative language-dropdown">
            <Button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              variant="ghost"
              size="sm"
              className="p-2 flex items-center gap-2 hover:bg-gray-100/10"
            >
              <Globe className={cn("h-4 w-4", scrolled ? "text-gray-700" : "text-white")} />
              <span className={cn("text-sm font-medium", scrolled ? "text-gray-700" : "text-white")}>
                {currentLanguage?.code.toUpperCase()}
              </span>
              <ChevronDown className={cn("h-3 w-3", scrolled ? "text-gray-400" : "text-white/70")} />
            </Button>

            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 z-50 w-40 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                      language === lang.code ? "bg-gray-100" : "",
                    )}
                  >
                    <span className="text-lg w-6 text-center">{lang.flag}</span>
                    <span className="text-sm text-gray-700">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button asChild className="bg-teal-500 hover:bg-teal-600">
            <Link href="#contact">{t("nav.cta")}</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          {/* Mobile Language Dropdown */}
          <div className="relative language-dropdown mr-2">
            <Button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              variant="ghost"
              size="sm"
              className="p-2 flex items-center gap-1"
            >
              <Globe className={cn("h-4 w-4", scrolled ? "text-gray-700" : "text-white")} />
              <span className={cn("text-sm font-medium", scrolled ? "text-gray-700" : "text-white")}>
                {currentLanguage?.code.toUpperCase()}
              </span>
              <ChevronDown className={cn("h-3 w-3", scrolled ? "text-gray-400" : "text-white/70")} />
            </Button>

            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 z-50 w-40 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                      language === lang.code ? "bg-gray-100" : "",
                    )}
                  >
                    <span className="text-lg w-6 text-center">{lang.flag}</span>
                    <span className="text-sm text-gray-700">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 w-full" onClick={() => setIsMenuOpen(false)}>
              <Link href="#contact">{t("nav.cta")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
