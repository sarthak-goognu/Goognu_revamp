// Shared vocabulary of icon keys used for products (and reused by the VAPT
// page). Kept separate from the components that render them so both
// content files and rendering components can import just the type without
// pulling in lucide-react or JSX.

export type IconKey =
  | "video" | "layers" | "radio" | "cloud" | "link" | "server"
  | "upload" | "webhook" | "cpu" | "play"
  | "users" | "target" | "share" | "user-circle"
  | "phone-call" | "flask" | "rocket"
  | "file-text" | "shield-check" | "lock" | "refresh" | "message" | "clock"
  | "gauge" | "bell" | "search" | "sliders" | "scan";
