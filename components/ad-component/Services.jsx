"use client";

import Image from "next/image";
import { Layers, Database, ShieldCheck, Activity } from "lucide-react";

export default function AdditionalERPServices() {
    return (
      <section className="container bg-white py-6 md:py-12">
        <div className="">
          {/* HEADING */}
          <h2 className="text-xl font-medium! text-black! mb-14">
            Допълнителни ERP услуги на Warrgyizmorsch:
          </h2>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* IMAGE — MOBILE FIRST */}
            <div
              className="
                        relative
                        h-full
                        rounded-2xl
                        overflow-hidden
                        order-1 lg:order-3
                        "
            >
              <Image
                src="/assets/img/ad/ERP-Warr.webp"
                alt="Допълнителни ERP услуги"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* LEFT COLUMN */}
            <div className="grid grid-rows-2 gap-6 auto-rows-fr order-2 lg:order-1">
              <ServiceCard
                icon={<Layers size={22} className="text-(--new-theme-color)" />}
                title="Интеграции на корпоративен софтуер"
                text="Интегрирайте се гладко с вашите съществуващи системи."
              />

              <ServiceCard
                icon={
                  <Database size={22} className="text-(--new-theme-color)" />
                }
                title="Защита на информацията и контрол на достъпа"
                text="Пазете вашите чувствителни данни в безопасност със стабилни мерки за сигурност."
              />
            </div>

            {/* MIDDLE COLUMN */}
            <div className="grid grid-rows-2 gap-6 auto-rows-fr order-3 lg:order-2">
              <ServiceCard
                icon={
                  <ShieldCheck size={22} className="text-(--new-theme-color)" />
                }
                title="Инструменти за миграция на данни"
                text="Осигурете сигурни и плавни трансфери на данни."
              />

              <ServiceCard
                icon={
                  <Activity size={22} className="text-(--new-theme-color)" />
                }
                title="Мониторинг на производителността на приложенията"
                text="Поддържайте оптимална производителност на вашите ERP приложения."
              />
            </div>
          </div>
        </div>
      </section>
    );
}

/* 🔹 CARD — SAME AS BEFORE */
function ServiceCard({ icon, title, text }) {
    return (
        <div className="bg-[#EEF2FF] rounded-2xl p-8 flex flex-col h-full">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#CBD5FF] mb-2">
                {icon}
            </div>

            <h3 className="font-semibold text-black! text-xl! mb-2 leading-snug">
                {title}
            </h3>

            <p className="text-sm text-black! leading-relaxed">
                {text}
            </p>
        </div>
    );
}
