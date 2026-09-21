import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-well-architectured-framework-review
export const content: ServiceDetail = {
  slug: "aws-well-architectured-framework-review",
  category: "AWS Services",
  name: "AWS Well-Architectured Framework Review",
  headline: "Optimize AWS architecture for efficiency, reliability, and scalability — a comprehensive assessment against AWS's own best-practice pillars.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "The AWS Well-Architected Framework Review is a set of best practices and guidelines developed by AWS to help customers build secure, high-performing, resilient, and efficient infrastructure for their applications. Our review is a thorough examination of your architecture's conception, execution, and functioning.",
    "We assess against the framework's core pillars — operational excellence, security, reliability, performance efficiency, and cost optimization. On security we look at identity and access management, data protection, network security, and compliance; on reliability we examine fault tolerance, disaster recovery, and scalability.",
    "The result is a set of actionable recommendations aligned with your organization's objectives — helping you improve security posture, cut cloud costs, strengthen resilience, and stay current with AWS best practices and the newest cloud computing trends.",
  ],
  majorServices: [
    { icon: "refresh", title: "Automation" },
    { icon: "bell", title: "Monitoring and Alerting" },
    { icon: "shield-check", title: "Incident Management" },
    { icon: "target", title: "Overall Improvement" },
  ],
  features: [
    { icon: "target", title: "Operational Excellence", description: "An important pillar that focuses on optimizing operations to deliver business value and continuously improve procedures." },
    { icon: "lock", title: "Security Enhanced", description: "Robust security controls and measures to protect data and resources across every layer of your architecture." },
    { icon: "shield-check", title: "Reliability", description: "Assurance that your architecture can withstand and recover from failure, focusing on redundancy and recovery mechanisms." },
    { icon: "gauge", title: "Performance Efficiency", description: "Optimizing resource utilization and delivering responsive applications through smart resource allocation." },
    { icon: "sliders", title: "Cost Optimization", description: "Minimizing expenses through cost-aware design principles, usage monitoring, and ongoing resource optimization." },
  ],
  closing: {
    headline: "See how well-architected your AWS setup really is",
    description: "Book a Well-Architected Framework Review and get a clear, prioritized roadmap for improvement.",
  },
};
