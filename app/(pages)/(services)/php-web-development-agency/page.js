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
} from "../../../../data/All_Services_Data/phpWebDevData";

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
  title: "PHP уеб разработка агенция | Персонализирани PHP решения",
  description:
    "Warrgyizmorsch е водеща PHP уеб разработка агенция, която предоставя персонализирани, мащабируеми и сигурни PHP решения за растеж на бизнеса онлайн.",
  keywords: [
    "PHP разработка",
    "PHP разработчици",
    "PHP услуги за разработка",
    "PHP уеб разработка агенция",
    "PHP програмиране",
    "PHP уеб разработка",
    "PHP сайт разработка",
    "PHP компания за разработка",
    "PHP уеб разработка компания"
  ],
  path: "/php-web-development-agency",
});

const PHPWebDevelopmentService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Персонализирана PHP уеб разработка агенция с индивидуални дигитални решения"
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
                src="assets/img/icon/phpwebdev.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Като PHP уеб разработка агенция, ние създаваме гъвкави и
                  надеждни дигитални решения, съобразени с вашите бизнес цели.
                  Нашият екип се фокусира върху изграждане на сигурни,
                  бързи и мащабируеми PHP уебсайтове, проектирани специално
                  според вашите нужди. От персонализирани уеб приложения до
                  динамични сайтове, ние гарантираме чист код, стабилна
                  производителност и лесни бъдещи подобрения. Работим в тясно
                  сътрудничество с вас, за да създадем решения, които подобряват
                  потребителското изживяване, подпомагат растежа и отличават
                  вашия бизнес онлайн.
                </p>
              </div>
            </div>

            {/* Sections */}
            <Handle_Largedata_section LargeData={LargeData} />
            <Benefits_section data={BenefitSection} />
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

export default PHPWebDevelopmentService;