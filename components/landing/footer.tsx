import Link from "next/link"
import { GithubIcon } from "@/components/landing/github-icon"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-600">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-white">SentrySearch</span>
            </div>
            <p className="text-xs text-zinc-600">Semantic search for video footage.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link
              href="https://github.com/ssrajadh/sentrysearch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://github.com/ssrajadh/sentrysearch#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/ssrajadh/sentrysearch/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Issues
            </Link>
            <Link
              href="https://clawhub.ai/ssrajadh/natural-language-video-search"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              OpenClaw
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.05] pt-8 text-center text-xs text-zinc-700">
          MIT License · Built with Gemini Embedding 2 and Qwen3-VL-Embedding · ChromaDB · ffmpeg
        </div>
      </div>
    </footer>
  )
}
