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
} from "../../../../data/All_Services_Data/ai-software-development-servicesData";
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
import { Images } from "lucide-react";

export const metadata = generateSEOMeta({
  title: "Компания за AI софтуерна разработка за мащабируеми решения",
  description:
    "Компания за AI софтуерна разработка, предоставяща интелигентни и мащабируеми дигитални решения, съобразени с бизнес нуждите за иновации, ефективност и устойчив растеж.",
  keywords: [
    "софтуерна разработка",
    "AI разработка",
    "услуги за софтуерна разработка",
    "enterprise software development",
    "ERP разработка",
    "разработка на приложения",
    "AI software development company",
    "machine learning solutions",
    "custom AI development",
    "business software solutions",
  ],
  path: "/enterprise-software-development-service",
});

const SoftwareDevelopmentEnterprise = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Компания за AI софтуерна разработка, създаваща интелигентни и мащабируеми дигитални решения"
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
                src="assets/img/icon/software_development.png"
                loading="lazy"
                alt="heading_image"
              />

              <div>
                <p>
                  Ние сме компания за AI софтуерна разработка, която предоставя
                  интелигентни и мащабируеми дигитални решения, помагащи на
                  бизнеса да расте и да внедрява иновации. Нашите AI услуги
                  включват персонализирана разработка на AI приложения,
                  решения с машинно обучение, генеративен AI и интелигентна
                  автоматизация, съобразени с конкретните бизнес нужди.

                  Чрез използване на модерни технологии за изкуствен интелект,
                  стратегии, базирани на данни, и сигурни архитектури,
                  подпомагаме организациите да оптимизират процесите си,
                  подобрят клиентското обслужване и постигнат дългосрочна
                  дигитална трансформация с измерими резултати.

                  Днешните компании за AI разработка не се ограничават само до
                  автоматизация и анализи. Те създават интелигентни системи,
                  които се учат от данни, адаптират се към променящи се
                  условия и се интегрират безпроблемно в съществуващи
                  дигитални екосистеми.

                  Когато AI се внедрява стратегически, той позволява на
                  организациите да оптимизират сложни работни процеси,
                  прогнозират бъдещи тенденции, намаляват оперативния риск и
                  разкриват нови възможности за растеж.

                  Структурираният подход към AI разработката гарантира, че
                  технологията остава в съответствие с бизнес целите, като
                  същевременно е мащабируема, сигурна и готова за бъдещето.
                </p>
              </div>
            </div>

            <Handle_Largedata_section LargeData={LargeData} />
            <Custom_section data={CustomSection} />
            <Benefits_section data={BenefitSection} />
            <Role_writing data={roleWriting} />
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

export default SoftwareDevelopmentEnterprise;