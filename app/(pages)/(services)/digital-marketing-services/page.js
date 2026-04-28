import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  servicesSection,
} from "../../../../data/All_Services_Data/digitalMarketingData";
import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Достъпни дигитални маркетинг услуги за растеж на бизнеса",
  description:
    "Ускорете развитието на бизнеса с достъпни дигитални маркетинг услуги. SEO, социални мрежи, PPC и стратегии за повече трафик и продажби.",
  keywords: [
    "дигитални маркетинг услуги",
    "дигитален маркетинг",
    "маркетинг агенция",
    "достъпни дигитални маркетинг услуги",
    "онлайн маркетинг",
    "дигитална маркетинг компания",
    "маркетинг стратегия",
    "дигитална реклама",
    "стратегия за дигитален маркетинг",
    "агенции за ecommerce маркетинг",
    "ppc маркетинг агенции",
  ],
  path: "/digital-marketing-services",
});

const DigitalMarketing = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Най-добрите достъпни дигитални маркетинг услуги за растеж на бранда"
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
                src="assets/img/icon/digital_header_img.png"
                loading="lazy"
                alt="heading_image"
              />

              <p>
                В Warrgyizmorsch предлагаме цялостна дигитална маркетинг услуга,
                създадена да ускорява растежа на бранда и да увеличава онлайн
                присъствието. Нашите стратегии са изградени около целите на
                вашия бизнес, комбинирайки креативност, анализ на данни и
                доказани маркетингови техники, за да отличим марката ви в
                конкурентната дигитална среда.
                <br />
                <br />
                От повишаване на разпознаваемостта и привличане на качествен
                трафик до генериране на запитвания и подобряване на
                конверсиите — ние се фокусираме върху реални измерими резултати.
                Всяка кампания се планира, изпълнява и оптимизира внимателно за
                стабилна ефективност във всички дигитални канали.
              </p>
            </div>

            {/* services help business grow */}
            <Services_we_offer data={servicesSection} />

            {/* why WM is the best choice */}
            <Custom_section data={CustomSection} />

            {/* why choose us */}
            <Boost_section data={BoostSection} />

            {/* why work with us */}
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

export default DigitalMarketing;