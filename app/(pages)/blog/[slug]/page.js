import { generateSEOMeta } from "../../../../utils/seo";
import BlogSlugClient from "../../../../components/blog-page-components/BlogSlugClient";
import { API_BASE } from "../../../../axios/http";

async function getBlog(slug) {
  if (!slug) return null;

  const url = `${API_BASE}/api/blogs/${slug}?site=warrgyizmorsch`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) return null;

  return res.json();
}

/* ------------------ METADATA ------------------ */
export async function generateMetadata(ctx) {
  const { slug } = await ctx.params;

  if (!slug) {
    return generateSEOMeta({
      title: "Блог | Warrgyizmorsch",
      description: "Прочетете най-новите блог статии от Warrgyizmorsch.",
      path: "/blog",
    });
  }

  const blog = await getBlog(slug);

  if (!blog) {
    return generateSEOMeta({
      title: "Блогът не е намерен | Warrgyizmorsch",
      description: "Блогът, който търсите, не съществува.",
      path: `/blog/${slug}`,
    });
  }

  return generateSEOMeta({
    title: blog.meta_title || blog.title,
    description: blog.meta_discribtion || "",
    keywords: blog.keywords || [],
    path: `/blog/${slug}`,
  });
}

/* ------------------ PAGE ------------------ */
export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return <BlogSlugClient blog={blog} />;
}