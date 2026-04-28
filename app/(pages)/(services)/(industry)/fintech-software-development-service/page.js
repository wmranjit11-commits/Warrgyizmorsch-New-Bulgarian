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
} from "../../../../../data/Industry_Data/fintechData";

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
  title: "Fintech софтуерни услуги от експертите на Warrgyizmorsch",
  description:
    "Warrgyizmorsch предлага модерни Fintech софтуерни услуги. Създаваме сигурни, мащабируеми и иновативни финансови приложения, съобразени с вашите бизнес цели.",
  keywords: [
    "fintech software development",
    "fintech software development services",
    "fintech company",
    "финтех разработка",
    "финансов софтуер",
    "финансови приложения",
    "custom fintech software",
    "digital wallet development",
    "AI fintech solutions",
    "финансова технология",
  ],
  path: "/fintech-software-development-service",
});

const Fintech = () => {
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
                Експертиза във Fintech софтуерната разработка - Warrgyizmorsch
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
                src="assets/img/icon/fintech.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Warrgyizmorsch предлага fintech софтуерна разработка за банки,
                  стартъпи и компании, които търсят модерни финансови
                  технологични решения.

                  Нашите fintech разработчици създават системи, които са
                  сигурни, мащабируеми и отговарят на финансовите регулации.

                  Получавате дигитални портфейли, AI аналитични системи и
                  функции, създадени за съвременния финансов сектор.

                  Нашият екип изгражда решения, които подобряват работните
                  процеси, опростяват операциите и подобряват клиентското
                  изживяване.

                  Компаниите, които търсят надеждни fintech разработчици,
                  избират нас за модерни и сигурни технологични решения.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

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

export default Fintech;