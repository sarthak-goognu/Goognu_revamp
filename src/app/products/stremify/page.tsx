"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Radio,
  Layers,
  Cloud,
  Link2,
  Webhook,
  Cpu,
  Play,
  Pause,
  Terminal,
  Code2,
  Copy,
  Check,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function StremifyPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "stremify");

  // API code playground language selector
  const [activeLang, setActiveLang] = useState<"curl" | "python" | "node" | "go">("curl");
  const [copied, setCopied] = useState<boolean>(false);

  // Player bitrate selector
  const [bitrate, setBitrate] = useState<"auto" | "1080p" | "720p" | "480p">("auto");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    curl: `curl -X POST "https://api.stremify.io/v1/convert-mp4-to-hls" \\
  -H "Authorization: Bearer sk_live_89f02931a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input_url": "s3://media-bucket/lectures/lecture_01.mp4",
    "output_bucket": "s3://stream-cdn-output/hls/",
    "resolutions": ["1080p", "720p", "480p", "360p"],
    "webhook_url": "https://myapp.com/api/webhooks/video-ready"
  }'`,
    python: `import requests

url = "https://api.stremify.io/v1/convert-mp4-to-hls"
headers = {"Authorization": "Bearer sk_live_89f02931a"}
payload = {
    "input_url": "s3://media-bucket/lectures/lecture_01.mp4",
    "output_bucket": "s3://stream-cdn-output/hls/",
    "resolutions": ["1080p", "720p", "480p", "360p"],
    "webhook_url": "https://myapp.com/api/webhooks/video-ready"
}

response = requests.post(url, json=payload, headers=headers)
job = response.json()
print(f"HLS Transcode Job Queued: {job['job_id']}")`,
    node: `import axios from 'axios';

const response = await axios.post('https://api.stremify.io/v1/convert-mp4-to-hls', {
  input_url: 's3://media-bucket/lectures/lecture_01.mp4',
  output_bucket: 's3://stream-cdn-output/hls/',
  resolutions: ['1080p', '720p', '480p', '360p'],
  webhook_url: 'https://myapp.com/api/webhooks/video-ready'
}, {
  headers: { Authorization: 'Bearer sk_live_89f02931a' }
});

console.log('Master HLS Playlist URL:', response.data.master_playlist_url);`,
    go: `package main

import (
	"bytes"
	"encoding/json"
	"net/http"
)

func main() {
	payload, _ := json.Marshal(map[string]interface{}{
		"input_url":     "s3://media-bucket/lectures/lecture_01.mp4",
		"output_bucket": "s3://stream-cdn-output/hls/",
		"resolutions":   []string{"1080p", "720p", "480p"},
		"webhook_url":   "https://myapp.com/api/webhooks/video-ready",
	})

	req, _ := http.NewRequest("POST", "https://api.stremify.io/v1/convert-mp4-to-hls", bytes.NewBuffer(payload))
	req.Header.Set("Authorization", "Bearer sk_live_89f02931a")
	http.DefaultClient.Do(req)
}`,
  };

  const capabilities = [
    {
      icon: Layers,
      title: "Automated HLS Encoding & Segmenting",
      tag: "Adaptive Multi-Bitrate",
      description:
        "Transforms source .mp4 files into multi-bitrate transport-stream (.ts) segments and unified master .m3u8 playlists for zero-buffer playback.",
    },
    {
      icon: Radio,
      title: "Live & On-Demand Chunk Delivery",
      tag: "Ultra-Low Latency",
      description:
        "Dynamically delivers chunked video segments so viewers experience immediate playback on cellular or low-bandwidth connections.",
    },
    {
      icon: Cloud,
      title: "Native AWS S3 Integration",
      tag: "Direct Bucket Sync",
      description:
        "Converted HLS playlists and media chunks land directly in your private or public S3 bucket ready for CloudFront or custom CDN distribution.",
    },
    {
      icon: Link2,
      title: "Universal Public URL Ingest",
      tag: "Zero Proprietary SDKs",
      description:
        "Accepts any valid public .mp4 URL. Stremify validates protocols, audio/video codecs, and container headers before launching conversion.",
    },
    {
      icon: Webhook,
      title: "Real-Time Webhook Lifecycle Stream",
      tag: "< 100ms Updates",
      description:
        "Receive webhook callbacks at every milestone: Downloading, Transcoding, Uploading, and Ready — with full segment duration logs.",
    },
    {
      icon: Cpu,
      title: "Smart High-Volume Job Queuing",
      tag: "Built for LMS Scale",
      description:
        "Engineered with automated retry logic, exponential backoff, and distributed FFmpeg worker nodes to process hundreds of videos simultaneously.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-cyan-500 selection:text-slate-950">
      {/* ═══════════════ STREAMLINED HERO (Airy & Clean) ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 md:py-16 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.22),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span>Cloud Video Infrastructure & Transcoding API</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
            Convert Once. Stream Anywhere with <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Adaptive HLS APIs</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Stremify automates video processing, FFmpeg chunking, and master playlist generation so your platform delivers buffer-free video playback across all devices.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-400 hover:-translate-y-0.5"
            >
              Get API Access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Code2 size={16} className="text-cyan-400" />
              View API Docs
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-cyan-400" /> Multi-Bitrate HLS (.m3u8)</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-cyan-400" /> Direct AWS S3 Storage</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-cyan-400" /> Asynchronous Webhook Feeds</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIVE PIPELINE ARCHITECTURE (Dedicated Clean Section) ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 font-bold">
                  <Cpu size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-navy">Live FFmpeg Worker Pipeline</h2>
                  <p className="text-xs text-muted">Active Job: job_stremify_98a71</p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-auto rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                Transcoding at 60 FPS
              </span>
            </div>

            <div className="mt-6 space-y-3.5 text-xs">
              {/* Step 1 */}
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 font-bold text-xs">
                    1
                  </span>
                  <div>
                    <div className="font-bold text-navy text-xs">Ingest Source Video</div>
                    <div className="text-[11px] text-muted font-mono">lecture_4k_master.mp4 (1.8 GB)</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-600 font-bold">✓ Fetched from S3</span>
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between rounded-xl bg-cyan-50/60 p-3.5 border border-cyan-200">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500 text-white font-bold text-xs shadow-sm">
                    2
                  </span>
                  <div>
                    <div className="font-bold text-cyan-950 text-xs">FFmpeg Chunking Ladder</div>
                    <div className="text-[11px] text-slate-600">Generating 1080p, 720p, 480p, 360p</div>
                  </div>
                </div>
                <div className="h-2.5 w-24 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-4/5 bg-cyan-500 animate-pulse" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-xs">
                    3
                  </span>
                  <div>
                    <div className="font-bold text-navy text-xs">Generate Master Playlist</div>
                    <div className="text-[11px] text-muted font-mono">master.m3u8 + 480 .ts chunks</div>
                  </div>
                </div>
                <span className="text-xs text-blue-600 font-bold">Ready on CDN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTERACTIVE DEVELOPER API PLAYGROUND ═══════════════ */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
              <Terminal size={14} /> Developer Experience First
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Trigger Cloud Video Transcoding with One Clean API Call
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              No complex FFmpeg server clusters to configure or maintain. Point our API at your public video URL and receive adaptive HLS streams automatically.
            </p>
          </div>

          {/* Playground Box */}
          <div className="mt-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1624] shadow-xl">
            {/* Header Tabs */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
              <div className="flex items-center gap-2">
                {(["curl", "python", "node", "go"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                      activeLang === lang
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {lang === "curl" ? "cURL" : lang === "python" ? "Python" : lang === "node" ? "Node.js / TS" : "Go"}
                  </button>
                ))}
              </div>

              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-slate-700 transition"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto font-mono text-xs text-slate-200 leading-relaxed bg-[#0a111c]">
              <pre>
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ADAPTIVE HLS PLAYER SIMULATOR ═══════════════ */}
      <section className="py-16 bg-surface border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
                <Video size={14} /> Adaptive Bitrate Player
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Buffer-Free Playback on Any Screen and Bandwidth
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Stremify's player automatically switches resolution based on the user's live connection speed — guaranteeing instantaneous video start times and zero playback stutters.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                  <span>Sub-second first frame render time (&lt; 0.9s)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                  <span>Up to 60% bandwidth reduction compared to raw MP4 downloads</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                  <span>Native mobile browser support for Safari, Chrome, iOS & Android</span>
                </div>
              </div>
            </div>

            {/* Right side player mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="relative aspect-video rounded-xl bg-slate-950 flex flex-col justify-between p-4 overflow-hidden border border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="rounded bg-slate-900/80 px-2 py-0.5 text-cyan-400 font-mono text-[11px]">
                      HLS Adaptive Stream
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Buffer Health: 100%
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-900/60 hover:scale-105 transition"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                    </button>
                  </div>

                  {/* Player Controls */}
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-2/3 bg-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>04:12 / 12:40</span>
                      <div className="flex gap-1.5">
                        {(["auto", "1080p", "720p", "480p"] as const).map((res) => (
                          <button
                            key={res}
                            onClick={() => setBitrate(res)}
                            className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                              bitrate === res ? "bg-cyan-500 text-slate-950 font-bold" : "bg-slate-900 text-slate-400"
                            }`}
                          >
                            {res.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Chunk Telemetry Feed */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-[11px] font-mono text-muted space-y-1">
                  <div className="text-cyan-600 font-bold">HLS Segment Chunk Logger:</div>
                  <div className="text-navy">↳ segment_0041.ts (1080p, 2.0s) loaded in 14ms</div>
                  <div className="text-navy">↳ segment_0042.ts (1080p, 2.0s) loaded in 11ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES GRID ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600">
              API Infrastructure Features
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Engineered for Developer Speed and Platform Scale
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100/70 text-cyan-600 border border-cyan-200 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-muted shadow-sm">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-cyan-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-cyan-600 font-semibold">
                    <span>Inspect API schema</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.4),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Developer Ready
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
                Convert Once. Stream Anywhere.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Start transcoding your video catalog with high performance and zero buffering infrastructure today.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Request API Keys
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPLORE OTHER PRODUCTS ═══════════════ */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Explore Other Goognu Platforms
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-4 transition-all hover:border-cyan-500/40 hover:bg-white hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy group-hover:text-cyan-600 transition-colors">
                    {p.name}
                  </div>
                  <div className="truncate text-xs text-muted">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
