import {
  AssistanceSection,
  BenefitSection,
  FAQ,
  LargeData,
  roleWriting,
} from "../../../../data/All_Services_Data/iosServiceData";
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Професионални услуги за разработка на iOS приложения | Екип на Warrgyizmorsch",
  description:
    "Warrgyizmorsch предоставя иновативни услуги за разработка на iOS приложения за стартъпи и предприятия. Изградете бързи, сигурни и ангажиращи iPhone приложения с нашите експертни разработчици.",
  keywords: [
    "услуги за разработка на ios приложения",
    "компании за ios разработка",
    "iphone разработка",
    "ios мобилни приложения",
    "агенция за разработка на iphone приложения",
  ],
  path: "/ios-app-development-service",
});

const IosAppDevelopmentServices = () => {
    
    return (
      <>
        <NewServiceHeroForm
          title={"Професионални услуги за разработка на iOS приложения от Warrgyizmorsch"}
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
                  src="assets/img/icon/mobile app.jpg"
                  loading="lazy"
                  alt="heading_image"
                />
                <div>
                  <p>
                    В <a href="/">Warrgyizmorsch</a> предоставяме професионални услуги за разработка на iOS приложения, които са съчетание от иновации, технологии и потребителско изживяване. Искаме да помогнем на бизнеса и физическите лица да вдъхнат живот на своите идеи като прекрасни, високопроизводителни iOS приложения, които осигуряват безпроблемно изживяване на платформите iPhone и iPad. Разбираме, че потребителите на iOS се нуждаят от най-доброто възможно качество, гладка работа и сигурност. Имайки това предвид, нашите талантливи разработчици следват най-добрите практики на екосистемата на Apple и разработват приложения според очакванията и дори по-добре.
                    От концепцията и планирането до кодирането, тестването и стартирането, ние завършваме целия процес на разработка изчерпателно и точно. Всички наши приложения са съобразени с вашите специфични изисквания – от прости помощни приложения до революционни бизнес решения. С Warrgyizmorsch получавате отдаден партньор, който цени иновациите, прозрачността и дългосрочния просперитет. Нека създадем iOS приложение, което подобрява вашата марка и носи измерими резултати.
                  </p>
                </div>
              </div>

              <Benefits_section data={BenefitSection} />

              <Role_writing data={roleWriting} />

              <Handle_Largedata_section LargeData={LargeData} />

              <Assistance_section data={AssistanceSection} />

              <NewIndustrySection />

              {/* Blog Section  */}
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <NewBlogSection />
              </div>

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

export default IosAppDevelopmentServices