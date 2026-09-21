// Placeholder/site content for the static-first rebuild.
// Every string here is meant to be swapped for real, admin-managed content
// once the CMS/API phase begins — nothing in this file is wired to a database.

import type { IconKey } from "@/lib/icons";

export type NavLink = { label: string; href: string };

// Kept for anything still referencing the simple 3-link nav.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// Real top-nav structure, taken from the Django site's base.html so the new
// header matches it item-for-item. `href` is omitted for anything that
// doesn't have a built Next.js page yet — those render as "#" placeholders,
// same as the Django template does for its own not-yet-real destinations.
export type NavChild = { label: string; href?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "Infrastructure Managed Services" },
      { label: "AWS Services" },
      { label: "Microsoft Azure Services" },
      { label: "Web & App Development" },
      { label: "GCP Services" },
      { label: "DevOps Services" },
      { label: "GitOps Services" },
      { label: "MLOps Services" },
    ],
  },
  { label: "Industries" },
  {
    label: "Products",
    children: [
      { label: "Stremify" },
      { label: "Puboost" },
      { label: "Filefly" },
      { label: "Bigbell" },
    ],
  },
  { label: "Vapt" },
  {
    label: "Resources",
    children: [{ label: "Blogs" }, { label: "Case Studies" }],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Team" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export type Region = { code: string; flag: string; label: string; href: string };

// Goognu's real per-country sites, straight from the region switcher in the
// live header. External links on purpose — these are separate deployments.
export const REGIONS: Region[] = [
  { code: "uk", flag: "🇬🇧", label: "United Kingdom", href: "/" },
  { code: "in", flag: "🇮🇳", label: "India", href: "https://goognu.com/" },
  { code: "ca", flag: "🇨🇦", label: "Canada", href: "https://goognu.ca/" },
  { code: "nz", flag: "🇳🇿", label: "New Zealand", href: "https://goognu.nz/" },
  { code: "us", flag: "🇺🇸", label: "USA", href: "https://goognu.us/" },
  { code: "ae", flag: "🇦🇪", label: "UAE", href: "https://goognu.ae/" },
  { code: "sg", flag: "🇸🇬", label: "Singapore", href: "https://goognu.sg/" },
  { code: "au", flag: "🇦🇺", label: "Australia", href: "https://goognu.au/" },
];

export const COMPANY = {
  name: "Goognu",
  phone: "+44 07438770226",
  email: "hello@goognu.uk",
  location: "United Kingdom",
  website: "goognu.uk",
  // Real boilerplate used across Goognu's country sites (goognu.com et al.).
  tagline:
    "We are the one-stop source for all DevOps and Cloud needs for any organisation. We provide cost-effective, highly available, secure and scalable solutions on services and subscription models using Cloud and DevOps.",
};

// Sub-service links per category, straight from the Django site's Services
// mega-menu (base.html). Hrefs are omitted (rendering as "#") for anything
// that doesn't have a built Next.js page yet, same convention as NavChild.
export type ServiceSubLink = { label: string; href?: string };

export type ServiceCategory = {
  name: string;
  description: string;
  icon: "cloud" | "workflow" | "brain-circuit" | "code" | "git-branch" | "server";
  links: ServiceSubLink[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Infrastructure Managed Services",
    description: "Round-the-clock management of your servers and IT infrastructure, so nothing falls through the cracks.",
    icon: "server",
    links: [
      { label: "Managed Infrastructure Services" },
      { label: "Managed IT Infrastructure Services" },
    ],
  },
  {
    name: "AWS Services",
    description: "Secure and scalable cloud solutions with Amazon Web Services, tailored to your business.",
    icon: "cloud",
    links: [
      { label: "AWS Partnership", href: "/aws" },
      { label: "AWS Consulting Services", href: "/services/aws-consulting-services" },
      { label: "AWS Managed Services", href: "/services/aws-managed-services" },
      { label: "AWS Cloud Migration Services", href: "/services/aws-cloud-migration-services" },
      { label: "AWS Discounted Billing Services", href: "/services/aws-discounted-billing-services" },
      { label: "AWS Well-Architectured Framework Review", href: "/services/aws-well-architectured-framework-review" },
      { label: "AWS Data Lake Consulting Services", href: "/services/aws-data-lake-consulting-services" },
      { label: "AWS Data Warehouse Consulting Services", href: "/services/aws-data-warehouse-consulting-services" },
      { label: "AWS Data Lake Managed Services", href: "/services/aws-data-lake-managed-services" },
    ],
  },
  {
    name: "Microsoft Azure Services",
    description: "Build secure, flexible, and scalable solutions on Microsoft Azure.",
    icon: "cloud",
    links: [
      { label: "Microsoft Azure Consulting Services" },
      { label: "Microsoft Azure Managed Services" },
      { label: "Azure Data Lake Consulting Services" },
      { label: "Azure Data Warehouse Consulting Services" },
      { label: "Azure Data Lake Managed Services" },
      { label: "Azure Data Warehouse Managed Services" },
    ],
  },
  {
    name: "Web & App Development",
    description: "Custom web and app builds across PHP, Django, Laravel, Node.js and more.",
    icon: "code",
    links: [
      { label: "PHP Application Development Services" },
      { label: "AI Development Services" },
      { label: "Django Development Services" },
      { label: "CakePHP Development Services" },
      { label: "Zend Web Development Services" },
      { label: "Laravel Web Development Services" },
      { label: "Moodle Development Services" },
      { label: "Node JS Development Services" },
    ],
  },
  {
    name: "GCP Services",
    description: "Fast, reliable solutions on Google Cloud Platform.",
    icon: "cloud",
    links: [
      { label: "GCP Consulting Services" },
      { label: "GCP Managed Services" },
      { label: "GCP Data Lake Consulting Services" },
      { label: "GCP Data Warehouse Consulting Services" },
      { label: "GCP Data Lake Managed Services" },
      { label: "GCP Data Warehouse Managed Services" },
    ],
  },
  {
    name: "DevOps Services",
    description: "Speed up software delivery with automation and streamlined workflows.",
    icon: "workflow",
    links: [
      { label: "DevOps Consulting Services" },
      { label: "DevOps Managed Services" },
      { label: "DevSecOps Consulting Services" },
    ],
  },
  {
    name: "GitOps Services",
    description: "Git-driven deployment pipelines for consistent, auditable infrastructure changes.",
    icon: "git-branch",
    links: [
      { label: "GitOps Consulting Services" },
      { label: "GitOps Managed Services" },
    ],
  },
  {
    name: "MLOps Services",
    description: "Operationalize machine learning models with reliable, repeatable pipelines.",
    icon: "brain-circuit",
    links: [
      { label: "MLOps Consulting Services" },
      { label: "MLOps Managed Services" },
    ],
  },
];

// Cyber Security mega-menu: 3 categories (Security Assessment, Compliance,
// SOC Services), each with its own sub-services — same left-column/flyout
// UX as SERVICE_CATEGORIES above. Replaces the old standalone "VAPT" nav
// link; "VAPT Network & Infrastructure" below links to the existing /vapt
// page, everything else is a static label for now (no page built yet).
export type CyberSecurityCategory = {
  name: string;
  description: string;
  icon: "scan-search" | "clipboard-check" | "radar";
  links: ServiceSubLink[];
};

export const CYBER_SECURITY_CATEGORIES: CyberSecurityCategory[] = [
  {
    name: "Security Assessment",
    description: "Identify and eliminate vulnerabilities across your applications, network, and cloud before attackers do.",
    icon: "scan-search",
    links: [
      { label: "Web Application Security", href: "/web-application-security" },
      { label: "API Security" },
      { label: "VAPT Network & Infrastructure", href: "/vapt" },
      { label: "Cloud Security Assessment" },
      { label: "Mobile Application Security" },
      { label: "Red Teaming" },
      { label: "Security Configuration Review" },
      { label: "Vulnerability Management" },
      { label: "Endpoint Security" },
    ],
  },
  {
    name: "Compliance",
    description: "Meet global security standards and regulatory requirements with audit-ready compliance support.",
    icon: "clipboard-check",
    links: [
      { label: "ISO 27001" },
      { label: "SOC 2" },
      { label: "PCI DSS" },
      { label: "GDPR" },
      { label: "HIPAA" },
      { label: "CERT-In Requirements" },
      { label: "Security Risk Assessment" },
      { label: "Compliance Gap Assessment" },
    ],
  },
  {
    name: "SOC Services",
    description: "Round-the-clock monitoring and rapid response to detect and contain threats before they escalate.",
    icon: "radar",
    links: [
      { label: "Security Monitoring" },
      { label: "SIEM" },
      { label: "Alert Investigation" },
      { label: "Threat Detection" },
      { label: "Incident Response" },
      { label: "Threat Intelligence" },
      { label: "Security Log Analysis" },
    ],
  },
];

export type Industry = { name: string };

// Curated subset shown on the homepage's own Industries teaser section
// (with icons) — kept small on purpose, distinct from the full nav list.
export const INDUSTRIES: Industry[] = [
  { name: "Healthcare & Life Sciences" },
  { name: "Education & e-Learning" },
  { name: "BFSI" },
  { name: "Retail & eCommerce" },
  { name: "Manufacturing" },
  { name: "Media & Entertainment" },
  { name: "Transport & Logistics" },
  { name: "Telecom" },
  { name: "Government & Public Sector" },
  { name: "Travel & Hospitality" },
];

// Full industries list for the header's Industries mega-menu, straight from
// goognu.com's nav (base.html) — 24 industries, real page slugs. Hrefs are
// omitted (rendering as "#") for anything that doesn't have a built
// Next.js page yet, same convention as ServiceSubLink.
export type IndustryNavItem = { label: string; slug: string; href?: string };

export const INDUSTRY_NAV_ITEMS: IndustryNavItem[] = [
  { label: "E-Commerce Application", slug: "ecommerce", href: "/industry/ecommerce" },
  { label: "Healthcare Development", slug: "healthcare", href: "/industry/healthcare" },
  { label: "Saas Development", slug: "saas-development", href: "/industry/saas-development" },
  { label: "Mobile Game Development", slug: "mobile-game", href: "/industry/mobile-game" },
  { label: "Fitness and Wellness", slug: "fitness-wellness", href: "/industry/fitness-wellness" },
  { label: "Finance Development", slug: "finance", href: "/industry/finance" },
  { label: "Social Networking", slug: "social-networking", href: "/industry/social-networking" },
  { label: "Banking Software Development", slug: "banking", href: "/industry/banking" },
  { label: "Insurance Software Development", slug: "insurance", href: "/industry/insurance" },
  { label: "Retail Software Development", slug: "retail-management", href: "/industry/retail-management" },
  { label: "Real Estate Development", slug: "real-estate", href: "/industry/real-estate" },
  { label: "Education App Development", slug: "education", href: "/industry/education" },
  { label: "News & Magazine App Development", slug: "news-magazine", href: "/industry/news-magazine" },
  { label: "Logistics App Development", slug: "logistics", href: "/industry/logistics" },
  { label: "Aviation Software Development", slug: "aviation", href: "/industry/aviation" },
  { label: "Agriculture Software Development", slug: "agriculture", href: "/industry/agriculture" },
  { label: "E-Vehicle Software Development", slug: "e-vehicle", href: "/industry/e-vehicle" },
  { label: "Automotive Software Development", slug: "automotive", href: "/industry/automotive" },
  { label: "Manufacturing Software Development", slug: "manufacturing", href: "/industry/manufacturing" },
  { label: "On Demand Software Development", slug: "on-demand", href: "/industry/on-demand" },
  { label: "Restaurant Software Development", slug: "restaurant", href: "/industry/restaurant" },
  { label: "Travel Software Development", slug: "travel", href: "/industry/travel" },
  { label: "E-Scooter Software Development", slug: "e-scooter", href: "/industry/e-scooter" },
  { label: "Event App Software Development", slug: "event-app", href: "/industry/event-app" },
];

// ─────────────────────────── Related Services (cross-link) ───────────────────────────
// Every /industry/<slug> page ends with a "Related Services" section pointing
// the visitor at real, built service pages elsewhere on the site (AWS
// services, VAPT, Web Application Security). Only 11 real service pages
// exist right now — this catalog is the fixed source of truth for them, so
// no industry page can ever link to a "#" placeholder. Each industry then
// just picks 2-4 catalog keys most relevant to it (INDUSTRY_RELATED_SERVICES
// below); getRelatedServices() resolves those keys into full link objects.
export type RelatedServiceKey =
  | "aws-partnership"
  | "aws-consulting"
  | "aws-managed"
  | "aws-migration"
  | "aws-billing"
  | "aws-well-architected"
  | "aws-data-lake-consulting"
  | "aws-data-warehouse-consulting"
  | "aws-data-lake-managed"
  | "web-app-security"
  | "vapt";

export type RelatedServiceLink = {
  key: RelatedServiceKey;
  label: string;
  description: string;
  href: string;
  icon: "cloud" | "workflow" | "shield" | "scan-search" | "database" | "gauge" | "wallet";
};

export const RELATED_SERVICE_CATALOG: Record<RelatedServiceKey, RelatedServiceLink> = {
  "aws-partnership": {
    key: "aws-partnership",
    label: "AWS Partnership",
    description: "Build on Goognu's AWS partner status for trusted, well-supported cloud delivery.",
    href: "/aws",
    icon: "cloud",
  },
  "aws-consulting": {
    key: "aws-consulting",
    label: "AWS Consulting Services",
    description: "Architecture guidance and cloud strategy from certified AWS consultants.",
    href: "/services/aws-consulting-services",
    icon: "cloud",
  },
  "aws-managed": {
    key: "aws-managed",
    label: "AWS Managed Services",
    description: "Round-the-clock monitoring and management of your AWS environment.",
    href: "/services/aws-managed-services",
    icon: "gauge",
  },
  "aws-migration": {
    key: "aws-migration",
    label: "AWS Cloud Migration Services",
    description: "Move your application to AWS with minimal downtime and a clear migration plan.",
    href: "/services/aws-cloud-migration-services",
    icon: "cloud",
  },
  "aws-billing": {
    key: "aws-billing",
    label: "AWS Discounted Billing Services",
    description: "Cut AWS spend with optimized billing and reserved-capacity management.",
    href: "/services/aws-discounted-billing-services",
    icon: "wallet",
  },
  "aws-well-architected": {
    key: "aws-well-architected",
    label: "AWS Well-Architected Framework Review",
    description: "An audit of your workload against AWS's security, reliability, and cost pillars.",
    href: "/services/aws-well-architectured-framework-review",
    icon: "shield",
  },
  "aws-data-lake-consulting": {
    key: "aws-data-lake-consulting",
    label: "AWS Data Lake Consulting Services",
    description: "Design a data lake that unifies your operational and analytics data on AWS.",
    href: "/services/aws-data-lake-consulting-services",
    icon: "database",
  },
  "aws-data-warehouse-consulting": {
    key: "aws-data-warehouse-consulting",
    label: "AWS Data Warehouse Consulting Services",
    description: "Stand up an AWS data warehouse built for fast, reliable reporting at scale.",
    href: "/services/aws-data-warehouse-consulting-services",
    icon: "database",
  },
  "aws-data-lake-managed": {
    key: "aws-data-lake-managed",
    label: "AWS Data Lake Managed Services",
    description: "Ongoing management of your AWS data lake pipelines and storage.",
    href: "/services/aws-data-lake-managed-services",
    icon: "database",
  },
  "web-app-security": {
    key: "web-app-security",
    label: "Web Application Security",
    description: "Find and fix vulnerabilities in your application before attackers do.",
    href: "/web-application-security",
    icon: "shield",
  },
  vapt: {
    key: "vapt",
    label: "VAPT Network & Infrastructure",
    description: "Vulnerability assessment and penetration testing across your network and infrastructure.",
    href: "/vapt",
    icon: "scan-search",
  },
};

// Curated per industry — picked for relevance (compliance-heavy industries
// get security/VAPT, data-heavy industries get data lake/warehouse, etc.)
// rather than a single generic list repeated everywhere.
export const INDUSTRY_RELATED_SERVICES: Record<string, RelatedServiceKey[]> = {
  ecommerce: ["web-app-security", "vapt", "aws-migration"],
  healthcare: ["web-app-security", "vapt", "aws-well-architected"],
  "saas-development": ["aws-consulting", "aws-managed", "aws-well-architected"],
  "mobile-game": ["aws-managed", "aws-migration", "aws-consulting"],
  "fitness-wellness": ["web-app-security", "aws-managed", "aws-consulting"],
  finance: ["web-app-security", "vapt", "aws-well-architected"],
  "social-networking": ["aws-managed", "web-app-security", "aws-consulting"],
  banking: ["web-app-security", "vapt", "aws-well-architected"],
  insurance: ["web-app-security", "vapt", "aws-data-warehouse-consulting"],
  "retail-management": ["aws-migration", "web-app-security", "aws-data-lake-consulting"],
  "real-estate": ["aws-consulting", "aws-managed", "web-app-security"],
  education: ["aws-managed", "web-app-security", "aws-consulting"],
  "news-magazine": ["aws-managed", "aws-migration", "aws-consulting"],
  logistics: ["aws-data-lake-consulting", "aws-managed", "aws-migration"],
  aviation: ["aws-well-architected", "vapt", "aws-data-lake-consulting"],
  agriculture: ["aws-data-lake-consulting", "aws-managed", "aws-consulting"],
  "e-vehicle": ["aws-data-lake-consulting", "aws-managed", "vapt"],
  automotive: ["aws-data-lake-consulting", "aws-managed", "aws-consulting"],
  manufacturing: ["aws-data-lake-consulting", "aws-data-warehouse-consulting", "aws-managed"],
  "on-demand": ["aws-migration", "web-app-security", "aws-managed"],
  restaurant: ["aws-migration", "aws-managed", "web-app-security"],
  travel: ["aws-migration", "web-app-security", "aws-consulting"],
  "e-scooter": ["aws-data-lake-consulting", "vapt", "aws-managed"],
  "event-app": ["aws-migration", "web-app-security", "aws-managed"],
};

/** Resolve an industry slug's curated service keys into full link objects. Falls back to a sensible default trio if a slug isn't mapped. */
export function getRelatedServices(slug: string): RelatedServiceLink[] {
  const keys = INDUSTRY_RELATED_SERVICES[slug] ?? ["aws-consulting", "aws-managed", "web-app-security"];
  return keys.map((k) => RELATED_SERVICE_CATALOG[k]);
}

export type Product = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  // Single source of truth for this product's icon + accent gradient —
  // read by the header mega-menu, the homepage cards, and the product's
  // own detail page, so they can never drift out of sync with each other
  // (they used to be three separate array-position-matched lists).
  icon: IconKey;
  gradient: string;
};

