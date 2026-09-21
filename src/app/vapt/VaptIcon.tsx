import {
  Globe, Smartphone, Wifi, Server, Cloud, Router, ShieldCheck, Cpu,
  ClipboardList, Search, ShieldAlert, Network, Crosshair, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { VaptIconKey } from "./content";

// Colocated with the VAPT page — only used here.
const ICONS: Record<VaptIconKey, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  wifi: Wifi,
  server: Server,
  cloud: Cloud,
  router: Router,
  "shield-check": ShieldCheck,
  cpu: Cpu,
  clipboard: ClipboardList,
  search: Search,
  "shield-alert": ShieldAlert,
  network: Network,
  crosshair: Crosshair,
  "trending-up": TrendingUp,
};

export default function VaptIcon({ icon, className }: { icon: VaptIconKey; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
