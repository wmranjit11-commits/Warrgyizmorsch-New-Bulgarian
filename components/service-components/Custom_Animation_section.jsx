"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import SafeHtml from "../common-components/safeHtml";

const Custom_Animation_section = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleCardContent = (index) => {
    setExpandedIndex((prev) => {
      const next = prev === index ? null : index;

      requestAnimationFrame(() => {
        contentRefs.current.forEach((el, i) => {
          if (!el) return;

          if (i === index && next === index) {
            el.style.maxHeight = el.scrollHeight + "px";
            el.style.opacity = "1";
          } else {
            el.style.maxHeight = "100px";
            el.style.opacity = "0.85";
          }
        });
      });

      return next;
    });
  };

  const truncateHeading = (text, limit = 25) => {
    if (!text) return "";
    return text.length <= limit ? text : text.slice(0, limit) + "...";
  };

  return (
    <div className="data-section">
      <style>{`
        .data-section {
          background: #f5f7fa;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          padding: 40px 0px;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }

        .data-section-heading{
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .data-tech-cards {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          align-items: flex-start;
        }

        .data-tech-card {
          position: relative;
          overflow: hidden;
          flex: 0 1 calc(33.333% - 20px);
          background: white;
          padding: 20px 25px;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          z-index: 1;
          box-sizing: border-box;
        }

        .data-tech-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #18336c, #0b5ed7);
          transition: all 0.45s ease;
          z-index: 0;
          pointer-events: none; /* ✅ important */
        }

        /* ✅ Hover (mouse devices) */
        .data-tech-card:hover::before {
          left: 0;
        }
        .data-tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(24, 51, 108, 0.25);
        }
        .data-tech-card:hover .data-tech-info h3,
        .data-tech-card:hover .data-tech-info p,
        .data-tech-card:hover .data-read-more-btn {
          color: #ffffff;
        }

        /* ✅ Focus support (click/tap on elements inside card) */
        .data-tech-card:focus-within::before{
          left: 0;
        }
        .data-tech-card:focus-within{
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(24, 51, 108, 0.25);
        }
        .data-tech-card:focus-within .data-tech-info h3,
        .data-tech-card:focus-within .data-tech-info p,
        .data-tech-card:focus-within .data-read-more-btn{
          color:#ffffff;
        }

        .data-tech-card img {
          width: 50px;
          height: 50px;
          z-index: 1;
        }

        .data-tech-info {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .data-tech-info h3 {
          margin: 0 0 10px;
          font-size: 1.2rem;
          color: var(--new-theme-color);
          transition: color 0.4s ease;
        }

        .data-tech-info p {
          font-size: 1rem;
          line-height: 1.6;
          transition: color 0.4s ease;
        }

        .data-read-more-btn {
          background: none;
          border: none;
          color: var(--new-theme-color);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-top: 8px;
          transition: color 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .data-content-wrapper {
          overflow: hidden;
          max-height: 100px;
          opacity: 0.85;
          transition: 
            max-height 0.6s cubic-bezier(.4,0,.2,1),
            opacity 0.4s ease;
        }

        /* ✅ Fix for 1168px */
        @media (max-width: 1168px) {
          .data-tech-card{
            flex: 0 1 calc(50% - 15px);
          }

          .data-tech-info h3{
            line-height: 1.35;
            min-height: 2.7em;
          }
        }

        @media (max-width: 900px) {
          .data-tech-card {
            flex: 0 1 calc(50% - 15px);
          }

          .data-tech-info h3{
            line-height: 1.35;
            min-height: 2.7em;
          }
        }

        @media (max-width: 600px) {
          .data-tech-card {
            flex: 0 1 100%;
          }

          .data-section .container{
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .data-section-heading{
            text-align: left;
            margin: 0;
            max-width: 100%;
          }

          .data-tech-info h3{
            line-height: 1.35;
            min-height: 2.7em;
          }
        }

        /* ✅ Touch devices: tap on same card */
        @media (hover: none) and (pointer: coarse) {
          .data-tech-card:active::before{
            left: 0;
          }
          .data-tech-card:active{
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(24, 51, 108, 0.25);
          }
          .data-tech-card:active .data-tech-info h3,
          .data-tech-card:active .data-tech-info p,
          .data-tech-card:active .data-read-more-btn{
            color:#ffffff;
          }
        }
      `}</style>

      <div className="container">
        <div className="data-section-heading">
          <SafeHtml
            as="h2"
            html={data?.heading}
            className={"new-section-title text-left!"}
          />
          <SafeHtml as="p" html={data?.description} />
        </div>

        <div className="data-tech-cards">
          {data?.services?.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div className="data-tech-card" key={index}>
                {service?.logo && (
                  <img src={service.logo} loading="lazy" alt={service.name} />
                )}

                <div className="data-tech-info">
                  <h3 title={service?.name}>
                    {service?.link ? (
                      <Link href={service.link}>
                        {isExpanded ? (
                          <SafeHtml as="span" html={service.name} />
                        ) : (
                          truncateHeading(service.name)
                        )}
                      </Link>
                    ) : isExpanded ? (
                      <SafeHtml as="span" html={service.name} />
                    ) : (
                      truncateHeading(service.name)
                    )}
                  </h3>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="data-content-wrapper"
                  >
                    <SafeHtml as="p" html={service.content} />
                  </div>

                  {service?.content?.length > 130 && (
                    <button
                      className="data-read-more-btn"
                      onClick={() => toggleCardContent(index)}
                    >
                      {isExpanded ? "Покажи по-малко" : "Прочетете повече"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Custom_Animation_section;
