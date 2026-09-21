import type { ProductDetail } from "@/components/ProductDetailTemplate";

// Rewritten from the AIRS product report supplied for this build.
export const product: ProductDetail = {
  slug: "airs",
  name: "Airs",
  tagline: "AI Recruitment & ATS",
  headline: "Smarter hiring, end to end",
  description:
    "AIRS is an all-in-one applicant tracking and recruitment platform built to take the manual work out of hiring. Instead of juggling spreadsheets, inboxes, and disconnected tools, recruiting teams manage every candidate, every open role, and every stage of the hiring process from one place.",
  icon: "user-circle",
  gradient: "from-fuchsia-600 to-pink-500",
  capabilities: [
    { icon: "upload", title: "Resumes, Handled Automatically", description: "AIRS connects directly to your recruiting inbox and reads incoming applications for you — no manual uploading, no copy-pasting. Every resume is captured, parsed, and turned into a structured, searchable candidate profile: skills, experience, education, and contact details, ready to review in seconds." },
    { icon: "search", title: "Built for How Recruiters Actually Search", description: "Every candidate is instantly searchable and filterable by skill, experience, location, and keyword — so finding the right person for a role takes seconds, not hours of scrolling through resumes." },
    { icon: "layers", title: "Pipelines That Match How You Hire", description: "Each open role gets its own hiring pipeline, moving candidates cleanly through Applied, Matched, Pending Approval, Interview, and beyond." },
    { icon: "lock", title: "One Platform, Every Client, Fully Separated", description: "AIRS serves multiple companies from a single platform, with each organization's data, mailbox, and settings kept completely separate and secure." },
  ],
  steps: [
    { title: "Connect Your Recruiting Inbox", description: "AIRS connects directly to the mailbox your applications already land in — no new intake process to train your team on." },
    { title: "Applications Captured & Parsed Automatically", description: "Every resume and job application is automatically captured, parsed, and turned into a structured, searchable candidate profile." },
    { title: "Search, Filter, Shortlist", description: "Filter candidates by skill, experience, location, or keyword to find the right person for a role in seconds." },
    { title: "Move Candidates Through Your Pipeline", description: "Track each candidate through Applied, Matched, Pending Approval, Interview, and beyond — with linked pipelines sharing qualified candidates across similar open roles automatically." },
  ],
  whyChoose: [
    { icon: "webhook", title: "No Manual Resume Intake", description: "Most recruiting tools still rely on manual uploads. AIRS automates candidate intake straight from email instead." },
    { icon: "share", title: "Shared Candidate Pools", description: "Hiring for multiple similar roles at once? Link their pipelines so qualified candidates are shared automatically — no duplicate sourcing, no one falling through the cracks." },
    { icon: "shield-check", title: "One Platform, Many Organizations", description: "AIRS serves many organizations from one platform without sacrificing data separation — team members can belong to more than one org and switch instantly, permissions controlled by role." },
    { icon: "flask", title: "AI Matching, On the Way", description: "Today AIRS offers powerful keyword and skill-based search, with AI-driven candidate matching in active development." },
  ],
  closing: {
    headline: "Smarter Hiring, End to End.",
    description: "Connect your inbox, let AIRS handle the sourcing, and manage every candidate and every role from one place.",
  },
};
