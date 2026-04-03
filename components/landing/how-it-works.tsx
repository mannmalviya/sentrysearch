const steps = [
  {
    number: "01",
    title: "Index your footage",
    description:
      "Point SentrySearch at a directory of video files. It splits them into overlapping chunks, preprocesses each one, and stores video embeddings in a local ChromaDB database.",
    command: "sentrysearch index /path/to/footage",
    detail: "12 chunks indexed from 3 files in ~45s",
  },
  {
    number: "02",
    title: "Search in plain English",
    description:
      "Describe what you're looking for in natural language. Your query is embedded into the same vector space as the video chunks and matched by similarity — no keywords needed.",
    command: 'sentrysearch search "red truck at a stop sign"',
    detail: "Top match: 0.87 similarity",
  },
  {
    number: "03",
    title: "Get your clip",
    description:
      "The best matching segment is automatically trimmed from the original file and saved as a standalone clip. Optionally burn speed and location data for Tesla footage.",
    command: "→ match_front_2024-01-15_02m15s-02m45s.mp4",
    detail: "30-second clip saved",
    isOutput: true,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-medium text-blue-400 uppercase tracking-widest">
          How it works
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          From footage to clip in three steps
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          No configuration, no labeling, no ML expertise required. Install, index, search.
        </p>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 lg:text-right" style={{ textAlign: i % 2 === 1 ? "left" : undefined }}>
                <div
                  className={`mb-4 inline-flex items-center gap-2 ${
                    i % 2 === 1 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <span className="text-5xl font-bold text-white/5">{step.number}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Center node */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09090b] text-sm font-bold text-zinc-400 z-10">
                  {i + 1}
                </div>
              </div>

              {/* Terminal card */}
              <div className="flex-1">
                <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0f]">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="px-5 py-4 font-mono text-sm">
                    <div className="flex items-start gap-2">
                      {!step.isOutput && (
                        <span className="text-blue-400 shrink-0">$</span>
                      )}
                      <span className={step.isOutput ? "text-emerald-400" : "text-zinc-200"}>
                        {step.command}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-zinc-600">{step.detail}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
