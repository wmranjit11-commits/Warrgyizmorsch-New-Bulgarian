"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// 👉 CRM API URL
const CRM_API_URL = "https://www.assignnmentinneed.com/api/career-applications";

const NewApplyNowModal = ({
  title = "Вземете оферта",
  selectedRole = "",
  roleOptions = [],
  roleMode = "job", // "job" | "internship"
}) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState(selectedRole || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    setRole(selectedRole || "");
  }, [selectedRole]);

  const words = title.split(" ");
  const allExceptLast = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  // === Validation (all fields required) ===
  const validateForm = () => {
    const form = formRef.current;
    if (!form) return false;

    const newErrors = {};

    const name = form["nc-full"].value.trim();
    const email = form["nc-email"].value.trim();
    const mobile = form["nc-mobile"].value.trim();
    const currentCtc = form["nc-current-ctc"].value.trim();
    const expectedCtc = form["nc-expected-ctc"].value.trim();
    const notice = form["nc-notice"].value.trim();
    const roleValue = role || form["nc-role"]?.value || "";

    if (!name) newErrors.name = "Моля, въведете вашето пълно име.";
    if (!email) newErrors.email = "Моля, въведете вашия имейл адрес.";
    if (!mobile) newErrors.mobile = "Моля, въведете вашия мобилен номер.";
    if (!currentCtc) newErrors.current_ctc = "Моля, въведете текущото си възнаграждение.";
    if (!expectedCtc)
      newErrors.expected_ctc = "Моля, въведете очакваното си възнаграждение.";
    if (!notice) newErrors.notice = "Моля, въведете срока на предизвестие.";
    if (!roleValue) newErrors.role = "Моля, изберете роля.";

    if (!resumeFile) newErrors.resume = "Моля, качете вашата автобиография.";

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email && !emailPattern.test(email)) {
      newErrors.email = "Моля, въведете валиден имейл адрес.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // === Extra: Save to CRM (returns true/false) ===
  const saveToCRM = async () => {
    if (!formRef.current) return false;

    const form = formRef.current;

    const formData = new FormData();

    formData.append("name", form["nc-full"].value || "");
    formData.append("email", form["nc-email"].value || "");
    formData.append("phone", form["nc-mobile"].value || "");
    formData.append("role_mode", roleMode); // "job" | "internship"
    formData.append("role_title", role || form["nc-role"]?.value || "");
    formData.append("current_ctc", form["nc-current-ctc"]?.value || "");
    formData.append("expected_ctc", form["nc-expected-ctc"]?.value || "");
    formData.append("notice_period", form["nc-notice"]?.value || "");
    formData.append("source", "warrgyizmorsch website");

    // ✅ Attach resume file if present
    if (resumeFile) {
      formData.append("resume", resumeFile); // field name "resume"
    }

    try {
      const res = await fetch(CRM_API_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        console.error("CRM save failed:", await res.text());
        return false;
      }

      return true;
    } catch (err) {
      console.error("CRM save error:", err);
      return false;
    }
  };

  // === Submit Handler ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Моля, поправете подчертаните полета и опитайте отново.");
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const payload = {
      user_name: form["nc-full"].value,
      user_email: form["nc-email"].value,
      user_phone: form["nc-mobile"].value,
      user_role: role || form["nc-role"]?.value || "",
      current_ctc: form["nc-current-ctc"]?.value || "",
      expected_ctc: form["nc-expected-ctc"]?.value || "",
      notice_period: form["nc-notice"]?.value || "",
    };

    try {
      setIsSubmitting(true);
      setStatus("Изпращане на вашата кандидатура...");

      // 1) EmailJS
      await emailjs.send(
        "service_ek2eyoi",
        "template_lsosqfu",
        payload,
        "TL7p-oDPG8opFE6tC"
      );

      // 2) CRM Save
      const crmOk = await saveToCRM();

      if (crmOk) {
        setStatus(
          "✅ Кандидатурата е изпратена успешно. Нашият екип ще се свърже с вас скоро."
        );
      } else {
        setStatus(
          "✅ Кандидатурата е изпратена успешно по имейл, но не можахме да актуализираме вътрешната си система. Не се притеснявайте, получихме данните ви."
        );
      }

      setErrors({});
      form.reset();
      setRole("");
      setResumeFile(null);
    } catch (err) {
      console.error("FAILED:", err);
      setStatus(
        "❌ Неуспешно изпращане. Моля, проверете интернет връзката си и опитайте отново."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field) => {
    setErrors((prev) => {
      const newErr = { ...prev };
      delete newErr[field];
      return newErr;
    });
    if (status) setStatus("");
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setResumeFile(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSizeMB = 5;

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Разрешени са само PDF, DOC или DOCX файлове.",
      }));
      setResumeFile(null);
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: `Размерът на файла трябва да е по-малък от ${maxSizeMB}MB.`,
      }));
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    handleInputChange("resume");
  };

  return (
    <div>
      <h3 style={{ fontWeight: "600", color: "black" }}>
        {allExceptLast} <span className="new-italic">{lastWord}</span>
      </h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="new-contact-grid">
          {/* Full Name */}
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

          {/* Email */}
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

          {/* Mobile */}
          <div className="new-contact-field">
            <input
              id="nc-mobile"
              name="nc-mobile"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="tel"
              placeholder="Мобилен номер*"
              onChange={() => handleInputChange("mobile")}
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
          </div>

          {/* Current CTC */}
          <div className="new-contact-field">
            <input
              id="nc-current-ctc"
              name="nc-current-ctc"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="text"
              placeholder="Текущо възнаграждение*"
              onChange={() => handleInputChange("current_ctc")}
            />
            {errors.current_ctc && (
              <p className="error-text">{errors.current_ctc}</p>
            )}
          </div>

          {/* Expected CTC */}
          <div className="new-contact-field">
            <input
              id="nc-expected-ctc"
              name="nc-expected-ctc"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="text"
              placeholder="Очаквано възнаграждение*"
              onChange={() => handleInputChange("expected_ctc")}
            />
            {errors.expected_ctc && (
              <p className="error-text">{errors.expected_ctc}</p>
            )}
          </div>

          {/* Notice Period */}
          <div className="new-contact-field">
            <input
              id="nc-notice"
              name="nc-notice"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              type="text"
              placeholder="Срок на предизвестие*"
              onChange={() => handleInputChange("notice")}
            />
            {errors.notice && <p className="error-text">{errors.notice}</p>}
          </div>

          {/* Role */}
          <div className="new-contact-field" style={{ gridColumn: "1 / -1" }}>
            <select
              id="nc-role"
              name="nc-role"
              className="new-contact-input"
              style={{ paddingTop: "0", height: "45px" }}
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                handleInputChange("role");
              }}
            >
              <option value="" disabled>
                {roleMode === "internship"
                  ? "Изберете роля за стаж*"
                  : "Изберете роля*"}
              </option>
              {roleOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.role && <p className="error-text">{errors.role}</p>}
          </div>

          {/* Resume Upload */}
          <div className="new-contact-field" style={{ gridColumn: "1 / -1" }}>
            <input
              id="nc-resume"
              name="nc-resume"
              className="new-contact-input"
              style={{ paddingTop: "10px" }}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            />
            {errors.resume && <p className="error-text">{errors.resume}</p>}
          </div>
        </div>

        <button
          className="th-btn style-radius"
          style={{ marginTop: "20px", opacity: isSubmitting ? 0.7 : 1 }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Изпращане..." : "Изпрати →"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "10px",
              color: status.startsWith("✅") ? "green" : "red",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {status}
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

export default NewApplyNowModal;
