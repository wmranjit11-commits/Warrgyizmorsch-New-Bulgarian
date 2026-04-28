import React from "react";
import {
    AssistanceSection,
    BoostSection,
    CustomSection,
    FAQ,
    LargeData,
    ServicesSection,
    BenefitSection, UniqueSection, CustomAnimationSection
} from "../../../../../data/All_Services_Data/City_Service_Data/WebDevelopmentCompanyLondonCityData";
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
    title: "Web Development Company in London | Custom Websites",
    description:
        "Trusted web development company in London delivering responsive, secure, and high-performance websites designed to support business growth.",
    keywords: [
        "web development company in london,website design company ,web development agency ,website development company london,best website design company in london,best web development agency",
    ],
    path: "/web-development-company-in-london",
});

const WebDevelopmentCompanyLondonCity = () => {
    return (
        <>
            <NewServiceHeroForm
                title={
                    "Web Development Company in London"
                }
                description={
                    "Choosing the right web development company in london is essential for businesses that want strong digital growth. A professional website supports brand credibility, lead generation, and long-term performance. As a trusted website design company and experienced web development agency, we deliver secure, scalable, and conversion-focused digital solutions. Our team works closely with organisations to design modern platforms that align with business goals while supporting usability, performance, and future expansion in competitive London markets."
                }
                showServiceTag={false}
            />
            <section className="">
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

export default WebDevelopmentCompanyLondonCity;
