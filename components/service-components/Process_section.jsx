"use client";

import React from "react";
import { Search, PencilRuler, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Проучване",
    Icon: Search,
  },
  {
    title: "Дизайн",
    Icon: PencilRuler,
  },
  {
    title: "Разработка",
    Icon: Code2,
  },
  {
    title: "Стартиране",
    Icon: Rocket,
  },
];

const Process_section = ({ serviceName }) => {
  return (
    <section className="new-process-section py-5">
      <div className="container py-3">
        {/* Heading (same pattern like your Unique_section) */}
        <h2 className="new-section-title text-(--new-title-color)! mb-4 text-center">
          Нашият процес за {serviceName}
        </h2>

        {/* Steps */}
        <div className="new-process-grid">
          {STEPS.map((step, index) => {
            const Icon = step.Icon;

            return (
              <div className="new-process-card" key={index}>
                {/* Top row */}
                <div className="new-process-top">
                  <div className="new-process-icon">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="new-process-step">
                    <span>Стъпка</span> {index + 1}
                  </div>
                </div>

                <h3 className="new-process-title">{step.title}</h3>

                {/* Connector (only desktop) */}
                {index !== STEPS.length - 1 && (
                  <span className="process-connector" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .new-process-section{
          background:#f4f4f4;
          padding:5rem 0;
        }

        .process-desc{
          color:var(--new-body-color);
          max-width:900px;
          margin:.75rem auto 2.2rem;
          font-size:1rem;
          line-height:1.7;
        }

        .new-process-grid{
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:1.25rem;
          position:relative;
        }

        .new-process-card{
          position:relative;
          border-radius:14px;
          background:linear-gradient(to bottom, var(--new-smoke-color2), #ffffff);
          border:1px solid #dbeafe;
          padding:1.25rem 1.25rem 1.35rem;
          transition:transform .35s ease, box-shadow .35s ease, border-color .35s ease;
          overflow:hidden;
        }

        .new-process-card:hover{
          transform:translateY(-4px);
          box-shadow:0 10px 26px rgba(0,0,0,0.08);
          border-color:color-mix(in srgb, var(--new-theme-color) 35%, #dbeafe);
        }

        .new-process-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:1rem;
          margin-bottom:.9rem;
        }

        .new-process-icon{
          height:46px;
          width:46px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#fff;
          border:1px solid #e7eefc;
          color:var(--new-theme-color);
        }

        .new-process-step{
          font-size:.82rem;
          font-weight:700;
          color:var(--new-smoke-color);
          background:#fff;
          border:1px solid #e7eefc;
          padding:.35rem .6rem;
          border-radius:999px;
          white-space:nowrap;
        }

        .new-process-step span{
          color:var(--new-body-color);
          font-weight:600;
        }

        .new-process-title{
          color:var(--new-title-color);
          font-size:1.2rem;
          font-weight:600;
          margin:0 0 .45rem;
        }


        /* Connector line between cards (desktop only) */
        .process-connector{
          position:absolute;
          top:28px;
          right:-10px;
          width:20px;
          height:2px;
          background:color-mix(in srgb, var(--new-theme-color) 35%, #e7eefc);
        }

        .process-connector::after{
          content:"";
          position:absolute;
          right:-2px;
          top:50%;
          transform:translateY(-50%);
          width:6px;
          height:6px;
          border-radius:50%;
          background:var(--new-theme-color);
          opacity:.35;
        }

        @media(max-width:800px){
          .new-process-grid{
            grid-template-columns:repeat(2, 1fr);
          }
          .process-connector{
            display:none;
          }
        }

        @media(max-width:640px){
          .new-process-section{
            padding:3.5rem 0;
          }

          .process-desc{
            text-align:left !important;
            margin-left:0;
            margin-right:0;
          }
        }
      `}</style>
    </section>
  );
};

export default Process_section;
