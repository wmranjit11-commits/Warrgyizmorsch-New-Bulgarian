import { API_BASE } from "../axios/http";

export const allowedAuthorsBase = (path) =>
  path?.startsWith("http") ? path : path ? `${API_BASE}/${path}` : "";

export async function getBlogServer(slug) {
  try {
    const res = await fetch(
      `${API_BASE}/blogs/${encodeURIComponent(slug)}?site=warrgyizmorsch`,
      { cache: "no-store" } // or next: { revalidate: 60 }
    );

    if (!res.ok) return null;

    const data = await res.json();

    return {
      ...data,
      mainImage: allowedAuthorsBase(data.images),
      authorImage: allowedAuthorsBase(data.author_image),
    };
  } catch (e) {
    return null;
  }
}
