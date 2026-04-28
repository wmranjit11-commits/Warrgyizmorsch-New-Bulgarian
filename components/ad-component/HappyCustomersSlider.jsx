"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HappyCustomerSlider({data}) {
    const swiperRef = useRef(null);

    return (
      <section className="w-full py-6 md:py-12 bg-linear-to-r from-[#F6E8DA] via-[#F4F0ED] to-[#E8EDF6]">
        <div className="container relative">
          {/* HEADING */}
          <h2 className="text-2xl md:text-4xl font-medium! text-center text-black! mb-16">
            {data?.heading ? data.heading : "Voices of Our Happy Customer"}
          </h2>

          {/* SLIDER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, // 📱 mobile
              },
              768: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
          >
            {data?.data.map((item, idx) => (
              <SwiperSlide key={idx} className="flex">
                <div className="bg-white rounded-2xl p-8 flex flex-col h-[330px] w-full">
                  {/* HEADER */}
                  <div className="flex items-center gap-2 mb-4">
                    {/* PERFECT CIRCLE IMAGE */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* NAME + ROLE (NO EXTRA GAP) */}
                    <div className="leading-tight">
                      <h4 className="font-medium! text-lg! text-black!  m-0 p-0">
                        {item.name}
                      </h4>
                      <p className="text-xs! text-gray-500 m-0 p-0">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* MOBILE ARROWS ONLY */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button
              className="review-prev w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ‹
            </button>
            <button
              className="review-next w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl"
              onClick={() => swiperRef.current?.slideNext()}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    );
}
