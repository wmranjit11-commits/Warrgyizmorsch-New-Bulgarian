import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const AboutUsServicesSection = () => {
  return (
    <section className="about-service-section">
      <style>{`

        @media (min-width: 1025px) {
          .about-service-section {
            height: 850px;
            width: 100%;
            margin: 0 auto;
            position: relative;
          }

          #particles {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(243, 246, 253, 1);
          }

          .hexa-container {
            display: block;
            position: relative;
            width: 350px;
            height: 350px;
            top: 250px;
            left: 50%;
            transform: translateX(-50%);
            transition: transform .7s linear;
            border-radius: 50%;
          }

          .item {
            position: absolute;
            height: 67.64705%;
            width: 67.64705%;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .item-top {
            top: -61%;
            right: 16%;
          }

          .item-right-top {
            top: -22%;
            right: -51%;
          }

          .item-right-bottom {
            top: 55%;
            right: -51%;
          }

          .item-left-bottom {
            top: 55%;
            right: 83%;
          }

          .item-left-top {
            top: -22%;
            right: 83%;
          }

          .item-center {
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
          }

          .hex-outer {
            width: 100%;
            height: 100%;
          }

          .hex {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
          }

          .hex-outer {
            stroke: black;
            stroke-width: 1px;
            fill: none;
          }

          .hex-inner {
            width: 80%;
            height: 80%;
            fill: white;
          }

          .item:hover .hex-inner {
            width: 100%;
            height: 100%;
          }

          .hex-media-center {
            width: 100%;
            height: 100%;
            background-size: 70%;
            background-image: url(/assets/img/transparent-logo.png);
          }

          .hex-media {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%;
            height: 55%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .item-center .hex {
            width: 100%;
            height: 100%;
            fill: #1476f2;
          }

          .hex-media-center figcaption h3 {
            width: 240px;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-weight: 600;
            line-height: 1.25;
            transition: none;
          }

          .hex-media-center:hover figcaption h3 {
            top: 0;
            font-size: 14px;
            opacity: 0;
          }

          .hex-media-center figcaption p {
            position: absolute;
            opacity: 0;
            left: 0;
            bottom: -180px;
            font-size: 14px;
            font-weight: 400;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.43;
            text-align: center;
            color: #fff;
            pointer-events: none;
            transition: all .25s;
          }

          .hex-media-center:hover figcaption p {
            bottom: 0px;
            opacity: 1;
          }

          .item .item-list {
            position: absolute;
            top: 5%;
            pointer-events: none;
            margin: 0;
            padding: 0;
            transition: all .25s;
            opacity: 0;
          }

          .item .item-list li {
            font-size: 14px;
            line-height: 1.43;
            color: #323232;
          }

          .item .item-list-top {
            width: 300px;
            top: 10%;
            left: 140%;
          }

          .item .item-list-top-right {
            width: 180px;
            top: 15%;
            left: 140%;
          }

          .item .item-list-bottom-right {
            width: 180px;
            top: 15%;
            left: 140%;
          }

          .item .item-list-bottom-left, .item .item-list-top-left {
            width: 170px;
            top: 15%;
            right: 125%;
          }

          .item:hover .item-list-top, .item:hover .item-list-top-right, .item:hover .item-list-bottom-right {
            left: 120%;
            opacity: 1;
          }

          .item:hover .item-list-bottom-left, .item:hover .item-list-top-left {
            right: 105%;
            opacity: 1;
          }

          .hex-media img {
            height: 85px;
            width: 85px;
          }

          .item:hover .polygon-title {
            color: blue;
          }

          .lucide-arrow {
            display: none;
          }

          .item:hover .lucide-arrow {
            display: flex;
            justify-content:center;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .bouncy-arrow {
            animation: bounce 1s infinite;
            display:flex;
            justify-content: center;
          }
        }


















        
        @media (max-width: 1025px) {
          .about-service-section {
            min-height: auto;
            width: 100%;
            margin: 0 auto;
            padding: 50px 20px;
            position: relative;
            background-color: #f3f3f3;
          }

          #particles {
            position: relative;
            width: 100%;
            height: auto;
          }

          .hexa-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: static;
            width: 100%;
            height: auto;
            padding: 20px 0;
            transform: none;
          }

          .item {
            position: relative !important;
            width: 240px;
            height: 210px;
            margin: 0 auto;
            border-radius: 50%;
            top: auto !important;
            right: auto !important;
            left: auto !important;
          }

          .item-center {
            width: 260px;
            height: 230px;
          }

          .hex-outer {
            width: 100%;
            height: 100%;
            stroke: black;
            stroke-width: 1px;
            fill: none;
          }

          .hex-inner {
            width: 80%;
            height: 80%;
            fill: white;
          }

          .item:hover .hex-inner {
            width: 100%;
            height: 100%;
          }

          .hex {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
          }

          .hex-media {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
          }

          .hex-media img {
            height: 100px;
            width: 100px;
          }

          .item-center .hex {
            width: 100%;
            height: 100%;
            fill: #1476f2;
          }

          .hex-media-center {
            width: 100%;
            height: 100%;
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url(/assets/img/transparent-logo.png);
          }

          .hex-media-center figcaption h3 {
            width: 100%;
            text-align: center;
            color: #fff;
            font-weight: 600;
            font-size: 22px;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 35%;
            left: 0;
            transform: none;
          }

          .hex-media-center:hover figcaption h3 {
            font-size: 14px;
            opacity: 0;
          }

          .hex-media-center figcaption p {
            opacity: 0;
            font-size: 14px;
            width: 190px;
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.43;
            text-align: center;
            position: static;
            margin-top: 10px;
            transition: all .25s;
          }

          .hex-media-center:hover figcaption p {
            opacity: 1;
          }

          .item .item-list {
            position: static;
            opacity: 1;
            display: none;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin: 10px 0 0;
            padding: 0;
          }

          .item .item-list li {
            font-size: 12px;
            line-height: 1.43;
            color: #323232;
            display: inline-block;
          }

          .item .item-list-top,
          .item .item-list-top-right,
          .item .item-list-bottom-right,
          .item .item-list-bottom-left,
          .item .item-list-top-left {
            position: static;
            width: 100%;
            left: auto;
            right: auto;
            top: auto;
          }

          .item:hover .polygon-title {
            color: blue;
          }

          .lucide-arrow {
            display: none;
          }

          .item:hover .lucide-arrow {
            display: flex;
            justify-content:center;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .bouncy-arrow {
            animation: bounce 1s infinite;
          }
        }

      `}</style>

      <div id="particles">
        {/* Hidden SVG symbol definition for reuse */}
        <svg style={{ display: "none" }}>
          <defs>
            <symbol id="hexagon" viewBox="0 0 232 203">
              <polygon points="230 100.5 172.5 201 57.5 201 0 100.5 57.5 0 172.5 0"></polygon>
            </symbol>
          </defs>
        </svg>

        <div className="pt-4">
          <div className="container">
            <h2 className="text-center">Нашата експертиза</h2>
          </div>
        </div>

        <div className="hexa-container">
          <div className="item item-center">
            <svg className="hex">
              <use href="#hexagon"></use>
            </svg>
            <figure className="hex-media hex-media-center">
              <figcaption style={{ textAlign: "center" }}>
                <h3 style={{ marginTop: "10px" }}>
                  <span>Нашите</span> <br />
                  <span>Услуги</span> <br />
                  <div className="bouncy-arrow">
                    <ChevronDown size={28} strokeWidth={2} color="white" />
                  </div>
                </h3>
                <p>
                  Ние предоставяме експертни решения в уеб дизайна, мобилните
                  приложения, дигиталния маркетинг, електронната търговия и
                  софтуерната разработка, помагайки на бизнеса да расте чрез
                  иновативни технологии, завладяващо потребителско изживяване и
                  ориентирани към резултати дигитални стратегии.
                </p>
              </figcaption>
            </figure>
          </div>

          {[
            {
              position: "item-top",
              image: "/assets/img/icon/sd_service.png",
              name: "Софтуерна разработка",
              anchor: "/custom-software-development",
              services: [
                "Аутсорсинг на софтуерна разработка",
                "Корпоративна софтуерна разработка",
                "Специализиран екип за софтуерна разработка",
              ],
              element: "item-list-top",
            },
            {
              position: "item-right-top",
              image: "/assets/img/icon/wd_service.png",
              name: "Уеб разработка",
              anchor: "/website-design-development",
              services: [
                "PHP уеб разработка",
                "Node Js разработка",
                "Angular разработка",
                "Full Stack разработка",
                "Laravel разработка",
              ],
              element: "item-list-top-right",
            },
            {
              position: "item-right-bottom",
              image: "/assets/img/icon/md_service.png",
              name: "Мобилна разработка",
              anchor: "/mobile-app-development",
              services: [
                "iOS разработка",
                "Android разработка",
                "Flutter разработка",
                "React Native",
              ],
              element: "item-list-bottom-right",
            },
            {
              position: "item-left-bottom",
              image: "/assets/img/icon/dm_service.png",
              name: "Дигитален маркетинг",
              anchor: "/digital-marketing-services",
              services: [
                "Дигитална маркетингова стратегия",
                "Франчайз дигитален маркетинг",
                "Маркетинг в социалните мрежи",
                "PPC маркетинг (Pay Per Click)",
              ],
              element: "item-list-bottom-left",
            },
            {
              position: "item-left-top",
              image: "/assets/img/icon/ec_service.png",
              name: "Електронна търговия",
              anchor: "/e-commerce-website-development-service",
              services: [
                "Magento разработка",
                "Shopify разработка",
                "WooCommerce разработка",
              ],
              element: "item-list-top-left",
            },
          ].map((position, index) => (
            <div key={index} className={`item ${position.position}`}>
              <svg className="hex hex-outer" viewBox="0 0 232 203">
                <use href="#hexagon"></use>
              </svg>
              <svg className="hex hex-inner">
                <use href="#hexagon"></use>
              </svg>

              <figure className="hex-media">
                <img
                  src={`${position.image}`}
                  alt={`${position.name}`}
                  style={{ padding: "14px" }}
                />
                <figcaption style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      width: "130px",
                    }}
                  >
                    <Link href={`${position.anchor}`}>
                      <span className="polygon-title">{position.name}</span>
                      <span className="lucide-arrow">
                        <ChevronDown size={20} strokeWidth={1.8} color="blue" />
                      </span>
                    </Link>
                  </h3>
                </figcaption>
              </figure>

              <ul className={`item-list ${position.element}`}>
                {position.services.map((ser, id) => (
                  <li key={id}>{ser}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsServicesSection;
