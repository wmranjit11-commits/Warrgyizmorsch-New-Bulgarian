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
} from "../../../../data/All_Services_Data/ai-consulting-servicesData";

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
  title: "AI консултантски услуги за интелигентен и мащабируем бизнес растеж",
  description:
    "Нашите AI консултантски услуги помагат на бизнеса да изгражда интелигентни и мащабируеми стратегии за растеж чрез анализ на данни, усъвършенствани AI модели и доказан опит.",
  keywords: [
    "AI консултантски услуги",
    "AI consulting services",
    "изкуствен интелект",
    "бизнес растеж",
    "AI стратегия",
    "машинно обучение",
    "AI решения",
    "дигитална трансформация",
    "enterprise software development",
    "AI automation",
  ],
  path: "/enterprise-software-development-service",
});

const SoftwareDevelopmentEnterprise = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "AI консултантски услуги, които помагат на бизнеса да изгради интелигентен и мащабируем растеж"
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
                  Изкуственият интелект вече не е футуристична концепция,
                  запазена само за технологичните гиганти. Той се превърна в
                  практичен и ориентиран към резултати инструмент, който
                  бизнесите от различни индустрии използват, за да получат
                  конкурентно предимство.

                  От автоматизация на процесите до подобряване на вземането на
                  решения и клиентското обслужване – AI консултантските услуги
                  променят начина, по който работят съвременните организации.

                  Успешното внедряване на AI обаче не е само използване на
                  модерни алгоритми и инструменти. То изисква ясна стратегия,
                  правилна база от данни и експертно изпълнение.

                  Именно тук AI консултантските услуги играят ключова роля.
                  Те позволяват на организациите да преминат отвъд
                  експериментите и да изградят AI системи, които носят
                  измерима бизнес стойност.

                  Вместо разпокъсани инициативи, компаниите получават
                  структуриран, мащабируем и етичен подход към внедряването на
                  изкуствен интелект.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Benefits_section data={BenefitSection} />
            <Role_writing data={roleWriting} />
            <Assistance_section data={AssistanceSection} />
            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ Section */}
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