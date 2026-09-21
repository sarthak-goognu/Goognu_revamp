import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Healthcare-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "healthcare",
  title: "Explore Healthcare Innovation with Goognu's Solutions",
  description:
    "Building smart tools and secure platforms to improve healthcare operations and patient outcomes.",

  about: {
    title: "Empower Healthcare with Goognu’s Molded Solutions",
    description:
      "We are Goognu, a health technology company helping healthcare organizations make processes easier, improve patient care, and bring about better outcomes through modern software solutions. Our expert team designs and delivers tools that answer the unique challenges of the healthcare industry, ensuring efficiency, security, and compliance.",
    items: [
      {
        title: "Enhanced healthcare workflows",
        description:
          "Enhance efficiency by automating repetitive tasks, integrating systems, and simplifying communication between healthcare professionals. Streamlined workflows reduce delays, improve patient care, and allow staff to focus on what matters most.",
      },
      {
        title: "Protect patient data with secure systems",
        description:
          "Implement robust cybersecurity measures, including encryption and access controls, to safeguard sensitive medical information. Secure systems ensure compliance with regulations, prevent breaches, and foster trust between patients and healthcare providers.",
      },
      {
        title: "Improve decision-making with data insights",
        description:
          "Leverage advanced analytics and real-time data to identify patterns, predict outcomes, and guide clinical decisions. Insightful data empowers healthcare teams to provide personalized treatments and improve overall patient outcomes effectively.",
      },
    ],
  },

  capabilities: {
    title: "Capabilities That Drive Excellence in Healthcare Solutions",
    description:
      "Goognu assists healthcare providers in streamlining processes, enhancing security, integrating systems, and reducing manual work for smoother operations.",
    items: [
      {
        title: "Custom Integration",
        description: "Connect new systems with existing workflows.",
      },
      {
        title: "Cloud Optimization",
        description: "Ensure secure, fast, and compliant operations.",
      },
      {
        title: "Automation & AI",
        description: "Reduce manual tasks and improve decision-making.",
      },
    ],
  },

  services: {
    title: "Our Services",
    description:
      "Goognu offers advanced health care software, designed to meet the shifting needs of the providers, optimize patient care, streamline operations, and ensure effortless integration with legacy systems for maximal efficiency.",
    items: [
      {
        title: "Custom Healthcare Software Development",
        description:
          "Develop healthcare-specific platforms tailored to enhance the workflow, improve patient care, and help meet the requirements of an organization.",
      },
      {
        title: "Electronic Health Records (EHR)",
        description:
          "Tidy up patient data and enable efficient management with improved care coordination and compliance in healthcare standards.",
      },
      {
        title: "Telemedicine Tools",
        description:
          "Enable secure virtual consultations with user-friendly technology to make patients easily access healthcare professionals.",
      },
    ],
  },

  technologies: {
    title: "Advanced Technologies We Use in Healthcare Software Development",
    description:
      "At Goognu, we provide advanced technology solutions for healthcare software development, ensuring secure, efficient, and innovative systems that drive improved patient care and support seamless healthcare operations.",
    items: [
      {
        title: "Cloud Computing",
        description:
          "Scalable, secure storage and processing to manage healthcare data seamlessly. Goognu provides robust cloud solutions to ensure smooth and secure data management for healthcare applications.",
      },
      {
        title: "Data Analytics",
        description:
          "Transform complex data into actionable insights for better decision-making. Our advanced data analytics helps healthcare providers uncover meaningful insights for optimized patient care.",
      },
      {
        title: "AI & Machine Learning",
        description:
          "Enhance diagnostics and automate workflows with intelligent algorithms. Goognu integrates AI and machine learning to improve efficiency, accuracy, and innovation in healthcare services.",
      },
    ],
  },

  extraSections: [
    {
      title: "Sectors That Can Benefit from Goognu’s Healthcare Solutions",
      items: [
        { title: "Hospitals and Clinics" },
        { title: "Telemedicine Solutions" },
        { title: "Health Insurance Companies" },
        { title: "Research and Diagnostics Labs" },
        { title: "Wellness Platforms" },
        { title: "Fitness Applications" },
        { title: "Pharmacies and Drugstores" },
        { title: "Rehabilitation Centers" },
        { title: "Assisted Living Facilities" },
      ],
    },
  ],

  faqs: [
    {
      question: "How secure is your software and cloud service?",
      answer:
        "Our solutions comply with industry regulations like HIPAA and use top-notch encryption to protect your data.",
    },
    {
      question: "Can you integrate your software with our existing systems?",
      answer: "Yes, we specialize in seamless integration with any healthcare system.",
    },
    {
      question: "What makes Goognu different?",
      answer:
        "Our focus on efficiency, compliance, and tailored solutions helps healthcare providers focus on what they do best—caring for patients.",
    },
  ],
};
