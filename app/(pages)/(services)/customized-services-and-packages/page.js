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
} from "../../../../data/All_Services_Data/customizedServicesPackagesData";
import Services_we_offer from "../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Персонализирани услуги и пакети за растежа на вашия бизнес",
  description:
    "Разгледайте персонализирани услуги и пакети, създадени според нуждите на вашия бизнес. Получете гъвкави, мащабируеми и рентабилни решения за дългосрочен успех.",
  keywords: [
    "най добри персонализирани услуги",
    "най добри персонализирани услуги и пакети",
    "персонализирани услуги",
    "персонализирани услуги и пакети",
    "най добри пакетни услуги",
  ],
  path: "/customized-services-and-packages",
});

const CustomizedServicesPackages = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Warrgyizmorsch: Премиум персонализирани услуги и пакети"}
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
                src="assets/img/icon/customized.webp"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyiz Morsch вярваме, че всяка компания заслужава решения,
                  които напълно съответстват на нейните уникални цели.
                  Персонализираните пакети се превръщат в реалност чрез нашето
                  внимателно планиране и индивидуален подход. Тези най добри
                  персонализирани услуги са насочени към постигане на измерими
                  резултати по ефективен начин. Сътрудничеството движи нашия
                  процес, а вашите цели насочват всяко стратегическо решение.
                  Нашият екип комбинира правилните услуги, за да гарантира
                  впечатляващия успех на вашия бизнес.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <Services_we_offer data={ServicesSection} />

            {/* Large Data Section */}
            <Handle_Largedata_section LargeData={LargeData} />

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

export default CustomizedServicesPackages;