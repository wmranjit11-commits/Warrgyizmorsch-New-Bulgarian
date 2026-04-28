"use client";

import { useState } from "react";

export default function ERPProcessExact({data}) {
    const [active, setActive] = useState(0);

    return (
      <section className="container bg-white py-6 md:py-12">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium! text-black! mb-3">
              {data?.heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              {data?.description}
            </p>
          </div>

          {/* ================= MOBILE ONLY ================= */}
          <div className="md:hidden flex gap-2">
            {/* LEFT: STEP TITLES */}
            <div className="w-[42%] flex flex-col gap-2">
              {data?.process.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-start px-2 py-2 rounded-md text-xs! font-medium! border leading-snug
                  ${
                    active === i
                      ? "bg-(--new-theme-color) text-white border-(--new-theme-color)"
                      : "bg-white text-(--new-theme-color) border-gray-200"
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* RIGHT: CONTENT */}
            <div className="w-[58%] bg-(--new-theme-color) rounded-lg p-4 text-white text-sm leading-relaxed">
              <p className="text-xs leading-relaxed text-white">
                {data?.process[active].content}
              </p>
            </div>
          </div>

          {/* ================= DESKTOP / TABLET (UNCHANGED) ================= */}
          <div className="hidden md:block max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-3 bg-[#EEF4FB] rounded-t-2xl p-0">
              {data?.process.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-6 py-3 rounded-tl-xl! rounded-tr-xl! text-sm font-medium transition
                  ${
                    active === i
                      ? "bg-(--new-theme-color) text-white"
                      : "text-(--new-theme-color) hover:bg-white/70"
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-(--new-theme-color) rounded-b-2xl px-10 py-8 text-white text-sm leading-relaxed text-left">
              {data?.process[active].content}
            </div>
          </div>
        </div>
      </section>
    );
}
