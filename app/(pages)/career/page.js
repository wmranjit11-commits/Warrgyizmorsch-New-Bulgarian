import React from "react";
import CareerClient from "../../../components/career-components/CareerClient";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Кариери в Warrgyiz Morsch",
  description:
    "Разгледайте възможностите за кариера в Warrgyiz Morsch и се развивайте с иновативен дигитален екип.",
  path: "/career",
});

const Careers = () => {
  return (
    <>
      <CareerClient />
    </>
  )
};

export default Careers;