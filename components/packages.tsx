"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import { Check, X, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Packages() {
  const { t, isLoaded } = useTranslations()

  // Don't render until translations are loaded
  if (!isLoaded) {
    return (
      <section id="packages" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const packages = [
    {
      title: "Basis",
      price: "€89",
      description: t("packages.basic.description"),
      features: [
        { text: t("packages.basic.feature1"), included: true },
        { text: t("packages.basic.feature2"), included: true },
        { text: t("packages.basic.feature3"), included: true },
        { text: t("packages.basic.feature4"), included: false },
        { text: t("packages.basic.feature5"), included: false },
      ],
      popular: false,
      buttonVariant: "outline" as const,
      packageId: "basic",
    },
    {
      title: "Premium",
      price: "€129",
      description: t("packages.premium.description"),
      features: [
        { text: t("packages.premium.feature1"), included: true },
        { text: t("packages.premium.feature2"), included: true },
        { text: t("packages.premium.feature3"), included: true },
        { text: t("packages.premium.feature4"), included: true },
        { text: t("packages.premium.feature5"), included: true },
      ],
      popular: true,
      buttonVariant: "default" as const,
      packageId: "premium",
    },
    {
      title: "Pro",
      price: "€209",
      description: t("packages.pro.description"),
      features: [
        { text: t("packages.pro.feature1"), included: true },
        { text: t("packages.pro.feature2"), included: true },
        { text: t("packages.pro.feature3"), included: true },
        { text: t("packages.pro.feature4"), included: true },
        { text: t("packages.pro.feature5"), included: true },
      ],
      popular: false,
      buttonVariant: "outline" as const,
      packageId: "pro",
    },
  ]

  // Function to handle package selection and navigation
  const handleSelectPackage = (packageId: string) => {
    // Store the selected package in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedPackage", packageId)
      // Navigate to the contact section
      window.location.href = "#contact"
    }
  }

  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("packages.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("packages.subtitle")}</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl",
                pkg.popular
                  ? "border-teal-200 shadow-teal-100/50 scale-105 lg:scale-110"
                  : "border-gray-200 hover:border-gray-300",
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    {t("packages.popular")}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-lg text-gray-500 ml-1">{t("packages.month")}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                          feature.included ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400",
                        )}
                      >
                        {feature.included ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      </div>
                      <span
                        className={cn("text-sm leading-relaxed", feature.included ? "text-gray-700" : "text-gray-400")}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg.buttonVariant}
                  size="lg"
                  className={cn(
                    "w-full h-12 text-base font-semibold transition-all duration-200",
                    pkg.popular
                      ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl"
                      : "border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600",
                  )}
                  onClick={() => handleSelectPackage(pkg.packageId)}
                >
                  {t("packages.selectPlan")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("packages.customNeed")}</h3>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold bg-transparent"
              onClick={() => handleSelectPackage("custom")}
            >
              {t("packages.customButton")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
