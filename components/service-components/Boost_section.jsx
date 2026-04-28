"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from '../../utils/functions';

const Boost_section = ({ data, cityName, countryName }) => {
  const router = useRouter();
  const redirectedToContact = () => {
    router.push("/contact-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="boost-section container my-6! md:my-12!">
      <style>{`
        .boost-section {
          background: linear-gradient(to right, #eaf0fb, #ffffff);
          padding: 100px 30px;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .boost-section h2 {
          color: #18336c;
          margin-bottom: 25px;
          animation: fadeDown 1s ease;
        }

        .boost-section p {
          color: #333;
          animation: fadeIn 1.5s ease;
        }

        .boost-section .highlight {
          color: #18336c;
          font-weight: bold;
        }

        .boost-section button {
          border: 2px solid #a2b1fc;
        }

        .boost-section button:hover {
          border: 2px solid #18336c;
        }

        /* Animations */
        @keyframes fadeDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <SafeHtml
        as="h2"
        html={resolveCityText(data?.heading, cityName, countryName)}
        className={"new-section-title text-(--new-theme-color)!"}
      />
      <SafeHtml
        as="p"
        html={resolveCityText(data?.description, cityName, countryName)}
      />
      <button
        className="th-btn style3 style-radius"
        onClick={redirectedToContact}
      >
        {data?.button}
      </button>
    </div>
  );
};

export default Boost_section
