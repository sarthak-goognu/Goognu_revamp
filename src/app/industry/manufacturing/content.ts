import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Manufacturing-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "manufacturing",
  title: "Manufacturing IT Services & Solutions",
  description:
    "Enhance manufacturing operations with secure and efficient software designed to meet industry demands.",
  bannerImage: "industry/manufacturing/manu_banner.jpg",

  // Django: product_title / product_description / product1..4_title/description/image
  about: {
    title: "We Develop Compliance-Friendly Manufacturing Software Products Ensuring High Standards",
    description:
      "Our solutions help manufacturers adhere to industry regulations, improve traceability, and ensure consistent quality. By integrating advanced technologies, businesses can streamline compliance processes, reduce risks, and maintain production standards.",
    items: [
      {
        title: "Food Safety Modernization Act Compliance",
        description:
          "Real-time monitoring and traceability tools help manufacturers meet food safety regulations by preventing contamination risks and ensuring product integrity. These solutions enable proactive issue detection, reducing recalls and compliance violations. Advanced tracking systems provide end-to-end visibility across the supply chain, ensuring regulatory adherence. Automated alerts and analytics support quick decision-making, helping businesses maintain safety standards with greater accuracy.",
      },
      {
        title: "Quality Management Systems (QMS)",
        description:
          "Digital quality control solutions enable real-time tracking, data analysis, and automated compliance verification. Manufacturers can maintain product consistency while ensuring adherence to national and international production standards. Integrated QMS platforms provide detailed reports and predictive analytics to improve quality assurance. Businesses can swiftly identify defects, streamline inspections, and enhance customer satisfaction with standardized manufacturing processes.",
      },
      {
        title: "Regulatory Documentation & Reporting",
        description:
          "Automated documentation solutions simplify compliance reporting, reducing manual workload while ensuring accuracy. Manufacturers can efficiently manage regulatory audits, certifications, and industry-specific requirements through intelligent software. Real-time data collection enhances transparency, supporting businesses in maintaining consistent documentation. Automated alerts help manufacturers stay updated with evolving regulations, preventing compliance gaps and potential legal risks.",
      },
      {
        title: "Sustainable Manufacturing Solutions",
        description:
          "Eco-friendly IT solutions help manufacturers implement energy-efficient production models, reducing environmental impact. Intelligent monitoring optimizes resource usage, promoting responsible waste management and cost-effective sustainability strategies. Advanced analytics enable manufacturers to track carbon footprints, improve energy utilization, and integrate green practices. Businesses can enhance efficiency while meeting sustainability goals without compromising operational performance.",
      },
    ],
  },

  // Django: why_trust_title / why_trust_description (empty) / why_trust_image (empty) / why_trust1..4
  capabilities: {
    title: "Why Trust Goognu for Manufacturing IT Services & Solutions?",
    items: [
      {
        title: "Proven Industry Expertise",
        description: "We provide tailored IT solutions that enhance productivity, improve compliance, and simplify complex manufacturing operations.",
      },
      {
        title: "Secure & Reliable Infrastructure",
        description: "Our cloud-based systems ensure data security, real-time monitoring, and smooth operations for manufacturing businesses.",
      },
      {
        title: "Advanced Automation & IoT",
        description: "Integrated IoT solutions and AI-driven automation help manufacturers reduce downtime and improve production accuracy.",
      },
      {
        title: "Dedicated Support & Compliance",
        description: "We offer continuous IT support, security updates, and regulatory compliance solutions to maintain operational stability.",
      },
    ],
  },

  // Django: service_title / service_description / service1..4 (service5 is an empty slot, dropped)
  services: {
    title: "Our All-Inclusive Range of Manufacturing IT Services",
    description:
      "We provide advanced IT solutions to improve manufacturing workflows, boost productivity, and maintain industry compliance. Our services help businesses adopt modern technologies, reduce inefficiencies, and achieve seamless coordination across operations.",
    items: [
      {
        title: "Manufacturing Technology Consulting",
        description:
          "Implement modern IT frameworks and automation strategies to improve production efficiency, minimize downtime, and enhance operational accuracy. Our consulting services focus on integrating innovative technologies that align with industry requirements, ensuring smooth execution of manufacturing processes while optimizing resource utilization.",
      },
      {
        title: "Smart Factory Solutions",
        description:
          "Adopt intelligent systems powered by IoT and AI to enable real-time monitoring, predictive maintenance, and data-driven insights. These solutions help manufacturers detect issues early, optimize machine performance, and ensure continuous improvements in production quality and efficiency.",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Improve logistics and inventory management with automated workflows, intelligent tracking, and integrated enterprise resource planning (ERP) systems. Our solutions provide real-time visibility into supply chain activities, enabling manufacturers to minimize delays, reduce costs, and enhance overall coordination across suppliers and distributors.",
      },
      {
        title: "Cybersecurity & Risk Management",
        description:
          "Protect manufacturing operations with advanced security measures, proactive threat detection, and compliance-focused risk management. Our cybersecurity solutions help safeguard critical data, prevent unauthorized access, and ensure operational resilience against potential cyber threats.",
      },
    ],
  },

  // Django: technology_title / technology_description / technology1..6
  technologies: {
    title: "Industry 4.0 Technologies Driving Our IT Support for Manufacturing",
    description:
      "Manufacturers need technology-driven solutions to enhance efficiency, security, and scalability. Goognu provides advanced IT support, enabling businesses to optimize production, monitor operations, and integrate smart systems for better performance.",
    items: [
      {
        title: "AI-Powered Automation",
        description:
          "Enhance productivity with AI-driven automation that optimizes workflows, detects anomalies, and improves production accuracy through intelligent data analysis and predictive maintenance.",
      },
      {
        title: "Secure Cloud Infrastructure",
        description:
          "Ensure data protection, remote accessibility, and regulatory compliance with cloud-based systems that support real-time monitoring and secure collaboration across manufacturing units.",
      },
      {
        title: "Industrial IoT Integration",
        description:
          "Connect machines, sensors, and software to enable real-time tracking, predictive analytics, and process optimization for smarter and more responsive manufacturing operations.",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Leverage advanced analytics to monitor production trends, minimize downtime, and improve decision-making with actionable insights from real-time operational data.",
      },
      {
        title: "Automated Quality Control",
        description:
          "Implement intelligent quality management systems that track defects, ensure consistency, and enhance compliance with manufacturing standards through automated inspections and reporting.",
      },
      {
        title: "Smart Supply Chain Solutions",
        description:
          "Optimize inventory, logistics, and procurement with integrated digital tools that enhance visibility, reduce delays, and improve overall supply chain efficiency.",
      },
    ],
  },

  // Django: era_title/description/era1..6 and process_title/description/process1..6 — neither
  // cleanly maps to the five conventional sections, so both are extra sections.
  extraSections: [
    {
      title: "What Industry 4.0 Means for Manufacturers: Advancing Manufacturing Through Technology",
      description:
        "Industry 4.0 is transforming manufacturing by integrating automation, data analytics, and intelligent systems. Goognu provides tailored IT solutions to enhance production efficiency, reduce downtime, and improve quality control.",
      items: [
        {
          title: "Automated Manufacturing Solutions",
          description: "AI-powered automation enhances precision, minimizes errors, and improves overall production efficiency.",
        },
        {
          title: "Predictive Maintenance",
          description: "Real-time analytics detect equipment issues early, preventing unexpected failures and downtime.",
        },
        {
          title: "Supply Chain Optimization",
          description: "Digital tools improve inventory tracking, logistics coordination, and procurement efficiency.",
        },
        {
          title: "Smart Factory Integration",
          description: "IoT and AI connect systems for real-time monitoring and data-driven decisions.",
        },
        {
          title: "Data-Driven Quality Control",
          description: "Intelligent analytics ensure consistent product quality and regulatory compliance adherence.",
        },
        {
          title: "Cybersecurity & Risk Management",
          description: "Advanced security measures protect manufacturing systems from threats and vulnerabilities.",
        },
      ],
    },
    {
      // process1_title/description had a duplicated leading-text typo in the
      // admin export ("their specific needs. Understanding Business Needs" /
      // "Understanding Business Needs  We assess...") — cleaned up here per
      // instructions to fix typos without changing the real copy.
      title: "Development Process We Follow as a Reliable Manufacturing IT Service Provider",
      description: "Our structured approach ensures that manufacturers receive technology solutions tailored to their specific needs.",
      items: [
        {
          title: "Understanding Business Needs",
          description:
            "We assess manufacturing processes, identify inefficiencies, and recommend IT solutions to improve productivity, reduce downtime, and ensure seamless operations.",
        },
        {
          title: "Solution Design & Planning",
          description:
            "Our experts develop a strategic roadmap, aligning software, automation, and system integration to enhance operational efficiency and scalability.",
        },
        {
          title: "Implementation & Integration",
          description:
            "We deploy IT solutions with minimal disruption, ensuring smooth integration into existing manufacturing systems while maintaining workflow continuity.",
        },
        {
          title: "Testing & Optimization",
          description: "Comprehensive testing ensures performance, security, and efficiency, refining processes to meet evolving manufacturing needs.",
        },
        {
          title: "Ongoing Support & Maintenance",
          description: "We provide regular monitoring, system updates, and technical assistance to maintain long-term stability and reliability.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Our experts analyze system performance, implement updates, and adapt solutions to meet changing industry standards and operational demands.",
        },
      ],
    },
  ],

  // No FAQ entries in industries-data/FAQ-2026-09-16.json map to manufacturing.
  faqs: [],
};
