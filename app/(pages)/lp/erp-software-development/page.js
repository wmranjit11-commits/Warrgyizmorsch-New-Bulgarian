import Header from "../../../../components/ad-component/Header";
import HeroSection from "../../../../components/ad-component/HeroSection";
import ERPComparisonSection from "../../../../components/ad-component/ERPComparisonSection";
import ERPModules from "../../../../components/ad-component/ERPModules";
import Services from "../../../../components/ad-component/Services";
import ContactUs from "../../../../components/ad-component/ContactUS";
import HighlightedAchievements from "../../../../components/ad-component/HighlightedAchievements";
import CaseStudyAd from "../../../../components/ad-component/CaseStudyAd";
import ExperienceExcellenceSection from "../../../../components/ad-component/ExperienceExcellenceSection";
import WhyStandsOut from "../../../../components/ad-component/WhyStandsOut";
import HappyCustomersSlider from "../../../../components/ad-component/HappyCustomersSlider";
import ERPDevelopment from "../../../../components/ad-component/ERPDevelopment";
import ERPDevelopmentProcess from "../../../../components/ad-component/ERPDevelopmentProcess";
import AchievingSuccessInCustomERP from "../../../../components/ad-component/AchievingSuccessInCustomERP";
import Technologies from "../../../../components/ad-component/Technologies";
import ERPWorkflowCTA from "../../../../components/ad-component/ERPWorkflowCTA";
import ERPForm from "../../../../components/ad-component/ERPForm";
import Footer from "../../../../components/ad-component/Footer";
import {
  CustomerData,
  HeroSectionData,
  ModulesData,
  ProcessData,
  ErpDevelopmentData,
  ComparisonData,
} from "../../../../data/Ad_Page_Data/ErpSoftwareDevelopmentData";
import { generateSEOMeta } from "../../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Услуги за разработка на ERP системи",
  description:
    "Нашата мисия е да разберем вашите бизнес предизвикателства и да ги решим с персонализирани ERP софтуерни решения.",
  keywords: ["ERP разработка", "ERP системи", "ERP софтуер", "бизнес софтуер", "персонализирани ERP решения"],
  path: "/lp/erp-software-development",
});

export default function ERPSoftwareDevelopmentPage() {
  return (
    <main className="">
      <Header />
      <HeroSection data={HeroSectionData} />
      <ERPComparisonSection data={ComparisonData} />
      <ERPModules data={ModulesData} />
      <Services />
      <ContactUs />
      <HighlightedAchievements />
      <CaseStudyAd />
      <ExperienceExcellenceSection />
      <WhyStandsOut />
      <HappyCustomersSlider data={CustomerData} />
      <ERPDevelopment data={ErpDevelopmentData} />
      <ERPDevelopmentProcess data={ProcessData} />
      <AchievingSuccessInCustomERP />
      <Technologies />
      <ERPWorkflowCTA />

      <ERPForm
        highlight={"Планирате персонализирана ERP система за вашия бизнес?"}
        heading={`<br/>Нека я изградим заедно.`}
        button={"Получете ERP консултация"}
      />

      <Footer />
    </main>
  );
}