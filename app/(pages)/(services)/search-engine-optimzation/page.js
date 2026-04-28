import React from 'react';
import {
  LargeData,
  BenefitSection,
  roleWriting,
  FAQ,
  AssistanceSection,
  BoostSection,
} from "../../../../data/All_Services_Data/seoData";

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
  title: "Какво е SEO и защо е важно?",
  description:
    "SEO (оптимизация за търсачки) помага за по-високо класиране в Google, повече органичен трафик и устойчив растеж на бизнеса онлайн.",
  keywords: [
    "SEO агенция",
    "SEO услуги",
    "оптимизация за търсачки",
    "SEO маркетинг",
    "SEO компания",
    "локално SEO",
    "техническо SEO",
    "ecommerce SEO",
    "SEO консултации",
    "SEO експерт"
  ],
  path: "/search-engine-optimzation",
});

const SEO = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Професионални SEO услуги за по-високо класиране и органичен растеж"
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
                src="assets/img/icon/seo.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Ние предоставяме професионални SEO стратегии, създадени за
                  подобряване на вашата дигитална основа и ускоряване на
                  органичния растеж. Нашият подход се фокусира върху по-добра
                  видимост в търсачките, привличане на целеви потребители и
                  превръщане на трафика в реални бизнес резултати. Чрез
                  техническа оптимизация, задълбочено проучване и качествено
                  съдържание, помагаме на вашия сайт да се класира по-високо и
                  устойчиво във времето.
                </p>
              </div>
            </div>

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

export default SEO;