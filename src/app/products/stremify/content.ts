import type { ProductDetail } from "@/components/ProductDetailTemplate";

// Rewritten from goognu.uk's Django templates/products/stremify.html.
export const product: ProductDetail = {
  slug: "stremify",
  name: "Stremify",
  tagline: "Cloud APIs for Videos",
  headline: "Build efficient video workflows with adaptive cloud streaming",
  description:
    "An infrastructure-ready service for platforms that rely on fast, browser-friendly video playback. Stremify automates video processing so you can scale content delivery with confidence — whether you're building an LMS or a video-sharing platform, with smart job queuing, real-time webhook updates, and built-in retry logic for failed jobs.",
  icon: "video",
  gradient: "from-blue-600 to-cyan-500",
  capabilities: [
    { icon: "layers", title: "Encoding", description: "Converts .mp4 files to HLS by segmenting video into transport-stream (.ts) chunks and a master .m3u8 playlist — improving streaming efficiency and compatibility." },
    { icon: "radio", title: "Live Streaming Support", description: "Loads video parts dynamically so viewers see minimal buffering, even on slower connections, thanks to real-time segmented delivery." },
    { icon: "cloud", title: "Mobile-Friendly Cloud Storage", description: "Converted videos live in an AWS S3 bucket, accessible across browsers and devices — no need to download the full file, just stream what's needed." },
    { icon: "link", title: "Flexible Input Integration", description: "Accepts any valid public .mp4 URL hosted on S3. The API validates file extension and protocol before processing starts." },
    { icon: "server", title: "Platform Architecture", description: "Built on Python Django with MongoDB tracking processing logs and statuses — Downloading, Processing, Completed — at every lifecycle stage." },
  ],
  steps: [
    { title: "Upload Video to AWS S3", description: "Upload your .mp4 video to a public S3 bucket so Stremify's backend can fetch and process it remotely." },
    { title: "Trigger Conversion API", description: "Call the convert-mp4-to-hls API with the video URL as a query parameter — processing begins asynchronously." },
    { title: "Asynchronous Processing with FFmpeg", description: "Stremify downloads the input, converts it to HLS with FFmpeg, and uploads the .ts segments and .m3u8 playlist to the output bucket." },
    { title: "Playback via HLS Player or API", description: "Access the processed playlist via get-hls-playlist or stream-hls-video and play it in-browser with Stremify's built-in HLS player." },
  ],
  whyChoose: [
    { icon: "upload", title: "Any Public Source", description: "Point Stremify at any valid public .mp4 URL — no proprietary upload flow to integrate first." },
    { icon: "webhook", title: "Webhook-Driven", description: "Real-time status updates land in your systems the moment a job changes state — no polling required." },
    { icon: "cpu", title: "Built for Volume", description: "Smart job queuing and automatic retries keep high-volume processing reliable, even at LMS or platform scale." },
  ],
  closing: {
    headline: "Convert Once. Stream Anywhere.",
    description: "Focus on your content — we'll handle the streaming infrastructure in the background.",
  },
};
