import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import PinnedProjects from './components/PinnedProjects';
import SkillsSection from './components/SkillsSection';
import ContributionGraph from './components/ContributionGraph';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactFooter from './components/ContactFooter';
import ThemeToggle from './components/ThemeToggle';
import { fetchGitHubProfile } from './services/githubApi';
import { GithubIcon } from './components/Icons';
import { 
  AlertCircle, 
  RefreshCw, 
  Info 
} from 'lucide-react';
import { PROFILE_INFO } from './data/profileData';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchGitHubProfile();
      setData(result);
    } catch (err) {
      setError(err.message || 'Unable to connect to GitHub API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Top Fixed / Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 px-4 sm:px-8 py-3 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-purple-500/40 p-0.5 bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-xs">
              <img
                src={PROFILE_INFO.avatarUrl}
                alt="Avatar"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Nihal Hussain <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400">/dev</span>
              </span>
            </div>
          </div>

          {/* Quick Section Nav (Desktop) */}
          <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#projects" className="px-2.5 py-1 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">Projects</a>
            <a href="#skills" className="px-2.5 py-1 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">Skills</a>
            <a href="#activity" className="px-2.5 py-1 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">Activity</a>
            <a href="#achievements" className="px-2.5 py-1 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">Achievements</a>
            <a href="#experience" className="px-2.5 py-1 rounded-md hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">Experience</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10">
        {/* Rate limit advisory banner if applicable */}
        {data?.isRateLimited && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs flex items-center justify-between gap-3 animate-in fade-in duration-300">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0 text-amber-500 dark:text-amber-400" />
              <span>
                GitHub API rate limit reached for unauthenticated client. Displaying verified cached profile statistics.
              </span>
            </div>
            <button
              onClick={loadData}
              className="px-2.5 py-1 rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-800 dark:text-amber-200 text-xs font-semibold transition-colors cursor-pointer shrink-0"
            >
              Retry Live Sync
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-6 animate-pulse">
            <div className="h-48 rounded-2xl bg-slate-200 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-800" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-800" />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="h-64 rounded-xl bg-slate-200 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-800" />
              <div className="h-64 rounded-xl bg-slate-200 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-800" />
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-6 rounded-2xl glass-panel border border-rose-500/30 bg-rose-50 dark:bg-rose-950/20 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Connection to GitHub API Encountered an Error</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">{error}</p>
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          </div>
        )}

        {/* Content Rendered */}
        {!loading && (
          <>
            {/* Header Section */}
            <Header user={data?.user} isRateLimited={data?.isRateLimited} />

            {/* Statistics Grid */}
            <StatsGrid
              user={data?.user}
              repos={data?.repos}
              totalStars={data?.totalStars}
              totalForks={data?.totalForks}
              isRateLimited={data?.isRateLimited}
            />

            {/* Pinned & Featured Repositories */}
            <div id="projects">
              <PinnedProjects repos={data?.repos} />
            </div>

            {/* Technical Skills Section */}
            <div id="skills">
              <SkillsSection />
            </div>

            {/* Contribution Graph & Activity Matrix */}
            <div id="activity">
              <ContributionGraph />
            </div>

            {/* Competitive Programming & Achievements */}
            <div id="achievements">
              <AchievementsSection />
            </div>

            {/* Verified Certifications */}
            <div id="certifications">
              <CertificationsSection />
            </div>

            {/* Industry Experience & Academic Background */}
            <div id="experience">
              <ExperienceSection />
            </div>

            {/* Contact & Footer */}
            <ContactFooter />
          </>
        )}
      </main>
    </div>
  );
}
