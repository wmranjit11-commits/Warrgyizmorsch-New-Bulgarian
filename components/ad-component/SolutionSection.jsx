"use client";
import { ArrowRight } from "lucide-react";

export default function SolutionSection({data}) {
  return (
    <section className="relative bg-[#060B1A] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-transparent to-purple-900/20 blur-3xl" />

      <div className="relative container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium! text-white! leading-tight">
            {data?.heading}
          </h2>
          <p className="mt-1 text-gray-400 text-lg">{data?.description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.solutions?.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <h3 className="text-2xl! font-medium! text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[50px] flex justify-center">
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
            className="th-btn style-radius flex! gap-2 item-center!"
          >
            Започнете вашия AI проект
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