export const PRODUCTS: Product[] = [
  { slug: "stremify", name: "Stremify", tag: "Cloud APIs for Videos", description: "Build efficient video workflows with adaptive cloud streaming — automated transcoding and HLS playback for fast, browser-friendly video delivery.", icon: "video", gradient: "from-blue-600 to-cyan-500" },
  { slug: "puboost", name: "Puboost", tag: "Customer Data Platform", description: "Drive higher customer engagement by tracking behavior across every digital touchpoint and acting on it in real time.", icon: "users", gradient: "from-violet-600 to-purple-500" },
  { slug: "filefly", name: "Filefly", tag: "Secure File Sharing", description: "Smart file storage and sharing built for fast sync, secure exchange, and total access control.", icon: "file-text", gradient: "from-emerald-600 to-teal-500" },
  { slug: "bigbell", name: "Bigbell", tag: "Cloud Cost Optimization", description: "Lower cloud bills by automating instance lifecycle tasks, improving resource allocation, and reducing manual overhead.", icon: "gauge", gradient: "from-orange-500 to-amber-400" },
  { slug: "airs", name: "Airs", tag: "AI Recruitment & ATS", description: "An all-in-one applicant tracking platform that auto-captures resumes from your inbox and turns them into searchable, structured candidate profiles.", icon: "user-circle", gradient: "from-fuchsia-600 to-pink-500" },
  { slug: "taggy", name: "Taggy", tag: "Support Operations", description: "One platform to ingest, assign, and track every support request — across email, WhatsApp, and beyond — with SLA breach detection built in.", icon: "message", gradient: "from-blue-600 to-indigo-600" },
];

