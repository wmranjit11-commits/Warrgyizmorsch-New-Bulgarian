import React from 'react';
import Services_we_offer from '../../../../components/service-components/Services_we_offer';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, } from '../../../../data/All_Services_Data/advertisementDesignServicesData';
import Custom_section from '../../../../components/service-components/Custom_services_section';
import Benefits_section from '../../../../components/service-components/Benefits_section';
import Assistance_section from '../../../../components/service-components/Assistance_section';
import FAQ_section from '../../../../components/service-components/FAQ_section';
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from '../../../../utils/seo';
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Най-добрите услуги за дизайн на реклами | Експерт по дигитална и печатна реклама",
  description:
    "Повишете видимостта на вашия бранд с професионални услуги за дизайн на реклами. Персонализирани оформления, креативни концепции и висококачествени визуални решения за отлично представяне.",
  keywords: ["услуги за дизайн на реклами", "решения за рекламен дизайн", "агенция за рекламен дизайн", "шаблони за рекламен дизайн", "услуги за уеб дизайн", "услуги за дигитален маркетинг", "цени за дизайн", "пакети за графичен дизайн", "списък с услуги за графичен дизайн", "рекламни дизайни"],
  path: "/advertisement-design-services",
});

const AdvertisementDesignServices = () => {
    return (
      <>
        <NewServiceHeroForm title={"Услуги за дизайн на реклами"} />
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
              {/* Intro part  */}
              <div
                className="header-section container"
                style={{ marginTop: "20px" }}
              >
                <img
                  src="assets/img/icon/advertisment_design.webp"
                  loading="lazy"
                  alt="heading_image"
                />
                <div>
                  <p>
                    Нашата компания предоставя услуги за дизайн на реклами, които
                    издигат брандовете чрез интелигентни методи за визуална
                    комуникация. Креативните реклами докосват емоциите на хората
                    дълбоко и увеличават ангажираността значително. Маркетинговата
                    интуиция се съчетава красиво с артистичната визия във всяко
                    дизайнерско произведение. Бизнесите разширяват обхвата си,
                    привличат нови клиенти и виждат реален успех чрез нашата
                    агенция за дизайн на реклами. Печатни, дигитални и външна
                    реклама демонстрират тези мощни резултати последователно.
                  </p>
                </div>
              </div>
              {/* Creative Ad Designs That Elevate Your Brand  */}
              <Services_we_offer data={ServicesSection} />
              <Handle_Largedata_section LargeData={LargeData} />
              {/* Our Advertisement Design Solutions */}
              <Custom_section data={CustomSection} />
              {/* <Custom_section data={CustomSection} /> */}
              {/* Our Advertisement Design Process */}
              <Benefits_section data={BenefitSection} />
              {/* Grow your business  */}
              {/* <Boost_section data={BoostSection} /> */}
              {/* Elevate Your Brand with Expert Advertisement Design Services  */}
              <Assistance_section data={AssistanceSection} />
              <NewIndustrySection />;
              {/* Blog Section  */}
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <NewBlogSection />
              </div>
              {/* FAQ section  */}
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

export default AdvertisementDesignServices;