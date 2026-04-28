"use client";
import React from "react";

const ThankYouPage = () => {
  return (
    <>
      <style>{`
        .thankyou-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.02),
            rgba(0,0,0,0.04)
          );
          padding: 20px;
        }

        .thankyou-card {
          background: #fff;
          border-radius: 22px;
          padding: 40px 30px;
          max-width: 520px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 14px 40px rgba(0,0,0,0.1);
        }

        .thankyou-title {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
          color: var(--new-theme-color);
        }

        .thankyou-text {
          font-size: 16px;
          color: rgba(0,0,0,0.7);
          line-height: 1.6;
          margin-bottom: 26px;
          margin-top: 20px;
        }

        @media (max-width: 600px) {
          .thankyou-title {
            font-size: 44px;
          }
        }
      `}</style>

      <div className="thankyou-wrapper">
        <div className="thankyou-card">
          <div className="thankyou-title">Благодарим ви</div>
          <p className="thankyou-text">
            Вашето запитване беше получено. Нашият екип ще се свърже с вас скоро.
          </p>

          <a href="/" className="th-btn style-radius">
            Обратно към началната страница
          </a>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;