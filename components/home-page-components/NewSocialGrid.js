"use client";

const socialPosts = [
  {
    id: 1,
    type: "video",
    embed: "https://www.instagram.com/reel/DXJZwkxCMoj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    type: "video",
    embed: "https://www.instagram.com/reel/DB_EXAMPLE/embed",
  },
  {
    id: 3,
    type: "video",
    embed: "https://www.instagram.com/reel/DC_EXAMPLE/embed",
  },
  {
    id: 4,
    type: "video",
    embed: "https://www.instagram.com/reel/DD_EXAMPLE/embed",
  },
];

const NewSocialGrid = () => {
  return (
    <section className="social-section">
      <div className="container">
        <h2>Последвайте ни в социалните медии</h2>
        <p>Последни актуализации, рийлс и творческа работа</p>

        <div className="social-grid">
          {socialPosts.map((post) => (
            <div key={post.id} className="social-card">
              <iframe
                src={post.embed}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-section {
          padding: 60px 20px;
          background: #f9fafc;
          text-align: center;
        }

        .social-section h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .social-section p {
          color: #666;
          margin-bottom: 40px;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .social-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
      `}</style>
    </section>
  );
};

export default NewSocialGrid;