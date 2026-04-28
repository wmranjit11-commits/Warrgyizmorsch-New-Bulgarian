"use client";
import GraduateTraineeHero from "../../components/graduate-trainee-components/GraduateTraineeHero";
import EligibilityCriteria from "../../components/graduate-trainee-components/EligibilityCriteria";
import SpecialisationAreas from "../../components/graduate-trainee-components/SpecialisationAreas";
import ProgrammePhases from "../../components/graduate-trainee-components/ProgrammePhases";
import CompensationBenefits from "../../components/graduate-trainee-components/CompensationBenefits";
import CareerProgression from "../../components/graduate-trainee-components/CareerProgression";
import ApplicationCTA from "../../components/graduate-trainee-components/ApplicationCTA";
import NewContact from "../../components/home-page-components/NewContact";

const GraduateTraineeClient = () => {
  return (
    <>
      <GraduateTraineeHero />

      <EligibilityCriteria />

      <SpecialisationAreas />

      <ProgrammePhases />

      <CompensationBenefits />

      <CareerProgression />

      {/* <ApplicationCTA /> */}

      <NewContact />
    </>
  );
};

export default GraduateTraineeClient;
