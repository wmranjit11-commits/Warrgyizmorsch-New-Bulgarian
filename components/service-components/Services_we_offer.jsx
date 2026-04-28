import React from 'react'
import SafeHtml from "../common-components/safeHtml";

const Services_we_offer = ({data}) => {
  return (
    <div className="services-container">
      <style>{`

        .header-section{
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }
        .header-section img{
            height: 400px;
        }
        .header-section p{
            text-align: left;
        }

        @media only screen and (max-width: 990px) {
        .header-section{
            flex-direction: column;
        }
        .header-section img{
            height: 200px;
        }
            .header-section p{
            text-align: center;
        }
        }
        
        .services-container {
          font-family: 'Segoe UI', sans-serif;
          background-color:rgb(229, 236, 250);
          margin: auto;
          padding: 60px 0px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          color: #333;
        }

        .section-title {
          color: #18336c;
          animation: fadeInDown 0.8s ease forwards;
        }

        .section-description {
          animation: fadeIn 1s ease-in-out;
        }

        .platforms {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .platform {
          background: #fff;
          border: 1px solid #dfe7f3;
          display:flex;
          flex-direction: column;
          align-items: center;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0px 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          animation: fadeInUp 0.8s ease-in-out;
        }

        .platform:hover {
          transform: translateY(-5px);
          box-shadow: 0 0px 30px #18336c;
        }

        .platform img {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
        }

        .platform h3 {
          font-size: 1.3rem;
          color: #18336c;
          margin-bottom: 10px;
        }

        .platform p {
          font-size: 1rem;
          line-height: 1.6;
        }

        .speed-optimization {
          background: #18336c;
          color: #fff;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          animation: fadeInUp 0.8s ease-in-out;
        }

        .speed-optimization h3 {
          font-size: 1.6rem;
          color: white;
          margin-bottom: 15px;
        }

        .speed-optimization p {
          font-size: 1.05rem;
          line-height: 1.8;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container">
        <SafeHtml
          as="h2"
          className={"new-section-title text-left!"}
          html={data?.heading}
        />
        <SafeHtml
          as="p"
          className="section-description"
          html={data?.description}
        />

        {data?.services && (
          <div className="platforms">
            {data.services.map((service, index) => {
              return (
                <div key={index} className="platform">
                  {service?.logo && (
                    <img
                      src={service.logo}
                      loading="lazy"
                      alt={service?.name}
                    />
                  )}
                  <SafeHtml as="h3" html={service?.name} />
                  <SafeHtml as="p" html={service?.content} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services_we_offer