// Real client logos, carried over from goognu.com's homepage logo marquee
// and reused by the homepage, AWS, and per-industry pages — single source
// of truth so the same trust strip never drifts out of sync across pages.
// Each entry resolves to /images/clients/<file>.png.
export type ClientLogo = { name: string; file: string };

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Anveshan", file: "anveshan" },
  { name: "ABP Network", file: "abp_network" },
  { name: "AP2V", file: "ap2v" },
  { name: "AWS", file: "aws" },
  { name: "BannerBuzz", file: "bannerbuzz" },
  { name: "BKIT", file: "bkit" },
  { name: "Carlsberg", file: "carlsberg" },
  { name: "CollegeDekho", file: "collegedekho" },
  { name: "CommerceUp", file: "commerce_up" },
  { name: "Coolwinks", file: "coolwinks" },
  { name: "Dalmia", file: "dalmia" },
  { name: "Opoyi", file: "opoyi" },
  { name: "PH360", file: "PH360" },
  { name: "Resonance", file: "resonance" },
  { name: "Shine", file: "shine" },
  { name: "Sunday Labs", file: "sundaylabs" },
  { name: "Talent Edge", file: "talent_edge" },
  { name: "Tentran", file: "tentran" },
  { name: "Upgiode", file: "upgiode" },
  { name: "VGU", file: "vgu" },
  { name: "Ztudium", file: "ztudium" },
  { name: "Government of India", file: "govt_of_india" },
];

