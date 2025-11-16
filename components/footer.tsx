"use client"

import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"

export default function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">Tycho</span>
                <span className="text-teal-400">Coaching</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Professional cycling coaching based on scientific principles and personalized for your goals.
            </p>
            <p className="text-gray-300 text-sm mt-2 font-medium">Tycho Parmentier</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-teal-400">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="text-gray-400 hover:text-teal-400">
                  {t("nav.methodology")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-teal-400">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-gray-400 hover:text-teal-400">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Trondheim, Norway</li>
              <li>
                <Link href="mailto:tychocoach@gmail.com" className="text-gray-400 hover:text-teal-400">
                  tychocoach@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+31647528472" className="text-gray-400 hover:text-teal-400">
                  +31 6 47528472
                </Link>
              </li>
              <li className="text-gray-400">KVK: 97624195</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
