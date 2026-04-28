import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/emailMarketingCityData";
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
  title: "Email Marketing Services in Udaipur | Top Email Marketing Agency",
  description:
      "Boost your business with expert Email Marketing Services in Udaipur. Our trusted email marketing agency in Udaipur offers affordable, result-driven campaigns to increase engagement, leads, and sales.",
  keywords: [
    "Email Marketing Services in Udaipur ,email marketing agency in udaipur ,Email Marketing company in Udaipur,Email Marketing Udaipur service,Affordable email marketing in udaipur",
  ],
  path: "/email-marketing-services-in-udaipur",
});

const EmailMarketingCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Email Marketing Services in Udaipur"
        }
        description={
        "Our Email Marketing Services in Udaipur help businesses connect directly with their audience, increase conversions, and build long-term customer relationships. As a trusted email marketing agency in Udaipur, we design data-driven campaigns that deliver measurable ROI. Whether you are a startup or an established brand, our email marketing company in Udaipur provides scalable and affordable solutions tailored to your goals.With a strategic approach to Email Marketing Udaipur service, we focus on audience segmentation, automation, and performance tracking to ensure your emails reach the right people at the right time.If you’re looking for affordable email marketing in Udaipur, our solutions combine cost efficiency with high-impact results."
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

            {/* <Custom_section data={CustomSection} /> */}

            {/* <Benefits_section data={BenefitSection} /> */}

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

export default EmailMarketingCity;
