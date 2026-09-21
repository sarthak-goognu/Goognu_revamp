import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/ElectricVehicle-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "e-vehicle",
  title: "Electric Vehicle Software Development Services",
  description:
    "Enhance your electric vehicle ecosystem with secure and intelligent software solutions tailored to your business needs.",
  bannerImage: "industry/electricvehicle/ev_banner_image.png",

  // Django: service_title / service_description / service1..4_title/description/image
  about: {
    title: "EV Software Development Services We Offer",
    description:
      "We provide a range of software solutions designed to optimize electric vehicle operations, improve efficiency, and enhance user experience. Our services include:",
    items: [
      {
        title: "EV Charging Station Management Systems",
        description:
          "Efficient charging infrastructure is essential for EV adoption. Our charging station management software enables real-time monitoring, automated billing, and integration with multiple payment gateways. It ensures efficient energy distribution, predictive maintenance, and compliance with industry standards for smooth operations.",
        image: "industry/electricvehicle/EV_Charging_Station_Management_Systems.png",
      },
      {
        title: "EV Fleet Management Software",
        description:
          "Managing a fleet of electric vehicles requires advanced software solutions for optimal performance. Our fleet management system enables real-time vehicle tracking, route optimization using AI-driven algorithms, predictive maintenance to prevent breakdowns, and energy consumption analysis for cost-efficient charging strategies.",
        image: "industry/electricvehicle/EV_Fleet_Management_Software.png",
      },
      {
        title: "Battery Management Systems (BMS)",
        description:
          "Battery performance plays a crucial role in electric vehicle efficiency and longevity. Our BMS software offers real-time battery monitoring, predictive analytics to detect potential failures, thermal management to regulate temperature, and charge cycle optimization to enhance battery lifespan and efficiency.",
        image: "industry/electricvehicle/image_1.png",
      },
      {
        title: "EV Telematics & Connectivity Solutions",
        description:
          "Seamless communication between EVs and infrastructure is essential for optimized operations. Our telematics solutions include vehicle-to-grid (V2G) integration for energy flow management, remote diagnostics and alerts for early fault detection, driver behavior monitoring to improve safety and efficiency, and over-the-air (OTA) updates for remote software enhancements.",
        image: "industry/electricvehicle/EV_Telematics__Connectivity_Solutions.png",
      },
    ],
  },

  // Django: why_choose_title / why_choose_description (empty) / why_choose_image / why_choose1..5
  capabilities: {
    title: "Why Choose Goognu for Your EV Apps and Software Development Services?",
    items: [
      {
        title: "On-time Project Delivery",
        description:
          "We follow agile development practices to ensure timely delivery of EV software solutions, reducing time-to-market while maintaining quality.",
      },
      {
        title: "24/7 Expert Support",
        description:
          "EV software needs constant monitoring and quick resolution of issues. Our dedicated support team provides round-the-clock assistance to keep your systems running smoothly.",
      },
      {
        title: "Advanced Data Security",
        description:
          "With the increasing connectivity of EVs, data security is paramount. We implement end-to-end encryption, multi-factor authentication, and secure API integrations to protect critical data.",
      },
      {
        title: "Reliable and Scalable Solutions",
        description:
          "Our solutions are designed to scale with the evolving EV landscape. Whether it's integrating new hardware or expanding services, our modular architecture ensures adaptability.",
      },
      {
        title: "EV Development Process We Follow as a Dedicated Electric Vehicle App Development Company",
        description:
          "At Goognu, we follow a structured approach to EV software development, ensuring precision, security, and adaptability. Our methodology integrates intelligent automation, real-time analytics, and user-friendly interfaces to enhance electric vehicle performance and connectivity.",
      },
    ],
  },

  // Django: types_title / types_description / types_image / types1..12 (types13-15 are empty slots, dropped)
  services: {
    title: "Types of EV Apps We Develop",
    description:
      "Our EV applications streamline operations, enhance efficiency, and improve user experience with intelligent automation, real-time insights, and seamless integration with charging networks, fleet systems, and battery management.",
    items: [
      { title: "EV Smart Charging" },
      { title: "EV Fleet Management" },
      { title: "EV Navigation System" },
      { title: "EV Battery Monitoring" },
      { title: "EV Remote Diagnostics" },
      { title: "EV Sharing & Rental" },
      { title: "EV Payment Processing" },
      { title: "EV Analytics Platform" },
      { title: "EV Telematics Solutions" },
      { title: "EV Energy Management" },
      { title: "EV Maintenance Tracking" },
      { title: "EV Safety Compliance" },
    ],
  },

  // Django: feature_title / feature_description / feature1..6
  technologies: {
    title: "Key Features We Add to Your EV Apps and Software",
    description:
      "While electric vehicles are changing the entire scene of mobility, software changes everything in this scenario. At Goognu, we adopt contemporary technologies to develop EV applications that maximize efficiency, safety, and user experience. Our solutions span real-time monitoring, predictive analytics, and intelligent automation that make EV operations smarter and more reliable.",
    items: [
      {
        title: "Smart Fleet Management",
        description:
          "Managing an EV fleet requires more than just tracking locations. Our software integrates GPS, AI-driven route optimization, and predictive maintenance to reduce downtime and enhance operational efficiency.",
      },
      {
        title: "Battery Monitoring System",
        description:
          "Battery performance directly impacts an EV's range and lifespan. Our intelligent Battery Management System (BMS) provides real-time analytics on charging cycles, temperature control, and energy consumption to maximize efficiency.",
      },
      {
        title: "Charging Station Locator",
        description:
          "Finding a charging station should never be a hassle. We integrate real-time charging network data, availability tracking, and smart navigation to guide users to the nearest compatible charging points.",
      },
      {
        title: "Remote Diagnostics and OTA Updates",
        description:
          "Preventative maintenance is key to EV longevity. Our remote diagnostics feature detects potential failures before they occur, while over-the-air (OTA) updates ensure the software remains up-to-date without requiring manual intervention.",
      },
      {
        title: "Telematics and Connectivity",
        description:
          "EVs generate vast amounts of data. Our IoT-powered telematics solutions collect and analyze vehicle performance metrics, driver behavior, and security alerts to improve overall safety and efficiency.",
      },
      {
        title: "Energy Management System",
        description:
          "Power consumption and regeneration are critical to extending an EV's range. Our energy management system optimizes energy distribution, supports regenerative braking analysis, and improves overall power efficiency.",
      },
    ],
  },

  // Django: process_title / process_description / process1..8 — no clean match
  // among the five conventional sections, so this is an extra section.
  extraSections: [
    {
      title: "Advanced Technology Integration",
      description:
        "We incorporate AI, IoT, and cloud computing to create intelligent EV software solutions, enabling real-time data analysis, predictive maintenance, and automated processes for better vehicle efficiency.",
      items: [
        {
          title: "Custom Software Architecture",
          description:
            "Every EV system has unique requirements. We design modular and scalable architectures to support seamless integration with various hardware components, ensuring flexibility for future enhancements.",
        },
        {
          title: "Battery Management Optimization",
          description:
            "Efficient battery performance is critical for EVs. Our software solutions monitor charging cycles, predict energy consumption, and implement intelligent thermal management to extend battery life.",
        },
        {
          title: "Embedded Systems Development",
          description:
            "We develop high-performance embedded software for EV control units, ensuring optimal coordination between battery packs, motor controllers, and other critical components.",
        },
        {
          title: "Real-time Telematics and Analytics",
          description:
            "Our telematics solutions collect and analyze vehicle performance data, driver behavior, and system diagnostics, providing actionable insights to improve safety and efficiency.",
        },
        {
          title: "Secure Communication Protocols",
          description:
            "EV connectivity demands robust cybersecurity. We implement end-to-end encryption, secure API integrations, and multi-layer authentication to protect data transmission and prevent unauthorized access.",
        },
        {
          title: "Over-the-Air (OTA) Updates",
          description:
            "Our software enables remote diagnostics and OTA updates, ensuring that EV systems remain updated with the latest security patches, firmware enhancements, and performance improvements.",
        },
        {
          title: "Intelligent Fleet Management",
          description:
            "Managing multiple EVs requires automation. We integrate AI-powered route optimization, predictive maintenance, and remote monitoring to enhance fleet operations and minimize downtime.",
        },
        {
          title: "Charging Infrastructure Integration",
          description:
            "We develop software solutions that connect EVs with smart charging networks, allowing real-time availability tracking, automatic billing, and energy-efficient charging management.",
        },
      ],
    },
  ],

  // No FAQ entries in industries-data/FAQ-2026-09-16.json map to e-vehicle.
  faqs: [],
};
