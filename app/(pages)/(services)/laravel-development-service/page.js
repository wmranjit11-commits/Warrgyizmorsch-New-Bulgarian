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
} from "../../../../data/All_Services_Data/laravelDevelopmentData";
import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Топ компания за Laravel Development услуги и уеб решения",
  description:
    "Като водеща компания за Laravel Development услуги, ние създаваме персонализирани уеб приложения, които са мащабируеми, сигурни и оптимизирани за растежа на вашия бизнес.",
  keywords: [
    "laravel development услуги",
    "laravel development компания",
    "laravel development агенция",
    "laravel уеб разработка",
    "laravel софтуерна разработка",
    "laravel услуги за уебсайтове",
    "laravel уеб компания",
    "laravel разработка на уебсайтове",
    "laravel app development",
    "laravel website company",
    "laravel web services",
    "laravel development",
  ],
  path: "/laravel-development-service",
});

const LaravelDevelopment = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Персонализирани Laravel Development услуги"}
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
                src="assets/img/icon/laraveldeveloper.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyizmorsch предлагаме висококачествени Laravel
                  Development услуги, които трансформират дигиталното присъствие
                  на бизнеса чрез мощни и персонализирани уеб решения. Laravel е
                  известен със своя елегантен код, мащабируемост и висока
                  производителност, което го прави идеален избор за създаване на
                  стабилни приложения според вашите цели. Независимо дали сте
                  стартъп, който иска бързо навлизане на пазара, или утвърдена
                  компания, която модернизира стари системи, нашият екип
                  комбинира технически умения и стратегически подход.
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

export default LaravelDevelopment;