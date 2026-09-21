import type { IndustryPageContent } from "@/lib/industry-content-types";

// Sourced verbatim from the real Django admin export:
// industries-data/EventApp-2026-09-16.json (goognu.com admin CMS).
// Note: this model has no about/why-choose fields populated, so the About
// panel section is intentionally omitted rather than fabricated.
export const content: IndustryPageContent = {
  slug: "event-app",
  title: "Event Apps Development",
  description:
    "We design event apps that simplify execution and enhance engagement. From virtual expos to in-person conferences, we help brands create intuitive event platforms that support real-time communication, attendee control, and data-backed decision-making.",
  bannerImage: "industry/event/event_banner_image.png",

  capabilities: {
    title: "We incorporate features that improve every interaction",
    description:
      "Our event apps are designed with smart features that help organizers stay prepared and users stay connected. Whether it's a one-day meetup or a multi-day summit, everything works in sync.",
    items: [
      { title: "Event creation" },
      { title: "Event search" },
      { title: "Event calendar" },
      { title: "Ticket booking" },
      { title: "Photo sharing" },
      { title: "Live session updates" },
    ],
  },

  services: {
    title: "Offering services that make events successful",
    description:
      "We help brands manage different types of events through scalable digital tools. Our apps support consistent user experience across formats—whether virtual, hybrid, or physical—with full control and real-time response.",
    items: [
      {
        title: "Corporate Events",
        description:
          "From boardroom meetings to annual gatherings, our apps help you manage agendas, coordinate with speakers, and provide attendees with real-time updates. With smooth registration, live Q&A, and session tracking, you're in full control throughout the event.",
        image: "industry/event/offering_services_that_makes_events_succesful.png",
      },
      {
        title: "Product Launches",
        description:
          "We design event apps that support impactful product unveilings—managing live streaming, real-time product showcases, and interactive feedback. Our tools make it easy to share announcements, collect audience reactions, and ensure brand visibility across all touchpoints.",
      },
      {
        title: "Trade Shows & Exhibitions",
        description:
          "Whether it's booth mapping or visitor tracking, our event apps help exhibitors and organizers stay organized. Attendees can navigate floor plans, set appointments, and receive personalized schedules, while you access live data to measure footfall and engagement.",
      },
      {
        title: "Conferences & Summits",
        description:
          "Our apps simplify complex multi-day events by managing session tracks, speaker bios, attendee networking, and real-time notifications. With digital agendas and built-in feedback forms, you can enhance engagement while monitoring key touchpoints throughout the conference.",
      },
      {
        title: "Webinars & Virtual Events",
        description:
          "From sign-ups to post-event analytics, we power virtual sessions with tools for live chat, polling, file sharing, and more. Our app ensures a consistent user experience across devices while offering real-time moderation and feedback tracking.",
      },
    ],
  },

  technologies: {
    title: "Making your event apps techy",
    description:
      "We combine modern technologies with event-ready features to build apps that go beyond schedule listings. From payment gateways to real-time updates and geo-positioning—we bring depth, control, and connectivity into every build.",
    items: [
      {
        title: "Blockchain",
        description: "We integrate wallet-ready payment modules to simplify bookings and transactions within the app.",
      },
      {
        title: "Geo-positioning",
        description: "Geo-tagging enables real-time tracking of venue points, exhibit locations, and parking access.",
      },
      {
        title: "Biometric Security",
        description: "In-app authentication supports secure logins through face/fingerprint ID and encrypted devices.",
      },
      {
        title: "Cross-platform Compatibility",
        description: "Cross-platform support ensures app performance across Android, iOS, and wearable devices.",
      },
    ],
  },

  // No FAQ-2026-09-16.json entries matched this industry (service_slug values present are
  // finance, fitness-wellness, mobile-game(-app-development-services), saas-development-services,
  // healthcare-solutions, e-commerce-application-development-services — none for event-app).
  faqs: [],
};
