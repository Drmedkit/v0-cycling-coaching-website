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
  const [language, setLanguage] = useState<Language>("nl")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Detect user's language preference
    const userLang = navigator.language.split("-")[0]
    if (userLang === "en") {
      setLanguage("en")
    } else if (userLang === "no" || userLang === "nb" || userLang === "nn") {
      setLanguage("no")
    }
    setIsLoaded(true)
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
