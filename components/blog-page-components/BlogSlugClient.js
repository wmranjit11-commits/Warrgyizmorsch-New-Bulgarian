"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ApiService, API_BASE } from "../../axios/http";
import Recent_Posts from "../../components/blog-page-components/Recent_Posts";
import { Blog_Categories } from "../../data/More_Data/blogCategoryData";
import NewServiceFormModal from "../home-page-components/NewServiceFormModal";

const IMAGE_BASE_URL = "https://www.wtsvisa.com";
const fixImageUrls = (html) => {
  if (!html) return html;
  
  return html.replace(
    /<img\s+[^>]*src=["'](?!https?:\/\/)([^"']+)["']/gi,
    (match, src) => {
      const normalizedSrc = src.startsWith("/")
        ? `${IMAGE_BASE_URL}${src}`
        : `${IMAGE_BASE_URL}/${src}`;

      return match.replace(src, normalizedSrc);
    }
  );
};

const allowedAuthorsBase = (path) =>
  path?.startsWith("http") ? path : path ? `${API_BASE}/${path}` : "";

const formatBlogDate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const buildTocFromHtml = (html = "") => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  const headings = Array.from(wrapper.querySelectorAll("h2"));
  const toc = [];

  headings.forEach((h, idx) => {
    let id = h.getAttribute("id");
    if (!id) {
      id = `heading-${idx}`;
      h.setAttribute("id", id);
    }

    h.style.scrollMarginTop = "140px";

    toc.push({ id, text: h.textContent || "" });
  });

  return { toc, html: wrapper.innerHTML };
};

