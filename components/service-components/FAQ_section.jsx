"use client";
import React, { useEffect, useRef, useState } from "react";
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from "../../utils/functions";

const FAQ_section = ({ data = [] , page }) => {
  const [open, setOpen] = useState(0); // first open by default (same as your current)
  const sectionRef = useRef(null);

  // Optional: if data changes and open index is out of range
  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) return;
    if (open >= data.length) setOpen(0);
  }, [data, open]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(
      root.querySelectorAll(".new-faq-anim, .new-faq-item")
    );

    animEls.forEach((el, i) => el.style.setProperty("--fi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;

          if (!el.classList.contains("in-view")) {
            el.classList.add("in-view");
          }

          io.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="new-faq-wrap"
      aria-labelledby="faq-title"
    >
      <style>{`
        /* keep your link style */
        a { color: blue; font-weight: 700; }

        /* match NewFaq spacing/background */
        .new-faq-wrap { padding: 26px 0 0 0; background:#fff; }

        /* Heading (uses your header text) */
        .new-faq-eyebrow { font-weight:600; font-size:35px; margin:4px 0 12px; }
        .new-faq-title { font-size:32px; line-height:1.2; margin:0 0 18px; font-weight:500; color: black; }
        @media (min-width: 1100px){ .new-faq-title{ font-size:35px; } }

        /* Accordion UI copied from NewFaq */
        .new-faq-accordion { border-top:1px solid #e9ecf2; }
        .new-faq-item { border-bottom:1px solid #e9ecf2; }

        .new-faq-btn{
          width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px;
          background:transparent; border:0; padding:18px 4px; cursor:pointer; text-align:left;
          font-size:16px; font-weight:600; color:#0d1635;
        }
        .new-faq-btn:hover { color: var(--new-theme-color); }
        .new-faq-btn.is-open { color: var(--new-theme-color); }

        .new-faq-chevron{
          width:18px; height:18px; flex:0 0 18px;
          transition: transform .25s ease, color .25s ease;
          color:black;
        }
        .new-faq-btn.is-open .new-faq-chevron{
          transform: rotate(90deg);
          color: var(--new-theme-color);
        }

        .new-faq-panel { overflow:hidden; max-height:0; transition:max-height .3s ease; }
        .new-faq-panel-inner { padding:0 4px 16px; color:#39425f; font-size:15px; line-height:1.6; }
        .new-faq-panel.is-open { max-height:320px; }

        .new-faq-btn.is-open .new-faq-linkish { text-decoration:none; color: var(--new-theme-color); }

        /* Animations from NewFaq */
        @keyframes faq-fade-up {
          0%   { opacity: 0; transform: translateY(12px) scale(0.98); }
          60%  { opacity: 1; transform: translateY(0)    scale(1.01); }
          100% { opacity: 1; transform: translateY(0)    scale(1); }
        }

        .new-faq-anim, .new-faq-item {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .new-faq-anim.in-view, .new-faq-item.in-view {
          animation: faq-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--fi, 0) * 110ms);
        }

        @media (prefers-reduced-motion: reduce) {
          .new-faq-anim, .new-faq-item {
            opacity:1 !important; transform:none !important; animation:none !important;
          }
        }
      `}</style>

      <div className="container">
        <div className="new-faq-eyebrow new-italic new-faq-anim">ЧЗВ</div>

        <h2 id="faq-title" className="new-faq-title new-faq-anim">
          <span style={{ color: "#18336c" }}>
            {page?.slug
            ?.replace(/-/g, " ")
            ?.replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>{" "}
        </h2>

        <div
          className="new-faq-accordion new-faq-anim"
          role="region"
          aria-labelledby="faq-title"
        >
          {data.map((item, i) => {
            const isOpen = open === i;

            return (
              <div className="new-faq-item" key={i}>
                <button
                  type="button"
                  className={`new-faq-btn ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className={isOpen ? "new-faq-linkish" : ""}>
                    <SafeHtml
                      as="span"
                      html={resolveCityText(
                        item.question,
                        page?.city?.name,
                        page?.country?.name,
                      )}
                    />
                  </span>

                  <svg
                    className="new-faq-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 4 14 12 6 20" />
                    <polyline points="18 4 26 12 18 20" />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  className={`new-faq-panel ${isOpen ? "is-open" : ""}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="new-faq-panel-inner">
                    <SafeHtml
                      as="div"
                      className="faq-text"
                      html={resolveCityText(
                        item.answer,
                        page?.city?.name,
                        page?.country?.name,
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ_section;
