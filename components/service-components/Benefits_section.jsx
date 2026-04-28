import React from "react";
import SafeHtml from "../common-components/safeHtml";

const Benefits_section = ({ data }) => {
  return (
    <div className="benefits-timeline container">
      <style>{`
        .benefits-timeline {
          padding: 40px 20px;
          font-family: 'Segoe UI', sans-serif;
          background-color: #ffffff;
          color: #2c2c2c;
        }

        .benefits-intro {
          text-align: center;
          margin-bottom: 50px;
        }

        .benefits-intro h2 {
          color: #18336c;
          margin-bottom: 15px;
          animation: slideDown 0.8s ease-in;
        }

        .benefits-intro p {
          animation: fadeIn 1s ease-in;
        }

        .timeline {
          border-left: 4px solid #18336c;
          padding-left: 30px;
          position: relative;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 40px;
        }

        .timeline-icon {
          width: 50px;
          height: 50px;
          position: absolute;
          left: -80px;
          top: 0;
        }

        .timeline-number {
          position: absolute;
          left: -45px;
          top: 8px;
          background: #18336c;
          color: white;
          font-weight: bold;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          z-index: 1;
        }

        .timeline-dot {
          position: absolute;
          left: -34px;
          top: 14px;
          width: 12px;
          height: 12px;
          background-color: #18336c;
          border-radius: 50%;
        }

        .timeline-content {
          background: #f1f5fd;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #dce3f0;
          animation: zoomIn 0.6s ease;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background-color: #e1eaff;
          transform: translateY(-4px);
          box-shadow: 0 4px 15px rgba(24, 51, 108, 0.15);
        }

        .timeline-title {
          color: #18336c;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .timeline-description {
          font-size: 1rem;
          line-height: 1.6;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 767px) {
          .timeline-item{
            padding-left: 0px;
          }
        }
      `}</style>

      <div className="benefits-intro">
        <SafeHtml as="h2" html={data?.heading} className={"new-section-title"} />
        <SafeHtml as="p" html={data?.description} />
      </div>

      <div className="timeline">
        {data?.services?.map((service, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-number">{index + 1}</div>
            <div className="timeline-dot"></div>
            {service?.logo && (
              <img
                className="timeline-icon"
                loading="lazy"
                src={service.logo}
                alt={service.name}
              />
            )}
            <div className="timeline-content">
              <SafeHtml
                as="h3"
                className="timeline-title"
                html={service.name}
              />
              <SafeHtml
                as="p"
                className="timeline-description"
                html={service.content}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits_section;
