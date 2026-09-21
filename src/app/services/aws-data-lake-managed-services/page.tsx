import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Data Lake Managed Services | Goognu",
  description: "Goognu offers expert AWS Data Lake managed services. Optimize and manage your AWS data lakes with our customized solutions. Elevate your data strategy today!",
};

export default function AwsDataLakeManagedServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
