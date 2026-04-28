// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";
import "../public/assets/css/app.min.css";
import "../public/assets/css/fontawesome.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/new-Style.css";
import { BlogProvider } from "../context/BlogContext";

import FrontEnd from "../components/layout-components/FrontEnd";
import ScrollTopButton from "../components/layout-components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://warrgyizmorsch.com"),
  title:
    "WarrgyizMorsch | Цялостни ИТ решения, уеб разработка и дигитален маркетинг",
  description:
    "WarrgyizMorsch предлага експертни ИТ решения, услуги за уеб разработка и дигитален маркетинг, пригодени за растежа на вашия бизнес. Надеждна, ефективна и всеотдайна подкрепа за посрещане на вашите нужди.",
  robots: "index,follow",
  alternates: {
    canonical: "https://warrgyizmorsch.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ---------- Google Tag Manager (head) ---------- */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-PLPGMTXG');
            `,
          }}
        />

        {/* ---------- Calendly widget ---------- */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {/* ---------- Google Translate inline logic ---------- */}
        <Script
          id="google-translate-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function showTranslate() {
                const translateElement = document.getElementById('google_translate_element');
                if (!translateElement) return;
                translateElement.style.opacity = '1';
                translateElement.style.pointerEvents = 'auto';
              }

              function hideTranslate() {
                const translateElement = document.getElementById('google_translate_element');
                if (!translateElement) return;
                translateElement.style.opacity = '0';
                translateElement.style.pointerEvents = 'none';
              }

              // Called by Google script
              function googleTranslateElementInit() {
                const userLang = navigator.language || navigator.userLanguage;
                let pageLanguage = 'en';
                const supportedLanguages = ['en', 'bg', 'de'];
                const langCode = userLang.split('-')[0];

                if (supportedLanguages.includes(langCode)) {
                  pageLanguage = langCode;
                }

                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,bg,de',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');

                if (langCode !== 'en') {
                  setTimeout(() => {
                    const select = document.querySelector('.goog-te-combo');
                    if (select) {
                      select.value = langCode;
                      select.dispatchEvent(new Event('change'));
                    }
                  }, 1000);
                }
              }

              window.googleTranslateElementInit = googleTranslateElementInit;

              (function setupTranslateToggle() {
                function attachHandlers() {
                  const icon = document.getElementById('translateIcon');
                  const wrapper = document.getElementById('google_translate_wrapper');

                  if (!icon || !wrapper) {
                    // Try again shortly if elements not yet in DOM
                    setTimeout(attachHandlers, 300);
                    return;
                  }

                  icon.addEventListener('click', function (e) {
                    e.stopPropagation();
                    showTranslate();
                  });

                  document.addEventListener('click', function (e) {
                    if (!wrapper.contains(e.target)) {
                      hideTranslate();
                    }
                  });
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', attachHandlers);
                } else {
                  attachHandlers();
                }
              })();
            `,
          }}
        />

        {/* ---------- Google Translate script ---------- */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* ---------- GTM noscript (body) ---------- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLPGMTXG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ---------- Floating Language Strip HTML ---------- */}
        <div id="google_translate_wrapper">
          <div id="translate-inner">
            <span className="translate-icon" id="translateIcon">
              🌐
            </span>
            <div id="google_translate_element" />
          </div>
        </div>

        {/* ---------- Main Layout ---------- */}
        <BlogProvider>
          <FrontEnd>{children}</FrontEnd>
        </BlogProvider>
        <ScrollTopButton />
      </body>
    </html>
  );
}
