import React from 'react';
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  roleWriting
} from '../../../../data/All_Services_Data/webMaintenanceSupportServicesData';
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
  title: "Услуги за поддръжка и поддръжка на уебсайтове | Сигурност на уебсайт",
  description:
    "Получете професионални услуги за поддръжка и поддръжка на уебсайтове, за да поддържате сайта си защитен, актуален, бърз и оптимизиран. Ние осигуряваме най-доброто потребителско изживяване.",
  keywords: [
    "поддръжка на уебсайт", "услуги за поддръжка на уебсайтове", "уеб поддръжка", "професионална поддръжка на уебсайтове", "сигурност и актуализации на уебсайтове", "мониторинг на производителността", "достъпни планове за поддръжка", "наемане на експерти за уеб поддръжка",
  ],
  path: "/web-maintenance-end-Support",
});

const WebMaintenanceSupport = () => {
  return (
    <>
      <NewServiceHeroForm title={"Услуги за поддръжка и поддръжка на уебсайтове"} />

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
                src="assets/img/icon/web_maintenance.webp"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  В нашата компания предлагаме пълна гама от услуги за поддръжка и поддръжка на уебсайтове, създадени да гарантират безпроблемната работа на вашия сайт. Ние се грижим сайтът ви да бъде сигурен, актуален и напълно оптимизиран за скорост и производителност. От техническо наблюдение до проактивно решаване на проблеми, ние покриваме всички аспекти на дигиталната поддръжка, за да можете да се фокусирате върху развитието на бизнеса си уверено и ефективно онлайн.
                </p>
              </div>
            </div>

            <Services_we_offer data={ServicesSection} />

            <Handle_Largedata_section LargeData={LargeData} />

            <Benefits_section data={BenefitSection} />

            <Role_writing data={roleWriting} />

            <Boost_section data={BoostSection} />

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

export default WebMaintenanceSupport;