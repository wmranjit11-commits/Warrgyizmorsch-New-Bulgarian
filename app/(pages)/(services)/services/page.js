import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { generateSEOMeta } from "../../../../utils/seo";
import ServiceClient from "../../../../components/service-components/ServiceClient";

export const metadata = generateSEOMeta({
  title: "Нашите услуги | Warrgyiz Morsch",
  description:
    "Разгледайте услугите за уеб, приложения, електронна търговия, софтуер и дигитален маркетинг, предлагани от Warrgyiz Morsch.",
  path: "/services",
});

const serviceCardData = [
  {
    imgSrc: "assets/img/icon/software_development.png",
    title: "Услуга за разработка на софтуер",
    description:
      "Ние предоставяме персонализирани софтуерни решения, съобразени с вашите бизнес нужди, гарантирайки ефективност, мащабируемост и иновации...",
    link: "/custom-software-development",
    children: [
      {
        name: "Услуга за разработка на софтуер",
        link: "/custom-software-development",
        image: "assets/img/icon/software_development2.png",
      },
      {
        name: "Услуга за аутсорсинг на разработка на софтуер",
        link: "/software-development-outsourcing-service",
        image: "assets/img/icon/software_development3.png",
      },
      {
        name: "Разработка на корпоративен софтуер",
        link: "/enterprise-software-development-service",
        image: "assets/img/icon/software_development.png",
      },
      {
        name: "Услуги за разработка на ERP софтуер",
        link: "/erp-solutions-development-services",
        image: "assets/img/icon/erp.png",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/website.avif",
    title: "Дизайн и разработка на уебсайтове",
    description:
      "Компания за дизайн и разработка на уеб приложения, която помага на бизнесите да изградят силни клиентски профили и да достигнат потенциални...",
    link: "/website-design-development",
    children: [
      {
        name: "Дизайн и разработка на уебсайтове",
        link: "/website-design-development",
        image: "assets/img/icon/website.avif",
      },
      {
        name: "Агенция за PHP уеб разработка",
        link: "/php-web-development-agency",
        image: "assets/img/icon/phpwebdev.png",
      },
      {
        name: "Услуга за разработка на Node.js",
        link: "/node-js-development-service",
        image: "assets/img/icon/nodeJs.png",
      },
      {
        name: "Услуга за разработка на Angular",
        link: "/angular-development-service",
        image: "assets/img/icon/angular.png",
      },
      {
        name: "Full stack разработка",
        link: "/full-stack-development-service",
        image: "assets/img/icon/fullstack.png",
      },
      {
        name: "React.Js разработка",
        link: "/reactjs-developers",
        image: "assets/img/icon/jsreact.png",
      },
      {
        name: "Компания за услуги по разработка на Laravel",
        link: "/laravel-development-service",
        image: "assets/img/icon/laraveldeveloper.png",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/ui-ux-design.png",
    title: "UI/UX Дизайн",
    description:
      "Подобрете клиентското изживяване с професионална услуга за UI/UX дизайн. Получете персонализирани, удобни за потребителя решения, които увеличават ангажираността, задържането и бизнес растежа...",
    link: "/ui-ux-design-service",
    children: [
      {
        name: "UI/UX Дизайн",
        link: "/ui-ux-design-service",
        image: "assets/img/icon/ui.jpg",
      },
      {
        name: "Дизайн на целева страница ",
        link: "/landing-page-design-service",
        image: "assets/img/icon/LandingPage.png",
      },
      {
        name: "Отзивчив уеб дизайн ",
        link: "/responsive-web-design-service",
        image: "assets/img/icon/ResponsiveWeb.jpg",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/mobile app.jpg",
    title: "Мобилни приложения",
    description:
      "С персонализирана разработка на мобилни приложения за iOS и Android. Нашата цел е да осигурим гладко потребителско изживяване с нови усъвършенствани функции...",
    link: "/mobile-app-development",
    children: [
      {
        name: "Мобилни приложения",
        link: "/mobile-app-development",
        image: "assets/img/icon/appDevelop.png",
      },
      {
        name: "Услуги за разработка на iOS приложения",
        link: "/ios-app-development-service",
        image: "assets/img/icon/mobile app.jpg",
      },
      {
        name: "Услуги за разработка на Android приложения",
        link: "/android-app-development-service",
        image: "assets/img/icon/mobile app.jpg",
      },
      {
        name: "Компания за разработка на Flutter приложения",
        link: "/flutter-app-development-company",
        image: "assets/img/icon/flutter.png",
      },
      {
        name: "Разработка на React Native",
        link: "/react-native-hybrid-app-development",
        image: "assets/img/icon/reactnative.jpg",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/service_3d_3.png",
    title: "Дигитален маркетинг",
    description:
      "Иманентно предефиниране на конкурентния е-бизнес преди адаптивни потенциали. Професионално изграждане на прогресивни потребители с...",
    link: "/digital-marketing-services",
    children: [
      {
        name: "Услуга за дигитален маркетинг",
        link: "/digital-marketing-services",
        image: "assets/img/icon/digital_header_img.png",
      },
      {
        name: "Разработване на стратегия за дигитален маркетинг",
        link: "/digital-marketing-strategy-development",
        image: "assets/img/icon/digitalMarketingStrategyImg2.png",
      },
      {
        name: "Франчайз дигитален маркетинг",
        link: "/franchise-digital-marketing-service",
        image: "assets/img/icon/franchiseMarketing.png",
      },
      {
        name: "Услуга за маркетинг в социалните медии ",
        link: "/social-media-marketing-service",
        image: "assets/img/icon/socialmediamarketing.png",
      },
      {
        name: "Услуга за маркетинг Pay per Click",
        link: "/pay-per-click-marketing-service",
        image: "assets/img/icon/ppcImage.png",
      },
      {
        name: "Контент маркетинг",
        link: "/content-marketing-service",
        image: "assets/img/icon/content.avif",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/e-commerce.avif",
    title: "Услуги за електронна търговия",
    description:
      "Поддържането на стабилен обем на продажбите е основната цел на онлайн продавача. Въпреки това е трудно да се постигне това, освен ако...",
    link: "/e-commerce-website-development-service",
    children: [
      {
        name: "Разработка на уебсайт за електронна търговия",
        link: "/e-commerce-website-development-service",
        image: "assets/img/icon/e-commerce.avif",
      },
      {
        name: "Услуги за разработка на Magento",
        link: "/magento-development-service",
        image: "assets/img/icon/magento-ecommerce-development.png",
      },
      {
        name: "Услуги за разработка на Shopify",
        link: "/shopify-development-service",
        image: "assets/img/icon/shopify.png",
      },
      {
        name: "Услуги за разработка на WooCommerce",
        link: "/woo-commerce-development-service",
        image: "assets/img/icon/e-commerce.avif",
      },
    ],
  },
  {
    imgSrc: "assets/img/icon/seo.png",
    title: "Оптимизация за търсачки",
    description:
      "С персонализирани SEO стратегии за по-висока видимост и трафик, ние се стремим да подобрим класирането ви в търсачките чрез усъвършенствани техники и решения, ориентирани към ефективността...",
    link: "/search-engine-optimzation",
    children: [
      {
        name: "Оптимизация за търсачки",
        link: "/search-engine-optimzation",
        image: "assets/img/icon/seo.png",
      },
      {
        name: "SEO за електронна търговия",
        link: "/ecommerce-seo-service",
        image: "assets/img/icon/eCommerceSeo.png",
      },
      {
        name: "SEO консултант",
        link: "/seo-consultant-service",
        image: "assets/img/icon/seoConsultant.png",
      },
      {
        name: "Техническо SEO",
        link: "/technical-seo-service",
        image: "assets/img/icon/technicalSeoExpert.png",
      },
      {
        name: "Локално SEO",
        link: "/local-seo-service",
        image: "assets/img/icon/localSeoimage.png",
      },
      {
        name: "SEO одит",
        link: "/seo-audit-service",
        image: "assets/img/icon/seoAuditimage.png",
      },
      {
        name: "Писане на SEO съдържание",
        link: "/seo-content-writing-service",
        image: "assets/img/icon/seoContent.png",
      },
    ],
  },
];

const Service = () => {
  return (
    <>
      <ServiceClient serviceCardData={serviceCardData} />
    </>
  );
};

export default Service;
