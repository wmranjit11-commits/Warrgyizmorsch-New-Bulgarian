import { BenefitSection, LargeData, roleWriting, AssistanceSection, FAQ } from '../../../../data/All_Services_Data/shopifyDevelopmentServicesData';
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
  title: "Професионална Shopify услуга за развитие за растеж",
  description:
    "Отключете растежа с експертна Shopify услуга за разработка. Получете персонализирани решения, безпроблемна интеграция и мащабируеми eCommerce магазини, създадени за успех.",
  keywords: [
    "shopify услуги за разработка", "shopify уеб разработка компания", "shopify разработчици", "shopify уеб дизайн", "shopify разработка на уебсайт", "shopify компания за разработка", "shopify уеб разработка", "shopify компания за уебсайт разработка", "shopify разработка на приложения",
  ],
  path: "/shopify-development-service",
});

const ShopifyDevelopmentServices = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Експертна Shopify услуга за разработка на мащабируеми eCommerce решения"
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

            {/* Intro part  */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/shopify.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  В <a href="https://warrgyizmorsch.com/" target="_blank" rel="noopener noreferrer">Warrgyizmorsch</a>, ние предлагаме първокласна Shopify услуга за разработка с цел да дадем възможност на бизнеса да процъфтява в бързо растящия eCommerce пазар. Специализираме се в създаването на високопроизводителни, мащабируеми Shopify магазини, които съчетават атрактивен дизайн и отлична функционалност. Независимо дали става дума за нов магазин, персонализация на тема или сложни интеграции на приложения, ние предоставяме цялостни услуги, съобразени с вашите бизнес нужди.
                  <br />
                  <br />
                  Разбираме, че всеки бранд е уникален, затова нашите Shopify експерти създават персонализирани стратегии, които не само увеличават трафика към вашия магазин, но и превръщат посетителите в постоянни клиенти. От оптимизация на скоростта и производителността до подобряване на потребителското изживяване, Warrgyizmorsch помага на бизнеса да расте уверено в конкурентна среда.
                  <br />
                  <br />
                  От стартъпи до утвърдени компании, ние гарантираме, че вашият Shopify магазин е сигурен, стабилен и готов за разширяване. Партнирайте с Warrgyizmorsch днес и отключете пълния потенциал на Shopify за дългосрочен растеж.
                </p>
              </div>
            </div>

            <Benefits_section data={BenefitSection} />
            <Handle_Largedata_section LargeData={LargeData} />
            <Role_writing data={roleWriting} />
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
}

export default ShopifyDevelopmentServices;