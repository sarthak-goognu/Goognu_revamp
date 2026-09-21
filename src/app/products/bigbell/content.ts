import type { ProductDetail } from "@/components/ProductDetailTemplate";

// Rewritten from goognu.uk's Django templates/products/bigbell.html.
export const product: ProductDetail = {
  slug: "bigbell",
  name: "Bigbell",
  tagline: "Cloud Cost Optimization",
  headline: "Smarter infrastructure, lower server costs",
  description:
    "Bigbell helps you lower cloud bills by automating instance lifecycle tasks, improving resource allocation, and reducing manual overhead — schedule upgrades, manage server access, and monitor usage patterns with precision, driven by real-time data and AI assistance.",
  icon: "gauge",
  gradient: "from-orange-500 to-amber-400",
  capabilities: [
    { icon: "refresh", title: "Automate Resource Lifecycle", description: "Set lifecycle policies to upgrade, downgrade, or shut down instances on tag rules or off-peak hours, cutting idle compute time." },
    { icon: "server", title: "Single-Console Instance Management", description: "Centrally control authentication and schedule changes across AWS, Azure and GCP from one place." },
    { icon: "bell", title: "Real-Time Monitoring & Cost Alerts", description: "Deploy performance, URL and billing monitors instantly, with alerts via Slack, WhatsApp, Jira or email." },
    { icon: "gauge", title: "Pay for Active Usage Only", description: "Memory, disk and CPU allocation adjust automatically from live metrics, so you avoid overprovisioning." },
    { icon: "scan", title: "Instant Security Hygiene Checks", description: "Scans cloud accounts for open ports, old credentials and risky IAM setups, and suggests fixes immediately." },
  ],
  steps: [
    { title: "Set Basic Parameters", description: "Tell Bigbell which accounts, tags and thresholds matter to your infrastructure." },
    { title: "Run a System-Wide Analysis", description: "Bigbell scans usage patterns, idle resources and configuration risk across your cloud accounts." },
    { title: "Apply Suggested Optimizations", description: "Approve the recommended changes — no code rewrites, results in under two minutes." },
  ],
  whyChoose: [
    { icon: "bell", title: "Stay Informed, Avoid Downtime", description: "Receive downtime alerts via email, SMS or mobile app to quickly resolve issues and minimize disruptions." },
    { icon: "cloud", title: "Multi-Cloud from One Place", description: "Manage AWS, Azure and GCP resources without switching consoles or juggling credentials." },
    { icon: "search", title: "No-Guesswork Optimization", description: "Every recommendation is backed by real usage data, not static rules, so changes are safe to apply." },
  ],
  closing: {
    headline: "Optimize in Minutes, Not Months.",
    description: "Set basic parameters, run a system-wide analysis, apply suggested optimizations — no code rewrites required.",
  },
};
