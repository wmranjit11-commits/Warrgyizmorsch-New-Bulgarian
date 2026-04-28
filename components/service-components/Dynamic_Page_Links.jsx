"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Dynamic_Page_Links = ({ pages = [], locationLabel = "" }) => {
  const pathname = usePathname();
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 640) setVisibleCount(6);
      else if (window.innerWidth <= 1024) setVisibleCount(8);
      else setVisibleCount(12);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Normalize to { title, path }
  const allLinks = useMemo(() => {
    if (!Array.isArray(pages)) return [];

    return pages
      .filter((p) => p?.slug)
      .map((p) => ({
        title: p?.hero_title || p?.service?.name || "Service",
        slug: p.slug,
        path: `/${p.slug}`,
      }));
  }, [pages]);

  const linksToDisplay = showAll ? allLinks : allLinks.slice(0, visibleCount);

  if (allLinks.length === 0) return null;

  const headingText = locationLabel
    ? `Разгледайте още наши услуги в ${locationLabel}`
    : "Разгледайте още наши услуги";

  function slugToTitle(slug) {
    const acronyms = ["erp", "crm", "api", "saas", "ui", "ux", "php", "ios"];

    return slug
      .split("-")
      .map((word) => {
        if (acronyms.includes(word.toLowerCase())) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }


  return (
    <section className="city-pages-links-section">
      <div className="container">
        <h2 className="new-section-title text-left! text-(--new-theme-color)!">
          {headingText}
        </h2>

        <div className="city-global-links-grid">
          {linksToDisplay.map((item, index) => (
            <Link
              key={`${item.path}-${index}`}
              href={`/service/${item.path}`}
              className={`city-global-link-item ${
                pathname === item.path ? "active" : ""
              }`}
            >
              <span className="arrow-icon">➔</span>
              <span className="link-text">{slugToTitle(item.slug)}</span>
            </Link>
          ))}
        </div>

        {/* VIEW MORE / LESS */}
        {allLinks.length > visibleCount && (
          <div className="view-more-wrapper">
            <button
              className="th-btn style-radius"
              onClick={() => setShowAll(!showAll)}
              style={{ marginTop: "20px" }}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .city-pages-links-section {
          padding: 4rem 0 0 0;
          background: #ffffff;
        }

        .city-pages-links-heading {
          font-size: 2rem;
          font-weight: 600;
          color: var(--new-theme-color);
          margin-bottom: 1.5rem;
        }

        .city-global-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px 25px;
        }

        @media (max-width: 1024px) {
          .city-global-links-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .city-global-links-grid { grid-template-columns: 1fr; }
        }

        .city-global-link-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          text-decoration: none;
          color: #062b3f;
          font-size: 15px;
          transition: 0.3s;
          line-height: 1.4;
        }

        .arrow-icon {
          color: black;
          font-size: 14px;
          margin-top: 2px;
        }

        .link-text {
          transition: 0.3s;
        }

        .city-global-link-item:hover .link-text {
          color: var(--new-theme-color);
          transform: translateX(5px);
        }

        .city-global-link-item.active .link-text {
          font-weight: 700;
          color: var(--new-theme-color);
        }

        .view-more-wrapper {
          text-align: left;
        }
      `}</style>
    </section>
  );
};

export default Dynamic_Page_Links;
