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
} from "../../../../../data/Industry_Data/manufacturingData";

import Services_we_offer from "../../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../../components/service-components/Role_writing";
import Custom_section from "../../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../../utils/seo";
import BulletsSection from "../../../../../components/service-components/BulletsSection";

export const metadata = generateSEOMeta({
  title: "Интелигентни IT услуги и решения за модерното производство",
  description:
    "Подобрете производствения си бизнес с модерни IT решения. Увеличете ефективността, намалете престоя и стимулирайте растежа чрез дигитална трансформация.",
  keywords: [
    "IT Services and Solutions for Manufacturing",
    "manufacturing IT services",
    "manufacturing solutions",
    "smart factory solutions",
    "industrial software",
    "manufacturing automation",
    "digital manufacturing",
    "IT strategy consulting",
    "factory management software",
    "production technology solutions",
  ],
  path: "/IT-services-for-manufacturing",
});

const Manufacturing = () => {
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: `url('assets/img/service/serviceD.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="service-sec"
      >
        <div className="round-container pt-5">
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title text-white">НАШИТЕ УСЛУГИ</span>

              <h1 className="sec-title text-white">
                IT услуги и решения за производството
              </h1>
            </div>
          </div>
        </div>
      </section>

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
                src="assets/img/icon/manufacturing.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyizmorsch сме фокусирани върху предоставянето на
                  висококачествени IT услуги и решения за производствени
                  компании.

                  Нашата мисия е да водим дигиталната трансформация чрез
                  интелигентни IT услуги, съобразени със специфичните
                  предизвикателства пред производствения сектор.

                  От автоматизация до модернизация на софтуерни системи,
                  предоставяме производствени решения, които стимулират
                  растежа, подобряват качеството и намаляват разходите.

                  С нашите доказани услуги подпомагаме създаването на
                  по-интелигентни, по-бързи и по-устойчиви фабрики на бъдещето.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

            <Custom_section data={CustomSection} />

            <Benefits_section data={BenefitSection} />

            <Assistance_section data={AssistanceSection} />

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

export default Manufacturing;