"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Methodology() {
  const { t } = useTranslations()

  const methodologies = [
    {
      number: "1",
      title: t("methodology.critical.title"),
      description: t("methodology.critical.description"),
    },
    {
      number: "2",
      title: t("methodology.load.title"),
      description: t("methodology.load.description"),
    },
    {
      number: "3",
      title: t("methodology.intensity.title"),
      description: t("methodology.intensity.description"),
    },
  ]

  const personalPoints = [
    t("methodology.personal.point1"),
    t("methodology.personal.point2"),
    t("methodology.personal.point3"),
    t("methodology.personal.point4"),
  ]

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("methodology.title")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("methodology.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {methodologies.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-6 text-xl font-bold">
                {method.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("methodology.personal.title")}</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">{t("methodology.personal.description")}</p>

          {/* Personal Approach Section with Image (Desktop Only) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content */}
            <div>
              <ul className="space-y-4">
                {personalPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - Only visible on desktop */}
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/cycling-race.jpeg"
                  alt="Competitive cycling race showing professional training in action"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
