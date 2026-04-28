"use client";
import React, { useEffect, useRef } from "react";
import { Briefcase, PoundSterling, ShieldCheck } from "lucide-react";

const CompensationBenefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".cb-anim, .cb-card"));

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

  const benefits = [
    {
      title: "Визово спонсорство",
      description:
        "Компанията ще предостави сертификат за спонсорство (CoS) за виза за глобална бизнес мобилност – стажант висшист (временен престой до 1 година).",
      icon: <Briefcase size={22} />,
    },
    {
      title: "Заплата",
      description:
        "Възнаграждението по време на назначението в Обединеното кралство ще отговаря на или ще надвишава праговете на заплатите на UKVI (понастоящем £25,410 на година или 70% от „пазарната ставка“ за длъжността).",
      icon: <PoundSterling size={22} />,
    },
    {
      title: "Предимства",
      description:
        "Включва международна здравна застраховка, помощ при пътуване и разходи за напреднала техническа сертификация.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <div ref={sectionRef}>
      <style>{`
        .cb-wrap {
          background: white;
          padding: 3rem 0;
        }

        .cb-header {
          margin-bottom: 2.5rem;
        }

        .cb-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin-bottom: 0.5rem;
        }

        .cb-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 1100px) {
          .cb-header h2 {
            font-size: 2rem;
          }
        }

        .cb-header p {
          color: #555;
          line-height: 1.6;
        }

        /* Grid */
        .cb-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        /* Animation (FIXED) */
        .cb-card {
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.5s cubic-bezier(.2,.7,.2,1);
        }

        .cb-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card Design */
        .cb-card {
          padding: 1.6rem;
          border-radius: 18px;
          border: 1px solid rgba(24, 51, 108, 0.2);
          background: linear-gradient(
            180deg,
            rgba(24, 51, 108, 0.04),
            #ffffff
          );
          position: relative;
          text-align: center;
        }

        /* Inner panel */
        .cb-card-inner {
          padding: 1.2rem;
          border-radius: 14px;
          background: #ffffff;
        }

        /* Icon */
        .cb-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: var(--new-theme-color);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .cb-card h4 {
          margin: 0 0 0.4rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
        }

        .cb-card p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
        }

        @media (prefers-reduced-motion: reduce) {
          .cb-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="cb-wrap">
        <div className="container">
          <div className="cb-header cb-anim">
            <div className="cb-eyebrow new-italic">
              Възнаграждение и спонсорство
            </div>
            <h2>Конкурентен пакет и предимства</h2>
            <p>
              Цялостна подкрепа, включително визово спонсорство, заплата и професионални предимства
            </p>
          </div>

          <div className="cb-grid">
            {benefits.map((item, index) => (
              <div key={index} className="cb-card cb-anim">
                <div className="cb-card-inner">
                  <div className="cb-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompensationBenefits;
