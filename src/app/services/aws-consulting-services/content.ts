import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-consulting-services
export const content: ServiceDetail = {
  slug: "aws-consulting-services",
  category: "AWS Services",
  name: "AWS Consulting Services",
  headline: "Get a secure, safe, and fast adaptation of AWS Cloud — from architecture design and migration planning to performance tuning and security configuration.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "We start by understanding your business goals, existing IT setup, and specific challenges. Then we craft a tailored AWS strategy — from architecture design and migration planning to performance tuning and security configurations — so your cloud setup doesn't just work, it helps you move faster and operate more efficiently.",
    "Key areas we cover: infrastructure design and provisioning, application migration to AWS, security configuration and identity management, backup and disaster recovery setup, and budgeting and cost control. We don't just offer advice — we become your technology partner, from proof of concept to deployment and monitoring.",
    "Alongside consulting, our AWS Managed Services team takes care of ongoing operations — updates, backups, and daily checks — so your cloud environment stays secure, stable, and aligned with your business needs.",
  ],
  majorServices: [
    { icon: "server", title: "Managed Services" },
    { icon: "upload", title: "Cloud Migration" },
    { icon: "layers", title: "Architecture Design" },
    { icon: "webhook", title: "DevOps Automation" },
  ],
  features: [
    { icon: "gauge", title: "Scalability", description: "Handle periods of high demand or large workloads without over-purchasing capacity you don't need day to day." },
    { icon: "refresh", title: "Automation", description: "Automatic software updates, deployment, and configuration of cloud infrastructure so releases stay fast and consistent." },
    { icon: "scan", title: "Monitoring", description: "We identify and fix potential problems before they occur, keeping a close eye on system uptime and performance." },
    { icon: "phone-call", title: "Support", description: "24/7 support so you can get help installing, configuring, or troubleshooting whenever you need it." },
    { icon: "shield-check", title: "Security", description: "Security is our first priority — we use the latest practices and technologies to protect your data and applications." },
    { icon: "sliders", title: "Cost Optimization", description: "We help identify ways to reduce cloud costs, including selecting the right infrastructure for your workloads." },
  ],
  closing: {
    headline: "Ready to build on AWS the right way?",
    description: "Talk to our AWS-certified consultants about architecture, migration, and cost strategy tailored to your business.",
  },
};
