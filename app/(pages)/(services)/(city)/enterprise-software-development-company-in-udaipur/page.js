import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/enterpriseSoftwareDevelopmentCityData";
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
    title: "Enterprise Software Development Company in Udaipur | ERP & Enterprise Solutions",
  description:
      "Enterprise Software Development Company in Udaipur offering ERP solutions, enterprise software development, enterprise apps, and scalable systems for growth.",
  keywords: [
      "enterprise software development services,enterprise resource planning systems,enterprise software development,enterprise app development,enterprise mobile app development,enterprise management system,enterprise resource planning software,enterprise resource management software,erp enterprise resource planning software",
  ],
    path: "/enterprise-software-development-company-in-udaipur",
});

const EnterpriseSoftwareDevelopmentCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Enterprise Software Development Company in Udaipur"
        }
        description={
              "Choosing the right Enterprise Software Development Company in Udaipur is essential for businesses that want to manage operations efficiently and scale without limitations. Enterprise-level organizations require powerful systems that can handle large data volumes, complex workflows, and multiple users across departments. A well-structured enterprise solution improves productivity, control, and long-term business performance.As a trusted Enterprise Software Development Company in Udaipur, we specialize in building advanced enterprise software solutions that support digital transformation.From enterprise management systems to enterprise resource planning software, our solutions are designed to help businesses automate processes, improve collaboration, and gain better control over operations."
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

            {/* <Boost_section data={BoostSection} /> */}

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

export default EnterpriseSoftwareDevelopmentCity;
