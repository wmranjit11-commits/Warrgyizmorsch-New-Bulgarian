"use client";
import React, { useEffect, useRef, useState } from "react";
import { ApiService } from "../../axios/http";

const NewContact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState({ type: "", text: "" }); // success|error
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // === Animation Logic (unchanged) ===
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

    if (mobile && !/^\d+$/.test(mobile)) {
      newErrors.mobile = "Мобилният номер трябва да съдържа само цифри.";
    }

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

  // === Submit Handler (API like ERPForm) ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validateForm()) return;

    const form = formRef.current;

    const url = typeof window !== "undefined" ? window.location.href : "";

    const payload = {
      name: form["nc-full"]?.value?.trim(),
      company_name: form["nc-company"]?.value?.trim(),
      email: form["nc-email"]?.value?.trim(),
      mobile_no: form["nc-mobile"]?.value?.trim(),
      designation: form["nc-role"]?.value?.trim(),
      company_size: form["nc-size"]?.value?.trim(),
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
          if (key === "company_name") newErr.company = apiErrors[key][0];
          if (key === "designation") newErr.role = apiErrors[key][0];
          if (key === "company_size") newErr.size = apiErrors[key][0];
        });

        setErrors((prev) => ({ ...prev, ...newErr }));
        setStatus({
          type: "error",
          text: "Моля, коригирайте подчертаните полета.",
        });
      } else {
        setStatus({
          type: "error",
          text: err?.response?.message || "Неуспешно изпращане. Моля, опитайте отново.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // === JSX ===
  return (
    <section
      ref={sectionRef}
      className="new-contact-wrap"
      aria-labelledby="new-contact-title"
    >
      <div className="new-contact-container container">
        <div className="new-contact-blob left"></div>
        <div className="new-contact-blob right"></div>

        <div className="new-contact-card nc-anim">
          {/* LEFT: FORM */}
          <div className="nc-anim">
            <h2 id="new-contact-title" className="new-contact-title nc-anim">
              <span className="new-contact-eyebrow new-italic">
                Имате идея?
              </span>{" "}
              Нека я <br />
              изградим заедно!
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="nc-anim">
              <div className="new-contact-grid">
                {[
                  {
                    id: "nc-full",
                    ph: "Пълно име*",
                    name: "name",
                    type: "text",
                  },
                  {
                    id: "nc-company",
                    ph: "Име на компанията",
                    name: "company",
                    type: "text",
                  },
                  {
                    id: "nc-email",
                    ph: "Служебен имейл*",
                    name: "email",
                    type: "email",
                  },
                  {
                    id: "nc-mobile",
                    ph: "Мобилен номер*",
                    name: "mobile",
                    type: "tel",
                  },
                  {
                    id: "nc-role",
                    ph: "Длъжност",
                    name: "role",
                    type: "text",
                  },
                  {
                    id: "nc-size",
                    ph: "Размер на компанията",
                    name: "size",
                    type: "text",
                  },
                ].map((f) => (
                  <div key={f.id} className="new-contact-field nc-anim">
                    <input
                      id={f.id}
                      name={f.id} // ✅ important so form["nc-full"] works
                      className="new-contact-input"
                      type={f.type}
                      placeholder={f.ph}
                      inputMode={f.id === "nc-mobile" ? "numeric" : undefined}
                      onChange={(e) => {
                        if (f.id === "nc-mobile") return handleMobileChange(e);
                        handleInputChange(f.name);
                      }}
                    />
                    {errors[f.name] && (
                      <div className="error-text">{errors[f.name]}</div>
                    )}
                  </div>
                ))}

                <div
                  className="new-contact-field nc-anim"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <textarea
                    id="nc-msg"
                    name="nc-msg"
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
                {loading ? "Изпращане..." : "Свържете се с експерт"}
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

          {/* RIGHT: FEATURES */}
          <aside className="new-contact-side">
            <h3 className="nc-anim">Вашият растеж. Нашата дигитална експертиза</h3>
            <div className="new-contact-features">
              {[
                {
                  t: "Иновациите на първо място",
                  d: "Нашият фокус върху иновациите ни позволява да действаме по дръзки идеи. Стремим се да разработваме специални и конкурентни решения, които не само решават настоящите проблеми, но и носят устойчиви ефекти.",
                },
                {
                  t: "Съвместен дизайн",
                  d: "Знаем, че успехът расте с работата в екип. Чрез нашето техническо ноу-хау и вашата визия ние създаваме решения, които наистина отразяват вашите цели.",
                },
                {
                  t: "Технологии на бъдещето",
                  d: "Оставаме гъвкави с модерни рамки, инструменти и мащабируеми решения, поддържайки вашия продукт актуален за бъдещето.",
                },
                {
                  t: "Цялостна поддръжка",
                  d: "От началото до края предлагаме пълна поддръжка — осигурявайки висока производителност, актуализации и дългосрочен успех.",
                },
              ].map((f, i) => (
                <div key={i} className="nc-feature">
                  <div className="new-contact-feature-title">{f.t}</div>
                  <p className="new-contact-feature-desc">{f.d}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Inline Error Styling */}
      <style>{`
        .error-text {
          color: #dc2626;
          font-size: 11px;
          margin-top: 3px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default NewContact;
