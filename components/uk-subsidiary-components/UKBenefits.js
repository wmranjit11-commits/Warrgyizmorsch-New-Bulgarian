"use client";
import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  Lightbulb,
  Headphones,
  Zap,
  DollarSign,
  Rocket,
} from "lucide-react";

const UKBenefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".ub-anim, .ub-card"));
    animEls.forEach((el, i) => el.style.setProperty("--ubi", String(i)));

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
          }
        });
      },
      { root: null, threshold: 0.25 },
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="benefits">
      <style>{`
        .ub-wrap {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          color: #000;
          padding: 3rem 20px;
        }

        .ub-header {
          margin-bottom: 2.5rem;
        }

        .ub-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .ub-header h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .ub-header h2 {
            font-size: 2rem;
          }
        }

        .ub-header p {
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .ub-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .ub-grid {
            grid-template-columns: 1fr;
          }
        }

        .ub-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          border-top: 4px solid var(--new-theme-color);
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .ub-card.in-view {
          animation: ub-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ubi, 0) * 110ms);
        }

        @keyframes ub-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ub-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--new-theme-color);
          margin: 0 0 0.75rem;
        }

        .ub-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .ub-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .ub-wrap {
            padding: 2rem 20px;
          }

          .ub-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ub-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="ub-wrap">
        <div className="ub-container">
          <div className="ub-header ub-anim">
            <p className="ub-eyebrow new-italic">Стратегически предимства</p>
            <h2>Какво ни прави различни</h2>
            <p>Комбиниране на международен опит с местно разбиране</p>
          </div>

          <div className="ub-grid">
            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircle size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Нормативно съответствие</h3>
              </div>
              <p>
                Напълно съответстващ на Закона за компаниите в Обединеното кралство, GDPR, Закона за защита на данните от 2018 г. и изискванията за регистрация в Companies House. Спокойствие за регулираните индустрии.
              </p>
            </div>

            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Lightbulb size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Център за иновации</h3>
              </div>
              <p>
                Достъп до авангардни технологии, комбинирани с доказани индустриални практики. От персонализирани ERP до ИИ автоматизация и инициативи за дигитална трансформация.
              </p>
            </div>

            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Headphones size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Специализирана поддръжка</h3>
              </div>
              <p>
                Вашето специализирано лице за контакт в офиса в Обединеното кралство гарантира персонално внимание, по-бързо вземане на решения и решения, съобразени с вашите специфични нужди.
              </p>
            </div>

            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Zap size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Безпроблемна интеграция</h3>
              </div>
              <p>
                Мост между вашите операции в Обединеното кралство и нашия международен екип за разработка. Без пропуски в комуникацията, постоянен поток на знания и единно управление на проекти.
              </p>
            </div>

            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <DollarSign size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Прозрачно ценообразуване</h3>
              </div>
              <p>
                Ясни, конкурентни цени без скрити разходи. Гъвкави модели на ангажираност, проектирани за стартъпи и големи предприятия, съчетани с професионализъм на ниво Обединено кралство.
              </p>
            </div>

            <div className="ub-card ub-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Rocket size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Бързо внедряване</h3>
              </div>
              <p>
                Възползвайте се от нашия международен опит за по-бързо внедряване на решения. От създаването на проекта до пускането в реална експлоатация, ние поддържаме стандартите на Обединеното кралство.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKBenefits;
