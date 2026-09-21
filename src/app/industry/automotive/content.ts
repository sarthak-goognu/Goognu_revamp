import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Automotive-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "automotive",
  title: "Automotive Software Development Services",
  description:
    "Enhance vehicle performance, safety, and connectivity with intelligent software solutions tailored to the evolving automotive industry.",
  bannerImage: "industry/automotive/automotive_software_development_banner_image.png",

  // Django: why_choose_title / why_choose_description / why_choose_image / why_choose1..4 (why_choose5 is an empty slot, dropped)
  about: {
    title: "Why Choose Goognu for Your Automotive Software Development Services?",
    description:
      "At Goognu, we specialize in delivering innovative automotive software solutions tailored to industry needs. Our expertise ensures secure, efficient, and scalable software that enhances vehicle automation, safety, and user experience.",
    image: "industry/automotive/why_choose_us-1.png",
    items: [
      {
        title: "Timely Project Delivery",
        description: "We follow structured development processes to ensure projects are completed within set timelines.",
      },
      {
        title: "Expert Engineering Team",
        description: "Our developers bring extensive experience in automotive software development, ensuring high-quality solutions.",
      },
      {
        title: "Data Security & Compliance",
        description: "We implement advanced security measures to protect automotive data and ensure compliance with industry regulations.",
      },
      {
        title: "Reliable Solutions",
        description: "Our software solutions are designed to support growing business needs while ensuring long-term reliability.",
      },
    ],
  },

  // Django: solution_title / solution_description / solution1..6
  capabilities: {
    title: "We Build Automotive Software Solutions According to Business Needs",
    description:
      "Our solutions leverage modern technology to address industry challenges and drive innovation in automotive software development.",
    items: [
      {
        title: "Artificial Intelligence",
        description:
          "Implementing AI-powered analytics for predictive maintenance, autonomous driving, and smart navigation to improve efficiency and safety.",
      },
      {
        title: "Cloud & Cybersecurity",
        description:
          "Building secure and scalable cloud infrastructure to manage automotive data while ensuring protection against cyber threats.",
      },
      {
        title: "Embedded Software Development",
        description: "Creating high-performance embedded systems for ECUs, ADAS, and real-time vehicle control systems.",
      },
      {
        title: "Connected Vehicle Solutions",
        description:
          "Enabling seamless vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication for improved connectivity and automation.",
      },
      {
        title: "Automotive IoT Integration",
        description: "Utilizing IoT-enabled sensors for real-time diagnostics, remote monitoring, and enhanced fleet management.",
      },
      {
        title: "Over-the-Air (OTA) Updates",
        description: "Implementing remote software updates to enhance vehicle performance, fix bugs, and introduce new features.",
      },
    ],
  },

  // Django: service_title / service_description / service1..8
  services: {
    title: "Innovative Automotive Software Solutions We Offer for Enhanced Performance",
    description:
      "We provide a range of software solutions designed to optimize vehicle systems, improve automation, and enhance user experience.",
    items: [
      {
        title: "In-Vehicle Software Development",
        description: "Developing advanced software for infotainment, driver assistance, and safety systems to enhance the driving experience.",
      },
      {
        title: "Fleet Management Solutions",
        description: "Providing cloud-based platforms for real-time vehicle tracking, fuel efficiency monitoring, and predictive maintenance.",
      },
      {
        title: "Automotive IoT Solutions",
        description:
          "Integrating IoT-enabled sensors and connectivity solutions for enhanced vehicle diagnostics, remote monitoring, and smart automation.",
      },
      {
        title: "Autonomous Driving Software",
        description: "Building AI-powered algorithms and sensor integration for adaptive cruise control, lane assistance, and self-driving capabilities.",
      },
      {
        title: "Vehicle Telematics Solutions",
        description: "Enabling real-time data exchange for navigation, diagnostics, and vehicle-to-everything (V2X) communication.",
      },
      {
        title: "Automotive Cybersecurity Solutions",
        description: "Implementing advanced security protocols to protect vehicle networks from cyber threats and unauthorized access.",
      },
      {
        title: "Electric Vehicle Software Development",
        description: "Designing energy management systems, battery monitoring, and charging infrastructure integration for EVs.",
      },
      {
        title: "Automotive Embedded Systems",
        description: "Developing firmware and embedded software for ECU programming, sensor fusion, and real-time system control.",
      },
    ],
  },

  // Django: technologies_title / technologies_description / technologies1..8
  technologies: {
    title: "Innovative Technologies Powering Our Automotive Software Development Services",
    description:
      "We implement advanced software solutions to enhance vehicle performance, automation, and connectivity, addressing key challenges in the automotive industry.",
    items: [
      {
        title: "Intelligent Vehicle Systems",
        description: "Developing AI-powered software for driver assistance, predictive maintenance, and real-time vehicle diagnostics.",
      },
      {
        title: "Connected Mobility Solutions",
        description: "Enabling vehicle-to-everything (V2X) communication for efficient data exchange and enhanced road safety.",
      },
      {
        title: "Fleet Management Software",
        description: "Offering cloud-based solutions for real-time tracking, route optimization, and fuel efficiency monitoring.",
      },
      {
        title: "Autonomous Driving Software",
        description: "Designing machine learning algorithms for self-driving capabilities, adaptive cruise control, and lane-keeping assistance.",
      },
      {
        title: "Automotive IoT Integration",
        description: "Implementing sensor-based monitoring for remote diagnostics, smart automation, and real-time analytics.",
      },
      {
        title: "Over-the-Air (OTA) Software Updates",
        description: "Enabling remote firmware updates for continuous vehicle software enhancements and security patches.",
      },
      {
        title: "Digital Twin Technology",
        description: "Creating virtual models of vehicles to simulate real-world performance and optimize system functionality.",
      },
      {
        title: "Electric Vehicle (EV) Software Solutions",
        description: "Developing energy management systems, battery analytics, and charging infrastructure software for EVs.",
      },
    ],
  },

  // Django: process_title / process_description / process_image / process1..5 — no clean match
  // among the five conventional sections, so this is an extra section.
  extraSections: [
    {
      title: "Process We Follow for Automotive App Development Services",
      description:
        "At Goognu, we implement a structured development process to deliver secure, high-performance, and scalable automotive applications. Our approach ensures seamless connectivity, industry compliance, and an optimized user experience.",
      items: [
        {
          title: "Requirement Analysis & Planning",
          description: "Identifying business goals, defining key functionalities, and outlining technical specifications.",
        },
        {
          title: "UI/UX Design & Prototyping",
          description: "Crafting intuitive and user-friendly interfaces for seamless interaction across devices.",
        },
        {
          title: "Application Development & System Integration",
          description: "Developing robust automotive applications with real-time data synchronization and third-party integrations.",
        },
        {
          title: "Testing & Quality Assurance",
          description: "Performing rigorous functional, security, and performance testing to ensure reliability and compliance.",
        },
        {
          title: "Deployment & Implementation",
          description: "Ensuring a smooth launch with optimized performance across different automotive ecosystems.",
        },
      ],
    },
  ],

  // No FAQ entries in industries-data/FAQ-2026-09-16.json map to automotive.
  faqs: [],
};
