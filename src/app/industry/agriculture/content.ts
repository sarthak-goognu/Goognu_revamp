import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Agriculture-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "agriculture",
  title: "Agriculture Software Development for Modern Farming",
  description:
    "Empower your agriculture industry with advanced software solutions designed to enhance productivity, efficiency, and sustainability.",
  bannerImage: "industry/agriculture/6668271_3388463_1.png",

  // Django: solution_title / solution_description / solution_image / solution_title1..4 / solution_description1..4
  about: {
    title: "Our Expertise in Agriculture Software Development",
    description:
      "At Goognu, we build agriculture software solutions that enhance productivity, operational efficiency, and resource management. Our expertise in AI, cloud computing, and data analytics supports agribusinesses in streamlining processes, improving yield forecasts, and ensuring data-driven decision-making.",
    image: "industry/agriculture/agriculture_software_solutions.png",
    items: [
      {
        title: "Farm Management Systems",
        description: "End-to-end platforms for crop planning, inventory management, and operational tracking.",
      },
      {
        title: "Precision Agriculture Solutions",
        description: "Data-driven insights for soil analysis, irrigation control, and weather monitoring.",
      },
      {
        title: "Supply Chain & Logistics Management",
        description: "Digital tools for seamless farm-to-market operations and traceability.",
      },
      {
        title: "Livestock Monitoring",
        description: "AI-powered solutions for tracking animal health, nutrition, and breeding cycles.",
      },
    ],
  },

  // Django: why_choose_title / why_choose_description / why_choose1..8
  capabilities: {
    title: "Why Choose Goognu for Agriculture Software Development?",
    description:
      "We deliver specialized agriculture technology solutions tailored to the unique needs of farmers, agribusinesses, and food producers. Our focus on innovation and efficiency helps businesses achieve better resource utilization and higher profitability.",
    items: [
      {
        title: "Agriculture Software Consulting",
        description:
          "We provide expert guidance on digital transformation, helping agribusinesses adopt precision farming, automation, and streamlined supply chain management.",
      },
      {
        title: "Custom Software Development",
        description:
          "We develop scalable, tailored applications to address agribusiness challenges, from farm management to data analytics and operational efficiency.",
      },
      {
        title: "Cloud-Based Platforms",
        description:
          "Secure cloud solutions enable real-time farm analytics, remote monitoring, automated workflows, and data-driven decision-making for improved productivity.",
      },
      {
        title: "AI-Driven Crop Monitoring",
        description:
          "Advanced AI-powered analytics assess crop health, detect diseases early, and optimize yield through predictive insights and real-time monitoring.",
      },
      {
        title: "IoT Integration for Smart Farming",
        description:
          "IoT-enabled sensors provide real-time data on soil moisture, weather conditions, and temperature, ensuring optimal resource allocation.",
      },
      {
        title: "Predictive Analytics for Yield Optimization",
        description:
          "AI-based predictive models forecast crop yields, analyze market trends, and optimize resources for maximum profitability.",
      },
      {
        title: "Agribusiness ERP Solutions",
        description:
          "Centralized ERP platforms streamline financial management, inventory tracking, supply chain logistics, and regulatory compliance for agribusinesses.",
      },
      {
        title: "Remote Sensing & GIS Mapping",
        description:
          "Satellite and drone-based imagery enhances precision agriculture by monitoring crop growth, soil health, and land use patterns.",
      },
    ],
  },

  // Django: service_title / service_description / service_image / service_title1..6 — title-only slots, no descriptions in the admin export.
  services: {
    title: "Our Agriculture Software Development Solutions",
    description:
      "We offer specialized software solutions to meet the dynamic needs of the agriculture industry, ensuring better resource utilization and improved yield. Our services include:",
    items: [
      { title: "Precision Agriculture Solutions" },
      { title: "Farm Management Software" },
      { title: "Supply Chain & Logistics Solutions" },
      { title: "Livestock Monitoring Systems" },
      { title: "Smart Irrigation Systems" },
      { title: "AI-Powered Crop Monitoring" },
    ],
  },

  // Django: technology_title / technology_description / technology1..6
  technologies: {
    title: "We use Innovative Technologies Powering Agriculture",
    description:
      "At Goognu, we integrate modern technologies to enhance agricultural productivity, sustainability, and profitability. Our solutions include:",
    items: [
      {
        title: "AI & IoT-Based Farming",
        description: "Real-time analytics for monitoring crop health, soil conditions, and weather patterns.",
      },
      {
        title: "Blockchain for Agriculture Supply Chain",
        description: "Secure, transparent tracking of transactions for better food traceability and safety.",
      },
      {
        title: "Automated Machinery & Drones",
        description: "Enhancing precision in planting, irrigation, and harvesting to improve efficiency.",
      },
      {
        title: "Remote Farm Monitoring",
        description: "IoT-enabled platforms providing real-time insights into farm conditions and operations.",
      },
      {
        title: "Smart Greenhouse Solutions",
        description: "Automated climate control and monitoring systems for optimized crop growth.",
      },
      {
        title: "Digital Marketplaces for Farmers",
        description: "Online platforms connecting farmers directly with buyers, reducing supply chain inefficiencies.",
      },
    ],
  },

  // Django: process_title / process_description / process1..8 — no clean match
  // among the five conventional sections, so this is an extra section.
  extraSections: [
    {
      title: "Our Agriculture Software Development Process",
      description:
        "At Goognu, we follow a structured approach to developing agriculture software solutions, ensuring efficiency, reliability, and ease of use for farmers, agribusinesses, and stakeholders.",
      items: [
        {
          title: "Requirement Analysis & Planning",
          description:
            "We assess agricultural challenges, define project goals, and outline technical specifications to create tailored solutions for farming and agribusiness needs.",
        },
        {
          title: "UI/UX Design",
          description:
            "Our team designs intuitive, user-friendly interfaces to ensure easy navigation and accessibility for farmers, agribusinesses, and stakeholders.",
        },
        {
          title: "Technology Stack Selection",
          description:
            "We select the best-suited technologies, including AI, IoT, cloud computing, and blockchain, to build reliable and efficient agriculture software.",
        },
        {
          title: "Software Architecture Development",
          description:
            "A robust architecture is designed to support scalability, real-time data processing, and seamless integration with existing farm management systems.",
        },
        {
          title: "Custom Software Development",
          description:
            "We develop and integrate software solutions, including precision farming tools, supply chain management platforms, and remote monitoring systems.",
        },
        {
          title: "IoT & Smart Farming Integration",
          description:
            "IoT sensors and automation systems are integrated to monitor soil conditions, climate changes, and crop health in real time.",
        },
        {
          title: "AI & Predictive Analytics Implementation",
          description:
            "AI-driven analytics optimize resource allocation, yield forecasting, and early detection of diseases or pest infestations.",
        },
        {
          title: "Security Implementation",
          description:
            "Multi-layered security protocols, including encryption and role-based access control, ensure data protection and regulatory compliance.",
        },
      ],
    },
  ],

  // No FAQ entries in industries-data/FAQ-2026-09-16.json map to agriculture.
  faqs: [],
};
