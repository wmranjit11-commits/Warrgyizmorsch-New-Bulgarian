import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/softwareDevelopmentCityData";
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
    title: "Best Software Development Company in Udaipur | Custom Solutions",
  description:
      "Looking for a trusted best software development company in Udaipur We deliver custom software, web & mobile app solutions for business growth.",
  keywords: [
      "software development company in udaipur ,best software development company in udaipur,development of software,software development agency ,software development company,software development outsourcing companies ,custom software development companies,software development company in udaipur,best software company in india",
  ],
    path: "/software-development-company-in-udaipur",
});

const SoftwareDevelopmentCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Best Software Development Company in Udaipur"
        }
        description={
              "If you are looking for the best software development company in Udaipur, you are in the right place. We are a professional software development company in Udaipur offering end-to-end solutions for modern businesses. In today’s digital world, businesses need reliable, scalable, and secure software solutions to stay ahead of the competition. A professional software development partner helps transform ideas into powerful digital products that drive growth, efficiency, and long-term success.We specialize in delivering custom software solutions tailored to your business needs, covering the complete development of software from planning to deployment.Whether you are a startup, a small business, or an established enterprise in Udaipur or anywhere in India, our team builds technology-driven solutions that align with your goals and support sustainable growth."
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

export default SoftwareDevelopmentCity;
