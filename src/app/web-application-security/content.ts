import type { CyberSecurityPageContent } from "@/components/CyberSecurityTemplate";

export const HERO = {
  eyebrow: "Enterprise Cyber Security",
  title: "Secure Your Web Applications Against Evolving Cyber Threats",
  paragraphs: [
    "Your web application is often the primary gateway between your business and its users, processing sensitive customer data, transactions, and intellectual property daily.",
    "Goognu provides end-to-end Web Application Security and Penetration Testing services. Our certified ethical hackers combine advanced automated probing with deep manual exploitation to identify zero-day vulnerabilities, business logic flaws, and access control bypasses before malicious actors exploit them.",
  ],
  ctaLabel: "Schedule Security Audit",
  secondaryCtaLabel: "Explore Scope & Vectors",
  trustBadges: [
    "OWASP WSTG & ASVS Aligned",
    "Zero False Positive Guarantee",
    "Strict NDA & Confidentiality",
    "Detailed Remediation Playbooks",
    "Complimentary Retesting Included",
  ],
};

export const STATS = [
  { number: "100+", label: "Certified Security Engineers", sub: "CREST & CEH Certified" },
  { number: "12+", label: "Years in Cyber Defense", sub: "Enterprise & SME Track Record" },
  { number: "500+", label: "Web Applications Hardened", sub: "SaaS, Fintech, Healthcare & Retail" },
  { number: "0%", label: "False Positive Guarantee", sub: "100% Manually Validated" },
];

export const OVERVIEW = [
  {
    title: "What is Web Application Security?",
    description:
      "Web Application Security is the systematic discipline of assessing, defending, and hardening web applications, APIs, user data, and backing microservices against malicious intrusion and unauthorized access. Our rigorous assessment examines every layer of your application's attack surface — from authentication, session lifecycles, and input validation to intricate multi-step business logic, third-party integrations, and cloud hosting configurations. Every test is executed according to industry standards including the OWASP Web Security Testing Guide (WSTG v4.2) and NIST SP 800-115.",
    highlights: [
      "Full attack surface mapping including APIs & microservices",
      "Manual validation to eliminate false alarms and scanner noise",
      "Alignment with OWASP Top 10 and NIST cybersecurity frameworks",
    ],
  },
  {
    title: "Why is Web Application Security Mission-Critical?",
    description:
      "Modern cloud-native web applications manage mission-critical operations, personally identifiable information (PII), proprietary business workflows, and payment transactions. A single unpatched flaw — such as an IDOR (Insecure Direct Object Reference) or an authentication bypass — can give attackers direct access to your internal databases. Implementing regular, expert-led application security assessments ensures proactive risk mitigation, maintains regulatory compliance, and cements customer trust.",
    highlights: [
      "Average cost of a data breach exceeds $4.45M globally",
      "Over 80% of successful breaches target application-layer vulnerabilities",
      "Mandatory compliance for ISO 27001, SOC 2, GDPR, and PCI-DSS",
    ],
  },
];

