const geminiItems = [
  "~$2.84 per hour of footage indexed",
  "1 frame/sec processed by the API",
  "Still-frame skipping cuts idle footage cost",
  "Search queries are negligible (text only)",
  "Set a spending cap at aistudio.google.com/billing",
]

const localItems = [
  "Completely free after hardware",
  "Qwen3-VL-Embedding 8B or 2B model",
  "Auto-selected based on your GPU / RAM",
  "18 GB+ VRAM → 8B (full precision)",
  "8–16 GB VRAM → 8B (4-bit quantized)",
]

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-medium text-amber-400 uppercase tracking-widest">
          Cost
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Pay as you go — or not at all
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          The Gemini backend is the default and offers the best search quality. The local backend is free and private.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Gemini */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-[#09090b] p-8">
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
              Recommended
            </div>
            <h3 className="text-xl font-bold text-white">Gemini API</h3>
            <p className="mt-1 text-zinc-400 text-sm">Best search quality, fastest indexing</p>
          </div>

          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">~$2.84</span>
            <span className="text-zinc-400">/ hour of footage</span>
          </div>

          <ul className="space-y-3">
            {geminiItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-500 leading-relaxed">
              <span className="font-medium text-zinc-400">Cost breakdown:</span> 1 hour = 3,600 frames × $0.00079 ≈ $2.84. Still-frame skipping can significantly reduce this for Sentry Mode footage with long idle periods.
            </p>
          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Local */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
              Free
            </div>
            <h3 className="text-xl font-bold text-white">Local Model</h3>
            <p className="mt-1 text-zinc-400 text-sm">Private, offline, no API key needed</p>
          </div>

          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-zinc-400">/ hour of footage</span>
          </div>

          <ul className="space-y-3">
            {localItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-500 leading-relaxed">
              <span className="font-medium text-zinc-400">Speed:</span> ~2–5s per chunk on an A100, ~3–8s on a T4. First run downloads the model (~16 GB for 8B, ~4 GB for 2B).
            </p>
          </div>
        </div>
      </div>

      {/* Backend note */}
      <p className="mt-6 text-center text-sm text-zinc-600">
        Backends are isolated — each gets its own index. Switch anytime by re-indexing with a different backend.
      </p>
    </section>
  )
}
