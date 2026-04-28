"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { serviceCardData as Services } from "../../data/All_Services_Data/allServices2";
import NewContactModal from "../home-page-components/NewContactModal";
import Modal from "../home-page-components/Modal";
import { ArrowRight } from "lucide-react";
import { IndustryData } from "../../data/Industry_Data/allIndustryData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    services: false,
    technologies: false,
    industry: false,
    company: false,
    activeSubServiceIndex: null,
    activeSubTechnologyIndex: null,
    activeSubIndustryIndex: null,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubMenu({
      services: false,
      technologies: false,
      industry: false,
      company: false,
      activeSubServiceIndex: null,
      activeSubTechnologyIndex: null,
      activeSubIndustryIndex: null,
    });
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleSubMenu = (key, index = null) => {
    setOpenSubMenu((prev) => {
      const newState = { ...prev };

      if (key === "services") {
        newState.services = !prev.services;
        newState.activeSubServiceIndex = null;
      }

      if (key === "subService") {
        newState.activeSubServiceIndex =
          prev.activeSubServiceIndex === index ? null : index;
      }

      if (key === "industry") {
        newState.industry = !prev.industry;
        newState.activeSubIndustryIndex = null;
      }

      if (key === "subIndustry") {
        newState.activeSubIndustryIndex =
          prev.activeSubIndustryIndex === index ? null : index;
      }

      if (key === "company") {
        newState.company = !prev.company;
      }

      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ---------- Mobile Menu ---------- */}
      <div className={`th-menu-wrapper ${isMenuOpen ? "th-body-visible" : ""}`}>
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={closeMenu}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/" onClick={closeMenu} className="flex justify-center">
              <img
                src="/assets/img/warrgyizmorsch-logo2.png"
                alt="warrgyizmorsch"
                style={{ height: "100px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className={`menu-item-has-children th-item-has-children ${openSubMenu.services ? "th-active" : ""}`}>
                <Link href="#" onClick={() => toggleSubMenu("services")}>
                  Услуги<span className="th-mean-expand"></span>
                </Link>
                <ul className={`sub-menu th-submenu ${openSubMenu.services ? "th-open" : ""}`} style={{ display: openSubMenu.services ? "block" : "none" }}>
                  <li><Link href="/services" onClick={closeMenu}>Всички услуги</Link></li>
                  {Services?.map((service, index) => (
                    service?.children ? (
                      <li key={index} className={`menu-item-has-children th-item-has-children ${openSubMenu.activeSubServiceIndex === index ? "th-active" : ""}`}>
                        <Link href="#" onClick={() => toggleSubMenu("subService", index)}>{service.title}</Link>
                        <ul className={`sub-menu th-submenu ${openSubMenu.activeSubServiceIndex === index ? "th-open" : ""}`} style={{ display: openSubMenu.activeSubServiceIndex === index ? "block" : "none" }}>
                          {service?.children?.map((subService, id) => (
                            <li key={id}><Link href={subService.link} onClick={closeMenu}>{subService.name}</Link></li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={index}><Link href={service.link} onClick={closeMenu}>{service.title}</Link></li>
                    )
                  ))}
                </ul>
              </li>

              <li className={`menu-item-has-children th-item-has-children ${openSubMenu.industry ? "th-active" : ""}`}>
                <Link href="#" onClick={() => toggleSubMenu("industry")}>
                  Индустрия<span className="th-mean-expand"></span>
                </Link>
                <ul className={`sub-menu th-submenu ${openSubMenu.industry ? "th-open" : ""}`} style={{ display: openSubMenu.industry ? "block" : "none" }}>
                  {IndustryData?.map((industry, index) => (
                    industry?.children ? (
                      <li key={index} className={`menu-item-has-children th-item-has-children ${openSubMenu.activeSubIndustryIndex === index ? "th-active" : ""}`}>
                        <Link href="#" onClick={() => toggleSubMenu("subIndustry", index)}>{industry.title}</Link>
                        <ul className={`sub-menu th-submenu ${openSubMenu.activeSubIndustryIndex === index ? "th-open" : ""}`} style={{ display: openSubMenu.activeSubIndustryIndex === index ? "block" : "none" }}>
                          {industry?.children?.map((subIndustry, id) => (
                            <li key={id}><Link href={subIndustry.link} onClick={closeMenu}>{subIndustry.name}</Link></li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={index}><Link href={industry.link} onClick={closeMenu}>{industry.title}</Link></li>
                    )
                  ))}
                </ul>
              </li>

              <li><Link href="/case-study" onClick={closeMenu}>Кейс стадита</Link></li>
              <li><Link href="/blog" onClick={closeMenu}>Блогове</Link></li>

              <li className={`menu-item-has-children th-item-has-children ${openSubMenu.company ? "th-active" : ""}`}>
                <Link href="#" onClick={() => toggleSubMenu("company")}>
                  Компания<span className="th-mean-expand"></span>
                </Link>
                <ul className={`sub-menu th-submenu ${openSubMenu.company ? "th-open" : ""}`} style={{ display: openSubMenu.company ? "block" : "none" }}>
                  <li><Link href="/about-us" onClick={closeMenu}>За нас</Link></li>
                  <li><Link href="/uk-subsidiary" onClick={closeMenu}>Филиал в Обединеното кралство</Link></li>
                  <li><Link href="/meet-our-team" onClick={closeMenu}>Запознайте се с нашия екип</Link></li>
                  <li><Link href="/career" onClick={closeMenu}>Кариери</Link></li>
                  <li><Link href="/graduate-trainee-programme" onClick={closeMenu}>Програма за стажанти</Link></li>
                </ul>
              </li>

              <li><Link href="/contact-us" onClick={closeMenu}>Контакти</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Header for Web ---------- */}
      <header className="th-header header-layout4" style={{ position: "relative", backgroundColor: "#18336c" }}>
        <div className="header-top" style={{ background: "black" }}>
          <div className="container">
            <div className="row justify-content-left justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-lg-block">
                <div className="header-links">
                  <ul>
                    <li className="hide-on-mobile">
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel:+447789161193">+44 7789161193, </a>
                      <a href="tel:+919257874994"> +91 9257874994</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto hide-on-mobile">
                <div className="header-social">
                  <span className="social-title">Последвайте ни в : </span>
                  <a href="https://www.facebook.com/share/1E5k3uqY3x/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/company/warrgyiz-morsch/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/warrgyiz_morsch" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/warrgyizmorsch" target="_blank" rel="noopener noreferrer">
                    <i className="fab"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#fff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area p-0" style={{ background: "white" }}>
            <div className="container th-container5">
              <div className="row align-items-center justify-content-start flex-nowrap">
                <div className="col-auto">
                  <div style={{ padding: "5px 0px" }}>
                    <Link className="icon-masking" href="/">
                      <img src="/assets/img/WARR LOGO.webp" alt="warrgyizmorsch" style={{ height: "45px", width: "auto", background: "none" }} />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <Link href="/services">Услуги</Link>
                        <ul className="sub-menu">
                          {Services.map((service, index) => (
                            service?.children ? (
                              <li key={index} className="menu-item-has-children">
                                <Link href={service.link}>{service.title}</Link>
                                <ul className="sub-menu">
                                  {service.children.map((subService, id) => (
                                    <li key={id}><Link href={subService.link}>{subService.name}</Link></li>
                                  ))}
                                </ul>
                              </li>
                            ) : (
                              <li key={index}><Link href={service.link}>{service.title}</Link></li>
                            )
                          ))}
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Индустрия</Link>
                        <ul className="sub-menu">
                          {IndustryData.map((item, index) => (
                            <li key={index}><Link href={item.link}>{item.title}</Link></li>
                          ))}
                        </ul>
                      </li>
                      <li><Link href="/case-study">Кейс стадита</Link></li>
                      <li><Link href="/blog">Блогове</Link></li>
                      <li className="menu-item-has-children">
                        <Link href="#">Компания</Link>
                        <ul className="sub-menu">
                          <li><Link href="/about-us">За нас</Link></li>
                          <li><Link href="/uk-subsidiary">Филиал в Обединеното кралство</Link></li>
                          <li><Link href="/meet-our-team">Запознайте се с нашия екип</Link></li>
                          <li><Link href="/career">Кариери</Link></li>
                          <li><Link href="/graduate-trainee-programme">Програма за стажанти</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact-us">Контакти</Link></li>
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMenu} style={{ color: "var(--new-theme-color)", backgroundColor: "white" }}>
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto ms-auto d-none d-lg-inline-block">
                  <div className="header-button">
                    <button onClick={() => { if (window.Calendly) { window.Calendly.initPopupWidget({ url: "https://calendly.com/warrgyizmorschdigital/30min" }); } }} className="th-btn style-radius" style={{ padding: "10px 20px", border: "none", cursor: "pointer", display: "flex", gap: "10px", alignItems: "center" }}>
                      Запазете стратегическа консултация <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isQuoteModalOpen && (
        <Modal onClose={closeQuoteModal}>
          <NewContactModal />
        </Modal>
      )}
    </>
  );
};

export default Header;
