"use client";
import React, { useEffect, useRef } from "react";
import { Users, Clock, Lock, TrendingUp, Globe } from "lucide-react";

const UKPresence = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".up-anim, .up-point"));
    animEls.forEach((el, i) => el.style.setProperty("--upi", String(i)));

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
    <div ref={sectionRef}>
      <style>{`
        .up-wrap {
          background: white;
          color: #000;
          padding: 3rem 20px;
        }

        .up-header {
          margin-bottom: 2.5rem;
        }

        .up-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .up-header h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .up-header h2 {
            font-size: 2rem;
          }
        }

        .up-header p {
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .up-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .up-point {
          border-left: 4px solid var(--new-theme-color);
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          opacity: 0;
          transform: translateX(-12px) scale(0.98);
          will-change: opacity, transform;
        }

        .up-point.in-view {
          animation: up-slide-right 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--upi, 0) * 110ms);
        }

        @keyframes up-slide-right {
          0% { opacity: 0; transform: translateX(-12px) scale(0.98); }
          60% { opacity: 1; transform: translateX(0) scale(1.01); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        .up-point h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .up-point p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .up-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .up-wrap {
            padding: 2rem 20px;
          }

          .up-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .up-point {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="up-wrap">
        <div className="up-container">
          <div className="up-header up-anim">
            <p className="up-eyebrow new-italic">Операции в Обединеното кралство</p>
            <h2>Защо да изберете нашия офис в Обединеното кралство?</h2>
            <p>Достъп до местен опит, подкрепен от глобални ресурси</p>
          </div>

          <div className="up-points">
            <div className="up-point up-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Users
                  size={24}
                  color="var(--new-theme-color)"
                  style={{ flexShrink: 0, marginTop: "0.25rem" }}
                />
                <div style={{ flex: 1 }}>
                  <h3>Местна отчетност</h3>
                  <p>
                    Директен достъп до нашето ръководство и ЧР екип в Обединеното кралство за оптимизирано управление на проекти, нормативно съответствие и специализирана поддръжка, съобразена с вашите нужди.
                  </p>
                </div>
              </div>
            </div>

            <div className="up-point up-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Clock
                  size={24}
                  color="var(--new-theme-color)"
                  style={{ flexShrink: 0, marginTop: "0.25rem" }}
                />
                <div style={{ flex: 1 }}>
                  <h3>Съгласуване на часовите зони</h3>
                  <p>
                    Сътрудничество в реално време и поддръжка по време на работното време в Обединеното кралство (GMT/BST). Без забавяния и комуникационни бариери – просто безпроблемна координация с вашия екип.
                  </p>
                </div>
              </div>
            </div>

            <div className="up-point up-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Lock
                  size={24}
                  color="var(--new-theme-color)"
                  style={{ flexShrink: 0, marginTop: "0.25rem" }}
                />
                <div style={{ flex: 1 }}>
                  <h3>Суверенитет на данните и съответствие с GDPR</h3>
                  <p>
                    Пълно спазване на UK GDPR, Закона за защита на данните от 2018 г. и местните регулаторни стандарти. Вашите данни остават защитени с нашите стандартни договорни клаузи (SCC) и международни споразумения за трансфер на данни (IDTA).
                  </p>
                </div>
              </div>
            </div>

            <div className="up-point up-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <TrendingUp
                  size={24}
                  color="var(--new-theme-color)"
                  style={{ flexShrink: 0, marginTop: "0.25rem" }}
                />
                <div style={{ flex: 1 }}>
                  <h3>Мащабируемост на мултинационална компания</h3>
                  <p>
                    Комбинирайте гъвкавостта на специализирана технологична фирма със стабилните ресурси на международна ИТ организация. Мащабирайте проектите си без ограничения.
                  </p>
                </div>
              </div>
            </div>

            <div className="up-point up-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Globe
                  size={24}
                  color="var(--new-theme-color)"
                  style={{ flexShrink: 0, marginTop: "0.25rem" }}
                />
                <div style={{ flex: 1 }}>
                  <h3>Европейски портал</h3>
                  <p>
                    Независимо дали имате нужда от персонализирани ERP решения, автоматизация на управлението на потенциални клиенти, инициативи за интелигентни градове, базирани на IoT, или дигитална трансформация – нашият офис в Обединеното кралство гарантира, че винаги сме наблизо.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKPresence;
