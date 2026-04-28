"use client";
import React, { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail, Globe, Clock3 } from "lucide-react";

const UKOfficeLocation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".uol-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--uoli", String(i)));

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
    <div ref={sectionRef}>
      <style>{`
        .uol-wrap {
          background: linear-gradient(135deg, var(--new-theme-color), #003d7a);
          color: white;
          padding: 3rem 20px;
        }

        .uol-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .uol-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .uol-content {
            grid-template-columns: 1fr;
          }
        }

        .uol-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .uol-anim {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .uol-anim.in-view {
          animation: uol-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--uoli, 0) * 110ms);
        }

        @keyframes uol-fade-up {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          60% { opacity: 1; transform: translateX(0) scale(1.01); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        .uol-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .uol-title {
          font-size: 2rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
          color: white;
        }

        @media (max-width: 768px) {
          .uol-title {
            font-size: 1.5rem;
          }
        }

        .uol-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .uol-details {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .uol-detail-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .uol-detail-row:last-child {
          margin-bottom: 0;
        }

        .uol-detail-icon {
          font-size: 1.5rem;
          min-width: 30px;
          text-align: center;
        }

        .uol-detail-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: white;
        }

        .uol-detail-content p {
          font-size: 0.9rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.85);
        }

        .uol-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
        }

        .uol-map {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .uol-map-text {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
        }

        .uol-map-emoji {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .uol-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .uol-anim {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="uol-wrap">
        <div className="uol-container">
          <div className="uol-content">
            <div className="uol-left">
              <p className="uol-anim uol-eyebrow new-italic text-white!">Нашето местоположение</p>

              <h2 className="uol-anim uol-title">Посетете нашия офис в Обединеното кралство</h2>

              <p className="uol-anim uol-description">
                Стратегическо местоположение в Саут Хароу, Лондон. Идеално разположен за сътрудничество с предприятия от Обединеното кралство и европейските пазари.
              </p>

              <div className="uol-anim uol-details">
                <div className="uol-detail-row">
                  <div className="uol-detail-icon">
                    <MapPin size={24} color="white" />
                  </div>
                  <div className="uol-detail-content">
                    <h4>Адрес на офиса</h4>
                    <p>
                      312, Pentax House, South Hill Avenue, South Harrow, Middlesex, HA2 0DU, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="uol-detail-row">
                  <div className="uol-detail-icon">
                    <Clock size={24} color="white" />
                  </div>
                  <div className="uol-detail-content">
                    <h4>Работно време</h4>
                    <p>Понеделник - Петък: 09:00 - 18:00 GMT/BST</p>
                  </div>
                </div>

                <div className="uol-detail-row">
                  <div className="uol-detail-icon">
                    <Phone size={24} color="white" />
                  </div>
                  <div className="uol-detail-content">
                    <h4>Директен контакт</h4>
                    <p>+44 7789161193</p>
                  </div>
                </div>

                <div className="uol-detail-row">
                  <div className="uol-detail-icon">
                    <Mail size={24} color="white" />
                  </div>
                  <div className="uol-detail-content">
                    <h4>Поддръжка по имейл</h4>
                    <p>
                      <a
                        href="mailto:info@warrgyizmorsch.com"
                        style={{ color: "white" }}
                      >
                        info@warrgyizmorsch.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="uol-anim btn-group">
                <a href="#contact" className="th-btn style-radius">
                  Насрочете консултация →
                </a>
              </div>
            </div>

            <div className="uol-right">
              <div className="uol-anim uol-map">
                <div>
                  <div className="uol-map-emoji">🌍</div>
                  <div className="uol-map-text">Глобален мост</div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.8)",
                      margin: "0.5rem 0 0",
                    }}
                  >
                    🇮🇳 Централа в Удайпур
                  </p>
                  <p
                    style={{
                      fontSize: "2rem",
                      color: "rgba(255,255,255,0.6)",
                      margin: "0.5rem 0",
                    }}
                  >
                    ↔️
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.8)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    🇬🇧 Офис в Обединеното кралство
                  </p>
                </div>
              </div>

              <div
                className="uol-anim"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Clock3 size={32} color="white" />
                </div>
                <h4
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "0.95rem",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  24/7 Техническа поддръжка
                </h4>
                <p
                  style={{
                    margin: "0",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: "1.5",
                  }}
                >
                  Покритие в работното време на Обединеното кралство + поддръжка от офшорния екип гарантират непрекъсната помощ за вашите критични проекти.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKOfficeLocation;
