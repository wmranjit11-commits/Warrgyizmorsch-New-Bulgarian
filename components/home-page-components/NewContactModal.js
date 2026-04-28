"use client";
import React, { useRef, useState } from "react";
import { ApiService } from "../../axios/http";

const NewContactModal = ({ title = "Вземете оферта" }) => {
  const formRef = useRef(null);

  const [status, setStatus] = useState({ type: "", text: "" }); // success|error
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const words = title.split(" ");
  const allExceptLast = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  // === Validation ===
  const validateForm = () => {
    const form = formRef.current;
    const newErrors = {};

    const name = form["nc-full"]?.value?.trim();
    const email = form["nc-email"]?.value?.trim();
    const mobile = form["nc-mobile"]?.value?.trim();

    if (!name) newErrors.name = "Името е задължително.";
    if (!email) newErrors.email = "Имейлът е задължителен.";
    if (!mobile) newErrors.mobile = "Мобилният номер е задължителен.";

    if (email && !emailPattern.test(email)) {
      newErrors.email = "Моля, въведете валиден имейл адрес.";
    }

    // Mobile: digits only
    if (mobile && !/^\d+$/.test(mobile)) {
      newErrors.mobile = "Мобилният номер трябва да съдържа само цифри.";
    }

    // Optional: enforce 10 digits
    if (mobile && /^\d+$/.test(mobile) && mobile.length !== 10) {
      newErrors.mobile = "Мобилният номер трябва да бъде 10 цифри.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  // ✅ Mobile input: digits only while typing
  const handleMobileChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    e.target.value = onlyDigits.slice(0, 10);
    handleInputChange("mobile");
  };

  // === Submit Handler ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validateForm()) return;

    const form = formRef.current;

    const url = typeof window !== "undefined" ? window.location.href : "";

    const payload = {
      name: form["nc-full"]?.value?.trim(),
      email: form["nc-email"]?.value?.trim(),
      mobile_no: form["nc-mobile"]?.value?.trim(),
      message: form["nc-msg"]?.value?.trim(),
      source: url,
      page_url: url,
    };

    try {
      setLoading(true);

      await ApiService.post("/warr-leads", payload);

      setStatus({ type: "success", text: "Формата е изпратена успешно" });

      form.reset();
      setErrors({});
    } catch (err) {
      console.error("API FAILED:", err);

      const apiErrors = err?.response?.errors;

      if (apiErrors) {
        const newErr = {};

        Object.keys(apiErrors).forEach((key) => {
          if (key === "name") newErr.name = apiErrors[key][0];
          if (key === "email") newErr.email = apiErrors[key][0];
          if (key === "mobile_no") newErr.mobile = apiErrors[key][0];
          if (key === "message") newErr.msg = apiErrors[key][0];
        });

        setErrors((prev) => ({ ...prev, ...newErr }));
        setStatus({
          type: "error",
          text: "Моля, поправете подчертаните полета.",
        });
      } else {
        setStatus({
          type: "error",
          text:
            err?.response?.message || "Неуспешно изпращане. Моля, опитайте отново по-късно.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: "600", color: "black" }}>
        {allExceptLast} <span className="new-italic">{lastWord}</span>
      </h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="new-contact-grid">
          <div className="new-contact-field">
            <input
              id="nc-full"
              name="nc-full"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="text"
              placeholder="Пълно име*"
              onChange={() => handleInputChange("name")}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="new-contact-field">
            <input
              id="nc-email"
              name="nc-email"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="email"
              placeholder="Имейл*"
              onChange={() => handleInputChange("email")}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="new-contact-field">
            <input
              id="nc-mobile"
              name="nc-mobile"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="tel"
              inputMode="numeric"
              placeholder="Мобилен номер*"
              onChange={handleMobileChange}
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
          </div>

          <div className="new-contact-field" style={{ gridColumn: "1 / -1" }}>
            <input
              id="nc-msg"
              name="nc-msg"
              className="new-contact-textarea"
              style={{ marginTop: "0", paddingTop: "0", height: "45px" }}
              placeholder="Вашата цел"
              onChange={() => handleInputChange("msg")}
            />
            {errors.msg && <p className="error-text">{errors.msg}</p>}
          </div>
        </div>

        <button
          className="th-btn style-radius"
          style={{ marginTop: "20px"}}
          type="submit"
          disabled={loading}
        >
          {loading ? "Изпращане..." : "Изпрати →"}
        </button>

        {status.text && (
          <p
            style={{
              marginTop: "10px",
              color: status.type === "success" ? "green" : "red",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {status.text}
          </p>
        )}
      </form>

      {/* Inline Error Styling */}
      <style>{`
        .error-text {
          color: red;
          font-size: 11px;
          margin-top: 3px;
        }
      `}</style>
    </div>
  );
};

export default NewContactModal;
