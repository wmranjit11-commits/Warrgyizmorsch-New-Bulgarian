"use client";
import React, { useEffect, useRef } from "react";
import SafeHtml from "../common-components/safeHtml";
import { resolveCityText } from "../../utils/functions";

const Unique_section = ({ data, cityName, countryName }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!cardRefs.current.length) return;

    const setEqualHeight = () => {
      cardRefs.current.forEach((card) => {
        if (card) card.style.height = "auto";
      });

      const maxHeight = Math.max(
        ...cardRefs.current.map((card) => card?.offsetHeight || 0),
      );

      cardRefs.current.forEach((card) => {
        if (card) card.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => window.removeEventListener("resize", setEqualHeight);
  }, [data]);

  if (!data) return null;

  return (
    <section className="unique-section py-5">
      <div className="container py-3">
        <SafeHtml
          as="h2"
          className="new-section-title text-(--new-theme-color)!"
          html={resolveCityText(data.heading, cityName, countryName)}
        />
        <SafeHtml
          as="p"
          className="unique-section-desc text-center"
          html={resolveCityText(data.description, cityName, countryName)}
        />

        <div className="unique-card-grid">
          {data.cards.map((item, index) => (
            <div
              className="unique-service-card"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <span className="unique-hover-layer unique-hover-primary"></span>

              <SafeHtml
                as="h3"
                className="unique-card-title"
                html={resolveCityText(item.title, cityName, countryName)}
              />
              <SafeHtml
                as="p"
                className="unique-card-text"
                html={resolveCityText(item.description, cityName, countryName)}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .unique-section{
          background:white;
          padding:5rem 0;
        }

        .unique-container{
          max-width:1200px;
          margin:auto;
          text-align:center;
        }

        /* FIXED H2 */
        .unique-section-heading{
          color:var(--new-theme-color);
          font-size:2.1rem;          
          line-height:1.25;         
          max-width:850px;           
          margin:0 auto;             
          word-break:break-word;     
        }

        .unique-section-desc{
          color:black;
          max-width:900px;
          margin:.75rem auto 2rem;
          font-size:1rem;
        }

        .unique-card-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1.5rem;
        }

        .unique-service-card{
          position:relative;
          padding:1.8rem;
          border-radius:14px;
          overflow:hidden;
          text-align:left;
          isolation:isolate;
          border:2px solid #dbeafe;
          background:linear-gradient(to right, #eaf0fb, #ffffff);
          transition:transform .5s cubic-bezier(.4,0,.2,1);
        }

        .unique-card-title,
        .unique-card-text{
          position:relative;
          z-index:4;
          transition:color .35s ease;
        }

        .unique-card-title{
          color:var(--new-theme-color);
          font-size:1.05rem;
          margin-bottom:.5rem;
          font-weight:700;

          line-height:1.35;
          min-height:2.7em; 
        }

        .unique-card-text{
          color:#334155;
          font-size:.95rem;
          line-height:1.55;
        }

        .unique-hover-layer{
          position:absolute;
          inset:0;
          z-index:1;
          transition:transform .65s cubic-bezier(.4,0,.2,1);
        }

        .unique-hover-primary{
          background:linear-gradient(
            135deg,
            color-mix(in srgb, var(--new-theme-color) 92%, transparent),
            color-mix(in srgb, var(--new-theme-color) 55%, transparent)
          );
          transform:translate(110%,110%);
        }

        .unique-service-card:hover .unique-hover-primary{
          transform:translate(0,0);
        }

        .unique-service-card:hover .unique-card-title,
        .unique-service-card:hover .unique-card-text{
          color:#ffffff;
        }

        .unique-service-card:hover{
          transform:translateY(-4px);
        }

        @media(max-width:1024px){
          .unique-card-grid{
            grid-template-columns:repeat(2,1fr);
          }
    
          .unique-section-heading{
            font-size:1.9rem;
            max-width:760px;
          }
        }

        /* MOBILE: MAIN HEADING + DESC + CARDS ALL LEFT */
        @media(max-width:640px){
          .unique-card-grid{
            grid-template-columns:1fr;
          }
          .unique-service-card{
            height:auto !important;
          }

          .unique-section-heading,
          .unique-section-desc{
            text-align:left !important;
            margin-left:0 !important;
            margin-right:0 !important;
          }

          .unique-section-heading{
            font-size:1.6rem;
            max-width:100%;
          }

          .unique-card-title,
          .unique-card-text{
            text-align:left;
          }
        }
      `}</style>
    </section>
  );
};

export default Unique_section;
