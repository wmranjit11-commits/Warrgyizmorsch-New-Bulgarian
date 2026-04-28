"use client";
import React, { useEffect, useRef } from "react";

const ProgrammePhases = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".pp-anim, .pp-phase"));
    animEls.forEach((el, i) => el.style.setProperty("--pi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (!el) return;

          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _ = el.offsetHeight;
            if (_ > -1) el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.25 },
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const phases = [
    {
      num: "1",
      title: "Въвеждане",
      duration: "Месеци 1–3",
      focus:
        "Обучение в централния офис; фокус върху основните технически стекове и фирмената култура.",
    },
    {
      num: "2",
      title: "Интеграция",
      duration: "Месеци 4–6",
      focus:
        "Трансфер в клона в Обединеното кралство; фокус върху пазарните стандарти в Обединеното кралство, отношенията с клиенти и местното съответствие.",
    },
    {
      num: "3",
      title: "Специализация",
      duration: "Месеци 7–10",
      focus:
        "Водене на специфични модули във внедряването на ИИ или дигитални кампании за клиенти в Обединеното кралство.",
    },
    {
      num: "4",
      title: "Управление",
      duration: "Месеци 11–12",
      focus:
        "Преминаване към ролята на младши ръководител/специалист с отговорности за надзор на проекти.",
    },
  ];

  return (
    <div ref={sectionRef}>
      <style>{`
        .pp-wrap {
          background: white;
          padding: 2rem 0;
        }

        .pp-header {
          margin-bottom: 2.5rem;
        }

        .pp-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin-bottom: 0.5rem;
        }

        .pp-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 1100px) {
          .pp-header h2 {
            font-size: 2rem;
          }
        }

        .pp-header p {
          color: #555;
          line-height: 1.6;
        }

        .pp-timeline {
          display: grid;
          gap: 1.2rem;
          margin-top: 2rem;
        }

        /* Animation */
        .pp-phase {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
        }

        .pp-phase.in-view {
          animation: pp-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--pi, 0) * 110ms);
        }

        @keyframes pp-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Card */
        .pp-phase {
          padding: 1.4rem;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(24, 51, 108, 0.25);
          position: relative;
        }

        /* Top accent (instead of border-left) */
        .pp-phase::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(
            90deg,
            var(--new-theme-color),
            transparent
          );
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        /* Glow */
        .pp-phase::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at 0% 0%,
            rgba(24, 51, 108, 0.06),
            transparent 60%
          );
        }

        /* Header row inside card */
        .pp-phase-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pp-phase-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          background: var(--new-theme-color);
          padding: 0.3rem 0.6rem;
          border-radius: 999px;
        }

        .pp-phase-duration {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        .pp-phase h4 {
          margin: 0.3rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
        }

        .pp-phase p {
          margin: 0.3rem 0 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          .pp-anim, .pp-phase {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="pp-wrap">
        <div className="container">
          <div className="pp-header pp-anim">
            <div className="pp-eyebrow new-italic">
              Структура на програмата и назначение в Обединеното кралство
            </div>
            <h2>12-месечна структурирана ротация</h2>
            <p>
              Програмата е проектирана като 12-месечна структурирана ротация в нашия клон в Обединеното кралство по маршрута за глобална бизнес мобилност – стажанти висшисти.
            </p>
          </div>

          <div className="pp-timeline">
            {phases.map((phase, index) => (
              <div key={index} className="pp-phase pp-anim">
                <div className="pp-phase-top">
                  <span className="pp-phase-tag">Фаза {phase.num}</span>
                  <span className="pp-phase-duration">{phase.duration}</span>
                </div>

                <h4>{phase.title}</h4>
                <p>{phase.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammePhases;
