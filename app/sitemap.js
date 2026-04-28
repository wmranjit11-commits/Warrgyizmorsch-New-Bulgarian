import { API_BASE } from "../axios/http";

export default async function sitemap() {
// Fetch service pages from API
const servicePages = await fetch(`${API_BASE}/api/warr-service-pages`, {
  cache: "no-store",
  headers: { Accept: "application/json" },
});

const jsonservice = await servicePages.json();

// ✅ your API returns slugs directly in data[]
const slugs = Array.isArray(jsonservice?.data) ? jsonservice.data : [];

// ✅ map slugs to sitemap entries
const dynamicServicePages = slugs.map((slug) => ({
  url: `https://warrgyizmorsch.com/service/${slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.7,
}));


  const blogPages = await fetch(`${API_BASE}/api/blogs?site=warrgyizmorsch`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  const pages_for_blogs = await blogPages.json()

  // Dynamic Pages for blogs 
  const dynamicBlogPages = pages_for_blogs.map((p) => ({
    url: `https://warrgyizmorsch.com/blog/${p.slug}`,
    lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

return [
  // Static Pages
  {
    url: "https://warrgyizmorsch.com/",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: "https://warrgyizmorsch.com/about-us",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://warrgyizmorsch.com/contact-us",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://warrgyizmorsch.com/gallery",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/services",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/career",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: "https://warrgyizmorsch.com/blog",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: "https://warrgyizmorsch.com/terms-conditions",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: "https://warrgyizmorsch.com/privacy-policy",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "yearly",
    priority: 0.8,
  },

  // Performance Marketing
  {
    url: "https://warrgyizmorsch.com/linkedIn-advertising",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/social-media-graphics",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Graphic Design & Branding
  {
    url: "https://warrgyizmorsch.com/motion-graphics-end-animation",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/print-end-collateral-designs",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Business Development as a Service
  {
    url: "https://warrgyizmorsch.com/customized-services-end-packages",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Ui/Ux design
  {
    url: "https://warrgyizmorsch.com/logo-and-corporate-branding",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/ui-ux-design-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/landing-page-design-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/responsive-web-design-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Software development
  {
    url: "https://warrgyizmorsch.com/custom-software-development",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/software-development-outsourcing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/enterprise-software-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Services
  {
    url: "https://warrgyizmorsch.com/mobile-app-development",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/ios-app-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/android-app-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/flutter-app-development-company",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/react-native-hybrid-app-development",
    lastModified: new Date("2025-09-21"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/accounting-bookkeeping-solutions",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/data-management-services/",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Development
  {
    url: "https://warrgyizmorsch.com/web-maintenance-end-Support",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/website-design-development",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/php-web-development-agency",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/node-js-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/angular-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/full-stack-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/laravel-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/reactjs-developers",
    lastModified: new Date("2025-09-20"),
    changeFrequency: "weekly",
    priority: 0.9,
  },

  // Digital Marketing
  {
    url: "https://warrgyizmorsch.com/email-marketing",
    lastModified: new Date("2025-11-25"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/digital-marketing-services",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/content-marketing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/digital-marketing-strategy-development",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/franchise-digital-marketing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/social-media-marketing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/pay-per-click-marketing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },

  // SEO
  {
    url: "https://warrgyizmorsch.com/search-engine-optimzation",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/ecommerce-seo-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/seo-consultant-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/technical-seo-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/local-seo-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/seo-audit-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "https://warrgyizmorsch.com/seo-content-writing-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.9,
  },

  // ecommerce
  {
    url: "https://warrgyizmorsch.com/e-commerce-website-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/magento-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/shopify-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/woo-commerce-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // virtual
  {
    url: "https://warrgyizmorsch.com/virtual-assistant-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // erp
  {
    url: "https://warrgyizmorsch.com/erp-solutions-development-services",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },

  // Page Industry
  {
    url: "https://warrgyizmorsch.com/real-estate-software-development",
    lastModified: new Date("2025-09-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/supply-chain-management",
    lastModified: new Date("2025-09-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/IT-services-for-manufacturing",
    lastModified: new Date("2025-09-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/healthcare-IT-solution-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/retail-IT-solution-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "https://warrgyizmorsch.com/fintech-software-development-service",
    lastModified: new Date("2025-07-24"),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  //pages
  {
    url: "https://warrgyizmorsch.com/it-company-in-udaipur",
    lastModified: new Date("2025-10-29"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/mobile-application-development-in-udaipur",
    lastModified: new Date("2025-10-29"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/web-page-maintenance-in-udaipur",
    lastModified: new Date("2025-10-30"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/web-development-company-in-udaipur",
    lastModified: new Date("2025-10-30"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/software-development-company-in-udaipur",
    lastModified: new Date("2025-10-30"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/social-media-marketing-agency-in-udaipur",
    lastModified: new Date("2025-10-30"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/seo-company-in-udaipur",
    lastModified: new Date("2025-10-29"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/ppc-marketing-company-in-udaipur",
    lastModified: new Date("2025-10-29"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/full-stack-web-development-in-udaipur",
    lastModified: new Date("2025-10-29"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/enterprise-software-development-company-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/email-marketing-services-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/ecommerce-websites-development-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/digital-marketing-company-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/content-marketing-agency-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: "https://warrgyizmorsch.com/api-development-company-in-udaipur",
    lastModified: new Date("2025-10-28"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // My Site Map

  {
  url: "https://warrgyizmorsch.com/ai-software-development-service-in-india",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/ai-app-development-services-in-india",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/ai-consulting-in-india",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/ai-web-development-service-in-india",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/ai-digital-marketing-service-in-india",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},


{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-australia",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-australia",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-in-australia",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

{
  url: "https://warrgyizmorsch.com/digital-marketing-service-in-melbourne",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-melbourne",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-melbourne",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-sydney",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-sydney",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-agency-in-sydney",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-perth",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-in-perth",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-in-perth",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// ERP Services – Australia
{
  url: "https://warrgyizmorsch.com/service/erp-development-company-in-australia",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-development-company-in-sydney",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-development-company-in-melbourne",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-development-company-in-brisbane",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-perth",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-service-in-adelaide",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-canberra",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-service-in-hobart",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-agency-in-darwin",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-agency-in-gold-coast",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-wollongong",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-newcastle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-cairns",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-townsville",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-toowoomba",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-bendigo",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-albury",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-launceston",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-agency-in-sunshine-coast",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/service/erp-software-development-company-in-geelong",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/website-development-company-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-agency-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/best-digital-marketing-agency-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// London
{
  url: "https://warrgyizmorsch.com/digital-marketing-agencies-in-london",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-london",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-companies-in-london",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-company-london",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// Liverpool
{
  url: "https://warrgyizmorsch.com/digital-marketing-company-in-liverpool",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-liverpool",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-liverpool",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-company-in-liverpool",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// Manchester
{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-manchester",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-manchester",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-in-manchester",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-application-development-agency-in-manchester",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// Bristol
{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-bristol",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-bristol",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-in-bristol",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-in-bristol",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// AI Services – UK
{
  url: "https://warrgyizmorsch.com/ai-mobile-app-development-service-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/ai-software-development-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/ai-consulting-services-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/ai-digital-marketing-service-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://warrgyizmorsch.com/ai-web-development-service-in-uk",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.8,
},
// USA – General
{
  url: "https://warrgyizmorsch.com/website-development-company-in-usa",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/software-development-company-in-the-usa",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/digital-marketing-companies-in-usa",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// New York
{
  url: "https://warrgyizmorsch.com/software-development-company-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/digital-marketing-agency-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-company-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/it-services-company-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/search-engine-optimization-company-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/email-marketing-services-in-new-york",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// Seattle
{
  url: "https://warrgyizmorsch.com/software-development-agency-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/digital-marketing-company-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-application-development-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/email-marketing-services-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/it-consulting-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/search-engine-optimization-company-in-seattle",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},

// San Francisco
{
  url: "https://warrgyizmorsch.com/software-development-company-in-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/web-development-company-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/digital-marketing-agencies-in-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/mobile-app-development-company-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/it-solutions-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/search-engine-optimization-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},
{
  url: "https://warrgyizmorsch.com/email-marketing-agency-in-san-francisco",
  lastModified: new Date("2025-10-28"),
  changeFrequency: "weekly",
  priority: 0.7,
},




  // Blogs Pages
  ...dynamicBlogPages,
  // Dynamic Services Pages
  ...dynamicServicePages,
];
}
