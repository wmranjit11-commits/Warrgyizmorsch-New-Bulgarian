import React from "react";
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from "../../utils/functions";

const UniqueImage_section = ({data, cityName, countryName}) => {

  return (
    <section className="w-full bg-white">
      <div className="container py-10 md:py-14">
        {/* Main Heading */}

        <SafeHtml
          as="h2"
          html={resolveCityText(data.heading, cityName, countryName)}
          className={"new-section-title text-(--new-theme-color)! text-center"}
        />

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          {/* Left: Image block */}
          <div className="relative">
            {/* main image */}
            <div className="relative overflow-hidden mx-auto w-[320px] sm:w-[380px] lg:w-full">
              <img
                src="/assets/new-img/uniqueImage1.webp"
                alt="Team working together"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Content (NO right heading, NO CTA) */}
          <div className="lg:pl-2">
            <SafeHtml
              as="p"
              html={resolveCityText(data?.content, cityName, countryName)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueImage_section;
