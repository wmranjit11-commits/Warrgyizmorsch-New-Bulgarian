import React from "react";
import SafeHtml from "../common-components/safeHtml";

const BulletsSection = ({ data }) => {
  if (!data) return null;

  const { heading, content, bullets = [] } = data;

  return (
    <section className="bs-wrapper-container container">
      <style>{`
        .bs-wrapper-container {
          padding: 32px 20px;
          background-color: #ffffff;
          color: #2c2c2c;
         
        }
        .bs-header-container {
          text-align: center;
          margin-bottom: 24px;
        }
        .bs-header-container h2 {
          color: #18336c;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .bs-header-container p {
          color: #4a4a4a;
          margin: 0 auto;
        }
        .bs-bullet-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .bs-bullet-grid li {
          position: relative;
          padding: 12px 16px;
          background: #f9fafc;
          border-radius: 8px;
          border: 2px dotted #18336c;
          padding-left: 28px;
          transition: background 0.2s ease;
        }
        .bs-bullet-grid li:hover {
          background: #edf2fb;
        }
        
        @media (max-width: 767px) {
          .bs-wrapper-container {
            padding: 24px 16px;
          }
          .bs-header-container h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="bs-header-container">
        {heading && <SafeHtml as="h2" html={heading} className={"new-section-title"}/>}
        {content && <SafeHtml as="p" html={content} />}
      </div>

      <ul className="bs-bullet-grid">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
};

export default BulletsSection;
