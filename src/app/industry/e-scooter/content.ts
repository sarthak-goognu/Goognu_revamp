import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/EScooter-2026-09-16.json (goognu.com admin CMS).
// Note: this is the smallest of the industry models — only feature1-4 and a
// single technology_title/description pair are populated in the export, so
// several IndustryPageContent sections (platforms, services, extraSections)
// are intentionally omitted rather than fabricated.
export const content: IndustryPageContent = {
  slug: "e-scooter",
  title: "E-Scooter App Development",
  description:
    "Goognu is your trusted partner for crafting sophisticated e-scooter applications that promote eco-conscious mobility. We aim to make urban transportation cleaner and smarter, one app at a time.",

  about: {
    title: "Goognu: Pioneering E-Scooter Technology for Unmatched Growth",
    description:
      "Goognu stands at the forefront of e-scooter app development, delivering innovative solutions that cater to the evolving needs of the on-demand sector. Our experts excel in designing and building high-performance e-scooter applications. Many companies worldwide have embraced this eco-friendly, profitable mobility solution through our tailored e-scooter platforms. You can join the movement.",
    items: [],
  },

  capabilities: {
    title: "E-Scooters Are The Most Eco-Conscious and Financially Viable Segment Of The On-Demand Industry.",
    description: "Goognu develops sophisticated mobility platforms to ensure a smooth and efficient e-scooter application experience.",
    items: [
      {
        title: "In-App Payment Processing",
        description: "Integrated payment gateways that ensure swift, secure transactions for a hassle-free user journey.",
      },
      {
        title: "GPS Integration",
        description: "Real-time tracking enables users to locate the nearest available scooters effortlessly, enhancing user convenience.",
      },
      {
        title: "Social Media Connectivity",
        description: "Our login systems facilitate quick access through social accounts, ensuring a seamless onboarding experience.",
      },
      {
        title: "Cross-Platform Compatibility",
        description: "We deliver adaptable solutions that work flawlessly across all platforms—Android, iOS, or Web—offering consistent performance.",
      },
    ],
  },

  // No FAQ-2026-09-16.json entries matched this industry (service_slug values present are
  // finance, fitness-wellness, mobile-game(-app-development-services), saas-development-services,
  // healthcare-solutions, e-commerce-application-development-services — none for e-scooter).
  faqs: [],
};
