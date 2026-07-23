"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa6";

const GITHUB_USERNAME = "sumitsdeore";

type Repo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
};

type GitHubUser = {
  avatar_url: string;
  name: string;
  bio: string | null;
  public_repos: number;
  html_url: string;
};

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Java: "#E76F00",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3572A5",
  Rust: "#DEA584",
  Go: "#00ADD8",
  Shell: "#89fa04",
};

export function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`),
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          setUser(userData);
          setRepos(Array.isArray(reposData) ? reposData : []);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Open Source"
        title="What I've been building on GitHub."
        description="My recent repositories and activity, fetched live from the GitHub API."
      />

      {loading ? (
        <div className="mt-12 space-y-6">
          {/* Skeleton Banner */}
          <div className="h-24 w-full rounded-3xl bg-white/[0.02] border border-white/5 animate-pulse" />
          {/* Skeleton Repos */}
          <div className="grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 w-full rounded-2xl bg-white/[0.02] border border-white/5 animate-pulse" />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-12 space-y-6">
          {/* Profile Banner Card */}
          {user && (
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] p-6 backdrop-blur-md flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img
                  src={user.avatar_url}
                  alt={user.name || GITHUB_USERNAME}
                  className="h-16 w-16 rounded-full border border-white/10"
                />
                <div>
                  <h3 className="font-display text-lg text-white uppercase tracking-wider">
                    {user.name || GITHUB_USERNAME}
                  </h3>
                  <p className="text-xs text-muted mt-1 max-w-md">
                    {user.bio || "AI Developer and Software Engineer."}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-muted bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {user.public_repos} Public Repositories
                  </span>
                </div>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white text-black px-5 py-2 text-xs font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <FaGithub size={14} />
                Visit GitHub
              </a>
            </div>
          )}

          {/* Repositories Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {repos.map((repo) => {
              const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] || "#ffffff") : "#ffffff";
              return (
                <Reveal key={repo.name}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo block relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.01]"
                    style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = langColor;
                      e.currentTarget.style.boxShadow = `0 0 20px ${langColor}12`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex items-center gap-2 font-display text-sm text-white group-hover/repo:text-white transition-colors">
                        <FaGithub size={14} style={{ color: langColor }} /> {repo.name}
                      </span>

                      {repo.language && (
                        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.02] border border-white/5 px-2.5 py-1 text-[10px] text-muted">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: langColor }}
                          />
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted group-hover/repo:text-white/80 transition-colors">
                      {repo.description ?? "No description provided."}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/5 flex gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <FaStar size={11} className="text-[#FFB300]" /> {repo.stargazers_count} stars
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch size={11} className="text-[#2496ED]" /> {repo.forks_count} forks
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
