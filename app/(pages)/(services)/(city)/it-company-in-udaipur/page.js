import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/ITcompanyCityData";
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
  title: "Grow Your Business with a Trusted IT Company in Udaipur",
  description:
      "Partner with a reliable IT Company in Udaipur to boost growth through custom software, web development, and innovative digital solutions.",
  keywords: [
    "Best IT Services Company in Udaipur,Affordable IT Services Udaipur,Hire iT Services Company Udaipur,It service agency in udaipur ,Professional IT Consulting Services Udaipur",
  ],
    path: "/it-company-in-udaipur",
});

const ITCompanyCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Best IT Services Company in Udaipur"
        }
        description={
        "Looking for the best IT services company in Udaipur to handle your business technology needs? Our company provides comprehensive, professional, and reliable IT solutions designed to improve efficiency, security, and productivity. As a trusted IT service agency in Udaipur, we help startups, SMEs, and enterprises implement scalable IT infrastructure, cloud solutions, and digital transformation initiatives.With our professional IT consulting services in Udaipur, we analyze your business requirements, recommend the right technology solutions, and provide end-to-end support.If you want to hire an IT services company in Udaipur, we offer cost-effective, flexible, and high-quality solutions that align with your growth objectives.Our affordable IT services in Udaipur ensure you get maximum value from your technology investment while maintaining operational efficiency."
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

export default ITCompanyCity;
