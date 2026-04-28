"use client";
import React, { useEffect, useRef } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  DollarSign,
  Users,
} from "lucide-react";

const UKLegalInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".uli-anim, .uli-box"));
    animEls.forEach((el, i) => el.style.setProperty("--ulii", String(i)));

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
    <div ref={sectionRef}>
      <style>{`
        .uli-wrap {
          background: white;
          color: #000;
          padding: 3rem 20px;
        }

        .uli-header {
          margin-bottom: 2.5rem;
        }

        .uli-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .uli-header h2 {
          font-size: 1.8rem;
          color: black;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .uli-header h2 {
            font-size: 2rem;
          }
        }

        .uli-header p {
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .uli-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .uli-grid {
            grid-template-columns: 1fr;
          }
        }

        .uli-box {
          background: #f8f9fa;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          border-left: 4px solid var(--new-theme-color);
          opacity: 0;
          transform: translateX(-12px) scale(0.98);
          will-change: opacity, transform;
        }

        .uli-box.in-view {
          animation: uli-slide-right 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ulii, 0) * 110ms);
        }

        @keyframes uli-slide-right {
          0% { opacity: 0; transform: translateX(-12px) scale(0.98); }
          60% { opacity: 1; transform: translateX(0) scale(1.01); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        .uli-box h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--new-theme-color);
          margin: 0 0 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .uli-box p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #333;
          margin: 0.5rem 0;
        }

        .uli-box .label {
          font-weight: 600;
          color: #000;
          display: inline-block;
          min-width: 120px;
        }

        .uli-box a {
          color: var(--new-theme-color);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }

        .uli-box a:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .uli-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .uli-wrap {
            padding: 2rem 20px;
          }

          .uli-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uli-box {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="uli-wrap">
        <div className="uli-container">
          <div className="uli-header uli-anim">
            <p className="uli-eyebrow new-italic">Задължителна информация</p>
            <h2>Правни и регистрационни данни в Обединеното кралство</h2>
            <p>
              Напълно съответстващ на изискванията и разпоредбите на Companies House в Обединеното кралство
            </p>
          </div>

          <div className="uli-grid">
            <div className="uli-box uli-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Building2 size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Регистрация на компанията</h3>
              </div>
              <p>
                <span className="label">Юридическо име:</span>
                <br />
                WarrgyizMorsch UK Ltd
              </p>
              <p>
                <span className="label">Регистрационен номер (CRN):</span>
                <br />
                16386627
              </p>
              <p>
                <span className="label">Юрисдикция:</span>
                <br />
                Регистрирана в Англия и Уелс
              </p>
            </div>

            <div className="uli-box uli-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Седалище</h3>
              </div>
              <p>
                312, Pentax House, South Hill Avenue,
                <br />
                South Harrow,
                <br />
                Middlesex, HA2 0DU,
                <br />
                United Kingdom
              </p>
            </div>

            <div className="uli-box uli-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Phone size={28} color="var(--new-theme-color)" />
                <Mail
                  size={28}
                  color="var(--new-theme-color)"
                  style={{ marginLeft: "-0.5rem" }}
                />
                <h3 style={{ margin: 0 }}>Информация за контакт</h3>
              </div>
              <p>
                <span className="label">Телефон:</span>
                <br />
                +44 7789161193
              </p>
              <p>
                <span className="label">Имейл:</span>
                <br />
                <a href="mailto:info@warrgyizmorsch.com">
                  info@warrgyizmorsch.com
                </a>
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  color: "#999",
                }}
              >
                Достъпни часове по GMT/BST
              </p>
            </div>

            <div className="uli-box uli-anim">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <Building2 size={28} color="var(--new-theme-color)" />
                <h3 style={{ margin: 0 }}>Регулаторна рамка</h3>
              </div>
              <p>
                <strong>Закон за компаниите в Обединеното кралство от 2006 г.</strong>
                <br />
                UK GDPR и Закон за защита на данните от 2018 г.
                <br />
                Регистрация и съответствие с ICO
                <br />
                Изисквания за подаване в Companies House
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKLegalInfo;
