"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const posts = [
  {
    id: 1,
    image: "/assets/img/social-media/reel-1.jpeg",
    link: "https://www.instagram.com/reel/DWYcjqfCCi2/",
  },
  {
    id: 2,
    image: "/assets/img/social-media/reel-2.jpeg",
    link: "https://www.instagram.com/reel/DScfOGKk7jb/",
  },
  {
    id: 3,
    image: "/assets/img/social-media/reel-3.jpeg",
    link: "https://www.instagram.com/reel/DRPF-qSiZ9h/",
  },
  {
    id: 4,
    image: "/assets/img/social-media/reel-4.jpeg",
    link: "https://www.instagram.com/reel/DRWxF1QAJMe/",
  },
  {
    id: 5,
    image: "/assets/img/social-media/reel-5.jpeg",
    link: "https://www.instagram.com/reel/DTftAlIkivF/",
  },
  {
    id: 6,
    image: "/assets/img/social-media/reel-6.jpeg",
    link: "https://www.instagram.com/reel/DWOnNPNEsFs/",
  },
  {
    id: 7,
    image: "/assets/img/social-media/reel-7.jpeg",
    link: "https://www.instagram.com/reel/DQg81CJDoox/",
  },
];

const SocialMediaGrid = () => {
  const sectionRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".social-video-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--si", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (!el) return;

          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            if (_reflow > -1) el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <style>{`
        .social-video-wrapper {
          background: #fff;
          padding: 0 0 3rem;
          position: relative;
        }

        .social-video-container {
          width: 100%;
          padding: 0 12px;
          margin: 10 auto;
          position: relative;
        }
           .social-media-heading {
          text-align: center;
          margin-bottom: 2rem;
        }

        .social-media-heading h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #005baa;
          margin: 0;
          line-height: 1.2;
        }
        .social-video-slider {
          overflow: hidden;
        }

        .social-video-card {
          position: relative;
          display: block;
          width: 100%;
          height: 500px;
          overflow: hidden;
          text-decoration: none;
          background: #111;
          border-radius: 0;
        }

        .social-video-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
        }

        .social-video-card:hover img {
          transform: scale(1.06);
        }

        .social-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.2) 45%,
            rgba(0, 0, 0, 0.08) 100%
          );
          z-index: 1;
        }

        .social-video-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 16px;
        }

        .social-video-play {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #fff;
          transition: transform 0.3s ease, background 0.3s ease;
          flex-shrink: 0;
        }

        .social-video-card:hover .social-video-play {
          transform: scale(1.08);
          background: rgba(0, 91, 170, 0.8);
        }

        .social-video-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
          flex-shrink: 0;
        }

        .social-video-card:hover .social-video-arrow {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.22);
        }

        .social-video-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-video-nav:hover {
          background: #005baa;
        }

        .social-video-prev {
          left: 18px;
        }

        .social-video-next {
          right: 18px;
        }

        .social-video-nav.swiper-button-disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        @keyframes social-video-fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .social-video-anim {
          opacity: 0;
          transform: translateY(20px) scale(0.985);
          will-change: opacity, transform;
        }

        .social-video-anim.in-view {
          animation: social-video-fade-up 600ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--si, 0) * 100ms);
        }

        @media (max-width: 991px) {
          .social-video-card {
            height: 300px;
          }
        }

        @media (max-width: 767px) {
          .social-video-wrapper {
            padding: 0 0 2rem;
          }

          .social-video-container {
            padding: 0 8px;
          }

          .social-video-card {
            height: 300px;
          }

          .social-video-content {
            padding: 14px;
          }

          .social-video-play {
            width: 52px;
            height: 52px;
            font-size: 22px;
          }

          .social-video-arrow {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .social-video-nav {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .social-video-prev {
            left: 10px;
          }

          .social-video-next {
            right: 10px;
          }
        }
      `}</style>

      <section className="social-video-wrapper">
        <div className="social-media-heading social-media-anim">
            <h2>
              <span className="new-italic">Нашите най-нови</span> Instagram Reels
            </h2>
          </div>
        <div className="social-video-container">
          <button ref={prevRef} className="social-video-nav social-video-prev">
            ←
          </button>
          <button ref={nextRef} className="social-video-nav social-video-next">
            →
          </button>

          <div className="social-video-slider social-video-anim">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={2}
              loop={true}
              speed={900}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-video-card"
                  >
                    <img src={post.image} alt={`Reel ${post.id}`} />
                    <div className="social-video-overlay"></div>

                    <div className="social-video-content">
                      <div className="social-video-play">▶</div>
                      <div className="social-video-arrow">→</div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaGrid;