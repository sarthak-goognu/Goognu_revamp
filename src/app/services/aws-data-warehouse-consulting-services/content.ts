import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-data-warehouse-consulting-services
export const content: ServiceDetail = {
  slug: "aws-data-warehouse-consulting-services",
  category: "AWS Services",
  name: "AWS Data Warehouse Consulting Services",
  headline: "Innovative data solutions for your business growth — strategy, architecture and design, integration, governance, and security, end to end.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "A well-designed and integrated data warehouse ensures secure and governed access to data throughout your organization, reducing the need for manual involvement. Choosing Goognu's AWS Data Warehouse Consulting Services can cut deployment, administration, and support effort by up to 60%.",
    "We help you overcome the challenges of traditional on-premise data warehousing by moving data management to the cloud — making storage more flexible and scalable. Our team handles everything from designing and setting up to deploying and optimizing your cloud data warehouse.",
    "Our approach spans migration and modernization, data analytics enablement, cost optimization, data catalog and metadata management, training and knowledge transfer, user adoption and change management, and tracking ROI and business value — so the investment keeps paying off.",
  ],
  majorServices: [
    { icon: "sliders", title: "Strategy and Design" },
    { icon: "cpu", title: "Development and Implementation" },
    { icon: "upload", title: "Migration and Performance Optimization" },
    { icon: "phone-call", title: "Maintenance and Support" },
  ],
  features: [
    { icon: "server", title: "Data Warehouse as a Service (DWaaS)", description: "Outsource your data warehouse needs to us — we handle development, deployment, customization, and management." },
    { icon: "users", title: "Data Warehouse Consulting", description: "Guidance on choosing the right technology stack, system sizing, and design, alongside an assessment of your current setup." },
    { icon: "cpu", title: "Data Warehouse Development", description: "Design and build new data warehouses tailored to your business goals, extracting, cleansing, and transforming data." },
    { icon: "layers", title: "Data Warehouse Implementation", description: "The entire process of designing, developing, and integrating your data warehouse — on-premise or cloud-based." },
    { icon: "refresh", title: "Data Warehouse Modernization", description: "Updating and optimizing existing data warehouses to enhance flexibility, scalability, and agility." },
    { icon: "upload", title: "Data Warehouse Migration", description: "Seamless migration to the platform of your choice, whether from on-premise to the cloud or vice versa." },
  ],
  closing: {
    headline: "Get more from your data warehouse",
    description: "From strategy to migration, our team helps you build a warehouse that scales with your business.",
  },
};
