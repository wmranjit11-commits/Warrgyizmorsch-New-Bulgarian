import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, roleWriting } from '../../../../data/All_Services_Data/linkedInAdvertisingData';
import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Рекламни услуги в LinkedIn | Целево генериране на B2B клиенти",
  description:
    "Увеличете своята B2B видимост с мощна реклама в LinkedIn. Насочете се към правилните професионалисти, генерирайте качествени лийдове и максимизирайте ROI.",
  keywords: [
    "LinkedIn реклама",
    "бизнес реклами в LinkedIn",
    "агенция за LinkedIn реклама",
    "платена реклама в LinkedIn",
    "LinkedIn кампании",
    "B2B маркетинг услуги",
  ],
  path: "/linkedIn-advertising",
});

const LinkedInAdvertising = () => {

  return (
    <>
      <NewServiceHeroForm
        title={
          "LinkedIn рекламни услуги за мощен B2B растеж и ангажираност"
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

            {/* Въвеждаща част */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/Linkedin.webp"
                loading="lazy"
                alt="LinkedIn реклама"
              />
              <div>
                <p>
                  В Warrgyiz Morsch помагаме на брандовете да се свързват с правилните хора чрез{" "}
                  <strong>платена LinkedIn реклама</strong> в най-подходящия момент. Това означава стимулиране на сериозен B2B растеж чрез прецизно таргетирани кампании. Нашите стратегии са насочени към това да ви поставят пред вземащите решения лица, да ги ангажират и да генерират реални потенциални клиенти (лийдове), които се превръщат в сделки. Независимо дали целите изграждане на авторитет на марката, популяризиране на услуги или директни продажби, ние гарантираме, че рекламният ви бюджет работи максимално ефективно. Партнирайки си с нас, можете да превърнете присъствието си в LinkedIn в истинска машина за B2B растеж за нула време.
                </p>
              </div>
            </div>

            {/* Секции с данни (Трябва да се преведат в съответните JSON/Data файлове) */}
            <Services_we_offer data={ServicesSection} />
            <Handle_Largedata_section LargeData={LargeData} />

            <Role_writing data={roleWriting} />
            <Boost_section data={BoostSection} />
            <Assistance_section data={AssistanceSection} />
            <NewIndustrySection />

            {/* Блог секция */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ секция */}
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

export default LinkedInAdvertising;