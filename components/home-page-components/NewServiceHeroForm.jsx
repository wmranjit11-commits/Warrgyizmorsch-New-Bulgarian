"use client";
import React from "react";
import NewServiceFormModal from "./NewServiceFormModal";
import { resolveCityText } from "../../utils/functions";
import SafeHtml from "../common-components/safeHtml";

const NewServiceHeroForm = ({
  title,
  description = "",
  showServiceTag = true,
  cityName,
  countryName,
}) => {
  return (
    <>
      <style>{`
        .webdev-hero-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 70px 0 90px;
        }

        .webdev-hero-left {
          max-width: 55%;
          color: #ffffff;
        }

        .webdev-hero-left .sec-title {
          text-align: left;
        }

        .webdev-hero-left .sub-title {
          text-align: left;
          display: inline-block;
        }

        .webdev-hero-text {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.6;
        }

        .webdev-hero-right {
          max-width: 480px;
          width: 100%;
        }

        .webdev-hero-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px 22px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        @media only screen and (max-width: 990px) {
          .webdev-hero-wrapper {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 0 35px;
          }

          .webdev-hero-left {
            max-width: 100%;
            text-align: center;
          }

          .webdev-hero-left .sec-title,
          .webdev-hero-left .sub-title {
            text-align: center;
          }

          .webdev-hero-right {
            max-width: 100%;
          }
        }

        @media only screen and (max-width: 576px) {
          .webdev-hero-form-card {
            padding: 18px 16px;
          }
        }

        .-mt-5 {
          margin-top: -20px;
        }
      `}</style>

      <section
        style={{
          backgroundImage: `url('/assets/img/service/serviceD.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="service-sec"
      >
        <div className="round-container pt-5">
          <div className="container">
            <div className="webdev-hero-wrapper">
              {/* LEFT */}
              <div className="webdev-hero-left">
                {/* 👇 CONDITIONAL TAG */}
                {showServiceTag && (
                  <span className="sub-title text-white">НАШИТЕ УСЛУГИ</span>
                )}

                <h1 className="sec-title text-white">
                  {resolveCityText(title, cityName, countryName)}
                </h1>

                {description && (
                  <SafeHtml
                    as="p"
                    className="text-white -mt-5"
                    html={resolveCityText(description, cityName, countryName)}
                  />
                )}
              </div>

              {/* RIGHT */}
              <div className="webdev-hero-right">
                <div className="webdev-hero-form-card">
                  <NewServiceFormModal title="Разкажете ни за вашия проект за персонализирани насоки" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewServiceHeroForm;
