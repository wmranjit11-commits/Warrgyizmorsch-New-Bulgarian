"use client";
import React, { useEffect, useRef } from "react";

const UKHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".uk-hero-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--ukhi", String(i)));

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
        .uk-hero-wrap {
          background: linear-gradient(135deg, var(--new-theme-color), #003d7a);
          position: relative;
          color: white;
          padding: 3rem 20px;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .uk-hero-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .uk-hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .uk-hero-anim {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .uk-hero-anim.in-view {
          animation: uk-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ukhi, 0) * 110ms);
        }

        @keyframes uk-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .uk-hero-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
        }

        .uk-hero-title {
          font-size: 2.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          color: white;
        }

        @media (min-width: 1100px) {
          .uk-hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .uk-hero-title {
            font-size: 1.8rem;
          }
        }

        .uk-hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .uk-hero-subtitle {
            font-size: 1rem;
          }
        }

        .uk-hero-overview {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        .uk-hero-overview h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1rem;
          color: white;
        }

        .uk-hero-overview p {
          font-size: 0.95rem;
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
          .uk-hero-anim {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="uk-hero-wrap" ref={sectionRef}>
        <div className="uk-hero-container">
          <div className="uk-hero-content">
            <p className="uk-hero-anim uk-hero-eyebrow new-italic text-white!">
              🇬🇧 Глобална експанзия
            </p>

            <h1 className="uk-hero-title uk-hero-anim">
              WarrgyizMorsch UK Ltd
              <br />
              Свързваме иновациите: Удайпур до Лондон
            </h1>

            <p className="uk-hero-subtitle uk-hero-anim">
              Стратегически европейски център за ИТ решения от световна класа
            </p>

            <div className="uk-hero-overview uk-hero-anim">
              <h3>Нашето глобално присъствие</h3>
              <p>
                WarrgyizMorsch се гордее, че работи като истински глобален ИТ партньор. С нашата установена централа в Удайпур, Индия, и нашето специализирано дъщерно дружество в Саут Хароу, Обединеното кралство, ние предоставяме безпроблемен мост между разработката на софтуер от световна класа и местните, висококачествени консултации в цяла Европа и извън нея. Нашият офис в Обединеното кралство служи като стратегически център за нашите европейски операции, гарантирайки, че нашите клиенти се възползват от местна отчетност, съгласуване на часовите зони, пълно съответствие с GDPR и мащабируемост на международна организация за ИТ услуги.
              </p>
            </div>

            <p
              className="uk-hero-anim"
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.6",
                marginBottom: "2rem",
              }}
            >
              От персонализирани ERP решения и автоматизация на управлението на потенциални клиенти до дигитална трансформация и IoT инициативи – ние предоставяме ИТ услуги от световна класа, подкрепени от нормативно съответствие в Обединеното кралство, местна отчетност и международен опит.
            </p>

            <div className="btn-group uk-hero-anim">
              <a href="#benefits" className="th-btn style-radius">
                Разгледайте нашите услуги в Обединеното кралство →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKHero;
