import React from "react";
import Link from "next/link";
import { IndustryData } from "../../data/Industry_Data/allIndustryData";

const NewIndustrySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="new-section-title text-(--new-theme-color)!">Индустрии, които обслужваме</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IndustryData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative flex justify-center h-44 items-end overflow-hidden rounded-xl bg-gray-900"
              style={{
                backgroundImage: item.image ? `url(${item.image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-black/50 to-black/20 transition-transform duration-300 group-hover:scale-105" />

              {/* Title */}
              <div className="relative z-10 p-1">
                <h3 className="text-xl! font-medium! mb-0! text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewIndustrySection;
