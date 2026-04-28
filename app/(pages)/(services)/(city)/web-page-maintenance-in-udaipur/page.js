import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/WebPageMaintenanceCityData";
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
    title: "Web Page Maintenance in Udaipur | Professional Website Support",
  description:
      "Expert web page maintenance in Udaipur with website maintenance services in Udaipur, website management services in Udaipur, and web maintenance solutions for businesses.",
  keywords: [
      "web page maintenance ,web page maintenance ,website maintenance services  ,website management ,web maintenance services in udaipur ,web management in udaipur sites management,website maintenance cost in udaipur,web content management system,online computer service in india ,website management services,website maintenance company",
  ],
    path: "/web-page-maintenance-in-udaipur",
});

const WebPageMaintenanceCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Web Page Maintenance in Udaipur"
        }
        description={
              "Web page maintenance  Udaipur is essential for businesses that want secure, fast, and updated websites. Professional web page maintenance helps companies manage content, fix errors, improve performance, and ensure smooth functionality. With reliable website maintenance services , businesses can focus on growth while experts handle updates, monitoring, and website management From web maintenance services in Udaipur to complete website management services regular support ensures better user experience, higher search visibility, and long-term digital success."
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

export default WebPageMaintenanceCity;
