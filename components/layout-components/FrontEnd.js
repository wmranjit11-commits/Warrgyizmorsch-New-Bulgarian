"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const FrontEnd = ({ children }) => {
  const pathname = usePathname();

  // ✅ hide everything on /lp routes
  const hideLayout = pathname.startsWith("/lp");

  return (
    <>
      {/* HEADER */}
      {!hideLayout && <Header />}

      <main>{children}</main>

      {/* FOOTER */}
      {!hideLayout && <Footer />}

      {/* WHATSAPP FLOATING */}
      {!hideLayout && (
        <div className="floating-whatsapp">
          <a
            href="https://wa.me/447789161193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      )}

      {/* FLOATING INTERNET / CHAT WIDGET */}
      {!hideLayout && (
        <div className="floating-internet-widget">
          {/* existing widget code stays same */}
        </div>
      )}

      {/* LANGUAGE SELECTOR */}
      {!hideLayout && (
        <div className="language-switcher">
          {/* existing language selector code stays same */}
        </div>
      )}
    </>
  );
};

export default FrontEnd;
