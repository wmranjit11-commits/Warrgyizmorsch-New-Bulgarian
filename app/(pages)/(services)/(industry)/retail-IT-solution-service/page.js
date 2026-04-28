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
} from "../../../../../data/Industry_Data/retailData";

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
  title: "Интелигентни IT услуги за мащабируеми Retail IT решения и услуги",
  description:
    "Подобрете търговските операции с мащабируеми Retail IT решения и услуги. Оптимизирайте наличностите, подобрете клиентското изживяване и стимулирайте растежа чрез иновативни технологии.",
  keywords: [
    "Retail IT Solutions & Services",
    "Retail IT Services",
    "retail software development",
    "retail software company",
    "POS software development",
    "custom retail software",
    "software for retail",
    "inventory retail systems",
    "retail technology solutions",
    "ecommerce retail systems",
  ],
  path: "/retail-IT-solution-service",
});

const Retail = () => {
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
                IT услуги и решения за търговията
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
                src="assets/img/icon/retail.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Indianic ви предлагаме интелигентни и мащабируеми IT услуги
                  и решения за търговията, от които съвременният бизнес има
                  нужда.

                  Работим както с онлайн магазини, така и с физически търговски
                  вериги, като помагаме на брандовете да се трансформират,
                  адаптират и развиват.

                  Нашите Retail IT решения и услуги подобряват ефективността,
                  удовлетвореността на клиентите и конкурентното предимство.

                  Всичко това е изградено върху дълбоки познания в сектора и
                  използването на водещи технологии, които обновяваме според
                  развитието на пазара.
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

export default Retail;