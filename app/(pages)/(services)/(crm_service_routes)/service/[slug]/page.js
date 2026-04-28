import React from "react";
import { generateSEOMeta } from "../../../../../../utils/seo";
import { API_BASE } from "../../../../../../axios/http";

import NewServiceHeroForm from "../../../../../../components/home-page-components/NewServiceHeroForm";
import Unique_section from "../../../../../../components/service-components/Unique_section";
import Custom_Animation_section from "../../../../../../components/service-components/Custom_Animation_section";
import Boost_section from "../../../../../../components/service-components/Boost_section";
import Assistance_section from "../../../../../../components/service-components/Assistance_section";
import NewIndustrySection from "../../../../../../components/home-page-components/NewIndustrySection";
import FAQ_section from "../../../../../../components/service-components/FAQ_section";
import Dynamic_Page_Links from "../../../../../../components/service-components/Dynamic_Page_Links";
import Script from "next/script";
import ERPModules from "../../../../../../components/ad-component/ERPModules";
import ERPDevelopment from "../../../../../../components/ad-component/ERPDevelopment";
import ERPComparisonSection from "../../../../../../components/ad-component/ERPComparisonSection";
import Stats_section from "../../../../../../components/service-components/Stats_section";
import Process_section from "../../../../../../components/service-components/Process_section";
import { resolveCityText } from "../../../../../../utils/functions";
import UniqueImage_section from "../../../../../../components/service-components/UniqueImage_section";

async function getServicePage(slug) {
  if (!slug) return { success: false };

  try {
    const url = `${API_BASE}/api/warr-service-pages/${slug}`;

    const res = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return { success: false };
    }

    return await res.json();
  } catch (error) {
    console.error("API failed:", error);

    return { success: false };
  }
}

/* ------------------ METADATA ------------------ */
export async function generateMetadata(ctx) {
  const { slug } = await ctx.params;

  if (!slug) {
    return generateSEOMeta({
      title: "Услуги | Warrgyizmorsch",
      description: "Разгледайте нашите услуги по местоположение.",
      path: `/services`,
    });
  }

  const api = await getServicePage(slug);

  if (!api?.success) {
    return generateSEOMeta({
      title: "Страницата не е намерена | Warrgyizmorsch",
      description: "Страницата за услугата, която търсите, не съществува.",
      path: `/service/${slug}`,
    });
  }

  const page = api.data.page;

  return generateSEOMeta({
    title:
      resolveCityText(
        page?.seo?.meta_title,
        page?.city?.name,
        page?.country?.name,
      ) ||
      resolveCityText(page.hero_title, page?.city?.name, page?.country?.name),
    description:
      resolveCityText(
        page?.seo?.meta_description,
        page?.city?.name,
        page?.country?.name,
      ) ||
      resolveCityText(
        page.hero_description,
        page?.city?.name,
        page?.country?.name,
      ) ||
      "",
    keywords: [],
    path: `/service/${slug}`,
  });
}

