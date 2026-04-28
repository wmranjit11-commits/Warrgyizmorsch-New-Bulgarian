"use client";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    videoId: "judGRbDdyeA",
    name: "Comfort Transfers",
    quote:
      "Warrgyizmorsch изградиха точно уебсайта, от който се нуждаех - професионален, лесен за използване и доставен навреме. Те бяха отзивчиви, разбраха ясно изискванията ми и направиха целия процес плавен и безпроблемен. Силно ги препоръчвам на всеки, който търси качествена уеб разработка на страхотна цена. Страхотна работа, момчета.",
    thumbnail: "/assets/new-img/comfort_transfer_thum.webp",
  },
  {
    videoId: "7wATe9LGXB4",
    name: "Aloe Naturals",
    quote:
      "Работата с Warrgyizmorsch по уебсайта на Aloe Naturals беше страхотно изживяване от началото до края. Екипът беше отзивчив, надежден и достави всичко навреме. Много съм доволен от крайния резултат и абсолютно бих ги препоръчал на всеки, който търси добре проектиран и функционален уебсайт.",
    thumbnail: "/assets/new-img/aloe-natural-thumb.webp",
  },
  {
    videoId: "OchEj4Y3ewU",
    name: "Yellow Sapphire",
    quote:
      "Работата с г-н Махипал и неговия екип в Warrgyizmorsch беше страхотно изживяване за нас в Yellow Sapphire Visa and Education Consultants, Лудхиана. Те са бързи, професионални и винаги доставят качествена работа навреме. Видяхме отлични резултати и абсолютно бих препоръчал техните дигитални маркетингови услуги на всеки, който търси надежден и ефективен екип.",
    thumbnail: "/assets/new-img/yellow-sepphire-thumb.webp",
  },
];

// ✅ Global players registry
const players = {};

