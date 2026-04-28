import React from 'react';
import {
  AssistanceSection,
  BenefitSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  roleWriting
} from '../../../../data/All_Services_Data/motionGraphicsAnimationData';

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
  title: "Услуги за Motion Graphics и анимация | Креативни визуализации",
  description:
    "Ангажиращи услуги за motion graphics и анимация, които подсилват бранд разказването, подобряват визията и създават силно дигитално въздействие.",
  keywords: [
    "най добра motion graphics компания",
    "анимационни услуги",
    "най добри motion graphics услуги",
    "motion graphics компания",
    "motion graphic услуги",
    "топ motion graphics компания"
  ],
  path: "/motion-graphics-end-animation",
});

const MotionGraphicsAnimation = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Motion Graphic и анимационни услуги от най-добрата Motion Graphics компания"
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
                src="assets/img/icon/motion.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  В Warrgyiz Morsch създаваме motion graphics и анимации,
                  които вдъхновяват въображението, предават идеи и вдъхват
                  живот на вашия бранд. Нашият креативен екип съчетава изкуство
                  и технологии, за да създава визуално впечатляващо,
                  емоционално и целенасочено съдържание. Независимо дали
                  промотирате продукт, представяте концепция или подобрявате
                  дигиталното си присъствие, нашите анимации носят силно
                  въздействие и ясно послание. Всеки кадър е внимателно
                  проектиран, за да свърже аудиторията с вашата марка,
                  да предизвика емоция и да подсили посланието ви. С
                  Warrgyiz Morsch вашата визия оживява динамично,
                  въздействащо и незабравимо.
                </p>
              </div>
            </div>

            <Services_we_offer data={ServicesSection} />
            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
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

export default MotionGraphicsAnimation;