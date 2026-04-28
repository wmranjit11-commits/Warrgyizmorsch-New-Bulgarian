import {
    AssistanceSection,
    BenefitSection,
    CustomSection,
    FAQ,
    LargeData,
    ServicesSection,
} from "../../../../../data/Industry_Data/realestateData";

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
    title: "Революционна разработка на софтуер за недвижими имоти за интелигентен растеж",
    description:
        "Ускорете бизнеса си с имоти чрез персонализирана разработка на софтуер за недвижими имоти. Повишете ROI, оптимизирайте продажбите и доминирайте пазара с модерни технологии.",
    keywords: [
        "Real Estate Software Development",
        "real estate software development services",
        "property management software",
        "real estate CRM",
        "rental property software",
        "software for real estate",
        "real estate solutions",
        "property CRM software",
        "commercial property software",
        "real estate management system",
    ],
    path: "/real-estate-software-development",
});

const RealEstate = () => {
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
                                Разработка на софтуер за недвижими имоти
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
                                src="assets/img/icon/realestate.avif"
                                loading="lazy"
                                alt="heading_image"
                            />

                            <div>
                                <p>
                                    Нашата компания разработва <b>софтуер за недвижими имоти</b>,
                                    съобразен с начина на работа на имотните компании и помагащ в
                                    ежедневното управление на имоти.

                                    Можете да използвате нашия сигурен и мащабируем софтуер за
                                    всякакъв тип имоти – жилищни, търговски или под наем.

                                    Ние създаваме тези <b>софтуерни решения за недвижими имоти</b>,
                                    за да ускорим работата ви и да направим бизнес процесите
                                    по-интелигентни и ефективни.

                                    Развивайте бизнеса си бързо и подобрете обслужването на всеки
                                    клиент чрез нашите <b>услуги за разработка на софтуер за недвижими имоти</b>.
                                </p>
                            </div>
                        </div>

                        <Handle_Largedata_section LargeData={LargeData} />

                        <Custom_section data={CustomSection} />

                        <Benefits_section data={BenefitSection} />

                        <Services_we_offer data={ServicesSection} />

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

export default RealEstate;