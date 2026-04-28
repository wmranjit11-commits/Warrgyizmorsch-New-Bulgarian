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
} from "../../../../data/All_Services_Data/contentMarketingData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Експертни услуги по Content Marketing за нуждите на вашия бизнес",
  description:
    "Професионални услуги по content marketing за развитие на вашия бизнес. Получете висококачествено стратегическо съдържание, което привлича трафик, изгражда разпознаваемост на марката и увеличава реализациите.",
  keywords: [
    "услуги по content marketing",
    "рамка за content стратегия",
    "content marketing услуги",
    "съдържание в маркетинга",
    "агенция за content writing",
    "copywriting агенция",
    "услуги по content marketing",
    "писане на съдържание за имейл маркетинг",
    "писане на съдържание за социални мрежи",
    "SEO content writing",
    "оптимизация на съдържание",
  ],
  path: "/content-marketing-service",
});

const ContentWriting = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Предлагаме Content Marketing услуги, които водят до ангажираност"}
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
                src="assets/img/icon/content.avif"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В основата си ние сме професионалисти в създаването на Content
                  Marketing услуги, които свързват вашата аудитория по човешки
                  начин и изграждат истински взаимоотношения. Ние не сме просто
                  copywriters – създаваме стратегии, които въздействат,
                  мотивират и носят резултати. От блог статии и публикации до
                  социални кампании и бранд истории, нашият подход гарантира,
                  че вашето послание ще изпъкне сред дигиталния шум. С помощта
                  на данни и креативност, нашите Content Marketing услуги ще
                  изградят доверие, ще повишат авторитета ви и ще накарат
                  потребителите да се връщат отново. Даваме ви силата да
                  използвате съдържанието като двигател за ангажираност.
                </p>
              </div>
            </div>

            {/* Content Marketing Data */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Importance of Content Marketing */}
            <Custom_section data={CustomSection} />

            {/* Content Strategy Framework */}
            <Benefits_section data={BenefitSection} />

            {/* Role of Writing */}
            <Role_writing data={roleWriting} />

            {/* Grow Business */}
            <Boost_section data={BoostSection} />

            {/* Hire Agency */}
            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ Section */}
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

export default ContentWriting;