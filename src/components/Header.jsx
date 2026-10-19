import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Mail, 
  Phone, 
  ExternalLink, 
  Globe, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_INFO } from '../data/profileData';

export default function Header({ user, isRateLimited }) {
  const avatarUrl = user?.avatar_url || PROFILE_INFO.avatarUrl;
  const name = user?.name || PROFILE_INFO.name;
  const username = user?.login || PROFILE_INFO.username;

  return (
    <header className="relative w-full rounded-2xl p-6 sm:p-8 glass-panel overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/60 shadow-xl transition-all">
      {/* Background ambient subtle gradient */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-16 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
        {/* Profile Avatar with status */}
        <div className="relative shrink-0 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-lg glow-purple">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover rounded-xl bg-slate-900"
              loading="eager"
            />
          </div>
          {/* Active status indicator */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900/90 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Work</span>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {name}
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
              <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" /> @{username}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
              <CheckCircle2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> LeetCode Knight (1924)
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300">
            {PROFILE_INFO.headline}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {PROFILE_INFO.bio}
          </p>

          {/* Academic & Location Meta */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 pt-1 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>
                <b>KIT Coimbatore</b> (B.E. CSE, 2024–2028)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>
                CGPA: <b className="text-amber-600 dark:text-amber-400">8.42 / 10.0</b>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{PROFILE_INFO.location}</span>
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-3">
            <a
              href={PROFILE_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Portfolio</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <span>{PROFILE_INFO.email}</span>
            </a>

            <a
              href={`tel:${PROFILE_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{PROFILE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
