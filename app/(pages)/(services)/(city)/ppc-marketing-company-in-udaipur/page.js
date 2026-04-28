import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  ServicesSection,
  BenefitSection
} from "../../../../../data/All_Services_Data/City_Service_Data/ppcCityData";
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
  title: "Top PPC Marketing Company in Udaipur for Fast Growth",
  description:
      "Get high-quality leads with the leading PPC Marketing Company in Udaipur. Warrgyizmorsch creates result-driven ad campaigns to maximize ROI and accelerate conversions.",
  keywords: [
      "Ppc service in udaipur", "Ppc services in udaipur", "Pey per click udaipur", "Ppc company in udaipur", "Ppc agency in udaipur", "Pay per click company in udaipur",
  ],
  path: "/ppc-marketing-company-in-udaipur",
});

const PPCCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "PPC Marketing Company in Udaipur - Drive Instant Leads and Conversions with Warrgyizmorsch"
        }
        description={
          "Being among the top Udaipur PPC marketing  company in udaipur , we deliver targeted traffic, qualified leads, and fast conversions with each strategically implemented data-driven campaign. Hence, our focus in PPC marketing is helping businesses reach the correct audience at the right time while guaranteeing measurable growth for a stronger visibility that goes beyond clicks."
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

            <Benefits_section data={BenefitSection} />

            <Services_we_offer data={ServicesSection} />

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

export default PPCCity;
