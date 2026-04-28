export function generateSEOMeta({
  title,
  description,
  keywords = [],
  path = "",
  image = "/assets/default-og.jpg",
}={}) {
  const baseUrl = "https://warrgyizmorsch.com";

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: `${baseUrl}${path}`,
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Warrgyizmorsch",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
