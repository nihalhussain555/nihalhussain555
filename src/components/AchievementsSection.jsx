import React from 'react';
import { 
  Trophy, 
  ExternalLink, 
  Sparkles
} from 'lucide-react';
import { COMPETITIVE_STATS } from '../data/profileData';

export default function AchievementsSection() {
  return (
    <section className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Trophy className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Competitive Programming & Honors
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            2,850+ algorithmic problems solved • 310+ contests • 680+ day streak
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPETITIVE_STATS.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-4 rounded-xl glass-card border ${item.border} bg-white/90 dark:bg-slate-900/50 shadow-sm flex flex-col justify-between transition-all cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {item.platform}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight my-1">
                {item.rating}
              </div>

              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                {item.highlight}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-200 dark:border-slate-800/40 text-xs text-slate-500 dark:text-slate-400">
              <span>{item.solved}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
          </a>
        ))}
      </div>

      {/* Hackathon Spotlight Banner */}
      <div className="p-4 sm:p-5 rounded-xl border border-purple-500/30 bg-white/90 dark:bg-gradient-to-r dark:from-purple-950/40 dark:via-indigo-950/30 dark:to-slate-900/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 shrink-0">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                36-Hour Innovation Challenge Finalist
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                Finalist Award
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
              Collaborated in a high-intensity 36-hour hackathon sprint to engineer an AI-powered food waste tracking and reduction solution utilizing computer vision and consumption forecasting.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <a
            href="https://github.com/nihalhussain555/Ai-Powered-Food-Waste-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/15 hover:bg-purple-500/25 text-purple-700 dark:text-purple-200 border border-purple-500/30 transition-all cursor-pointer"
          >
            <span>View Solution</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
