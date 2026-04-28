import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, roleWriting } from '../../../../data/All_Services_Data/softwareDevelopmentData';
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
  title: "Услуги за разработка на софтуер по поръчка | Експерти на Warrgyizmorsch",
  description:
        "Партнирайте си с Warrgyizmorsch за надеждни услуги за разработка на софтуер по поръчка, съобразени с вашите бизнес нужди. Мащабируеми, сигурни и напълно оптимизирани решения.",
  keywords: [
        "разработка на софтуер по поръчка", "софтуерна разработка", "услуги за софтуерна разработка", "агенция за софтуерна разработка", "компания за разработка на софтуер", "софтуерен инженер", "аутсорсинг на софтуерна разработка",
  ],
  path: "/custom-software-development",
});

const SoftwareDevelopment = () => {
    return (
      <>
        <NewServiceHeroForm
          title={"Иновативни услуги за разработка на софтуер по поръчка за вашия бизнес"}
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
              {/* Intro part  */}
              <div
                className="header-section container"
                style={{ marginTop: "20px" }}
              >
                <img
                  src="assets/img/icon/software_development2.png"
                  loading="lazy"
                  alt="heading_image"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <p>
                    В Warrgyizmorsch сме доверена компания за разработка на софтуер по поръчка, доставяща иновативни услуги, проектирани да задвижват вашия бизнес в дигиталния свят. Изграждаме персонализирани софтуерни решения, които се съгласуват безпроблемно с вашите оперативни цели, помагайки за подобряване на ефективността, оптимизиране на работните процеси и разкриване на нови възможности за растеж. Всяко решение е изработено с дълбоко разбиране на вашите бизнес предизвикателства и дългосрочна визия.
                    Нашият екип използва съвременни технологии, мащабируеми архитектури и най-добри практики в индустрията за разработване на надеждни софтуерни системи. От корпоративни приложения и облачни платформи до мобилни решения и модернизация на системи, нашите услуги за разработка на софтуер гарантират, че вашите технологии се адаптират с развитието на бизнеса ви.
                  </p>
                </div>
              </div>
              <Handle_Largedata_section LargeData={LargeData} />
              <Custom_section data={CustomSection} />
              <Benefits_section data={BenefitSection} />
              <Services_we_offer data={ServicesSection} />
              <Boost_section data={BoostSection} />
              <Assistance_section data={AssistanceSection} />
              <NewIndustrySection />
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

export default SoftwareDevelopment;