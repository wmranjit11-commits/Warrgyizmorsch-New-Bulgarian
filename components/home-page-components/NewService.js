"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

export default function NewService() {
  const rootRef = useRef(null); // NEW: ref to this component section
  const inZoneRef = useRef(false); // NEW: mutable flag if section is in view

  useEffect(() => {
    // ---------------- Menu/section highlighting ----------------
    const sections = document.querySelectorAll(".right-section > div[id]");
    const menuItems = document.querySelectorAll(".menu-item");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const menuItem = document.querySelector(`.menu-item[href="#${id}"]`);
          if (entry.isIntersecting) {
            menuItems.forEach((i) => i.classList.remove("active"));
            if (menuItem) menuItem.classList.add("active");
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => sectionObserver.observe(section));

    // ---------------- Scope to this component ----------------
    const hostEl = rootRef.current;
    if (!hostEl) {
      return () => sectionObserver.disconnect();
    }

    // Helpers
    const viewportCenterInside = () => {
      const r = hostEl.getBoundingClientRect();
      const cy = window.innerHeight / 2;
      return cy >= r.top && cy <= r.bottom;
    };

    // Clamp boost target to stay within section
    const getClamp = () => {
      const rect = hostEl.getBoundingClientRect();
      const compTop = window.scrollY + rect.top;
      const compBottom = compTop + rect.height;
      const pad = 12;
      const minY = compTop - pad;
      const maxY = Math.max(minY, compBottom - window.innerHeight + pad);
      return { compTop, compBottom, minY, maxY };
    };
    const clampToComponent = (y) => {
      const { minY, maxY } = getClamp();
      return Math.min(Math.max(y, minY), maxY);
    };

    // ---------------- Micro-snap config ----------------
    const ENABLE_ON_TOUCH = false;
    const BOOST_PX = 390; // gentle nudge
    const BOOST_DURATION_MS = 1600; // slow glide
    const IDLE_DELAY_MS = 120;
    const MIN_USER_MOVE_PX = 3;
    const DESKTOP_MIN_WIDTH = 1025;

    const TOP_GUARD_PX = 230;
    const BOTTOM_GUARD_PX = 280;

    const CLICK_COOLDOWN_MS = 700;

    let isBoosting = false;
    let stopTimer = null;
    let prevStopY = window.scrollY;

    let armed = false;
    let lastWheelTs = 0;
    let continuousDelta = 0;
    const CONTINUOUS_RESET_MS = 120;
    const CONTINUOUS_DELTA_PX = 220;

    let lastUserDir = 0; // +1 down, -1 up
    let isCoolingDown = false;
    let cooldownTimer = null;

    const clearCooldown = () => {
      isCoolingDown = false;
      if (cooldownTimer) {
        clearTimeout(cooldownTimer);
        cooldownTimer = null;
      }
    };

    const inBoostableBand = () => {
      const { compTop, compBottom } = getClamp();
      const y = window.scrollY;
      const topBandEnd = compTop + TOP_GUARD_PX;
      const bottomBandStart = Math.max(
        compTop,
        compBottom - window.innerHeight - BOTTOM_GUARD_PX
      );
      return y >= topBandEnd && y <= bottomBandStart;
    };

    const canRun = () => {
      if (isBoosting || isCoolingDown) return false;
      if (!armed) return false;
      if (!inBoostableBand()) return false;
      if (window.innerWidth < DESKTOP_MIN_WIDTH && !ENABLE_ON_TOUCH)
        return false;
      return true;
    };

    const armIfNeeded = () => {
      armed = viewportCenterInside() && inBoostableBand();
      if (!armed) {
        prevStopY = window.scrollY;
        continuousDelta = 0;
        lastUserDir = 0;
      }
    };

    const onScrollArmCheck = () => {
      armIfNeeded();
    };
    window.addEventListener("scroll", onScrollArmCheck, { passive: true });

    // rAF tween for slow programmatic scroll
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const tweenScrollTo = (toY, duration, onDone) => {
      const startY = window.scrollY;
      const delta = toY - startY;
      if (delta === 0 || duration <= 0) {
        window.scrollTo(0, toY);
        onDone?.();
        return;
      }
      let startTs = null,
        rafId = 0;
      const step = (ts) => {
        if (startTs === null) startTs = ts;
        const t = Math.min(1, (ts - startTs) / duration);
        const y = startY + delta * easeOutCubic(t);
        window.scrollTo(0, y);
        if (t < 1) rafId = requestAnimationFrame(step);
        else onDone?.();
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    };

    const doBoost = (dir) => {
      if (!canRun() || dir === 0) return;
      isBoosting = true;
      const target = clampToComponent(window.scrollY + dir * BOOST_PX);
      tweenScrollTo(target, BOOST_DURATION_MS, () => {
        isBoosting = false;
        armIfNeeded();
      });
    };

    const onStop = () => {
      if (!canRun()) return;
      const dy = window.scrollY - prevStopY;

      if (Math.abs(continuousDelta) >= CONTINUOUS_DELTA_PX) return;
      if (Math.abs(dy) < MIN_USER_MOVE_PX) return;

      const dir = lastUserDir !== 0 ? lastUserDir : Math.sign(dy);
      doBoost(dir);
      prevStopY = window.scrollY;
    };

    const cancelStopCheck = () => {
      clearTimeout(stopTimer);
      stopTimer = null;
    };
    const scheduleStopCheck = () => {
      if (!canRun()) return;
      cancelStopCheck();
      stopTimer = setTimeout(onStop, IDLE_DELAY_MS);
    };

    // =========================
    // Desktop sequential activator
    // =========================
    const IS_MOBILE = window.matchMedia("(max-width: 768px)").matches;

    const cards = Array.from(hostEl.querySelectorAll(".new-service-card"));
    let activeIndex = 0;
    cards.forEach((c, i) => c.classList.toggle("is-active", i === 0));

    const centerLine = () => window.innerHeight * 0.5;
    const midY = (el) => {
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2;
    };

    const setActive = (idx) => {
      if (idx === activeIndex || idx < 0 || idx >= cards.length) return;
      cards[activeIndex]?.classList.remove("is-active");
      cards[idx]?.classList.add("is-active");
      activeIndex = idx;
    };

    const HYST = 12;
    const COOLDOWN_MS = 180;
    let lastChangeAt = 0;

    let rafId = 0;
    const measureAndStep = () => {
      rafId = 0;
      const now = performance.now();
      const cy = centerLine();

      let closest = activeIndex;
      let bestDist = Infinity;
      cards.forEach((el, i) => {
        const d = Math.abs(midY(el) - cy);
        if (d < bestDist) {
          bestDist = d;
          closest = i;
        }
      });

      const dir = closest > activeIndex ? 1 : closest < activeIndex ? -1 : 0;

      if (dir > 0 && activeIndex < cards.length - 1) {
        const nextMid = midY(cards[activeIndex + 1]);
        if (cy >= nextMid + HYST && now - lastChangeAt >= COOLDOWN_MS) {
          setActive(activeIndex + 1);
          lastChangeAt = now;
        }
      } else if (dir < 0 && activeIndex > 0) {
        const prevMid = midY(cards[activeIndex - 1]);
        if (cy <= prevMid - HYST && now - lastChangeAt >= COOLDOWN_MS) {
          setActive(activeIndex - 1);
          lastChangeAt = now;
        }
      }
    };
    const requestMeasure = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(measureAndStep);
    };

    // =========================
    // Mobile: IO with delayed activation so text is readable
    // =========================
    let mobileObserver = null;
    if (IS_MOBILE) {
      // remove any desktop-active state to avoid conflicts
      cards.forEach((c) => c.classList.remove("is-active"));

      const MOBILE_ACTIVATION_DELAY = 500; // ms
      let activationTimer = null; // single pending timer
      let pendingTarget = null; // element waiting to be activated
      let currentActive = null; // currently .is-active card

      const clearActivationTimer = () => {
        if (activationTimer) {
          clearTimeout(activationTimer);
          activationTimer = null;
        }
        pendingTarget = null;
      };

      const scheduleActivate = (el) => {
        // if scheduling same element, keep existing timer
        if (pendingTarget === el && activationTimer) return;

        clearActivationTimer();

        pendingTarget = el;
        activationTimer = setTimeout(() => {
          // only activate if it's still the best target (still intersecting)
          // and still in the DOM
          if (!pendingTarget || !document.body.contains(pendingTarget)) return;

          // deactivate others
          cards.forEach((c) => c.classList.remove("is-active"));
          pendingTarget.classList.add("is-active");
          currentActive = pendingTarget;

          clearActivationTimer();
        }, MOBILE_ACTIVATION_DELAY);
      };

      mobileObserver = new IntersectionObserver(
        (entries) => {
          // choose the most visible card that is at least somewhat in view
          let best = null;
          let bestRatio = 0;

          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > bestRatio) {
              best = e.target;
              bestRatio = e.intersectionRatio;
            }
            // If currently active card is no longer intersecting, drop it immediately
            if (
              currentActive &&
              e.target === currentActive &&
              !e.isIntersecting
            ) {
              currentActive.classList.remove("is-active");
              currentActive = null;
            }
          });

          if (best) {
            // if the best already active, do nothing
            if (best === currentActive) return;
            // schedule activation with delay so user can read text first
            scheduleActivate(best);
          } else {
            // no best means likely mid-swipe; avoid flashing by clearing timer
            clearActivationTimer();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [0.15, 0.35, 0.55, 0.8, 0.98], // more granular; activates earlier but still delayed
        }
      );

      // Observe the cards that are actually visible in mobile Swiper DOM
      const mobileCards = hostEl.querySelectorAll(
        ".new-service-mobile-swiper .new-service-card"
      );
      mobileCards.forEach((el) => mobileObserver.observe(el));

      // ensure cleanup of timers when unmounting
      // (this return is handled in the outer cleanup below)
    }

    // ---------------- Listeners ----------------
    const onWheel = (e) => {
      if (e.ctrlKey) return; // ignore pinch-zoom

      const now = performance.now();
      if (now - lastWheelTs > CONTINUOUS_RESET_MS) {
        continuousDelta = 0;
      }
      lastWheelTs = now;
      continuousDelta += e.deltaY;

      if (e.deltaY > 0) lastUserDir = 1;
      else if (e.deltaY < 0) lastUserDir = -1;

      if (!IS_MOBILE) requestMeasure(); // desktop only

      if (!armed) return;
      if (!canRun()) return;

      cancelStopCheck();
      scheduleStopCheck();
    };

    let lastScrollYForDir = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      const diff = curr - lastScrollYForDir;
      if (diff > 0) lastUserDir = 1;
      else if (diff < 0) lastUserDir = -1;
      lastScrollYForDir = curr;

      if (!IS_MOBILE) requestMeasure(); // desktop only

      if (!armed || !canRun()) return;
      cancelStopCheck();
      scheduleStopCheck();
    };

    // Menu smooth scroll: suppress boosts and recalc
    menuItems.forEach((item) => {
      const onClick = (e) => {
        e.preventDefault();
        const targetId = item.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        const offset = 70;
        const elementPosition =
          target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = clampToComponent(elementPosition - offset);

        isBoosting = true;
        isCoolingDown = true;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setTimeout(() => {
          isBoosting = false;
          prevStopY = window.scrollY;
          armIfNeeded();
          clearCooldown();
          if (!IS_MOBILE) requestMeasure();
        }, CLICK_COOLDOWN_MS);
      };

      item.addEventListener("click", onClick);
      item.__ns_onClick = onClick;
    });

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      prevStopY = window.scrollY;
      armIfNeeded();
      if (!IS_MOBILE) requestMeasure();
    };
    window.addEventListener("resize", onResize);

    // Initialize
    armIfNeeded();
    prevStopY = window.scrollY;
    if (!IS_MOBILE) requestMeasure();

    // ---------------- Cleanup ----------------
    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollArmCheck);
      if (cooldownTimer) clearTimeout(cooldownTimer);
      if (stopTimer) clearTimeout(stopTimer);
      if (rafId) cancelAnimationFrame(rafId);
      if (mobileObserver) mobileObserver.disconnect();
      menuItems.forEach((item) => {
        if (item.__ns_onClick) {
          item.removeEventListener("click", item.__ns_onClick);
          delete item.__ns_onClick;
        }
      });
    };
  }, []);

  // ✅ Card data grouped by section for desktop & reused for mobile
  const cardSections = [
    {
      id: "section1",
      items: [
        {
          title: "Персонализирани ERP решения за бизнес нужди",
          text: "Изграждаме персонализирани ERP системи за гъвкав и мащабируем бизнес растеж.",
          icon: "/assets/new-img/svg/service1.svg",
          image:
            "/assets/new-img/services/Custom ERP Solutions for Business Needs.webp",
          link: "/website-design-development",
        },
        {
          title: "Управление на инвентара и веригата за доставки",
          text: "Проследявайте инвентара в реално време и оптимизирайте ефективността на веригата за доставки.",
          icon: "/assets/new-img/svg/service2.svg",
          image:
            "/assets/new-img/services/Inventory & Supply Chain Management.webp",
          link: "/custom-software-development",
        },
        {
          title: "Табло за данни и отчети в реално време",
          text: "Получавайте незабавен достъп до информация с табла за по-интелигентни решения, базирани на данни.",
          icon: "/assets/new-img/svg/service3.svg",
          image:
            "/assets/new-img/services/Real-Time Data & Reporting Dashboard.webp",
          link: "/mobile-app-development",
        },
        {
          title: "Интеграция със съществуващи системи",
          text: "Интегрирайте ERP със съществуващи инструменти за плавни работни процеси и свързаност.",
          icon: "/assets/new-img/svg/service4.svg",
          image:
            "/assets/new-img/services/Integration with Existing Systems.jpg",
          link: "/e-commerce-website-development-service",
        },
      ],
    },
    {
      id: "section2",
      items: [
        {
          title: "Система за управление на клиентски данни",
          text: "Управлявайте клиентските данни централно за лесен достъп и по-добри взаимоотношения.",
          icon: "/assets/new-img/svg/service7.svg",
          image: "/assets/new-img/services/Customer Data Management System.jpg",
          link: "/search-engine-optimzation",
        },
        {
          title: "Проследяване на продажбите и потенциалните клиенти",
          text: "Проследявайте потенциални клиенти, наблюдавайте продажбите и управлявайте фунията, за да увеличите реализациите.",
          icon: "/assets/new-img/svg/service8.svg",
          image: "/assets/new-img/services/Sales Pipeline & Lead Tracking.jpg",
          link: "/social-media-marketing-service",
        },
        {
          title: "Автоматизирани последващи действия и известия",
          text: "Автоматизирайте напомняния, имейли и последващи действия, за да увеличите ангажираността на клиентите.",
          icon: "/assets/new-img/svg/service9.svg",
          image:
            "/assets/new-img/services/Automated Follow-ups & Notifications.webp",
          link: "/content-marketing-service",
        },
        {
          title: "CRM анализи и отчети",
          text: "Получавайте информация с отчети и анализи за подобряване на бизнес резултатите.",
          icon: "/assets/new-img/svg/service10.svg",
          image: "/assets/new-img/services/CRM Analytics & Reporting.webp",
          link: "/email-marketing",
        },
      ],
    },
    {
      id: "section3",
      items: [
        {
          title: "Интеграция на смарт устройства",
          text: "Свързвайте и интегрирайте смарт устройства за единна и ефективна екосистема.",
          icon: "/assets/new-img/svg/service11.svg",
          image: "/assets/new-img/services/Smart Device Integration.webp",
          link: "/meta-ads-service",
        },
        {
          title: "Мониторинг на данни в реално време",
          text: "Свързвайте и интегрирайте смарт устройства, за да създадете ефективна екосистема.",
          icon: "/assets/new-img/svg/service12.svg",
          image: "/assets/new-img/services/Real-Time Data Monitoring.jpg",
          link: "/google-ads-service",
        },
        {
          title: "Дистанционно управление и автоматизация",
          text: "Проследявайте данните от устройствата незабавно, за да подобрите ефективността и вземането на решения.",
          icon: "/assets/new-img/svg/service13.svg",
          image: "/assets/new-img/services/Remote Control & Automation.jpeg",
          link: "/linkedIn-advertising",
        },
        {
          title: "Сигурна IoT инфраструктура",
          text: "Внедрете стабилна сигурност за защита на устройства, данни и мрежи.",
          icon: "/assets/new-img/svg/service14.svg",
          image: "/assets/new-img/services/Secure IoT Infrastructure.webp",
          link: "/",
        },
      ],
    },
    {
      id: "section4",
      items: [
        {
          title: "Разработка на приложения за Android и iOS",
          text: "Разработвайте висококачествени приложения за Android и iOS, за да увеличите бизнес растежа.",
          icon: "/assets/new-img/svg/service15.svg",
          image: "/assets/new-img/services/Android & iOS App Development.jpeg",
          link: "/logo-and-corporate-branding",
        },
        {
          title: "Лесен за използване UI/UX дизайн",
          text: "Проектирайте интуитивни интерфейси за плавно и ангажиращо потребителско изживяване.",
          icon: "/assets/new-img/svg/service17.svg",
          image: "/assets/new-img/services/User-Friendly UIUX Design.jpeg",
          link: "/social-media-graphics",
        },
        {
          title: "Висока производителност и мащабируемост",
          text: "Изграждайте приложения, които работят ефективно и се мащабират с бизнес растежа.",
          icon: "/assets/new-img/svg/service18.svg",
          image: "/assets/new-img/services/High Performance & Scalability.jpeg",
          link: "/motion-graphics-end-animation",
        },
        {
          title: "Поддръжка на приложения",
          text: "Осигурете поддръжка, актуализации и съдействие за безпроблемна работа на приложението.",
          icon: "/assets/new-img/svg/service19.svg",
          image: "/assets/new-img/services/App Maintenance & Support.jpeg",
          link: "/print-end-collateral-designs",
        },
      ],
    },
    {
      id: "section5",
      items: [
        {
          title: "Адаптивен и мобилен дизайн",
          text: "Създавайте адаптивни уебсайтове, оптимизирани за мобилни устройства, таблети и настолни компютри.",
          icon: "/assets/new-img/svg/service20.svg",
          image: "/assets/new-img/services/Responsive-mobile-friendly.jpeg",
          link: "/virtual-assistant-service",
        },
        {
          title: "SEO оптимизирана структура",
          text: "Разработвайте SEO-ориентирани уебсайтове за подобряване на класирането и органичния трафик.",
          icon: "/assets/new-img/svg/service21.svg",
          image: "/assets/new-img/services/SEO Optimized Structure.jpeg",
          link: "/backend-support-and-troubleshooting",
        },
        {
          title: "Бърза скорост на зареждане",
          text: "Оптимизирайте производителността на уебсайта за по-интелигентно потребителско изживяване.",
          icon: "/assets/new-img/svg/service7.svg",
          image: "/assets/new-img/services/Fast Loading Speed.jpeg",
          link: "/virtual-assistant-service",
        },
        {
          title: "Сигурна и мащабируема разработка",
          text: "Изграждайте сигурни уебсайтове с мащабируема архитектура в подкрепа на бъдещия растеж и защита на потребителските данни.",
          icon: "/assets/new-img/svg/service9.svg",
          image: "/assets/new-img/services/secure-scalable.jpeg",
          link: "/backend-support-and-troubleshooting",
        },
      ],
    },
    {
      id: "section6",
      items: [
        {
          title: "Разработка на персонализиран онлайн магазин",
          text: "Изграждаме персонализирани онлайн магазини за гъвкава и уникална идентичност на марката.",
          icon: "/assets/new-img/svg/service22.svg",
          image: "/assets/new-img/services/custom-online-store.jpeg",
          link: "/customized-services-and-packages",
        },
        {
          title: "Интеграция на платежни портали",
          text: "Интегрирайте сигурни платежни портали за плавни и безпроблемни транзакции.",
          icon: "/assets/new-img/svg/service12.svg",
          image: "/assets/new-img/services/payment-gateway.jpeg",
          link: "/customized-services-and-packages",
        },
        {
          title: "Управление на продукти и инвентар",
          text: "Управлявайте продукти, наличности и поръчки с актуализации на инвентара в реално време.",
          icon: "/assets/new-img/svg/service11.svg",
          image: "/assets/new-img/services/Product & Inventory Management.jpeg",
          link: "/customized-services-and-packages",
        },
        {
          title: "Лесно за използване пазаруване",
          text: "Проектирайте ангажиращи интерфейси за пазаруване, за да подобрите потребителското изживяване и реализациите.",
          icon: "/assets/new-img/svg/service14.svg",
          image:
            "/assets/new-img/services/User-Friendly Shopping Experience.jpeg",
          link: "/customized-services-and-packages",
        },
      ],
    },
  ];

  return (
    <section ref={rootRef} className="new-service-root">
      <div className="container section new-service-section">
        {/* Left Sticky Section */}
        <div className="left-section new-service-left">
          <div className="sticky-inner new-service-sticky">
            <p>
              <span
                style={{
                  color: "var(--new-smoke-color)",
                  fontStyle: "italic",
                  fontFamily: "var(--new-span-font)",
                }}
              >
                Нашите услуги
              </span>
            </p>
            <h2 className="service-title new-service-title">
              Нашите усъвършенствани ИТ услуги за <br /> бизнес растеж
            </h2>
            <ul className="menu-list new-service-menu-list">
              <li>
                <a
                  href="#section1"
                  className="menu-item active new-service-menu-item"
                >
                  Разработка на ERP
                </a>
              </li>
              <li>
                <a href="#section2" className="menu-item new-service-menu-item">
                  Разработка на CRM
                </a>
              </li>
              <li>
                <a href="#section3" className="menu-item new-service-menu-item">
                  Разработка на IOT
                </a>
              </li>
              <li>
                <a href="#section4" className="menu-item new-service-menu-item">
                  Разработка на мобилни приложения
                </a>
              </li>
              <li>
                <a href="#section5" className="menu-item new-service-menu-item">
                  Разработка на уебсайтове
                </a>
              </li>
              <li>
                <a href="#section6" className="menu-item new-service-menu-item">
                  Разработка на електронна търговия
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (desktop) */}
        <div className="right-section new-service-right">
          {cardSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="new-service-card-grid"
            >
              {section.items.map((card, idx) => (
                <ServiceCard
                  key={idx}
                  title={card.title}
                  text={card.text}
                  icon={card.icon}
                  image={card.image}
                  link={card.link}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="mobile-swiper new-service-mobile-swiper">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={12}
            loop={true}
            autoplay={{ delay: 1200, disableOnInteraction: false }}
            speed={700}
          >
            {cardSections.flatMap((section) =>
              section.items.map((card, idx) => (
                <SwiperSlide key={`${section.id}-${idx}`}>
                  <ServiceCard
                    title={card.title}
                    text={card.text}
                    icon={card.icon}
                    image={card.image}
                    link={card.link}
                  />
                </SwiperSlide>
              )),
            )}
          </Swiper>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .new-service-root { background-color: #000; }

        .new-service-section {
          display: flex;
          color: #fff;
          min-height: auto;
          padding: 4rem 0;
          gap: 3rem;
        }

        .new-service-left { width: 50%; }
        .new-service-sticky { position: sticky; top: 21%; }

        .new-service-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 2rem;
          color: #fff;
          font-weight: 500;
        }

        .new-service-menu-list {
          list-style: none;
          padding: 0 0 0 0.7rem;
          border-left: 1px solid #2f2f2f;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .new-service-menu-item {
          color: #9ca3af;
          text-decoration: none;
          display: inline-block;
          position: relative;
          transition: color 0.3s ease;
          font-size: 16px;
        }

        .menu-item.active {
          color: white !important;
          font-weight: 600;
          position: relative;
        }
        .menu-item.active::before {
          content: "";
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 100%;
          background-color: #3b82f6;
        }
        .menu-item:hover { color: white !important; }

        .new-service-right {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .new-service-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          min-height: 280px;
        }

        /* Card base */
        .new-service-card {
          position: relative;
          overflow: hidden;
          border: 1px solid #828282;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          padding: 1rem;
          transition: border 0.3s ease;
          min-height: 280px;
          background: #0b0b0b;
          isolation: isolate;
        }

        /* Content layer */
        .new-service-card-content {
          display: flex;
          flex-direction: column;
          transition: opacity .32s ease, transform .32s ease;
          z-index: 2;
        }
        .new-service-card-title {
          font-weight: 500;
          margin-bottom: 0.4rem;
          color: white;
          font-size: 18px;
          line-height: 1.3;
        }
        .new-service-card-text {
          color: #B8B8B8;
          font-size: 13px;
          margin-bottom: 0;
          line-height: 1.3;
        }

        /* Image layer (hidden by default) */
        .new-service-card-media {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity .38s ease, transform .45s ease;
          z-index: 1;
          background: #0a0a0a;
        }
        .new-service-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }

        /* Show image when active OR on hover/focus */
        .new-service-card.is-active .new-service-card-media,
        .new-service-card:hover .new-service-card-media,
        .new-service-card:focus-within .new-service-card-media {
          opacity: 1;
          transform: scale(1);
        }
        .new-service-card.is-active .new-service-card-content,
        .new-service-card:hover .new-service-card-content,
        .new-service-card:focus-within .new-service-card-content {
          opacity: 0;
          transform: translateY(6px);
        }

        @media (min-width: 1290px){
          .new-service-card { min-height: 320px; }
          .new-service-menu-item { font-size: 21px; }
          .new-service-menu-list { border-left: 3px solid #2f2f2f; }
          .menu-item.active::before { width: 3px; left: -14px; }
        }

        .mobile-swiper { display: none; width: 100%; }
        .new-service-mobile-swiper { display: none; width: 100%; }

        @media (max-width: 768px) {
          .section.new-service-section {
            flex-direction: column;
            padding: 2rem 1rem !important;
          }
          .left-section.new-service-left {
            width: 100% !important;
            position: relative;
          }
          .sticky-inner.new-service-sticky {
            position: static !important;
            text-align: center;
          }
          .service-title.new-service-title { font-size: 1.8rem !important; }
          .menu-list.new-service-menu-list { display: none !important; }
          .right-section.new-service-right { display: none !important; }
          .mobile-swiper, .new-service-mobile-swiper { display: block; }
          .mobile-swiper .swiper-slide,
          .new-service-mobile-swiper .swiper-slide { padding: 2px; }
        }

        /* Optional: keep the old hover reveal for NON-active cards */
        .new-service-card:not(.is-active):hover .new-service-card-media,
        .new-service-card:not(.is-active):focus-within .new-service-card-media {
          opacity: 1;
          transform: scale(1);
        }
        .new-service-card:not(.is-active):hover .new-service-card-content,
        .new-service-card:not(.is-active):focus-within .new-service-card-content {
          opacity: 0;
          transform: translateY(6px);
        }

        /* --- ACTIVE + HOVER/FOCUS: bring content back --- */
        .new-service-card.is-active:hover .new-service-card-media,
        .new-service-card.is-active:focus-within .new-service-card-media {
          /* fade image so text is readable; set to 0 if you want it fully hidden */
          opacity: 0.08;
          transform: scale(1);
        }

        .new-service-card.is-active:hover .new-service-card-content,
        .new-service-card.is-active:focus-within .new-service-card-content {
          opacity: 1;
          transform: none;
        }

      `}</style>
    </section>
  );
}

// ✅ Reusable Card Component (unchanged API)
const ServiceCard = ({ title, text, icon, image, link }) => (
  <Link href={link}>
    <div className="new-service-card" tabIndex={0}>
      {/* Media layer (revealed by .is-active/hover/focus) */}
      <div className="new-service-card-media" aria-hidden="true">
        <img src={image || icon} alt="" />
      </div>

      {/* Keep small icon above text by default; remove if not needed */}
      <div>
        <img src={icon} alt="icon" />
      </div>

      {/* Content layer */}
      <div className="new-service-card-content">
        <h3 className="new-service-card-title">{title}</h3>
        <p className="new-service-card-text">{text}</p>
      </div>
    </div>
  </Link>
);
