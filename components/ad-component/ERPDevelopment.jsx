"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ERPDevelopment({ data }) {
  return (
    <section className="container py-6 md:py-12 bg-white">
      <div className="">
        {/* HEADING */}
        <h2 className="new-section-title text-(--new-theme-color)!">{data?.heading}</h2>
        {data?.description && <p>{data?.description}</p>}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden h-[260px] sm:h-auto">
            <Image
              src={data?.leftImage ?? "/assets/img/ad/ERP-Development.webp"}
              alt="ERP Development Team"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* CARD 1 */}
            <div className="bg-(--new-theme-color) rounded-2xl p-4 sm:p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl! md:text-2xl! font-medium! mb-2 text-white text-left md:text-center">
                  {data?.data[0]?.title}
                </h3>

                <p className="text-sm opacity-90 text-white text-left md:text-center max-w-md mx-auto">
                  {data?.data[0]?.description}
                </p>
              </div>

              <div className="flex justify-center">
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
                  className="mt-2! md:mt-3! th-btn style5 style-radius flex! items-center!"
                >
                  {data?.data[0]?.cta ?? "Заявка"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-(--new-theme-color) rounded-2xl p-4 sm:p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl! md:text-2xl! font-medium! mb-2 text-white text-left md:text-center">
                  {data?.data[1]?.title}
                </h3>

                <p className="text-sm opacity-90 text-white text-left md:text-center max-w-md mx-auto">
                  {data?.data[1]?.description}
                </p>
              </div>

              <div className="flex justify-center">
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
                  className="mt-2! md:mt-3! th-btn style5 style-radius flex! items-center!"
                >
                  {data?.data[1]?.cta ?? "Заявка"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
