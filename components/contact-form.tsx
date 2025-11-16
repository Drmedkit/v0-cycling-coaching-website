"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ChevronDown } from "lucide-react"

export default function ContactForm() {
  const { t } = useTranslations()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedCountryCode, setSelectedCountryCode] = useState("+31")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0)

  // Common country codes
  const countryCodes = [
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
    { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
    { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
    { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
    { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
    { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
    { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
    { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  ]

  // Get package from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPackage = localStorage.getItem("selectedPackage")
      if (storedPackage) {
        setSelectedPackage(storedPackage)
        // Clear it after retrieving to avoid persisting the selection
        localStorage.removeItem("selectedPackage")
      }
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".country-selector")) {
        setIsCountryDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const now = Date.now()
    if (now - lastSubmissionTime < 60000) {
      // 1 minute cooldown
      toast({
        title: "Please wait",
        description: "Please wait before submitting again.",
        variant: "destructive",
      })
      return
    }
    setLastSubmissionTime(now)

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const phoneNumber = formData.get("phone")
    const fullPhoneNumber = `${selectedCountryCode} ${phoneNumber}`

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: fullPhoneNumber,
      gender: formData.get("gender"),
      age: formData.get("age"),
      package: formData.get("package"),
      message: formData.get("message"),
      website: formData.get("website"), // Honeypot field
      timestamp: new Date().toISOString(),
    }

    // If honeypot field is filled, it's likely a bot
    if (data.website) {
      console.log("Bot submission detected")
      return // Don't submit
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw_YdnouI3DdVDIeSbdcQgy0ydQBp7A9epBXTTstlUxjy3dropyFttE_fAKhCfnt5j4/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      )

      // Since we're using no-cors mode, we can't read the response
      // but if we reach this point, the request was sent successfully
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      })
      ;(e.target as HTMLFormElement).reset()
      setSelectedPackage("")
      setSelectedCountryCode("+31") // Reset to default
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.description"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountryCode(countryCode)
    setIsCountryDropdownOpen(false)
  }

  const selectedCountry = countryCodes.find((country) => country.code === selectedCountryCode)

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-gray-600">{t("contact.subtitle")}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.name")} *
                  </label>
                  <Input id="name" name="name" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.email")} *
                  </label>
                  <Input id="email" name="email" type="email" required className="w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.phone")} *
                  </label>
                  <div className="flex relative">
                    {/* Country Code Selector */}
                    <div className="relative country-selector">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-2 h-10 border border-input bg-background rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:z-10 border-r-0"
                      >
                        <span className="text-lg">{selectedCountry?.flag}</span>
                        <span className="text-sm font-medium">{selectedCountryCode}</span>
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 z-50 w-64 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                          {countryCodes.map((country) => (
                            <button
                              key={`${country.code}-${country.country}`}
                              type="button"
                              onClick={() => handleCountrySelect(country.code)}
                              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm font-medium min-w-[40px]">{country.code}</span>
                              <span className="text-sm text-gray-600 truncate">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="flex-1 rounded-l-none focus:z-10"
                      placeholder="123456789"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.gender")} *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">{t("contact.genderPlaceholder")}</option>
                    <option value="male">{t("contact.male")}</option>
                    <option value="female">{t("contact.female")}</option>
                    <option value="other">{t("contact.other")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.age")} *
                  </label>
                  <Input id="age" name="age" type="number" min="16" max="80" required className="w-full" />
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.package")} *
                </label>
                <select
                  id="package"
                  name="package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  required
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">{t("contact.packagePlaceholder")}</option>
                  <option value="basic">{t("contact.basicPackage")}</option>
                  <option value="premium">{t("contact.premiumPackage")}</option>
                  <option value="pro">{t("contact.proPackage")}</option>
                  <option value="custom">{t("contact.customPackage")}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 px-8 py-3 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("contact.submitting") : t("contact.submit")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
