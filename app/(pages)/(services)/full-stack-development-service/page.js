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
} from "../../../../data/All_Services_Data/fullStackData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Услуги за Full-Stack разработка | Експертни решения",
  description:
    "Отключете професионални услуги за Full-Stack разработка. Изграждаме модерни, мащабируеми уеб приложения с водещи front-end и back-end технологии.",
  keywords: [
    "full-stack разработка",
    "full stack уеб разработчици",
    "fullstack уеб разработка",
    "full stack разработка на уебсайтове",
    "full stack разработчик",
    "пълна уеб разработка",
    "услуги за full stack разработка",
    "fullstack разработка",
    "full stack софтуерен разработчик",
    "full stack софтуерна разработка",
    "компания за full stack разработка",
  ],
  path: "/full-stack-development-service",
});

const FullStackDevelopmentService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Full-Stack разработка, която стимулира растежа"}
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

              .extra-box{
                display:flex;
                height:70px;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                padding:25px;
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
                src="assets/img/icon/fullstack.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Предлагаме цялостни решения чрез Full-Stack разработка, която
                  превръща вашите идеи в мащабируеми и високоефективни дигитални
                  продукти. От модерни front-end интерфейси до мощни back-end
                  системи – ние управляваме целия процес вътрешно. Нашият подход
                  гарантира, че продуктът ви расте заедно с бизнеса ви сигурно,
                  плавно и ефективно. Ние не сме просто разработчици, а ваш
                  технологичен партньор за растеж.
                </p>
              </div>
            </div>

            {/* Sections */}
            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

            <Benefits_section data={BenefitSection} />

            <Boost_section data={BoostSection} />

            <div className="extra-box"></div>

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

export default FullStackDevelopmentService;