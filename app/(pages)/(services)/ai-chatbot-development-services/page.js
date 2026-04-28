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
} from "../../../../data/All_Services_Data/ai-chatbot-development-servicesData";
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
  title: "Услуги за разработка на AI чатботове за интелигентна автоматизация",
  description:
    "Услуги за разработка на AI чатботове, които трансформират взаимодействието с клиентите чрез интелигентна автоматизация, подобрявайки ангажираността, времето за реакция и потребителското изживяване.",
  keywords: [
    "Разработка на AI чатботи",
    "Услуги за AI чатботи",
    "разработка на чатботи",
    "изкуствен интелект",
    "автоматизация",
    "чатбот за обслужване на клиенти",
    "AI обслужване на клиенти",
    "чатбот с машинно обучение",
    "NLP чатбот",
    "бизнес решения с чатботи",
  ],
  path: "/enterprise-software-development-service",
});

const SoftwareDevelopmentEnterprise = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Услуги за разработка на AI чатботове: Революция във взаимодействието с клиентите чрез интелигентна автоматизация"
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
                  В днешния забързан дигитален свят бизнесите се нуждаят от
                  по-интелигентни начини за комуникация с клиентите си.
                  Услугите за разработка на AI чатботове предоставят модерно
                  решение, което свързва човешкото взаимодействие с
                  автоматизацията.

                  Чрез използване на усъвършенствано машинно обучение и
                  обработка на естествен език, AI чатботовете променят начина,
                  по който компаниите обработват клиентски запитвания,
                  поддръжка и ангажираност.

                  Интегрирането на AI чатбот във вашите системи гарантира, че
                  клиентите получават незабавни отговори, персонализирано
                  обслужване и постоянна поддръжка, което повишава общото
                  удовлетворение и лоялност.
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