import React from "react";
import {
  AssistanceSection,
  BoostSection,
  CustomSection,
  FAQ,
  LargeData,
  BenefitsSection,
} from "../../../../../data/All_Services_Data/City_Service_Data/seoCityData";
import Benefits_section from "../../../../../components/service-components/Benefits_section";
import Boost_section from "../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../../components/service-components/Handle_Largedata_section";
import FAQ_section from "../../../../../components/service-components/FAQ_section";
import Custom_section from "../../../../../components/service-components/Custom_services_section";
import NewServiceHeroForm from "../../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../../utils/seo";
import City_Pages_links from "../../../../../components/service-components/City_Pages_links";

export const metadata = generateSEOMeta({
  title: "Best SEO Company in Udaipur | Professional & Affordable SEO Services",
  description:
    "Work with a trusted SEO agency in Udaipur offering professional and affordable SEO services to improve visibility, traffic, and long-term business growth.",
  keywords: [
    "Best SEO Company in Udaipur",
    "Affordable SEO Services in Udaipur",
    "Trusted SEO agency in Udaipur",
    "Professional SEO Services in Udaipur",
  ],
  path: "/seo-company-in-udaipur",
});

const SEOCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={
          "Best SEO Company in Udaipur"
        }
        description={
        "Selecting the best SEO company in Udaipur is an important step for businesses that want to strengthen their digital presence and attract customers through organic search. Modern buyers rely heavily on search engines to compare services, evaluate credibility, and make informed decisions. A strong SEO foundation ensures your business appears consistently during these critical moments.Instead of focusing on short-term ranking gains, effective SEO prioritizes relevance, performance, and user experience. Businesses that invest in structured optimization benefit from sustainable visibility, higher-quality traffic, and long-term brand authority in competitive markets."
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

            {/* <Benefits_section data={BenefitsSection} /> */}

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

export default SEOCity;
