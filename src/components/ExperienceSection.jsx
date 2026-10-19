import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { WORK_EXPERIENCE, PROFILE_INFO } from '../data/profileData';

export default function ExperienceSection() {
  return (
    <section className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Briefcase className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Industry Experience & Education
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Practical AI development and computer science academic foundation
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Work Experience */}
        {WORK_EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl glass-card border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                    {exp.company}
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                  {exp.location}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap gap-1.5">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Education Card */}
        <div className="p-5 rounded-xl glass-card border border-purple-500/20 bg-white/90 dark:bg-gradient-to-br dark:from-purple-950/20 dark:via-slate-900/50 dark:to-slate-950/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  B.E. in Computer Science & Engineering
                </h3>
                <div className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                  {PROFILE_INFO.college}
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                {PROFILE_INFO.period}
              </span>
            </div>

            <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">Academic Standing:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  CGPA: {PROFILE_INFO.cgpa}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Coursework focus: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Machine Learning, and Computer Networks.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Coimbatore, Tamil Nadu</span>
            <span className="text-purple-700 dark:text-purple-400 font-semibold">Pre-Final Year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
