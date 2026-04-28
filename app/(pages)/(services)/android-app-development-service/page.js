import React from "react";
import {
  AssistanceSectionNew,
  BenefitSection,
  FAQ,
  LargeData,
} from "../../../../data/All_Services_Data/androidAppDevelopmentData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Експертни услуги за разработка на Android приложения | Warrgyizmorsch",
  description:
    "Вземете надеждна разработка на Android приложения с Warrgyizmorsch. Ние създаваме интелигентни, лесни за използване мобилни приложения, съобразени с вашите бизнес цели. Започнете днес!",
  keywords: [
    "разработка на android приложения",
    "агенция за android приложения",
    "компания за android приложения",
    "android разработчик",
    "разработка на нативни приложения",
    "тестване на android приложения",
    "мобилно развитие",
  ],
  path: "/android-app-development-service",
});

const AndroidAppDevelopmentServices = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Професионална услуга за разработка на Android приложения от Warrgyizmorsch"}
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
                src="assets/img/icon/appDevelop.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  {" "}
                  Warrgyizmorsch предоставя експертни <a href='https://warrgyizmorsch.com/mobile-app-development'>услуги за разработка на мобилни приложения</a>, които трансформират вашите идеи в надеждни, иновативни Android приложения. Нашите опитни разработчици изграждат високопроизводителни, лесни за използване приложения, съобразени с нуждите на бизнеса и физическите лица. От дизайна и разработката до тестването и внедряването, ние управляваме целия жизнен цикъл на приложението. Фокусираме се върху мащабируеми, сигурни решения с ниска поддръжка, съобразени с вашите бизнес цели, помагайки ви да ангажирате потребителите, да оптимизирате операциите и да останете конкурентоспособни на дигиталния пазар.{" "}
                </p>
              </div>
            </div>
            <Handle_Largedata_section LargeData={LargeData} />
            <Benefits_section data={BenefitSection} />
            <Assistance_section data={AssistanceSectionNew} />
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

export default AndroidAppDevelopmentServices;
