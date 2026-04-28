import { BenefitSection, AssistanceSection, FAQ } from "../../../../data/All_Services_Data/flutterAppDevelopmentCompanyData"
import Benefits_section from "../../../../components/service-components/Benefits_section";
import Assistance_section from "../../../../components/service-components/Assistance_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title:
    "Топ компания за услуги за разработка на Flutter приложения | Експерти на Warrgyizmorsch",
  description:
    "Warrgyizmorsch е водеща компания за услуги за разработка на Flutter приложения, доставяща високопроизводителни, мащабируеми мобилни приложения, съобразени с вашите бизнес нужди. Вземете безплатна оферта днес.",
  keywords: [
    "flutter разработчик",
    "flutter разработка",
    "разработка на flutter приложения",
    "агенция за flutter приложения",
    "услуги за flutter разработка",
    "flutter мобилно приложение",
  ],
  path: "/flutter-app-development-company",
});

const FlutterAppDevelopmentCompany = () => {

  return (
    <>
      <NewServiceHeroForm title={"Компания за услуги за разработка на Flutter приложения"} />
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
                src="assets/img/icon/flutter.png"
                loading="lazy"
                alt="heading_image"
              />
              <div>
                <p>
                  В <a href="/">Warrgyizmorsch</a> получавате нещо повече от Flutter разработчик – ние действаме като ваши партньори в иновациите. Отличаваме се като една от най-добрите компании за разработка на Flutter приложения, като представяме мощна комбинация от опит, експертен дизайн и сериозни инженерни решения за създаване на съвременни дигитални продукти. Нашите програмисти използват максимално рамката Flutter, за да изграждат чисти, бързи, крос-платформени приложения, които работят перфектно на Android и iOS.
                  Изборът на Flutter помага на бизнеса да спести почти 50% от разходите за разработка чрез използване на една споделена кодова база вместо две. Чрез нашите услуги за разработка на Flutter приложения вашите продукти стават бързи, отзивчиви и визуално привлекателни. Независимо дали сте стартъп, който прави първите си стъпки, или утвърдена марка, ние създаваме приложения, готови да растат с вас. Производителността, скоростта и сигурността са нашият основен фокус.
                </p>
              </div>
            </div>

            <Benefits_section data={BenefitSection} />

            <Assistance_section data={AssistanceSection} />

            <NewIndustrySection/>

            {/* Blog Section  */}
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <NewBlogSection />
            </div>

            {/* FAQ section  */}
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

export default FlutterAppDevelopmentCompany