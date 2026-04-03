import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/landing/github-icon"

const terminalLines = [
  { type: "prompt", text: "sentrysearch search \"red truck running a stop sign\"" },
  { type: "blank", text: "" },
  { type: "result", rank: "#1", score: "0.87", file: "front_2024-01-15_14-30.mp4", time: "02:15–02:45" },
  { type: "result", rank: "#2", score: "0.74", file: "left_2024-01-15_14-30.mp4", time: "02:10–02:40" },
  { type: "result", rank: "#3", score: "0.61", file: "front_2024-01-20_09-15.mp4", time: "00:30–01:00" },
  { type: "blank", text: "" },
  { type: "saved", text: "Saved clip: ./match_front_2024-01-15_02m15s-02m45s.mp4" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/8 blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Semantic video search — no transcription needed
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Find anything in your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 bg-clip-text text-transparent">
            security footage
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl text-lg text-zinc-400 sm:text-xl">
          Type what you&apos;re looking for. SentrySearch finds the moment and trims the clip — using native video embeddings, no frame captioning, no transcription.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://github.com/ssrajadh/sentrysearch#getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-100"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/ssrajadh/sentrysearch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>

        {/* Terminal demo */}
        <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0f] shadow-2xl shadow-black/50">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-zinc-500 font-mono">terminal</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-sm">
            {terminalLines.map((line, i) => {
              if (line.type === "blank") return <div key={i} className="h-3" />

              if (line.type === "prompt") {
                return (
                  <div key={i} className="flex items-start gap-2 text-left">
                    <span className="text-blue-400 shrink-0">$</span>
                    <span className="text-zinc-200">{line.text}</span>
                  </div>
                )
              }

              if (line.type === "result") {
                return (
                  <div key={i} className="mt-1 flex items-center gap-3 text-left pl-4">
                    <span className="text-zinc-500">{line.rank}</span>
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-xs text-emerald-400">
                      {line.score}
                    </span>
                    <span className="text-zinc-300">{line.file}</span>
                    <span className="text-zinc-500">@</span>
                    <span className="text-zinc-400">{line.time}</span>
                  </div>
                )
              }

              if (line.type === "saved") {
                return (
                  <div key={i} className="mt-1 pl-4 text-left">
                    <span className="text-emerald-400">{line.text}</span>
                  </div>
                )
              }
            })}
            <span className="mt-3 inline-block h-4 w-2 animate-pulse bg-zinc-400" />
          </div>
        </div>

        {/* Social proof / stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Works with any .mp4 or .mov footage
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Gemini API or fully local
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            No cloud upload required
          </span>
        </div>
      </div>
    </section>
  )
}
