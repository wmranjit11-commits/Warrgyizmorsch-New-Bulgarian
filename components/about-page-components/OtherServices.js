import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OtherServices = () => {
  return (
    <div>
      <section class="unique-services">
        <div class="container">
          <h2>Други услуги</h2>
          <p class="intro">
            Ние предоставяме повече от основните решения, необходими за
            просперитета на вашия онлайн бизнес. Нашите други услуги са насочени
            към подкрепа на вашите дигитални цели, укрепване на присъствието на
            вашата марка и предоставяне на стойност. Разгледайте нашите други
            услуги по-долу:
          </p>

          <div class="services-steps">
            <Link href={"/search-engine-optimzation"}>
              <div class="step">
                <div class="step-number">01</div>
                <div class="step-content">
                  <h3>Оптимизация за търсачки (SEO)</h3>
                  <p>
                    <ArrowRight />
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/virtual-assistant-service"}>
              <div class="step">
                <div class="step-number">02</div>
                <div class="step-content">
                  <h3>Услуга Виртуален асистент</h3>
                  <p>
                    <ArrowRight />
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/content-marketing-service"}>
              <div class="step">
                <div class="step-number">03</div>
                <div class="step-content">
                  <h3>Маркетинг чрез съдържание</h3>
                  <p>
                    <ArrowRight />
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/erp-solutions-development-services"}>
              <div class="step">
                <div class="step-number">04</div>
                <div class="step-content">
                  <h3>Разработка на ERP софтуер</h3>
                  <p>
                    <ArrowRight />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <style>
          {`
        .unique-services {
          background: #fff;
          padding: 80px 20px;
          color: #18336c;
        }   

        .unique-services h2 {
          text-align: center;
          margin-bottom: 1rem;
        }

        .intro {
          text-align: center;
          color: #4b5563;
          margin-bottom: 3rem;
        }

        .services-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step {
          display: flex;
          align-items: center;
          background: #f5f9ff;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          border: 2px dotted #18336c;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .step:hover {
          transform: scale(1.02);
        }

        .step-number {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          background: #18336c;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          margin-right: 1.5rem;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
        }

        .step-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .step-content h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0;
        }

        @keyframes translate {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .step-content p {
          margin-bottom: 0;
          animation: translate 1s infinite;
        }

        .step-content p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .step {
            flex-direction: column;
            align-items: flex-start;
          }

          .step-number {
            margin-bottom: 0.8rem;
            margin-right: 0;
          }
        }
    `}
        </style>
      </section>
    </div>
  );
};

export default OtherServices;
