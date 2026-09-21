import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Restaurant-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "restaurant",
  title: "Restaurant App Development Services",
  description:
    "Reimagine dining experiences with intuitive, high-performing, and innovative software solutions designed to meet your requirements.",
  bannerImage: "industry/restaurant/restaurant_banner_image.png",

  about: {
    title: "Why Choose Goognu as your Restaurant App Development Services?",
    description:
      "Partner with Goognu to develop high-performing restaurant apps that boost customer satisfaction, maximize revenue, and enhance operational efficiency. Experience solutions designed to meet your business needs with precision and innovation.",
    image: "industry/restaurant/why_choose_goognuu.png",
    items: [
      {
        title: "Authenticity Certification",
        description:
          "Implement robust verification systems that confirm restaurant authenticity through profile validation, genuine customer reviews, and rating mechanisms. Establish credibility by ensuring only verified businesses appear, enhancing user confidence and improving overall brand perception.",
      },
      {
        title: "Express Delivery",
        description:
          "Incorporate advanced delivery solutions with precise tracking systems for efficient order management. Ensure timely deliveries through optimized routing, real-time updates, and reliable communication channels, resulting in improved customer satisfaction and streamlined operations.",
      },
      {
        title: "Payment Secure",
        description:
          "Integrate reliable payment gateways that support various transaction methods while ensuring data privacy and encryption. Provide users with a smooth checkout experience, enhancing trust through secure and hassle-free payments.",
      },
      {
        title: "Progress Store",
        description:
          "Boost user engagement through curated recommendations, personalized offers, and loyalty programs. Enhance customer retention by providing features like order history, tailored suggestions, and reward systems that encourage repeat interactions.",
      },
    ],
  },

  capabilities: {
    title: "Features Every Restaurant Mobile App Needs",
    description:
      "Goognu integrates key features into its restaurant apps to improve user experience, optimize operations, and increase business growth.",
    items: [
      {
        title: "Digital Menu & Ordering",
        description: "Interactive menus that are filled with high-definition images, descriptions, and easy customization for online ordering",
      },
      {
        title: "Loyalty & Rewards System",
        description: "Retain customers with reward programs based on exclusive discounts and cash-back offers.",
      },
      {
        title: "AI-powered Recommendations",
        description: "Personalized recommendations based on customer preferences, order history, and trending items.",
      },
    ],
  },

  services: {
    title: "Crafting Restaurant Mobile Apps Designed for Exceptional Performance",
    description:
      "Build powerful restaurant apps that enhance customer engagement and optimize operations. From reservation systems to food delivery platforms, Google creates customized solutions that fit your business model.",
    items: [
      {
        title: "Restaurant Discovery App Development",
        description:
          "Design powerful discovery platforms with AI-powered search, dynamic filtering, and real-time location tracking. Enhance user experience with accurate suggestions and personalized results.",
        image: "industry/restaurant/menu_for_every_taste.png",
      },
      {
        title: "Dining Finder Application Solutions",
        description:
          "Create responsive dining finder apps featuring advanced geolocation capabilities, multi-criteria search options, and reservation integration. Give users relevant and timely recommendations.",
        image: "industry/restaurant/restaurant_finder_app_development-3.png",
      },
      {
        title: "Restaurant Locator App Development",
        description:
          "Build advanced restaurant locator solutions with predictive analytics, interactive maps, and streamlined search functions. Engage users through efficient navigation and curated suggestions.",
        image: "industry/restaurant/icon2.png",
      },
    ],
  },

  technologies: {
    title: "Bringing Smart Technologies to Restaurant Apps",
    description: "Imagine a restaurant app where every feature feels intuitive and designed to make dining experiences better and faster.",
    items: [
      {
        title: "Artificial Intelligence",
        description:
          "Analyzes user preferences, predicting what they might enjoy based on past orders and popular trends. It keeps everything organized, from managing orders to providing timely suggestions.",
      },
      {
        title: "AR/VR",
        description:
          "Brings dishes to life. Customers can preview meals before ordering or explore the restaurant through immersive tours, making their choices easier and more exciting.",
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Enable smooth communication with chatbots that assist customers, answer queries, and handle orders without delays.",
      },
      {
        title: "Digital Twin Technology",
        description: "Create realistic digital replicas of restaurants for virtual walkthroughs, layout planning, and enhancing user engagement.",
      },
      {
        title: "Machine Learning",
        description: "Predicts demand patterns, ensuring kitchens are stocked appropriately, reducing waste, and maintaining smooth operations during peak hours.",
      },
      {
        title: "IoT Integration",
        description: "Links devices across the restaurant, ensuring efficient workflows, tracking food safety, and enhancing service quality.",
      },
    ],
  },

  extraSections: [
    {
      title: "Business Models We Support",
      description:
        "Goognu develops cutting-edge restaurant app solutions to support various business models, ensuring efficient management and customer engagement.",
      items: [
        { title: "Delivery Agent Apps" },
        { title: "Food Delivery Apps" },
        { title: "Restaurant Management Apps" },
        { title: "Single/Multi-chain Restaurant App" },
        { title: "Cloud Kitchen Solutions" },
        { title: "Aggregator Apps" },
      ],
    },
    {
      title: "Key Ingredients for an Efficient Restaurant Software Development Process",
      items: [
        { title: "UI/UX Design", description: "Intuitive and visually engaging interfaces ensure smooth navigation for customers and restaurant staff." },
        { title: "Tech Stack", description: "A robust combination of frontend, backend, cloud, and database technologies ensures reliability and high performance." },
        { title: "Security Architecture", description: "Multi-layered security with encryption, two-factor authentication, and fraud detection protects sensitive data." },
        { title: "Order Management System", description: "A centralized system to manage dine-in, takeaway, and delivery orders efficiently, minimizing errors." },
        { title: "Real-time Analytics", description: "Actionable insights on sales, customer behavior, and operational efficiency help restaurants make data-driven decisions." },
        { title: "Payment Integration", description: "Secure and seamless transactions with multiple payment gateways, including digital wallets and cryptocurrencies." },
        { title: "Inventory Management", description: "Automated stock tracking and predictive restocking prevent shortages and reduce food wastage." },
        { title: "Loyalty & Rewards Program", description: "Integrated customer loyalty programs to enhance retention with discounts, referrals, and personalized offers." },
      ],
    },
  ],

  // No FAQ-2026-09-16.json entries matched this industry (service_slug values present are
  // finance, fitness-wellness, mobile-game(-app-development-services), saas-development-services,
  // healthcare-solutions, e-commerce-application-development-services — none for restaurant).
  faqs: [],
};
