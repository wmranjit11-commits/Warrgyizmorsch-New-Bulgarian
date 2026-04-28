"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const words = [
  "Дигитални решения", 
  "AI решения" , 
  "ИТ услуги" ,
  "Бизнес растеж",
  // "Innovation",
  // "Artificial Intelligence",
  // "Creativity",
  // "Technology",
  // "Smart Solutions",
];

const NewBriefIntro = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // TYPEWRITER
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Lazy-load iframe
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIframeLoaded) {
          setIsIframeLoaded(true);
        }
      },
      { threshold: 0.3 }
    );

    loadObserver.observe(node);
    return () => loadObserver.unobserve(node);
  }, [isIframeLoaded]);

  // Auto play/pause YouTube
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentWindow) return;

        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: entry.isIntersecting ? "playVideo" : "pauseVideo",
            args: [],
          }),
          "*"
        );
      },
      { threshold: 0.5 }
    );

    playbackObserver.observe(node);
    return () => playbackObserver.unobserve(node);
  }, [isIframeLoaded]);

  // Text + video reveal animations (unchanged)
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(
      root.querySelectorAll(".brief-anim, .brief-video")
    );
    animEls.forEach((el, i) => el.style.setProperty("--bi", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _ = el.offsetHeight;
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

  // TYPEWRITER: forward type → hold → backspace → next word
  useEffect(() => {
    let isMounted = true;
    let t;

    const TYPING_SPEED = 60; // ms per char (typing)
    const DELETING_SPEED = 40; // ms per char (backspace)
    const HOLD_TIME = 1000; // ms after full word
    const GAP_BEFORE_TYPE = 250; // small gap before next word starts

    const word = words[currentIndex] || "";
    let i = 0; // character index
    let deleting = false;

    setTypedText(""); // reset at start of each cycle

    const run = () => {
      if (!isMounted) return;

      if (!deleting) {
        // typing forward
        if (i <= word.length) {
          setTypedText(word.slice(0, i));
          i += 1;
          t = setTimeout(run, TYPING_SPEED);
        } else {
          // full word typed — hold, then switch to deleting
          t = setTimeout(() => {
            deleting = true;
            run();
          }, HOLD_TIME);
        }
      } else {
        // backspacing
        if (i >= 0) {
          setTypedText(word.slice(0, i));
          i -= 1;
          t = setTimeout(run, DELETING_SPEED);
        } else {
          // done deleting — advance to next word (effect reruns on index change)
          t = setTimeout(() => {
            if (!isMounted) return;
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }, GAP_BEFORE_TYPE);
        }
      }
    };

    run();

    return () => {
      isMounted = false;
      clearTimeout(t);
    };
  }, [currentIndex]);

  return (
    <div>
      <style>{`
        .brief-wrapper {
          background: white;
          color: #000;
          padding: 3rem 0;
          display: flex;
          align-items: center;
        }

        .brief-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .brief-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .brief-video {
          flex: 1;
          width: 100%;
          max-width: 600px;
          position: relative;
          aspect-ratio: 16 / 9;
          cursor: pointer;
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .brief-video img,
        .brief-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          object-fit: cover;
        }

        .brief-text {
          flex: 1;
          width: 100%;
        }

        .brief-text h1 {
          color: black;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          line-height: 1.3;
        }

        /* TYPEWRITER container: steady height; prevent wrap */
        .modern-word {
          display: inline-block;
          position: relative;
          min-width: 12ch;      /* keep height/line stable; adjust if you want */
          white-space: nowrap;
          text-align: left;
        }

        @keyframes brief-fade-up {
          0%   { opacity: 0; transform: translateY(12px) scale(0.98); }
          60%  { opacity: 1; transform: translateY(0) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes brief-pop-in {
          0%   { opacity: 0; transform: translateY(12px) scale(0.96); }
          60%  { opacity: 1; transform: translateY(0) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .brief-anim {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          will-change: opacity, transform;
        }

        .brief-anim.in-view {
          animation: brief-fade-up 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--bi, 0) * 110ms);
        }

        .brief-video.in-view {
          animation: brief-pop-in 600ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--bi, 0) * 120ms);
        }

        @media (prefers-reduced-motion: reduce) {
          .brief-anim,
          .brief-video {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="brief-wrapper" ref={sectionRef}>
        <div className="brief-container container">
          {/* Text Section */}
          <div className="brief-text">
            <h1 className="brief-anim">
              Най-добрата <span className="new-italic">ИТ компания</span> в Индия за
              интелигентни и мащабируеми <span className="modern-word">{typedText}</span>
            </h1>

            <p className="brief-anim">
              Ние сме прогресивна ИТ компания в Индия, предоставяща иновативни софтуерни и уеб решения, 
              които помагат на бизнеса да се развива в бързо променящия се дигитален свят. 
              От 2017 г. насам изграждаме надеждни дигитални продукти, които се развиват с времето. 
              Нашият експертен екип е специализиран в разработването на уебсайтове, персонализиран софтуер, 
              мобилни приложения, SaaS продукти и решения за електронна търговия, съобразени с нуждите на бизнеса. 
              Като доверена ИТ фирма в Индия, ние се фокусираме върху създаването на лесни за използване, 
              мащабируеми и високопроизводителни платформи, които подобряват ефективността, 
              засилват ангажираността на клиентите и стимулират измерим растеж за стартиращи и утвърдени фирми.
            </p>

            <div className="flex item-center justify-start gap-2">
              <div className="btn-group brief-button brief-anim">
                <button
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/warrgyizmorschdigital/30min",
                      });
                    }
                  }}
                  className="th-btn style-radius"
                  style={{
                    display: "flex",
                    gap: "20",
                    alignItems: "center",
                  }}
                >
                  Резервирайте безплатно обаждане <ArrowRight size={14} />
                </button>
              </div>
              <div className="btn-group brief-button brief-anim">
                <Link
                  href="/about-us"
                  className="th-btn style-radius"
                  style={{
                    display: "flex",
                    gap: "20",
                    alignItems: "center",
                  }}
                >
                  За нас <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="brief-video">
            {isIframeLoaded ? (
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/yo5aL4Plbso?enablejsapi=1&mute=1"
                title="Кратко видео представяне"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src="https://img.youtube.com/vi/yo5aL4Plbso/hqdefault.jpg"
                alt="Миниатюра на кратко видео"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewBriefIntro;
