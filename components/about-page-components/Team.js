"use client";
import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Mahipal Singh Rathore",
    designation: "Директор",
    image: "/assets/new-img/team/CEO.jpeg",
    description:
      "Ръководи стратегическото направление, наблюдава инициативите за растеж на бизнеса и укрепва дългосрочните взаимоотношения с клиенти и партньори.",
  },
  {
    id: 2,
    name: "Mr. Yashpal Singh Rathore",
    designation: "Финансов директор (CFO)",
    image: "/assets/new-img/COO.webp",
    description:
      "Наблюдава процесите на съответствие, поддържа оперативната отчетност и осигурява гладка координация между вътрешните екипи.",
  },
  {
    id: 3,
    name: "Prakash Sharma",
    designation: "Технически директор (CTO)",
    image: "/assets/new-img/team/prakash.jpg",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
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
            void el.offsetHeight;
            el.classList.add("in-view");
          }
        });
      },
      { root: null, threshold: 0.12 }
    );

    animEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <style>{`
        .team-style-wrap {
          background: #1f2024;
          padding: 90px 0 80px;
          overflow: hidden;
        }

        .team-style-heading {
          text-align: center;
          margin: 0 auto 72px;
          max-width: 820px;
        }

        .team-style-heading h2 {
          margin: 0 0 14px;
          font-size: 2.8rem;
          line-height: 1.1;
          font-weight: 700;
          color: #ffffff;
        }

        .team-style-heading p {
          margin: 0 auto;
          max-width: 760px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.74);
        }

        .team-style-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 38px;
          align-items: stretch;
        }

        .team-style-card {
          position: relative;
          background: #f1f1f1;
          padding: 185px 28px 34px;
          text-align: center;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          min-height: 520px;
          border-radius: 0;
          overflow: visible;
        }

        .team-style-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);
        }

        .team-style-image-wrap {
          position: absolute;
          top: -54px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 110px);
          max-width: 315px;
          min-width: 240px;
          height: 310px;
          border: 2px solid #c7a56a;
          padding: 10px;
          background: transparent;
          z-index: 2;
        }

        .team-style-image {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #d8d8d8;
        }

        .team-style-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.45s ease;
        }

        .team-style-card:hover .team-style-image img {
          transform: scale(1.04);
        }

        .team-style-name {
          margin: 58px 0 12px;
          font-size: 2rem;
          line-height: 1.15;
          font-weight: 700;
          color: #111111;
          word-break: break-word;
          position: relative;
          z-index: 3;
        }

        .team-style-designation {
          margin: 0 0 20px;
          font-size: 0.95rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8f8f8f;
          font-weight: 700;
          position: relative;
          z-index: 3;
        }

        .team-style-description {
          margin: 0 auto;
          max-width: 310px;
          font-size: 1rem;
          line-height: 1.75;
          color: #575757;
          position: relative;
          z-index: 3;
        }

        @keyframes teamCardFadeUp {
          0% {
            opacity: 0;
            transform: translateY(26px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .team-anim {
          opacity: 0;
          transform: translateY(26px) scale(0.985);
          will-change: opacity, transform;
        }

        .team-anim.in-view {
          animation: teamCardFadeUp 650ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--ti, 0) * 120ms);
        }

        @media (max-width: 1199px) {
          .team-style-grid {
            gap: 28px;
          }

          .team-style-card {
            padding: 170px 22px 30px;
            min-height: 485px;
          }

          .team-style-image-wrap {
            height: 280px;
            width: calc(100% - 80px);
          }

          .team-style-name {
            margin-top: 50px;
            font-size: 1.65rem;
          }

          .team-style-description {
            font-size: 0.96rem;
          }
        }

        @media (max-width: 991px) {
          .team-style-wrap {
            padding: 72px 0 60px;
          }

          .team-style-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .team-style-heading {
            margin-bottom: 58px;
          }

          .team-style-heading h2 {
            font-size: 2.25rem;
          }

          .team-style-card {
            min-height: 500px;
          }
        }

        @media (max-width: 767px) {
          .team-style-wrap {
            padding: 60px 0 48px;
          }

          .team-style-heading {
            margin-bottom: 48px;
          }

          .team-style-heading h2 {
            font-size: 1.95rem;
          }

          .team-style-heading p {
            font-size: 0.96rem;
          }

          .team-style-grid {
            grid-template-columns: 1fr;
            gap: 52px;
          }

          .team-style-card {
            min-height: auto;
            padding: 158px 20px 28px;
          }

          .team-style-image-wrap {
            width: calc(100% - 70px);
            max-width: 300px;
            min-width: 220px;
            height: 250px;
            top: -38px;
          }

          .team-style-name {
            margin-top: 46px;
            font-size: 1.55rem;
          }

          .team-style-designation {
            font-size: 0.82rem;
            letter-spacing: 0.14em;
          }

          .team-style-description {
            max-width: 100%;
            font-size: 0.95rem;
            line-height: 1.65;
          }
        }
      `}</style>

      <section className="team-style-wrap">
        <div className="container">
          <div className="team-style-heading team-anim">
            <h2>Запознайте се с нашия лидерски екип</h2>
            <p>
              Силен екип, изграден върху стратегия, отчетност и опит,
              който ръководи операциите и дългосрочния растеж с увереност.
            </p>
          </div>

          <div className="team-style-grid">
            {teamMembers.map((member) => (
              <div className="team-style-card team-anim" key={member.id}>
                <div className="team-style-image-wrap">
                  <div className="team-style-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>

                <h3 className="team-style-name">{member.name}</h3>
                <p className="team-style-designation">{member.designation}</p>
                <p className="team-style-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;