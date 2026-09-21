import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Cloud Migration Services – Goognu Cloud Experts",
  description: "Accelerate your move to the cloud with Goognu's AWS Cloud Migration Services. Enjoy a smooth, secure, and cost-effective migration tailored to your business.",
};

export default function AwsCloudMigrationServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
