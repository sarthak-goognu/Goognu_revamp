import type { Metadata } from "next";
import CyberSecurityTemplate from "@/components/CyberSecurityTemplate";
import { webAppSecurityContent } from "./content";

export const metadata: Metadata = {
  title: "Web Application Security Services | Goognu",
  description:
    "Identify, assess, and address security weaknesses across your web applications with Goognu's Web Application Security services — automated testing combined with manual analysis.",
};

export default function WebApplicationSecurityPage() {
  return <CyberSecurityTemplate data={webAppSecurityContent} />;
}
