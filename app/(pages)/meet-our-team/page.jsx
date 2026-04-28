"use client";
import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Mahipal Singh Rathore",
    designation: "Главен изпълнителен директор",
    image: "/assets/new-img/team/ceo.webp",
    imagePosition: "center top",
    description:
      "Ръководи стратегическото направление, контролира инициативите за бизнес растеж и укрепва дългосрочните отношения с клиенти и партньори.",
  },
  {
    id: 2,
    name: "Mr. Yashpal Singh Rathore",
    designation: "Главен финансов директор",
    image: "/assets/new-img/team/cfo.webp",
    imagePosition: "center center",
    description:
      "Контролира процесите на съответствие, поддържа оперативната отчетност и осигурява гладка координация между вътрешните екипи.",
  },
  {
    id: 3,
    name: "Prakash Sharma",
    designation: "Главен технологичен директор",
    image: "/assets/new-img/team/cto.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
  },
   {
    id: 3,
    name: "Shubham Acharya",
    designation: "Ръководител проекти",
    image: "/assets/new-img/team/shubham.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
  },
  {
    id: 4,
    name: "Ojas Shukla",
    designation: "Служител по бизнес развитие",
    image: "/assets/new-img/team/ojas.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
  },
  {
    id: 10,
    name: "Ayush Pariyani",
    designation: "Business Development Officer",
    image: "/assets/new-img/team/ayush.webp",
    imagePosition: "center top",
    description:
      "Engages with clients, understands requirements, and helps align business needs with effective solution strategies.",
  },
   {
    id: 9,
    name: "Ali Asgar Bhalam",
    designation: "Мениджър дигитален маркетинг",
    image: "/assets/new-img/team/ali.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
  },
  {
    id: 5,
    name: "Anshul Suthar",
    designation: "Технически ръководител",
    image: "/assets/new-img/team/anshul.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите с ефективни стратегии за решения.",
  },
  
  {
    id: 6,
    name: "Aman Vashistha",
    designation: "Ръководител на SEO екип",
    image: "/assets/new-img/team/SEO lead.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
  },
   {
    id: 7,
    name: "Gourav Mehta",
    designation: "Ръководител на графичен екип",
    image: "/assets/new-img/team/gourav.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
  },
  {
    id: 8,
    name: "Nisha Mewara",
    designation: "Мениджър социални медии",
    image: "/assets/new-img/team/nisha.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
  },
  {
    id: 9,
    name: "khushbu Vaishanav",
    designation: "Графичен дизайнер",
    image: "/assets/new-img/team/khushbu.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
  },
   {
    id: 9,
    name: "Lavisha Khandelwal",
    designation: "SEO специалист",
    image: "/assets/new-img/team/lavisha.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
  },
  {
    id: 9,
    name: "Gourav Pandey",
    designation: "SEO Executive",
    image: "/assets/new-img/team/gp.webp",
    imagePosition: "center top",
    description:
      "Engages with clients, understands requirements, and helps align business needs with effective solution strategies.",
  },
  {
    id: 9,
    name: "Priyanka Joshi",
    designation: "UI/UX дизайнер",
    image: "/assets/new-img/team/priyanka.webp",
    imagePosition: "center top",
    description:
      "Ангажира се с клиентите, разбира изискванията и помага за съгласуване на бизнес нуждите with ефективни стратегии за решения.",
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
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.05), transparent 32%),
            linear-gradient(180deg, #1e2025 0%, #191b20 100%);
          padding: 90px 0 80px;
          overflow: hidden;
        }

        .team-style-heading {
          text-align: center;
          margin: 0 auto 56px;
          max-width: 840px;
        }

        .team-style-heading h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1.08;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .team-style-heading p {
          margin: 0 auto;
          max-width: 760px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.72);
        }

        .team-style-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        .team-style-card {
          position: relative;
          background: linear-gradient(180deg, #f8f8f8 0%, #efefef 100%);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 24px;
          overflow: hidden;
          min-height: 480px;
          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.14),
            inset 0 1px 0 rgba(255,255,255,0.45);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .team-style-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 22px 44px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.5);
          border-color: rgba(199, 165, 106, 0.45);
        }

        .team-style-image-wrap {
          position: relative;
          height: 350px;
          padding: 14px 14px 0;
        }

        .team-style-image-frame {
          height: 100%;
          border: 1.5px solid #c7a56a;
          border-radius: 18px;
          padding: 10px;
          background: rgba(255,255,255,0.35);
        }

        .team-style-image {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #dcdcdc;
        }

        .team-style-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .team-style-card:hover .team-style-image img {
          transform: scale(1.045);
        }

        .team-style-content {
          padding: 20px 24px 26px;
          text-align: center;
        }

        .team-style-name {
          margin: 0 0 8px;
          font-size: 1.6rem;
          line-height: 1.18;
          font-weight: 800;
          color: #121212;
          word-break: break-word;
          letter-spacing: -0.02em;
        }

        .team-style-designation {
          margin: 0 0 16px;
          font-size: 0.76rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #8b8b8b;
          font-weight: 700;
        }

        .team-style-divider {
          width: 58px;
          height: 2px;
          margin: 0 auto 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, #c7a56a, transparent);
        }

        .team-style-description {
          margin: 0 auto;
          max-width: 310px;
          font-size: 0.97rem;
          line-height: 1.72;
          color: #585858;
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
          animation-delay: calc(var(--ti, 0) * 110ms);
        }

        @media (max-width: 1199px) {
          .team-style-grid {
            gap: 22px;
          }

          .team-style-card {
            min-height: 455px;
          }

          .team-style-image-wrap {
            height: 255px;
          }

          .team-style-name {
            font-size: 1.42rem;
          }

          .team-style-description {
            font-size: 0.94rem;
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
            margin-bottom: 44px;
          }
        }

        @media (max-width: 767px) {
          .team-style-wrap {
            padding: 58px 0 48px;
          }

          .team-style-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .team-style-heading {
            margin-bottom: 34px;
          }

          .team-style-heading p {
            font-size: 0.95rem;
          }

          .team-style-card {
            min-height: auto;
          }

          .team-style-image-wrap {
            height: 260px;
            padding: 14px 14px 0;
          }

          .team-style-content {
            padding: 18px 18px 22px;
          }

          .team-style-name {
            font-size: 1.4rem;
          }

          .team-style-designation {
            font-size: 0.72rem;
            letter-spacing: 0.18em;
          }

          .team-style-description {
            max-width: 100%;
            font-size: 0.94rem;
            line-height: 1.65;
          }
        }
      `}</style>

      <section className="team-style-wrap">
        <div className="container">
          <div className="team-style-heading team-anim">
            <h2>Запознайте се с нашия лидерски екип</h2>
            <p>
              Силен екип, изграден върху стратегия, отговорност и опит,
              ръководещ операциите и дългосрочния растеж с увереност.
            </p>
          </div>

          <div className="team-style-grid">
            {teamMembers.map((member) => (
              <div className="team-style-card team-anim" key={member.id}>
                <div className="team-style-image-wrap">
                  <div className="team-style-image-frame">
                    <div className="team-style-image">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          objectPosition: member.imagePosition || "center top",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="team-style-content">
                  <h3 className="team-style-name">{member.name}</h3>
                  <p className="team-style-designation">{member.designation}</p>
                  <div className="team-style-divider"></div>
                  {/* <p className="team-style-description">{member.description}</p> */}
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