import {
    AssistanceSection,
    BenefitSection,
    BenefitSectionNew,
    CustomSection,
    CustomSectionNew,
    FAQ,
    LargeData,
    ServicesSection,
    ServicesSectionNew,
} from "../../../../../data/Industry_Data/supplyChainManagementData";

import Services_we_offer from "../../../../../components/service-components/Services_we_offer";
import Benefits_section from "../../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../../components/service-components/Role_writing";
import Custom_section from "../../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../../utils/seo";
import BulletsSection from "../../../../../components/service-components/BulletsSection";

export const metadata = generateSEOMeta({
    title: "Персонализирани решения за разработка на софтуер за Supply Chain Management",
    description:
        "Разработете персонализиран Supply Chain Management софтуер за оптимизиране на логистиката, проследяване на наличностите и повишаване на продуктивността.",
    keywords: [
        "Supply Chain Management Software Development",
        "supply chain software",
        "SCM solutions",
        "inventory management software",
        "logistics software",
        "warehouse systems",
        "supplier management",
        "ERP supply chain",
        "procurement software",
        "distribution management system",
    ],
    path: "/supply-chain-management",
});

const SupplyChainManagement = () => {
    return (
        <>
            <section
                className=""
                style={{
                    backgroundImage: `url('assets/img/service/serviceD.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                id="service-sec"
            >
                <div className="round-container pt-5">
                    <div className="container">
                        <div className="title-area text-center">
                            <span className="sub-title text-white">НАШИТЕ УСЛУГИ</span>

                            <h1 className="sec-title text-white">
                                Разработка на софтуер за Supply Chain Management
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

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
                                src="assets/img/icon/supply.avif"
                                loading="lazy"
                                alt="heading_image"
                            />

                            <div>
                                <p>
                                    Създадохме усъвършенстван софтуер за управление на веригата за
                                    доставки, съобразен с нуждите на вашата индустрия и бизнес
                                    цели.

                                    Нашият софтуер оптимизира всяка стъпка от веригата за доставки
                                    – от снабдяване и управление на наличности до логистика,
                                    изпълнение на поръчки и анализ на данни.

                                    Чрез интелигентна автоматизация, проследяване в реално време и
                                    безпроблемна интеграция той намалява разходите, съкращава
                                    закъсненията и повишава ефективността.

                                    Получете пълна видимост върху веригата си чрез модерни табла,
                                    predictive analytics и интелигентни отчети.

                                    Независимо дали сте производител, дистрибутор или търговец,
                                    нашата гъвкава платформа расте заедно с бизнеса ви.

                                    Свържете се с нас още днес за демо и направете първата стъпка
                                    към трансформация на вашата supply chain система.
                                </p>
                            </div>
                        </div>

                        <Services_we_offer data={ServicesSectionNew} />

                        <Handle_Largedata_section LargeData={LargeData} />

                        <Custom_section data={CustomSection} />

                        <Benefits_section data={BenefitSection} />

                        <Services_we_offer data={ServicesSection} />

                        <Custom_section data={CustomSectionNew} />

                        <Benefits_section data={BenefitSectionNew} />

                        <Assistance_section data={AssistanceSection} />

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

export default SupplyChainManagement;