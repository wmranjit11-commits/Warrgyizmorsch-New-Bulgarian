import React from "react";
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  roleWriting,
} from "../../../../data/All_Services_Data/seoAuditData";

import Services_we_offer from '../../../../components/service-components/Services_we_offer';
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from '../../../../components/service-components/Handle_Largedata_section';
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "SEO одит услуги | Пълен анализ на сайт и план за оптимизация",
  description:
    "Професионални SEO одит услуги за откриване на проблеми и възможности. Подробен анализ и стратегически план за по-високи позиции и трафик.",
  keywords: [
    "SEO одит",
    "SEO одит услуги",
    "технически SEO одит",
    "on-page SEO одит",
    "SEO анализ на сайт",
    "SEO отчет",
    "SEO проверка",
    "аудит на уебсайт",
    "SEO оптимизация одит"
  ],
  path: "/seo-audit-service",
});

const SeoAudit = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Пълен SEO одит и стратегия за оптимизация на вашия уебсайт"
        }
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

            {/* Intro part */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="/assets/img/icon/seoAuditimage.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Ние знаем, че SEO е ключов елемент за растежа на вашия бизнес.
                  Предлагаме детайлен SEO одит и стратегия за оптимизация,
                  която помага за по-високи позиции в Google, повече трафик и
                  по-големи приходи. Нашият екип анализира всички технически и
                  on-page SEO фактори, открива проблеми и предоставя ясни
                  препоръки за подобрение, които ви поставят пред конкуренцията.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Role_writing data={roleWriting} />
            <Boost_section data={BoostSection} />
            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ section */}
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

export default SeoAudit;