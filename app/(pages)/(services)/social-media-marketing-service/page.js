import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, roleWriting } from '../../../../data/All_Services_Data/socialMediaData';
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
  title: "Услуги за маркетинг в социалните мрежи | Дигитални експерти Warrgyizmorsch",
  description:
    "Warrgyizmorsch предлага професионални услуги за маркетинг в социалните мрежи, за да развиете вашия бранд, увеличите онлайн видимостта и ангажираността във всички основни социални платформи.",
  keywords: [
    "услуги за социален маркетинг", "SMM маркетинг", "реклама в социалните медии", "агенции за социален маркетинг", "компания за социални медии", "реклама в социалните мрежи", "SMM маркетинг агенция", "стратегии за социален маркетинг", "SMM социален маркетинг", "компании за управление на социални медии", "социални маркетинг агенции", "платена реклама в социалните медии",
  ],
  path: "/social-media-marketing-service",
});

const SocialMediaMarketing = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Разширени услуги за маркетинг в социалните мрежи от Warrgyizmorsch"}
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
                src="assets/img/icon/socialmediamarketing.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  Тази усъвършенствана услуга за маркетинг в социалните мрежи е създадена, за да помогне на брандовете да укрепят своето онлайн присъствие и да постигнат значима ангажираност във всички платформи. Фокусът надхвърля обикновеното публикуване — всяка стратегия е създадена за увеличаване на видимостта, стимулиране на взаимодействието и осигуряване на измерим бизнес растеж. Креативното съдържание, анализът на аудиторията и специфичното за платформите изпълнение работят заедно, за да достигнат правилните потребители в правилния момент. От планиране на съдържание и управление на общности до платени кампании, ориентирани към резултати — всеки елемент е оптимизиран за постоянни резултати.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Services */}
            <Custom_section data={CustomSection} />

            {/* Boost */}
            <Boost_section data={BoostSection} />

            {/* Why Choose Us */}
            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ */}
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

export default SocialMediaMarketing;