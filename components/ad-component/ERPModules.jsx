"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from "../../utils/functions";

export default function ERPModules({ data, cityName, countryName }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="container bg-white py-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-8 items-start">
        {/* LEFT SECTION — STATIC IMAGE BACKGROUND */}
        <div
          // className="bg-no-repeat bg-left bg-contain md:sticky top-[35%]"
          className="bg-no-repeat bg-left bg-contain"
          style={{
            backgroundImage: "url('/img/dotted-bg.png')", // <-- STATIC IMAGE
          }}
        >
          <div className="relative z-10 md-py-5">
            <h2 className="new-section-title text-left! text-(--new-theme-color)!">
              <SafeHtml
                as="span"
                html={resolveCityText(data?.heading, cityName, countryName)}
              />
            </h2>

            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              <SafeHtml
                as="span"
                html={resolveCityText(data?.description, cityName, countryName)}
              />
            </p>

            {data?.button && (
              <button
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: "https://calendly.com/warrgyizmorschdigital/30min",
                    });
                  }
                }}
                className="th-btn style-radius cursor-pointer"
              >
                {data.button.name}
              </button>
            )}
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4  md-py-5">
          {data.modules.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-6 text-left font-medium text-[#0A2540]"
                >
                  {resolveCityText(item.title, cityName, countryName)}
                  <span
                    className={`flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-(--new-theme-color) text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                    {resolveCityText(item.content, cityName, countryName)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
