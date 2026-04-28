import React from 'react';
import { AssistanceSection, BenefitSection, CustomSection, FAQ, LargeData, ServicesSection } from '../../../../data/All_Services_Data/reactnativeData';
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
  title: "Разработка на хибридни приложения с React Native за бързи и мащабируеми мобилни приложения",
  description:
            "Ускорете бизнеса си с разработка на хибридни приложения с React Native, доставяща бързи, рентабилни и мащабируеми мобилни приложения за iOS и Android платформи.",
  keywords: [
            "разработка на хибридни приложения с React Native", "услуги за React Native разработчици", "разработка на мобилни приложения с React Native", "услуги за разработка на приложения с React Native", "агенция за разработка на приложения",
  ],
  path: "/react-native-hybrid-app-development",
});

const ReactNative = () => {
    return (
      <>
        <NewServiceHeroForm title={"Разработка на хибридни приложения с React Native за мащабируеми мобилни решения"} />
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
                  src="assets/img/icon/reactnative.jpg"
                  loading="lazy"
                  alt="heading_image"
                />
                <div>
                  <p>
                    Нашият подход за разработка на хибридни приложения с React Native осигурява високопроизводителни, мащабируеми мобилни приложения за модерния бизнес. Чрез използване на усъвършенствани рамки и компоненти за многократна употреба, ние гарантираме по-бърза разработка и последователно потребителско изживяване на всички платформи. С нашите експертни услуги за разработка на приложения с React Native създаваме сигурни, рентабилни и богати на функции решения, съобразени с вашите бизнес цели, помагайки ви да разширите обхвата си, да подобрите ангажираността и да се адаптирате лесно към бъдещия растеж и променящите се изисквания на пазара.
                  </p>
                </div>
              </div>
              {/* Custom Mobile App Development Services  */}
              <Handle_Largedata_section LargeData={LargeData} />
              {/* Innovative Solutions for Mobile App Development  */}
              <Custom_section data={CustomSection} />
              {/* Why Use Us for Mobile Application Development? */}
              <Benefits_section data={BenefitSection} />
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

export default ReactNative;