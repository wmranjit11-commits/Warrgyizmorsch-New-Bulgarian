"use client";
import React, { useRef, useState } from "react";

const ApplicationCTA = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialisation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!formData.name || !formData.email) {
      setStatus("❌ Моля, попълнете всички задължителни полета.");
      setLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("❌ Моля, въведете валиден имейл адрес.");
      setLoading(false);
      return;
    }

    try {
      setStatus("✅ Кандидатурата е получена! Ще се свържем с вас скоро.");
      setFormData({ name: "", email: "", specialisation: "" });
    } catch (error) {
      setStatus("❌ Възникна грешка. Моля, опитайте отново.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <style>{`
        .app-cta-wrap {
          background: var(--new-theme-color);
          color: white;
          padding: 3rem 0;
        }

        .app-cta-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 980px) {
          .app-cta-container {
            grid-template-columns: 1fr;
          }
        }

        .app-cta-header {
          margin-bottom: 1.5rem;
        }

        .app-cta-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: rgba(255,255,255,0.8);
          margin: 0 0 0.5rem;
        }

        .app-cta-header h2 {
          font-size: 1.8rem;
          color: white;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        @media (min-width: 1100px) {
          .app-cta-header h2 {
            font-size: 2rem;
          }
        }

        .app-cta-header p {
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
          margin: 0;
        }

        /* Form Side */
        .app-cta-form-wrap {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem;
          border-radius: 8px;
        }

        .app-cta-form-wrap h3 {
          margin: 0 0 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
        }

        .app-cta-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }

        .form-group input,
        .form-group select {
          padding: 0.75rem;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          background: rgba(255,255,255,0.08);
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          font-family: var(--body-font);
        }

        .form-group input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.12);
        }

        .form-group select {
          cursor: pointer;
        }

        .form-group select option {
          background: #1a1f3a;
          color: white;
        }

        .form-submit {
          margin-top: 0.5rem;
        }

        .form-submit button {
          width: 100%;
        }

        .form-status {
          padding: 0.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          min-height: 20px;
          margin-top: 0.5rem;
        }

        .form-status.success {
          background: rgba(34, 197, 94, 0.2);
          color: #86efac;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .form-status.error {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        /* Info Side */
        .app-cta-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .app-cta-point {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem;
          border-radius: 8px;
        }

        .app-cta-point h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .app-cta-point p {
          margin: 0;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
        }

        .app-cta-point ul {
          margin: 0.5rem 0 0;
          padding-left: 1.5rem;
          list-style: none;
        }

        .app-cta-point li {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin: 0.25rem 0;
        }

        .app-cta-point li::before {
          content: "→ ";
          color: rgba(255,255,255,0.6);
          margin-right: 0.5rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .app-cta-anim {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="app-cta-wrap">
        <div className="container">
          <div className="app-cta-header">
            <div className="app-cta-eyebrow new-italic">Кандидатствайте сега</div>
            <h2>Започнете вашата кандидатура</h2>
            <p>
              Изпратете данните си, за да се присъедините към следващата ни група от високопроизводителни дипломанти
            </p>
          </div>

          <div className="app-cta-container">
            {/* Form */}
            <div className="app-cta-form-wrap">
              <h3>Формуляр за кандидатстване</h3>
              <form
                className="app-cta-form"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <div className="form-group">
                  <label htmlFor="name">Пълно име *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Вашето пълно име"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Имейл адрес *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="vashiqt@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialisation">
                    Предпочитана специализация
                  </label>
                  <select
                    id="specialisation"
                    name="specialisation"
                    value={formData.specialisation}
                    onChange={handleChange}
                  >
                    <option value="">Изберете област</option>
                    <option value="web-app">Уеб и мобилна разработка</option>
                    <option value="ai">ИИ и автоматизация</option>
                    <option value="marketing">
                      Дигитален маркетинг и стратегия
                    </option>
                    <option value="creative">Творческо съвършенство</option>
                  </select>
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="th-btn style-radius"
                    disabled={loading}
                  >
                    {loading ? "Изпращане..." : "Изпратете кандидатурата →"}
                  </button>
                </div>

                {status && (
                  <div
                    className={`form-status ${status.includes("✅") ? "success" : "error"}`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="app-cta-info">
              <div className="app-cta-point">
                <h4>📋 Необходими документи</h4>
                <ul>
                  <li>Сертификат за диплома с отличие</li>
                  <li>Актуализирано CV/автобиография</li>
                  <li>Академични справки</li>
                  <li>Доказателство за съответни умения</li>
                </ul>
              </div>

              <div className="app-cta-point">
                <h4>⏰ Следващи стъпки</h4>
                <p>
                  След подаването нашият HR екип ще прегледа вашата кандидатура в рамките на 5-7 работни дни. Избраните кандидати ще бъдат поканени на интервюта.
                </p>
              </div>

              <div className="app-cta-point">
                <h4>✉️ Въпроси?</h4>
                <p>
                  Свържете се с нашия екип по кариери на{" "}
                  <strong>careers@warrgyizmorsch.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationCTA;
