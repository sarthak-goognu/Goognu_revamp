import type { ProductDetail } from "@/components/ProductDetailTemplate";

// Rewritten from goognu.uk's Django templates/products/filefly.html.
export const product: ProductDetail = {
  slug: "filefly",
  name: "Filefly",
  tagline: "Secure File Sharing",
  headline: "Smart file storage and sharing built for fast sync, secure exchange, and total access control",
  description:
    "Filefly simplifies how teams exchange data without relying on third-party tools or downloads. Share files and folders directly via the browser, sync local systems, and manage everything from one place — whether you're working with internal teams or external clients.",
  icon: "file-text",
  gradient: "from-emerald-600 to-teal-500",
  capabilities: [
    { icon: "link", title: "Instant Access, No Installs", description: "Share files via links and open them directly in any browser — no forced downloads or software dependencies." },
    { icon: "shield-check", title: "Trusted Security Framework", description: "Built-in protection detects attacks, enforces password rules, and supports QR-code logins." },
    { icon: "lock", title: "Custom Access Control", description: "Choose exactly who can access each file or folder — teams, groups, or entire domains, permission by permission." },
    { icon: "refresh", title: "Desktop Syncing Included", description: "Sync desktop folders to Filefly so everything stays current without manual uploads." },
    { icon: "message", title: "Message-Based Exchange", description: "Send and receive documents like an inbox — built for ongoing file conversations with clients or partners." },
    { icon: "clock", title: "Retention & Compliance", description: "Set retention periods on files to match organizational or regulatory policy." },
    { icon: "share", title: "Defined Collaboration", description: "Share files internally or externally with complete permission-based access, even across domains." },
    { icon: "gauge", title: "Lightweight & Cost-Efficient", description: "Built for small teams and regular document sharing — no licenses, no extra overhead." },
  ],
  steps: [
    { title: "Share via Custom Links", description: "Generate shareable links with defined permissions for individuals, teams, or entire organizations." },
    { title: "Assign Folder-Level Access", description: "Set who can view, edit, or manage each file or folder, down to the domain or team." },
    { title: "Automate Retention", description: "Apply retention policies automatically so files are kept — or cleared — in line with compliance needs." },
  ],
  whyChoose: [
    { icon: "clock", title: "Smart File Versioning", description: "Track changes across documents to prevent data loss and improve collaboration history." },
    { icon: "link", title: "Custom Link Sharing", description: "Shareable links with defined permissions, for anyone from a single teammate to a whole organization." },
    { icon: "refresh", title: "Desktop Sync + Browser Access", description: "Sync from your desktop, open directly in a browser — no downloads, no extra software." },
    { icon: "shield-check", title: "Security Built-In", description: "QR-code login, password enforcement and attack detection protect content at every stage." },
  ],
  closing: {
    headline: "Share Smarter. Control Everything.",
    description: "No extra tools, no license restrictions — just focused control and speed for how your team shares files.",
  },
};
