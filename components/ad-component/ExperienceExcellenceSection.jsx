"use client";

import Image from "next/image";
import {
    BadgeCheck,
    ShieldCheck,
    RotateCcw,
    Headphones,
} from "lucide-react";

export default function ExperienceSection() {
    return (
      <section className="my-6 md:my-12 py-4 bg-linear-to-b from-(--new-theme-color) to-(--new-theme-color)/50">
        <div className="container">
          {/* TOP PART */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT TEXT */}
            <div className="text-white text-left">
              <h2 className="text-2xl! md:text-3xl! font-medium! leading-relaxed text-white">
                С над 13 години <br />
                опит в разработката на корпоративен <br />
                софтуер, <br />
                Warrgyizmorsch превъзхожда в:
              </h2>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-56 sm:h-64 lg:w-[500px] lg:h-80 rounded-2xl rounded-br-none rounded-bl-none overflow-hidden">
              <Image
                src="/assets/img/ad/CaseStudy.webp"
                alt="Дискусия на екипа"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* WHITE BOX */}
          <div className="relative bg-white rounded-2xl rounded-tr-none px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="px-6 text-center border-r border-dashed border-gray-700">
                <IconBox>
                  <BadgeCheck size={22} />
                </IconBox>
                <h4 className="font-medium! text-2xl! text-[#0A2540] mt-3 mb-2">
                  Управление на качеството
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Отговаряме на най-високите стандарти за качество и специфичните очаквания на клиентите чрез зрели процеси за управление на качеството.
                </p>
              </div>

              <div className="px-6 text-center border-r border-dashed border-gray-700">
                <IconBox>
                  <ShieldCheck size={22} />
                </IconBox>
                <h4 className="font-medium! text-2xl! text-[#0A2540] mt-3 mb-2">
                  Управление на сигурността
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Нашата стабилна рамка за сигурност включва модерни технологии и квалифицирани професионалисти за защита на вашата ERP система.
                </p>
              </div>

              <div className="px-6 text-center border-r border-dashed border-gray-700">
                <IconBox>
                  <RotateCcw size={22} />
                </IconBox>
                <h4 className="font-medium! text-2xl! text-[#0A2540] mt-3 mb-2">
                  Agile <br />
                  методология
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Този подход ни позволява да се адаптираме към променящите се изисквания и да предоставяме стойност поетапно, което води до по-бърза доставка.
                </p>
              </div>

              <div className="px-6 text-center">
                <IconBox>
                  <Headphones size={22} />
                </IconBox>
                <h4 className="font-medium! text-2xl! text-(--new-theme-color) mt-3 mb-2">
                  Управление на проекти
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Нашият екип осигурява текуща поддръжка, гарантирайки гладката работа и непрекъснатото подобряване на вашата система.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

/* BLUE ICON BOX */
function IconBox({ children }) {
    return (
      <div className="w-12 h-12 mx-auto rounded-lg bg-(--new-theme-color) flex items-center justify-center text-white">
        {children}
      </div>
    );
}
