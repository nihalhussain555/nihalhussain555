import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      type="button"
      className="relative p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/60 hover:bg-slate-700/50 dark:hover:bg-slate-800/80 text-slate-300 dark:text-slate-300 hover:text-purple-400 dark:hover:text-purple-400 transition-all duration-200 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in-75 duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-400 animate-in fade-in zoom-in-75 duration-200" />
      )}
    </button>
  );
}
