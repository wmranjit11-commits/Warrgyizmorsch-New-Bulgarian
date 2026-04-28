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
  AdServiceData,
  HeroSectionData,
  ModulesData,
  ProcessData,
  PlatformData,
  CustomSection,
  SolutionData,
  CustomerData
} from "../../../../data/Ad_Page_Data/AiDevelopmentData";
import AdService from "../../../../components/ad-component/AdService";
import PlatformSection from "../../../../components/ad-component/PlatformSection";
import Custom_section from "../../../../components/service-components/Custom_services_section";
import ClientSlider from "../../../../components/ad-component/ClientSlider";
import TechPop from "../../../../components/ad-component/TechPop";
import SolutionSection from "../../../../components/ad-component/SolutionSection";
import { generateSEOMeta } from "../../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Услуги за разработка на изкуствен интелект (AI)",
  description:
    "Създавайте надеждни, мащабируеми и интелигентни AI решения със специализиран екип за изкуствен интелект.",
  keywords: [
    "разработка на AI", "изкуствен интелект услуги", "AI разработка", "AI решения", "машинно обучение", "AI компания",
  ],
  path: "/lp/ai-development",
});

export default function ERPSoftwareDevelopmentPage() {
  return (
    <main className="">
      <Header />
      <HeroSection data={HeroSectionData} />
      <div className="h-10"></div>
      <ERPModules data={ModulesData} />
      <SolutionSection data={SolutionData} />
      <AdService data={AdServiceData} />
      <PlatformSection data={PlatformData} />
      <ClientSlider />
      <Custom_section data={CustomSection} />
      <HappyCustomersSlider data={CustomerData} />
      <ERPDevelopmentProcess data={ProcessData} />
      <TechPop />

      <ERPForm
        highlight={"Готови ли сте да изградите"}
        heading={`<br/>Вашето AI решение?`}
        button={"Запазете безплатна AI консултация"}
      />

      <Footer />
    </main>
  );
}