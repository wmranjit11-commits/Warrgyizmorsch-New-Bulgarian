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
} from "../../../../data/All_Services_Data/ecommerceSeoData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title:
    "Водещи eCommerce SEO Услуги от Warrgyizmorsch | Експертна Маркетинг Агенция",
  description:
    "Warrgyizmorsch предлага мощни eCommerce SEO услуги за по-добри позиции в търсачките, повече целеви посетители и максимална ефективност на онлайн магазина.",
  keywords: [
    "ecommerce seo услуги",
    "професионални ecommerce seo услуги",
    "seo за онлайн магазин",
    "ecommerce seo агенция",
    "оптимизация за ecommerce сайт",
    "seo маркетинг за електронна търговия",
    "seo стратегии за онлайн магазин",
    "seo за ecommerce бизнес",
    "консултант ecommerce seo",
    "експерт ecommerce seo",
    "seo компания за онлайн магазини",
  ],
  path: "/ecommerce-seo-service",
});

const EcommerceSEO = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Разширете Онлайн Присъствието си с Резултатни Ecommerce SEO Услуги"
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

            {/* Intro */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/eCommerceSeo.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В днешната конкурентна онлайн среда силното дигитално
                  присъствие е ключът към успеха. В Warrgyizmorsch предлагаме
                  професионални eCommerce SEO услуги, които увеличават
                  трафика, подобряват класирането в търсачките и стимулират
                  продажбите. Нашите стратегии са създадени специално за онлайн
                  магазини и помагат на бизнеса ви да достигне точната аудитория
                  и да постигне устойчив растеж.
                </p>
              </div>
            </div>

            {/* Expert eCommerce SEO Services */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Strategy */}
            <Benefits_section data={BenefitSection} />

            {/* Growth */}
            <Role_writing data={roleWriting} />

            {/* Business Growth */}
            <Boost_section data={BoostSection} />

            {/* Why Choose Us */}
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

export default EcommerceSEO;