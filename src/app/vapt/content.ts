// VAPT (Vulnerability Assessment & Penetration Testing) page content,
// rewritten from goognu.uk's Django templates/vapt.html into the new
// design's structure. Facts and figures (stats, services, methodology,
// FAQs) are carried over as-is from the live page — only the presentation
// changes. Colocated with the page itself since nothing else uses it.

export const VAPT_STATS = [
  { number: "100+", label: "Experts in the Team" },
  { number: "12+", label: "Years of Experience" },
  { number: "100+", label: "Active Engagements" },
  { number: "500+", label: "Happy Customers" },
];

export const VAPT_OVERVIEW = [
  {
    title: "Why Does VAPT Matter?",
    description:
      "VAPT helps you stay compliant with important standards like GDPR, ISO 27001, and PCI DSS. It's not just about ticking boxes — it's about spotting risks early, improving your cyber defences, and making sure your clients, partners, and teams can trust your digital environment.",
  },
  {
    title: "Secure Your Digital Estate Before It's Compromised",
    description:
      "Goognu UK delivers tailored VAPT services designed to uncover potential risks before they're exploited. Whether you're operating cloud systems, enterprise apps, or internal networks, we help you build stronger cyber resilience through targeted security assessments and controlled testing.",
  },
];

export type VaptIconKey =
  | "globe" | "smartphone" | "wifi" | "server" | "cloud" | "router" | "shield-check" | "cpu"
  | "clipboard" | "search" | "shield-alert" | "network" | "crosshair" | "trending-up";

export const VAPT_SERVICES: { icon: VaptIconKey; label: string; description: string }[] = [
  {
    icon: "globe",
    label: "Web Application Security Evaluation",
    description: "Test web applications for vulnerabilities in authentication, session handling, input validation, and other common attack vectors.",
  },
  {
    icon: "smartphone",
    label: "Mobile Platform Vulnerability Testing",
    description: "Assess iOS and Android applications for insecure storage, weak encryption, API flaws, and platform-specific security risks.",
  },
  {
    icon: "wifi",
    label: "Internal and External Network Scanning",
    description: "Scan internal and external network perimeters to uncover exposed services, open ports, and exploitable misconfigurations.",
  },
  {
    icon: "server",
    label: "Server Configuration and Access Risk Checks",
    description: "Review server hardening, access controls, and configuration settings to close off unnecessary attack surfaces.",
  },
  {
    icon: "cloud",
    label: "Cloud Infrastructure Security Review",
    description: "Assess cloud environments for misconfigurations, excessive permissions, and insecure storage or network settings.",
  },
  {
    icon: "router",
    label: "Router & Switch Inspection",
    description: "Inspect routers and switches for outdated firmware, weak credentials, and insecure network segmentation.",
  },
  {
    icon: "shield-check",
    label: "Firewall, IDS, IPS Validation",
    description: "Validate firewall rules, intrusion detection, and prevention systems to confirm they catch and block real threats.",
  },
  {
    icon: "cpu",
    label: "IoT Hardware & Firmware Testing",
    description: "Examine IoT devices and firmware for insecure interfaces, weak authentication, and exploitable hardware-level flaws.",
  },
];

export const VAPT_UK_NOTE = {
  title: "Why VAPT Matters for UK Organisations",
  description:
    "VAPT goes beyond surface checks — it provides a deep, evidence-based view into your systems' security posture. In today's regulatory environment shaped by GDPR, Cyber Essentials, and ISO 27001, businesses must be prepared to show diligence in data protection. Goognu's expert-led VAPT helps you avoid disruptions, ensure compliance, and protect customer confidence.",
};

export const VAPT_METHODOLOGY_INTRO =
  "We take a holistic approach to conducting VAPT audits. You get an in-depth analysis of your current security situation, and clear recommendations to reduce the risk of every vulnerability we identify.";

export const VAPT_METHODOLOGY: { icon: VaptIconKey; title: string; description: string }[] = [
  { icon: "clipboard", title: "Initial Scoping", description: "We begin by identifying the systems, applications, and devices that require testing — aligning our effort with your business priorities and internal risk appetite." },
  { icon: "search", title: "Recon & Asset Discovery", description: "We perform background intelligence gathering using industry-standard tools, open-source resources, and passive scans to learn more about your exposure." },
  { icon: "shield-alert", title: "Security Gap Identification", description: "Our specialists use automated scans and manual inspections to find flaws in your configurations, code, and access controls." },
  { icon: "network", title: "Enumeration and Mapping", description: "We explore all reachable services and systems to understand the structure of your IT environment and what could be exploited." },
  { icon: "crosshair", title: "Penetration Attempts", description: "We simulate real-world attacks using ethical techniques to assess whether vulnerabilities can be actively used to gain access." },
  { icon: "trending-up", title: "Access Escalation Testing", description: "If a breach is possible, we test how far an attacker could go — whether they could reach administrative control or move laterally." },
];

export const VAPT_WHY_CHOOSE = {
  title: "Why Choose Goognu for VAPT?",
  description:
    "With a proven track record of helping UK firms reduce risk exposure, Goognu brings a clear, methodical, and business-aligned approach to cybersecurity testing. Our team blends technical rigour with real-world thinking, so you receive practical insights, not just paperwork — from compliance audits to critical system testing.",
};

export const VAPT_FAQS = [
  { question: "What benefits does VAPT provide?", answer: "VAPT helps detect flaws in systems and applications early — before they can be used to compromise data or operations." },
  { question: "Is VAPT required for compliance in the UK?", answer: "Yes. Standards like ISO 27001, Cyber Essentials, and GDPR expect proactive measures like VAPT for risk mitigation." },
  { question: "When should we schedule a VAPT?", answer: "At least once a year, and immediately after launching new software, deploying infrastructure changes, or detecting suspicious activity." },
  { question: "Can tools do the job without testers?", answer: "Not entirely. Tools flag common issues, but human testers identify logic flaws, business risks, and attack chains that tools often overlook." },
];
