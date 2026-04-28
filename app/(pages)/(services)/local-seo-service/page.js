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
} from "../../../../data/All_Services_Data/localSeoData";
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
  title: "Локални SEO Услуги | Професионални Local SEO Експерти Warrgyizmorsch",
  description:
    "Локалните SEO услуги на Warrgyizmorsch помагат на вашия бизнес да се класира по-високо в локалните търсения. Увеличете посещенията, потенциалните клиенти и видимостта с експертни Local SEO стратегии.",
  keywords: [
    "локално seo",
    "агенция за локално seo",
    "услуги за локално seo",
    "оптимизация за локално seo",
    "експерти по локално seo",
    "решения за локално seo",
    "локална търсачка",
    "компания за локално seo"
  ],
  path: "/local-seo-service",
});

const LocalSeoService = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Подобрете локалното си присъствие с нашите професионални Local SEO услуги"
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
                src="assets/img/icon/localSeoimage.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  По отношение на съдържателната стратегия и ангажираността на
                  общността, ние работим рамо до рамо с местните бизнеси, за да
                  създаваме кампании с реални резултати. Ние не се фокусираме
                  само върху кликовете – помагаме ви да изградите локално SEO
                  чрез истински връзки, които се превръщат в лоялни клиенти.
                  Нека заедно подобрим вашето локално онлайн присъствие.
                </p>
              </div>
            </div>

            {/* Персонализирани услуги */}
            <Services_we_offer data={ServicesSection} />

            {/* Как да изберете най-добрата Local SEO компания? */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Защо да изберете Warrgyizmorsch като ваша Local SEO агенция? */}
            <Custom_section data={CustomSection} />

            {/* Защо да изберете Warrgyizmorsch? */}
            <Benefits_section data={BenefitSection} />

            {/* Отключване на растежа чрез силата на Local SEO */}
            <Role_writing data={roleWriting} />

            {/* Разширете локалния си обхват */}
            <Boost_section data={BoostSection} />

            <div className="extra-box"></div>

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

export default LocalSeoService;