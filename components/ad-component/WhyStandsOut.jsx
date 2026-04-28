"use client";

import { ArrowRight } from "lucide-react";

export default function WhyStandsOut() {
    return (
      <section className="container py-6 md:py-12 bg-white flex justify-center">
        <div
          className="relative w-full rounded-2xl py-14 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--new-theme-color) 0%, var(--new-theme-color) 100%)",
          }}
        >
          {/* SPARKLES */}
          <span className="absolute top-6 left-10 text-white text-xl">✦</span>
          <span className="absolute top-10 right-14 text-white text-xl">✦</span>
          <span className="absolute bottom-10 left-20 text-white text-xl">
            ✦
          </span>
          <span className="absolute bottom-12 right-24 text-white text-xl">
            ✦
          </span>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-medium! mb-3 text-white">
            Защо Warrgyizmorsch се отличава
          </h2>

          <p className="text-sm font-medium! mb-6 opacity-95 text-white">
            Какво отличава Warrgyizmorsch в разработката на ERP софтуер
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed max-w-3xl mx-auto opacity-90 text-white">
            Warrgyizmorsch се отличава в разработката на ERP софтуер, като съчетава дълбоки познания в индустрията с модерни технологии за предоставяне на персонализирани решения. Нашата отдаденост на разбирането на вашите уникални бизнес нужди, съчетана със строги методологии, гарантира стабилни и мащабируеми ERP системи. С фокус върху качеството, прецизността и удовлетвореността на клиентите, ние превъзхождаме в създаването на ERP решения, които движат ефективността и растежа на вашата организация.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/warrgyizmorschdigital/30min",
                  });
                }
              }}
              className="th-btn style-radius style5 flex! items-center! gap-2"
            >
              Запазете час за ERP стратегия <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    );
}