function buildFaqSchema(faq = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/* ------------------ PAGE ------------------ */
export default async function ServicePageSlug({ params }) {
  const { slug } = await params;
  const api = await getServicePage(slug);

  if (!api?.success) {
    return (
      <section className="space-extra-bottom">
        <div className="container text-center">
          <h2>⚠️ Неуспешно зареждане на услугата</h2>
          <p>
            Нашият сървър е временно недостъпен. Моля, опреснете страницата или
            опитайте отново по-късно.
          </p>

          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Опитай отново
          </button>
        </div>
      </section>
    );
  }

  const { page, more_service_pages, location_context } = api.data;

  const UniqueSection = {
    heading: page.section1?.title || "",
    description: page.section1?.description || "",
    cards: (page.section1?.points || []).map((p) => ({
      title: p.heading || "",
      description: p.description || "",
    })),
  };

  const ModulesData = {
    heading: page.section2?.title || "",
    description: page.section2?.description || "",
    modules: (page.section2?.points || []).map((p) => ({
      title: p.heading || "",
      content: p.description || "",
    })),
  };

  //   const CustomAnimationSection = {
  //     heading: page.section2?.title || "",
  //     description: page.section2?.description || "",
  //     services: (page.section2?.points || []).map((p) => ({
  //       name: p.heading || "",
  //       content: p.description || "",
  //     })),
  //   };

  const BoostSection = {
    heading: page.section3?.title || "",
    description: page.section3?.description || "",
    button: "Get Started",
  };

  const UniqueImageData = {
    heading: page.section4?.title || "",
    content: page.section4?.description || "",
  };
  const ErpDevelopmentData = {
    heading: page.section4?.title || "",
    description: page.section4?.description || "",
    leftImage: "/assets/img/ad/ERP-Development.webp",
    data: (page.section4?.points || []).map((p) => ({
      title: p.heading || "",
      description: p.description || "",
      cta: `Request ${page?.service?.name}`,
    })),
  };

  const ComparisonDataERP = {
    heading: {
      title:
        "Избор на правилната ERP система: готово решение vs персонализирана разработка",
      belowTitle:
        "Изборът между готово ERP решение и персонализирана разработка зависи от сложността на бизнеса, целите за мащабируемост и дългосрочната стратегия. Професионална ERP агенция помага да се сравнят двете опции чрез анализ на гъвкавост, цена, сигурност и интеграция. Готовите ERP системи предлагат по-бързо внедряване, докато персонализираните решения осигуряват по-добро съответствие с конкретни работни процеси. Разбирането на тези разлики помага на организациите да инвестират в ERP софтуер, който осигурява ефективност, съответствие и устойчив бизнес растеж.",
    },

    service: "ERP",

    group: {
      key: "Функционалност и гъвкавост",

      default: {
        custom:
          "Напълно съобразено с вашите нужди, с възможност за интеграция на AI, IoT и блокчейн технологии.",
        ready: "Ограничено от функциите на доставчика, което намалява адаптивността.",
      },

      items: [
        {
          label: "Персонализация",
          custom:
            "Неограничени възможности за персонализация според нуждите, включително съответствие с индустриални и международни стандарти.",
          ready:
            "Персонализацията е ограничена и често скъпа.",
        },
        {
          label: "Интеграция",
          custom:
            "Лесна интеграция със съществуващи системи, включително стари решения.",
          ready:
            "Интеграцията с други или стари системи е трудна или невъзможна.",
        },
        {
          label: "Сигурност и съответствие",
          custom:
            "Високо ниво на сигурност с възможност за спазване на специфични регулации.",
          ready:
            "Сигурността зависи от доставчика и обикновено покрива само базови стандарти.",
        },
        {
          label: "Обща стойност и поддръжка",
          custom:
            "По-висока първоначална инвестиция, но по-ниска дългосрочна цена и по-добра възвръщаемост.",
          ready:
            "Абонаментните такси се увеличават с времето и потребителите.",
        },
      ],
    },
  };

  const ComparisonDataCRM = {
    heading: {
      title:
        "Пълно сравнение между готов CRM и персонализирана CRM разработка",
      belowTitle:
        "Изборът между готови CRM системи и персонализирана CRM разработка изисква внимателен анализ. Бизнесите често предпочитат индивидуални решения, които се адаптират към техните работни процеси. Персонализираните CRM системи осигуряват по-голяма гъвкавост, мащабируемост и интеграция. Те премахват ненужните функции, намаляват разходите в дългосрочен план и увеличават възвръщаемостта.",
    },

    service: "CRM",

    group: {
      key: "Гъвкавост в продажбите и управлението на клиенти",

      default: {
        custom:
          "Персонализираната CRM система се изгражда според вашия процес на продажби с напълно гъвкави етапи и работни потоци.",
        ready:
          "Готовите CRM системи предлагат фиксирани процеси с ограничена гъвкавост.",
      },

      items: [
        {
          label: "Персонализация и потребителско изживяване",
          custom:
            "Всеки елемент е създаден според нуждите на екипа, което увеличава продуктивността.",
          ready:
            "Персонализацията е ограничена до настройките на доставчика.",
        },
        {
          label: "Клиентска комуникация и интеграции",
          custom:
            "Пълна интеграция с имейл, WhatsApp, SMS, маркетинг инструменти и плащания.",
          ready:
            "Поддържат основни интеграции, но разширените изискват допълнителни разходи.",
        },
        {
          label: "Сигурност и защита на данните",
          custom:
            "Пълен контрол върху сигурността и съответствие с GDPR и индустриални стандарти.",
          ready:
            "Сигурността се управлява от доставчика с ограничен контрол.",
        },
        {
          label: "Цена и мащабируемост",
          custom:
            "По-висока първоначална цена, но без месечни лицензи и с по-добра мащабируемост.",
          ready:
            "Ниски първоначални разходи, но постоянни абонаментни такси.",
        },
      ],
    },
  };

  const FAQ = (page.faq || []).map((f) => ({
    header: page.service?.name || "FAQ",
    question: f.question || "",
    answer: f.answer || "",
  }));

  const locationLabel =
    location_context?.mode === "city" ? page.city?.name : page.country?.name;

  const serviceName = page?.service?.name?.toLowerCase() || "";
  const isERP = serviceName.includes("erp");
  const isCRM = serviceName.includes("crm");

  const comparisonData = isERP
    ? ComparisonDataERP
    : isCRM
      ? ComparisonDataCRM
      : null;

  return (
    <>
      <NewServiceHeroForm
        cityName={page?.city?.name}
        countryName={page?.country?.name}
        title={page.hero_title}
        description={page.hero_description}
        showServiceTag={false}
      />
      <section className="space-extra-bottom">
        <div className="page-single">
          <div className="page-content">
            <Stats_section />
            <Unique_section
              data={UniqueSection}
              cityName={page?.city?.name}
              countryName={page?.country?.name}
            />
            {!comparisonData && (
              <Process_section serviceName={page?.service?.name} />
            )}
            <ERPModules
              data={ModulesData}
              cityName={page?.city?.name}
              countryName={page?.country?.name}
            />
            {comparisonData && <ERPComparisonSection data={comparisonData} />}
            <Boost_section
              data={BoostSection}
              cityName={page?.city?.name}
              countryName={page?.country?.name}
            />
            {comparisonData ? (
              <ERPDevelopment data={ErpDevelopmentData} />
            ) : (
              <UniqueImage_section
                data={UniqueImageData}
                cityName={page?.city?.name}
                countryName={page?.country?.name}
              />
            )}
            <NewIndustrySection />
            <FAQ_section data={FAQ} page={page} />

            <Dynamic_Page_Links
              pages={more_service_pages || []}
              locationLabel={locationLabel || ""}
            />
          </div>
        </div>
      </section>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(page.faq || [])),
        }}
      />
    </>
  );
}