export const SERVICES = [
  {
    icon: "search-check",
    category: "pentest",
    tag: "Exploit Simulation",
    title: "Web Application Penetration Testing",
    description:
      "Controlled, real-world attack simulations designed to identify exploitable weaknesses across client-side scripts, server endpoints, and backend databases.",
    vectors: ["SQL / NoSQL Injection", "Cross-Site Scripting (XSS)", "Server-Side Request Forgery (SSRF)", "Remote Code Execution (RCE)"],
  },
  {
    icon: "plug",
    category: "api",
    tag: "API & Endpoints",
    title: "API Security Testing (REST, GraphQL, gRPC)",
    description:
      "Deep security analysis of modern APIs, ensuring robust parameter sanitization, rate-limiting, token validation, and prevention of mass-assignment vulnerabilities.",
    vectors: ["Broken Object Level Auth (BOLA)", "GraphQL Query Injection", "Rate Limiting & DoS Flaws", "Excessive Data Exposure"],
  },
  {
    icon: "key-round",
    category: "auth",
    tag: "Identity & RBAC",
    title: "Authentication & Authorization Testing",
    description:
      "Comprehensive validation of user login workflows, SSO / OAuth implementations, multi-factor mechanisms, and multi-tenant privilege boundaries.",
    vectors: ["Privilege Escalation (Vertical/Horizontal)", "IDOR Vulnerabilities", "OAuth / JWT Token Flaws", "Brute Force & Credential Stuffing"],
  },
  {
    icon: "cookie",
    category: "auth",
    tag: "Session Hardening",
    title: "Session Security & Token Management",
    description:
      "Assessment of session token lifecycle, cookie security flags (Secure, HttpOnly, SameSite), session fixation risks, and concurrent login policies.",
    vectors: ["Session Hijacking & Fixation", "Cookie Flag Misconfigurations", "Insecure Token Revocation", "Cross-Site Request Forgery (CSRF)"],
  },
  {
    icon: "workflow",
    category: "logic",
    tag: "Business Logic",
    title: "Business Logic Security Testing",
    description:
      "Deep manual probing into functional workflows (e.g. checkout pricing manipulation, coupon stacking, race conditions) that automated scanners cannot detect.",
    vectors: ["Race Condition Exploits", "Price & Parameter Tampering", "Multi-Step Workflow Bypasses", "Coupon & Credit Abuse"],
  },
  {
    icon: "shield-check",
    category: "compliance",
    tag: "Standard Compliance",
    title: "OWASP Top 10 & ASVS Assessment",
    description:
      "Structured evaluation benchmarked against the latest OWASP Top 10 web vulnerabilities and Application Security Verification Standard (ASVS).",
    vectors: ["Cryptographic Failures", "Security Logging & Monitoring Deficits", "Software & Data Integrity Flaws", "Insecure Design Principles"],
  },
  {
    icon: "sliders",
    category: "hardening",
    tag: "Server & Header Hardening",
    title: "Secure Configuration & Header Review",
    description:
      "Review of web server configurations, TLS/SSL cipher suites, CORS policies, HTTP security headers (CSP, HSTS), and exposed debug artifacts.",
    vectors: ["CORS Misconfiguration", "Weak TLS Ciphers & Expired Certs", "Missing CSP / HSTS Headers", "Exposed Git / Backup Files"],
  },
  {
    icon: "file-search",
    category: "reporting",
    tag: "Actionable Insights",
    title: "Vulnerability Assessment & Reporting",
    description:
      "Systematic triaging, risk scoring (CVSS v3.1), and generation of executive summaries alongside step-by-step developer remediation guides.",
    vectors: ["CVSS v3.1 Impact Scoring", "Executive Risk Dashboard", "Developer Code Fix Snippets", "Complimentary Retest Verification"],
  },
];

export const WHY_NEED = {
  title: "Protect Your Digital Perimeter Before Threat Actors Exploit It",
  subtitle: "Why automated vulnerability scans are not enough in today's threat landscape",
  paragraphs: [
    "Modern web applications are continuously exposed to autonomous botnets, targeted criminal syndicates, and opportunistic scanners. Traditional firewalls and generic automated scanners catch only standard syntax anomalies — they are blind to complex logic flaws, chained exploits, and nuanced authorization bypasses.",
    "Goognu's Web Application Security combines automated reconnaissance with skilled manual penetration testing by ethical hackers, delivering complete clarity on your actual security posture.",
  ],
};

export const COMPARISON_TABLE = {
  title: "Automated Scanners vs. Goognu Hybrid Security Assessment",
  headers: ["Capability / Feature", "Automated Scanners Alone", "Goognu Hybrid (Auto + Manual)"],
  rows: [
    {
      feature: "OWASP Top 10 Detection",
      scanner: "Basic syntax & known signatures only",
      goognu: "Complete coverage including chained vectors",
    },
    {
      feature: "Business Logic Flaws",
      scanner: "Cannot detect workflow or logic bypasses",
      goognu: "Thorough manual testing of business logic",
    },
    {
      feature: "Privilege Escalation (IDOR & BOLA)",
      scanner: "High failure rate, lacks multi-role context",
      goognu: "Contextual multi-user testing across all roles",
    },
    {
      feature: "False Positive Ratio",
      scanner: "High (20% - 40% false alarms wasted on devs)",
      goognu: "0% False Positives (Every finding is verified)",
    },
    {
      feature: "Exploit Proof of Concept (PoC)",
      scanner: "Generic theoretical alert strings",
      goognu: "Step-by-step reproduction steps & screenshots",
    },
    {
      feature: "Remediation Support",
      scanner: "Generic boilerplate documentation links",
      goognu: "Tailored code snippets & 1-on-1 engineer guidance",
    },
  ],
};

