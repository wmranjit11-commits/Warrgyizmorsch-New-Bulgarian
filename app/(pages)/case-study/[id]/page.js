import { notFound } from "next/navigation";
import { generateSEOMeta } from "../../../../utils/seo";
import { CASE_STUDIES } from "../../../../data/More_Data/caseStudyData";
import CaseClient from "../../../../components/case-study-page-components/Caseclient";

/* ------------------ GET CASE STUDY ------------------ */
async function getCaseStudy(slug) {
  if (!slug) return null;

  return CASE_STUDIES.find((item) => item.slug === slug) || null;
}

/* ------------------ METADATA ------------------ */
export async function generateMetadata({ params }) {
  const { id } = await params;

  if (!id) {
    return generateSEOMeta({
      title: "Казуси | Warrgyiz Morsch",
      description:
        "Разгледайте реални клиентски казуси, показващи как Warrgyiz Morsch предоставя ефективни дигитални решения.",
      path: "/case-study",
    });
  }

  const caseStudy = await getCaseStudy(id);

  if (!caseStudy) {
    return generateSEOMeta({
      title: "Казусът не е намерен | Warrgyizmorsch",
      description: "Казусът, който търсите, не съществува.",
      path: `/case-study/${id}`,
    });
  }

  return generateSEOMeta({
    title: caseStudy.meta_title || caseStudy.title,
    description: caseStudy.meta_description || caseStudy.desc,
    keywords: caseStudy.keywords || [],
    path: `/case-study/${id}`,
  });
}

/* ------------------ PAGE ------------------ */
export default async function CaseStudyDetail({ params }) {
  const { id } = await params;
  const caseStudy = await getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return <CaseClient caseStudy={caseStudy} />;
}