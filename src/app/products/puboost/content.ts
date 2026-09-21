import type { ProductDetail } from "@/components/ProductDetailTemplate";

// Rewritten from goognu.uk's Django templates/products/puboost.html.
export const product: ProductDetail = {
  slug: "puboost",
  name: "Puboost",
  tagline: "Customer Data Platform",
  headline: "Drive higher customer engagement with Puboost",
  description:
    "Track how users behave across your digital touchpoints — clicks, scrolls, visits and interests — and act on real-time data with Puboost's behavioral analytics engine.",
  icon: "users",
  gradient: "from-violet-600 to-purple-500",
  capabilities: [
    { icon: "layers", title: "Break Down Data Silos", description: "Aggregates user data from websites, apps and campaigns into one accessible view, so no team is working from fragmented insight." },
    { icon: "user-circle", title: "Build Unified User Profiles", description: "Tracks each visitor's full journey — pages viewed, interests, scroll depth, device used — into lifetime behavioral profiles." },
    { icon: "target", title: "Drive Targeted Campaigns", description: "Uses behavior-backed insight to launch precise campaigns, identify high-intent users, and recover abandoned journeys." },
    { icon: "share", title: "Enable Data Access Across Teams", description: "Gives marketing, sales and product shared access to real-time user data, aligned around what users actually do." },
    { icon: "sliders", title: "Behavior-Based Flexibility", description: "Adapts to your goals — whether that's remarketing to past visitors or spotting who added something to a wishlist without buying." },
    { icon: "search", title: "Actionable Granularity", description: "See exactly which service a user viewed, which CTA they clicked, and what device they used — not just aggregate metrics." },
    { icon: "refresh", title: "Lifetime User View", description: "A persistent, interest-based profile per visitor — retarget across campaigns and time without data resets." },
  ],
  steps: [
    { title: "Start with a Discovery Call", description: "Share your tracking goals and platform setup — we'll map the events and touchpoints that matter most." },
    { title: "Try Puboost in Action", description: "Run a guided walkthrough or pilot and see activity turn into actionable profiles in real time." },
    { title: "Launch and Optimize", description: "We help deploy Puboost across your digital assets, fine-tune event tagging, and get your team up to speed." },
  ],
  whyChoose: [
    { icon: "rocket", title: "Built to Drive Campaign Growth", description: "Scales with your brand from early growth to enterprise reach, giving clear audience insight and marketing attribution without needing complex tech stacks." },
    { icon: "link", title: "Seamless Platform Alignment", description: "Syncs across your website, CRM, ad tools and mobile apps, tracking every user action in real time so your team always works from fresh data." },
    { icon: "cpu", title: "Actionable Automation, No Developer Required", description: "Launch retargeting, email triggers, or in-app messages based on behavior — all without engineering support." },
  ],
  closing: {
    headline: "Turn Behavior Into Revenue.",
    description: "From interest tagging to retargeting, Puboost simplifies engagement tracking across every touchpoint.",
  },
};
