import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Technology = () => {
  const technologies = [
    { name: "React", image: "/assets/img/skills/react.png" },
    { name: "Angular", image: "/assets/img/skills/angular.svg" },
    { name: "JavaScript", image: "/assets/img/skills/js.svg" },
    { name: "Node.js", image: "/assets/img/skills/node.svg" },
    { name: "Laravel", image: "/assets/img/skills/laravel.svg" },
    { name: "Native", image: "/assets/img/skills/native.png" },
    { name: "PHP", image: "/assets/img/skills/php.png" },
    { name: "HTML", image: "/assets/img/skills/html.svg" },
    { name: "CSS", image: "/assets/img/skills/css.svg" },
    { name: "Tailwind", image: "/assets/img/skills/tailwind.svg" },
    { name: "Python", image: "/assets/img/skills/py.svg" },
    { name: "Django", image: "/assets/img/skills/django.svg" },
    { name: "Dart", image: "/assets/img/skills/dart.svg" },
    { name: "Flutter", image: "/assets/img/skills/flutter.svg" },
    { name: "SQL", image: "/assets/img/skills/sql.svg" },
    { name: "MongoDB", image: "/assets/img/skills/db.svg" },
    { name: "Shopify", image: "/assets/img/skills/shopify.png" },
  ];

  return (
    <div className="technology-wrapper">
      <div className="container">
        <h2 className="text-center mb-5">Нашите технологии</h2>
        <div className="swiper-container">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={2000}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
              1280: { slidesPerView: 5, spaceBetween: 40 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {technologies.concat(technologies).map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="tech-card">
                  <div className="tech-img">
                    <img src={tech.image} alt={tech.name} />
                  </div>
                  <h3 className="tech-title">{tech.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .technology-wrapper {
          background-color: #d4d4d8;
          padding: 4rem 1rem;
          overflow: hidden;
        }

        .swiper-container {
          position: relative;
        }

        .tech-card {
          background-color: #18181b;
          border-radius: 0.5rem;
          height: 200px;
          margin: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0px 0px 10px 5px rgba(59, 130, 246, 0.5),
                      0px 0px 15px 5px rgba(0, 0, 0, 0.7);
          transition: box-shadow 0.3s ease;
        }

        .tech-card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
        }

        .tech-img {
          width: 100px;
          height: 100px;
          margin-bottom: 1rem;
        }

        .tech-img img {
          height: 100%;
          width: 100%;
          object-fill: fill;
        }

        .tech-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
        }

        @media (max-width: 768px) {
          .tech-card {
            height: 150px;
          }

          .tech-img {
            width: 70px;
            height: 70px;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Technology;
