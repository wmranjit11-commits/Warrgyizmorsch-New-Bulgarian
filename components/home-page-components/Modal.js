"use client";
import React, {useState, useEffect} from "react";

const Modal = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Start the fade-in animation slightly after mount
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => onClose(), 250); // wait for animation to end
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflowY: "auto",
        padding: "20px",
        opacity: isAnimatingOut ? 0 : 1,
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "30px 25px",
          width: "90%",
          maxWidth: "520px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          transform: isVisible
            ? isAnimatingOut
              ? "scale(0.95)"
              : "scale(1)"
            : "scale(0.8)",
          opacity: isVisible && !isAnimatingOut ? 1 : 0,
          transition: "transform 0.25s ease, opacity 0.25s ease",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            fontSize: "24px",
            color: "#555",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;