import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Managed Services by Goognu – 24/7 Cloud Support Experts",
  description: "Unlock the power of AWS Managed Services with Goognu. Streamline your cloud operations, optimize efficiency, and achieve business success.",
};

export default function AwsManagedServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
