import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-cloud-migration-services
export const content: ServiceDetail = {
  slug: "aws-cloud-migration-services",
  category: "AWS Services",
  name: "AWS Cloud Migration Services",
  headline: "Streamline migration to AWS for scalable, efficient cloud infrastructure — moving your data, applications, and workloads smoothly and securely.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "AWS Cloud Migration Services help businesses move their data, applications, and workloads from on-premise systems to the cloud smoothly and securely — allowing organizations to scale resources up or down on demand, improve performance, and reduce maintenance effort.",
    "The process starts with a holistic assessment — analyzing existing frameworks and workloads to define issues and build a migration roadmap tailored to the specific needs of the business, from legacy application migration to modernizing applications and cloud architecture.",
    "From initial assessment to planning, implementation, and management, our team explores the complexities of migration to deliver reliable solutions — while keeping a close eye on cloud usage so cost stays under control after the move.",
  ],
  majorServices: [
    { icon: "search", title: "Assessment and Planning Services" },
    { icon: "upload", title: "Data Migration Services" },
    { icon: "layers", title: "Infrastructure Modernization" },
    { icon: "sliders", title: "Enhanced Optimization & Management" },
  ],
  features: [
    { icon: "rocket", title: "Uplifted Innovation", description: "AWS supports a range of constructive business practices that contribute to expansion and improvement, fostering innovation with flexible infrastructure." },
    { icon: "share", title: "Worldwide Recognition & Reach", description: "Reach a wider audience through various channels while maximizing the return on your infrastructure investment." },
    { icon: "refresh", title: "Efficiency in Operations", description: "Seamless interaction across a range of operational duties helps streamline administrative overhead." },
    { icon: "scan", title: "Insights & Data Analytics", description: "A portfolio of well-designed analytics tools enables you to get valuable insight from your data as you migrate." },
  ],
  closing: {
    headline: "Move to AWS without the risk",
    description: "Let our migration specialists plan and execute your move to AWS with minimal disruption and maximum performance.",
  },
};
