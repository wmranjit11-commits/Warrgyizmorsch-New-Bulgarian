"use client";
import React, { useEffect, useRef, useState } from "react";

/* === Swiper === */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

/* ---------------- Tabs ---------------- */
const TABS = [
  {
    key: "web",
    label: "Уеб разработка",
    icon: "/assets/new-img/svg/case-web.svg",
  },
  {
    key: "uiux",
    label: "UI/UX дизайн",
    icon: "/assets/new-img/svg/case-uiux.svg",
  },
  {
    key: "dm",
    label: "Дигитален маркетинг",
    icon: "/assets/new-img/svg/case-digi.svg",
  },
  {
    key: "crm",
    label: "Разработка на CRM",
    icon: "/assets/new-img/svg/case-crm.svg",
  },
];

/* ---------------- Cases (array per tab) ---------------- */
const CASES = {
  web: [
    {
      img: "/assets/new-img/work-bear.webp",
      title: "Flower Bear",
      text: "Обновихме сайта за електронна търговия на Flower Bear, подобрявайки потребителския поток, адаптивния дизайн и скоростта на плащане. Резултат: по-силно присъствие на марката, по-плавни покупки и увеличени реализации.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Увеличени реализации 20%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point3.svg",
          point: "По-бързо зареждане 50%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point2.png",
          point: "Разработено на WordPress",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/flower-bear",
    },
  ],
  uiux: [
    {
      img: "/assets/new-img/codsphere.webp",
      title: "COD Sphere",
      text: "Препроектирахме изживяването с таблото за управление, опростихме работните процеси, интегрирахме прозрения, управлявани от AI, и подобрихме достъпността и мобилната реактивност.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Удовлетвореност +40%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point2.png",
          point: "Продуктивност +35%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point3.svg",
          point: "Достъпност +25%",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/cod-sphere",
    },
  ],
  dm: [
    {
      img: "/assets/new-img/case_aloe.png",
      title: "Aloe Naturals",
      text: "Засилено присъствие чрез целеви социални кампании и SEO съдържание. Ангажираността и трафикът се увеличиха значително в рамките на седмици.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Степен на отпадане −36%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point2.png",
          point: "Органичен трафик +15%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point3.svg",
          point: "Социална ангажираност +20%",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/aloe-naturals",
    },
    {
      img: "/assets/new-img/work_ct.webp",
      title: "Comfort Transfers",
      text: "Повишена видимост на марката в цяла Швейцария чрез целеви социални реклами, SEO оптимизирано съдържание на уебсайта и кампании за ретаргетинг. Резултат: 45% увеличение на резервациите и по-висока ангажираност.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Увеличение на органичния трафик 50%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point2.png",
          point: "Увеличение на трафика на сайта 25%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point3.svg",
          point: "Ретаргетинг кампании 40%",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/comfort-transfers",
    },
  ],
  crm: [
    {
      img: "/assets/new-img/wts.png",
      title: "WTS Visa",
      text: "Подобрена CRM интеграция: оптимизирано управление на потенциални клиенти, автоматизирани последващи действия и персонализирани пътувания.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Конверсия +40%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point2.png",
          point: "Ефективност на контактите +60%",
        },
        {
          icon: "/assets/new-img/svg/case-digi-point3.svg",
          point: "Ангажираност +35%",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/wts-visa",
    },
    {
      img: "/assets/new-img/case_ain.png",
      title: "Assignment in Need",
      text: "Повишена видимост на марката в Обединеното кралство чрез SEO-ориентирано блог съдържание, целеви социални реклами и оптимизирани за конверсия целеви страници, което доведе до повече запитвания от студенти и подобрен ROI в рамките на три месеца.",
      bullets: [
        {
          icon: "/assets/new-img/svg/case-digi-point1.svg",
          point: "Увеличение на новия трафик 20%",
        },
      ],
      phone: "/assets/new-img/mobile.png",
      route: "/case-study/assignment",
    },
  ],
};

