import {
  Video, Layers, Radio, Cloud, Link2, Server, Upload, Webhook, Cpu, Play,
  Users, Target, Share2, UserCircle, PhoneCall, FlaskConical, Rocket,
  FileText, ShieldCheck, Lock, RefreshCw, MessageSquare, Clock,
  Gauge, Bell, Search, SlidersHorizontal, ScanLine, type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/icons";

const ICONS: Record<IconKey, LucideIcon> = {
  video: Video,
  layers: Layers,
  radio: Radio,
  cloud: Cloud,
  link: Link2,
  server: Server,
  upload: Upload,
  webhook: Webhook,
  cpu: Cpu,
  play: Play,
  users: Users,
  target: Target,
  share: Share2,
  "user-circle": UserCircle,
  "phone-call": PhoneCall,
  flask: FlaskConical,
  rocket: Rocket,
  "file-text": FileText,
  "shield-check": ShieldCheck,
  lock: Lock,
  refresh: RefreshCw,
  message: MessageSquare,
  clock: Clock,
  gauge: Gauge,
  bell: Bell,
  search: Search,
  sliders: SlidersHorizontal,
  scan: ScanLine,
};

export default function ProductIcon({ icon, className }: { icon: IconKey; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
