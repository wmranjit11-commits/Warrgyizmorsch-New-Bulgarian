"use client";
import React, { useEffect, useRef } from "react";
import { Code, Bot, TrendingUp, Palette } from "lucide-react";

const SpecialisationAreas = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".sa-anim, .sa-point"));
    animEls.forEach((el, i) => el.style.setProperty("--si", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _ = el.offsetHeight;
            if (_ > -1) el.classList.add("in-view");
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

  const specialisations = [
    {
      title: "Уеб и мобилна разработка",
      description:
        "Овладяване на full-stack рамки, мобилна архитектура и UI/UX стратегия за глобални пазари.",
      icon: <Code size={20} />,
    },
    {
      title: "ИИ и автоматизация",
      description:
        "Проектиране, обучение и внедряване на сложни ИИ чатботове и модели за машинно обучение за корпоративни клиенти.",
      icon: <Bot size={20} />,
    },
    {
      title: "Дигитален маркетинг и стратегия",
      description:
        "Разширено SEO, маркетинг на изпълнението и стратегии за растеж, базирани на данни.",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Творческо съвършенство",
      description:
        "Графичен дизайн и стратегическо писане на съдържание, съобразено с международните стандарти на марката.",
      icon: <Palette size={20} />,
    },
  ];

  return (
    <div ref={sectionRef}>
      <style>{`
        .sa-wrap {
          background: white;
          color: #000;
          padding: 2rem 0;
        }

        .sa-header {
          margin-bottom: 2.5rem;
        }

        .sa-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .sa-header h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .sa-header h2 {
            font-size: 2rem;
          }
        }

        .sa-header p {
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .sa-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        /* Animation */
        .sa-point {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .sa-point.in-view {
          animation: sa-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--si, 0) * 110ms);
        }

        @keyframes sa-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Premium Card */
        .sa-point {
          display: flex;
          gap: 1rem;
          padding: 1.4rem;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid rgba(24, 51, 108, 0.25);
          position: relative;
        }

        /* Glow */
        .sa-point::after {
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

        /* Icon */
        .sa-point-icon {
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

        /* Text */
        .sa-point h4 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0f172a;
        }

        .sa-point p {
          margin: 0.35rem 0 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          .sa-anim, .sa-point {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="sa-wrap">
        <div className="container">
          <div className="sa-header sa-anim">
            <div className="sa-eyebrow new-italic">
              Ключови области на специализация
            </div>
            <h2>Структурирано професионално развитие</h2>
            <p>
              Стажантите ще получат структурирано професионално развитие в нашите основни стълбове на услуги
            </p>
          </div>

          <div className="sa-grid">
            {specialisations.map((spec, index) => (
              <div key={index} className="sa-point sa-anim">
                <div className="sa-point-icon">{spec.icon}</div>
                <div>
                  <h4>{spec.title}</h4>
                  <p>{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialisationAreas;
