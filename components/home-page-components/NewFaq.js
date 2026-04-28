"use client";
import React, { useEffect, useRef, useState } from "react";

const NewFaq = () => {
  const items = [
    {
      q: "Какви услуги предлага Warrgyizmorsch?",
      a: `Warrgyizmorsch предлага широка гама от ИТ услуги в Индия, включително разработване на уебсайтове, персонализиран софтуер, мобилни приложения, SaaS решения и дигитален маркетинг. Нашата цел е да предоставим цялостни дигитални решения, които помагат на бизнеса да расте ефективно, да подобрява производителността и да постига дългосрочен успех.`,
    },
    {
      q: "Защо се смятате за най-добрата ИТ компания в Индия?",
      a: `Ние сме признати за най-добрата ИТ компания в Индия поради нашия ангажимент към качеството, иновациите и удовлетвореността на клиентите. Нашият екип се фокусира върху предоставянето на надеждни и мащабируеми решения, които отговарят на бизнес целите и стимулират дългосрочен успех.`,
    },
    {
      q: "Как една ИТ фирма в Индия може да помогне на бизнеса ми да расте?",
      a: `Професионалната ИТ фирма в Индия помага на бизнеса да расте чрез внедряване на интелигентни дигитални решения, подобряване на оперативната ефективност и засилване на ангажираността на клиентите. С правилния технологичен партньор бизнесът може да постигне по-бърз растеж и по-добри резултати.`,
    },
    {
      q: "Мога ли да мащабирам бизнеса си с вашите ИТ решения?",
      a: `Да, нашите решения са изградени така, че да се мащабират с вашия бизнес. Независимо дали става въпрос за ръст на трафика, нови функции или разширяване на системата, ние проектираме всичко с мисъл за дългосрочна мащабируемост.`,
    },
    {
      q: "Какво прави Warrgyizmorsch различна от другите ИТ компании?",
      a: `Ние се фокусираме върху предоставянето на практически, ориентирани към резултатите решения, вместо просто да изграждаме софтуер. Нашият подход съчетава стратегия, дизайн и технология, за да помогне на бизнеса да постигне реален растеж.`,
    },
  ];

  const [open, setOpen] = useState(-1); // third item open by default
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    // Animate: media, eyebrow, title, each FAQ button/panel
    const animEls = Array.from(
      root.querySelectorAll(".new-faq-anim, .new-faq-media, .new-faq-item")
    );

    // Assign a stagger index via CSS var
    animEls.forEach((el, i) => el.style.setProperty("--fi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            void el.offsetHeight; // reflow to restart animation
            el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
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
      aria-labelledby="new-faq-title"
    >
      <style>{`
        .new-faq-wrap { padding: 56px 0; background:#fff; }
        .new-faq-container { display:grid; grid-template-columns: 1.05fr 1fr; gap:48px; align-items:start; }
        @media (max-width: 980px){ .new-faq-container{ grid-template-columns:1fr; gap:28px; } }

        /* Left images */
        .new-faq-media { position:relative; }
        .new-faq-mainImg { width:100%; display:block; border-radius:28px; object-fit:cover; aspect-ratio: 4 / 3; box-shadow: 0 12px 30px rgba(0,0,0,.12); }
        .new-faq-inset {
          position:absolute; left:24px; bottom:-22px; width:min(58%, 360px);
          border-radius:22px; overflow:hidden; background:#fff; box-shadow:0 10px 26px rgba(0,0,0,.14);
          border:6px solid #fff;
        }
        .new-faq-inset img { width:100%; height:100%; object-fit:cover; display:block; }

        /* Right side heading */
        .new-faq-eyebrow { font-weight:600; font-size:35px; margin:4px 0 12px; }
        .new-faq-title { font-size:32px; line-height:1.2; margin:0 0 18px; font-weight:500; color: black; }
        @media (min-width: 1100px){ .new-faq-title{ font-size:35px; } }

        /* Accordion */
        .new-faq-accordion { border-top:1px solid #e9ecf2; }
        .new-faq-item { border-bottom:1px solid #e9ecf2; }
        .new-faq-btn {
          width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px;
          background:transparent; border:0; padding:18px 4px; cursor:pointer; text-align:left;
          font-size:16px; font-weight:600; color:#0d1635;
        }
        .new-faq-btn:hover { color: var(--new-theme-color); }
        .new-faq-btn.is-open { color: var(--new-theme-color); }
        .new-faq-chevron { width:18px; height:18px; flex:0 0 18px; transition: transform .25s ease; color:black; }
        .new-faq-btn.is-open .new-faq-chevron {
            transform: rotate(90deg);
            color: var(--new-theme-color);
        }

        .new-faq-panel {
          overflow:hidden; max-height:0; transition:max-height .3s ease;
        }
        .new-faq-panel-inner { padding:0 4px 16px; color:#39425f; font-size:15px; line-height:1.6; }
        .new-faq-panel.is-open { max-height:500px; } /* enough for one-paragraph answers */

        /* Small blue link look for the opened question (as in screenshot) */
        .new-faq-btn.is-open .new-faq-linkish { text-decoration:none; color: var(--new-theme-color); }

        /* ===== Animations (no UI changes) ===== */
        @keyframes faq-fade-up {
          0%   { opacity: 0; transform: translateY(12px) scale(0.98); }
          60%  { opacity: 1; transform: translateY(0)    scale(1.01); }
          100% { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* initial hidden state for animatable els */
        .new-faq-anim,
        .new-faq-media,
        .new-faq-item {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        /* animate when in view; stagger via --fi */
        .new-faq-anim.in-view,
        .new-faq-media.in-view,
        .new-faq-item.in-view {
          animation: faq-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--fi, 0) * 110ms);
        }

        /* tiny tap feedback on question open (chevron nudge) – visual only, no layout change */
        .new-faq-btn.is-open .new-faq-chevron { transition: transform .25s ease, color .25s ease; }

        @media (prefers-reduced-motion: reduce) {
          .new-faq-anim, .new-faq-media, .new-faq-item { opacity:1 !important; transform:none !important; animation:none !important; }
        }
      `}</style>

      <div className="new-faq-container container">
        {/* Left: images */}
        <div className="new-faq-media hide-on-mobile">
          <img
            src={"/assets/new-img/newfaq.webp"}
            alt="Team collaborating around a table"
            className="new-faq-anim"
          />
        </div>

        {/* Right: content */}
        <div>
          <div className="new-faq-eyebrow new-italic new-faq-anim">Често задавани въпроси</div>
          <h2 id="new-faq-title" className="new-faq-title new-faq-anim">
            Услуги за персонализирана
            <br />
            уеб разработка
          </h2>

          <div className="new-faq-media hide-on-desktop new-faq-anim">
            <img
              src={"/assets/new-img/newfaq.webp"}
              alt="Team collaborating around a table"
              className=""
            />
          </div>

          <div
            className="new-faq-accordion new-faq-anim"
            role="region"
            aria-labelledby="new-faq-title"
          >
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div className="new-faq-item" key={i}>
                  <button
                    className={`new-faq-btn ${isOpen ? "is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`new-faq-panel-${i}`}
                    id={`new-faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className={isOpen ? "new-faq-linkish" : ""}>
                      {it.q}
                    </span>
                    {/* Chevron icon */}
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
                    id={`new-faq-panel-${i}`}
                    className={`new-faq-panel ${isOpen ? "is-open" : ""}`}
                    role="region"
                    aria-labelledby={`new-faq-btn-${i}`}
                  >
                    <div className="new-faq-panel-inner">{it.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFaq;
