import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/webDevelopmentCityData";
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
  title: "Best Web Development Company in Udaipur | Website Development Services",
  description:
      "Looking for the best web development company in Udaipur? We offer professional website development services, responsive design, SEO-friendly websites, and reliable web developer agencies in Udaipur.",
  keywords: [
    "Best web development company in Udaipur,website development services in Udaipur,web designing company in Udaipur,web developer agencies in udaipur ,website developer in Udaipur",
  ],
    path: "/web-development-company-in-udaipur",
});

const WebDevelopmentCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Best Web Development Company in Udaipur"
        }
        description={
        "Choosing the best web development company in Udaipur is a crucial step for businesses looking to build a strong and credible digital presence. A professionally developed website not only represents your brand but also helps generate leads, build trust, and improve customer engagement. As an experienced website developer in Udaipur, we specialize in creating modern, responsive, and high-performing websites that align with your business objectives. Our approach focuses on clean design, smooth functionality, and SEO-friendly architecture to ensure long-term digital growth in the Indian market."
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

            {/* <Benefits_section data={BenefitSection} /> */}

            <Custom_section data={CustomSection} />

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

export default WebDevelopmentCity;
