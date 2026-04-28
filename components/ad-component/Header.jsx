"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
      <>
        {/* FIXED HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
          <div
            className="
            container max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            h-14 sm:h-16
            flex items-center justify-between gap-3
          "
          >
            {/* LOGO */}
            <div className="md:h-12 h-8 md:w-[280px] w-36 flex items-center shrink-0">
              <Image
                src="/assets/img/WARR LOGO.webp"
                alt="WarrgyizMorsch"
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-contain"
              />
            </div>

            {/* CTA BUTTON – FIXED */}
            <button
              onClick={() => {
                const el = document.getElementById("erp-contact-form");
                if (el) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="
              shrink-0 th-btn style-radius text-xs! sm:text-sm! px-1.5! sm:px-3!
            "
            >
              {pathname === "/lp/erp-software-development"
                ? "Поискайте ERP консултация"
                : "Обсъдете вашия проект за ИИ"}
            </button>
          </div>
        </header>

        {/* HEADER SPACER */}
        <div className="h-14 sm:h-16"></div>
      </>
    );
}
