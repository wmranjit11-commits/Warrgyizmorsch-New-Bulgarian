import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection } from '../../../../data/All_Services_Data/appDevelopmentData';
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
  title: "Експертна разработка на мобилни приложения | iOS и Android решения",
  description:
        "Ние проектираме въздействащи мобилни приложения за iOS и Android, които ангажират и развиват. От идеята до стартирането, разчитайте на нашите експерти, за да превърнете вашата концепция в реалност.",
  keywords: [
        "разработка на мобилни приложения", "мобилни приложения", "услуги за разработка на приложения", "мобилно развитие", "персонализирани мобилни приложения", "агенция за мобилни приложения", "компания за разработка на приложения",
  ],
  path: "/mobile-app-development",
});

const MobileAppDevelopment = () => {
    return (
      <>
        <NewServiceHeroForm title={"Услуги за разработка на мобилни приложения, изградени за производителност и мащаб"} />
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
                  src="assets/img/icon/appDevelop.png"
                  loading="lazy"
                  alt="heading_image"
                />
                <div>
                  <p>
                    Ние предлагаме <strong>услуги от компания за разработка на мобилни приложения</strong>, проектирани да помагат на бизнеса да изгражда мощни, мащабируеми и ориентирани към потребителите дигитални изживявания. Мобилните приложения играят критична роля в начина, по който марките се свързват със своите аудитории, и ние се фокусираме върху създаването на приложения, които са бързи, надеждни и създадени да работят в реални условия.
                    Нашият екип разработва персонализирани мобилни приложения за iOS, Android и крос-платформени среди, използвайки съвременни рамки и най-добри практики. От интуитивни потребителски интерфейси до сигурна интеграция на бекенда, всяко приложение е проектирано да осигурява плавна работа и последователна функционалност на всички устройства.
                  </p>
                </div>
              </div>
              {/* Custom Mobile App Development Services  */}
              <Handle_Largedata_section LargeData={LargeData} />
              {/* Different Types of Mobile Apps */}
              <Services_we_offer data={ServicesSection} />
              {/* Innovative Solutions for Mobile App Development  */}
              <Custom_section data={CustomSection} />
              {/* Why Use Us for Mobile Application Development? */}
              <Benefits_section data={BenefitSection} />
              {/* Personalized Mobile App Development */}
              <Boost_section data={BoostSection} />
              {/* Exceptional Mobile App Development Services for Hire */}
              <Assistance_section data={AssistanceSection} />
              <NewIndustrySection />
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

export default MobileAppDevelopment;