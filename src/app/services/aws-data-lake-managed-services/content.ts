import type { ServiceDetail } from "@/components/ServiceDetailTemplate";

// Real content condensed from https://goognu.com/services/aws-data-lake-managed-services
export const content: ServiceDetail = {
  slug: "aws-data-lake-managed-services",
  category: "AWS Services",
  name: "AWS Data Lake Managed Services",
  headline: "Streamline your data journey with AWS Data Lake expertise — scalable, flexible, and cost-effective storage for data from any source.",
  accent: "from-orange-500 to-amber-400",
  overview: [
    "We make managing large amounts of data easy with AWS Data Lake Managed Services. You can store data from databases, logs, and apps without needing strict formats — using Amazon S3 for scalable, flexible, and cost-effective storage.",
    "Our services include AWS Glue Data Catalog for smart metadata management, alongside tools like Amazon EMR and Amazon Athena for processing and analyzing data — so you can quickly gain insights, whether it's running SQL queries with Athena or analyzing data with Amazon Redshift.",
    "As a managed service provider, we handle metadata management, arranging and labeling your data for easy discovery, so you can use sophisticated queries or machine learning models to extract insight and build dynamic dashboards and applications for visualization.",
  ],
  majorServices: [
    { icon: "server", title: "Storage Solutions" },
    { icon: "cpu", title: "Data Processing Tools" },
    { icon: "file-text", title: "Metadata Management" },
    { icon: "scan", title: "Analytics Services" },
  ],
  features: [
    { icon: "server", title: "All-Inclusive Storage Options", description: "Reliable, scalable storage on Amazon S3 for raw logs, sensor data, multimedia files, and everything in between." },
    { icon: "cpu", title: "Advanced Data Processing Tools", description: "Powerful processing tools like SQL, Spark, and PyTorch that make transformation and analysis seamless." },
    { icon: "file-text", title: "Streamlined Metadata Management", description: "Simplified organization and discovery of your data, so finding and understanding it stays fast and reliable." },
    { icon: "scan", title: "Reliable Analytics Services", description: "Advanced analytics through tools like Athena and Redshift, supporting complex queries at scale." },
    { icon: "share", title: "Efficient Data Visualization", description: "Engaging dashboards and visualizations that turn raw insight into something your team can act on." },
  ],
  closing: {
    headline: "Let us manage your data lake",
    description: "Storage, processing, metadata, and analytics — fully managed so your team can focus on the insights.",
  },
};
