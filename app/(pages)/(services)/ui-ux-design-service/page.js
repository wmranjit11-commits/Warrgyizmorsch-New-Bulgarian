import React from 'react';
import { AssistanceSection, BenefitSection, BoostSection, CustomSection, FAQ, LargeData, ServicesSection, roleWriting } from '../../../../data/All_Services_Data/ui_ux_data';
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
  title: "Професионални UI/UX дизайн услуги за бизнес растеж",
  description:
    "Подобрете потребителското изживяване с професионални UI/UX дизайн услуги. Получете персонализирани и лесни за използване решения, които увеличават ангажираността и растежа на бизнеса.",
  keywords: [
    "ui/ux дизайн услуги", "ui дизайн услуги", "ux дизайн агенция", "UX консултации", "дизайн агенция", "персонализиран уеб дизайн", "дизайн на мобилни приложения", "ui/ux агенция",
  ],
  path: "/ui-ux-design-service",
});

const Ui_Ux_Design = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"UI/UX дизайн услуги, създадени за бизнес успех"}
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
                src="assets/img/icon/ui.jpg"
                loading="lazy"
                alt="heading_image"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <p>
                  Warrgyizmorsch предлага UI/UX дизайн услуги, насочени към подобряване на бизнес резултатите и потребителското удовлетворение. Екип от специалисти съчетава креативни идеи, принципи на използваемост и стратегическо мислене, за да създаде опростени интерфейси с измерими резултати. Дизайн екипът поставя акцент върху достъпност, функционалност и визуална естетика, за да помогне на компаниите да растат в дигиталната среда. С дългогодишен опит като UX дизайн агенция, ние изпълняваме високи стандарти във всеки проект, подпомагайки клиентите в конкурентния дигитален пазар.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />

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

export default Ui_Ux_Design;