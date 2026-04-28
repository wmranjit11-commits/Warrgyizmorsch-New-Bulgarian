import { BenefitSection, LargeData, roleWriting, sectionData, AssistanceSection, FAQ } from '../../../../data/All_Services_Data/wooCommerceDevelopmentData';
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
import BulletsSection from "../../../../components/service-components/BulletsSection";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Услуги за WooCommerce разработка | Warrgyizmorsch дигитални експерти",
  description:
    "Отключете пълния потенциал на вашия онлайн магазин с професионални WooCommerce услуги за разработка, предлагащи персонализирани решения за растеж, скорост и мащабируемост.",
  keywords: [
    "woocommerce разработка", "woocommerce услуги", "woocommerce компания", "woocommerce уеб дизайн", "woocommerce разработчик", "woocommerce агенция", "woocommerce сайт разработка", "woocommerce експерт", "woocommerce уеб разработчик", "woocommerce разработка услуги", "woocommerce сайт компания",
  ],
  path: "/woo-commerce-development-service",
});

const WooCommerceDevelopment = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"WooCommerce разработка, съобразена с нуждите на вашия бизнес"}
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
                src="assets/img/icon/e-commerce.avif"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  Като опитна <a href='https://warrgyizmorsch.com/e-commerce-website-development-service'><b>компания за разработка на електронна търговия</b></a>, ние предлагаме лесни и ефективни WooCommerce решения за вашия бизнес. Нашият екип създава сигурни, лесни за управление и удобни онлайн магазини, които ви помагат да продавате продуктите си безпроблемно. Фокусираме се върху изчистен дизайн, висока производителност и гъвкави функции, съобразени с вашите цели. Независимо дали стартирате нов магазин или подобрявате съществуващ, ние ви помагаме да развиете онлайн бизнеса си уверено.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

            <Benefits_section data={BenefitSection} />

            <Role_writing data={roleWriting} />

            <BulletsSection data={sectionData} />

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
}

export default WooCommerceDevelopment;