const NewCaseStudy = () => {
  const [active, setActive] = useState("web");

  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const cardRef = useRef(null);

  const list = CASES[active] || [];

  // Intersection-based reveal
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealEls = Array.from(
      root.querySelectorAll(".cs-anim, .cs-point-anim")
    );
    revealEls.forEach((el, i) => el.style.setProperty("--ai", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            // reflow to restart
            // eslint-disable-next-line no-unused-expressions
            el.offsetHeight;
            el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.25 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  // Stagger points
  useEffect(() => {
    if (!cardRef.current) return;
    const points = Array.from(
      cardRef.current.querySelectorAll(".new-cs-point")
    );
    points.forEach((el, i) => el.style.setProperty("--pi", String(i)));
  }, [active, list]);

  // Micro animation on tab change
  useEffect(() => {
    const bounce = (el, cls) => {
      if (!el) return;
      el.classList.remove(cls);
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.classList.add(cls);
    };
    bounce(photoRef.current, "cs-tab-enter");
    bounce(cardRef.current, "cs-tab-enter");
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="new-cs-wrap"
      aria-labelledby="new-cs-title"
    >
      <style>{`
        :root{ --cs-bg:#F3F6FD; --stamp-size: 86px; }
        .new-cs-wrap{ padding:56px 0 72px; background:#fff; }

        .new-cs-eyebrow{ font-weight:600; font-size:33px; text-align:center; margin:0 0 6px; }
        .new-cs-title{ text-align:center; color:black; font-weight:500; font-size: 33px; line-height:1.2; margin:0 0 22px; }

        .new-cs-tabs{ display:flex; justify-content:center; gap:30px; flex-wrap:wrap; margin-bottom:45px; margin-top: -60px; }
        .new-cs-tab{ display:flex; flex-direction: column; align-items:center; gap:10px; padding:14px 18px; border-radius:14px;
          background:#fff; border:1px solid #D4DCFF; color:black; font-weight:400; cursor:pointer; user-select:none; width:150px; }
        .new-cs-tab .new-cs-ico{ width:60px; height:60px; display:grid; place-items:center; background:white; color:var(--new-theme-color);
          border-radius:50%; padding:10px; margin-top:-50px; font-size:16px; box-shadow:0 6px 14px rgba(0,0,0,.15); }
        .new-cs-tab.active{ background:var(--new-theme-color); color:#fff; border-color:transparent; }
        .new-cs-tab.active .new-cs-ico{ background:#fff; color:var(--new-theme-color); }

        .new-cs-stage{ position:relative; background:var(--cs-bg); border-radius:20px; padding:26px; overflow:visible; margin-top:110px; }
        .new-cs-grid{ display:grid; grid-template-columns: 0.8fr 1.2fr; gap:35px; width:90%; margin:0 auto 50px; }
        @media (max-width: 980px){ .new-cs-grid{ grid-template-columns:1fr; } }

        .new-cs-photo{ background:#fff; border-radius:16px; padding:10px; opacity:1; }
        .new-cs-photo img{ width:100%; height:100%; object-fit:cover; border-radius:12px; display:block; aspect-ratio:4/3; }

        .new-cs-card{ border-radius:14px; padding:20px 30px; position:relative; opacity:1; }
        @media (max-width:960px){ .new-cs-card{ padding:20px 30px 40px; } }

        .new-cs-h{ margin:0 0 8px; font-size:22px; font-weight:500; color:black; }
        .new-cs-t{ margin:0 0 18px; color:black; font-size:14.5px; line-height:1.2; max-width:80%; }
        @media (max-width: 660px){ .new-cs-grid{ width:100%; } }
        @media (max-width: 460px){ .new-cs-t{ max-width:100%; } }

        .new-cs-points{ display:grid; grid-template-columns:1fr 1fr; gap:14px 24px; align-items:start; width:80%; }
        @media (max-width:560px){ .new-cs-points{ grid-template-columns:1fr; } }
        .new-cs-point{ display:flex; gap:10px; align-items:center; color:#1a2440; font-weight:400; font-size:15px; }
        .new-cs-badge{ width:45px; height:45px; border-radius:6px; display:grid; place-items:center; background:#fff; color:var(--new-theme-color);
          box-shadow:0 8px 18px rgba(30,109,251,.15); flex-shrink:0; padding:10px; }

        .new-cs-phone{ position:absolute; right:0; bottom:0; width:min(110px,25%); border-radius:10px; overflow:hidden; box-shadow:0 10px 22px rgba(14,30,70,.25); }
        .new-cs-phone img{ width:100%; display:block; }

        .new-cs-stamp{ position:absolute; left:45.8%; transform:translateX(-50%); bottom:-40px; width:86px; height:86px; border-radius:50%;
          display:grid; place-items:center; background:#fff; color:#1e6dfb; font-weight:700; font-size:12px; text-align:center; line-height:1.1;
          box-shadow:0 10px 22px rgba(14,30,70,.08); overflow:hidden; z-index:2; }

        @media (min-width: 1290px){
          .new-cs-stamp {
            bottom: -35px;
          }
        }

        .stamp-rotating{ width:100%; height:100%; object-fit:cover; animation:rotateStamp 6s linear infinite; }
        .new-cs-arrow{ position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:18px; height:18px; pointer-events:none; z-index:2; }
        .new-cs-arrow img{ width:100%; height:100%; display:block; }
        @keyframes rotateStamp{ from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }

        /* Animations */
        @keyframes cs-fade-up{ 0%{opacity:0; transform:translateY(10px) scale(.98);} 60%{opacity:1; transform:translateY(0) scale(1.01);} 100%{opacity:1; transform:translateY(0) scale(1);} }
        @keyframes cs-pop{ 0%{opacity:0; transform:translateY(6px) scale(.98);} 70%{opacity:1; transform:translateY(0) scale(1.02);} 100%{opacity:1; transform:translateY(0) scale(1);} }
        .cs-anim{ opacity:0; transform:translateY(10px) scale(.98); will-change:opacity, transform; }
        .cs-anim.in-view{ animation: cs-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards; animation-delay: calc(var(--ai, 0) * 100ms); }
        .cs-point-anim{ opacity:0; transform:translateY(8px); will-change:opacity, transform; }
        .cs-point-anim.in-view{ animation: cs-fade-up 520ms cubic-bezier(.2,.7,.2,1) forwards; animation-delay: calc(var(--pi, 0) * 90ms); }
        .cs-tab-enter{ animation: cs-pop 420ms cubic-bezier(.2,.7,.2,1); }
        @media (prefers-reduced-motion: reduce){ .cs-anim, .cs-point-anim, .new-cs-photo, .new-cs-card{ opacity:1!important; transform:none!important; animation:none!important; } }

        /* Swiper tweaks */
        .cs-swiper { padding: 4px 4px 28px; }
        /* Belt-and-suspenders overrides (beat any theme scales) */
.cs-swiper .swiper-pagination-bullet {
  width: 6px !important;
  height: 6px !important;
  background: var(--new-theme-color);
  opacity: .35;
  margin: 0 6px !important;
  transform: none !important;     /* prevent scale-ups */
  box-shadow: none !important;
}

.cs-swiper .swiper-pagination-bullet-active {
  opacity: 1;
  width: 6px !important;          /* keep same small size */
  height: 6px !important;
  transform: none !important;     /* stop any enlargement */
}
      `}</style>

      <div className="container">
        <div className="new-cs-eyebrow new-italic cs-anim">Калзуси</div>
        <h2 id="new-cs-title" className="new-cs-title cs-anim">
          От концепция до пазар: <br /> Проектираме проекти за превъзходна производителност
        </h2>

        <div className="new-cs-stage cs-anim">
          {/* Tabs */}
          <div
            className="new-cs-tabs cs-anim"
            role="tablist"
            aria-label="Case study categories"
          >
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                className={`new-cs-tab ${active === t.key ? "active" : ""}`}
                onClick={() => setActive(t.key)}
              >
                <span className="new-cs-ico" aria-hidden="true">
                  <img src={t.icon} alt={t.label} />
                </span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Swiper of cases for the active tab */}
          <Swiper
            className="cs-swiper cs-anim"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={28}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            speed={650}
            loop={(CASES[active] || []).length > 1}
          >
            {(CASES[active] || []).map((data, idx) => (
              <SwiperSlide key={`${active}-${idx}`}>
                <div className="new-cs-grid">
                  <div
                    ref={idx === 0 ? photoRef : null}
                    className="new-cs-photo"
                  >
                    <img src={data.img} alt={`${data.title} visual`} />
                  </div>

                  <div
                    ref={idx === 0 ? cardRef : null}
                    className="new-cs-card"
                    style={{
                      backgroundImage: `url('/assets/new-img/case_bg.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h3 className="new-cs-h cs-anim">{data.title}</h3>
                    <p className="new-cs-t cs-anim">{data.text}</p>

                    <div className="new-cs-points">
                      {data.bullets.map((b, i) => (
                        <div key={i} className="new-cs-point cs-point-anim">
                          <span className="new-cs-badge" aria-hidden="true">
                            <img src={b.icon} alt={b.point} />
                          </span>
                          <span style={{ lineHeight: "1.2" }}>{b.point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="new-cs-phone cs-anim">
                      <img src={data.phone} alt="Mobile mock" />
                    </div>

                    <Link href={data.route}>
                      <div className="new-cs-stamp">
                        <img
                          className="stamp-rotating"
                          src="/assets/new-img/svg/case-explore.svg"
                          alt="Разгледайте още"
                        />
                        <div className="new-cs-arrow">
                          <img
                            src="/assets/new-img/svg/top-right-arrow.svg"
                            alt="Arrow"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {(CASES[active] || []).length === 0 && (
              <SwiperSlide>
                <div style={{ padding: 40, textAlign: "center" }}>
                  <strong>Няма намерени казуси за тази категория.</strong>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewCaseStudy;
