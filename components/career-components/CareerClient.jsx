"use client"
import React, {useState, useEffect} from 'react'
import Modal from "../../components/home-page-components/Modal";
import NewApplyNowModal from "../../components/home-page-components/NewApplyNowModal";
import NewGallery from "../../components/home-page-components/NewGallery";

const CareerClient = () => {
  const [words] = useState(["здравейте", "наемаме"]);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const openingRef = React.useRef(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [roleMode, setRoleMode] = useState("job"); // "job" | "internship"

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Helper: open modal with pre-selected role and mode
  const handleOpenModal = (
    roleTitle = "",
    heading = "Apply Now",
    type = "job" // "job" or "internship"
  ) => {
    setSelectedRole(roleTitle);
    setModalTitle(heading);
    setRoleMode(type);
    openQuoteModal();
  };

  // MAIN JOB CATEGORIES (with active flag)
  const jobData = [
    {
      id: "flutter-dev",
      title: "Разработчик на мобилни приложения (Flutter)",
      experience: "1-3 години",
      location: "Удайпур / Хибридно",
      skills:
        "Flutter, Dart, REST APIs, внедряване в Play Store / App Store, Firebase",
      active: true,
    },
    {
      id: "frontend-dev",
      title: "Frontend разработчик",
      experience: "1-3 години",
      location: "Удайпур / Дистанционно",
      skills:
        "React.js, Next.js, HTML5, CSS3, JavaScript, Redux, интеграция на API",
      active: true,
    },
    {
      id: "backend-dev",
      title: "Backend разработчик",
      experience: "1-3 години",
      location: "Удайпур / Хибридно",
      skills:
        "Laravel, Node.js, PHP, MySQL, MongoDB, REST APIs, Git, MVC архитектура",
      active: true,
    },
    {
      id: "fullstack-dev",
      title: "Full Stack разработчик",
      experience: "2-4 години",
      location: "Удайпур / Хибридно",
      skills:
        "React.js, Node.js, Laravel, MySQL, MongoDB, REST APIs, Git, внедряване",
      active: true,
    },
    {
      id: "digital-marketing",
      title: "Експерт по дигитален маркетинг",
      experience: "1-3 години",
      location: "Удайпур / На място",
      skills:
        "SEO, Google Ads, Meta Ads, анализи, стратегия за съдържание, имейл маркетинг",
      active: true,
    },
    {
      id: "smm",
      title: "Експерт по маркетинг в социалните мрежи",
      experience: "0-2 години",
      location: "Удайпур / Хибридно",
      skills:
        "Планиране на съдържание, Reels, копирайтинг, стратегия за социални медии, работа с инфлуенсъри",
      active: true,
    },
    {
      id: "uiux",
      title: "UI/UX дизайнер",
      experience: "1+ години",
      location: "Удайпур / Хибридно",
      skills:
        "Figma, Adobe XD, Wireframing, Prototyping, дизайн системи, потребителски изследвания",
      active: true,
    },
  ];

  // INTERNSHIP ROLES
  const internshipRoles = [
    {
      id: "intern-webdev",
      title: "Стаж - Уеб разработка",
      active: true,
    },
    {
      id: "intern-seo",
      title: "Стаж - SEO",
      active: true,
    },
    {
      id: "intern-graphic",
      title: "Стаж - Графичен дизайн",
      active: true,
    },
  ];

  // OPTIONS for dropdowns
  const jobRoleOptions = jobData
    .filter((job) => job.active)
    .map((job) => job.title);

  const internshipRoleOptions = internshipRoles
    .filter((int) => int.active)
    .map((int) => int.title);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < currentWord.length) {
        setDisplayText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [charIndex, wordIndex, words]);

  // Card fade-in animation
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .route-div {
          padding: 10px 0px 0px 120px;
          word-spacing: 3px;
        }

        .career-btn {
          background: var(--theme-color);
          color: white;
          padding: 15px 25px !important;
          border: none;
          border-radius: 25px !important;
          margin-top: 20px !important;
          cursor: pointer !important;
        }

        /* Stats Section */
        .counter-section{
          width:100%;
          background:#FFFFFF;
          padding:0px 10px;
        }
        .stats-wrapper {
          margin: 50px auto;
          padding: 40px;
          max-width: 1200px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          box-shadow: 0 8px 25px rgba(0, 102, 255, 0.25);
          border: 1px solid var(--theme-color);
          animation: fadeIn 1.2s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-box {
          width: 25%;
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          transition: 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-8px);
        }

        .stat-number {
          font-size: 48px;
          font-weight: bold;
          color: #000;
        }

        .stat-label {
          font-size: 16px;
          margin-top: 10px;
          color: #222;
        }

        .divider {
          width: 2px;
          height: 70px;
          background: linear-gradient(#4da3ff, #007bff, #4da3ff);
          border-radius: 50px;
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          from { box-shadow: 0 0 10px #66b3ff; }
          to {  box-shadow: 0 0 25px #3385ff;  }
        }

        /* internship section */
        .internship-section{
          margin-top:100px;
          padding:0px 10px;
        }
        .outer-container{
          max-width:1200px;
          margin:auto;
        }
        .internship-heading span{
          color:black;
          padding-bottom:7px;
          border-radius: 10px;
          border-bottom:5px solid var(--theme-color);
        }
        .internship-des{
          font-size:1.2rem;
        }
        .internship-main-div{
          display:flex;
        }
        .internship-content{
          width:50%;
        }
        .internship-image{
          width:50%;
          text-align:center;
          padding-left:30px;
        }
        .custom-list {
          text-align:start;
          list-style: none;
          padding-left: 0;
          margin-top: 20px;
        }

        .custom-list li {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          font-size: 18px;
          color: #222;
          font-weight: 500;
        }

        .bullet-dot::before {
          content: '✶';
          font-size: 22px;
          color: #3b82f6;
          margin-right:10px;
        }

        .hiring-section {
          padding: 60px 0;
        }

        .hiring-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          padding:0px 10px;
        }

        .hiring-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0, 90, 172, 0.15); 
          border-left: 5px solid var(--theme-color);
          transition: 0.3s ease;
        }

        .hiring-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 90, 172, 0.22);
        }

        .hiring-title {
          font-size: 22px;
          font-weight: 600;
          color: #333;
        }

        .hiring-detail {
          margin: 10px 0;
          font-size: 15px;
          color: #555;
        }

        .hiring-skill {
          margin-top: 12px;
          padding: 10px;
          background: rgba(0, 90, 172, 0.07);
          border-radius: 8px;
          font-size: 14px;
        }

        .apply-btn {
          margin-top: 15px;
          padding: 8px 20px;
          background: var(--theme-color);
          border: none;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }

        .fade-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
        }

        .show-card {
          opacity: 1;
          transform: translateY(0);
        }

        .hiring-card:nth-child(1) { transition-delay: 0.1s; }
        .hiring-card:nth-child(2) { transition-delay: 0.3s; }
        .hiring-card:nth-child(3) { transition-delay: 0.5s; }
        .hiring-card:nth-child(4) { transition-delay: 0.7s; }
        .hiring-card:nth-child(5) { transition-delay: 0.9s; }
        .hiring-card:nth-child(6) { transition-delay: 1.1s; }

        @media (max-width: 768px) {
          .stats-wrapper {
            flex-wrap:wrap;
            gap: 30px;
            padding: 30px;
          }

          .divider {
            display: none;
          }

          .stat-box {
            width:auto;
          }
          .internship-main-div{
            display:flex;
            flex-direction: column;
          }
          .internship-content{
            width:100%;
            text-align:center;
          }
          .internship-image{
            width:100%;
            padding-left:0;
          }
        }
        @media(max-width:480px){
          .internship-heading span{
            line-height:2;
          }
          .stats-wrapper {
            flex-direction: column;
            gap: 20px;
            padding: 30px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="bg-top-right overflow-hidden"
        id="blog-sec"
        style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.png')` }}
      >
        <div className="container pt-5">
          <div className="title-area text-center">
            <h2 className="sec-title" style={{ height: "40px" }}>
              <span
                style={{
                  borderBottom: "3px solid black",
                  borderRadius: "1px",
                  paddingBottom: "10px",
                }}
              >
                {displayText}
              </span>
            </h2>

            <p style={{ marginTop: "40px" }}>
              Всяка велика история започва с едно обикновено здравей. Независимо
              дали се свързвате с колега, <br />
              отдел Човешки ресурси или в LinkedIn, нека започнем следващото ви
              вълнуващо пътешествие с нас.
            </p>

            <button
              className="career-btn th-btn style-radius"
              onClick={() =>
                openingRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Вижте свободните позиции
            </button>
          </div>
        </div>
      </section>

      {/* INTERNSHIP SECTION */}
      <section className="internship-section">
        <div className="outer-container">
          <div className="internship-main-div">
            <div className="internship-content">
              <h5>Стаж</h5>
              <h2 className=" internship-heading">
                <span>Присъединете се към нашия стажантски екип</span>
              </h2>
              <p className="internship-des">
                Вярваме в подхранването на таланти и предоставянето на
                практически опит. Нашите стажанти са ценни сътрудници и получават
                възнаграждение за работата си, докато учат от експерти в
                индустрията.
              </p>
              <ul className="custom-list">
                <li>
                  <span className="bullet-dot"></span>Практически опит с реални
                  проекти.
                </li>
                <li>
                  <span className="bullet-dot"></span>Продължителност: 3-6 месеца
                  интензивно обучение.
                </li>
                <li>
                  <span className="bullet-dot"></span>Менторство от опитни
                  професионалисти.
                </li>
                <li>
                  <span className="bullet-dot"></span>Структурирана програма с
                  измерим растеж.
                </li>
              </ul>

              {/* Internship Apply Button */}
              <button
                className="career-btn th-btn style-radius"
                onClick={() =>
                  handleOpenModal(
                    "",
                    "Кандидатствайте за стаж",
                    "internship" // important: internship mode
                  )
                }
              >
                Кандидатствайте за стаж
              </button>
            </div>
            <div className="internship-image">
              <img
                src="/assets/new-img/internship_1.webp"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* JOB SECTION START */}
      <section ref={openingRef} className="hiring-section container">
        <h2 className="text-center mb-4" style={{ fontWeight: "700" }}>
          Свободни позиции
        </h2>

        <div className="hiring-grid">
          {jobData
            .filter((job) => job.active) // only show active jobs
            .map((job, index) => (
              <div className="hiring-card fade-card" key={job.id || index}>
                <h3 className="hiring-title">{job.title}</h3>

                <p className="hiring-detail">
                  <strong>Опит:</strong> {job.experience}
                </p>
                <p className="hiring-detail">
                  <strong>Местоположение:</strong> {job.location}
                </p>
                <p className="hiring-skill">
                  <strong>Необходими умения:</strong>
                  <br /> {job.skills}
                </p>
                <button
                  className="apply-btn th-btn style-radius"
                  onClick={() =>
                    handleOpenModal(
                      job.title,
                      `Кандидатствайте за ${job.title}`,
                      "job" // job mode
                    )
                  }
                >
                  Кандидатствайте сега
                </button>
              </div>
            ))}
        </div>

        {/* ---------- Modal ---------- */}
        {isQuoteModalOpen && (
          <Modal onClose={closeQuoteModal}>
            <NewApplyNowModal
              title={modalTitle}
              selectedRole={selectedRole}
              roleOptions={
                roleMode === "internship"
                  ? internshipRoleOptions
                  : jobRoleOptions
              }
              roleMode={roleMode}
            />
          </Modal>
        )}

        {/* GENERAL APPLICATION SECTION */}
        <section
          className="general-apply-section container"
          style={{ marginTop: "60px", textAlign: "center" }}
        >
          <h2 style={{ fontWeight: "700" }}>
            Търсите друга роля? Уведомете ни
          </h2>
          <button
            className="apply-btn th-btn style-radius"
            onClick={() =>
              handleOpenModal(
                "",
                "Изразете интерес",
                "job" // general → job roles only
              )
            }
          >
            Кандидатствайте въпреки това
          </button>
        </section>

        <NewGallery />
      </section>
    </>
  );
}

export default CareerClient
