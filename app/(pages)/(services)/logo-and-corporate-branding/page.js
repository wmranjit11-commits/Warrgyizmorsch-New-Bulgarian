import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, roleWriting } from '../../../../data/All_Services_Data/logoCorporateBrandingData';
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
  title: "Професионални услуги за лого и корпоративен брандинг",
  description:
    "Подсилете идентичността на бизнеса си с професионален дизайн на лого и корпоративен брандинг. Създайте запомняща се марка, която се свързва с вашата аудитория.",
  keywords: [
    "най добра агенция за лого дизайн",
    "брандинг компания",
    "услуги за дизайн на лого",
    "услуга за дизайн на лого",
    "брандинг услуги",
    "услуги за личен брандинг"
  ],
  path: "/logo-and-corporate-branding",
});

const LogoCorporateBranding = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Услуги за лого и корпоративен брандинг от най-добрата агенция за лого дизайн"
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
                src="assets/img/icon/logo-and-corporate-branding.webp"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Warrgyiz Morsch създава лога и бранд идентичности, които
                  перфектно представят същността на бизнеса. Нашите експертни
                  дизайнери и стратези работят с вас, за да превърнат идеите ви
                  в силни визуални решения. Доверието и професионализмът идват
                  естествено чрез тези визуални комуникации. Брандингът е повече
                  от външен вид – той създава емоционални връзки. Трайното
                  въздействие е крайната цел на всеки проект.
                </p>
              </div>
            </div>

            {/* Креативни дизайни, които издигат вашия бранд */}
            <Services_we_offer data={ServicesSection} />

            <Handle_Largedata_section LargeData={LargeData} />

            {/* Защо да изберете нас */}
            <Benefits_section data={BenefitSection} />

            {/* Значението на брандинг стратегиите */}
            <Role_writing data={roleWriting} />

            {/* Пълни услуги за корпоративен брандинг */}
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

export default LogoCorporateBranding;