import React from "react";
import {
    AssistanceSection,
    BoostSection,
    CustomSection,
    FAQ,
    LargeData,
    ServicesSection,
    BenefitSection, UniqueSection, CustomAnimationSection

} from "../../../../../data/All_Services_Data/City_Service_Data/AIWebDevelopmentIndiaCityData";
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
import Unique_section from "../../../../../components/service-components/Unique_section";
import NewIndustrySection from "../../../../../components/home-page-components/NewIndustrySection";
import City_Pages_links from "../../../../../components/service-components/City_Pages_links";
import Custom_Animation_section from "../../../../../components/service-components/Custom_Animation_section";

export const metadata = generateSEOMeta({
    title: "AI Web Development Service in India | Smart Sites",
    description:
        "AI web development service in India creating intelligent, scalable, and performance-driven websites using AI-powered technologies.",
    keywords: [
        "ai web development service in India ,ai web development service ,artificial intelligence web development service ,ai website development service in India ,ai for web development service ,web development ai service ,ai and web development",
    ],
    path: "/ai-web-development-service-in-india",
});

const AIWebDevelopmentIndiaCity = () => {
    return (
        <>
            <NewServiceHeroForm
                title={
                    "AI Web Development Service in India"
                }
                description={
                    "AI web development service in India helps businesses build intelligent, scalable, and high-performance websites that adapt to user behavior and market needs. By combining ai web development service, ai and web development, and artificial intelligence web development service, companies can improve automation, personalization, and digital efficiency. With expert ai website development service in India and advanced web development ai service, businesses gain smarter platforms that support growth, security, and long-term digital transformation."
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

                        {/* <Handle_Largedata_section LargeData={LargeData} /> */}

                        <Unique_section data={UniqueSection} />

                        {/* <Benefits_section data={BenefitSection} /> */}

                        <Custom_Animation_section data={CustomAnimationSection} />

                        {/* <Services_we_offer data={ServicesSection} /> */}

                        {/* <Custom_section data={CustomSection} /> */}

                        <Boost_section data={BoostSection} />

                        <Assistance_section data={AssistanceSection} />

                        <NewIndustrySection/>

                        {/* FAQ section  */}
                        <FAQ_section data={FAQ} />

                        <City_Pages_links/>
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

export default AIWebDevelopmentIndiaCity;
