import React, { useEffect } from "react";

const AnimatedMissionVisionValueSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="about-section overflow-hidden">
        <div className="container">
          <div className="about-block">
            <div className="about-image fade-in-left">
              <img src="assets/img/icon/missionImage.jpg" alt="Our Mission" />
            </div>
            <div className="about-content fade-in-right">
              <h2 className="about-title h3">Нашата мисия</h2>
              <p className="about-text">
                Нашата мисия е да овластим бизнеса с надеждни, иновативни и
                индивидуални дигитални решения. Стремим се да предоставяме уеб
                разработки, дигитални услуги и технологично ориентирани
                стратегии, които са уникални за всеки клиент. Чрез качество,
                прозрачност и удовлетвореност на клиентите, ние улесняваме
                растежа, конкуренцията и успеха на нашите клиенти в дигиталното
                пространство. Вярваме в изграждането на дълготрайни
                взаимоотношения, основани на доверие и ефективност. Всяка
                задача, която поемаме, се третира с голямо уважение и
                искреност, следователно резултатите трябва действително да се
                броят и да добавят голяма стойност към бизнеса, с който си
                сътрудничим.
              </p>
            </div>
          </div>

          <div className="about-block reverse">
            <div className="about-image fade-in-left">
              <img src="assets/img/icon/visionImage.jpg" alt="Our Vision" />
            </div>
            <div className="about-content fade-in-right">
              <h2 className="about-title h3">Нашата визия</h2>
              <p className="about-text">
                Нашата визия е да бъдем водеща агенция за дигитални услуги,
                известна със своето съвършенство, иновации и клиентски успех.
                Стремим се да изградим бъдеще, в което малките и средни компании
                могат да придобият мощни, мащабируеми и лесни за използване
                технологични решения за своя растеж. Нашата цел е да поставим
                много високи стандарти в уеб дизайна, онлайн маркетинга и онлайн
                решенията чрез постоянно развитие според дигиталния пейзаж.
                Представяме си ера, в която технологията действа като мост между
                бизнеса и неговите клиенти, и искаме да бъдем в челните редици
                на това да направим този мост по-здрав, по-умен и по-смислен.
              </p>
            </div>
          </div>

          <div className="about-block">
            <div className="about-image fade-in-left">
              <img src="assets/img/icon/our_goal.jpg" alt="Our Value" />
            </div>
            <div className="about-content fade-in-right">
              <h2 className="about-title h3">Нашата цел</h2>
              <p className="about-text">
                Нашата цел е да предлагаме практически и ефективни дигитални
                решения, от които има измерима полза за бизнеса. Фокусираме се
                върху дигиталното подобряване на нашите клиенти заедно с тяхната
                ефективност и насърчаваме техния растеж в дългосрочен план. Всяка
                стратегия, която разработваме, и всяка услуга, която предоставяме,
                са свързани с целите на клиента по отношение на неговите нужди
                на пазара. Искаме да направим сложните дигитални въпроси лесни с
                решения, които са привлекателни и лесни за следване. Било то
                уебсайт за клиент, чрез който да продава продуктите си, или
                мобилно приложение, съчетано с управление на данни и маркетинг,
                всичко, което правим, трябва да носи стойност и да създава
                положителна промяна в бизнеса.
              </p>
            </div>
          </div>
        </div>

        {/* Internal CSS */}
        <style>{`
          .about-section {
            padding: 4rem 1rem;
            background-color: #d4d4d8;
          }

          .about-block {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;
            gap: 2rem;
          }

          .about-block.reverse {
            flex-direction: row-reverse;
          }

          .about-image, .about-content {
            flex: 1;
            width: 50%;
          }

          .about-image img {
            width: 100%;
            height: 300px;
            border-radius: 1rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .about-title {
            color: #18336c;
            margin-bottom: 1rem;
          }

          .about-text {
            color: #444;
          }

          .fade-in-left, .fade-in-right {
            opacity: 0;
            transition: all 0.6s ease-out;
          }

          .fade-in-left {
            transform: translateX(-50px);
          }

          .fade-in-right {
            transform: translateX(50px);
          }

          .fade-in-left.show, .fade-in-right.show {
            opacity: 1;
            transform: translateX(0);
          }

          .change-background-color{
            padding: 3rem 0px;
            background-color: #bfcee0;
          }

          @media (max-width: 768px) {
            .about-block, .about-block.reverse {
              flex-direction: column;
              text-align: center;
            }

            .about-image, .about-content {
              width: 83%;
            }

            .about-image img {
              height:180px;
            }
          }

          .gradient-bg {
            padding: 5rem 1rem;
            color: white;
            background: linear-gradient(135deg, #64AFF5, #9CC0F7, #B8E7FC, #B8E7FC);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        `}</style>
      </section>
    </>
  );
};

export default AnimatedMissionVisionValueSection;
