import Link from "next/link"
import { NavGithubButton } from "@/components/landing/github-star-button"

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-600">
            <svg
              className="h-4 w-4 text-white"
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
          <span className="font-semibold text-white tracking-tight">SentrySearch</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-base text-zinc-400 hover:text-zinc-200 transition-colors hidden sm:block"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="text-base text-zinc-400 hover:text-zinc-200 transition-colors hidden sm:block"
          >
            Features
          </Link>
          <NavGithubButton />
          <Link
            href="https://github.com/ssrajadh/sentrysearch#getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-zinc-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
