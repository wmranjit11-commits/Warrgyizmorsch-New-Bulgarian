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
} from "../../../../data/All_Services_Data/technicalSeoData";
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
  title: "Технически SEO услуги | SEO компания Warrgyizmorsch",
  description:
    "Техническите SEO услуги на Warrgyizmorsch помагат за подобряване на класирането, отстраняване на проблеми в сайта и оптимизация на производителността. Получете експертни решения за вашия уебсайт.",
  keywords: [
    "техническо SEO", "SEO техническа оптимизация", "SEO агенции", "оптимизация на техническо SEO", "технически SEO услуги", "SEO компании", "напреднало техническо SEO", "SEO стратегии", "SEO агенция", "SEO услуга", "SEO компания", "SEO услуги",
  ],
  path: "/technical-seo-service",
});

const TechnicalSeoService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Оптимизирайте производителността на вашия уебсайт с нашата експертиза в техническо SEO"
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

              .extra-box{
                display: flex;
                height: 70px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 25px;
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
                src="assets/img/icon/technicalSeoExpert.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  В Warrgyizmorsch знаем, че производителността на уебсайта е ключът към онлайн успеха. Нашият екип от експерти е посветен на оптимизирането на всяка част от техническата основа, върху която е изграден вашият бизнес, за да работи на най-високо ниво. Работим от технически одити до оптимизация на скоростта на зареждане. Независимо дали става дума за отстраняване на технически проблеми, които влияят на потребителското изживяване, или за подобряване на SEO класирането — ние имаме уменията да изведем вашия сайт на следващо ниво.
                </p>
              </div>
            </div>

            {/* Sections */}
            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

            <Role_writing data={roleWriting} />

            <Boost_section data={BoostSection} />

            <div className="extra-box"></div>

            <NewIndustrySection />

            {/* Blog Section */}
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

export default TechnicalSeoService;