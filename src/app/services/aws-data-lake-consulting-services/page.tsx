import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Data Lake Consulting Services for Businesses | Goognu",
  description: "Maximize data efficiency with Goognu's AWS Data Lake Consulting Services. Seamlessly store, access, and analyze your data to drive actionable business insights.",
};

export default function AwsDataLakeConsultingServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
