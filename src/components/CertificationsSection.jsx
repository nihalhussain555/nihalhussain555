import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/profileData';

export default function CertificationsSection() {
  return (
    <section className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Validated technical coursework in Generative AI, Claude Code, Python, and Machine Learning
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${cert.color}`}>
                  {cert.badge}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle className="w-3 h-3" /> Verified
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {cert.desc}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{cert.issuer}</span>
              <span className="text-purple-600 dark:text-purple-400 text-xs font-semibold">Credential Active</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
