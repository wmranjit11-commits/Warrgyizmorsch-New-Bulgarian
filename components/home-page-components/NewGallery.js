"use client";
import React from "react";

const NewGallery = () => {
  const images = {
    a: "assets/img/gallery/warr/img_1.jpeg",
    b: "assets/img/gallery/warr/img_2.jpeg",
    c: "assets/img/gallery/warr/img_3.jpeg",
    d: "assets/img/gallery/warr/img_4.jpeg", // wide
    e: "assets/img/gallery/warr/img_5.jpeg", // tall
    f: "assets/img/gallery/warr/img_6.jpeg", // panorama
    g: "assets/img/gallery/warr/img_7.jpeg", // tall (bottom-right)
  };
  const titleEyebrow = "Нашето пътуване";
  const title = "Празнуваме моменти, създаваме нови истории";

  return (
    <section className="new-gallery-wrap" aria-labelledby="new-gallery-title">
      <style>{`

        .new-gallery-wrap{ padding:56px 0; background:#fff; }

        /* Header */
        .new-gallery-eyebrow{
          color:font-weight:600; font-size:35px; margin:0 0 6px;
        }
        .new-gallery-title{
          margin:0 0 22px; font-size:32px; line-height:1.25; font-weight:500; color:black;
        }
        @media (min-width:1100px){ .new-gallery-title{ font-size:35px; } }

        /* Grid layout (desktop matches the screenshot composition) */
        .new-gallery-grid{
          display:grid; gap:18px;
          grid-template-columns: repeat(3, 1fr);
          grid-template-areas:
            "a b c"
            "d d e"
            "f f f"
            ". . g";
        }
        /* Tablet */
        @media (max-width: 980px){
          .new-gallery-grid{
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "a b"
              "c d"
              "e e"
              "f f"
              "g g";
          }
        }
        /* Mobile */
        @media (max-width: 620px){
          .new-gallery-grid{
            grid-template-columns: 1fr;
            grid-template-areas:
              "a" "b" "c" "d" "e" "f" "g";
          }
        }

        .new-gallery-item{
          position:relative; overflow:hidden; border-radius:14px;
          box-shadow:0 10px 24px rgba(0,0,0,.08);
          background:#eef2f7;
        }
        .new-gallery-img{
          width:100%; height:100%; display:block; object-fit:cover;
          transition: transform .35s ease;
        }
        .new-gallery-item:hover .new-gallery-img{ transform: scale(1.025); }

        /* Areas + aspect ratios to mimic screenshot */
        .new-gallery-a{ grid-area:a; aspect-ratio: 4 / 3; }
        .new-gallery-b{ grid-area:b; aspect-ratio: 4 / 3; }
        .new-gallery-c{ grid-area:c; aspect-ratio: 4 / 3; }

        .new-gallery-d{ grid-area:d; aspect-ratio: 16 / 9; }  /* wide */
        .new-gallery-e{ grid-area:e; aspect-ratio: 3 / 4; }   /* tall */

        .new-gallery-f{ grid-area:f; aspect-ratio: 21 / 9; }  /* panorama */
        .new-gallery-g{ grid-area:g; aspect-ratio: 3 / 4; }   /* tall bottom-right */
      `}</style>

      <div className="container">
        <p className="new-gallery-eyebrow new-italic">{titleEyebrow}</p>
        <h2 id="new-gallery-title" className="new-gallery-title">
          {title}
        </h2>
        <div style={{ width: "100%", height: "100%" }}>
          <a
            href="https://www.instagram.com/warrgyiz_morsch_workculture?igsh=Z2tjbGoyN3hpemx4&utm_source=qr"
            target="blank"
          >
            <img
              src="/assets/new-img/newgallery.webp"
              style={{ width: "100%", height: "100%" }}
              alt="gallery grid"
            />
          </a>
        </div>

        {/* <div className="new-gallery-grid">
          <figure className="new-gallery-item new-gallery-a">
            <img
              className="new-gallery-img"
              src={images.a}
              alt="Team moment 1"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-b">
            <img
              className="new-gallery-img"
              src={images.b}
              alt="Team moment 2"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-c">
            <img
              className="new-gallery-img"
              src={images.c}
              alt="Team moment 3"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-d">
            <img
              className="new-gallery-img"
              src={images.d}
              alt="Team dinner celebration"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-e">
            <img
              className="new-gallery-img"
              src={images.e}
              alt="Office activity"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-f">
            <img
              className="new-gallery-img"
              src={images.f}
              alt="Outdoor group photo"
            />
          </figure>

          <figure className="new-gallery-item new-gallery-g">
            <img
              className="new-gallery-img"
              src={images.g}
              alt="Event snapshot"
            />
          </figure>
        </div> */}
      </div>
    </section>
  );
};

export default NewGallery;