export type Stat = { number: string; label: string };

// Placeholder numbers — swap for Goognu's real figures before this goes live.
export const STATS: Stat[] = [
  { number: "50+", label: "Projects Delivered" },
  { number: "24/7", label: "Managed Support" },
  { number: "99.9%", label: "Platform Uptime" },
  { number: "10+", label: "Cloud & AI Specialists" },
];

export type CaseStudy = {
  category: string;
  client: string;
  summary: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  { category: "AWS Cloud · 10,000 Concurrent Students", client: "Resosir — Landing on Aapke Ghar", summary: "A fully integrated application delivering online learning material to 40,000+ students, built for scale on AWS." },
  { category: "AWS Cloud", client: "Dalmia Cement", summary: "Supporting a manufacturer of multiple cement variants with cloud infrastructure built for varied construction demands across India." },
  { category: "AWS Cloud", client: "Dekho", summary: "Bridging the gap between students seeking admissions and colleges offering courses, since 2015." },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarfraz Ahmad",
    role: "Girnar Education Software Private Limited",
    quote: "Goognu team is professional and technical as well. We migrated our production environment with the help of the Goognu team almost without any downtime. They took full responsibility and led from the front.",
  },
  {
    name: "Mr. Ajay Kumar",
    role: "Resonance Edu-venture Ltd",
    quote: "They have managed all our technical requirements using distributed architecture and the maximum possible benefit of the AWS tech stack, with virtually zero downtime despite high concurrent usage.",
  },
  {
    name: "Mr. Nikunj Bhatter",
    role: "GirnarSoft Education Services Pvt. Ltd.",
    quote: "We migrated our production workloads in a superbly planned manner with almost zero downtime. Goognu took complete ownership of the technical work and the relationships that made it possible.",
  },
  {
    name: "Mr. Bharat Chandra",
    role: "ABP PVT. LTD",
    quote: "They provide 24x7x365 DevOps and AWS support. Whether it's a minor glitch or a complex problem, their support staff has always been readily available to resolve it efficiently.",
  },
];

