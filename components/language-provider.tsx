"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "nl" | "en" | "no"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Detect language based on IP geolocation via Vercel headers
    async function detectLanguage() {
      try {
        const res = await fetch("/api/geo")
        if (res.ok) {
          const data = await res.json()
          if (data.language === "nl" || data.language === "no" || data.language === "en") {
            setLanguage(data.language)
          }
        }
      } catch {
        // Fallback: use browser language if geo detection fails
        const userLang = navigator.language.split("-")[0]
        if (userLang === "nl") {
          setLanguage("nl")
        } else if (userLang === "no" || userLang === "nb" || userLang === "nn") {
          setLanguage("no")
        }
      }
      setIsLoaded(true)
    }
    detectLanguage()
  }, [])

  const value = {
    language,
    setLanguage,
    isLoaded,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
