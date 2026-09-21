import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Discounted Billing Services – Goognu Cloud Savings",
  description: "Save more on cloud costs with Goognu's AWS Discounted Billing Services. Get transparent invoicing, usage insights, and optimized AWS billing solutions.",
};

export default function AwsDiscountedBillingServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