// --- Footer-only content -----------------------------------------------
// Services and Industries in the footer intentionally read straight from
// SERVICE_CATEGORIES / INDUSTRY_NAV_ITEMS above (the same lists the header's
// mega-menus use) rather than keeping a second, separately-maintained copy —
// so the two can never drift out of sync with each other.

export type FooterLink = { label: string; href?: string };

// The 4 shipped products plus 2 in development — surfaced here ahead of
// their own pages so the footer reflects the real roadmap. Give the shipped
// ones real hrefs; Airs and Taggy stay unlinked until they have pages.
export type FooterProductLink = { label: string; href?: string; comingSoon?: boolean };

export const FOOTER_PRODUCTS: FooterProductLink[] = [
  { label: "Stremify", href: "/products/stremify" },
  { label: "Puboost", href: "/products/puboost" },
  { label: "Filefly", href: "/products/filefly" },
  { label: "Bigbell", href: "/products/bigbell" },
  { label: "Airs", href: "/products/airs" },
  { label: "Taggy", href: "/products/taggy" },
];

export const FOOTER_RESOURCES: FooterLink[] = [
  { label: "Blogs" },
  { label: "Case Studies" },
  { label: "Whitepapers" },
  { label: "Events" },
  { label: "Webinars" },
];

export const FOOTER_COMPANY: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Team" },
  { label: "Blogs" },
  { label: "Case Studies" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service" },
  { label: "Privacy Policy" },
];

export type SocialLink = { label: "Facebook" | "Instagram" | "Twitter" | "LinkedIn"; href: string };

// "#" placeholders — the live site does the exact same thing until real
// social URLs are configured.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export type BlogTeaser = {
  category: string;
  title: string;
};

export const BLOG_TEASERS: BlogTeaser[] = [
  { category: "Managed Services", title: "An Essential Guide to Managed IT Services: Why Your Business Needs It" },
  { category: "Cloud Services", title: "Top 5 Benefits of Cloud Migration for UK Businesses" },
  { category: "Cloud Services", title: "Why Do UK Businesses Need Cloud Consulting In 2024?" },
];
