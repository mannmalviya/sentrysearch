const steps = [
  {
    step: "1",
    title: "Install",
    lines: [
      { text: "# Install uv (fast Python package manager)", dim: true },
      { text: "curl -LsSf https://astral.sh/uv/install.sh | sh" },
      { text: "" },
      { text: "# Clone and install SentrySearch", dim: true },
      { text: "git clone https://github.com/ssrajadh/sentrysearch.git" },
      { text: "cd sentrysearch && uv tool install ." },
    ],
  },
  {
    step: "2",
    title: "Configure",
    lines: [
      { text: "# Set up your Gemini API key (or skip for local)", dim: true },
      { text: "sentrysearch init" },
      { text: "" },
      { text: "Enter your Gemini API key: ****", prompt: false, output: true },
      { text: "Validating API key...", prompt: false, output: true },
      { text: "Setup complete. Ready to index footage.", prompt: false, success: true },
    ],
  },
  {
    step: "3",
    title: "Index & Search",
    lines: [
      { text: "sentrysearch index /path/to/footage" },
      { text: "Indexed 12 chunks from 3 files.", prompt: false, output: true },
      { text: "" },
      { text: 'sentrysearch search "person in red jacket"' },
      { text: "#1 [0.91] cam3_2024-03-10.mp4 @ 04:20–04:50", prompt: false, output: true },
      { text: "Saved clip: ./match_cam3_04m20s-04m50s.mp4", prompt: false, success: true },
    ],
  },
]

function CodeLine({
  line,
}: {
  line: { text: string; dim?: boolean; output?: boolean; success?: boolean; prompt?: boolean }
}) {
  if (line.text === "") return <div className="h-3" />

  const isPrompt = line.prompt !== false && !line.output && !line.success

  return (
    <div className="flex items-start gap-2">
      {isPrompt && <span className="shrink-0 text-blue-400 select-none">$</span>}
      {!isPrompt && <span className="shrink-0 w-3.5 select-none" />}
      <span
        className={
          line.dim
            ? "text-zinc-600"
            : line.success
              ? "text-emerald-400"
              : line.output
                ? "text-zinc-400"
                : "text-zinc-200"
        }
      >
        {line.text}
      </span>
    </div>
  )
}

export function QuickStart() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-medium text-emerald-400 uppercase tracking-widest">
          Quick start
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Up and running in minutes
        </h2>
        <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
          Three commands to go from zero to searching hours of footage.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((block) => (
          <div key={block.step} className="flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d0d0f]">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-300">
                {block.step}
              </div>
              <span className="text-sm font-medium text-zinc-300">{block.title}</span>
              {/* Traffic lights */}
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
            </div>
            {/* Code */}
            <div className="flex-1 px-5 py-4 font-mono text-sm leading-relaxed">
              {block.lines.map((line, i) => (
                <CodeLine key={i} line={line} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Local model note */}
      <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] px-6 py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 shrink-0 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
            </svg>
            <span className="text-sm font-medium text-zinc-300">No API key? Use the local model instead.</span>
          </div>
          <code className="rounded bg-white/[0.05] px-3 py-1 font-mono text-xs text-amber-300">
            uv tool install &quot;.[local]&quot; &amp;&amp; sentrysearch index /footage --backend local
          </code>
        </div>
      </div>
    </section>
  )
}
