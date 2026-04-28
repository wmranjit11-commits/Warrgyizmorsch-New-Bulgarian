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
} from "../../../../data/All_Services_Data/nodejsdevData";

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
  title: "Node.js Разработка на услуги | Warrgyizmorsch",
  description:
    "Warrgyizmorsch предлага висококачествени Node.js услуги за разработка за бързи, мащабируеми и сигурни приложения, които подпомагат растежа на бизнеса и дигиталните иновации.",
  keywords: [
    "Node.js компания за разработка",
    "Node.js уеб разработка",
    "Node.js услуги за разработка",
    "Node.js разработчици",
    "наемане на Node.js разработчик",
    "Node.js разработка",
    "Node.js уеб приложения",
    "Node.js app разработка"
  ],
  path: "/node-js-development-service",
});

const NodeJsDevelopmentService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Професионални Node.js услуги за разработка на мащабируеми приложения"
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
                src="assets/img/icon/nodeJs.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Нашите професионални Node.js услуги за разработка са
                  предназначени за създаване на бързи, надеждни и
                  високопроизводителни приложения. Предлагаме цялостна уеб
                  разработка, фокусирана върху мащабируемост, сигурност и
                  отлично потребителско изживяване. Нашите експертни
                  разработчици използват Node.js за създаване на реално време
                  и базирани на данни уеб решения, които растат заедно с вашия
                  бизнес. От персонализирана разработка до постоянна поддръжка
                  ние осигуряваме гъвкави решения за стабилна работа, лесна
                  интеграция и дългосрочен успех на вашите дигитални продукти.
                </p>
              </div>
            </div>

            {/* Sections */}
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

export default NodeJsDevelopmentService;