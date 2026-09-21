import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: "Aws Data Warehouse Consulting Services | Goognu",
  description: "Goognu offers expert AWS Data Warehouse consulting services. Optimize your data strategy with our tailored solutions. Enhance your data management today!",
};

export default function AwsDataWarehouseConsultingServicesPage() {
  return <ServiceDetailTemplate service={content} />;
}
