import React from 'react';
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  roleWriting
} from '../../../../data/All_Services_Data/seoConsultantData';

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
  title: "SEO консултантски услуги | Експерти за по-високо класиране",
  description:
    "Професионални SEO консултантски услуги за подобряване на класирането, увеличаване на трафика и устойчив онлайн растеж.",
  keywords: [
    "SEO консултант",
    "SEO консултации",
    "SEO оптимизация консултант",
    "технически SEO консултант",
    "SEO стратегия",
    "SEO експерт",
    "SEO услуги консултант",
    "оптимизация за търсачки",
    "SEO анализ",
    "дигитален маркетинг SEO"
  ],
  path: "/seo-consultant-service",
});

const SEOConsultant = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Професионални SEO консултантски услуги за реални резултати"}
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
                src="assets/img/icon/seoConsultant.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyizmorsch нашата мисия е да подпомогнем дългосрочния
                  растеж на вашия бизнес чрез персонализирани SEO решения.
                  Създаваме стратегии, съобразени с вашите цели, извършваме
                  детайлни SEO одити, задълбочени keyword анализи и техническа
                  оптимизация, за да подобрим позициите ви в търсачките.
                  Резултатът е повече трафик, повече конверсии и устойчиво
                  онлайн присъствие. Нашият екип е фокусиран върху реални
                  резултати и изграждане на силна дигитална видимост.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Role_writing data={roleWriting} />
            <Boost_section data={BoostSection} />

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

export default SEOConsultant;