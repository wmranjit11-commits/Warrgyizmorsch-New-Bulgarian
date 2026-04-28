"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const City_Pages_links = () => {
  const pathname = usePathname();
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 640) setVisibleCount(6);
      else if (window.innerWidth <= 1024) setVisibleCount(8);
      else setVisibleCount(12);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const allLinks = [
    { title: "API Development in Udaipur", path: "/api-development-company-in-udaipur" },
    { title: "Content Marketing in Udaipur", path: "/content-marketing-agency-in-udaipur" },
    { title: "E-Commerce Website in Udaipur", path: "/ecommerce-websites-development-in-udaipur" },
    { title: "Email Marketing in Udaipur", path: "/email-marketing-services-in-udaipur" },
    { title: "Digital Marketing in Udaipur", path: "/digital-marketing-company-in-udaipur" },
    { title: "Enterprise Software Development in Udaipur", path: "/enterprise-software-development-company-in-udaipur" },
    { title: "FullStack Development in Udaipur", path: "/full-stack-web-development-in-udaipur" },
    { title: "IT Company in Udaipur", path: "/it-company-in-udaipur" },
    { title: "Mobile Application in Udaipur", path: "/mobile-application-development-in-udaipur" },
    { title: "PPC Marketing in Udaipur", path: "/ppc-marketing-company-in-udaipur" },
    { title: "SEO Company in Udaipur", path: "/seo-company-in-udaipur" },
    { title: "Social Media Marketing in Udaipur", path: "/social-media-marketing-agency-in-udaipur" },
    { title: "Software Development in Udaipur", path: "/software-development-company-in-udaipur" },
    { title: "Web Development in Udaipur", path: "/web-development-company-in-udaipur" },
    { title: "Web Page Maintenance in Udaipur", path: "/web-page-maintenance-in-udaipur" },

    // AUSTRALIA Pages
    { title: "Digital Marketing in Australia", path: "/digital-marketing-agency-in-australia" },
    { title: "Web Development in Australia", path: "/web-development-company-in-australia" },
    { title: "Software Development in Australia", path: "/software-development-company-in-australia" },

    { title: "Digital Marketing in Melbourne", path: "/digital-marketing-service-in-melbourne" },
    { title: "Web Development in Melbourne", path: "/web-development-company-in-melbourne" },
    { title: "Software Development in Melbourne", path: "/software-development-company-melbourne" },

    { title: "Digital Marketing in Sydney", path: "/digital-marketing-agency-in-sydney" },
    { title: "Web Development in Sydney", path: "/web-development-company-in-sydney" },
    { title: "Software Development in Sydney", path: "/software-development-agency-in-sydney" },

    { title: "Digital Marketing in Perth", path: "/digital-marketing-agency-in-perth" },
    { title: "Web Development in Perth", path: "/web-development-in-perth" },
    { title: "Software Development in Perth", path: "/software-development-company-in-perth" },

    // UK Pages
    { title: "Website Development in UK", path: "/website-development-company-in-uk" },
    { title: "Software Development in UK", path: "/software-development-company-uk" },
    { title: "Mobile App Development in UK", path: "/mobile-app-development-agency-in-uk" },
    { title: "Digital Marketing in UK", path: "/best-digital-marketing-agency-in-uk" },
    { title: "AI Mobile App Development in UK", path: "/ai-mobile-app-development-service-in-uk" },
    { title: "AI Software Development in UK", path: "/ai-software-development-in-uk" },
    { title: "AI Consulting in UK", path: "/ai-consulting-services-in-uk" },
    { title: "AI Digital Marketing in UK", path: "/ai-digital-marketing-service-in-uk" },
    { title: "AI Web Development in UK", path: "/ai-web-development-service-in-uk" },

    { title: "Digital Marketing in London", path: "/digital-marketing-agencies-in-london" },
    { title: "Web Development in London", path: "/web-development-company-in-london" },
    { title: "Software Development in London", path: "/software-development-companies-in-london" },
    { title: "Mobile App Development in London", path: "/mobile-app-development-company-london" },

    { title: "Digital Marketing in Liverpool", path: "/digital-marketing-company-in-liverpool" },
    { title: "Web Development in Liverpool", path: "/web-development-company-in-liverpool" },
    { title: "Software Development in Liverpool", path: "/software-development-company-liverpool" },
    { title: "Mobile App Development in Liverpool", path: "/mobile-app-development-company-in-liverpool" },

    { title: "Digital Marketing in Manchester", path: "/digital-marketing-agency-in-manchester" },
    { title: "Web Development in Manchester", path: "/web-development-company-in-manchester" },
    { title: "Software Development in Manchester", path: "/software-development-in-manchester" },
    { title: "Mobile App Development in Manchester", path: "/mobile-application-development-agency-in-manchester" },

    { title: "Digital Marketing in Bristol", path: "/digital-marketing-agency-in-bristol" },
    { title: "Web Development in Bristol", path: "/web-development-company-in-bristol" },
    { title: "Software Development in Bristol", path: "/software-development-company-in-bristol" },
    { title: "Mobile App Development in Bristol", path: "/mobile-app-development-in-bristol" },

    // India Pages
    
    { title: "AI Software Development in India", path: "/ai-software-development-service-in-india" },
    { title: "AI App Development in India", path: "/ai-app-development-services-in-india" },
    { title: "AI Consulting in India", path: "/ai-consulting-in-india" },
    { title: "AI Digital Marketing in India", path: "/ai-digital-marketing-service-in-india" },
    { title: "AI Web Development in India", path: "/ai-web-development-service-in-india" },

    //USA Page

    { title: "Website Development in USA", path: "/website-development-company-in-usa" },
    { title: "Software Development in USA", path: "/software-development-company-in-the-usa" },
    { title: "Digital Marketing in USA", path: "/digital-marketing-companies-in-usa" },
    
    
    { title: "Software Development in New York", path: "/software-development-company-in-new-york" },
    { title: "Web Development in New York", path: "/web-development-company-in-new-york" },
    { title: "Digital Marketing in New York", path: "/digital-marketing-agency-in-new-york" },
    { title: "Mobile App Development in New York", path: "/mobile-app-development-company-in-new-york" },
    { title: "IT Services in New York", path: "/it-services-company-in-new-york" },
    { title: "Search Engine Optimization in New York", path: "/search-engine-optimization-company-new-york-city" },
    { title: "Email Marketing in New York", path: "/email-marketing-services-in-new-york" },


    { title: "Software Development in Seattle", path: "/software-development-agency-in-seattle" },
    { title: "Web Development in Seattle", path: "/web-development-company-in-seattle" },
    { title: "Digital Marketing in Seattle", path: "/digital-marketing-company-in-seattle" },
    { title: "Mobile Application Development in Seattle", path: "/mobile-application-development-in-seattle" },
    { title: "IT Consulting in Seattle", path: "/it-consulting-in-seattle" },
    { title: "Search Engine Optimization in Seattle", path: "/search-engine-optimization-company-in-seattle" },
    { title: "Email Marketing in Seattle", path: "/email-marketing-services-in-seattle" },


    { title: "Software Development in San Francisco", path: "/software-development-company-in-san-francisco" },
    { title: "Web Development in San Francisco", path: "/web-development-company-san-francisco" },
    { title: "Digital Marketing in San Francisco", path: "/digital-marketing-agencies-in-san-francisco" },
    { title: "Mobile App Development in San Francisco", path: "/mobile-app-development-company-san-francisco" },
    { title: "IT Solutions in San Francisco", path: "/it-solutions-san-francisco" },
    { title: "Search Engine Optimization in San Francisco", path: "/search-engine-optimization-san-francisco" },
    { title: "Email Marketing in San Francisco", path: "/email-marketing-agency-in-san-francisco" },

  ];

  const filteredLinks = allLinks.filter((link) => {
    const currentCity = pathname.split("-").pop()?.toLowerCase(); 
    return link.path.toLowerCase().includes(currentCity || "");
  });

  const linksToDisplay = showAll ? filteredLinks : filteredLinks.slice(0, visibleCount);

  if (filteredLinks.length === 0) return null;

  return (
    <section className="city-pages-links-section">
      <div className="container">
        <h2 className="new-section-title text-left! text-(--new-theme-color)!">
          Разгледайте още наши услуги във вашия град
        </h2>

        <div className="city-global-links-grid">
          {linksToDisplay.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`city-global-link-item ${pathname === item.path ? "active" : ""}`}
            >
              <span className="arrow-icon">➔</span>
              <span className="link-text">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* VIEW MORE / LESS */}
        {filteredLinks.length > visibleCount && (
          <div className="view-more-wrapper">
            <button
              className="th-btn style-radius"
              onClick={() => setShowAll(!showAll)}
              style={{ marginTop: "20px" }}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .city-pages-links-section {
          padding: 1rem 0;
          background: #ffffff;
        }

        .city-pages-links-heading {
          font-size: 2rem;
          font-weight: 600;
          color: var(--new-theme-color);
          margin-bottom: 1.5rem;
        }

        .city-global-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); 
          gap: 15px 25px;
        }

        @media (max-width: 1024px) {
          .city-global-links-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .city-global-links-grid { grid-template-columns: 1fr; }
        }

        .city-global-link-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          text-decoration: none;
          color: #062b3f; 
          font-size: 15px;
          transition: 0.3s;
          line-height: 1.4;
        }

        .arrow-icon {
          color: black; 
          font-size: 14px;
          margin-top: 2px;
        }

        .link-text {
          transition: 0.3s;
        }

        .city-global-link-item:hover .link-text {
          color: var(--new-theme-color); 
          transform: translateX(5px);
        }

        .city-global-link-item.active .link-text {
          font-weight: 700;
          color: var(--new-theme-color);
        }

        .view-more-wrapper {
          text-align: left;
        }
      `}</style>
    </section>
  );
};

export default City_Pages_links;