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
} from "../../../../../data/Industry_Data/healthcareData";

import Services_we_offer from "../../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../../components/service-components/Role_writing";
import Custom_section from "../../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../../utils/seo";
import BulletsSection from "../../../../../components/service-components/BulletsSection";

export const metadata = generateSEOMeta({
  title: "Надеждни Healthcare IT решения и услуги за модерни здравни организации",
  description:
    "Подобрете здравната си организация с модерни Healthcare IT решения. Усъвършенствайте грижата за пациентите, сигурността на данните и операциите чрез персонализирана IT поддръжка.",
  keywords: [
    "healthcare software development",
    "healthcare IT solutions",
    "medical software development",
    "custom healthcare software",
    "EHR software development",
    "EMR software development",
    "здравен софтуер",
    "медицински софтуер",
    "healthcare technology",
    "telemedicine solutions",
  ],
  path: "/healthcare-IT-solution-service",
});

const Healthcare = () => {
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: `url('assets/img/service/serviceD.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="service-sec"
      >
        <div className="round-container pt-5">
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title text-white">НАШИТЕ УСЛУГИ</span>

              <h1 className="sec-title text-white">
                Компания за Healthcare IT решения и услуги
              </h1>
            </div>
          </div>
        </div>
      </section>

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
                src="assets/img/icon/healthcare.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Indianic предлага услуги за разработка на здравен софтуер и
                  IT решения, които ви подготвят за бъдещето и подпомагат
                  по-интелигентното управление на здравните услуги.

                  Клиники, екипи за виртуални грижи и здравни специалисти
                  получават технологии, съобразени с техните специфични нужди.

                  Нашата цел е да трансформираме предоставянето на здравни
                  услуги чрез сигурни, иновативни и съвместими с регулациите
                  технологии чрез нашата агенция за разработка на healthcare
                  software solutions.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

            <Benefits_section data={BenefitSection} />

            <Assistance_section data={AssistanceSection} />

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

export default Healthcare;