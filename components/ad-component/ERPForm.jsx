"use client";
import React, { useEffect, useRef, useState } from "react";
import SafeHtml from "../common-components/safeHtml";
import { ApiService } from "../../axios/http";
import { useRouter } from "next/navigation";

const ERPForm = ({ heading, highlight, button }) => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const router = useRouter();

  const [status, setStatus] = useState({ type: "", text: "" }); // {type: "success"|"error", text: ""}
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Animation: play only ONCE when enters viewport
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".nc-anim, .nc-feature"));
    animEls.forEach((el, i) => el.style.setProperty("--ci", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            // play once
            if (!el.dataset.animated) {
              el.classList.add("in-view");
              el.dataset.animated = "true";
            }
            io.unobserve(el); // stop watching so it never triggers again
          }
        });
      },
      { threshold: 0.25 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ✅ Helpers
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  // ✅ Validation
  const validateForm = () => {
    const form = formRef.current;
    const newErrors = {};

    const name = form["nc-full"].value.trim();
    const email = form["nc-email"].value.trim();
    const mobile = form["nc-mobile"].value.trim();

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

    // Optional: enforce 10 digits (India style). Change/remove if needed.
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

  // ✅ Mobile input: allow only digits while typing
  const handleMobileChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    e.target.value = onlyDigits.slice(0, 10); // limit to 10 digits (optional)
    handleInputChange("mobile");
  };

  // ✅ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validateForm()) return;

    const form = formRef.current;

    const payload = {
      name: form["nc-full"].value?.trim(),
      company_name: form["nc-company"].value?.trim(),
      email: form["nc-email"].value?.trim(),
      mobile_no: form["nc-mobile"].value?.trim(),
      designation: form["nc-role"].value?.trim(),
      company_size: form["nc-size"].value?.trim(),
      message: form["nc-msg"].value?.trim(),
      source: typeof window !== "undefined" ? window.location.href : "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      setLoading(true);

      const res = await ApiService.post("/warr-leads", payload);

      setStatus({
        type: "success",
        text: "Формата е изпратена успешно",
      });

      form.reset();
      setErrors({});

      router.push('/thank-you');  

    } catch (err) {
      console.error("API FAILED:", err);

      const apiErrors = err?.response.errors;

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
          text: "Моля, коригирайте маркираните полета.",
        });
      } else {
        setStatus({
          type: "error",
          text:
            err?.response?.message ||
            "Неуспешно изпращане. Моля, опитайте отново.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="erp-contact-form"
      ref={sectionRef}
      className="container new-contact-wrap"
      aria-labelledby="new-contact-title"
    >
      <div className="new-contact-container container">
        <div className="new-contact-blob left"></div>
        <div className="new-contact-blob right"></div>

        <div className="relative bg-white rounded-3xl p-9 w-full nc-anim">
          <div className="nc-anim">
            <h2 id="new-contact-title" className="new-contact-title nc-anim">
              <span className="new-contact-eyebrow new-italic">
                {highlight}
              </span>{" "}
              <SafeHtml as="span" html={heading} />
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="nc-anim">
              <div className="new-contact-grid">
                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-full"
                    className="new-contact-input"
                    type="text"
                    placeholder="Пълно име*"
                    onChange={() => handleInputChange("name")}
                  />
                  {errors.name && (
                    <div className="error-text">{errors.name}</div>
                  )}
                </div>

                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-company"
                    className="new-contact-input"
                    type="text"
                    placeholder="Име на фирмата"
                    onChange={() => handleInputChange("company")}
                  />
                </div>

                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-email"
                    className="new-contact-input"
                    type="email"
                    placeholder="Служебен имейл*"
                    onChange={() => handleInputChange("email")}
                  />
                  {errors.email && (
                    <div className="error-text">{errors.email}</div>
                  )}
                </div>

                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-mobile"
                    className="new-contact-input"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Мобилен номер*"
                    onChange={handleMobileChange}
                  />
                  {errors.mobile && (
                    <div className="error-text">{errors.mobile}</div>
                  )}
                </div>

                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-role"
                    className="new-contact-input"
                    type="text"
                    placeholder="Длъжност"
                    onChange={() => handleInputChange("role")}
                  />
                </div>

                <div className="new-contact-field nc-anim">
                  <input
                    id="nc-size"
                    className="new-contact-input"
                    type="text"
                    placeholder="Размер на фирмата"
                    onChange={() => handleInputChange("size")}
                  />
                </div>

                <div
                  className="new-contact-field nc-anim"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <textarea
                    id="nc-msg"
                    className="new-contact-textarea"
                    placeholder="Вашето съобщение"
                    onChange={() => handleInputChange("msg")}
                  ></textarea>
                  {errors.msg && <div className="error-text">{errors.msg}</div>}
                </div>
              </div>

              <button
                className="th-btn style-radius nc-anim"
                style={{ height: "45px", marginTop: "28px" }}
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Изпращане..."
                  : button
                  ? button
                  : "Консултация с експерт"}
              </button>

              {status.text && (
                <p
                  className="status-text"
                  style={{
                    marginTop: "12px",
                    color: status.type === "success" ? "#059669" : "#dc2626",
                    fontWeight: 600,
                  }}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPForm;
