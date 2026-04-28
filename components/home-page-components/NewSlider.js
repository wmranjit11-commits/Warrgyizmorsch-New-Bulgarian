"use client";
import React from "react";

const technologies = [
  { name: "comforttransfers", image: "/assets/new-img/slider-comfort.webp" },
  { name: "aloenaturals", image: "/assets/new-img/slider-aloe.webp" },
  { name: "flowerbear", image: "/assets/new-img/slider-flower.webp" },
  { name: "virazo", image: "/assets/new-img/slider-virazo.webp" },
  { name: "londonstreet", image: "/assets/new-img/slider-londonstreet.webp" },
  { name: "wts", image: "/assets/new-img/slider-wts.webp" },
];

const NewSlider = () => {
  const looped = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <>
      {/* 👇 note the "global" here */}
      <style jsx global>{`
        .new-technology-wrapper {
          background: var(--new-theme-color);
          overflow: hidden;
        }

        .marquee-row {
          width: 100%;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
          margin: 20px 0;
        }

        .marquee-track {
          display: flex;
          gap: 50px;
          animation: marquee-left 25s linear infinite;
        }

        /* your JSX uses "left-right", so selector must match that */
        .left-right .marquee-track {
          animation: marquee-right 25s linear infinite;
        }

        .tech-card {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
        }

        .tech-img {
          width: 100px;
          height: 80px;
          margin-bottom: 5px;
        }

        .tech-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: filter 0.3s ease;
        }

        .tech-img img:hover {
          filter: none;
        }

        .tech-title {
          font-size: 0.85rem;
          font-weight: 500;
          color: #000;
          text-align: center;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .marquee-track {
            gap: 30px;
          }

          .tech-card {
            width: 100px;
          }

          .tech-img {
            width: 100px;
            height: 70px;
          }

          .tech-title {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <section className="new-technology-wrapper">
        <div>
          <div className="marquee-row left-right">
            <div className="marquee-track">
              {looped.map((tech, index) => (
                <div className="tech-card" key={`top-${index}`}>
                  <div className="tech-img">
                    <img src={tech.image} alt={tech.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSlider;
