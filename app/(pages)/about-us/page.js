import React from "react";
import { generateSEOMeta } from "../../../utils/seo";
import AboutPage from "../../../components/about-page-components/AboutPage";

export const metadata = generateSEOMeta({
  title: "За нас | Warrgyizmorsch",
  description: "Научете повече за нашата компания, мисия и ценности.",
  keywords: ["за нас", "компания", "дигитална агенция"],
  path: "/about",
});

const About = () => {
  return <AboutPage />;
};

export default About;