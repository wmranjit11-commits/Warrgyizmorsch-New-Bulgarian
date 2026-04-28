"use client";
import React, { useEffect, useRef } from "react";

const GraduateTraineeHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".grad-hero-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--ghi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            el.classList.add("in-view");
          }
        });
      },
      { threshold: 0.25 },
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <style>{`
        .grad-hero-wrap {
          background: linear-gradient(135deg, var(--new-theme-color), #003d7a);
          position: relative;
          color: white;
          padding: 2rem 0;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grad-hero-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .grad-hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .grad-hero-anim {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .grad-hero-anim.in-view {
          animation: grad-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ghi, 0) * 110ms);
        }

        @keyframes grad-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .grad-hero-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: white !important;
          margin-bottom: 1rem;
        }

        .grad-hero-title {
          font-size: 2.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          color: white;
        }

        @media (min-width: 1100px) {
          .grad-hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .grad-hero-title {
            font-size: 1.8rem;
          }
        }

        .grad-hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .grad-hero-subtitle {
            font-size: 1rem;
          }
        }

        .grad-hero-overview {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        .grad-hero-overview h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1rem;
          color: white;
        }

        .grad-hero-overview p {
          font-size: 0.95rem;
          text-align: center;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .grad-hero-anim {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="grad-hero-wrap" ref={sectionRef}>
        <div className="grad-hero-container">
          <div className="grad-hero-content">
            <p className="grad-hero-anim grad-hero-eyebrow new-italic">
              Глобална възможност
            </p>

            <h1 className="grad-hero-title grad-hero-anim">
              Програма за стажанти висшисти:
              <br />
              Глобална бизнес мобилност
            </h1>

            <p className="grad-hero-subtitle grad-hero-anim">
              Възможност за вътрешнофирмен трансфер – Обединено кралство
            </p>

            <div className="grad-hero-overview grad-hero-anim">
              <p>
                Нашата организация е поела ангажимент да развива глобални таланти в областите на уеб и мобилна разработка, ИИ чатботове, дигитален маркетинг и творчески дизайн. Тази програма е ускорен маршрут, предназначен да подготви високопроизводителни дипломанти за висши управленски или специализирани роли в нашите международни операции.
              </p>
            </div>

            <p
              className="grad-hero-anim"
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.6",
                marginBottom: "2rem",
              }}
            >
              Ускорете кариерата си от дипломант до висш мениджмънт. 12-месечна структурирана ротация, съчетаваща напреднало техническо обучение с международен опит.
            </p>

            <div className="btn-group grad-hero-anim">
              <a href="#eligibility" className="th-btn style-radius">
                Разгледайте програмата →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraduateTraineeHero;
