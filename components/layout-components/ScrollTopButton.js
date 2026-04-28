"use client";
import React, { useState, useEffect } from "react";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const totalScroll = docHeight - winHeight;
      const scrollPosition = Math.min(scrollTop / totalScroll, 1);
      setIsVisible(scrollTop > 100);
      setScrollProgress(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: isVisible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    color: "#18336c",
    border: "2px solid var(--new-theme-color)", // Add border to circle
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: "9999999999",
  };

  const circleStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    stroke: "var(--new-theme-color)",
    strokeWidth: "4px",
    fill: "none",
    strokeDasharray: "157",
    strokeDashoffset: `${157 * (1 - scrollProgress)}`,
    transform: "rotate(-90deg)",
    borderRadius: "50%",
  };

  return (
    <button style={buttonStyle} onClick={scrollToTop}>
      <svg
        style={circleStyle}
        viewBox="0 0 50 50"
        fill="var(--new-theme-color)"
      >
        <circle cx="25" cy="25" r="23.5" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="var(--new-theme-color)"
        className="bi bi-arrow-up-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    </button>
  );
}

export default ScrollTopButton;
