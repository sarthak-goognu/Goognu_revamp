import { Cloud, Workflow, BrainCircuit, Code2, GitBranch, Server, type LucideIcon } from "lucide-react";
import type { ServiceCategory } from "@/lib/content";

const ICONS: Record<ServiceCategory["icon"], LucideIcon> = {
  cloud: Cloud,
  workflow: Workflow,
  "brain-circuit": BrainCircuit,
  code: Code2,
  "git-branch": GitBranch,
  server: Server,
};

export default function ServiceIcon({ icon, className }: { icon: ServiceCategory["icon"]; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
