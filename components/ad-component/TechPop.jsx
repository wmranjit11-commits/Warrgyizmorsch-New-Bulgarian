"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const TechPop = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Collect desktop floating logos & mobile swiper logo bubbles
    const desktopLogos = Array.from(
      sectionEl.querySelectorAll(".new-tech-section-logo")
    );
    const mobileLogos = Array.from(
      sectionEl.querySelectorAll(".tech-swiper .logo-slide")
    );

    // Text elements to animate (title, heading, subtitle, button)
    const textEls = Array.from(
      sectionEl.querySelectorAll(
        ".new-tech-anim" // added class in JSX below
      )
    );

    // Assign a stagger index via CSS vars (no UI impact)
    const assignIndex = (nodes, varName) =>
      nodes.forEach((el, i) => el.style.setProperty(varName, String(i)));

    assignIndex(desktopLogos, "--i");
    assignIndex(mobileLogos, "--i");
    assignIndex(textEls, "--ti");

    // Observer toggles animation so it replays on every viewport entry
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting;

          const toggle = (nodes) => {
            nodes.forEach((el) => {
              if (inView) {
                // restart animation cleanly (ESLint-safe reflow)
                el.classList.remove("in-view");
                const _reflow = el.offsetHeight;
                if (_reflow > -1) el.classList.add("in-view");
              } else {
                el.classList.remove("in-view");
              }
            });
          };

          toggle(desktopLogos);
          toggle(mobileLogos);
          toggle(textEls);
        });
      },
      { root: null, threshold: 0.25 }
    );

    io.observe(sectionEl);
    return () => io.disconnect();
  }, []);

  // Bottom bar items (unchanged content)
  const tags = [
    "claude",
    "chatgpt4",
    "liama3",
    "Palm2",
    "gemma",
    "midjourney",
    "gemini",
    "albert",
    "ernie",
    "whisper",
    "xlm",
    "bert",

    "claude",
    "chatgpt4",
    "liama3",
    "Palm2",
    "gemma",
    "midjourney",
    "gemini",
    "albert",
    "ernie",
    "whisper",
    "xlm",
    "bert",

    "claude",
    "chatgpt4",
    "liama3",
    "Palm2",
    "gemma",
    "midjourney",
    "gemini",
    "albert",
    "ernie",
    "whisper",
    "xlm",
    "bert",

    "claude",
    "chatgpt4",
    "liama3",
    "Palm2",
    "gemma",
    "midjourney",
    "gemini",
    "albert",
    "ernie",
    "whisper",
    "xlm",
    "bert",
  ];

  return (
    <>
      <style>{`
        .new-tech-section-container {
          margin: 6% auto 2% auto;
          padding: 60px 0 0 0;
          position: relative;
          text-align: center;
          max-width: 1300px;
          background-color: #fff;
        }

        .new-tech-section-title {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .new-tech-section-heading {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 10px;
          color: #000;
        }

        .new-tech-section-subtitle {
          font-size: 15px;
          color: black;
          max-width: 600px;
          margin: 0 auto 15px auto;
          line-height: 1.3;
        }

        .new-tech-section-button {
          background-color: var(--new-theme-color);
          color: white;
          border: none;
          border-radius: 25px;
          padding: 10px 25px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.3s;
        }

        /* Desktop floating logos */
        .new-tech-section-logos {
          margin: 20px 0;
        }

        .new-tech-section-logo {
          position: absolute;
          width: 70px;
          height: 70px;
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          padding: 10px;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.13);
          transition: transform 0.3s ease-in-out;
          /* initial animation state (no layout shift) */
          opacity: 0;
          transform: scale(0.6);
          will-change: transform, opacity;
        }

        .new-tech-section-logo img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        /* === Bottom bar (marquee) === */
        .new-tech-section-bottom-bar {
          background-color: var(--new-theme-color);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          padding: 12px 10px;
          margin-top: 13%;
          position: relative;
          left: 50%;
          right: 50%;
          width: 100vw; /* take full viewport width */
          margin-left: -50vw; /* offset parent centering */
          margin-right: -50vw;
          overflow: hidden; /* hide overflow for marquee */
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .new-tech-section-bottom-bar::-webkit-scrollbar { display: none; }

        /* Track that scrolls */
        .new-tech-marquee {
          display: flex;
          align-items: center;
          gap: 25px;
          white-space: nowrap;
          width: max-content;
          animation: tech-marquee 10s linear infinite;
        }
        .new-tech-marquee:hover { animation-play-state: paused; }

        @keyframes tech-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }

        .new-tech-section-bottom-item {
          color: #fff;
          font-size: 17px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .new-tech-section-bottom-item::before {
          content: '✶';
          font-size: 22px;
        }

        .tech-swiper {
          display: none;
        }

        /* === Pop-in for logos === */
        @keyframes new-pop-in {
          0%   { opacity: 0; transform: scale(0.6); }
          60%  { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }

        .new-tech-section-logo.in-view {
          animation: new-pop-in 520ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--i, 0) * 120ms);
        }

        /* Mobile logo bubbles */
        .tech-swiper .logo-slide {
          opacity: 0;
          transform: scale(0.6);
          box-shadow: 0 10px 25px rgba(0,0,0,0.13);
          will-change: transform, opacity;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          width: 60px;
          height: 60px;
        }

        .tech-swiper .logo-slide.in-view {
          animation: new-pop-in 520ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--i, 0) * 100ms);
        }

        /* === Fade-up for text === */
        @keyframes new-fade-up {
          0%   { opacity: 0; transform: translateY(12px) scale(0.98); }
          60%  { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Initial state for text (no layout shift) */
        .new-tech-anim {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: transform, opacity;
        }

        /* Animate when in view; stagger via --ti */
        .new-tech-anim.in-view {
          animation: new-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ti, 0) * 120ms);
        }

        /* Hide desktop logos and show swiper on mobile */
        @media (max-width: 768px) {
          .new-tech-section-logos {
            display: none;
          }

          .new-tech-section-heading {
            font-size: 22px;
          }

          .new-tech-section-subtitle {
            font-size: 14px;
          }

          .new-tech-section-container {
            padding: 60px 0 0 0 ;
            text-align: left;
          }

          .tech-swiper {
            display: block;
            margin-top: 25px;
            padding: 10px 0;
          }

          .tech-swiper .swiper-slide {
            display: flex;
            justify-content: center;
          }

          .tech-swiper .logo-slide img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      `}</style>

      <div ref={sectionRef} className="new-tech-section-container">
        {/* Center Content */}
        <div className="container">
          <div className="new-tech-section-title new-tech-anim">
            <span className="new-italic"></span>
          </div>
          <div className="new-tech-section-heading new-tech-anim">
            AI модели, които изграждаме и внедряваме
          </div>
          <div className="new-tech-section-subtitle new-tech-anim">
            Създаваме модели, които носят реални резултати за бизнеса, който се стреми към растеж и промяна.
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("erp-contact-form");
              if (el) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="new-tech-section-button th-btn style-radius new-tech-anim"
          >
            Споделете вашия AI казус →
          </button>
        </div>

        {/* ✅ Mobile Swiper for Logos */}
        <div className="tech-swiper">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            style={{ height: "80px" }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={1000}
          >
            {[
              "claude",
              "chatgpt4",
              "liama3",
              "palm2",
              "gemma",
              "midjourney",
              "gemini",
              "albert",
              "ernie",
              "whisper",
              "xlm",
              "bert",
            ].map((tech, i) => (
              <SwiperSlide key={tech}>
                <div className="logo-slide" style={{ "--i": String(i) }}>
                  <img src={`/assets/new-img/tech/${tech}.png`} alt={tech} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom blue bar */}
        <div className="new-tech-section-bottom-bar">
          {/* Duplicate content once for seamless loop */}
          <div className="new-tech-marquee">
            {[...tags].map((t, idx) => (
              <div key={`${t}-${idx}`} className="new-tech-section-bottom-item">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop Floating Logos */}
        <div className="new-tech-section-logos">
          <div
            className="new-tech-section-logo"
            style={{ top: "-2%", left: "10%" }}
          >
            <img src="/assets/new-img/tech/claude.png" alt="claude" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "2%", left: "22%" }}
          >
            <img src="/assets/new-img/tech/chatgpt4.png" alt="chatgpt4.js" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "18%", left: "5%" }}
          >
            <img src="/assets/new-img/tech/liama3.png" alt="liama3" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "34%", left: "14%" }}
          >
            <img src="/assets/new-img/tech/palm2.png" alt="palm2" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "51%", left: "7%" }}
          >
            <img src="/assets/new-img/tech/gemma.png" alt="gemma" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "57%", left: "20%" }}
          >
            <img src="/assets/new-img/tech/midjourney.png" alt="midjourney" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "3%", right: "17%" }}
          >
            <img src="/assets/new-img/tech/gemini.png" alt="gemini" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "-1%", right: "6%" }}
          >
            <img src="/assets/new-img/tech/albert.png" alt="albert" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "24%", right: "4%" }}
          >
            <img src="/assets/new-img/tech/ernie.png" alt="ernie" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "37%", right: "14%" }}
          >
            <img src="/assets/new-img/tech/whisper.png" alt="whisper" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "54%", right: "20%" }}
          >
            <img src="/assets/new-img/tech/xlm.png" alt="xlm" />
          </div>
          <div
            className="new-tech-section-logo"
            style={{ top: "52%", right: "6%" }}
          >
            <img src="/assets/new-img/tech/bert.png" alt="bert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechPop;
