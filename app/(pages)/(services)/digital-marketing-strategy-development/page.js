import React from "react";
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
} from "../../../../data/All_Services_Data/digiStrategyDevelopmentData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Експертно разработване на дигитална маркетинг стратегия",
  description:
    "Подобрете онлайн присъствието си с експертно разработване на дигитална маркетинг стратегия. Персонализирани решения за трафик, клиенти и растеж.",
  keywords: [
    "разработване на дигитална маркетинг стратегия",
    "дигитална маркетинг стратегия",
    "услуги за дигитална маркетинг стратегия",
    "решения за дигитална маркетинг стратегия",
    "маркетинг стратегия",
    "бранд стратегия",
    "маркетингов план",
    "стратегия за социални мрежи",
    "маркетингов стратег",
    "маркетингови услуги",
    "стратегия за социален маркетинг",
    "бизнес маркетинг стратегия",
  ],
  path: "/digital-marketing-strategy-development",
});

const DigitalMarketingStrategyDevelopment = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Разработване на дигитална маркетинг стратегия"}
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

              @media only screen and (max-width: 990px){
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

            {/* Intro part */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/digitalMarketingStrategyImg2.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyizmorsch се фокусираме върху създаването на умни и
                  мащабируеми дигитални маркетинг решения според нуждите на
                  вашия бизнес. Независимо дали стартирате за първи път или
                  вече имате изграден маркетинг екип, ние предлагаме услуги за
                  дигитална маркетинг стратегия, които подобряват резултатите
                  ви чрез подход, базиран на данни, креативност и опит.
                </p>
              </div>
            </div>

            {/* Our Digital Marketing Strategy Services Include */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Why Your Business Needs a Digital Marketing Strategy */}
            <Custom_section data={CustomSection} />

            {/* Benefits of a Digital Marketing Strategy */}
            <Benefits_section data={BenefitSection} />

            {/* Why Warrgyizmorsch Is the Best Choice */}
            <Boost_section data={BoostSection} />

            {/* Why Work with Us */}
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

export default DigitalMarketingStrategyDevelopment;