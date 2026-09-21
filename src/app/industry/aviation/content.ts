import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Aviation-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "aviation",
  title: "Smart Aviation Software Development Solutions & Expert Consulting",
  description:
    "Enhance aviation operations with protected and customized software solutions designed for industry-specific needs.",
  bannerImage: "industry/aviation/banner_image.png",

  // Django: why_choose_title / why_choose_description / why_choose_image / why_choose1..8
  about: {
    title: "Why Choose Goognu for Aviation Software Development?",
    description:
      "Goognu develops aviation software that improves operational efficiency, enhances passenger experience, and ensures compliance with industry regulations. Our expertise in AI, cloud computing, and automation enables us to create intelligent systems for flight management, maintenance tracking, and real-time data analytics, helping airlines and aviation businesses operate more efficiently.",
    image: "industry/aviation/why_choose_aviation_app_development.png",
    items: [
      {
        title: "Industry-Specific Expertise",
        description:
          "We develop aviation solutions tailored to airlines, airports, and service providers, ensuring compliance with global aviation regulations and industry standards.",
      },
      {
        title: "AI-Powered Analytics",
        description:
          "Our AI-driven software enhances decision-making with real-time insights, optimizing flight operations, passenger management, and maintenance scheduling.",
      },
      {
        title: "Cloud-Based Solutions",
        description:
          "We build scalable cloud platforms for data storage, airline management, and seamless system integration, ensuring high availability and security.",
      },
      {
        title: "Advanced Security Measures",
        description:
          "Our software includes multi-layered security protocols, protecting critical aviation data from cyber threats and ensuring regulatory compliance.",
      },
      {
        title: "Automated Maintenance Systems",
        description:
          "We implement predictive maintenance tools that minimize downtime, improve aircraft reliability, and reduce operational costs.",
      },
      {
        title: "Real-Time Flight Monitoring",
        description:
          "Our systems provide real-time tracking and data synchronization, enhancing operational efficiency and passenger experience.",
      },
      {
        title: "Custom Aviation Solutions",
        description:
          "We create tailored software to meet unique aviation needs, from flight booking and crew management to cargo handling and logistics.",
      },
      {
        title: "Continuous Support & Updates",
        description:
          "Our team provides ongoing maintenance, updates, and technical support to ensure long-term efficiency and adaptability to industry changes.",
      },
    ],
  },

  // Django: services_title / services_description / services1..8
  capabilities: {
    title: "Airline Software Development Services",
    description:
      "At Goognu, we develop aviation software solutions that improve efficiency, safety, and operational control. With expertise in AI, cloud computing, and data analytics, we create advanced platforms for airlines, airports, and aviation service providers.",
    items: [
      {
        title: "Flight Operations Management",
        description:
          "Develop real-time flight tracking, scheduling, and crew coordination systems to reduce delays, improve accuracy, and enhance overall airline efficiency.",
      },
      {
        title: "Passenger Experience Solutions",
        description:
          "Create applications for ticket booking, automated check-in, and personalized services to improve passenger convenience and streamline airline operations.",
      },
      {
        title: "Aircraft Maintenance Systems",
        description:
          "Implement predictive maintenance tools for monitoring aircraft health, reducing downtime, and ensuring compliance with aviation safety regulations through automated diagnostics.",
      },
      {
        title: "Cargo Logistics Management",
        description:
          "Build software for cargo tracking, inventory control, and freight operations to optimize logistics, improve security, and enhance real-time supply chain visibility.",
      },
      {
        title: "Regulatory Compliance Solutions",
        description:
          "Integrate compliance management systems to align with aviation safety standards, reduce risks, and ensure regulatory adherence across airline and airport operations.",
      },
      {
        title: "AI-Powered Analytics",
        description:
          "Utilize artificial intelligence for demand forecasting, route optimization, fuel efficiency, and predictive decision-making to improve aviation management and operations.",
      },
      {
        title: "Cloud-Based Solutions",
        description:
          "Develop secure cloud platforms for aviation data storage, system integration, and remote accessibility, ensuring seamless operations across airlines and airports.",
      },
      {
        title: "Custom Aviation Software",
        description:
          "Provide tailored aviation software solutions to meet specific operational needs, integrating advanced technologies for airlines, airports, and aviation service providers.",
      },
    ],
  },

  // Django: technology_title / technology_description / technology1..6
  technologies: {
    title: "Key Technologies Powering Our Aviation Software Development Solutions",
    description:
      "At Goognu, we develop specialized aviation software solutions that enhance operational efficiency, safety, and compliance. Our expertise in AI, cloud security, and cybersecurity helps airlines and aerospace companies enhance their digital transformation, ensuring secure and intelligent aviation systems.",
    items: [
      {
        title: "Artificial Intelligence",
        description:
          "AI analytics and automation are embedded within aviation software to bring optimization into flight operations, predictive maintenance, and passenger experience. AI capabilities aid in decision-making, making downtimes lesser, and improving safety protocols.",
      },
      {
        title: "Cloud & Cybersecurity",
        description:
          "Cloud aviation solutions offer airlines and aerospace industries real-time secure data management. Cybersecurity protocols are implemented to protect flight-sensitive data against vulnerabilities and cyber threats, ensuring compliance with international aviation regulations.",
      },
      {
        title: "Internet of Things (IoT) for Aviation",
        description:
          "We enable smart aviation ecosystems by integrating IoT sensors and real-time monitoring systems. These technologies help track aircraft performance, improve predictive maintenance, and enhance passenger experiences through connected devices.",
      },
      {
        title: "Blockchain for Secure Transactions",
        description:
          "Our blockchain solutions enhance security and transparency in aviation operations, including aircraft maintenance records, ticketing systems, and supply chain management. This helps reduce fraud, streamline operations, and ensure data integrity.",
      },
      {
        title: "Big Data Analytics",
        description:
          "We utilize advanced data analytics to process vast amounts of flight, weather, and operational data. Our solutions provide actionable insights for route optimization, fuel efficiency, and passenger experience improvements.",
      },
      {
        title: "Augmented & Virtual Reality (AR/VR)",
        description:
          "Our AR/VR solutions support pilot training, maintenance simulations, and real-time guidance for ground crews. These immersive technologies improve learning, reduce errors, and enhance overall operational efficiency.",
      },
    ],
  },

  // Django: process_title / process_description / process1..6 — no clean match
  // among the five conventional sections, so this is an extra section.
  extraSections: [
    {
      title: "Fully Customizable Aviation Software Development Process with Goognu",
      description:
        "At Goognu, we develop aviation software solutions designed to improve efficiency, safety, and passenger experience. Our expertise in AI, cloud computing, and data analytics enables us to build intelligent platforms for flight operations, resource management, and regulatory compliance.",
      items: [
        {
          title: "Project Planning",
          description:
            "We analyze business needs, define technical requirements, and outline the software development roadmap to create customized aviation solutions that align with industry standards.",
        },
        {
          title: "System Design",
          description:
            "Develop structured frameworks with user-friendly interfaces, ensuring smooth integration with existing aviation systems and optimal functionality across all operational areas.",
        },
        {
          title: "Software Development",
          description:
            "Build high-performance aviation applications using advanced programming techniques to enhance flight scheduling, ticketing, cargo tracking, and aircraft maintenance.",
        },
        {
          title: "Security Implementation",
          description:
            "Incorporate multi-layered security protocols, ensuring data protection, regulatory compliance, and secure transactions for airlines, airports, and aviation service providers.",
        },
        {
          title: "Testing & Validation",
          description:
            "Conduct rigorous testing to ensure software reliability, operational accuracy, and compliance with aviation safety standards before deployment.",
        },
        {
          title: "Deployment & Integration",
          description:
            "Seamlessly integrate software into existing systems, ensuring minimal disruption and maximum operational efficiency across aviation networks.",
        },
      ],
    },
  ],

  // No FAQ entries in industries-data/FAQ-2026-09-16.json map to aviation.
  faqs: [],
};
