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
} from '../../../../data/All_Services_Data/responsivewebData';

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
  title: "Warrgyizmorsch - Експертна компания за адаптивен уеб дизайн",
  description:
    "Warrgyizmorsch предоставя услуги за адаптивен уеб дизайн, които подобряват потребителското изживяване, увеличават ангажираността и подпомагат бизнес растежа на всички устройства.",
  keywords: [
    "адаптивен уеб дизайн",
    "компания за responsive дизайн",
    "responsive web дизайн услуги",
    "агенция за уеб дизайн",
    "примери за responsive дизайн",
    "разработка на responsive уебсайтове",
    "UI/UX дизайн",
    "уеб дизайн и маркетинг услуги"
  ],
  path: "/responsive-web-design-service",
});

const ResponsiveWebDesign = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Warrgyizmorsch - Компания за Responsive Web Design"
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
                src="assets/img/icon/ResponsiveWeb.jpg"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyizmorsch се фокусираме върху адаптивен уеб дизайн,
                  създавайки уебсайтове, които се адаптират към всички екранни
                  размери. Нашите проекти осигуряват плавно потребителско
                  изживяване, съчетавайки модерен дизайн, стабилна
                  производителност и ясна навигация, за да помогнем на бизнеса
                  да достигне до своите клиенти и да превърне посещенията в
                  реални резултати.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Benefits_section data={BenefitSection} />
            <Custom_section data={CustomSection} />
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

export default ResponsiveWebDesign;