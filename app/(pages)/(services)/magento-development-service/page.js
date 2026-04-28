import {
  AssistanceSection,
  BenefitSection,
  FAQ,
  LargeData,
  roleWriting,
  CustomSection,
  sectionData
} from "../../../../data/All_Services_Data/magentoDevelopmentServicesData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from '../../../../components/service-components/Handle_Largedata_section';
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import BulletsSection from "../../../../components/service-components/BulletsSection";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Водеща Magento компания за развитие и растеж",
  description:
    "Увеличете успеха на своя eCommerce бизнес с доверена Magento компания, предлагаща персонализирани решения, оптимизация на магазина и мащабируем растеж.",
  keywords: [
    "Magento услуги за разработка",
    "Magento компания за уеб разработка",
    "Magento агенция за разработка",
    "Magento компания за разработка",
    "Magento разработка",
    "персонализирана Magento разработка",
    "Magento агенция",
    "Magento уеб разработка",
    "Magento eCommerce компания",
    "Magento уеб разработчик",
    "Magento уеб дизайн",
    "Magento eCommerce разработка",
    "Magento програмиране"
  ],
  path: "/magento-development-service",
});

const MagentoDevelopmentServices = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Най-добрата Magento компания за развитие на eCommerce бизнес"
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
                src="assets/img/icon/magento-ecommerce-development.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Warrgyizmorsch е известна като една от най-добрите компании за
                  Magento разработка, посветена на растежа на eCommerce бизнеса
                  чрез мащабируеми и иновативни решения. Гъвкавостта и модерните
                  функции на Magento я правят отлична платформа за създаване на
                  високоефективни онлайн магазини, а нашите опитни разработчици
                  адаптират всеки проект според специфичните бизнес нужди. От
                  дизайн на теми и разработка на разширения до лесни интеграции
                  и постоянна поддръжка – нашите цялостни Magento решения
                  подобряват производителността, сигурността и конверсиите.
                  С поддръжка на множество магазини, мобилна адаптивност и
                  задълбочени анализи, нашите решения помагат на бизнеса да
                  увеличи функционалността, потребителското изживяване и
                  продажбите. С партньор като нас получавате надежден
                  технологичен съюзник, който поддържа вашия eCommerce бизнес
                  конкурентен, мащабируем и печеливш в дългосрочен план.
                </p>
              </div>
            </div>

            <Benefits_section data={BenefitSection} />
            <Custom_section data={CustomSection} />
            <Handle_Largedata_section LargeData={LargeData} />
            <BulletsSection data={sectionData} />
            <Role_writing data={roleWriting} />
            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog Section */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

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
}

export default MagentoDevelopmentServices;