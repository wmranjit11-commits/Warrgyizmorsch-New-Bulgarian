"use client";
import SafeHtml from "../common-components/safeHtml";

export default function HeroSection({ data }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-center bg-cover hidden md:block"
        style={{
          backgroundImage: data?.imageurl ? `url(${data.imageurl})` : "none",
        }}
      />

      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-center bg-cover block md:hidden"
        style={{
          backgroundImage: data?.imageurlmobile
            ? `url(${data.imageurlmobile})`
            : "none",
        }}
      />

      {/* DARK OVERLAY (IMPORTANT FOR VISIBILITY) */}
      <div className="absolute inset-0"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-4xl! font-medium! leading-tight text-black!">
                <SafeHtml as="span" html={data?.heading} />
                <span className="new-italic font-semibold">
                  {" "}
                  {data?.italic}
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-base! sm:text-lg text-gray-800!">
                <SafeHtml as="span" html={data?.description} />
              </p>

              {data?.button && (
                <button
                  onClick={() => {
                    const el = document.getElementById("erp-contact-form");
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="th-btn style-radius cursor-pointer"
                >
                  {data.button.name}
                </button>
              )}
            </div>

            {/* RIGHT SIDE (RESERVED — DOES NOT HIDE CONTENT) */}
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
