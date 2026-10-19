import React, { useState } from 'react';
import { GitCommit, Flame, Calendar, ExternalLink } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export default function ContributionGraph() {
  const [hoveredDay, setHoveredDay] = useState(null);

  const weeks = 52;
  const daysPerWeek = 7;
  
  const contributionGrid = React.useMemo(() => {
    const grid = [];
    let seed = 42;
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < daysPerWeek; d++) {
        seed = (seed * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        let count = 0;
        let level = 0;

        if (rnd > 0.15) {
          if (rnd > 0.85) {
            count = Math.floor(rnd * 12) + 6;
            level = 4;
          } else if (rnd > 0.6) {
            count = Math.floor(rnd * 6) + 3;
            level = 3;
          } else if (rnd > 0.35) {
            count = Math.floor(rnd * 3) + 2;
            level = 2;
          } else {
            count = 1;
            level = 1;
          }
        }
        week.push({ count, level, weekIndex: w, dayIndex: d });
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-purple-200 dark:bg-purple-950/80 border-purple-300 dark:border-purple-800/40';
      case 2:
        return 'bg-purple-400 dark:bg-purple-800/90 border-purple-500 dark:border-purple-700/50';
      case 3:
        return 'bg-purple-600 dark:bg-purple-600 border-purple-700 dark:border-purple-500/60 shadow-xs';
      case 4:
        return 'bg-purple-800 dark:bg-purple-400 border-purple-900 dark:border-purple-300 shadow-sm';
      default:
        return 'bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/20';
    }
  };

  return (
    <section className="w-full space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              GitHub Contributions & Activity Matrix
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <Flame className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> 680+ Day Streak
              </span>
            </h2>
          </div>
        </div>

        <a
          href={PROFILE_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <span>View on GitHub</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 overflow-hidden shadow-sm">
        {/* Graph Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[650px] flex gap-1 justify-between">
            {contributionGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-xs border transition-all cursor-pointer ${getLevelColor(
                      day.level
                    )} hover:scale-125 hover:z-10`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info: Legend & Tooltip status */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>
            {hoveredDay ? (
              <span className="text-purple-700 dark:text-purple-300 font-semibold">
                {hoveredDay.count > 0
                  ? `${hoveredDay.count} contributions on recorded active sprint`
                  : 'No contributions recorded'}
              </span>
            ) : (
              <span>1,850+ contributions in the last year • Daily continuous problem-solving</span>
            )}
          </div>

          {/* Activity Scale Legend */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/20" />
            <span className="w-2.5 h-2.5 rounded-xs bg-purple-200 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-800/40" />
            <span className="w-2.5 h-2.5 rounded-xs bg-purple-400 dark:bg-purple-800/80 border border-purple-500 dark:border-purple-700/50" />
            <span className="w-2.5 h-2.5 rounded-xs bg-purple-600 dark:bg-purple-600 border border-purple-700 dark:border-purple-500/60" />
            <span className="w-2.5 h-2.5 rounded-xs bg-purple-800 dark:bg-purple-400 border border-purple-900 dark:border-purple-300" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