const TestimonialCard = ({
  videoId,
  name,
  quote,
  thumbnail,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!videoId) return;

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(`yt-player-${videoId}`, {
        videoId,
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);

              // ✅ Pause all other players
              Object.keys(players).forEach((id) => {
                if (id !== videoId && players[id]?.pauseVideo) {
                  players[id].pauseVideo();
                }
              });
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });

      // ✅ Save player globally
      players[videoId] = playerRef.current;
    };
  }, [videoId]);

  const handlePlayClick = () => {
    if (!videoId) return;

    // ✅ Pause all other players first
    Object.keys(players).forEach((id) => {
      if (id !== videoId && players[id]?.pauseVideo) {
        players[id].pauseVideo();
      }
    });

    if (playerRef.current && playerRef.current.playVideo) {
      // Player already exists → just play
      playerRef.current.playVideo();
    } else {
      // ⬇️ FIX IS HERE: add onReady and autoplay
      playerRef.current = new window.YT.Player(`yt-player-${videoId}`, {
        videoId,
        playerVars: {
          autoplay: 1, // optional but nice to have
        },
        events: {
          onReady: (event) => {
            event.target.playVideo(); // 👈 first click will immediately play
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);

              Object.keys(players).forEach((id) => {
                if (id !== videoId && players[id]?.pauseVideo) {
                  players[id].pauseVideo();
                }
              });
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });

      players[videoId] = playerRef.current;
    }
  };

  return (
    <div
      className={`new-test-card ${isActive ? "active" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="new-test-media">
        <div className="video-container">
          {videoId ? (
            <div id={`yt-player-${videoId}`}></div>
          ) : (
            <div className="thumbnail-overlay" style={{ cursor: "default" }}>
              <img
                src={thumbnail}
                alt={`${name} testimonial`}
                className="thumbnail-img static-img"
              />
            </div>
          )}

          {!isPlaying && videoId && (
            <div
              className="thumbnail-overlay"
              onClick={handlePlayClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src={thumbnail}
                alt={`${name} thumbnail`}
                className="thumbnail-img"
              />
              <button className="play-btn" aria-label="Play video">
                ▶
              </button>
            </div>
          )}
        </div>
      </div>

      {isActive && (
        <div className="new-test-content">
          <h3 className="new-test-title">{name}</h3>
          <p className="new-test-quote">“{quote}”</p>
        </div>
      )}
      <style>{`
        .video-container {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
        }

        .thumbnail-img {
          width: 100%;
          height: 100% !important;
          object-fit: cover;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .thumbnail-overlay:hover .thumbnail-img {
          opacity: 0.7;
        }

        .play-btn {
          position: absolute;
          background: var(--new-theme-color);
          color: white;
          border: none;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          font-size: 26px;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        .static-img {
          width: 100%;
          height: 100% !important;
          object-fit: cover;
          border-radius: 16px;
          display: block;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </div>
  );
};

const NewTestimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [spaceBetween, setSpaceBetween] = useState(20);

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 900);
      setSpaceBetween(w >= 1300 ? 70 : 20);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Detect mobile on mount
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nav = useMemo(
    () => ({
      prevEl: ".new-test-arrow.left",
      nextEl: ".new-test-arrow.right",
    }),
    []
  );

  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const handleHover = (index) => {
    if (isMobile) return;

    // Clear any pending leave timeout (so it doesn’t close while re-hovering)
    clearTimeout(leaveTimeoutRef.current);
    clearTimeout(hoverTimeoutRef.current);

    // Wait 0.8s before opening
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      const swiper = swiperRef.current;
      if (swiper) swiper.slideToLoop(index, 450);
    }, 800);
  };

  const handleLeave = () => {
    if (isMobile) return;

    // Clear pending hover timeout if user leaves early
    clearTimeout(hoverTimeoutRef.current);
    clearTimeout(leaveTimeoutRef.current);

    // Wait 0.8s before closing
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 800);
  };

  return (
    <section id="new-testimonials" className="new-test-wrap">
      <style>{`
      
        .new-test-wrap {
          padding: 28px 12px 48px;
          background: #fff;
        }
        .new-test-heading h2 {
          font-size: 35px;
          color: black;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .new-test-sub {
          font-size: 13.5px;
          color: black;
        }

        .new-test-shell {
          position: relative;
          margin-top: 24px;
        }
        .new-test-track {
          padding: 6px 36px;
        }
        .new-test-track .swiper-slide {
          width: auto !important;
        }

        .new-test-card {
          position: relative;
          background: #f4f7fd;
          border-radius: 18px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          width: clamp(260px, 33vw, 340px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          min-height: 420px;
        }

        .new-test-card.active {
          transform: scale(1.01);
          z-index: 10;
          width: clamp(640px, 55vw, 860px);
          justify-content: flex-start;
          gap: 22px;
          padding: 18px;
          min-height: 420px;
        }

        .new-test-media {
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
          width: 100%;
          transition: width 0.4s ease;
        }

        .new-test-media iframe,
        .new-test-media #yt-player {
          width: 100%;
          height: 100%;
          aspect-ratio: 16/9;
          display: block;
        }

        .new-test-card.active .new-test-media {
          width: 45%;
        }

        .new-test-media iframe {
          width: 100%;
          aspect-ratio: 3/4;
          border: 0;
        }

        .new-test-content {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          opacity: 0;
          width: 45%;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .new-test-card.active .new-test-content {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
          animation: none;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .new-test-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .new-test-quote {
          font-size: 15px;
          line-height: 1.7;
        }

        .new-test-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--new-theme-color, #18336c);
          color: #fff;
          border: none;
          cursor: pointer;
          display: grid;
          place-items: center;
          z-index: 10;
        }
        .new-test-arrow.left {
          left: -6px;
        }
        .new-test-arrow.right {
          right: -6px;
        }

        @media (max-width: 900px) {
        .new-test-arrow { display: none; }
        .new-test-track { padding: 0; }
        .new-test-track .swiper-slide { width: 100% !important; }

        .new-test-card {
          width: 92vw;
          max-width: 680px;
          margin: 0 auto;
          flex-direction: column;
          justify-content: center; /* Center everything */
        }

        /* Disable hover effects */
        .new-test-card.active {
          width: auto;
          transform: none;
          justify-content: center;
          gap: 12px;
          padding: 12px;
        }

        .new-test-media {
          width: 100%; /* full width */
        }

        .new-test-media iframe {
          aspect-ratio: 3/4; /* portrait mode */
          width: 100%;
          height: auto;
        }

        .new-test-content {
          position: static;
          transform: none !important;
          width: 100%;
          opacity: 1;
          text-align: left;
          margin-top: 15px;
        }
      }

        @media (max-width: 600px) {
          .new-test-card { width: 94vw; }
          .new-test-title { font-size: 20px; }
          .new-test-quote { font-size: 14px; line-height: 1.6; }
          .new-test-card.active .new-test-media {
            width: 95%;
          }
      `}</style>

      <div className="container">
        <div className="new-test-heading">
          <h2>
            Нека чуем какво казват{" "}
            <span className="new-italic">клиентите</span>
          </h2>
          <p className="new-test-sub">
            Нашите клиенти ни се доверяват за качество, иновации и удовлетвореност. Чуйте техните истории по-долу.
          </p>
        </div>

        <div className="new-test-shell">
          <button
            className="new-test-arrow left"
            onClick={() => swiperRef.current?.slidePrev()}
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="new-test-track">
            <Swiper
              modules={[Navigation, Keyboard, A11y]}
              navigation={nav}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              speed={450}
              slidesPerView={"auto"}
              spaceBetween={spaceBetween}
              onSwiper={(s) => (swiperRef.current = s)}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard
                    videoId={t.videoId}
                    name={t.name}
                    quote={t.quote}
                    thumbnail={t.thumbnail}
                    isActive={activeIndex === i || isMobile}
                    onMouseEnter={() => handleHover(i)}
                    onMouseLeave={handleLeave}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            className="new-test-arrow right"
            onClick={() => swiperRef.current?.slideNext()}
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonial;
