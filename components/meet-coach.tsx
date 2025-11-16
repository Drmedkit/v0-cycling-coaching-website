"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function MeetCoach() {
  const { t } = useTranslations()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("coach.title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-gray-700">{t("coach.bio1")}</p>
            <p className="text-gray-700">{t("coach.bio2")}</p>
            <p className="text-gray-700">{t("coach.bio3")}</p>
            <p className="text-gray-700">
              {t("coach.bio4")
                .split("Cyclinglab.cc")
                .map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && (
                      <a
                        href="https://cyclinglab.cc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline font-medium"
                      >
                        Cyclinglab.cc
                      </a>
                    )}
                  </span>
                ))}
            </p>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 mt-4">
              <Link href="#contact">{t("coach.contactButton")}</Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/coach-profile.jpeg"
                alt="Tycho - Professional Cycling Coach"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
