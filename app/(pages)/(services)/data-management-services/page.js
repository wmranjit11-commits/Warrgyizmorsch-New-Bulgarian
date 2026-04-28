import React from "react";
import {
  AssistanceSection,
  BoostSection,
  FAQ,
  roleWriting,
  LargeData,
} from "../../../../data/All_Services_Data/dataManagementData";
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
  title: "Експертни услуги за управление на данни за растеж на бизнеса",
  description:
    "Подобрете ефективността на бизнеса с професионални услуги за управление на данни, които организират, защитават и оптимизират вашата информация.",
  keywords: [
    "услуги за управление на данни",
    "управление на данни",
    "управление на база данни",
    "система за управление на данни",
    "master data management",
    "платформа за управление на данни",
    "консултант по управление на данни",
    "решения за управление на данни",
    "управление на информационни активи",
  ],
  path: "/data-management-services",
});

const DataManagement = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Корпоративни услуги за управление на данни за по-умни бизнес решения"
        }
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

            {/* Intro part */}
            <div
              className="header-section container"
              style={{ marginTop: "20px" }}
            >
              <img
                src="assets/img/icon/data-manage.avif"
                loading="lazy"
                alt="heading_image"
              />

              <p>
                Нашите корпоративни услуги за управление на данни помагат на
                организациите да поемат пълен контрол върху своята информационна
                екосистема и да вземат по-бързи и по-точни решения. Оптимизираме
                начина, по който данните се събират, съхраняват, интегрират и
                използват в различни системи, като гарантираме надеждност,
                последователност и достъпност в реално време. Чрез стабилно
                управление на качеството, сигурността и съответствието защитаваме
                чувствителната информация и премахваме изолирани масиви от данни.
                Нашите решения намаляват дублирането, повишават точността и
                осигуряват надеждни анализи за ръководството. С мащабируема и
                модерна архитектура подпомагаме растежа на бизнеса, анализите и
                AI инициативите.
              </p>
            </div>

            {/* End to End data management Services */}
            <Handle_Largedata_section LargeData={LargeData} />

            {/* Trust Us */}
            <Role_writing data={roleWriting} />

            {/* Trusted and Fast Data Management Solutions */}
            <Boost_section data={BoostSection} />

            {/* Hire Data Management Services */}
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

export default DataManagement;