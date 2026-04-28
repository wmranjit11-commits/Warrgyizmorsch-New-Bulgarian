import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "../../../data/More_Data/caseStudyData";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Казуси | Warrgyiz Morsch",
  description:
    "Разгледайте реални клиентски казуси, показващи как Warrgyiz Morsch предоставя ефективни дигитални решения.",
  path: "/case-study",
});

const CaseStudy = () => {
  return (
    <section className="case-study-section ">
      <style>
        {`
        .case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          margin:1px;
        }
        .case-card {
          position: relative;
          overflow: hidden;
          height: 400px;
          display: flex;
          flex-direction:column;
          padding: 0px 20px 20px 20px;
          color: #fff;
          background-size: cover;
          background-position: top center;
          transition: background-size 0.5s ease;
          background-size: 105%;
        }
        .case-card:hover {
          background-size: 100%;
        }
        .case-card:hover .logo{
          filter: brightness(1) invert(0);
        }
        .case-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25));
          backdrop-filter: blur(0.8px);
        }
        .case-content {
          position: relative;
          z-index: 2;
        }
        .case-title {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin-bottom: 6px;
        }
        .case-desc {
          font-size: 15px;
          margin-bottom: 6px;
          color: white;
        }
        .case-work {
          font-size: 13px;
          opacity: 0.85;
          margin-bottom: 12px;
          color: white;
        }
        .case-btn {
          border:1px solid white;
          width:100%;
          background-color:#ffffff1a;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 14px 0px;
          display: inline-flex;
          gap: 6px;
          color: white;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(4px);
        }
        .case-btn:hover {
          color: white;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
        }
        .logo {
          width: 150px;
          height: 100%;
          object-fit: contain;
          transition: 0.5s ease;
          filter: brightness(0) invert(1);
        }
        .logo:hover{
          filter: brightness(1) invert(0);
        }
        @media (max-width:480px) {
          .case-card{
            padding:0px 10px 10px 10px;
          }
        }
        `}
      </style>

      <div className="case-grid">
        {CASE_STUDIES.map((c, i) => (
          <div
            key={i}
            className="case-card"
            style={{ backgroundImage: `url(${c.img})` }}
          >
            <div className="case-overlay"></div>

            <div
              className="card-logo"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={c.logo} className="logo" />
            </div>

            <div className="case-content">
              <h3 className="case-title">{c.title}</h3>
              <p className="case-desc">{c.desc}</p>
              <p className="case-work">{c.work}</p>

              <Link href={`/case-study/${c.slug}`} className="case-btn">
                Виж подробности за казуса →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;