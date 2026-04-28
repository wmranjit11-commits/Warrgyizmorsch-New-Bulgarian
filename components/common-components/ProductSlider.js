"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

// Card component
const Card = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function ProductSlider({ cardData, slidesPerView }) {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      // slidesPerView: 2,
      slidesPerView:
        slidesPerView == 4
          ? 2
          : slidesPerView == 3
          ? 1
          : slidesPerView == 2
          ? 1
          : slidesPerView,
    },
    // when window width is >= 640px
    640: {
      slidesPerView:
        slidesPerView == 4
          ? 2
          : slidesPerView == 3
          ? 1
          : slidesPerView == 2
          ? 1
          : slidesPerView,
    },
    // when window width is >= 768px
    768: {
      slidesPerView:
        slidesPerView == 4
          ? 3
          : slidesPerView == 3
          ? 2
          : slidesPerView == 2
          ? 1
          : slidesPerView,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: slidesPerView || 4,
    },
  };

  return (
    <>
      <Swiper
        // slidesPerView={breakpoints}
        breakpoints={breakpoints}
        spaceBetween={25}
        centerInsufficientSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        speed={1500}
        modules={[Autoplay]}
        style={{ padding: "0 10px 20px 10px", paddingBottom: "20px" }}
        className="mySwiper"
      >
        {cardData.map((html, index) => (
          <SwiperSlide key={index}>
            <Card html={html} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
