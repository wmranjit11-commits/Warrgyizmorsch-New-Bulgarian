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
} from "../../../../data/All_Services_Data/softwareDevelopmentEnterpriseData";
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
  title: "Услуги за разработка на корпоративен софтуер | Експерти на Warrgyizmorsch",
  description:
    "Открийте първокласна разработка на корпоративен софтуер от Warrgyizmorsch. Персонализирани, мащабируеми и сигурни решения за задвижване на вашия бизнес растеж. Свържете се с нас днес.",
  keywords: [
    "Разработка на корпоративен софтуер",
    "Услуги за корпоративен софтуер",
    "компания за разработка на софтуер",
    "корпоративна софтуерна разработка",
    "агенция за софтуерна разработка",
    "ERP разработка",
  ],
  path: "/enterprise-software-development-service",
});

const SoftwareDevelopmentEnterprise = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Разработка на корпоративен софтуер - Warrgyizmorsch"}
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
                src="assets/img/icon/software_development.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  В Warrgyizmorsch се фокусираме върху стабилен, сигурен и мащабируем корпоративен софтуер, който съобразяваме с днешния бизнес климат. Като доверена компания за разработка на софтуер, ние проектираме интелигентни дигитални системи, които подобряват производителността и автоматизацията. С нашия широк спектър от услуги за разработка на корпоративен софтуер позволяваме на бизнесите да водят чрез иновации и гъвкавост. Независимо дали търсите цялостно решение или искате да допълните вътрешните си екипи, ние в Warrgyizmorsch предоставяме устойчива стойност. От стартирането до внедряването, ние сме вашият партньор в дигиталната трансформация, която подхранваме с висококачествен софтуер по поръчка.
                </p>
              </div>
            </div>
            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Benefits_section data={BenefitSection} />
            <Assistance_section data={AssistanceSection} />
            <NewIndustrySection />;{/* Blog Section  */}
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

export default SoftwareDevelopmentEnterprise;
