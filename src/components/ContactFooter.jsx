import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Send, 
  ArrowUp, 
  Globe, 
  Phone, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_INFO } from '../data/profileData';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-8 pt-8 pb-12 border-t border-slate-200 dark:border-slate-800/80 space-y-8">
      {/* Contact Banner */}
      <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/30 bg-white/90 dark:bg-gradient-to-r dark:from-purple-950/40 dark:via-indigo-950/30 dark:to-slate-900/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Open to Opportunities</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Extraordinary Together
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Seeking software engineering internships, AI/ML engineering positions, and impactful open-source collaborations.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800/90 dark:hover:bg-slate-700/90 dark:text-white dark:border-slate-700 transition-all cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied Email!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PROFILE_INFO.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </a>
        </div>
      </div>

      {/* Links & Attribution */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn
          </a>
          <a
            href={PROFILE_INFO.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" /> Live Portfolio
          </a>
          <a
            href={`tel:${PROFILE_INFO.phone}`}
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" /> +91 9489870217
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span>Designed & Built with precision by <b>Nihal Hussain</b></span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
