import React from "react";
import {
    AssistanceSection,
    BoostSection,
    CustomSection,
    FAQ,
    LargeData,
    ServicesSection,
    BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/EcommerceWebsiteCityData";
import Services_we_offer from '../../../../../components/service-components/Services_we_offer';
import Benefits_section from "../../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from '../../../../../components/service-components/Handle_Largedata_section';
import NewBlogSection from "../../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../../components/service-components/Role_writing";
import Custom_section from "../../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../../utils/seo";
import BulletsSection from "../../../../../components/service-components/BulletsSection";
import City_Pages_links from "../../../../../components/service-components/City_Pages_links";

export const metadata = generateSEOMeta({
    title: "E-commerce Websites & App Development in Udaipur | Web Development Company",
    description:
        "Professional e-commerce web development agency in Udaipur offering websites development, site development, and app development services to boost sales, engagement, and online growth.",
    keywords: [
        "e-commerce websites development in udaipur ,e-commerce web development agency in udaipur,e-commerce site development in udaipur,e-commerce web development company ,e-commerce app development services in udaipur",
    ],
    path: "/ecommerce-websites-development-in-udaipur",
});

const EcommerceWebsiteDevelopmentCity = () => {
    return (
        <>
            <NewServiceHeroForm
                title={
                    "E-commerce Websites Development in Udaipur"
                }
                description={
                    "In today’s digital-first world, e-commerce websites development in Udaipur has become essential for businesses aiming to expand their online presence. A professional e-commerce platform not only showcases your products effectively but also provides a smooth, seamless shopping experience that keeps customers coming back. Businesses that invest in high-quality development enjoy increased engagement, higher conversion rates, and improved customer retention. Partnering with an experienced e-commerce web development agency in Udaipur ensures that websites are tailored to the specific needs of the target audience while remaining secure, fast, and scalable. Advanced features such as mobile responsiveness, intuitive navigation, and SEO optimization help your platform perform efficiently. With expert e-commerce site development in Udaipur, businesses can stay competitive in the growing online market and offer a superior shopping experience that drives real results."
                }
                showServiceTag={false}
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

                        <Handle_Largedata_section LargeData={LargeData} />

                        {/* <Services_we_offer data={ServicesSection} /> */}

                        <Benefits_section data={BenefitSection} />

                        {/* <Custom_section data={CustomSection} /> */}

                        <Boost_section data={BoostSection} />

                        <Assistance_section data={AssistanceSection} />

                        {/* FAQ section  */}
                        <FAQ_section data={FAQ} />

                        <City_Pages_links />
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

export default EcommerceWebsiteDevelopmentCity;
