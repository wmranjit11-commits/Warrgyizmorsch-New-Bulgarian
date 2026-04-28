"use client";
import React, { useEffect, useRef } from "react";
import { Globe, FileText, Link2 } from "lucide-react";

const CareerProgression = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".cp-anim, .cp-card"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const steps = [
    {
      title: "Интеграция на уебсайта:",
      description:
        'Публикувайте това съдържание на специална страница „Кариери“ или „Програма за дипломанти“ на уебсайта на вашата компания.',
      icon: <Globe size={18} />,
    },
    {
      title: "Брошура:",
      description:
        'Можете да копирате този текст в PDF с бланка на вашата компания, за да изпълните изискването за „брошура на програмата“.',
      icon: <FileText size={18} />,
    },
    {
      title: "Доказателство за връзка:",
      description:
        'Когато подавате документите, не забравяйте да включите документите за регистрация на вашия клон в Обединеното кралство и документите за учредяване в Индия.',
      icon: <Link2 size={18} />,
    },
  ];

  return (
    <div ref={sectionRef}>
      <style>{`
        .cp-wrap {
          background: white;
          padding: 2rem 0;
        }

        .cp-header {
          margin-bottom: 1.5rem;
        }

        .cp-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin-bottom: 0.5rem;
        }

        .cp-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
        }

        /* Intro block */
        .cp-intro {
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(24, 51, 108, 0.25);
          background: linear-gradient(
            180deg,
            rgba(24, 51, 108, 0.05),
            #ffffff
          );
          margin-bottom: 2rem;
        }

        .cp-intro p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #475569;
        }

        /* Action title */
        .cp-action-title {
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1rem;
          color: #0f172a;
        }

        /* Grid */
        .cp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.2rem;
        }

        /* Animation */
        .cp-card {
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.5s cubic-bezier(.2,.7,.2,1);
        }

        .cp-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card */
        .cp-card {
          padding: 1.3rem;
          border-radius: 14px;
          border: 1px solid rgba(24, 51, 108, 0.25);
          background: #fff;
          position: relative;
        }

        .cp-card::after {
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

        .cp-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--new-theme-color);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.6rem;
        }

        .cp-card h4 {
          margin: 0;
          font-size: 0.98rem;
          font-weight: 600;
          color: #0f172a;
        }

        .cp-card p {
          margin: 0.3rem 0 0;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          .cp-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="cp-wrap">
        <div className="container">
          <div className="cp-header cp-anim">
            <div className="cp-eyebrow new-italic">Кариерно развитие</div>
            <h2>Вашият път към лидерство</h2>
          </div>

          {/* EXACT CONTENT */}
          <div className="cp-intro cp-anim">
            <p>
              След успешно завършване на едногодишното обучение в Обединеното кралство се очаква стажантите да преминат на позиции за специалисти или висши мениджъри, ръководейки екипи в нашите отдели за софтуерна разработка или дигитален маркетинг.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerProgression;