export const KEY_BENEFITS = [
  {
    title: "Eliminate Exploitable Vulnerabilities",
    description: "Identify and patch critical vulnerabilities before malicious hackers or automated bots discover them.",
    icon: "shield-check",
  },
  {
    title: "Protect Customer & Financial Data",
    description: "Safeguard sensitive customer PII, credentials, and payment records against unauthorized exfiltration.",
    icon: "database",
  },
  {
    title: "Ensure Regulatory & Compliance Readiness",
    description: "Meet security audit mandates for GDPR, UK Cyber Essentials, ISO 27001, SOC 2 Type II, and PCI-DSS.",
    icon: "file-search",
  },
  {
    title: "Prevent Costly Business Disruption",
    description: "Avoid crippling downtime, data loss, ransomware extortion, and expensive emergency recovery operations.",
    icon: "alert-triangle",
  },
  {
    title: "Harden APIs & Microservices",
    description: "Uncover authorization bypasses and data leakage across modern REST, GraphQL, and microservice architectures.",
    icon: "plug",
  },
  {
    title: "Empower Developer Remediation",
    description: "Equip your development team with actionable CVSS v3.1 reports containing exact code-level fix recommendations.",
    icon: "code",
  },
  {
    title: "Build Investor & Enterprise Trust",
    description: "Demonstrate enterprise-grade security posture with an official Attestation of Assessment report.",
    icon: "lock",
  },
  {
    title: "Complimentary Retesting Included",
    description: "We re-probe all identified vulnerabilities after your engineering team implements patches to verify resolution.",
    icon: "search-check",
  },
];

export const METHODOLOGY_INTRO =
  "We employ a battle-tested 6-phase assessment framework conforming to the OWASP Web Security Testing Guide (WSTG v4.2) and PTES (Penetration Testing Execution Standard).";

export const METHODOLOGY = [
  {
    step: "01",
    phase: "Phase 1: Scoping & RoE",
    title: "Scope & Application Understanding",
    icon: "file-search",
    description: "We define testing parameters, target URLs, APIs, subdomains, user roles, testing windows, and safety rules of engagement to ensure zero impact on production operations.",
    deliverables: "Scoping Document & Rules of Engagement",
  },
  {
    step: "02",
    phase: "Phase 2: Reconnaissance & Mapping",
    title: "Information Gathering & Attack Surface Mapping",
    icon: "search-check",
    description: "Our security engineers enumerate application technologies, server headers, exposed endpoints, hidden parameters, authentication paths, and third-party integrations.",
    deliverables: "Attack Surface Inventory & Architecture Map",
  },
  {
    step: "03",
    phase: "Phase 3: Threat Modeling & Probing",
    title: "Automated Probing & Vulnerability Discovery",
    icon: "shield-check",
    description: "High-precision commercial and proprietary scanning utilities discover baseline vulnerabilities, missing security headers, outdated software libraries, and configuration errors.",
    deliverables: "Initial Vulnerability Telemetry & Risk Log",
  },
  {
    step: "04",
    phase: "Phase 4: Deep Manual Exploitation",
    title: "Manual Penetration Testing & Logic Analysis",
    icon: "workflow",
    description: "Our ethical hackers manually simulate realistic cyberattacks, testing multi-step business logic, privilege escalation, parameter tampering, and chained exploit vectors.",
    deliverables: "Validated Exploits & Proof-of-Concept Evidence",
  },
  {
    step: "05",
    phase: "Phase 5: Reporting & Risk Prioritization",
    title: "Comprehensive Reporting & Executive Debrief",
    icon: "cookie",
    description: "We produce an executive summary for leadership alongside an in-depth technical report featuring CVSS v3.1 severity scores, reproduction steps, and exact remediation advice.",
    deliverables: "Executive Summary & Technical Remediation Guide",
  },
  {
    step: "06",
    phase: "Phase 6: Retesting & Sign-off",
    title: "Remediation Verification & Retesting",
    icon: "sliders",
    description: "After your development team applies the security patches, we re-probe the affected components free of charge to confirm all vulnerabilities are effectively neutralized.",
    deliverables: "Official Attestation of Security Retest",
  },
];

export const DELIVERABLES = [
  {
    title: "Executive Summary Report",
    badge: "For Leadership & C-Suite",
    desc: "A high-level risk overview illustrating business impact, overall security posture, compliance alignment, and strategic security priorities.",
  },
  {
    title: "Technical Findings & CVSS Matrix",
    badge: "For Development & DevOps",
    desc: "Complete vulnerability breakdown scored via CVSS v3.1, including affected endpoints, severity ratings, and proof-of-concept exploit steps.",
  },
  {
    title: "Developer Remediation Playbook",
    badge: "Actionable Code Guidance",
    desc: "Concrete, copy-pasteable remediation guidance, secure coding snippets, and architectural recommendations tailored to your tech stack.",
  },
  {
    title: "Attestation of Assessment Certificate",
    badge: "For Clients & Compliance",
    desc: "Formal third-party verification document confirming that your application has undergone rigorous security testing, ideal for SOC 2, ISO, and enterprise sales.",
  },
];

