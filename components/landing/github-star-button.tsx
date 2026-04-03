import Link from "next/link"
import { GithubIcon } from "@/components/landing/github-icon"

const REPO = "ssrajadh/sentrysearch"
const REPO_URL = "https://github.com/ssrajadh/sentrysearch"

async function fetchStars(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.stargazers_count ?? null
  } catch {
    return null
  }
}

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
  return String(n)
}

// Variant used in the nav bar
export async function NavGithubButton() {
  const stars = await fetchStars()

  return (
    <Link
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors"
    >
      <GithubIcon className="h-5 w-5" />
      {stars !== null && (
        <span className="flex items-center gap-1 text-sm text-zinc-400">
          <svg className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {formatStars(stars)}
        </span>
      )}
    </Link>
  )
}

// Variant used in the hero CTA
export async function HeroGithubButton() {
  const stars = await fetchStars()

  return (
    <Link
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
    >
      <GithubIcon className="h-4 w-4" />
      View on GitHub
      {stars !== null && (
        <span className="flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-400">
          <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {formatStars(stars)}
        </span>
      )}
    </Link>
  )
}
