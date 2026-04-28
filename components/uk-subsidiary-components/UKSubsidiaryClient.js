"use client";

import UKHero from "../uk-subsidiary-components/UKHero";
import UKPresence from "../uk-subsidiary-components/UKPresence";
import UKBenefits from "../uk-subsidiary-components/UKBenefits";
import UKLegalInfo from "../uk-subsidiary-components/UKLegalInfo";
import UKOfficeLocation from "../uk-subsidiary-components/UKOfficeLocation";
import Team from "../uk-subsidiary-components/Team";
import NewContact from "../home-page-components/NewContact";
import UKAwardsCertifications from "../uk-subsidiary-components/UKAwardsCertifications";
import TeamHierarchy from "../uk-subsidiary-components/TeamHierarchy";

const UKSubsidiaryClient = () => {
  return (
    <>
      <UKHero />
      <UKPresence />
      <UKBenefits />
      <UKLegalInfo />
      <UKOfficeLocation />
      <UKAwardsCertifications/>
      <Team/>
      <TeamHierarchy />
      <NewContact />
    </>
  );
};

export default UKSubsidiaryClient;
