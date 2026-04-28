"use client";

import { ArrowRight } from "lucide-react";

export default function ERPWorkflowCTA() {
    const openCalendly = () => {
        if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initPopupWidget({
                url: "https://calendly.com/warrgyizmorschdigital/30min",
            });
        }
    };

    return (
      <section className="container py-6 md:py-12">
        <div className="">
          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-medium! text-center text-black! mb-3">
            Вземете ERP система, пригодена към вашите бизнес процеси
          </h2>

          <p className="text-sm text-gray-600 max-w-3xl mx-auto text-center mb-14">
            Доверете на Warrgyizmorsch разработката на вашето ERP и се възползвайте от персонализирана система, която повишава производителността с 20-30%, намалява разходите за труд с 10% и постига над 90% удовлетвореност на потребителите.
          </p>

          {/* CTA BOX */}
          <div className="bg-linear-to-r from-(--new-theme-color)/70 to-(--new-theme-color) rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-around gap-6">
            {/* LEFT CONTENT */}
            <div className="text-white">
              <h4 className="text-lg md:text-xl font-medium! mb-2 px-5 text-white!">
                Вземете тези предимства с Warrgyizmorsch
              </h4>
              <p className="text-sm px-5 text-white!">
                Нека насрочим разговор за предварително неоправдателно обсъждане на вашите ERP нужди.
              </p>
            </div>

            {/* BUTTON (SAME AS HEADER) */}
            <button
              onClick={openCalendly}
              className="th-btn style-radius style5 flex! items-center! gap-2"
            >
              Запазете час за стратегия <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    );
}
