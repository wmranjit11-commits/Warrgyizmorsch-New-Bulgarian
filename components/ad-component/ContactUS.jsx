"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
    return (
      <section className="container bg-white py-6 md:py-12">
        <div className="flex justify-center">
          <div className="w-full bg-linear-to-r from-(--new-theme-color)/70 to-(--new-theme-color) rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-4xl ">
              <h3 className="text-lg md:text-xl font-medium! mb-2 leading-snug text-white">
                Търсите да осигурите икономическата осъществимост на вашия проект за ERP софтуер?
              </h3>

              <p className="text-sm text-white leading-relaxed">
                Консултантите на Warrgyizmorsch са готови да извършат проучване за осъществимост и да предоставят точни оценки на ROI, помагайки ви да планирате разработката с увереност.
              </p>
            </div>

            {/* RIGHT BUTTON */}
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
              className="th-btn style6 style-radius flex! items-center! shrink-0! gap-2"
            >
              Оценете ROI на ERP проекта <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    );
}
