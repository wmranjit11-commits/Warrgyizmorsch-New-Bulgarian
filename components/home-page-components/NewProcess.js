"use client";
import React, { useRef, useEffect, useState } from "react";

const NewProjectProcess = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const horizontalRef = useRef(null);
  const railCanvasRef = useRef(null);

  const [lineLength, setLineLength] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [cardCenters, setCardCenters] = useState([]);
  const [railTop, setRailTop] = useState(0);
  const [railWidth, setRailWidth] = useState(2400);

  // You can tweak these for different wave looks
  const RAIL_CANVAS_HEIGHT = 80; // visual rail band height
  const WAVE_STROKE = 6; // thickness of the line
  const WAVE_AMPLITUDE = 18; // crest height in px
  const WAVE_WAVELENGTH = 380; // distance between crests in px
  const WAVE_PHASE = 0; // starting phase shift

  const steps = [
    {
      title: "Стратегия и проучване",
      icon: "/assets/new-img/svg/process1.svg",
      desc: "Анализ на конкуренти и пазара според индустриалните стандарти. <br/><br/> Измерими критерии за успех и семинари за поставяне на цели. <br/><br/> Анализ на аудиторията за ангажираност в целевите кампании и подобряване на ефективността. <br/><br/> Своевременна пътна карта за проследяване с управление на етапите.",
    },
    {
      title: "Планиране и архитектура",
      icon: "/assets/new-img/svg/process2.svg",
      desc: "Обхватно планиране на проекта, съобразено с нуждите на клиента. <br/><br/> Избор на най-добрия технологичен стек за бъдещи, висококачествени решения. <br/><br/> Мащабируема архитектура за поддръжка на бъдещ бизнес растеж. <br/><br/> Идентифициране и смекчаване на рисковете за предотвратяване на закъснения.",
    },
    {
      title: "Творчески дизайн и изживяване",
      icon: "/assets/new-img/svg/process3.svg",
      desc: "Wireframes и прототипи за най-добро прецизиране на потребителските потоци. <br/><br/> Модерни интерфейси за повишаване на ангажираността и щастието на потребителите. <br/><br/> UX настройка за лесна навигация на всички устройства. <br/><br/> Консистенция на бранда във всички визуални и дигитални точки на контакт.",
    },
    {
      title: "Разработка и внедряване",
      icon: "/assets/new-img/svg/process4.svg",
      desc: "Гъвкавият метод гарантира темпо и адаптивност към промените. <br/><br/> Персонализираното кодиране подобрява функционалността, сигурността и производителността. <br/><br/> API интеграцията повишава ефективността и системната производителност. <br/><br/> Прозрачността в актуализациите гарантира отчетност и доверие с клиента.",
    },
    {
      title: "Осигуряване на качеството и тестване",
      icon: "/assets/new-img/svg/process1.svg",
      desc: "Функционалното тестване гарантира характеристиките и стабилността на системата. <br/><br/> Тестването на производителността потвърждава надеждността при различни условия. <br/><br/> Тестването за сигурност идентифицира уязвимости и поддържа сигурността. <br/><br/> Тестването за използваемост подобрява навигацията и комфорта за потребителите.",
    },
    {
      title: "Стартиране и оптимизация",
      icon: "/assets/new-img/svg/process2.svg",
      desc: "Плавната навигация осигурява нулево време на престой и незабавен достъп. <br/><br/> Мониторингът след пускането подобрява ефективността и потребителското изживяване. <br/><br/> Редовните актуализации поддържат производителността и добавят нови функции. <br/><br/> Непрекъснатата оптимизация осигурява максимален ROI и бизнес мащабируемост.",
    },
  ];

  // Draw the sine rail into canvas
  const drawRail = (progressPx) => {
    const canvas = railCanvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const cssWidth = railWidth;
    const cssHeight = RAIL_CANVAS_HEIGHT;

    // Scale for HiDPI
    canvas.width = Math.max(1, Math.floor(cssWidth * dpr));
    canvas.height = Math.max(1, Math.floor(cssHeight * dpr));
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const midY = cssHeight / 2;
    const amp = WAVE_AMPLITUDE;
    const k = (2 * Math.PI) / WAVE_WAVELENGTH; // angular frequency

    // Helper to trace a wave segment [x0, x1]
    const traceWave = (x0, x1) => {
      const step = 2; // sampling step in px
      ctx.beginPath();
      let started = false;
      for (let x = x0; x <= x1; x += step) {
        const y = midY + amp * Math.sin(k * x + WAVE_PHASE);
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
      // ensure we end exactly at x1 for crisp cap
      const yEnd = midY + amp * Math.sin(k * x1 + WAVE_PHASE);
      ctx.lineTo(x1, yEnd);
    };

    // Background full wave (light rail)
    ctx.lineWidth = WAVE_STROKE;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#d3d7eb";
    traceWave(0, cssWidth);
    ctx.stroke();

    // Foreground progress wave (theme color)
    const themeColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--new-theme-color")
        .trim() || "#4f46e5";

    const clamped = Math.max(0, Math.min(progressPx, cssWidth));
    if (clamped > 0) {
      ctx.lineWidth = WAVE_STROKE;
      ctx.lineCap = "round";
      ctx.strokeStyle = themeColor;
      traceWave(0, clamped);
      ctx.stroke();
    }
  };

  // Measure section height, card centers, and rail position/width
  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !horizontal) return;

    const measure = () => {
      const totalScrollWidth = Math.max(
        0,
        horizontal.scrollWidth - window.innerWidth
      );
      section.style.height = `${totalScrollWidth + window.innerHeight}px`;

      const cards = horizontal.querySelectorAll(".new-process-card");
      if (!cards.length) return;

      const metrics = Array.from(cards).map((card) => {
        const left = card.offsetLeft;
        const width = card.offsetWidth;
        const center = left + width / 2;
        return { left, width, center };
      });

      const isMobile = window.innerWidth <= 768;
      const revealXs = metrics.map(({ left, width, center }) =>
        isMobile ? left + width * 0.15 : center
      );
      setCardCenters(revealXs);

      // Rail spans full horizontal content
      setRailWidth(horizontal.scrollWidth);

      // Place the canvas so its midline runs through the vertical center of the first card
      const first = cards[0];
      const topCenter = first.offsetTop + first.offsetHeight / 2;
      setRailTop(topCenter - RAIL_CANVAS_HEIGHT / 2);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(horizontal);
    window.addEventListener("resize", measure);

    const t = setTimeout(() => setVisibleCount(1), 60);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  // Scroll logic (sticky + horizontal translate + progress)
  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !sticky || !horizontal) return;

    const onScroll = () => {
      const totalScrollWidth = Math.max(
        0,
        horizontal.scrollWidth - window.innerWidth
      );
      const scrollHeight = totalScrollWidth + window.innerHeight;

      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + scrollHeight;

      let progress = 0;

      if (
        scrollTop >= sectionTop &&
        scrollTop <= sectionBottom - window.innerHeight
      ) {
        Object.assign(sticky.style, {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
        });
        progress =
          (scrollTop - sectionTop) / (scrollHeight - window.innerHeight);
        horizontal.style.transform = `translateX(-${
          progress * totalScrollWidth
        }px)`;
      } else if (scrollTop < sectionTop) {
        sticky.style.position = "relative";
        horizontal.style.transform = "translateX(0)";
        progress = 0;
      } else {
        Object.assign(sticky.style, {
          position: "absolute",
          top: `${scrollHeight - window.innerHeight}px`,
          left: "0",
          width: "100%",
          height: "100vh",
        });
        horizontal.style.transform = `translateX(-${totalScrollWidth}px)`;
        progress = 1;
      }

      // Convert progress to wave X distance
      const railPadding = 100; // small headroom before card 1
      const totalLineWidth = Math.max(0, horizontal.scrollWidth - railPadding);
      const newLength = progress * totalLineWidth;

      setLineLength(newLength);

      if (cardCenters.length) {
        const count = Math.max(
          1,
          cardCenters.filter((c) => newLength >= c).length
        );
        if (count !== visibleCount) setVisibleCount(count);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cardCenters, visibleCount]);

  // Redraw the sine wave whenever width/length changes
  useEffect(() => {
    drawRail(lineLength);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [railWidth, lineLength, railTop]);

  return (
    <section className="new-process-section" ref={sectionRef}>
      <div className="new-process-sticky" ref={stickyRef}>
        <div className="new-process-heading container">
          <h2 className="new-italic">Нашият доказан процес за постигане на успех</h2>
          <p>
            Погледнете зад кулисите и проучете процеса на персонализиран уеб дизайн, който нашият екип следва.
          </p>
        </div>

        <div className="new-process-wrapper" ref={horizontalRef}>
          <div className="new-process-scroll">
            {/* Sine-wave progress rail (canvas) centered through cards */}
            <canvas
              ref={railCanvasRef}
              className="progress-rail-canvas"
              style={{
                top: `${railTop}px`,
                width: `${railWidth}px`,
                height: `${RAIL_CANVAS_HEIGHT}px`,
              }}
            />

            {/* Cards in a straight line */}
            <div className="new-process-cards">
              {steps.map((step, index) => {
                const isVisible = index < visibleCount;
                return (
                  <div
                    key={index}
                    className={[
                      "new-process-card",
                      isVisible ? "is-visible" : "is-hidden",
                    ].join(" ")}
                    style={{
                      transitionDelay: isVisible ? `${index * 60}ms` : "0ms",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className="new-process-hex">
                        <img src={step.icon} alt={step.title} />
                      </div>
                    </div>
                    <h3 className="new-process-card-title">{step.title}</h3>
                    <p
                      className="new-process-desc"
                      dangerouslySetInnerHTML={{ __html: step.desc }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .new-process-section { position: relative; width: 100%; }
        .new-process-sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; background-color: #F3F6FD; }
        .new-process-wrapper { display: flex; transition: transform 0.25s ease-out; will-change: transform; }
        .new-process-scroll { position: relative; padding: 40px 30px 10px; display: flex; flex-direction: column; gap: 40px; }

        @media (min-width: 1290px){
          .new-process-scroll{
            padding: 6% 30px 10px;
          }
        }

        /* Canvas rail (behind cards) */
        .progress-rail-canvas {
          position: absolute;
          left: 0;
          z-index: 1;            /* behind cards */
          pointer-events: none;  /* decorative only */
        }

        .new-process-cards { 
          display: flex; 
          gap: 135px; 
          position: relative; 
          z-index: 2;          /* above the rail */
          min-width: 2000px; 
          align-items: center; /* vertically center cards around the rail line */
        }

        .new-process-card {
          background-color: #fff;
          border-radius: 14px;
          box-shadow:
            4px 4px 7px rgba(0, 0, 0, 0.25),
            -0.5px -0.5px 7px rgba(0, 0, 0, 0.1);
          width: 310px;
          padding: 20px 16px;
          text-align: left;
          flex-shrink: 0;
          transition: transform 0.55s cubic-bezier(.2,.7,.2,1), opacity 0.55s ease, box-shadow 0.3s ease;
          will-change: transform, opacity;
        }

        .new-process-card.is-hidden {
          opacity: 0;
          transform: translateY(420px);
          pointer-events: none;
        }
        .new-process-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .new-process-hex {
          width: 95px;
          height: 95px;
          background-color: var(--new-theme-color);
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          margin: 0 0 15px 0;
          display: flex; align-items: center; justify-content: center;
        }
        .new-process-hex img { width: 30px; height: 30px; }

        .new-process-card-title {
          color: var(--new-theme-color);
          line-height: 1.1;
          font-weight: 500;
          font-size: 22px;
          margin: 10px 0;
        }
        .new-process-desc { font-size: 15px; color: #737373; line-height: 1.25; margin: 0; }

        .new-process-heading { margin-top: 10px; }
        .new-process-heading h2 { font-size: 32px; font-weight: 500; margin: 0 0 6px; }
        .new-process-heading p { font-size: 16px; color: #000; margin: 0; line-height: 1.45; }
      `}</style>
    </section>
  );
};

export default NewProjectProcess;
