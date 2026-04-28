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
} from '../../../../data/All_Services_Data/seoContentWritingData';

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
  title: "SEO съдържание писане услуги | Професионална копирайтинг агенция",
  description:
    "SEO съдържание писане услуги от Warrgyizmorsch за по-добро класиране, повече трафик и ангажиране на правилната аудитория чрез качествено съдържание.",
  keywords: [
    "SEO съдържание писане",
    "SEO копирайтинг",
    "SEO съдържание услуги",
    "SEO писане на текстове",
    "копирайтинг услуги",
    "SEO съдържание агенция",
    "SEO текстове за уебсайт",
    "писане на SEO съдържание",
    "SEO content writing"
  ],
  path: "/seo-content-writing-service",
});

const SeoContentWriting = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"SEO съдържание, което подобрява онлайн видимостта"}
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
                src="assets/img/icon/seoContent.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В съвременната дигитална среда SEO съдържанието е ключово за
                  по-добра онлайн видимост. Ние създаваме висококачествено
                  съдържание, което говори едновременно на аудиторията и на
                  търсачките. Чрез стратегическо използване на SEO техники
                  увеличаваме органичния трафик, подобряваме класирането и
                  засилваме вашето онлайн присъствие.
                </p>
              </div>
            </div>

            <Services_we_offer data={ServicesSection} />
            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Benefits_section data={BenefitSection} />
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

export default SeoContentWriting;