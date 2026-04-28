"use client";
import { useEffect } from "react";

const NewHero = () => {
  useEffect(() => {
    const video = document.getElementById("background-video");
    if (video) {
      video.playbackRate = 0.75;
      video.play().catch((err) => {
        // handle autoplay block (optional)
        console.log("Autoplay failed: ", err);
      });
    }
  }, []);

  return (
    <div className="th-hero-wrapper hero-5" id="hero">
      {/* Local Video Background */}
      <div className="video-background">
        <video
          id="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto" // help browser preload only once
          className="background-video"
        >
          <source
            src="/assets/new-img/Warrgyizmorsch-new.mp4"
            type="video/mp4"
          />
          Вашият браузър не поддържа видео тага.
        </video>
      </div>

      <style>{`

          .th-hero-wrapper.hero-5 {
            height: 115vh;
            justify-content: flex-end;
          }

          @media (max-width: 768px) {
            .th-hero-wrapper.hero-5 {
              height: 100vh;
            }
          }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: auto;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }

      `}</style>
    </div>
  );
};

export default NewHero;
