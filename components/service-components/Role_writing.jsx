import React from "react";
import SafeHtml from "../common-components/safeHtml";

const Role_writing = ({data}) => {
  return (
    <section className="writing-impact-section">
      <style>{`
        .bs-header-html-content a {
          color:rgb(3, 131, 211);
          transition: color 0.2s ease;
        }

        .bs-header-html-content a:hover {
          color: #18336c; /* darker color on hover */
          text-decoration: underline; /* optional */
        }
        .writing-impact-section {
          background: #141D38;
          padding: 60px 20px;
          font-family: 'Segoe UI', sans-serif;
          color: #18336c;
          animation: fadeIn 1.2s ease-in;
        }

        .writing-impact-container {
          max-width: 960px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(24, 51, 108, 0.1);
          position: relative;
          overflow: hidden;
        }

        .writing-impact-container::before {
          content: "";
          position: absolute;
          top: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          background: #ccd9ff;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .writing-impact-container::after {
          content: "";
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 400px;
          height: 400px;
          background: #ccd9ff;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }



        .writing-impact-content {
          position: relative;
          z-index: 1;
        }

        .writing-impact-content h2 {
          margin-bottom: 16px;
          position: relative;
        }

        .writing-impact-content h2::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background-color: #18336c;
          margin-top: 8px;
          border-radius: 2px;
        }

        .writing-impact-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .writing-impact-container {
            padding: 25px;
          }

          .writing-impact-content p {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="writing-impact-container">
        <div className="writing-impact-content">
          <SafeHtml
            as="h2"
            html={data?.heading}
            className={"new-section-title text-left!"}
          />
          {data?.content && (
            <SafeHtml
              as="div"
              className="bs-header-html-content"
              html={data?.content}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Role_writing;
