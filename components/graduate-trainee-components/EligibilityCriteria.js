"use client";
import React, { useEffect, useRef } from "react";
import { GraduationCap, Briefcase, Brain } from "lucide-react";

const EligibilityCriteria = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".ec-anim, .ec-point"));
    animEls.forEach((el, i) => el.style.setProperty("--ei", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;
          const inView = entry.isIntersecting;
          const el = entry.target;

          if (inView) {
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            if (_reflow > -1) el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { root: null, threshold: 0.25 },
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="eligibility">
      <style>{`
        .ec-wrap {
          background: white;
          color: #000;
          padding: 2rem 0;
        }

        .ec-header {
          margin-bottom: 2.5rem;
        }

        .ec-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .ec-header h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .ec-header h2 {
            font-size: 2rem;
          }
        }

        .ec-header p {
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .ec-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .ec-point {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .ec-point.in-view {
          animation: ec-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ei, 0) * 110ms);
        }

        @keyframes ec-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

       .ec-point {
          display: flex;
          gap: 1rem;
          padding: 1.4rem;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid rgba(24, 51, 108, 0.25);
          position: relative;
          transition: all 0.2s ease;
        }

        .ec-point::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at 0% 0%,
            rgba(24, 51, 108, 0.08),
            transparent 60%
          );
          opacity: 1;
        }

        .ec-point:hover {
          transform: none;
          border-color: rgba(24, 51, 108, 0.25);
        }

        .ec-point-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--new-theme-color);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ec-point h4 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0f172a;
        }

        .ec-point p {
          margin: 0.35rem 0 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          .ec-anim, .ec-point {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="ec-wrap">
        <div className="container">
          <div className="ec-header ec-anim">
            <div className="ec-eyebrow new-italic">Критерии за допустимост</div>
            <h2>Кой трябва да кандидатства?</h2>
            <p>
              Запознайте се с основните изисквания за тази премиум програма за развитие на дипломанти
            </p>
          </div>

          <div className="ec-points">
            <div className="ec-point">
              <div className="ec-point-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4>Образование</h4>
                <p>
                  Кандидатите трябва да притежават диплома с отличие в съответната област (напр. инженерство, технологии, компютърни науки или бизнес администрация в маркетинга/ИТ) от признат университет.
                </p>
              </div>
            </div>

            <div className="ec-point">
              <div className="ec-point-icon">
                <Briefcase size={20} />
              </div>
              <div>
                <h4>Изискване за стаж</h4>
                <p>
                  В съответствие с разпоредбите на UKVI, кандидатите трябва да завършат минимум 3 месеца непрекъсната работа в нашия централен офис, преди да станат допустими за назначение в Обединеното кралство.
                </p>
              </div>
            </div>

            <div className="ec-point">
              <div className="ec-point-icon">
                <Brain size={20} />
              </div>
              <div>
                <h4>Ниво на умения</h4>
                <p>
                  Тази програма е съобразена с ниво 6 на RQF (бакалавърска степен), изискващо висока степен на техническа компетентност и аналитично мислене.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityCriteria;
