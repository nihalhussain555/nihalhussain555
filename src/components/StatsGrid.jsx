import React from 'react';
import { 
  FolderGit2, 
  Users, 
  Star, 
  Flame, 
  Code2, 
  Trophy 
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export default function StatsGrid({ user, repos, totalStars, totalForks, isRateLimited }) {
  const repoCount = user?.public_repos ?? 17;
  const followersCount = user?.followers ?? 4;
  const followingCount = user?.following ?? 2;
  const starsCount = totalStars ?? 26;

  const statCards = [
    {
      label: 'Repositories',
      value: repoCount,
      subtext: 'Public projects & tools',
      icon: FolderGit2,
      color: 'text-purple-600 dark:text-purple-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-purple-500/30'
    },
    {
      label: 'Total Stars',
      value: starsCount,
      subtext: 'Earned on GitHub',
      icon: Star,
      color: 'text-amber-500 dark:text-amber-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-amber-500/30'
    },
    {
      label: 'Network',
      value: `${followersCount} / ${followingCount}`,
      subtext: 'Followers / Following',
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-blue-500/30'
    },
    {
      label: 'LeetCode Rating',
      value: '1924',
      subtext: 'Knight • Top 4.9% Global',
      icon: Trophy,
      color: 'text-orange-500 dark:text-orange-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-orange-500/30'
    },
    {
      label: 'DSA Solved',
      value: PROFILE_INFO.stats.totalProblems,
      subtext: 'Algorithmic mastery',
      icon: Code2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-emerald-500/30'
    },
    {
      label: 'Consistency Streak',
      value: PROFILE_INFO.stats.dailyStreak,
      subtext: 'Daily problem solving',
      icon: Flame,
      color: 'text-rose-600 dark:text-rose-400',
      bgGlow: 'bg-white/90 dark:bg-slate-900/50',
      borderColor: 'border-slate-200 dark:border-rose-500/30'
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className={`relative overflow-hidden p-4 rounded-xl glass-card border ${card.borderColor} ${card.bgGlow} shadow-sm flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate">
                  {card.label}
                </span>
                <Icon className={`w-4 h-4 ${card.color} shrink-0`} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {card.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {card.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
