"use client";

import { useState } from "react";

export default function ERPComparisonSection({ data }) {
  const { heading, group } = data;
  const [activeItem, setActiveItem] = useState(null);

  const content = activeItem
    ? group.items.find((i) => i.label === activeItem)
    : group.default;

  return (
    <section className="container bg-white py-6 md:py-12">
      {/* TOP */}
      <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
        {heading?.description && (
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            {heading.description}
          </p>
        )}

        <h2 className="new-section-title text-(--new-theme-color)!">{heading.title}</h2>

        {heading?.belowTitle && <p>{heading.belowTitle}</p>}
      </div>

      {/* MAIN COMPARISON */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 rounded-xl overflow-hidden">
        {/* LEFT TABS */}
        <div className="bg-white text-(--new-theme-color) border border-(--new-theme-color) rounded-l-xl">
          <button
            onClick={() => setActiveItem(null)}
            className={`w-full text-left px-4 py-3 font-medium border-b border-(--new-theme-color)/30
              ${
                activeItem === null
                  ? "bg-(--new-theme-color) text-white rounded-md!"
                  : "hover:bg-(--new-theme-color)/10"
              }`}
          >
            {group.key}
          </button>

          {group.items.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-(--new-theme-color)/30 transition
                ${
                  activeItem === item.label
                    ? "bg-(--new-theme-color) text-white rounded-md!"
                    : "hover:bg-(--new-theme-color)/10"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CUSTOM ERP */}
        <div className="relative bg-(--new-theme-color)/20 text-black">
          <div className="px-6 sm:px-4 py-3 sm:py-4 font-medium! text-base sm:text-lg text-center border-b border-dashed border-black">
            Персонализирани {data?.service} решения
          </div>

          <div className="flex items-center justify-center p-4 lg:h-[calc(100%-65px)]! h-auto!">
            <div className="rounded-xl p-3 text-center max-w-sm bg-white/15 backdrop-blur-md border border-white/20 shadow-sm">
              <p className="text-sm! leading-relaxed m-0 text-black font-semibold">
                {content?.custom}
              </p>
            </div>
          </div>

          {/* Desktop dotted lines */}
          <div className="hidden lg:block absolute top-0 right-0 h-full border-r border-dashed border-black"></div>
        </div>

        {/* READY-MADE ERP */}
        <div className="relative bg-(--new-theme-color)/20 text-black">
          <div className="px-6 sm:px-4 py-3 sm:py-4 font-medium! text-base sm:text-lg text-center border-b border-dashed border-black">
            Готови {data?.service}
          </div>

          <div className="flex items-center justify-center p-4 lg:h-[calc(100%-65px)]! h-auto!">
            <div className="rounded-xl p-3 text-center max-w-sm bg-white/15 backdrop-blur-md border border-white/20 shadow-sm">
              <p className="text-sm! leading-relaxed m-0 text-black font-semibold">
                {content?.ready}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
