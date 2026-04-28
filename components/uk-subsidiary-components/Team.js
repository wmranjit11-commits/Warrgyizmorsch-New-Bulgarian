"use client";
import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Mahipal Singh Rathore",
    designation: "Главен изпълнителен директор",
    designation2: "Директор",
    image: "/assets/new-img/team/ceo.webp",
    points: [
      "Ръководи стратегическото направление и инициативите за бизнес растеж в Обединеното кралство.",
      "Осигурява съответствие с нормативната уредба и контролира операциите на високо ниво.",
      "Изгражда доверени отношения с клиенти и партньори.",
    ],
  },
  {
    id: 2,
    name: "Kamoru Olanrewaju Olayiwola",
    designation: "Мениджър човешки ресурси и съответствие",
    designation2: "Оторизиращ служител",
    image: "/assets/new-img/authorised-officer.jpeg",
    points: [
      "Контролира процесите на съответствие и официалните изисквания за оторизация.",
      "Подпомага ежедневната координация и оперативната отчетност.",
      "Помага за поддържането на безпроблемна комуникация между правните и вътрешните екипи.",
    ],
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".team-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--ti", String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (!el) return;

          if (entry.isIntersecting) {
            el.classList.remove("in-view");
            const _reflow = el.offsetHeight;
            if (_reflow > -1) el.classList.add("in-view");
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <style>{`
        .management-team-wrap {
          background: #f5f5f5;
          padding: 70px 0;
        }

        .management-team-heading {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .management-team-heading h2 {
          margin: 0 0 14px;
          font-size: 2.3rem;
          line-height: 1.2;
          font-weight: 700;
          color: #2e3440;
        }

        .management-team-heading p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: #555;
        }

        .management-team-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
        }

        .management-team-card {
          display: grid;
          grid-template-columns: 290px 1fr;
          align-items: stretch;
          background: #efefef;
          border: 1px solid #d8d8d8;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .management-team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.14);
          border-color: rgba(15, 117, 188, 0.35);
        }

        .management-team-image {
          position: relative;
          overflow: hidden;
          background: #ddd;
          min-height: 300px;
        }

        .management-team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.45s ease, filter 0.35s ease;
        }

        .management-team-card:hover .management-team-image img {
          transform: scale(1.05);
          filter: saturate(1.05);
        }

        .management-team-content {
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .management-team-designation {
          font-size: 1rem;
          color: #114d9b;
          margin: 0 0 0px;
          font-weight: 500;
        }

        .management-team-name {
          margin: 0 0 8px;
          font-size: 1.2rem;
          line-height: 1.2;
          font-weight: 800;
          color: #111;
        }

        .management-team-points {
          margin: 0;
          padding-left: 22px;
        }

        .management-team-points li {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 10px;
        }

        .management-team-points li:last-child {
          margin-bottom: 0;
        }

        @keyframes managementFadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .team-anim {
          opacity: 0;
          transform: translateY(24px) scale(0.985);
          will-change: opacity, transform;
        }

        .team-anim.in-view {
          animation: managementFadeUp 650ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ti, 0) * 120ms);
        }

        @media (max-width: 1199px) {
          .management-team-card {
            grid-template-columns: 240px 1fr;
          }

          .management-team-name {
            font-size: 1.65rem;
          }

          .management-team-content {
            padding: 26px 22px;
          }
        }

        @media (max-width: 991px) {
          .management-team-wrap {
            padding: 60px 0;
          }

          .management-team-grid {
            grid-template-columns: 1fr;
          }

          .management-team-heading h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .management-team-wrap {
            padding: 50px 0;
          }

          .management-team-heading {
            margin-bottom: 28px;
          }

          .management-team-heading h2 {
            font-size: 1.7rem;
          }

          .management-team-heading p {
            font-size: 0.95rem;
          }

          .management-team-card {
            grid-template-columns: 1fr;
          }

          .management-team-image {
            min-height: 320px;
          }

          .management-team-content {
            padding: 22px 18px;
          }

          .management-team-name {
            font-size: 1.4rem;
          }

          .management-team-designation {
            font-size: 0.95rem;
          }

          .management-team-points li {
            font-size: 0.94rem;
          }
        }
      `}</style>

      <section className="management-team-wrap">
        <div className="container">
          <div className="management-team-heading team-anim">
            <h2>Всеотдайност. Експертиза. Лидерство.</h2>
            <p>
              Нашият лидерски екип контролира операциите, съответствието и стратегическия растеж със силен фокус върху отчетността, доверието и дългосрочното създаване на стойност за бизнеса в Обединеното кралство.
            </p>
          </div>

          <div className="management-team-grid">
            {teamMembers.map((member) => (
              <div className="management-team-card team-anim" key={member.id}>
                <div className="management-team-image">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="management-team-content">
                  <h3 className="management-team-name">{member.name}</h3>
                  <p className="management-team-designation">
                    {member.designation}
                  </p>
                   <p className="management-team-designation">
                    ({member.designation2})
                  </p>
                

                  <ul className="management-team-points">
                    {member.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;