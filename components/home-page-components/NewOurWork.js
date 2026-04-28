"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

// Swiper core CSS (required by Swiper)
// If you already import these globally, you can remove these lines here.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const items = [
  {
    title: "Aloe Naturals",
    img: "/assets/new-img/work_aloe.webp",
    route: "/case-study/aloe-naturals",
    tagsTop: ["Брандиране", "Уебсайт"],
    tagsBottom: ["Електронна търговия"],
  },
  {
    title: "ITMSU",
    img: "/assets/new-img/itms.webp",
    route: "/case-study/itmsu",
    tagsTop: ["Laravel", "Python", "Flask"],
    tagsBottom: ["Cloudflare", "JavaScript", "CSS"],
  },
  {
    title: "WTS Visa",
    img: "/assets/new-img/work_wts.webp",
    route: "/case-study/wts-visa",
    tagsTop: ["Уеб разработка", "CRM"],
    tagsBottom: ["laravel", "UI/UX дизайн"],
  },
  {
    title: "Virazo Furniture",
    img: "/assets/new-img/virazo_case.png",
    route: "/case-study/virazo-furniture",
    tagsTop: ["WordPress", "WooCommerce"],
    tagsBottom: ["JavaScript", "CSS"],
  },
  {
    title: "Plate Master",
    img: "/assets/new-img/numberPlate_case.webp",
    route: "/case-study/plate-master",
    tagsTop: ["NextJS", "ThreeJs"],
    tagsBottom: ["UI/UX дизайн", "Canvas"],
  },
  // {
  //   title: "Iron Streets  ",
  //   img: "/assets/new-img/numberPlate_case.webp",
  //   route: "/case-study/ironstreets",
  //   tagsTop: ["NextJS", "ThreeJs"],
  //   tagsBottom: ["UI/UX Design", "Canvas"],
  // },
];

const NewOurWork = () => {
  return (
    <section className="new-work-wrap" aria-labelledby="new-work-title">
      <style>{`
        :root {
          --nw-card:#ffffff;
          --nw-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);

        }
        .new-work-wrap{ padding:56px 0; background:#fff; }
        .new-work-container{ position:relative; }

        /* Header */
        .new-work-eyebrow{ font-weight:600; font-size:35px; margin:0 6px 6px 0; display:inline-block; }
        .new-work-title{ font-size:35px; line-height:1.2; font-weight:600; margin:0 0 18px; color:black; display:inline-block; }
        
        /* Slider nav buttons */
        .new-work-nav{
          display:flex; gap:10px; margin-left:auto;
        }
        .new-work-nav button{
          width:38px; height:38px; border-radius:999px; border:0; background:#f1f4fa;
          box-shadow: var(--nw-shadow); cursor:pointer; display:grid; place-items:center;
        }
        .new-work-top{ display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }

        /* Card */
        .new-work-card{
          position:relative; height:360px; border-radius:22px; overflow:hidden; box-shadow: var(--nw-shadow); background:var(--nw-card);
        }

        @media (min-width: 1290px){
          .new-work-card{
            height: 430px;
          }
        }

        .new-work-img{
          width:100%; height:100%; display:block; transition:transform .45s ease;
        }
        .new-work-img img{
          object-fit:cover;
          height: 100%;
          width: 100%;
        }

        .new-work-card:hover .new-work-img{ transform: scale(1.03); }

        .new-work-card:hover .new-work-chip{ background: #fff; transform: scale(1.05) }

        .new-work-card:hover .new-work-topbar{background: #fff; transform: scale(1.05)}

        /* Top bar with title + arrow */
        .new-work-topbar{
          position:absolute; left:16px; right:16px; top:16px; display:flex; align-items:center; justify-content:space-between;
          background:#C3C3C399; backdrop-filter: blur(4px); border-radius:25px; padding:10px 12px; transition: all 0.5s ease-in-out;
        }
        .new-work-name{ font-weight:500; color:black; font-size:18px; }
        .new-work-arrow{
          width:26px; height:26px; border-radius:999px; background:none; display:grid; place-items:center; color:black;
        }

        /* Chips */
        .new-work-chips{
          position:absolute; left:14px; right:14px; bottom:14px; display:flex; flex-wrap:wrap; gap:8px; 
        }
        .new-work-chip{
          background:#F0F0F099; backdrop-filter: blur(2px); transition: all 0.5s ease-in-out; border-radius:999px; padding:6px 10px; font-size:12px; font-weight:500; color:#2d3753; box-shadow: 0 6px 14px rgba(0,0,0,.12);
        }
        .new-work-chips .split{ width:100%; height:0; }

        /* Swiper tweaks */
        .new-work-swiper{ padding:8px 4px 8px 2px; }
        .new-work-slide{ height:auto; } /* let card control height */

        @media (max-width: 700px){
          .new-work-card{ height:320px; }
          .new-work-title{ font-size:28px; }
        }
      `}</style>

      <div className="new-work-container container">
        <div className="new-work-top">
          <div>
            <h2 id="new-work-title" className="new-work-title">
              <span className="new-work-eyebrow new-italic">Нашата работа</span> в
              действие
            </h2>
          </div>

          {/* custom navigation buttons */}
          <div className="new-work-nav">
            <button className="new-work-prev" aria-label="Previous">
              {/* left chevrons */}
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
            <button className="new-work-next" aria-label="Next">
              {/* right chevrons */}
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

        <Swiper
          className="new-work-swiper"
          modules={[Navigation, FreeMode]}
          freeMode={true}
          spaceBetween={18}
          slidesPerView={1.4}
          breakpoints={{
            450: { slidesPerView: 2.2 },
            640: { slidesPerView: 2.4 },
            820: { slidesPerView: 3.1 },
            1024: { slidesPerView: 3.3 },
            1280: { slidesPerView: 3.6 },
          }}
          navigation={{
            prevEl: ".new-work-prev",
            nextEl: ".new-work-next",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx} className="new-work-slide">
              <Link href={item?.route}>
                <article className="new-work-card">
                  <div className="new-work-img">
                    <img className="" src={item.img} alt={item.title} />
                  </div>

                  <div className="new-work-topbar">
                    <div className="new-work-name">{item.title}</div>
                    <div className="new-work-arrow" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* arrow points up-right */}
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </div>
                  </div>

                  {/* chips */}
                  <div className="new-work-chips">
                    {item.tagsTop.map((t, i) => (
                      <span key={`top-${idx}-${i}`} className="new-work-chip">
                        {t}
                      </span>
                    ))}
                    <span className="split" />
                    {item.tagsBottom.map((t, i) => (
                      <span key={`bot-${idx}-${i}`} className="new-work-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewOurWork;
