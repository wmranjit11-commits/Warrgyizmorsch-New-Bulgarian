import React from 'react';
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection
} from '../../../../data/All_Services_Data/reactjsData';

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
  title: "Наемете ReactJS разработчици за мащабируеми уеб приложения",
  description:
    "Наемете експертни ReactJS разработчици за високопроизводителни уеб приложения. Получете мащабируеми и надеждни React услуги, съобразени с вашия бизнес.",
  keywords: [
    "ReactJS разработчици",
    "ReactJS разработчик",
    "React услуги за разработка",
    "React приложения",
    "React разработка",
    "React уеб разработка",
    "ReactJS компания за разработка",
    "React разработваща агенция",
    "React приложение разработка",
    "React уеб агенция"
  ],
  path: "/reactjs-developers",
});

const ReactjsDeveloper = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Надеждни ReactJS услуги за разработка на мащабируеми и високопроизводителни приложения"
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
                src="assets/img/icon/jsreact.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Нашите ReactJS услуги за разработка предоставят на бизнеса
                  високопроизводителни, мащабируеми и интерактивни уеб
                  приложения, съобразени с неговите нужди. Специализираме в
                  създаване на плавни потребителски интерфейси, ефективни
                  front-end архитектури и адаптивни дизайни, които подобряват
                  потребителското изживяване. Чрез използване на модерни ReactJS
                  възможности и добри практики, ние създаваме сигурни, бързи и
                  готови за бъдещето решения. От персонализирани уеб приложения
                  до сложни корпоративни системи, гарантираме безупречна работа
                  и растеж заедно с вашия бизнес.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
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

export default ReactjsDeveloper;