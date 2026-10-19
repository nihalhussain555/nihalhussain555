import React from 'react';
import { 
  Code2, 
  Brain, 
  Bot, 
  Database, 
  Sparkles, 
  Cpu, 
  Table, 
  Mic, 
  Workflow, 
  Terminal, 
  Binary, 
  FileCode, 
  Layers, 
  Zap, 
  Server, 
  Network, 
  ArrowLeftRight, 
  Layout, 
  Leaf, 
  GitBranch, 
  Box, 
  CheckCircle, 
  GitCommit, 
  Boxes 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

const ICON_MAP = {
  Brain,
  Bot,
  Database,
  Sparkles,
  Cpu,
  Table,
  Mic,
  Workflow,
  Code: Code2,
  Terminal,
  Binary,
  FileCode,
  Layers,
  Zap,
  Server,
  Network,
  ArrowLeftRight,
  Layout,
  Leaf,
  GitBranch,
  Box,
  CheckCircle,
  GitCommit,
  Boxes
};

export default function SkillsSection() {
  return (
    <section className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <Code2 className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Arsenal & Core Competencies
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            End-to-end expertise spanning Agentic AI architectures, scalable frameworks, and core algorithms
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 flex flex-col justify-between ${
              category.name.includes('AI/ML') ? 'md:col-span-2 lg:col-span-1 border-purple-500/30' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800/60">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {category.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                  {category.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const Icon = ICON_MAP[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="group flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/70 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/50 hover:border-purple-500/40 transition-all cursor-default"
                    >
                      <div className="w-4 h-4 rounded flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
