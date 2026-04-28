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
} from "../../../../data/All_Services_Data/backendSupportAndTroubleshootingData";
import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../components/service-components/Benefits_section";
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
  title: "Услуги за Backend поддръжка и отстраняване на проблеми",
  description:
    "Цялостни услуги за backend поддръжка и отстраняване на проблеми за стабилна работа и минимално време на престой.",
  keywords: [
    "доставчици на backend поддръжка",
    "доставчик на backend услуги",
    "най добър доставчик на backend услуги",
    "backend поддръжка",
    "доставчик на backend поддръжка",
    "доставчик на услуги за отстраняване на проблеми",
  ],
  path: "/backend-support-and-troubleshooting",
});

const BackendSupportAndTroubleshooting = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Услуги за Backend поддръжка и отстраняване на проблеми от експертни доставчици"
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
                src="assets/img/icon/back-end_support.webp"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyiz Morsch сме посветени на предоставянето на надеждна
                  backend поддръжка, която поддържа бизнеса ви да работи
                  безпроблемно. Ние се фокусираме върху дигиталните фонови
                  процеси и гарантираме, че всичко функционира перфектно, така
                  че вашите операции да се развиват без затруднения. Поставяме
                  силен акцент върху надеждността, производителността и
                  проактивната поддръжка, за да помогнем на нашите клиенти да
                  постигнат устойчив бизнес растеж.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <Services_we_offer data={ServicesSection} />

            {/* Custom Section */}
            <Custom_section data={CustomSection} />

            {/* Benefits Section */}
            <Benefits_section data={BenefitSection} />

            {/* Role Writing */}
            <Role_writing data={roleWriting} />

            {/* Boost Section */}
            <Boost_section data={BoostSection} />

            {/* Assistance Section */}
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

export default BackendSupportAndTroubleshooting;