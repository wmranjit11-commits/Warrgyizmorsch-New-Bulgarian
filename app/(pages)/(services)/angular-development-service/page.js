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
} from "../../../../data/All_Services_Data/angularDevelopmentData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Компания за Angular разработка | Warrgyizmorsch Experts",
  description:
    "Warrgyizmorsch е водеща компания за Angular разработка, предлагаща мащабируеми, сигурни и високопроизводителни уеб приложения според нуждите на вашия бизнес.",
  keywords: [
    "компания за Angular разработка",
    "услуги за AngularJS разработка",
    "Angular уеб разработка",
    "Angular JS разработка",
    "Angular уеб приложение разработка",
    "AngularJS уеб приложение разработка",
    "AngularJS разработчици",
    "наемете специализиран Angular разработчик",
    "компания за Angular JS уеб разработка",
  ],
  path: "/angular-development-service",
});

const AngularDevelopment = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Warrgyizmorsch - Компания за Angular разработка"}
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
                src="assets/img/icon/angular.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  Имаме дългогодишен опит като компания за Angular разработка,
                  специализирана в създаването на стабилни, мащабируеми и
                  високопроизводителни уеб приложения. Използвайки силата на
                  Angular – мощна JavaScript рамка – създаваме динамични и
                  адаптивни приложения, съобразени с нуждите на вашия бизнес.
                  Нашият екип от експерти гарантира ефективно изпълнение на
                  проектите и навременна доставка. Независимо дали се нуждаете
                  от едностранично приложение или мащабно корпоративно решение,
                  ние използваме Angular, за да предоставим иновативни решения,
                  които ще изведат бизнеса ви напред на конкурентния пазар.
                </p>
              </div>
            </div>

            {/* Leverage Our AngularJS Development Expertise for Your Next Project */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Explore the Magic of AngularJS Development Services */}
            <Benefits_section data={BenefitSection} />

            {/* Leading Angular Development Solutions */}
            <Boost_section data={BoostSection} />

            {/* Our AngularJS Development Approach */}
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

export default AngularDevelopment;