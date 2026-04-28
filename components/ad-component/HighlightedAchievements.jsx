"use client";

import {
    Briefcase,
    Monitor,
    HeartPulse,
    Truck,
    Droplet,
    GraduationCap,
    Pill,
    Factory,
    ShoppingCart,
    Landmark,
    HardHat,
} from "lucide-react";

const DATA = [
    { icon: ShoppingCart, title: "Търговия на дребно и електронна търговия", desc: "Подобрете проследяването на продажбите и ангажираността на клиентите." },
    { icon: Monitor, title: "Информационни технологии", desc: "Интегрирайте системи за безпроблемно ИТ управление." },
    { icon: HeartPulse, title: "Здравеопазване", desc: "Управлявайте данните на пациентите и рационализирайте операциите." },
    { icon: Truck, title: "Логистика", desc: "Подобрете транспорта и управлението на складовете." },

    { icon: Landmark, title: "Финанси", desc: "Подобрете финансовата отчетност и съответствието." },
    { icon: GraduationCap, title: "Образование", desc: "Рационализирайте административните процеси и управлението на обучението." },
    { icon: Pill, title: "Фармацевтика", desc: "Подобрете веригата на доставки и нормативното съответствие." },
    { icon: Factory, title: "Производство", desc: "Рационализирайте производството и управлението на инвентара." },

];

export default function HighlightedAchievements() {
    return (
      <section className="bg-[#EEF4FB] py-6 md:py-12">
        <div className="container text-center">
          {/* HEADING */}
          <h2 className="text-2xl font-medium! text-black! mb-2">
            Основни постижения
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-16">
            В Warrgyizmorsch се специализираме в разработването на персонализиран ERP софтуер за широк спектър от индустрии, включително
          </p>

          {/* GRID */}
          <div className="flex flex-wrap justify-center gap-10">
            {DATA.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-xl pt-7! pb-1 px-7 text-center w-full sm:w-[45%] lg:w-[22%]"
                >
                  {/* NOTCH ICON (IMAGE-LIKE) */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#EEF4FB] rounded-full flex items-center justify-center">
                    <Icon size={30} className="text-(--new-theme-color)" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg! font-semibold text-(--new-theme-color) mb-2 leading-tight">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}
