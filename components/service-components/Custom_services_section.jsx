"use client";
import React, { useState } from "react";
import Link from "next/link";
import SafeHtml from "../common-components/safeHtml";

const Custom_section = ({ data }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardContent = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, limit = 135) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  const truncateHeading = (text, limit = 25) => {
    if (!text) return "";
    return text.length <= limit ? text : text.slice(0, limit) + "...";
  };

  const getHeadingText = (text, isExpanded) => {
    if (!text) return "";
    if (data?.twolineheading) return text;
    if (isExpanded) return text;
    return truncateHeading(text);
  };

  return (
    <div className="custom-section">
      <style>{`
        .custom-section {
          background: #f5f7fa;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          padding: 40px 0px;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }

        .custom-section h2 {
          animation: fadeInDown 0.8s ease;
        }

        .custom-section p {
          animation: fadeIn 1s ease-in;
        }

        .tech-cards {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
	        align-items: flex-start;
        }

        .tech-card {
          flex: 0 1 calc(33.333% - 20px);
          background: white;
          border-left: 5px solid #18336c;
          padding: 20px 25px;
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: slideIn 1s ease-in-out;
        }

        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(24, 51, 108, 0.15);
        }

        .tech-card img {
          width: 50px;
          height: 50px;
        }

        .tech-info h3 {
          margin: 0 0 10px;
          color: #18336c;
          font-size: 1.2rem;
        }

        .tech-info p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .read-more-btn {
          background: none;
          border: none;
          color: #18336c;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-top: 8px;
        }

        .content-wrapper {
          overflow: hidden;
          max-height: 100px;
          opacity: 0.8;
          transition: max-height 0.5s ease, opacity 0.5s ease;
        }

        .content-wrapper.expanded {
          max-height: 1000px;
          opacity: 1;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .tech-card {
            flex: 0 1 calc(50% - 20px);
          }
        }

        @media (max-width: 600px) {
          .tech-card {
            flex: 0 1 100%;
          }
        }
      `}</style>

      <div className="container">
        <SafeHtml
          as="h2"
          html={data?.heading}
          className={"new-section-title text-left!"}
        />
        <SafeHtml as="p" html={data?.description} />

        <div className="tech-cards">
          {data?.services?.map((service, index) => {
            const isExpanded = expandedCards[index];

            return (
              <div className="tech-card" key={index}>
                {service?.logo && (
                  <img src={service.logo} loading="lazy" alt={service.name} />
                )}
                <div className="tech-info">
                  {service?.link ? (
                    <h3 title={service?.name}>
                      <Link
                        href={service.link}
                        style={{
                          textDecoration: "underline",
                          color: "#18336c",
                        }}
                      >
                        <SafeHtml
                          as="span"
                          html={getHeadingText(service.name, isExpanded)}
                        />
                      </Link>
                    </h3>
                  ) : (
                    <h3 title={service?.name}>
                      <SafeHtml
                        as="span"
                        html={getHeadingText(service.name, isExpanded)}
                      />
                    </h3>
                  )}

                  <div
                    className={`content-wrapper ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    <SafeHtml
                      as="p"
                      html={
                        isExpanded
                          ? service.content
                          : truncateText(service.content)
                      }
                    />
                  </div>
                  {service?.content.length > 130 && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleCardContent(index)}
                    >
                      {isExpanded ? " Покажи по-малко" : " Прочетете повече"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {data?.button && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/warrgyizmorschdigital/30min",
                  });
                }
              }}
              className="th-btn style-radius cursor-pointer"
            >
              {data.button.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Custom_section;
