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
} from "../../../../data/All_Services_Data/franchiseDigitalMarketingData";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import Link from "next/link";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Warrgyizmorsch: Франчайз Дигитален Маркетинг Стратегии с Резултати",
  description:
    "Развийте бизнеса си с доказани франчайз дигитален маркетинг стратегии от Warrgyizmorsch. Повече видимост, повече клиенти и повече продажби.",
  keywords: [
    "франчайз дигитален маркетинг",
    "услуги за франчайз дигитален маркетинг",
    "онлайн маркетинг за франчайз",
    "франчайз маркетинг агенция",
    "дигитална агенция за франчайз",
    "реклама за франчайз бизнес",
    "маркетинг за франчайз компании",
  ],
  path: "/franchise-digital-marketing-service",
});

const FranchiseDigitalMarketing = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Франчайз Дигитален Маркетинг Стратегии"}
      />

      <section className="space-extra-bottom">
        <div className="page-single">
          <div className="page-content">
            <style>{`
              .header-section{
                display:flex;
                align-items:center;
                gap:20px;
                margin-bottom:30px;
              }

              .header-section img{
                height:400px;
              }

              .header-section p{
                text-align:left;
              }

              @media only screen and (max-width: 990px){
                .header-section{
                  flex-direction:column;
                }

                .header-section img{
                  height:200px;
                }

                .header-section p{
                  text-align:center;
                }
              }
            `}</style>

            {/* Intro */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/franchiseMarketing.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В <Link href={"/"}>Warrgyizmorsch</Link> знаем, че големите
                  франчайз бизнеси се нуждаят от повече от стандартен маркетинг
                  план. Затова създаваме персонализирани, гъвкави и мащабируеми
                  решения. Нашият франчайз дигитален маркетинг помага на всяка
                  локация да расте, като същевременно поддържа силата на
                  основния бранд. Комбинираме локално присъствие и глобален
                  обхват чрез SEO, PPC реклама, съдържание и имейл кампании,
                  базирани на реални данни и измерими резултати.
                </p>
              </div>
            </div>

            {/* Featured Services */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Why Needed */}
            <Custom_section data={CustomSection} />

            {/* Why Work With Us */}
            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection />

            {/* Blog */}
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

export default FranchiseDigitalMarketing;