import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-data-lake-consulting-services
export const content: ServiceDetail = {
  slug: "aws-data-lake-consulting-services",
  category: "AWS Services",
  name: "AWS Data Lake Consulting Services",
  headline: "Optimize data with Goognu's AWS Data Lake Consulting — Data Strategy, Data Governance, Big Data Engineering, Business Intelligence, and Data Science.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "The main challenge with data is its enormous volume, making it hard to analyze quickly — valuable data streams, like IoT and social media data, are lost if not captured immediately. A data lake is essential for many organizations' digital transformation, letting them store and process large amounts of raw data and turn it into useful insights.",
    "We help you collect and store essential information in a data lake, enabling your analysts and research teams to uncover trends, anomalies, and actionable insights across social media, streaming, and IoT data. Using the ELT (extract, load, transform) approach, we structure data at the time of use for quick, easy access.",
    "Our approach covers discovery and requirement gathering, architectural design, data ingestion and integration, data management and storage, processing and analytics, governance and security, and thorough testing and quality control — a methodical, customized path to a production-ready data lake.",
  ],
  majorServices: [
    { icon: "server", title: "Centralise Your Enterprise Data" },
    { icon: "target", title: "Convert Insights into Actions" },
    { icon: "layers", title: "Prepare Data for Various Applications" },
    { icon: "sliders", title: "Enhance Data Management" },
  ],
  features: [
    { icon: "server", title: "Foundation for Effective Data Management", description: "A strong data management system built by collecting, organizing, storing, and securing your data end to end." },
    { icon: "scan", title: "Enhanced Business Intelligence Tools", description: "Tools to gather, analyze, and visualize data — helping you detect trends, patterns, and relationships for better decisions." },
    { icon: "cpu", title: "Advanced Data Visualization & AI/ML Services", description: "AI and ML solutions that enhance operations and provide a competitive edge, including smart assistants and chatbots." },
    { icon: "layers", title: "Comprehensive Delta Lake Solutions", description: "Support for both batch and streaming operations, unifying data types for transactional, analytical, and AI use cases." },
    { icon: "lock", title: "Robust Data Governance Framework", description: "Classify and track data with scans that reveal origins, storage locations, and access controls." },
    { icon: "link", title: "Seamless Databricks & Power BI Integration", description: "Connect Databricks clusters and SQL Warehouses with Power BI to enable rich, data-driven dashboards." },
  ],
  closing: {
    headline: "Turn raw data into a real asset",
    description: "Let our data engineers design and build a data lake that fits your analytics and governance needs.",
  },
};
