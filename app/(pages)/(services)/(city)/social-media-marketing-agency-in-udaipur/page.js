import React from "react";
import {
  BoostSection,
  CustomSection,
  FAQ,
  BenefitSection,
  ServicesSection,
} from "../../../../../data/All_Services_Data/City_Service_Data/smmCityData";
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
  title: "Expert Social Media Marketing in Udaipur | Grow Your Brand Online",
  description:
      "Boost your digital presence with professional social media marketing in Udaipur. Engage your audience and grow your brand with effective strategies tailored for success.",
  keywords: [
      "social media marketing in Udaipur", "SMM services in Udaipur", "social media marketing agency in Udaipur", "SMM company in Udaipur", "digital marketing agency in Udaipur", "Social media marketing services in Udaipur,",
  ],
  path: "/social-media-marketing-agency-in-udaipur",
});

const SMMCity = () => {
  return (
    <>
      <NewServiceHeroForm
        title={"Social Media Marketing Services in Udaipur"}
        description={
          "Looking to grow your business online? Our social media marketing in Udaipur provides expert strategies that help brands reach the right audience and boost engagement. As a leading SMM company in Udaipur, we deliver result-driven campaigns tailored for each business. From content creation to analytics, our social media marketing services in Udaipur and digital marketing company in Udaipur expertise ensure measurable growth. Partner with the best digital marketing agency in Udaipur for effective online visibility and higher ROI."
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

            <Services_we_offer data={ServicesSection} />

            <Custom_section data={CustomSection} />

            <Benefits_section data={BenefitSection} />

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

export default SMMCity;
