"use client";
import React, { useEffect, useRef } from "react";

const NewWhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // elements to animate (image, h2, intro p, and each point row)
    const animEls = Array.from(
      root.querySelectorAll(".new-why-anim, .new-why-choose-point")
    );

    // give each element a stagger index via CSS var --wi
    animEls.forEach((el, i) => el.style.setProperty("--wi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;
          const inView = entry.isIntersecting;
          const el = entry.target;

          if (inView) {
            // restart animation (ESLint-safe reflow trick)
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            if (_reflow > -1) el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { root: null, threshold: 0.25 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <style>{`
        .new-why-choose-wrapper {
          background: white;
          color: #000;
          padding: 3rem 0;
          display: flex;
          align-items: center;
        }

        .new-why-choose-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin: 0 auto;
        }

        @media (min-width: 992px) {
          .new-why-choose-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .new-why-choose-image {
          flex: 1;
          max-width: 500px;
        }

        .new-why-choose-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }

        .new-why-choose-text {
          flex: 1;
          width: 100%;
        }

        .new-why-choose-text h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .new-why-choose-text p {
          line-height: 1.6;
          color: black;
          margin-bottom: 1.5rem;
        }

        .new-why-choose-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .new-why-choose-point {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .new-why-choose-icon {
          font-size: 1.8rem;
          color: var(--new-theme-color);
          flex-shrink: 0;
          line-height: 0;
          display: grid;
          place-items: center;
        }

        .new-why-choose-point h4 {
          margin: 0;
          font-weight: 600;
          font-size: 1.1rem;
          color: black;
        }

        .new-why-choose-point p {
          margin: 0.25rem 0 0;
          font-size: 0.95rem;
          line-height: 1.5;
          color: #444;
        }

        /* ===== Animations (no layout shift) ===== */
        @keyframes wcu-fade-up {
          0%   { opacity: 0; transform: translateY(12px) scale(0.98); }
          60%  { opacity: 1; transform: translateY(0)    scale(1.01); }
          100% { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* initial hidden state for animatable elems */
        .new-why-anim,
        .new-why-choose-point {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        /* animate when in view; stagger via --wi */
        .new-why-anim.in-view,
        .new-why-choose-point.in-view {
          animation: wcu-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--wi, 0) * 110ms);
        }
      `}</style>

      <section className="new-why-choose-wrapper">
        <div className="new-why-choose-container container">
          {/* Left Image Section */}
          <div className="new-why-choose-image new-why-anim hide-on-mobile">
            <img src="/assets/new-img/why_choose_us.webp" alt="Why Choose Us" />
          </div>

          {/* Right Content Section */}
          <div className="new-why-choose-text">
            <h2 className="new-why-anim">
              <span className="new-italic">Защо да изберете</span> Warrgyizmorsch за
              управлявани ИТ решения
            </h2>
            <p className="new-why-anim">
              Надеждни, мащабируеми ИТ решения от най-добрата ИТ компания в Индия.
            </p>

            <div
              style={{ marginBottom: "30px" }}
              className="new-why-choose-image new-why-anim hide-on-desktop"
            >
              <img
                src="/assets/new-img/why_choose_us.webp"
                alt="Why Choose Us"
              />
            </div>

            <div className="new-why-choose-points">
              {/* Point 1 */}
              <div className="new-why-choose-point">
                <div className="new-why-choose-icon">
                  <img
                    src="/assets/new-img/scalable.webp"
                    style={{ width: "50px" }}
                    alt="icon"
                  />
                </div>
                <div>
                  <h4>Мащабируеми и готови за бъдещето решения</h4>
                  <p>
                    Проектираме и разработваме гъвкави системи, които растат заедно с вашия бизнес. 
                    Като най-добрата компания за ИТ услуги в Индия, нашите решения се адаптират към променящите се пазарни нужди, 
                    осигурявайки дългосрочна стабилност, висока производителност и безпроблемна мащабируемост.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="new-why-choose-point">
                <div className="new-why-choose-icon">
                  <img src="/assets/new-img/svg/choose2.svg" alt="icon" />
                </div>
                <div>
                  <h4>Усъвършенствана сигурност и защита на данните</h4>
                  <p>
                    Сигурността е в основата на всичко, което предоставяме. Нашият екип следва най-добрите индустриални практики, 
                    за да защити вашия бизнес от кибер заплахи, гарантирайки, че вашите данни, системи и приложения остават безопасни и защитени винаги.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="new-why-choose-point">
                <div className="new-why-choose-icon">
                  <img src="/assets/new-img/svg/choose3.svg" alt="icon" />
                </div>
                <div>
                  <h4>Бизнес ориентирана ИТ стратегия</h4>
                  <p>
                    Ние съгласуваме технологията с вашите бизнес цели, за да постигнем резултати. 
                    Като най-добрата ИТ компания в Индия, ние създаваме ефективни решения за растеж.
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

export default NewWhyChooseUs;
