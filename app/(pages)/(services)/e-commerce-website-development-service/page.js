import React from "react";
import {
  AssistanceSection,
  AssistanceSectionNew,
  BenefitSection,
  CustomSection,
  FAQ,
  LargeData,
  roleWriting,
} from "../../../../data/All_Services_Data/ecommerceServiceData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
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
  title: "Услуга за разработка на E-Commerce уебсайтове за растеж",
  description:
    "Разкрийте силата на онлайн продажбите с нашата услуга за разработка на E-Commerce уебсайтове. Сигурни, бързи и SEO оптимизирани магазини за вашия бизнес.",
  keywords: [
    "услуги за разработка на ecommerce уебсайт",
    "разработчик на ecommerce уебсайт",
    "компания за ecommerce разработка",
    "e commerce разработка",
    "агенция за ecommerce разработка",
    "агенция за разработка на ecommerce уебсайт",
    "компании за дизайн на ecommerce уебсайт",
    "разработка на e commerce приложение",
    "ecommerce уеб разработка",
    "разработка на ecommerce мобилно приложение",
    "компания за ecommerce уеб дизайн",
    "разработка на ecom уебсайт",
    "персонализирана ecommerce разработка",
    "услуги за e commerce разработка",
  ],
  path: "/e-commerce-website-development-service",
});

const EcommerceService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Умна услуга за разработка на ECommerce уебсайтове за дигитални бизнеси"
        }
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
                src="assets/img/icon/e-commerce.avif"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Силен онлайн магазин започва с надеждна услуга за разработка
                  на ECommerce уебсайтове, която разбира както технологиите,
                  така и поведението на потребителите. Ние помагаме на
                  дигиталните бизнеси да изграждат сигурни, мащабируеми и
                  високоефективни онлайн магазини, създадени да привличат
                  клиенти и да превръщат трафика в продажби.
                  <br />
                  <br />
                  Нашата услуга е фокусирана върху създаването на responsive и
                  SEO оптимизирани сайтове, които осигуряват безпроблемно
                  пазаруване на всички устройства. От интуитивни продуктови
                  страници и бързо зареждане до сигурни разплащания и лесен
                  checkout процес – всяка функция е изградена за максимално
                  удобство и резултати.
                </p>
              </div>
            </div>

            <Benefits_section data={BenefitSection} />

            <Handle_Largedata_section LargeData={LargeData} />

            <Assistance_section data={AssistanceSectionNew} />

            <Custom_section data={CustomSection} />

            <Role_writing data={roleWriting} />

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

export default EcommerceService;