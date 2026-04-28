"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Globe, Users, Repeat } from "lucide-react";

const STATS = [
  {
    id: "years",
    target: 10,
    label: "Години опит",
    Icon: Briefcase,
    suffix: "+",
  },
  {
    id: "websites",
    target: 360,
    label: "Създадени уебсайтове",
    Icon: Globe,
    suffix: "+",
  },
  {
    id: "experts",
    target: 40,
    label: "Екип от топ експерти",
    Icon: Users,
    suffix: "+",
  },
  {
    id: "percent",
    target: 95,
    label: "Задържане на клиенти",
    Icon: Repeat,
    suffix: "%",
  },
];

const animateCounter = (from, to, durationMs, onUpdate) => {
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = Math.round(from + (to - from) * eased);
    onUpdate(value);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const Stats_section = () => {
  const [values, setValues] = useState(() =>
    STATS.reduce((acc, s) => ({ ...acc, [s.id]: 0 }), {}),
  );

  const boxRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("data-id");
          const target = Number(entry.target.getAttribute("data-target"));

          observer.unobserve(entry.target);

          animateCounter(0, target, 1100, (val) => {
            setValues((prev) => ({ ...prev, [id]: val }));
          });
        });
      },
      { threshold: 0.4 },
    );

    Object.values(boxRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-[#f4f4f4] py-12 text-center">
      <div className="container grid gap-7 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {STATS.map(({ id, target, label, Icon, suffix }) => (
          <div
            key={id}
            ref={(el) => {
              boxRefs.current[id] = el;
            }}
            data-id={id}
            data-target={target}
            className={[
              "group relative overflow-hidden rounded-2xl bg-white p-2",
              "shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300",
              "hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]",
              // ✅ FIX: keep ::before behind content so icon never hides
              "before:content-[''] before:absolute before:top-0 before:left-[-10%] before:w-[120%]",
              "before:h-0 before:opacity-10 before:rounded-b-[50%] before:transition-[height] before:duration-300",
              "before:bg-(--new-theme-color) hover:before:h-full",
              "before:z-0",
            ].join(" ")}
          >
            {/* Icon */}
            <div
              className={[
                "relative z-10 mx-auto mb-4 flex h-[65px] w-[65px] items-center justify-center rounded-full",
                "bg-(--new-theme-color) text-white transition-all duration-300",
                "group-hover:bg-[#18336c] group-hover:scale-110",
                "md:h-[55px] md:w-[55px]",
              ].join(" ")}
            >
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            {/* Number */}
            <div className="relative z-10 flex items-baseline justify-center gap-1.5">
              <span className="text-[2.3rem] font-bold text-[#1c2c59] md:text-[2rem]">
                {values[id] ?? 0}
              </span>
              <span className="text-[2.3rem] font-bold text-[#1c2c59] md:text-[2rem]">
                {suffix}
              </span>
            </div>

            {/* Label */}
            <p className="relative z-10 mt-2 text-base font-medium text-[#333]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats_section;
