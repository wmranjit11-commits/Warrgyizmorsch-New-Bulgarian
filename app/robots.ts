// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // agar kuch block karna ho to:
        // disallow: ["/admin", "/api"]
      },
    ],
   
  };
}
