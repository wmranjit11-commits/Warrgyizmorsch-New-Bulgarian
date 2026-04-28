"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ApiService, API_BASE } from "../../axios/http";

export default function RecentPosts() {
  const pathname = usePathname();
  const [blogDataList, setBlogDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentSlug = useMemo(() => {
    if (!pathname.startsWith("/blog/")) return null;
    return pathname.replace("/blog/", "");
  }, [pathname]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const res = await ApiService.get("/blogs", { site: "warrgyizmorsch" });
        const data = res?.data ?? res;
        setBlogDataList(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setBlogDataList([]);
      } finally {
        setLoading(false);
      }
    };
    
    getBlogs();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogDataList.filter((post) => post.slug !== currentSlug).slice(0, 5);
  }, [blogDataList, currentSlug]);
  
    const formatBlogDate = (isoDate) => {
      if (!isoDate) return "";
      const date = new Date(isoDate);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };
  
    const buildImageUrl = (path) => {
      if (!path) return "/images/blank.jpeg";
      if (path.startsWith("http")) return path;
      return `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
    };

  if (loading) return null; // or show skeleton/loader
  if (!filteredPosts?.length) return null;

  return (
    <div className="widget widget_recent_entries">
      <h3 className="widget_title">Последни публикации</h3>
      <div className="recent-posts">
        {filteredPosts.map((post, index) => {
          const blogUrl = `/blog/${post.slug}`;
          const imageSrc = buildImageUrl(post.images);
          const date = formatBlogDate(post.created_at);
          return (
            <div
              key={index}
              className="recent-post"
              style={{ flexDirection: "column" }}
            >
              <div className="media-img" style={{ width: "100%" }}>
                <Link href={blogUrl || "#"} aria-label={post.slug}>
                  <Image
                    src={imageSrc}
                    alt={post.slug || "Blog image"}
                    width={800}
                    height={450}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>

              <div className="recent-post-body">
                <h4 className="post-title">
                  <Link className="text-inherit" href={blogUrl || "#"}>
                    {post.title}
                  </Link>
                </h4>

                <div className="recent-post-meta">
                  <span>
                    <i className="fal fa-calendar-days"></i> {date}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
