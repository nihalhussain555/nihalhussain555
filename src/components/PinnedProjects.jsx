import React, { useState } from 'react';
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS } from '../data/profileData';

export default function PinnedProjects({ repos }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const getRepoStars = (repoName) => {
    if (!Array.isArray(repos)) return 0;
    const match = repos.find(r => r.name.toLowerCase() === repoName.toLowerCase().replace(/[-_]/g, ''));
    if (match) return match.stargazers_count;
    const exact = repos.find(r => r.name.toLowerCase() === repoName.toLowerCase());
    return exact ? exact.stargazers_count : 3;
  };

  const filteredProjects = FEATURED_PROJECTS.filter(project => {
    if (activeFilter === 'flagship') return project.isFlagship;
    if (activeFilter === 'ai') return project.tags.some(t => ['Python', 'FastAPI', 'Multi-Agent', 'Machine Learning', 'NLP', 'RAG', 'AI Agents'].includes(t));
    if (activeFilter === 'fullstack') return project.tags.some(t => ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'].includes(t));
    return true;
  });

  return (
    <section className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Pinned & Featured Repositories
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Autonomous AI agents, production RAG pipelines, and full-stack systems
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 self-start sm:self-auto text-xs font-semibold">
          {[
            { id: 'all', label: 'All' },
            { id: 'flagship', label: '⭐ Flagship' },
            { id: 'ai', label: '🤖 AI & Agents' },
            { id: 'fullstack', label: '🌐 Full-Stack' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project) => {
          const stars = getRepoStars(project.repoName);

          return (
            <div
              key={project.id}
              className={`relative flex flex-col justify-between p-5 rounded-xl glass-card transition-all ${
                project.isFlagship
                  ? 'border-purple-500/40 bg-white/95 dark:bg-gradient-to-br dark:from-purple-950/20 dark:via-slate-900/60 dark:to-slate-950/60 shadow-md'
                  : 'border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.isFlagship && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                          <Sparkles className="w-2.5 h-2.5" /> Flagship
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Stars badge */}
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-xs text-amber-500 dark:text-amber-400 shrink-0 font-bold">
                    <Star className="w-3 h-3 fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400" />
                    <span className="text-slate-700 dark:text-slate-300">{stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                {project.highlights && (
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom footer: Tech Stack + Links */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 space-y-3">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Language indicator & Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span>{project.language}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-500/15 hover:bg-purple-500/25 text-purple-700 dark:text-purple-300 border border-purple-500/30 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
