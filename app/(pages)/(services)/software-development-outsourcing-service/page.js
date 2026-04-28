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
} from "../../../../data/All_Services_Data/softwareDevelopmentOutsourcingData";
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
  title: "Warrgyizmorsch: Доверен ИТ аутсорсинг за софтуерна разработка",
  description:
      "Изберете Warrgyizmorsch за вашия ИТ аутсорсинг партньор за експертни услуги за разработка на софтуер. Повишете ефективността, намалете разходите и ускорете дигиталния си растеж.",
  keywords: [
      "ИТ аутсорсинг услуги", "Аутсорсинг на софтуерна разработка", "ИТ аутсорсинг компания", "Офшорна софтуерна разработка", "ИТ аутсорсинг решения",
  ],
  path: "/software-development-outsourcing-service",
});

const SoftwareDevelopmentOutsourcing = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Вашият доказан партньор за ИТ аутсорсинг в софтуерната разработка"
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
            {/* Intro part  */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/software_development3.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  Ние се фокусираме върху предоставянето на ИТ аутсорсинг софтуер, който включва софтуерна разработка за компании със специфични изисквания. Ние сме ИТ аутсорсинг компания, която ви носи навременна, мащабируема и висококачествена дигитална трансформация. Независимо дали търсите компания за аутсорсинг на софтуерна разработка или цялостни ИТ решения, нашите специализирани екипи са проектирани за въздействие. Ние служим като ваше продължение за справяне със сложен инженеринг. Като топ компания за аутсорсинг на софтуерна разработка, ние доставяме услуги с прозрачност и високи постижения.
                </p>
              </div>
            </div>
            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Benefits_section data={BenefitSection} />
            <Assistance_section data={AssistanceSection} />
            <NewIndustrySection />;
            {/* Blog Section  */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>
            {/* FAQ section  */}
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

export default SoftwareDevelopmentOutsourcing;
