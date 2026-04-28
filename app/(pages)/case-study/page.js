import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "../../../data/More_Data/caseStudyData";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Кейс стъдита | Warrgyiz Morsch",
  description:
    "Разгледайте реални клиентски кейс стъдита, показващи как Warrgyiz Morsch предоставя въздействащи дигитални решения.",
  path: "/case-study",
});

const THEMES = [
  { color: "#20C997", bgLight: "#E8F9F2", borderLight: "#c2f0df" }, // Green
  { color: "#3B82F6", bgLight: "#EFF6FF", borderLight: "#bfdbfe" }, // Blue
  { color: "#8B5CF6", bgLight: "#F5F3FF", borderLight: "#ddd6fe" }, // Purple
  { color: "#F97316", bgLight: "#FFF7ED", borderLight: "#fed7aa" }, // Orange
  { color: "#EC4899", bgLight: "#FDF2F8", borderLight: "#fbcfe8" }, // Pink
  { color: "#06B6D4", bgLight: "#ECFEFF", borderLight: "#a5f3fc" }, // Teal
];

const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <style>
        {`
          .case-study-section {
            padding: 5px 20px;
            max-width: 1400px;
            margin: 0 auto;
            font-family: 'Inter', sans-serif;
          }
          
          .header-container {
            text-align: center;
            margin-bottom: 60px;
            animation: fadeInDown 0.8s ease backwards;
          }
          
          .header-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: #E8F9F2;
            color: #20C997;
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 24px;
            border: 1px solid #c2f0df;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .header-title {
            font-size: 56px;
            font-weight: 800;
            color: #1A1A1A;
            margin-bottom: 20px;
            letter-spacing: -1px;
          }
          
          .header-title span {
            color: #20C997;
          }
          
          .header-subtitle {
            font-size: 18px;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .case-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 0px; 
            padding-bottom: 40px;
          }
          
          .case-card {
            position: relative;
            background: #fff;
            border-radius: 0px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border: 1px solid #EBEBEB;
            margin: -1px 0 0 -1px; /* border collapse for 0 gap */
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeInUp 0.8s ease backwards;
            text-decoration: none;
            color: inherit;
          }
          
          .case-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.1);
            border-color: var(--hover-color);
            z-index: 10;
          }
          
          .case-card::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             height: 3px;
             background-color: var(--hover-color);
             opacity: 0;
             transition: opacity 0.3s ease;
             z-index: 10;
          }
          
          .case-card:hover::before {
             opacity: 1;
          }

          .case-img-wrap {
            position: relative;
            width: 100%;
            height: 240px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }
          
          .case-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .case-card:hover .case-img {
            transform: scale(1.08); /* slight scale to fit well visually when hovered */
          }
          
          .case-number {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 14px;
            z-index: 2;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          
          .case-content {
            padding: 20px 24px 16px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background: #fff;
          }
          
          .case-eyebrow {
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
            transition: color 0.3s;
          }
          
          .case-title {
            font-size: 22px;
            font-weight: 800;
            color: #111827;
            margin-bottom: 0px;
            line-height: 1.4;
            transition: color 0.3s;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
          }
          
          .case-card:hover .case-title {
            color: var(--hover-color);
          }
          
          .case-desc {
            font-size: 15px;
            color: #6B7280;
            margin-bottom: 16px;
            line-height: 1.6;
            flex-grow: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .case-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 16px;
          }
          
          .case-tag {
            background-color: #F3F4F6;
            color: #4B5563;
            padding: 6px 14px;
            font-size: 12px;
            font-weight: 600;
            border-radius: 0px; 
            border: 1px solid #E5E7EB;
            transition: all 0.3s ease;
          }

          .case-card:hover .case-tag {
             border-color: var(--hover-color);
             color: var(--hover-color);
             background-color: transparent;
             transform: translateY(-2px);
             box-shadow: 0 4px 8px -2px rgba(0,0,0,0.05);
          }
          
          .case-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #F3F4F6;
            padding-top: 16px;
            margin-top: 16px;
            transition: border-color 0.3s;
          }
          
          .case-card:hover .case-footer {
            border-color: #E5E7EB;
          }
          
          .case-view-link {
            font-size: 15px;
            font-weight: 600;
            color: #111827;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          
          .case-view-text {
             transition: color 0.3s;
          }
          
          .case-card:hover .case-view-text {
             color: var(--hover-color);
          }

          .case-arrow {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .case-card:hover .case-arrow {
            transform: translate(4px, -4px);
            background-color: var(--hover-color) !important;
            color: #fff !important;
            box-shadow: 0 8px 16px var(--hover-color-light);
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .header-title {
              font-size: 40px;
            }
            .case-grid {
              grid-template-columns: 1fr;
            }
            .case-card {
               margin: 0 0 -1px 0;
            }
            .case-study-section {
               padding: 60px 16px;
            }
          }
        `}
      </style>

      {/* <div className="header-container">
        <div
            className="title-area text-center"
            style={{ marginBottom: "5px" }}
          >
            <span className="sub-title">OUR WORK</span>
            <h2>
              Explore Our Impactful{" "}
              <span className="text-theme fw-normal">Case Studies</span>
            </h2>
          </div>
      </div> */}

      <div className="case-grid">
        {CASE_STUDIES.map((c, i) => {
          const theme = THEMES[i % THEMES.length];
          const allTags = c.work ? c.work.split("•").map(t => t.trim()).filter(Boolean) : [];
          const eyebrow = allTags.length > 0 ? allTags.slice(0, 2).join(' • ') : "КЕЙС СТЪДИ";
          const tags = allTags.length > 0 ? allTags.slice(0, 3) : ["Дизайн", "Разработка"];

          return (
            <Link
              href={`/case-study/${c.slug}`}
              key={i}
              className="case-card cursor-pointer"
              style={{
                "--hover-color": theme.color,
                "--hover-color-light": `${theme.color}40`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="case-img-wrap"
                style={{
                  background: `linear-gradient(to bottom, ${theme.bgLight}, #ffffff)`,
                }}
              >
                <img src={c.img} alt={c.title} className="case-img" />
              </div>

              <div className="case-content">
                <div className="case-eyebrow" style={{ color: theme.color }}>
                  {eyebrow}
                </div>
                <h3 className="case-title">{c.title}</h3>
                {/* <p className="case-desc">{c.desc}</p> */}
                {/* <div className="case-tags">
                  {tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="case-tag">
                      {tag}
                    </span>
                  ))}
                </div> */}
                <div className="case-footer">
                  <div className="case-view-link">
                    <span className="case-view-text">Вижте детайли</span>
                    <div
                      className="case-arrow"
                      style={{
                        backgroundColor: theme.bgLight,
                        color: theme.color,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudy;
