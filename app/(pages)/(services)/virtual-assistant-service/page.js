import {
  BenefitSection,
  LargeData,
  roleWriting,
  AssistanceSection,
  FAQ,
} from "../../../../data/All_Services_Data/virtualAssistantServiceData";
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
  title: "Повишете ефективността с професионални виртуални асистент услуги",
  description:
    "Оптимизирайте бизнеса си с професионални виртуални асистент услуги. От административни задачи до планиране – получете надеждна подкрепа и се фокусирайте върху най-важното за вашия успех.",
  keywords: [
    "виртуален асистент услуги",
    "виртуален асистент",
    "виртуален административен асистент",
    "виртуална асистент услуга",
    "виртуален личен асистент",
    "наемане на виртуален асистент",
    "компании за виртуални асистенти",
    "виртуален маркетинг асистент",
    "виртуален административен асистент",
    "виртуален изпълнителен асистент",
    "AI асистент",
    "виртуален секретар",
    "AI личен асистент",
  ],
  path: "/virtual-assistant-service",
});

const VirtualAssistantService = () => {
  return (
    <>
      <NewServiceHeroForm title={"Постигайте повече с виртуален асистент"} />

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
                src="assets/img/icon/virtual.jpg"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  Управлението на продуктивността и фокусирането върху важните задачи може да бъде трудно в днешния дигитален свят, където времето лети бързо. Виртуалните асистент услуги ви помагат да завършите задачи, които отнемат много време, за да можете да се концентрирате върху важните бизнес цели. Независимо дали управлявате собствена компания, стартиращ бизнес или натоварен работен график, виртуалните асистенти ви подкрепят ежедневно от всяка точка на света. Те организират срещи, управляват социални мрежи и изпълняват различни задачи, които улесняват ежедневната работа. Виртуалният асистент бързо се превръща във вашия начин да бъдете по-ефективни и продуктивни.
                </p>
              </div>
            </div>

            <Benefits_section data={BenefitSection} />

            <Handle_Largedata_section LargeData={LargeData} />

            <Role_writing data={roleWriting} />

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

export default VirtualAssistantService;