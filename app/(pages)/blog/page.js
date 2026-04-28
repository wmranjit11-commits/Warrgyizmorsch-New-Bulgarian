import React, { Suspense } from "react";
import BlogClient from "../../../components/blog-page-components/BlogClient";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Блог | Warrgyiz Morsch",
  description:
    "Прочетете експертни прозрения, тенденции и актуализации за технологии, дигитален маркетинг и бизнес растеж.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="text-center py-5 text-xl flex justify-center">Зареждане...</div>}>
      <BlogClient />
    </Suspense>
  );
}
