import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-discounted-billing-services
export const content: ServiceDetail = {
  slug: "aws-discounted-billing-services",
  category: "AWS Services",
  name: "AWS Discounted Billing Services",
  headline: "Save on AWS costs with discounted billing options — flexible pricing models and long-term savings plans that keep your budget under control.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "AWS Discounted Billing Services help you take advantage of flexible pricing models and long-term savings options — reserved instances, savings plans, and cost explorers — that help your organization make the most of its cloud usage.",
    "Reserved Instances offer substantial discounts over on-demand pricing in exchange for reserving compute power for a predetermined term, usually one or three years, giving businesses predictable pricing and workload stability. Savings Plans offer discounts based on usage levels while keeping the flexibility to adapt to changing workload demands.",
    "From tagging resources for clear cost tracking to adjusting instance sizes and automating workloads, our discounted billing strategies let your teams focus on growth while keeping expenses in check — resource optimization, scalability, and strategic partnership all built in.",
  ],
  majorServices: [
    { icon: "search", title: "Exploring Workload Patterns" },
    { icon: "target", title: "Choosing the Right Reserved Instances" },
    { icon: "sliders", title: "Optimizing Savings Plans" },
    { icon: "scan", title: "Continuous Usage Monitoring" },
  ],
  features: [
    { icon: "clock", title: "AWS Reserved Instances (RIs)", description: "Reserve capacity in AWS for a specified term — typically one or three years — for meaningful savings over on-demand pricing." },
    { icon: "gauge", title: "AWS Savings Plans", description: "Flexible cost-saving options for customers with predictable usage patterns, offering discounts on AWS usage." },
    { icon: "cpu", title: "Spot Instances", description: "Explore options for significant savings compared to on-demand pricing for flexible, interruption-tolerant workloads." },
    { icon: "search", title: "Cost Optimization Audits", description: "A comprehensive analysis of your organization's usage and spending across storage, compute, and networking." },
    { icon: "layers", title: "Capacity Planning", description: "Effective planning to ensure the utmost performance while keeping cost-efficiency at the center of every decision." },
  ],
  closing: {
    headline: "Start saving on your AWS bill",
    description: "Get a free billing review and see how much your organization could save with the right pricing model.",
  },
};
