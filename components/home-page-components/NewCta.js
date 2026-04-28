"use client";
import React, { useEffect, useRef, useState } from "react";
import { ApiService } from "../../axios/http";

const NewCta = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [status, setStatus] = useState("");
  const [subtitleText, setSubtitleText] = useState("Безплатно предложение днес!");
  const [loading, setLoading] = useState(false);

  const demoEmails = [
    "you@company.com",
    "hello@warrgyizmorsch.com",
    "info@example.org",
  ];

  // === Typewriter effect ===
  useEffect(() => {
    if (isPaused) return;

    const FULL = demoEmails[wordIdx];
    const TYPE_SPEED = 70;
    const DELETE_SPEED = 45;
    const HOLD_TIME = 900;
    const GAP_BEFORE_NEXT = 250;

    let t;
    if (!deleting) {
      if (typed.length < FULL.length) {
        t = setTimeout(
          () => setTyped(FULL.slice(0, typed.length + 1)),
          TYPE_SPEED
        );
      } else {
        t = setTimeout(() => setDeleting(true), HOLD_TIME);
      }
    } else {
      if (typed.length > 0) {
        t = setTimeout(
          () => setTyped(FULL.slice(0, typed.length - 1)),
          DELETE_SPEED
        );
      } else {
        t = setTimeout(() => {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % demoEmails.length);
        }, GAP_BEFORE_NEXT);
      }
    }

    return () => clearTimeout(t);
  }, [typed, deleting, wordIdx, isPaused]); // eslint-disable-line react-hooks/exhaustive-deps

  // === Pause placeholder animation on user interaction ===
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const onFocus = () => setIsPaused(true);
    const onBlur = () => setIsPaused(false);
    const onInput = () => setIsPaused(true);

    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    el.addEventListener("input", onInput);
    return () => {
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
      el.removeEventListener("input", onInput);
    };
  }, []);

  // === API Send Handler ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = inputRef.current?.value?.trim();
    if (!email) {
      setStatus("❌ Моля, въведете вашия имейл адрес.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      setStatus("❌ Моля, въведете валиден имейл адрес.");
      return;
    }

    const url = typeof window !== "undefined" ? window.location.href : "";

    // Minimal lead payload (email-only CTA)
    const payload = {
      name: "CTA User",
      company_name: "",
      designation: "",
      company_size: "",
      mobile_no: "",
      email,
      message: "Заявка за предложение (CTA)",
      source: url,
      page_url: url,
    };

    try {
      setLoading(true);
      setStatus("");

      await ApiService.post("/warr-leads", payload);

      // ✅ show temporary thank-you text in subtitle
      setSubtitleText("Благодарим ви! Скоро ще изпратим вашето предложение.");
      formRef.current?.reset();

      // revert subtitle after 4 seconds
      setTimeout(() => {
        setSubtitleText("Безплатно предложение днес!");
      }, 4000);
    } catch (error) {
      console.error("API FAILED:", error);
      setStatus(
        error?.response?.message || "❌ Неуспешно изпращане. Моля, опитайте отново по-късно."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .new-cta-container {
          background-color: var(--new-theme-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .new-cta-title {
          font-size: 80px;
          font-weight: 700;
          position: relative;
          margin-right: 35px;
        }

        @media (min-width: 1290px){
          .new-cta-container {
            padding: 40px;
          }

          .new-cta-title {
            font-size: 110px;
          }

          .new-cta-subtitle {
            font-size: 34px !important;
            padding: 4px !important;
          }

          .new-cta-input {
            height: 46px !important;
          }
          .new-cta-button {
            height: 46px !important;
            font-size: 18px !important;
          }
        }

        .new-cta-subtitle {
          position: absolute;
          font-size: 24px;
          background-color: var(--new-theme-color);
          font-weight: 400;
          bottom: 0px;
          right: 0;
          padding: 2px;
          white-space: nowrap;
        }

        .new-cta-form {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .new-cta-input {
          padding: 10px 15px;
          border-radius: 25px;
          height: 36px;
          border: none;
          outline: none;
          font-size: 14px;
          width: 250px;
          max-width: 100%;
        }

        .new-cta-button {
          background-color: black;
          color: white;
          border: none;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0;
          height: 36px;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          opacity: ${loading ? 0.7 : 1};
        }

        .new-cta-button:hover {
          background-color: #333;
        }

        .new-cta-button:disabled {
          cursor: not-allowed;
        }

        @keyframes ctaPulseOuter {
          0%   { transform: scale(1); box-shadow: 0 0 0px rgba(255,255,255,0.0); }
          50%  { transform: scale(1.08); box-shadow: 0 0 10px rgba(255,255,255,0.35); }
          100% { transform: scale(1); box-shadow: 0 0 0px rgba(255,255,255,0.0); }
        }
        @keyframes ctaPulseInner {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
        .cta-icon {
          animation: ctaPulseOuter 1.8s ease-in-out infinite;
          will-change: transform, box-shadow;
        }
        .cta-dot {
          animation: ctaPulseInner 1.8s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-icon, .cta-dot { animation: none !important; }
        }

        @media (max-width: 668px) {
          .new-cta-container {
            flex-direction: column;
            gap: 40px
          }

          .new-cta-title {
            font-size: 60px;
            margin-top: 10px;
            margin-right: 0;
          }

          .new-cta-subtitle {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="new-cta-container">
        <div className="new-cta-title">
          ЗАЯВКА
          <div className="new-cta-subtitle">{subtitleText}</div>
        </div>

        <form ref={formRef} className="new-cta-form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="email"
            placeholder={typed || "Имейл адрес"}
            className="new-cta-input"
            required
            disabled={loading}
          />
          <button type="submit" className="new-cta-button" disabled={loading}>
            <span
              className="cta-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "20px",
                width: "20px",
                marginRight: "8px",
                backgroundColor: "var(--new-theme-color)",
                borderRadius: "50%",
              }}
            >
              <span
                className="cta-dot"
                style={{
                  height: "8px",
                  width: "8px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "block",
                }}
              ></span>
            </span>
            {loading ? "Изпращане..." : "Изпратете ми предложение"}
          </button>
        </form>
      </div>

      {status && (
        <p
          style={{
            marginTop: "10px",
            color: status.startsWith("❌") ? "red" : "white",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {status}
        </p>
      )}
    </>
  );
};

export default NewCta;
