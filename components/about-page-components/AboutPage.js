"use client";
import { useEffect } from "react";
import ClientTestimonialSection from "../../components/common-components/ClientTestimonialSection";
import Link from "next/link";
import AnimatedMissionVisionValueSection from "./AnimatedMissionVisionValueSection";
import OtherServices from "./OtherServices";
import AboutUsServicesSection from "./AboutUsServicesSection";
import Technology from "./OurTechnology";
// import Team from "./Team";

const AboutPage = () => {
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
      {/* Hero Section */}
      <div className="th-hero-wrapper hero-1 overflow-hidden!" id="hero">
        <div className="hero-img tilt-active flex justify-center">
          <img
            src="assets/img/hero/hero_img_1_1.png"
            loading="lazy"
            alt="Hero Image"
          />
        </div>
        <div className="container">
          <div className="hero-style1">
            {/* <span className="hero-subtitle">About</span> */}
            <h1>Център за уеб разработка и дигитални услуги : warrgyizmorsch</h1>
            <p>
              Ние сме Warrgyizmorsch: вашият партньор в дигиталния маркетинг.
              Warrgyizmorsch създава персонализирани решения за уеб разработка,
              електронна търговия, мобилни приложения, маркетинг и данни, които
              носят приходи за вашия бизнес. Нашият единствен фокус е върху
              иновациите, качеството и успеха на нашите клиенти, помагайки им да
              печелят в забързания дигитален свят.
              <br />
              <br />
              Основана през 2017 г., Warrgyizmorsch израстна от скромно начало,
              водена от страстта да поставя клиентите на първо място. Помогнахме
              на мнозина да развият бизнеса си с доверие и резултати.
              <br />
              <br />
              Надяваме се да се насладите на нашите услуги толкова, колкото ние се
              радваме да ги предлагаме. Чувствайте се свободни да се свържете с
              нас с всякакви въпроси или обратна връзка!
            </p>
            <div className="btn-group">
              <Link href="/contact-us" className="th-btn">
                СВЪРЖЕТЕ СЕ С НАС <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-shape1">
          <img
            src="assets/img/hero/hero_shape_1_1.svg"
            loading="lazy"
            alt="shape"
          />
        </div>
        <div className="hero-shape2">
          <img
            src="assets/img/hero/hero_shape_1_2.svg"
            loading="lazy"
            alt="shape"
          />
        </div>
        <div className="hero-shape3">
          <img
            src="assets/img/hero/hero_shape_1_3.svg"
            loading="lazy"
            alt="shape"
          />
        </div>
      </div>

      <AnimatedMissionVisionValueSection />

      {/* Our Services  */}
      <AboutUsServicesSection />

      {/* Other service  */}
      <OtherServices />

      {/* Our Technology  */}
      <Technology />
      {/* <Team /> */}

      {/* Client Testimonials  */}
      <ClientTestimonialSection />
    </>
  );
};

export default AboutPage;
