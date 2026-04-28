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
} from '../../../../data/All_Services_Data/printCollateralDesignsData';

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
  title: "Печатни и маркетинг материали за професионален брандинг",
  description:
    "Висококачествени услуги за дизайн на печатни и маркетинг материали, които подсилват бранд идентичността и създават силно впечатление върху клиентите.",
  keywords: [
    "услуги за печатни материали",
    "дизайн на колатерал",
    "услуги за маркетинг материали",
    "най-добри колатерал услуги",
    "агенция за дизайн на материали",
    "печатни рекламни услуги"
  ],
  path: "/print-end-collateral-designs",
});

const PrintCollateralDesigns = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Креативни услуги за печатни материали, които впечатляват всеки път"
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
                src="assets/img/icon/Marketing-Collateral.webp"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgytiz Morsch възприемаме печата не просто като хартия,
                  а като живо преживяване и физическо отражение на вашия бранд.
                  Нашите услуги за дизайн на печатни и маркетинг материали са
                  създадени да ангажират и привличат вниманието на аудиторията.
                  От първоначалната концепция до крайния продукт, ние влагаме
                  креативност, прецизност и високи стандарти, за да предадем
                  вашето послание по най-добрия начин. Независимо дали става
                  дума за брошури, опаковки или фирмени материали, всеки елемент
                  говори професионално за вашия бранд. С Warrgytiz Morsch вашето
                  печатно присъствие става силно, запомнящо се и трудно за
                  игнориране.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Benefits_section data={BenefitSection} />
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

export default PrintCollateralDesigns;