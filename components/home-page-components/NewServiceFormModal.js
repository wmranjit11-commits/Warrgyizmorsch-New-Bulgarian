"use client";
import React, { useRef, useState } from "react";
import { serviceCardData } from "../../data/All_Services_Data/allServices2";
import Select from "react-select";
import { ApiService } from "../../axios/http";

const NewServiceFormModal = ({ title = "Вземете оферта" }) => {
  const formRef = useRef(null);

  const [status, setStatus] = useState({ type: "", text: "" }); // success|error
  const [errors, setErrors] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const words = title.split(" ");
  const allExceptLast = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  const serviceCategories = serviceCardData
    .flatMap((item) => item.children || [])
    .map((child) => child.name);

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  // === Validation ===
  const validateForm = () => {
    const form = formRef.current;
    const newErrors = {};

    const name = form["nc-full"]?.value?.trim();
    const email = form["nc-email"]?.value?.trim();
    const mobile = form["nc-mobile"]?.value?.trim();
    const msg = form["nc-msg"]?.value?.trim();

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

    if (selectedCategories.length === 0) {
      newErrors.categories = "Изберете поне една категория.";
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
    e.target.value = onlyDigits.slice(0, 10);
    handleInputChange("mobile");
  };

  // === Submit Handler ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!validateForm()) return;

    const form = formRef.current;

    const payload = {
      name: form["nc-full"]?.value?.trim(),
      email: form["nc-email"]?.value?.trim(),
      mobile_no: form["nc-mobile"]?.value?.trim(),
      message: form["nc-msg"]?.value?.trim(),
      service_categories: selectedCategories.join(", "), 
      source: typeof window !== "undefined" ? window.location.href : "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      setLoading(true);

      await ApiService.post("/warr-leads", payload);

      setStatus({ type: "success", text: "Формата е изпратена успешно" });

      form.reset();
      setSelectedCategories([]);
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
          if (key === "service_categories")
            newErr.categories = apiErrors[key][0];
        });

        setErrors((prev) => ({ ...prev, ...newErr }));
        setStatus({
          type: "error",
          text: "Моля, поправете подчертаните полета.",
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

  const categoryOptions = serviceCategories.map((cat) => ({
    value: cat,
    label: cat,
  }));

  const customSelectStyles = {
    control: (base, state) => {
      const selectedCount = state.selectProps.value
        ? state.selectProps.value.length
        : 0;

      return {
        ...base,
        background: "transparent",
        border: "none",
        borderBottom: state.isFocused
          ? "2px solid var(--new-theme-color)"
          : "1px solid #5B5B5B",
        borderRadius: 0,
        boxShadow: "none",
        paddingLeft: 0,
        paddingRight: 0,
        minHeight: "54px",
        height: selectedCount > 1 ? "auto" : "54px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "height 0.2s ease",
      };
    },

    placeholder: (base) => ({
      ...base,
      color: "#B0B0B0",
      opacity: 1,
    }),

    singleValue: (base) => ({
      ...base,
      color: "black",
    }),

    input: (base) => ({
      ...base,
      color: "black",
      paddingLeft: 0,
      marginLeft: 0,
    }),

    indicatorsContainer: (base) => ({
      ...base,
      padding: 0,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    valueContainer: (base) => ({
      ...base,
      paddingLeft: 0,
      paddingRight: 0,
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "1px solid #5B5B5B",
      borderRadius: "30px",
      padding: "0px 2px",
      height: "22px",
      display: "flex",
      alignItems: "center",
      margin: "2px 4px 2px 0",
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: "black",
      fontSize: "11px",
      padding: "0 4px",
      lineHeight: "1",
    }),

    multiValueRemove: (base) => ({
      ...base,
      padding: "0 2px",
      color: "#5B5B5B",
      fontSize: "10px",
      display: "flex",
      alignItems: "center",
      ":hover": {
        backgroundColor: "var(--new-theme-color)",
        color: "#fff",
      },
    }),

    menu: (base) => ({
      ...base,
      zIndex: 9999,
      background: "#fff",
    }),

    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#f2f2f2" : "white",
      color: "#333",
      cursor: "pointer",
      padding: "8px 12px",
    }),
  };

  return (
    <div id="erp-contact-form">
      <h2
        style={{
          fontWeight: "600",
          color: "black",
          fontSize: "30px",
        }}
      >
        {allExceptLast} <span className="new-italic">{lastWord}</span>
      </h2>

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

          <div
            className="new-contact-field"
            style={{ gridColumn: "1 / -1", marginTop: "-10px" }}
          >
            <Select
              options={categoryOptions}
              isMulti
              styles={customSelectStyles}
              classNamePrefix="rs"
              value={categoryOptions.filter((opt) =>
                selectedCategories.includes(opt.value),
              )}
              onChange={(selected) => {
                const values = (selected || []).map((s) => s.value);
                setSelectedCategories(values);

                setErrors((prev) => {
                  const n = { ...prev };
                  delete n.categories;
                  return n;
                });
              }}
              placeholder="Изберете категории..."
            />

            {errors.categories && (
              <p className="error-text">{errors.categories}</p>
            )}
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
          style={{ marginTop: "20px" }}
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

export default NewServiceFormModal;
