import { generateSEOMeta } from "../../../utils/seo";
import UKSubsidiaryClient from "../../../components/uk-subsidiary-components/UKSubsidiaryClient";

export const metadata = generateSEOMeta({
  title: "Дъщерна компания във Великобритания | Warrgyiz Morsch",
  description:
    "Открийте WarrgyizMorsch UK Ltd – мост между иновациите в Удайпур и Лондон. Офис във Великобритания, обслужващ европейски операции с GDPR съответствие и локална отговорност.",
  path: "/about-us/uk-subsidiary",
});

const UKSubsidiaryPage = () => {
  return <UKSubsidiaryClient />;
};

export default UKSubsidiaryPage;