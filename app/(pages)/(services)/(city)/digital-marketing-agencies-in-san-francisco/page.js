import React from "react";
import {
    AssistanceSection,
    BoostSection,
    CustomSection,
    FAQ,
    LargeData,
    ServicesSection,
    BenefitSection, UniqueSection, CustomAnimationSection
} from "../../../../../data/All_Services_Data/City_Service_Data/DigitalMarketingSanFranciscoCityData";
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
    title: "Top Digital Marketing Agencies in San Francisco | Services & Expertise",
    description:
        "Partner with top digital marketing agencies in San Francisco to access innovative strategies, expert solutions, and measurable results for your business.",
    keywords: [
        "Top digital marketing agencies in san francisco,seo marketing companies san francisco,online marketing agency san francisco,social media marketing companies ,content marketing agency ,best marketing agencies in san francisco,digital marketing agency san francisco bay area",
    ],
    path: "/digital-marketing-agencies-in-san-francisco",
});

const DigitalMarketingSanFranciscoCity = () => {
    return (
        <>
            <NewServiceHeroForm
                title={
                    "Top Digital Marketing Agencies in San Francisco"
                }
                description={
                    "In today’s competitive business environment, partnering with top digital marketing agencies in San Francisco can elevate your brand visibility and growth. These agencies specialize in SEO marketing companies San Francisco, online marketing agency San Francisco, and social media marketing companies, offering tailored strategies that drive measurable results. Whether you need a content marketing agency or a digital marketing agency San Francisco Bay Area, these experts help businesses establish a strong online presence while achieving long-term ROI."
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

export default DigitalMarketingSanFranciscoCity;
