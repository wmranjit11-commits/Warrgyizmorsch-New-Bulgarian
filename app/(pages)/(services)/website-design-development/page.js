import React from "react";
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  ServicesSection,
} from "../../../../data/All_Services_Data/webDevelopmentData";

import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import Link from "next/link";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Експертни услуги за персонализирана уеб разработка | Warrgyizmorsch",
  description:
    "Ускорете растежа си с персонализирана уеб разработка. Създаваме сигурни, бързи и мащабируеми уебсайтове, които отразяват целите на вашия бранд.",
  keywords: [
    "уеб разработка",
    "услуги за уеб разработка",
    "агенция за уеб разработка",
    "разработка на уебсайт",
    "компания за разработка на уебсайтове",
    "персонализирана уеб разработка",
    "уеб разработчик",
    "разработчици на уебсайтове",
    "компании за уеб дизайн",
    "агенции за уеб разработка",
  ],
  path: "/website-design-development",
});

const WebsiteDesignDevelopment = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Експертни услуги за дизайн и разработка на уебсайтове за вашия бранд"}
      />

      <section className="space-extra-bottom">
        <div className="page-single">
          <div className="page-content">
            <style>{`
              .header-section{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 30px;
              }

              .header-section img{
                height: 400px;
              }

              .header-section p{
                text-align: left;
              }

              @media only screen and (max-width: 990px) {
                .header-section{
                  flex-direction: column;
                }

                .header-section img{
                  height: 200px;
                }

                .header-section p{
                  text-align: center;
                }
              }
            `}</style>

            {/* Intro Section */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/website.avif"
                loading="lazy"
                alt="heading_image"
              />

              <p>
                В Warrgyizmorsch предлагаме професионални{" "}
                <Link
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                  }}
                  href={"/"}
                >
                  услуги за дизайн и разработка на уебсайтове
                </Link>{" "}
                , които помагат на брандовете да се отличат и да растат в
                дигиталния свят. Вашият уебсайт е повече от онлайн присъствие –
                той е мощен актив на бранда, който трябва да вдъхва доверие,
                стойност и професионализъм още от първото взаимодействие.

                Нашият екип съчетава стратегически дизайн с надеждна разработка,
                за да създава визуално впечатляващи и високоефективни уебсайтове,
                съобразени с вашите бизнес цели. От интуитивен потребителски
                интерфейс до мащабируема архитектура – гарантираме, че всеки
                сайт е адаптивен, сигурен и оптимизиран за скорост и търсачки.
                Всяко решение е внимателно изработено, за да осигури безпроблемно
                потребителско изживяване на всички устройства.
              </p>
            </div>

            {/* Services */}
            <Services_we_offer data={ServicesSection} />

            {/* Custom Section */}
            <Custom_section data={CustomSection} />

            {/* Benefits */}
            <Benefits_section data={BenefitSection} />

            {/* Boost Business */}
            <Boost_section data={BoostSection} />

            {/* Assistance */}
            <Assistance_section data={AssistanceSection} />

            {/* Industry Section */}
            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ */}
            <FAQ_section data={FAQ} />
          </div>
        </div>
      </section>

      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WebsiteDesignDevelopment;