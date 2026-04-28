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
} from "../../../../data/All_Services_Data/ai-automation-servicesData";

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
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "AI Automation Service за интелигентна и мащабируема бизнес ефективност",
  description:
    "Нашата AI automation service подобрява ефективността и стимулира мащабируем растеж чрез оптимизиране на процесите, намаляване на разходите и повишаване на продуктивността.",
  keywords: [
    "Разработка на корпоративен софтуер",
    "Услуги за разработка на корпоративен софтуер",
    "услуга за разработка на корпоративен софтуер",
    "компания за разработка на софтуер",
    "компания за разработка на корпоративен софтуер",
    "агенция за разработка на софтуер",
    "разработка на корпоративни приложения",
    "Разработка на ERP софтуер",
    "IT компания за разработка на софтуер",
    "разработка на корпоративен софтуер",
    "услуги за разработка на софтуер",
    "оффшорна разработка на софтуер",
    "компании за разработка на iOS приложения",
  ],
  path: "/enterprise-software-development-service",
});

const SoftwareDevelopmentEnterprise = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "AI Automation Service : Движеща сила за интелигентна ефективност и мащабируем бизнес растеж"
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
                src="assets/img/icon/software_development.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  AI automation service трансформира начина, по който работят
                  съвременните организации, като осигурява по-бързо вземане на
                  решения, по-висока ефективност и лесно мащабиране на бизнес
                  процесите.

                  Чрез комбиниране на изкуствен интелект с автоматизирани
                  работни потоци, компаниите могат да премахнат ръчните
                  затруднения, да намалят грешките и да отключат нови нива на
                  продуктивност.

                  AI automation services позволява на предприятията да надминат
                  традиционната автоматизация чрез внедряване на интелигентност,
                  адаптивност и непрекъснато самообучение в ежедневните процеси.

                  С ускоряването на дигиталната трансформация организациите,
                  които използват AI automation companies, получават значително
                  конкурентно предимство.

                  От оптимизиране на операциите до подобряване на клиентското
                  изживяване, AI-driven automation вече не е опция, а
                  стратегическа необходимост за дългосрочен успех.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

            <Benefits_section data={BenefitSection} />

            <Role_writing data={roleWriting} />

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

export default SoftwareDevelopmentEnterprise;