const BlogSlugClient = ({ blog }) => {
  const { slug } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const normalizeBlog = (data) => {
    if (!data) return null;

    const mainImage = allowedAuthorsBase(data.images);
    const authorImage = allowedAuthorsBase(data.author_image);

    let faqs = [];
    try {
      if (typeof data.faq === "string") faqs = JSON.parse(data.faq);
      else if (Array.isArray(data.faq)) faqs = data.faq;
    } catch (e) {
      faqs = [];
    }

    let toc = data.toc || [];
    let content = data.content || "";

    // build toc from HTML if missing
    if ((!toc || toc.length === 0) && typeof window !== "undefined") {
      const built = buildTocFromHtml(content);
      toc = built.toc;
      content = built.html;
    }

    return {
      ...data,
      mainImage,
      authorImage,
      date: formatBlogDate(data.created_at),
      toc,
      content,
      faqs,
    };
  };

  // ✅ 1) If blog came from server props, use it and DO NOT fetch
  useEffect(() => {
    if (!blog) return;

    setLoading(true);
    const normalized = normalizeBlog(blog);
    setBlogData(normalized);
    setLoading(false);
  }, [blog]);

  // ✅ 2) Fallback: if no blog prop, then fetch using old logic
  useEffect(() => {
    if (blog) return; // IMPORTANT: don't refetch if server already provided it
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await ApiService.get(`/blogs/${slug}`, {
          site: "warrgyizmorsch",
        });

        const normalized = normalizeBlog(res);
        setBlogData(normalized);
      } catch (err) {
        console.error(err);
        setBlogData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, blog]);

  if (loading)
    return (
      <div className="container py-5 w-full flex justify-center text-xl">
        Зареждане...
      </div>
    );
  if (!blogData)
    return (
      <div className="container py-5 w-full flex justify-center text-xl">
        Блогът не е намерен.
      </div>
    );

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url('/assets/img/service/serviceD.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="service-sec"
      >
        <div className="round-container pt-5">
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title text-white">БЛОГ</span>
              <h1 className="sec-title text-white">{blogData.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          {/* Mobile TOC */}
          {blogData.toc?.length > 0 && (
            <div className="mobile-toc d-lg-none">
              <div className="mobile-toc-inner">
                <h2>Съдържание</h2>
                <ul className="list-unstyled mb-0">
                  {blogData.toc.map((item) => (
                    <li key={item.id} className="mb-1">
                      <a href={`#${item.id}`} className="toc-link">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="th-blog blog-single">
                {blogData.mainImage && (
                  <div className="blog-img">
                    <img
                      src={blogData.mainImage}
                      className="h-full w-full"
                      loading="lazy"
                      alt="Blog"
                    />
                  </div>
                )}

                <div className="blog-content">
                  <div className="blog-meta flex! justify-between!">
                    {blogData?.author && (
                      <div>
                        <p className="font-semibold text-gray-800 p-0 m-0">
                          Публикувано от:
                        </p>
                        <a
                          className="author flex!"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          {blogData.author.photo ? (
                            <img
                              src={`${API_BASE}/storage/${blogData.author.photo}`}
                              loading="lazy"
                              alt="Author"
                            />
                          ) : (
                            <img
                              src={"/assets/new-img/blank.jpeg"}
                              loading="lazy"
                              alt="Author"
                            />
                          )}

                          <p>{blogData.author.name ?? "Администратор"}</p>
                        </a>
                      </div>
                    )}

                    {blogData.date && (
                      <div>
                        <p className="font-semibold text-gray-800 p-0 m-0">
                          Публикувано на:
                        </p>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fa-light fa-calendar-days"></i>
                          {blogData.date}
                        </a>
                      </div>
                    )}
                  </div>

                  {blogData.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: fixImageUrls(blogData.content),
                      }}
                    />
                  )}

                  {blogData.author && (
                    <div className="mt-10 mb-6 rounded-2xl border-2 bg-white py-3 px-4 shadow-sm">
                      <h3>Профил на автора</h3>
                      <div className="">
                        <div className="md:flex gap-3 items-start">
                          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            {blogData.author.photo ? (
                              <img
                                src={`${API_BASE}/storage/${blogData.author.photo}`}
                                alt={blogData.author.name || "Author"}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <img
                                src={"/assets/new-img/blank.jpeg"}
                                alt={blogData.author.name || "Author"}
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <p className="mb-1 text-lg font-semibold text-gray-900">
                              {blogData.author.name}
                            </p>
                            <div className="flex-1">
                              {blogData.author.description ? (
                                <p className="mb-0 text-sm text-gray-600">
                                  {blogData.author.description}
                                </p>
                              ) : (
                                <p className="mb-0 text-sm text-gray-500">
                                  Подробности за автора не са налични.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {blogData.faqs?.length > 0 && (
                    <div className="faq-section mt-4">
                      <h2 className="mb-2">Често задавани въпроси</h2>

                      <div className="accordion" id="faqAccordion">
                        {blogData.faqs.map((faq, index) => {
                          const isOpen = openFaqIndex === index;

                          return (
                            <div className="accordion-item" key={index}>
                              <h2
                                className="accordion-header"
                                id={`heading${index}`}
                              >
                                <button
                                  className={`accordion-button ${
                                    isOpen ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  aria-expanded={isOpen ? "true" : "false"}
                                  onClick={() => toggleFaq(index)}
                                >
                                  {faq.question}
                                </button>
                              </h2>

                              <div
                                className={`faq-collapse ${
                                  isOpen ? "open" : ""
                                }`}
                              >
                                <div
                                  className="accordion-body"
                                  style={{ color: "#111" }}
                                >
                                  {faq.answer}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Share (keep as-is) */}
                <div className="share-links clearfix">
                  <div className="row justify-content-between">
                    <div className="col-sm-auto text-xl-end">
                      <span className="share-links-title">Споделяне:</span>
                      <ul className="social-links">
                        <li>
                          <a
                            href="https://www.facebook.com/share/1E5k3uqY3x/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/warrgyiz_morsch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/warrgyiz-morsch/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://api.whatsapp.com/send/?phone=%2B918693085077&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                {blogData.toc?.length > 0 && (
                  <div className="p-3 bg-light rounded shadow-sm mb-4 d-none d-lg-block">
                    <h3 className="widget_title">Съдържание</h3>
                    <ul className="list-unstyled toc-list">
                      {blogData.toc.map((item) => (
                        <li key={item.id} className="mb-2">
                          <a
                            href={`#${item.id}`}
                            className="block rounded-md border-l-3 hover:border-b border-(--primary) bg-[#f1f1f1] px-2 py-1 text-md text-(--primary) transition-all duration-300 hover:text-black"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Recent_Posts />

                <div className="widget widget_categories">
                  <h3 className="widget_title">Категории</h3>
                  <ul>
                    {Blog_Categories.map((cat) => {
                      const isActive = blogData.category === cat;

                      return (
                        <li key={cat} className={isActive ? "active" : ""}>
                          <Link
                            href={`/blog?category=${encodeURIComponent(cat)}`}
                            style={{
                              fontWeight: isActive ? "700" : "400",
                              textDecoration: isActive ? "underline" : "none",
                            }}
                          >
                            {cat}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
              <div className="sticky top-24">
                <NewServiceFormModal title="Свържете се с нас" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSlugClient;
