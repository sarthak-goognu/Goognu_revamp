import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Ecommerce-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "ecommerce",
  title: "E-commerce Application Development Services",
  description:
    "Design scalable, secure, and user-centric e-commerce applications with unique solutions offered by Goognu.",

  about: {
    title: "We Develop Everything E-Commerce",
    description:
      "At Goognu, we specialize in comprehensive e-commerce solutions customised to every business's specific needs. We handle everything—from intuitive user interfaces to backend operations.",
    items: [
      {
        title: "Custom E-commerce Platform Development",
        description:
          "We create fully customized e-commerce platforms tailored to your business goals, ensuring a smooth and efficient shopping experience for customers. Our solutions streamline operations, provide scalability, and enhance overall management capabilities to meet the unique needs of your business.",
      },
      {
        title: "Mobile Commerce Solutions",
        description:
          "Our mobile commerce solutions deliver responsive, feature-rich applications designed to optimize user experience on mobile devices. By ensuring seamless navigation, fast performance, and secure transactions, we help boost sales and engagement for your business on the go.",
      },
      {
        title: "Payment Gateway Integrations",
        description:
          "We securely integrate multiple payment gateways into your e-commerce platform to provide smooth, reliable, and secure payment processing. This ensures that customers have a hassle-free checkout experience while maintaining the highest level of transaction security.",
      },
      {
        title: "Secure Data Management",
        description:
          "We implement robust data management strategies to protect sensitive customer information from unauthorized access and breaches. Our solutions ensure compliance with industry standards and safeguard your data integrity, helping to build trust with your clients and meet regulatory requirements.",
      },
    ],
  },

  capabilities: {
    title: "Capabilities That Guarantee Best-in-Class E-commerce Application Development Services",
    description:
      "We have successfully completed more than 100+ e-commerce projects around the globe that have increased revenues by 40% and boosted customer engagement for businesses. Leveraging expertise in cutting-edge technologies, we keep your application always a step ahead of the curve.",
    items: [
      {
        title: "Tailored Solutions",
        description:
          "We create custom e-commerce platforms designed to meet unique business needs, delivering seamless, scalable, and efficient online solutions.",
      },
      {
        title: "End-to-End Development",
        description:
          "From design to deployment, our comprehensive e-commerce services ensure a smooth development process that focuses on performance and security.",
      },
      {
        title: "Continuous Improvement",
        description:
          "With a focus on innovation, we continually enhance your e-commerce applications with the latest features and integrations to stay ahead in the competitive market.",
      },
    ],
  },

  platforms: {
    title: "Innovative Platforms for a Connected E-commerce Experience",
    description:
      "Our e-commerce solutions leverage advanced platforms to optimize your operations and enhance customer satisfaction.",
    items: [
      {
        title: "Smart Logistics Platforms",
        description:
          "Real-time tracking, automated route planning, and seamless coordination between stakeholders for faster deliveries, reduced costs, and enhanced customer satisfaction.",
        image: "industry/ecommerce/smart_logistics_platform.png",
      },
      {
        title: "Warehouse Management Software",
        description:
          "Simplified inventory tracking, order fulfillment, and space utilization, integrated with other business systems for smooth operations and accurate order processing.",
        image: "industry/ecommerce/warehouse_management_software.png",
      },
      {
        title: "Inventory Management Systems",
        description:
          "Real-time visibility into stock levels with automated reordering and demand forecasting to reduce stockouts and minimize excess inventory.",
        image: "industry/ecommerce/inventory_management_systems.png",
      },
      {
        title: "Integrated E-commerce ERP Solutions",
        description:
          "Sales, inventory, finance, and customer management unified into a single system, improving data accuracy and enabling seamless communication between departments.",
        image: "industry/ecommerce/integrates_ecommerce_erp_solutions.png",
      },
    ],
  },

  services: {
    title: "E-Commerce Solutions Modified for Your Business",
    description:
      "From design to deployment, Goognu provides end-to-end e-commerce development services to empower businesses across industries.",
    items: [
      {
        title: "Custom Storefront Design",
        description:
          "Personalized storefronts designed to showcase your brand, presenting a seamless and engaging shopping experience to your customers.",
        image: "industry/ecommerce/storefront_design_icon.png",
      },
      {
        title: "Advanced Analytics Integration",
        description:
          "Leverage powerful data insights to track performance, understand user behavior, and drive wiser business decisions.",
        image: "industry/ecommerce/Analytics_integration_icon.png",
      },
      {
        title: "Mobile-Friendly E-commerce Solutions",
        description:
          "Create responsive, device-optimized applications that ensure seamless shopping on both smartphones and tablets.",
        image: "industry/ecommerce/mobile_friendly_e_commerce_solutions_icon.png",
      },
      {
        title: "Third-Party API Integrations",
        description:
          "Seamlessly connect payment systems, shipping tools, and other services to enhance functionality and streamline your operations.",
        image: "industry/ecommerce/api_integrations.png",
      },
    ],
  },

  technologies: {
    title: "Our Advanced Technologies",
    description:
      "Revolutionizing E-commerce with Advanced Technologies. Our advanced technologies empower e-commerce businesses with cutting-edge AI, machine learning, and cloud solutions. These tools drive smarter operations, enable scalability, and enhance efficiency, helping businesses deliver personalized customer experiences and stay ahead in a competitive digital landscape.",
    items: [
      {
        title: "AI-Powered Personalization",
        description:
          "Deliver highly tailored shopping experiences by leveraging artificial intelligence to recommend products and optimize user engagement.",
        image: "industry/ecommerce/ai_powered_personalization_icon.png",
      },
      {
        title: "Machine Learning Insights",
        description:
          "Leverage advanced machine learning algorithms to understand customer behavior, identify trends, and make data-driven business decisions.",
        image: "industry/ecommerce/machine_learning_icon.png",
      },
      {
        title: "Cloud-Based Scalability",
        description:
          "Ensure seamless growth with cloud solutions that provide flexible, secure, and scalable infrastructure to meet changing demands.",
        image: "industry/ecommerce/cloud_based_scalability_icon.png",
      },
    ],
  },

  faqs: [
    {
      question: "How secure is your cloud management?",
      answer: "All data is encrypted and stored in compliance with the latest security standards.",
    },
    {
      question: "Can you integrate with existing e-commerce platforms?",
      answer: "Yes, our solutions are designed for seamless integration with existing software.",
    },
    {
      question: "What compliance standards do you follow?",
      answer: "We adhere to industry standards, including PCI DSS, GDPR, and other regional regulations.",
    },
  ],
};
