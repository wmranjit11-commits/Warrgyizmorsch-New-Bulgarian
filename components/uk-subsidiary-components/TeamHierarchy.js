"use client";
import React, { useEffect, useRef } from "react";

const hierarchy = [
  {
    id: 1,
    name: "Mr. Mahipal Singh Rathore",
    designation: "Главен изпълнителен директор",
    designation2: "Директор",
    image: "/assets/new-img/team/ceo.webp",
    children: [
      {
        id: 11,
        name: "Екип от ИТ специалисти",
        role: "Отдел",
        image: "/assets/new-img/male.png", 
      },
      {
        id: 12,
        name: "Екип за бизнес развитие",
        role: "Отдел",
        image: "/assets/new-img/male.png", 
      },
      {
        id: 13,
        name: "Дипломиран стажант",
        role: "Поддържаща роля",
        image: "/assets/new-img/male.png", 
      },
    ],
  },
  {
    id: 2,
    name: "Kamoru Olanrewaju Olayiwola",
    designation: "Мениджър човешки ресурси и съответствие",
    designation2: "Оторизиращ служител",
    image: "/assets/new-img/authorised-officer.jpeg",
    children: [
      {
        id: 21,
        name: "ЧР стажант",
        role: "Поддържаща роля",
        image: "/assets/new-img/female.png", 
      },
      {
        id: 22,
        name: "Стажант",
        role: "Поддържаща роля",
        image: "/assets/new-img/female.png", 
      },
    ],
  },
];

const TeamHierarchy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const animEls = Array.from(root.querySelectorAll(".tree-anim"));
    animEls.forEach((el, i) => el.style.setProperty("--treei", String(i)));

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
        .org-chart-wrap {
          background: linear-gradient(180deg, #f8fafc 0%, #f2f5fa 100%);
          padding: 80px 20px;
          overflow: hidden;
        }

        .org-chart-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .org-chart-heading {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 52px;
        }

        .org-chart-heading h2 {
          margin: 0 0 14px;
          font-size: 2.5rem;
          line-height: 1.15;
          font-weight: 800;
          color: #17233b;
        }

        .org-chart-heading p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: #607086;
        }

        .org-chart-roots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: start;
        }

        .org-branch {
          position: relative;
        }

       .org-root-box {
        background-color: #ffffff;
        border: 1px solid #dde5ef;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.08);
        transition: box-shadow 0.3s ease;
      }

      .org-root-box:hover {
        box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.15);
      }

      .org-children {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
      }

    .org-child-card {
      background-color: #fff;
      border: 1px solid #cfd8e5;
      padding: 16px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }

    .org-child-card:hover {
      box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.2);
    }

    .org-child-avatar img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 12px;
    }

    .org-child-name {
      font-size: 1rem;
      font-weight: bold;
      color: #2c3e50;
    }

    .org-child-role {
      font-size: 0.85rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

        .org-root-box::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -38px;
          width: 2px;
          height: 38px;
          background: #cfd8e5;
        }

        .org-root-avatar {
          width: 112px;
          height: 112px;
          margin: 0 auto 16px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(0, 91, 170, 0.1);
          background: #edf2f7;
        }

        .org-root-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .org-root-role {
          margin: 0 0 0px;
          color: var(--new-theme-color);
          font-size: 0.88rem;
          font-weight: 800;
          text-transform: capilalize;
          letter-spacing: 0.12em;
        }
        .org-root-role2 {
          margin: 0 0 0px;
          color: var(--new-theme-color);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: capilalize;
          letter-spacing: 0.12em;
        }

        .org-root-name {
          margin: 0;
          color: #121a2a;
          font-size: 1.12rem;
          line-height: 1.25;
          font-weight: 800;
        }

        .org-children-wrap {
          position: relative;
          margin-top: 40px;
          padding-top: 20px;
        }

        .org-children-wrap::before {
          content: "";
          position: absolute;
          top: 0;
          left: 16.66%;
          right: 16.66%;
          height: 2px;
          background: #cfd8e5;
        }

        .org-children {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .org-child {
          position: relative;
        }

        .org-child::before {
          content: "";
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: #cfd8e5;
        }

        .org-child-card {
          background: #fff;
          border: 1px solid #dbe4ef;
          border-radius: 20px;
          padding: 7px 7px 7px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(21, 34, 56, 0.05);
          min-height: 166px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .org-child-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 28px rgba(21, 34, 56, 0.1);
        }

        .org-child-avatar {
          width: 74px;
          height: 74px;
          margin: 0 auto 12px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(0, 91, 170, 0.08);
          background: #edf2f7;
        }

        .org-child-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .org-child-role {
          margin: 0 0 6px;
          color: #7a8494;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .org-child-name {
          margin: 0;
          color: #182235;
          font-size: 0.98rem;
          line-height: 1.35;
          font-weight: 700;
        }

        @keyframes treeFadeUp {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .tree-anim {
          opacity: 0;
          transform: translateY(22px) scale(0.985);
          will-change: opacity, transform;
        }

        .tree-anim.in-view {
          animation: treeFadeUp 620ms cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: calc(var(--treei, 0) * 90ms);
        }

        @media (max-width: 1100px) {
          .org-chart-roots {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 767px) {
          .org-chart-wrap {
            padding: 56px 16px;
          }

          .org-chart-heading {
            margin-bottom: 34px;
          }

          .org-chart-heading h2 {
            font-size: 1.8rem;
          }

          .org-chart-heading p {
            font-size: 0.95rem;
          }

          .org-root-box {
            max-width: 100%;
            padding: 22px 16px 18px;
          }

          .org-root-avatar {
            width: 96px;
            height: 96px;
          }

          .org-root-name {
            font-size: 1.2rem;
          }

          .org-children-wrap {
            margin-top: 48px;
            padding-top: 0;
          }

          .org-children-wrap::before {
            display: none;
          }

          .org-children {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .org-child::before {
            top: -16px;
            height: 16px;
          }

          .org-child-card {
            min-height: auto;
          }
        }
      `}</style>

      <section className="org-chart-wrap">
  <div className="org-chart-container">
    <div className="org-chart-heading tree-anim">
      <h2>Предложена организационна структура</h2>
      <p>
        Опростен изглед на структурата на отчетност с ръководството на върха
        и три функционални роли под всеки ръководител.
      </p>
    </div>

    <div className="org-chart-roots">
      {hierarchy.map((root) => (
        <div className="org-branch tree-anim" key={root.id}>
          <div className="org-root-box">
            <div className="org-root-avatar">
              <img src={root.image} alt={root.name} />
            </div>

            <h3 className="org-root-name">{root.name}</h3>
            <p className="org-root-role">{root.designation}</p>
            <p className="org-root-role2">({root.designation2})</p>
          </div>

          <div className="org-children-wrap">
            <div className="org-children">
              {root.children.map((child) => (
                <div className="org-child" key={child.id}>
                  <div className="org-child-card">
                    <div className="org-child-avatar">
                      <img src={child.image} alt={child.name} />
                    </div>
                    <p className="org-child-role">{child.role}</p>
                    <h4 className="org-child-name">{child.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default TeamHierarchy;