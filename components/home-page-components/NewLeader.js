"use client";
import Link from "next/link";
import React from "react";

const NewLeader = () => {
  return (
    <section className="new-leader-wrap" aria-labelledby="new-leader-title">
      <style>{`
        :root{
          --nl-bg:#0b0d10;
          --nl-card:#111418;
        }

        .new-leader-wrap{ background:var(--nl-bg); padding:25px 0 5px; }

        /* Header */
        .new-leader-eyebrow{
          font-weight:600;
          font-size:35px; letter-spacing:.2px; margin:0 0 10px; line-height: 1.4;
        }
        .new-leader-title{
          color:white; font-size:32px; line-height:1.2;
          font-weight:500; margin:0 0 30px;
        }
        @media (min-width:1100px){ .new-leader-title{ font-size:35px; } }

        /* Row layout */
        .new-leader-row{
          display:grid; gap:82px; align-items:center;
          grid-template-columns: 1.1fr 0.9fr;
          margin-bottom:42px;
        }

        .new-leader-row.reverse{ grid-template-columns: 0.9fr 1.1fr; }
        @media (max-width:980px){
          .new-leader-row, .new-leader-row.reverse{
            grid-template-columns:1fr; gap:22px;
          }
        }

        /* Image */
        .new-leader-imgWrap{
          background:var(--nl-card);
          border-radius:22px; overflow:hidden;
          box-shadow:0 18px 32px rgba(0,0,0,.35);
        }
        .new-leader-img{
          width:100%; height:100%; display:block; object-fit:cover;
          aspect-ratio: 16 / 10;
        }

        /* Copy */
        .new-leader-name{
          color:#fff; font-weight:500; font-size:32px; margin:0 0 6px;
        }
        .new-leader-role{
          color:var(--new-theme-color); font-weight:400; margin:0 0 12px; font-size:20px;
        }
        .new-leader-p{
          color: white; font-size:14.5px; line-height:1.7; margin:0 0 12px;
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <p className="new-leader-eyebrow new-italic">Опитно ръководство</p>
        <h2 id="new-leader-title" className="new-leader-title">
          Запознайте се с нашите лидери
        </h2>

        {/* Leader 1 (text left, image right) */}
        <div className="new-leader-row">
          <div>
            <h3 className="new-leader-name">Mr. Mahipal Singh Rathore</h3>

            <div
              style={{ margin: "10px 0 10px 0" }}
              className="new-leader-imgWrap hide-on-desktop"
            >
              <img
                className="new-leader-img"
                src="/assets/new-img/CEO.webp"
                alt="Mr. Mahipal Singh Rathore"
              />
            </div>

            <div className="new-leader-role">Главен изпълнителен директор (CEO)</div>
            <p className="new-leader-p">
              Махипал Сингх Ратор управлява Warrgyiz Morsch с ясна визия,
              безстрашна стратегия и резултати, които говорят по-силно от обещанията.
              Естествен визионер и стратег, той ръководи с прецизност —
              овладявайки иновациите, растежа и изпълнението. Неговият фокус?
              Да изпреварва тенденциите, да изгражда силни партньорства и да превръща всяко
              предизвикателство в предимство.
            </p>
            <p className="new-leader-p"></p>

            <div>
              <Link href={"/about-us"} className=" th-btn style-radius">
                За нас →
              </Link>
            </div>
          </div>

          <div className="new-leader-imgWrap hide-on-mobile">
            <img
              className="new-leader-img"
              src="/assets/new-img/CEO.webp"
              alt="Mr. Mahipal Singh Rathore"
            />
          </div>
        </div>

        {/* Leader 2 (image left, text right) */}
        <div className="new-leader-row reverse">
          <div className="new-leader-imgWrap hide-on-mobile">
            <img
              className="new-leader-img"
              src="/assets/new-img/COO.webp"
              alt="Mr. Yashpal Singh Rathore"
            />
          </div>

          <div>
            <h3 className="new-leader-name">Mr.Yashpal Singh Rathore</h3>

            <div
              style={{ margin: "10px 0 10px 0" }}
              className="new-leader-imgWrap hide-on-desktop"
            >
              <img
                className="new-leader-img"
                src="/assets/new-img/COO.webp"
                alt="Mr. Yashpal Singh Rathore"
              />
            </div>

            <div className="new-leader-role">Финансов директор (CFO)</div>
            <p className="new-leader-p">
              Яшпал Сингх Ратор управлява операциите като прецизен двигател —
              оптимизирано, смело и винаги в целта. Той превръща плановете в
              изпълнение, хаоса в ред, а екипите — в мощни двигатели. С
              остър поглед към оптимизацията и доставката, той гарантира, че Warrgyiz
              Morsch работи със скорост, дисциплина и въздействие.
            </p>
            <p className="new-leader-p"></p>

            <div>
              <Link href={"/about-us"} className=" th-btn style-radius">
                За нас →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLeader;
