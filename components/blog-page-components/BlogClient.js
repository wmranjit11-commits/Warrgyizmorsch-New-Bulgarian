"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useBlog } from "../../context/BlogContext";
import { ApiService, API_BASE } from "../../axios/http";
import { useSearchParams } from "next/navigation";

const BlogClient = () => {
  const { setSelectedCategory, selectedCategory } = useBlog();

  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(6);

  const [blogDataList, setBlogDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleReadMore = () => setVisible((pre) => pre + 6);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const res = await ApiService.get("/blogs", { site: "warrgyizmorsch" });
        const data = res.data ?? res;

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

  const truncateText = (text = "", limit = 80) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");

  const formatBlogDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleString("bg-BG", {
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

  const allCategories = useMemo(() => {
    const cats = new Set();
    blogDataList.forEach((b) => {
      if (b.category) cats.add(b.category.trim());
    });
    return ["Всички", ...Array.from(cats)];
  }, [blogDataList]);

  const filteredBlog = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Всички") return blogDataList;
    return blogDataList.filter(
      (b) => (b.category || "").trim() === selectedCategory.trim()
    );
  }, [blogDataList, selectedCategory]);

  useEffect(() => {
    // wait until categories exist
    if (!allCategories || allCategories.length === 0) return;

    if (categoryParam) {
      const decoded = decodeURIComponent(categoryParam).trim();

      // if category exists in list, select it, else fallback to All
      const match = allCategories.find(
        (c) => c.trim().toLowerCase() === decoded.toLowerCase()
      );

      setSelectedCategory(match || "Всички");
    } else {
      // no param => normal default
      if (!selectedCategory) setSelectedCategory("Всички");
    }
  }, [categoryParam, allCategories, setSelectedCategory]); 


  const buttonStyle = {
    padding: isMobile ? "4px 8px" : " 2px 16px 2px 16px",
    fontSize: isMobile ? "12px" : "16px",
    borderRadius: "25px",
    border: "1px solid #0d6efd",
    backgroundColor: "rgb(255, 255, 255)",
    color: "#18336c",
    cursor: "pointer",
  };

  const styles = {
    blogCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      borderRadius: "8px",
      backgroundColor: "#fff",
      transition: "transform 0.3s, box-shadow 0.3s",
      gap: "20px",
    },
    blogImg: {
      width: "100%",
      height: "100%",
      objectFit: "fill",
      borderRadius: "8px",
    },
    blogContent: { padding: "0px 10px 10px 10px" },
    blogMeta: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    },
    blogMetaLink: { color: "#555", textDecoration: "none" },
    boxTitle: {
      display: "flex",
      alignItems: "center",
      minHeight: "54.4px",
      fontSize: "1.2em",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    blogText: { minHeight: "60px", flexGrow: 1, marginBottom: "16px" },
    blogBottom: { display: "flex", justifyContent: "flex-start" },
    lineBtn: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#18336c",
      fontWeight: "bold",
    },
    arrowIcon: { marginLeft: "8px" },
    seebtndiv: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      margin: "30px 0px 30px 0px",
    },
  };

  return (
    <>
      <section className="bg-top-right overflow-hidden" id="blog-sec">
        <div className="container pt-5">
          <div
            className="title-area text-center"
            style={{ marginBottom: "5px" }}
          >
            <span className="sub-title">ПОСЛЕДНИ ПУБЛИКАЦИИ</span>
            <h2>
              Получавайте всяка актуализация{" "}
              <span className="text-theme fw-normal">Блог</span>
            </h2>
          </div>

          {/* ✅ Category Filter */}
          {allCategories.length > 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: isMobile ? "center" : "start",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {!isMobile && (
                <p
                  style={{
                    margin: "0px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: isMobile ? "14px" : "18px",
                    color: "#18336c",
                  }}
                >
                  <b>Филтриране по категории:</b>
                </p>
              )}

              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                {!isMobile ? (
                  allCategories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        style={{
                          ...buttonStyle,
                          backgroundColor: isActive ? "#006fc9" : "white",
                          color: isActive ? "white" : "#18336c",
                          borderColor: "#0d6efd",
                        }}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    );
                  })
                ) : (
                  <select
                    value={selectedCategory || "Всички"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      maxWidth: "220px",
                      padding: "4px 40px 4px 35px",
                      fontSize: "14px",
                      border: "1px solid #0d6efd",
                      borderRadius: "8px",
                      appearance: "none",
                      background: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 10px center, url('data:image/svg+xml;utf8,<svg fill="%230d6efd" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h12v2H3zm0 5h12v2H3z"/></svg>') no-repeat 10px center`,
                      backgroundColor: "white",
                      backgroundSize: "18px 18px, 16px 16px",
                      cursor: "pointer",
                    }}
                  >
                    {allCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          )}

          {/* ✅ Loading / Empty */}
          {loading ? (
            <div className="text-center py-5">Зареждане...</div>
          ) : filteredBlog.length === 0 ? (
            <div className="text-center py-5">Няма намерени публикации.</div>
          ) : (
            <div className="row">
              {filteredBlog.slice(0, visible).map((blog) => {
                const blogUrl = `/blog/${blog.slug}`;
                const img = buildImageUrl(blog.images);
                const date = formatBlogDate(blog.created_at);
                const desc = truncateText(stripHtml(blog.content), 120);

                return (
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xl-4 p-4"
                    key={blog.id}
                  >
                    <div style={styles.blogCard}>
                      <div className="blogimgdiv w-full h-[200px] md:h-[100px]">
                        <img
                          src={img}
                          alt={blog.title}
                          loading="lazy"
                          style={styles.blogImg}
                        />
                      </div>

                      <div className="blog-content" style={styles.blogContent}>
                        <div className="blog-meta" style={styles.blogMeta}>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            style={styles.blogMetaLink}
                          >
                            <i className="fal fa-calendar-days"></i> {date}
                          </a>
                          {blog?.author && (
                            <div className="flex flex-col items-start justify-start">
                              {/* <img
                                src={`${API_BASE}/storage/${blog.author.photo}`}
                                alt={blog.author.name}
                                className="w-10 h-10 rounded-full object-cover border"
                              /> */}
                              <p className="text-sm font-medium text-gray-800 mb-0!">
                                <span className="font-semibold text-gray-700 p-0">От:</span> {blog.author.name}
                              </p>
                            </div>
                          )}
                        </div>

                        <h3 className="box-title" style={styles.boxTitle}>
                          <Link
                            href={blogUrl}
                            style={{ textDecoration: "none", color: "#000" }}
                          >
                            {truncateText(blog.title, 50)}
                          </Link>
                        </h3>

                        <p className="blog-text" style={styles.blogText}>
                          {desc}
                        </p>

                        <div className="blog-bottom" style={styles.blogBottom}>
                          <Link
                            href={blogUrl}
                            className="line-btn"
                            style={styles.lineBtn}
                          >
                             Прочетете повече
                            <i
                              className="fas fa-arrow-right"
                              style={styles.arrowIcon}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ✅ See More */}
      {!loading && visible < filteredBlog.length && (
        <div style={styles.seebtndiv}>
          <button
            onClick={handleReadMore}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 28px",
              fontSize: "16px",
              fontWeight: "500",
              border: "1px solid #0d6efd",
              borderRadius: "30px",
              background: "white",
              color: "#0d6efd",
              cursor: "pointer",
              transition: "all 0.5s ease",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#18336c";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgb(0,0,0,0)";
              e.currentTarget.style.color = "#18336c";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Вижте още <ArrowDown size={18} />
          </button>
        </div>
      )}
    </>
  );
};

export default BlogClient;