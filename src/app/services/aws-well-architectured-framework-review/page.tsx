import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "AWS Well-Architected Review – Goognu Cloud Solutions",
  description: "Enhance AWS setups with Goognu's expert well-architected framework reviews. Ensure efficiency, reliability, and scalability for your cloud infrastructure.",
};

export default function AwsWellArchitecturedFrameworkReviewPage() {
  return <ServiceDetailTemplate service={content} />;
}
