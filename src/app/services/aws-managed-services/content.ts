import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-managed-services
export const content: ServiceDetail = {
  slug: "aws-managed-services",
  category: "AWS Services",
  name: "AWS Managed Services",
  headline: "Optimize cloud ops, maximize business success — end-to-end management of your AWS resources so you can focus on your core business.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "AWS Managed Services is a collection of services offered by Amazon Web Services to support users who run their infrastructure and applications on the AWS platform, simplifying resource management, reducing operational overhead, and providing continuous support.",
    "Goognu is a trusted AWS managed service provider with a team of AWS-certified experts ready to design, deploy, and manage your AWS infrastructure. From cloud migration to integration, we offer complete support — even after successful deployment — including managed database solutions like Amazon RDS and DynamoDB, covering administration, optimization, backups, and security.",
    "Our team handles daily operational tasks such as provisioning, monitoring, patching, and backups, while our experts analyze and optimize performance — identifying bottlenecks and implementing auto-scaling, load balancing, and caching to improve system performance and user experience.",
  ],
  majorServices: [
    { icon: "cpu", title: "Infrastructure Automation & Operations" },
    { icon: "lock", title: "Security & Compliance" },
    { icon: "scan", title: "Monitoring" },
    { icon: "sliders", title: "Cost Optimization" },
  ],
  features: [
    { icon: "gauge", title: "Scalability", description: "Easily handle periods of high demand or large workloads without purchasing capacity you don't routinely need." },
    { icon: "refresh", title: "Automation", description: "Automatic software updates, deployment, and configuration of cloud infrastructure, kept consistent release after release." },
    { icon: "scan", title: "Monitoring", description: "We identify and fix potential problems before they occur, tracking key performance issues like system uptime." },
    { icon: "phone-call", title: "Support", description: "24/7 support so customers can get help whenever they need it, including installing and configuring services." },
    { icon: "shield-check", title: "Security", description: "The latest security technologies and practices are used to protect your data and applications at every layer." },
    { icon: "sliders", title: "Cost Optimization", description: "We help identify ways to reduce cloud costs, including selecting the right cloud infrastructure for your workloads." },
  ],
  closing: {
    headline: "Let us manage your AWS environment",
    description: "Round-the-clock AWS management — provisioning, monitoring, patching, and backups — so your team can stay focused on the business.",
  },
};
