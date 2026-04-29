"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout2"
        data-bg-src="assets/img/bg/footer_bg_1.jpg"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <img
                        src="/assets/img/WARR LOGO WHITE.webp"
                        alt="warrgyizmorsch"
                        style={{
                          height: "45px",
                          width: "auto",
                          background: "none",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                    <p className="about-text" style={{ color: "white" }}>
                      Добре дошли в Warrgyizmorsch, вашият източник номер едно за всички
                      аутсорсинг услуги. Ние сме посветени на това да ви предоставим
                      най-добрите технически и нетехнически услуги,
                      с акцент върху спазването на крайните срокове, задоволителното
                      обслужване и 24/7 поддръжка.
                    </p>
                    <div className="th-social">
                      <a
                        href="https://www.linkedin.com/company/warrgyiz-morsch/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/assets/new-img/svg/linkedin.svg" />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1E5k3uqY3x/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/assets/new-img/svg/facebook.svg" />
                      </a>
                      <a
                        href="https://www.instagram.com/warrgyiz_morsch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/assets/new-img/svg/instagram.svg" />
                      </a>
                      <a
                        href="https://wa.me/447789161193"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/assets/new-img/svg/whatsapp.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Бързи връзки</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/">Начало</Link>
                      </li>
                      <li>
                        <Link href="/about-us">За нас</Link>
                      </li>
                      <li>
                        <Link href="/services">Услуги</Link>
                      </li>
                      <li>
                        <Link href="/career">Кариери</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Кейс стадита</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Контакти</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Кратки връзки</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/blog">Блогове</Link>
                      </li>
                      <li>
                        <Link href="/digital-marketing-pricing">
                          Цени за дигитален маркетинг
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Политика за поверителност</Link>
                      </li>
                      <li>
                        <Link href="/terms-conditions">Правила и условия</Link>
                      </li>
                      <li>
                        <Link href="/cancellation-policy">
                          Политика за анулиране
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget">
                  <h3
                    className="widget_title"
                    style={{ maxWidth: "-webkit-fill-available" }}
                  >
                    Свържете се с нас!
                  </h3>
                  <div
                    className="th-widget-contact"
                    style={{ maxWidth: "-webkit-fill-available" }}
                  >
                    <p className="contact-feature_label">Местоположение на офиса</p>

                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="media-body">
                        <a
                          href="https://www.google.com/maps"
                          className="contact-feature_link"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          Warrgyizmorsch Private Limited, 410, 4-ти етаж,
                          Ашока Палас, Шобхагпура, Udaipur, Rajasthan, Индия
                        </a>
                      </div>
                    </div>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="media-body">
                        <a
                          href="https://www.google.com/maps"
                          className="contact-feature_link"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          312, Пентакс Хаус, Саут Хил Авеню, Саут Хароу,
                          Мидълсекс, HA2 0DU, United Kingdom
                        </a>
                      </div>
                    </div>

                    <p className="contact-feature_label">Телефонен номер</p>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="media-body">
                        <a
                          href="tel:+919257874994"
                          className="contact-feature_link"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          +91 9257874994
                        </a>
                        <a
                          href="tel:+447789161193"
                          className="contact-feature_link"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          +44 7789161193
                        </a>
                      </div>
                    </div>

                    <p className="contact-feature_label">Имейл адрес</p>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="media-body">
                        <a
                          href="mailto:info@warrgyizmorsch.com"
                          className="contact-feature_link"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          info@warrgyizmorsch.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap bg-theme">
          <div className="container">
            <hr
              style={{ opacity: 1, backgroundColor: "white", margin: "5px" }}
            />
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-12">
                <p className="copyright-text" style={{ marginLeft: "5px" }}>
                  Copyright <i className="fal fa-copyright"></i>{" "}
                  {new Date().getFullYear()}
                  <a href="https://warrgyizmorsch.com"> Warrgyizmorsch</a>. Всички права запазени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
