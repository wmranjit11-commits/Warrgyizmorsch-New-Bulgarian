import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/contentMarketingCityData";
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
  title: " Content Marketing Agency in Udaipur, India | Words That Build Brands",
  description:
      "Top content Marketing agency in Udaipur, India crafting engaging, SEO-friendly content that builds brands, drives traffic, and converts audiences into customers.",
  keywords: [
    "Custom content marketing agencies in udaipur,content marketing company in udaipur,content creation companies in udaipur,content marketing services in udaipur,E-commerce Email Marketing Services in udaipur ",
  ],
  path: "/content-marketing-agency-in-udaipur",
});

const ContentMarketingCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Custom Content Marketing Agencies in Udaipur"
        }
        description={
        "Finding the right custom content marketing agencies in Udaipur can transform the way your business communicates with its audience. In today’s competitive market, generic content is no longer enough. Businesses need tailored strategies that engage potential customers and build lasting relationships. By partnering with a content marketing company in Udaipur, you can leverage professional expertise to create campaigns that are creative, strategic, and measurable. From blog content and social media management to email marketing and SEO, these agencies provide comprehensive solutions that help brands stand out and drive real results. With the support of skilled content creation companies in Udaipur, your business can achieve greater online visibility, increased engagement, and higher conversions."
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

            <Services_we_offer data={ServicesSection} />

            {/* <Benefits_section data={BenefitSection} />

            <Custom_section data={CustomSection} /> */}

            <Assistance_section data={AssistanceSection} />

            <Boost_section data={BoostSection} />

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

export default ContentMarketingCity;
