import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/Travel-2026-09-16.json (goognu.com admin CMS).
export const content: IndustryPageContent = {
  slug: "travel",
  title: "Travel App Development Company",
  description:
    "Build innovative travel solutions with reliable, efficient, and customized software designed to enhance your business operations.",
  bannerImage: "industry/travel/travel_app_banner_image.png",

  about: {
    title: "Why Choose Goognu for Your Travel App Development Services?",
    description:
      "At Goognu, we specialize in creating reliable travel solutions designed to meet the evolving needs of the industry. Our experts craft intuitive applications with powerful features that boost engagement and efficiency.",
    image: "industry/travel/why_choose_us_1.png",
    items: [
      {
        title: "On-time Project Delivery",
        description: "Projects get delivered on time while we preserve quality at every step of the process.",
      },
      {
        title: "24/7 Expert Support",
        description: "An available team provides ongoing support for faultless functionality alongside maintenance services.",
      },
      {
        title: "Reliable and Efficient Solution",
        description: "We create applications which follow your travel business requirements to deliver user-focused solutions.",
      },
    ],
  },

  platforms: {
    title: "Suite of Travel Application and Software Solutions We Offer",
    items: [
      {
        title: "Travel Booking Platforms",
        description:
          "Develop comprehensive platforms that streamline booking processes with features like real-time availability, dynamic pricing, and multi-payment integration.",
      },
      {
        title: "Travel Management Systems",
        description:
          "Implement robust systems that simplify itinerary planning, expense management, and reporting for corporate travel needs.",
      },
      {
        title: "Tourism Mobile Apps",
        description:
          "Create engaging mobile applications that provide personalized recommendations, seamless bookings, and interactive guides for travelers.",
      },
    ],
  },

  services: {
    title: "Travel Software and Application Development Services That Make Us Stand Out",
    description:
      "Our travel software solutions are designed to cater to the unique needs of the travel industry, enhancing operational efficiency and providing seamless user experiences.",
    items: [
      { title: "Enhanced booking management systems" },
      { title: "Real-time travel data integration" },
      { title: "Secure payment gateways" },
      { title: "Personalized customer engagement tools" },
      { title: "Scalable infrastructure for growing demands" },
    ],
  },

  technologies: {
    title: "Advanced Technologies We Utilize to Build Your Travel App",
    description: "We implement modern technologies to develop robust and innovative travel solutions:",
    items: [
      {
        title: "Artificial Intelligence",
        description: "Enhance user experiences with intelligent chatbots, personalized recommendations, and predictive analytics.",
      },
      {
        title: "Automation Systems",
        description: "Streamline business operations with automated processes for booking, scheduling, and customer engagement.",
      },
      {
        title: "Data Analytics",
        description: "Leverage comprehensive analytics to gain valuable insights, optimize services, and improve decision-making.",
      },
      {
        title: "Cloud Integration",
        description: "Ensure high availability, secure data storage, and efficient scaling with cloud-based infrastructure.",
      },
      {
        title: "Blockchain Technology",
        description: "Strengthen data security, enhance transaction transparency, and ensure tamper-proof operations for reliable business processes.",
      },
      {
        title: "Internet of Things (IoT)",
        description: "Enhance connectivity through smart devices, offering real-time updates, remote monitoring, and better customer interaction.",
      },
    ],
  },

  extraSections: [
    {
      title: "Hand-Picked Features for Your Travel App",
      description: "We offer an extensive range of features to enhance the efficiency and performance of your travel applications:",
      items: [
        { title: "Multi-language Support" },
        { title: "Real-time Notifications" },
        { title: "Dynamic Booking Modules" },
        { title: "Customizable Tour Packages" },
        { title: "Interactive Maps Navigation" },
        { title: "In-app Payments" },
        { title: "User Analytics Dashboard" },
        { title: "Feedback Integration Tools" },
        { title: "Secure Data Storage" },
        { title: "Travel Recommendations System" },
        { title: "Itinerary Management Tools" },
        { title: "Security Protocols Implemented" },
      ],
    },
  ],

  // No FAQ-2026-09-16.json entries matched this industry (service_slug values present are
  // finance, fitness-wellness, mobile-game(-app-development-services), saas-development-services,
  // healthcare-solutions, e-commerce-application-development-services — none for travel).
  faqs: [],
};
