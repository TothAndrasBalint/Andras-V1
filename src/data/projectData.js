import travelMarketplaceVisual from
  "../assets/projects/travel-marketplace-intelligence.svg";
export const spotlightProjects = [
  {
    id: "travel-marketplace-intelligence",
    title: "Travel Marketplace Intelligence Platform",
    status: "Private production system",
    summary: "A competitive intelligence platform that collects, structures, and tracks marketplace data across major online travel agencies, transforming pricing, reviews, availability, and product positioning into decision-ready weekly dashboards.",
    description: [
      "Designed and implemented a competitive intelligence platform that collects and structures large-scale marketplace data from major online travel agencies across river-cruise and restaurant offerings.",

      "The system tracks competitor positioning over time, including pricing, review volume and quality, product naming, ticket configurations, departure availability, and pricing strategy. Automated weekly dashboards transform the collected data into comparable market, product, and competitor views.",

      "The platform supports commercial and operational decisions such as capacity planning, daily departure frequency, product configuration, and pricing—replacing manual market research with a consistent, longitudinal view of marketplace behaviour.",
    ],
    technologies: [
      "JavaScript",
      "Web Scraping",
      "Data Pipelines",
      "Google Sheets",
      "Dashboarding",
      "Competitive Analytics",
    ],
    image: travelMarketplaceVisual,
    imageAlt:
    "Architecture diagram showing marketplace data flowing through collection, normalization, historical storage, dashboards, and business decisions.",
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
  {
    id: "order-to-procurement-automation",
    title: "Order-to-Procurement Automation",
    status: "Private production system",
    summary: "A production workflow that validates incoming orders, matches product identities, applies inventory and supplier-routing rules, and generates structured procurement outputs in minutes instead of hours.",
    description: [
      "A private production system that consolidates incoming orders, validates product data, applies inventory and supplier-routing rules, and generates structured procurement outputs.",

      "It reduced a multi-hour manual workflow to a process completed in minutes, helping the company handle growing order volumes while freeing employees from repetitive administrative work.",
    ],
    technologies: [
      "Google Apps Script",
      "JavaScript",
      "Gmail",
      "Google Sheets",
      "REST APIs",
    ],
    image: null,
    imageAlt: "",
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
  {
    id: "promotion-analytics-platform",
    title: "Promotion Analytics Platform",
    status: "Internal analytics platform",
    summary: "An analytics pipeline that combines invoice-line transaction data with promotion schedules, exposing campaign-level patterns across revenue, basket composition, customer reactivation, and demand.",
    description: [
      "Designed and implemented an internal analytics pipeline that combines invoice-line transaction data from the Billingo API with product-level promotion schedules.",

      "The system normalizes and enriches raw sales records, maps promoted products to campaign periods, and calculates commercial metrics across revenue, order activity, basket composition, customer reactivation, and demand behaviour.",

      "A purpose-built dashboard exposes these metrics through consistent campaign-level views, making patterns that were previously buried across thousands of invoice lines directly observable and comparable over time.",
    ],
    technologies: [
      "Google Apps Script",
      "JavaScript",
      "Billingo API",
      "Google Sheets",
      "HTML",
      "Data Modelling",
    ],
    image: null,
    imageAlt: "",
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
];

export const secondaryProjects = [];