export const CLOSING_CTA = {
  title: "Strengthen Your Web Application Defense Today",
  paragraphs: [
    "Don't wait for a high-profile security breach or compliance violation to expose vulnerabilities in your digital applications.",
    "Goognu's Web Application Security specialists deliver actionable, zero-false-positive assessments tailored to your release cycle. Contact our security team today for a confidential, no-obligation scoping session.",
  ],
  ctaLabel: "Schedule Free Security Consultation",
};

export const FAQS = [
  {
    question: "Why is Web Application Security important for my business?",
    answer: "Web applications are the #1 attack vector for modern corporate cyber incidents. Because applications are publicly exposed to the internet and frequently handle customer credentials, payment information, and confidential records, even a minor flaw can result in catastrophic financial losses, regulatory fines (GDPR/DPA), and irreparable brand damage.",
  },
  {
    question: "What is the difference between automated vulnerability scanning and manual penetration testing?",
    answer: "Automated vulnerability scanners rely on pre-configured signature databases to identify basic syntax errors and known outdated software packages. However, scanners cannot understand business context or complex workflows. Goognu uses automated tools solely for initial surface reconnaissance, following up with extensive manual penetration testing by ethical hackers who manipulate application logic, chain exploit sequences, and bypass access controls just like a sophisticated adversary would.",
  },
  {
    question: "Will the security assessment disrupt our live production users?",
    answer: "No. Before initiating testing, we establish strict Rules of Engagement (RoE). We typically test against staging or pre-production environments that mirror production. If testing against live production is required, we use non-destructive payloads, throttle test velocity, and can execute testing during scheduled low-traffic maintenance windows.",
  },
  {
    question: "How long does a Web Application Security assessment take?",
    answer: "A standard web application penetration test typically takes between 3 to 10 business days, depending on the application complexity, number of dynamic endpoints, authentication roles, and API integrations. An expedited fast-track schedule is available for critical product launches or urgent compliance deadlines.",
  },
  {
    question: "Is retesting included once our engineering team fixes the vulnerabilities?",
    answer: "Yes! Every Goognu Web Application Security assessment includes complimentary retesting within 30 to 60 days of the initial report delivery. We re-test all remediated endpoints to verify that vulnerabilities have been effectively patched without introducing new security regressions.",
  },
  {
    question: "Do you sign a Non-Disclosure Agreement (NDA) before testing?",
    answer: "Absolutely. We treat confidentiality and client data protection with the utmost rigor. We sign a mutual Non-Disclosure Agreement (NDA) and secure all testing logs, credentials, and vulnerability reports using enterprise-grade encryption.",
  },
  {
    question: "What standards and frameworks does Goognu follow?",
    answer: "Our security testing methodology adheres strictly to international cybersecurity benchmarks, including the OWASP Web Security Testing Guide (WSTG v4.2), OWASP Application Security Verification Standard (ASVS), NIST SP 800-115, and PTES (Penetration Testing Execution Standard).",
  },
  {
    question: "What deliverable reports will our team receive?",
    answer: "You receive two comprehensive reports: (1) An Executive Summary designed for executive leadership, board members, and compliance auditors, and (2) An in-depth Technical Remediation Report detailing every discovered vulnerability with CVSS v3.1 scoring, step-by-step reproduction proof-of-concept (PoC), and customized code-level fix recommendations for your developers.",
  },
];

/**
 * Single unified content object conforming to CyberSecurityPageContent.
 * Can be passed directly to <CyberSecurityTemplate data={webAppSecurityContent} />
 */
export const webAppSecurityContent: CyberSecurityPageContent = {
  slug: "web-application-security",
  categoryName: "Cyber Security",
  serviceName: "Web Application Security",
  hero: HERO,
  stats: STATS,
  overview: OVERVIEW,
  servicesHeading: {
    eyebrow: "Comprehensive Scope",
    title: "Web Application Security Services We Offer",
    subtitle: "Deep, methodical penetration testing across every attack vector and architectural component",
  },
  services: SERVICES,
  whyNeed: WHY_NEED,
  comparison: COMPARISON_TABLE,
  benefits: KEY_BENEFITS,
  methodologyIntro: METHODOLOGY_INTRO,
  methodology: METHODOLOGY,
  deliverables: DELIVERABLES,
  closingCta: CLOSING_CTA,
  faqs: FAQS,
};

export default webAppSecurityContent;
