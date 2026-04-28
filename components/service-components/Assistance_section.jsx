import React from "react";
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from "../../utils/functions";

const Assistance_section = ({ data, cityName, countryName }) => {
  return (
    <div className="final-section container">
      <style>{`
        .final-section {
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          justify-content: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background-color: #f4f7fc;
          border-radius: 20px;
          padding: 20px;
          width: 100%;
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInCard 1s ease;
        }

        .card-image-section {
          margin-top: 30px;
          display: flex;
          align-items: center;
        }

        .card-image-section img {
          border: 2px solid;
          height: 250px;
          margin-right: 20px;
        }

        @media only screen and (max-width: 990px) {
          .card-image-section {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .card-image-section img {
            height: 180px;
            margin-right: 0;
          }

          .final-section {
            padding: 40px 10px;
          }
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.1);
        }

        .card h3 {
          color: #18336c;
          margin-bottom: 15px;
        }

        .card p {
          color: #333;
        }

        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="card">
        <SafeHtml
          as="h2"
          html={resolveCityText(data.heading, cityName, countryName)}
          className={"new-section-title"}
        />

        <SafeHtml
          as="p"
          html={resolveCityText(data?.content, cityName, countryName)}
        />

        {(data?.image || data?.subHeading || data?.subContent) && (
          <div className="card-image-section">
            {data?.image && (
              <img src={data.image} loading="lazy" alt="Web Assistance" />
            )}
            <div>
              {data?.subHeading && (
                <SafeHtml
                  as="h3"
                  html={data.subHeading}
                  className={"new-section-title text-(--new-theme-color)!"}
                />
              )}
              <SafeHtml as="p" html={data?.subContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assistance_section;
