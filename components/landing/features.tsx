const features = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: "Core",
    title: "True semantic search",
    description:
      "Text queries are matched directly to video chunks in the same vector space — no transcription, no frame captioning, no text middleman. A 30-second clip is a single embedding.",
    accent: "blue",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: "Flexibility",
    title: "Cloud or fully local",
    description:
      "Use Gemini Embedding 2 via API for best quality, or run a Qwen3-VL-Embedding model entirely on-device. Each backend gets its own isolated index — they can't mix.",
    accent: "violet",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    label: "Output",
    title: "Automatic clip trimming",
    description:
      "The best-matching segment is extracted from the original file using ffmpeg and saved as a standalone clip. Use --save-top N to export multiple matches at once.",
    accent: "emerald",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
      </svg>
    ),
    label: "Tesla",
    title: "HUD overlay for Tesla footage",
    description:
      "Burn speed, GPS location, and timestamps directly onto trimmed clips from Tesla dashcam files. Reverse geocodes to city and road name via OpenStreetMap.",
    accent: "red",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Performance",
    title: "Smart still-frame skipping",
    description:
      "Chunks with no meaningful visual change — parked cars, empty hallways — are detected via JPEG size comparison and skipped entirely. Cuts both cost and indexing time.",
    accent: "amber",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M12 9v6" />
      </svg>
    ),
    label: "Efficiency",
    title: "Overlapping chunks + preprocessing",
    description:
      "Footage is split into overlapping windows so events near boundaries are always captured. Each chunk is downscaled to 480p at 5fps before embedding — 95% smaller payloads.",
    accent: "sky",
  },
]

const accentClasses: Record<string, { icon: string; label: string; border: string }> = {
  blue: {
    icon: "text-blue-400 bg-blue-500/10",
    label: "text-blue-400 bg-blue-500/10",
    border: "hover:border-blue-500/20",
  },
  violet: {
    icon: "text-violet-400 bg-violet-500/10",
    label: "text-violet-400 bg-violet-500/10",
    border: "hover:border-violet-500/20",
  },
  emerald: {
    icon: "text-emerald-400 bg-emerald-500/10",
    label: "text-emerald-400 bg-emerald-500/10",
    border: "hover:border-emerald-500/20",
  },
  red: {
    icon: "text-red-400 bg-red-500/10",
    label: "text-red-400 bg-red-500/10",
    border: "hover:border-red-500/20",
  },
  amber: {
    icon: "text-amber-400 bg-amber-500/10",
    label: "text-amber-400 bg-amber-500/10",
    border: "hover:border-amber-500/20",
  },
  sky: {
    icon: "text-sky-400 bg-sky-500/10",
    label: "text-sky-400 bg-sky-500/10",
    border: "hover:border-sky-500/20",
  },
}

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-medium text-violet-400 uppercase tracking-widest">
          Features
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Everything you need, nothing you don&apos;t
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          Built for practitioners who need fast, reliable retrieval over real-world footage — not a research demo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const accent = accentClasses[feature.accent]
          return (
            <div
              key={feature.title}
              className={`group rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-200 hover:bg-white/[0.04] ${accent.border}`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent.icon}`}>
                  {feature.icon}
                </div>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${accent.label}`}>
                  {feature.label}
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
