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
} from "../../../../data/All_Services_Data/landingpageData";
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
  title: "Професионални услуги за дизайн на Landing Page за растеж",
  description:
    "Увеличете реализациите с експертни услуги за дизайн на landing page. Получете персонализирани страници с висока конверсия, които подобряват потребителското изживяване и бизнес резултатите.",
  keywords: [
    "услуги за дизайн на landing page",
    "дизайн на landing page",
    "агенция за landing page дизайн",
    "идеи за landing page",
    "компания за landing page дизайн",
    "цени за landing page услуги",
    "landing page за мобилни приложения",
    "landing page за услуги",
    "структура на landing page",
    "responsive landing page",
  ],
  path: "/landing-page-design-service",
});

const LandingPageDesign = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Професионални услуги за дизайн на Landing Page"}
      />

      <section className="space-extra-bottom">
        <div className="page-single">
          <div className="page-content">
            <style>{`
              .header-section{
                display:flex;
                align-items:center;
                gap:20px;
                margin-bottom:30px;
              }

              .header-section img{
                height:400px;
              }

              .header-section p{
                text-align:left;
              }

              @media only screen and (max-width:990px){
                .header-section{
                  flex-direction:column;
                }

                .header-section img{
                  height:200px;
                }

                .header-section p{
                  text-align:center;
                }
              }
            `}</style>

            {/* Intro */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/LandingPage.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Ние в Warrgyizmorsch предлагаме услуги за дизайн на landing
                  page, насочени към реален бизнес растеж чрез дигитални
                  решения. Нашият екип създава страници, които се зареждат
                  отлично на всяко устройство и увеличават конверсиите чрез
                  responsive оформление. Тези страници показват нашата
                  креативност и максимизират възвръщаемостта на инвестициите за
                  вашия бранд, като поставят резултатите на първо място.
                </p>
              </div>
            </div>

            {/* Sections */}
            <Handle_Largedata_section LargeData={LargeData} />

            <Benefits_section data={BenefitSection} />

            <Custom_section data={CustomSection} />

            <Boost_section data={BoostSection} />

            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ */}
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

export default LandingPageDesign;