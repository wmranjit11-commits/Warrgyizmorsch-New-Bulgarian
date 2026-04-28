"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import SafeHtml from "../common-components/safeHtml";

const Handle_Largedata_section = ({ LargeData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index);

    if (window.innerWidth <= 990 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      // Offset scroll after the initial smooth scroll
      setTimeout(() => {
        const yOffset = -100; // Adjust this value to match your layout (e.g. heading height or sticky header)
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.scrollY +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100); // Delay slightly after scrollIntoView
    }
  };

  return (
    <section className="data-section">
      <div className="container">
        <SafeHtml
          as="h2"
          className="new-section-title text-left!"
          html={LargeData?.heading}
        />
        <SafeHtml as="div" html={LargeData?.description} />

        <div className="responsive-container">
          <div className="sidebar">
            {LargeData?.services?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`service-button snap-item hover-animate ${
                  activeIndex === index ? "active-button" : ""
                }`}
              >
                <span
                  className="icon-wrapper"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
                <span className="button-text">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="content-wrap" ref={contentRef}>
            <div className="content fade-slide">
              <h3 className="content-title">
                {LargeData?.services[activeIndex].link ? (
                  <Link href={LargeData?.services[activeIndex].link}>
                    <SafeHtml
                      as="span"
                      html={LargeData?.services[activeIndex].title}
                      className={"new-section-title"}
                    />
                  </Link>
                ) : (
                  <SafeHtml
                    as="span"
                    html={LargeData?.services[activeIndex].title}
                    className={"new-section-title"}
                  />
                )}
              </h3>
              <div className="content-title-border"></div>
              <div className="content-text">
                {Array.isArray(LargeData?.services[activeIndex]?.content) ? (
                  LargeData?.services[activeIndex].content.map((item, i) =>
                    typeof item === "string" ? (
                      <SafeHtml key={i} as="p" html={item} />
                    ) : (
                      <Link
                        key={i}
                        href={item.link}
                        style={{
                          color: "blue",
                          fontWeight: "bold",
                        }}
                      >
                        {item.text}
                      </Link>
                    ),
                  )
                ) : (
                  <SafeHtml
                    as="div"
                    html={LargeData?.services[activeIndex].content}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .data-section {
          padding: 4rem 0.5rem;
          background-color: #f0f4fa;
          font-family: 'Segoe UI', sans-serif;
        }

        .data-heading {
          color: #18336c;
          margin-bottom: 0.5rem;
        }

        .responsive-container {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .sidebar {
          flex: 1 1 250px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 450px;
          overflow-y: scroll;
          padding-right: 0.5rem;
        }

        .sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background-color: #18336c;
          border-radius: 4px;
        }

        .service-button {
          background: #fff;
          border: 2px solid #18336c;
          color: #18336c;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
          display: inline-flex;
          flex: 1;
        }

        .button-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          flex: 1;
        }

        .service-button:hover{
          background: linear-gradient(90deg, #18336c 0%, #2f5597 100%);
          color: white;
        }

        .active-button {
          background: linear-gradient(90deg, #18336c 0%, #2f5597 100%);
          color: #fff;
          box-shadow: 0 4px 12px rgba(24, 51, 108, 0.2);
        }

        .icon-wrapper {
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
        }

        .content-wrap {
          flex: 2 1 600px;
        }

        .content {
          background-color: #fff;
          padding: 2rem;
          height: 100%;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .content-title {
          margin-bottom: 0.2rem;
          color: #18336c;
        }

        .content:hover .content-title-border{
          width: 50%;
        }

        .content-title-border{
          border-bottom: 5px solid #18336c;
          width:30%;
          margin-bottom: 1rem;
          transition: width 0.3s ease;
        }

        .content-text {
          color: #333;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-wrapper:hover {
          animation: wiggle 0.4s ease-in-out;
        }

        .fade-slide {
          animation: fadeSlide 0.4s ease;
        }

        .scroll-snap-x {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 0.75rem;
          scroll-snap-type: x mandatory;
          padding-bottom: 1rem;
        }

        .scroll-snap-x::-webkit-scrollbar {
          height: 6px;
        }

        .scroll-snap-x::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }

        .snap-item {
          scroll-snap-align: start;
          flex: 0 0 auto;
        }

        /* 👇 Disable scroll on screens 990px or smaller */
       @media (max-width: 990px) {
        .responsive-container {
          flex-direction: column;
        }

        .sidebar {
          flex-direction: column;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 0.5rem;
        }

        .service-button {
          min-width: 160px;
          flex: 0 0 auto;
        }

        .scroll-snap-x {
          flex-wrap: nowrap;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }

        .snap-item {
          scroll-snap-align: start;
        }

        .content-wrap {
          flex: none;
        }
      }

      @media (max-width: 410px) {
        .service-button{
          max-width: 300px;
        }
      }
      @media (max-width: 375px){
        .service-button{
          max-width:250px
        }
      }

  `}</style>
    </section>
  );
};

export default Handle_Largedata_section;
