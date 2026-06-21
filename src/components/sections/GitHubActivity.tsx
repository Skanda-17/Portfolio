'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, GitFork, Users, BookMarked } from 'lucide-react'
import { profile } from '@/lib/profile'
import SectionHeading from '@/components/ui/SectionHeading'
import { GithubIcon } from '@/components/ui/BrandIcons'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

/** Aggregated coding stats from the GitHub REST API. */
export default function GitHubActivity() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [error, setError] = useState(false)
  const username = profile.githubUsername

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ])
        if (!userRes.ok || !repoRes.ok) throw new Error('GitHub API error')
        const userData: GitHubUser = await userRes.json()
        const repoData: Repo[] = await repoRes.json()
        if (!cancelled) {
          setUser(userData)
          setRepos(Array.isArray(repoData) ? repoData : [])
        }
      } catch {
        if (!cancelled) setError(true)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  // Derive top languages from owned (non-fork) repositories.
  const languageCounts = repos
    .filter((r) => !r.fork && r.language)
    .reduce<Record<string, number>>((acc, r) => {
      acc[r.language as string] = (acc[r.language as string] ?? 0) + 1
      return acc
    }, {})
  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
  const maxLang = topLanguages[0]?.[1] ?? 1

  // Repository highlights: pinned repos first (in configured order), then the
  // most-starred remaining owned repos to fill the list.
  const ownedRepos = repos.filter((r) => !r.fork)

  const pinned = profile.pinnedRepos
    .map((cfg) =>
      ownedRepos.find((r) =>
        cfg.keywords.some((kw) => r.name.toLowerCase().includes(kw)),
      ),
    )
    .filter((r): r is Repo => Boolean(r))

  const pinnedIds = new Set(pinned.map((r) => r.id))
  const rest = ownedRepos
    .filter((r) => !pinnedIds.has(r.id))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)

  const highlights = [...pinned, ...rest].slice(0, 6)

  const totalStars = repos
    .filter((r) => !r.fork)
    .reduce((sum, r) => sum + r.stargazers_count, 0)

  const statCards = [
    { label: 'Repositories', value: user?.public_repos ?? '—', icon: BookMarked },
    { label: 'Followers', value: user?.followers ?? '—', icon: Users },
    { label: 'Total Stars', value: error ? '—' : totalStars, icon: Star },
  ]

  return (
    <section id="github" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="GitHub Activity"
        title="Open-Source Footprint"
        subtitle="Live coding statistics pulled directly from the GitHub API."
      />

      {error && (
        <p className="mb-6 text-center text-sm text-zinc-500">
          Live stats are temporarily unavailable (GitHub API rate limit). Visit
          the{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-cyan hover:underline"
          >
            profile directly
          </a>
          .
        </p>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {statCards.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className="glass flex flex-col items-center rounded-2xl p-5 text-center"
            >
              <Icon className="h-5 w-5 text-brand-cyan" />
              <p className="mt-2 font-display text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-zinc-400">
                {s.label}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Top languages */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold text-white">
            Top Languages
          </h3>
          <div className="mt-4 space-y-3">
            {topLanguages.length > 0 ? (
              topLanguages.map(([lang, count]) => (
                <div key={lang}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-zinc-200">{lang}</span>
                    <span className="text-zinc-500">{count} repos</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / maxLang) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-brand-gradient"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-500">No language data available.</p>
            )}
          </div>
        </div>

        {/* Repository highlights */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold text-white">
            Repository Highlights
          </h3>
          <div className="mt-4 space-y-3">
            {highlights.length > 0 ? (
              highlights.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-brand-cyan/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{repo.name}</span>
                    <span className="flex items-center gap-3 text-xs text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                      </span>
                    </span>
                  </div>
                  {repo.description && (
                    <p className="mt-1 line-clamp-2 text-xs text-zinc-400">
                      {repo.description}
                    </p>
                  )}
                </a>
              ))
            ) : (
              <p className="text-sm text-zinc-500">No repositories to show yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Contribution graph (third-party rendering of the public profile) */}
      <div className="glass mt-6 overflow-x-auto rounded-2xl p-6">
        <div className="mb-4 flex items-center gap-2">
          <GithubIcon className="h-5 w-5 text-brand-cyan" />
          <h3 className="font-display text-lg font-semibold text-white">
            Contribution Graph
          </h3>
        </div>
        <Image
          src={`https://ghchart.rshah.org/38bdf8/${username}`}
          alt={`${username} GitHub contribution graph`}
          width={880}
          height={140}
          unoptimized
          className="w-full min-w-[640px]"
        />
      </div>
    </section>
  )
}
