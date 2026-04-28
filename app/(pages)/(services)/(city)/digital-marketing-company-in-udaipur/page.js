import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
} from "../../../../../data/All_Services_Data/City_Service_Data/digitalMarketingCityData";
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
  title: "Best Digital Marketing Company in Udaipur for Business Growth",
  description:
      "Boost your business with the best digital marketing company in Udaipur. Expert SEO, social media, and online marketing services for guaranteed growth.",
  keywords: [
      "digital marketing company in Udaipur", "digital marketing services in Udaipur", "digital marketing agency in Udaipur", "affordable digital marketing company in Udaipur", "Email marketing services in Udaipur", "Social media marketing in Udaipur", "PPC in Udaipur", "Content marketing in Udaipur", "Udaipur web design and development",
  ],
  path: "/digital-marketing-company-in-udaipur",
});

const DigitalMarketingCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Best Digital Marketing Company In Udaipur"}
        description={
          "A reasonably affordable digital marketing agency in Udaipur will amplify your online growth through effective SEO, social media marketing, Google Ads, and website development. The right agency will help businesses improve visibility, attract customers, and build a strong digital presence with clearly priced and goal-oriented strategies."
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

export default DigitalMarketingCity;
