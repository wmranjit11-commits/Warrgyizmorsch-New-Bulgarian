"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-(--new-theme-color) text-white">
        {/* TOP SECTION */}
        <div className="container py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* LOGO — LEFT */}
            <div>
              <Image
                src="/assets/img/WARR LOGO WHITE.webp"
                alt="WarrgyizMorsch"
                width={300}
                height={150}
                className="object-contain filter brightness-0 invert"
              />
              <p className="text-start text-sm text-white leading-relaxed max-w-md md:text-right">
                Warrgyizmorsch си партнира с организации за изграждане и развитие на дигитални системи. Нашата работа набляга на надеждността, мащабируемостта и дългосрочното въздействие.
              </p>
            </div>

            {/* ADDRESS — RIGHT */}
            <div>
              <div className="flex items-start gap-2 md:justify-end">
                <MapPin className="w-4 h-4 text-white mt-1 shrink-0" />

                <p className="text-start text-sm text-white leading-relaxed max-w-md md:text-right">
                  312, Pentax House, South Hill
                  <br />
                  Avenue, South Harrow, Middlesex,
                  <br />
                  HA2 0DU, United Kingdom
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white mt-1 shrink-0" />
                <a
                  href="tel:+447789161193"
                  className="block text-start text-sm text-white leading-relaxed max-w-md md:text-right"
                >
                  +44 7789161193
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-2 md:justify-end">
                <MapPin className="w-4 h-4 text-white mt-1 shrink-0" />

                <p className="text-start text-sm text-white leading-relaxed max-w-md md:text-right">
                  410, 4th Floor,
                  <br />
                  Ashoka palace,
                  <br />
                  Shobhagpura, Udaipur, Rajasthan
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white mt-1 shrink-0" />
                <a
                  href="tel:+919257874994"
                  className="block text-start text-sm text-white leading-relaxed max-w-md md:text-right"
                >
                  +91 9257874994
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="container max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              {/* © LEFT */}
              <p className="text-xs text-white">
                © {new Date().getFullYear()} Warrgyizmorsch. Всички права запазени.
              </p>

              {/* POLICIES — RIGHT */}
              <div className="flex gap-4 text-xs">
                <span className="text-white cursor-default">
                  Политика за поверителност
                </span>

                <span className="text-white">|</span>

                <span className="text-white cursor-default">
                  Правила и условия
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
