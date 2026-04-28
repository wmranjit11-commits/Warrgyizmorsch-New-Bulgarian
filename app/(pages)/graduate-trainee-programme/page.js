import React from "react";
import GraduateTraineeClient from "../../../components/graduate-trainee-components/GraduateTraineeClient";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Програма за стажанти (Graduate Trainee Programme) | Warrgyiz Morsch",
  description:
    "Присъединете се към нашата програма за стажанти - Global Business Mobility. 12-месечна структурирана ротационна програма за бързо кариерно развитие от стажант до висше ръководство в уеб разработка, изкуствен интелект, дигитален маркетинг и креативен дизайн.",
  path: "/graduate-trainee-programme",
});

const GraduateTraineePage = () => {
  return (
    <>
      <GraduateTraineeClient />
    </>
  );
};

export default GraduateTraineePage;