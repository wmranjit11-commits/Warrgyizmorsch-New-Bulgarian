"use client";
import React, { useEffect, useRef } from "react";
import { Award, FileText, ShieldCheck } from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Индийски сертификат за акции",
    subtitle: "Indian share certificate",
    file: "/assets/new-img/certifications/Share-Certificate.pdf",
    type: "Сертификация",
    icon: <ShieldCheck size={28} color="var(--new-theme-color)" />,
  },
  {
    id: 2,
    title: "Сертификат за акции на дъщерно дружество в Обединеното кралство",
    subtitle: "CERTIFICATE OF INCORPORATION OF A PRIVATE LIMITED COMPANY",
    file: "/assets/new-img/certifications/Uk-Company-Incort-Certificate.pdf",
    type: "Сертификация",
    icon: <Award size={28} color="var(--new-theme-color)" />,
  },
  {
    id: 3,
    title: "Афидевит",
    subtitle: "Affidavit PDF",
    file: "/assets/new-img/certifications/Affidavit.pdf",
    type: "Сертификация",
    icon: <FileText size={28} color="var(--new-theme-color)" />,
  },
];

const UKAwardsCertifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".uac-anim, .uac-box"));
    animEls.forEach((el, i) => el.style.setProperty("--uaci", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            if (_reflow > -1) el.classList.add("in-view");
          }
        });
      },
      { root: null, threshold: 0.25 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <style>{`
        .uac-wrap {
          background: #fff;
          color: #000;
          padding: 3rem 20px;
        }

        .uac-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .uac-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .uac-eyebrow {
          font-weight: 600;
          font-size: 1rem;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
        }

        .uac-header h2 {
          font-size: 1.8rem;
          color: #000;
          font-weight: 600;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        .uac-header p {
          line-height: 1.6;
          color: #555;
          margin: 0 auto;
          max-width: 720px;
        }

        @media (min-width: 1100px) {
          .uac-header h2 {
            font-size: 2rem;
          }
        }

        .uac-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .uac-box {
          background: #f8f9fa;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          border-left: 4px solid var(--new-theme-color);
          opacity: 0;
          transform: translateX(-12px) scale(0.98);
          will-change: opacity, transform;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .uac-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .uac-box.in-view {
          animation: uac-slide-right 560ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--uaci, 0) * 110ms);
        }

        @keyframes uac-slide-right {
          0% { opacity: 0; transform: translateX(-12px) scale(0.98); }
          60% { opacity: 1; transform: translateX(0) scale(1.01); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        .uac-box h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--new-theme-color);
          margin: 0 0 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .uac-box h4 {
          margin: 0 0 0.65rem;
          font-size: 1.15rem;
          line-height: 1.4;
          color: #111;
          font-weight: 600;
        }

        .uac-box p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          margin: 0 0 1rem;
        }

        .uac-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--new-theme-color);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }

        .uac-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .uac-wrap {
            padding: 2rem 20px;
          }

          .uac-header h2 {
            font-size: 1.5rem;
          }

          .uac-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uac-box {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="uac-wrap">
        <div className="uac-container">
          <div className="uac-header uac-anim">
            <p className="uac-eyebrow new-italic">Признание и съответствие</p>
            <h2>Правна документация</h2>
            <p>
              Вижте нашите сертификати и официални документи, които отразяват
              нашите стандарти, надеждност и ангажираност към съответствието.
            </p>
          </div>

          <div className="uac-grid">
            {documents.map((doc) => (
              <div className="uac-box uac-anim" key={doc.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {doc.icon}
                  <h3 style={{ margin: 0 }}>{doc.type}</h3>
                </div>

                <h4>{doc.title}</h4>
                {/* <p>{doc.subtitle}</p> */}

                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uac-link"
                >
                  Преглед на PDF <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKAwardsCertifications;