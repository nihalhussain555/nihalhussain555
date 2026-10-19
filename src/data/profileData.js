export const PROFILE_INFO = {
  username: "nihalhussain555",
  name: "Nihal Hussain",
  headline: "AI/ML & Agentic AI Specialist • Full-Stack Engineer • Competitive Programmer",
  bio: "Pre-Final Year B.E. Computer Science & Engineering student specializing in Agentic AI, LLMs, RAG, and intelligent full-stack systems. LeetCode Knight with 2,850+ algorithmic problems solved.",
  location: "Coimbatore, Tamil Nadu, India",
  college: "KIT - Kalaignarkarunanidhi Institute of Technology",
  degree: "B.E. Computer Science and Engineering (Pre-Final Year)",
  period: "2024–2028",
  cgpa: "8.42 / 10.0",
  email: "nihalhussain587@gmail.com",
  phone: "+91 9489870217",
  portfolioUrl: "https://nihal-protfolio.vercel.app/",
  linkedinUrl: "https://www.linkedin.com/in/nihal-hussain-cse",
  githubUrl: "https://github.com/nihalhussain555",
  avatarUrl: "https://avatars.githubusercontent.com/u/193157122?v=4",
  stats: {
    totalProblems: "2,850+",
    dailyStreak: "680+ Days",
    contests: "310+",
    leetCodeRating: 1924,
    leetCodeBadge: "Knight",
    leetCodePercentile: "Top 4.9% Globally",
    codeChefRating: 1570,
    codeChefPeak: 1608,
    codeforcesRating: 1060,
    codeforcesPeak: 1071,
    hackerRankBadge: "5-Star (Problem Solving)"
  }
};

export const FEATURED_PROJECTS = [
  {
    id: "launchcrew",
    repoName: "Launch-Crew",
    title: "LaunchCrew",
    subtitle: "Autonomous 8-Agent Web Development Platform & AI IDE",
    description: "Transforms natural-language requirements into functional websites through coordinated research, planning, code generation, testing, and Docker deployment workflows. Features an AI-powered Monaco IDE with diffs, deterministic code intelligence, and 1,145 passing pytest tests.",
    language: "Python",
    languageColor: "#3572A5",
    tags: ["React.js", "Monaco Editor", "Python", "FastAPI", "MongoDB", "Multi-Agent", "Tavily", "Playwright", "Docker", "pytest"],
    githubUrl: "https://github.com/nihalhussain555/Launch-Crew",
    liveDemoUrl: "https://nihal-protfolio.vercel.app/",
    isFlagship: true,
    highlights: ["8-Agent AI swarm orchestration", "Monaco Editor with code diffs & debugger", "1,145 automated pytest suite"]
  },
  {
    id: "civicai",
    repoName: "CivicAI_Nexus",
    title: "CivicAI Nexus",
    subtitle: "Predictive Multimodal Grievance Intelligence & Governance Platform",
    description: "Multilingual AI civic grievance platform enabling citizens to submit complaints via text, image, and voice in 4 languages with role-based governance dashboards. NLP/ML pipeline reached 99.92% accuracy across 6,300 test complaints with agentic RAG knowledge retrieval.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    tags: ["React.js", "MongoDB", "Python", "FastAPI", "Machine Learning", "NLP", "RAG", "Speech-to-Text", "AI Agents"],
    githubUrl: "https://github.com/nihalhussain555/CivicAI_Nexus",
    liveDemoUrl: "https://civicai-theta.vercel.app/",
    isFlagship: true,
    highlights: ["99.92% accuracy on 6,300 complaints", "Multimodal text/image/voice intake", "RAG-driven official agent"]
  },
  {
    id: "phishing-detector",
    repoName: "AI-Phishing-Detector",
    title: "AI Phishing Detector",
    subtitle: "Real-Time Cyber Threat Intelligence System",
    description: "Analyzes URLs using machine learning to detect malicious websites and phishing threats in real time. Features a lexical and domain feature extraction pipeline and Scikit-learn classification engine integrated into a responsive web interface.",
    language: "Python",
    languageColor: "#3572A5",
    tags: ["Python", "Flask", "Scikit-learn", "HTML5", "CSS3", "JavaScript", "Machine Learning", "MongoDB"],
    githubUrl: "https://github.com/nihalhussain555/AI-Phishing-Detector",
    liveDemoUrl: "https://ai-phishing-detector-tnlt.onrender.com/",
    isFlagship: false,
    highlights: ["Real-time domain feature extraction", "Scikit-learn classification model", "MongoDB telemetry audit store"]
  },
  {
    id: "campus-clubs",
    repoName: "Campus_Clubs_Events_Management",
    title: "Campus Clubs & Events Management",
    subtitle: "Full-Stack Student Lifecycle Management Platform",
    description: "Centralized collegiate club governance, ticketing, registrations, and attendance management with JWT role-based access control and an embedded conversational AI support assistant.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "AI Chatbot"],
    githubUrl: "https://github.com/nihalhussain555/Campus_Clubs_Events_Management",
    liveDemoUrl: "https://campus-clubs-events-management.vercel.app/",
    isFlagship: false,
    highlights: ["JWT role-based governance", "Digital ticketing & certificate issuance", "Embedded AI query assistant"]
  },
  {
    id: "food-waste-tracker",
    repoName: "Ai-Powered-Food-Waste-Tracker",
    title: "AI Food Waste Tracker",
    subtitle: "36-Hour Innovation Sprint Finalist",
    description: "Collaboratively designed and developed during a 36-hour hackathon to predict and minimize food waste using computer vision and intelligent consumption forecasting.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    tags: ["AI", "JavaScript", "Computer Vision", "Hackathon", "Sustainability"],
    githubUrl: "https://github.com/nihalhussain555/Ai-Powered-Food-Waste-Tracker",
    liveDemoUrl: "https://github.com/nihalhussain555/Ai-Powered-Food-Waste-Tracker",
    isFlagship: false,
    highlights: ["36-Hour Hackathon Finalist", "Intelligent waste prediction", "Collaborative sprint"]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "AI/ML & Agentic AI",
    badge: "Specialization",
    skills: [
      { name: "Machine Learning", icon: "Brain", color: "from-purple-500 to-indigo-500" },
      { name: "Agentic AI & Swarms", icon: "Bot", color: "from-violet-500 to-purple-600" },
      { name: "RAG & Knowledge Retrieval", icon: "Database", color: "from-blue-500 to-cyan-500" },
      { name: "LLMs & Prompt Eng.", icon: "Sparkles", color: "from-amber-500 to-orange-500" },
      { name: "Scikit-learn", icon: "Cpu", color: "from-orange-500 to-amber-500" },
      { name: "NumPy & Pandas", icon: "Table", color: "from-sky-500 to-blue-600" },
      { name: "NLP & Speech-to-Text", icon: "Mic", color: "from-emerald-500 to-teal-500" },
      { name: "AI Workflows", icon: "Workflow", color: "from-pink-500 to-purple-500" }
    ]
  },
  {
    name: "Programming Languages",
    badge: "Core",
    skills: [
      { name: "C++", icon: "Code", color: "from-blue-600 to-indigo-600" },
      { name: "Python", icon: "Terminal", color: "from-yellow-500 to-blue-500" },
      { name: "C", icon: "Binary", color: "from-slate-500 to-slate-700" },
      { name: "JavaScript (ES6+)", icon: "FileCode", color: "from-yellow-400 to-amber-500" },
      { name: "SQL", icon: "Database", color: "from-cyan-500 to-blue-500" }
    ]
  },
  {
    name: "Web & Backend Frameworks",
    badge: "Full-Stack",
    skills: [
      { name: "React.js", icon: "Layers", color: "from-cyan-400 to-blue-500" },
      { name: "FastAPI", icon: "Zap", color: "from-teal-500 to-emerald-600" },
      { name: "Flask", icon: "Server", color: "from-slate-600 to-slate-800" },
      { name: "Node.js", icon: "Network", color: "from-green-500 to-emerald-600" },
      { name: "REST APIs", icon: "ArrowLeftRight", color: "from-indigo-500 to-purple-500" },
      { name: "HTML5 & CSS3", icon: "Layout", color: "from-orange-500 to-rose-500" }
    ]
  },
  {
    name: "Databases, DevOps & Tools",
    badge: "Infra",
    skills: [
      { name: "MongoDB", icon: "Leaf", color: "from-green-500 to-emerald-700" },
      { name: "MySQL", icon: "Database", color: "from-blue-500 to-sky-600" },
      { name: "Git & GitHub", icon: "GitBranch", color: "from-orange-600 to-red-600" },
      { name: "Docker", icon: "Box", color: "from-sky-500 to-blue-600" },
      { name: "Playwright", icon: "CheckCircle", color: "from-emerald-500 to-teal-600" },
      { name: "Monaco Editor", icon: "FileCode", color: "from-blue-600 to-purple-600" }
    ]
  },
  {
    name: "Core CS Fundamentals",
    badge: "Algorithmic",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", icon: "GitCommit", color: "from-violet-500 to-purple-700" },
      { name: "Object-Oriented Programming (OOP)", icon: "Boxes", color: "from-indigo-500 to-blue-600" },
      { name: "Database Management Systems (DBMS)", icon: "Database", color: "from-emerald-500 to-green-600" },
      { name: "Operating Systems (OS)", icon: "Cpu", color: "from-slate-500 to-zinc-700" }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Principles of Generative AI",
    issuer: "Certified Credential",
    desc: "Foundations of Generative Models, LLM Architecture, and Prompt Engineering.",
    badge: "GenAI",
    color: "border-purple-500/40 text-purple-400 bg-purple-500/10"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Certified Credential",
    desc: "Advanced Python core constructs, functional patterns, and algorithmic structures.",
    badge: "Python",
    color: "border-blue-500/40 text-blue-400 bg-blue-500/10"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Certified Credential",
    desc: "Supervised and unsupervised learning, evaluation metrics, and model pipelines.",
    badge: "AI/ML",
    color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
  },
  {
    title: "Prompt Engineering Basics",
    issuer: "Certified Credential",
    desc: "Structured prompt steering, few-shot prompting, and chain-of-thought methods.",
    badge: "Prompting",
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10"
  },
  {
    title: "Claude Code 101",
    issuer: "Certified Credential",
    desc: "Agentic AI workflows, developer agent orchestration, and automated CLI tooling.",
    badge: "Agentic AI",
    color: "border-orange-500/40 text-orange-400 bg-orange-500/10"
  },
  {
    title: "Digital Marketing & E-Commerce",
    issuer: "Certified Credential",
    desc: "Data-driven audience acquisition, digital conversion channels, and analytics.",
    badge: "Analytics",
    color: "border-sky-500/40 text-sky-400 bg-sky-500/10"
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Artificial Intelligence Intern",
    company: "DECODELABS",
    location: "Remote",
    period: "Internship Completed",
    highlights: [
      "Applied Python, Pandas, NumPy, Scikit-learn, and Machine Learning principles to build rule-based chatbots, recommendation engines, and data classification models.",
      "Conducted data preprocessing, feature engineering, model evaluation, and collaborative debugging using Git/GitHub version control."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "Machine Learning"]
  }
];

export const COMPETITIVE_STATS = [
  {
    platform: "LeetCode",
    badge: "Knight Badge",
    rating: "1924",
    highlight: "Top 4.9% Globally",
    solved: "900+ Solved",
    url: "https://leetcode.com/u/Nihal_555/",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    badgeColor: "bg-amber-500/20 text-amber-400"
  },
  {
    platform: "CodeChef",
    badge: "2-Star Coder",
    rating: "1570 (Peak 1608)",
    highlight: "Global Rank: 15,676",
    solved: "900+ Solved",
    url: "https://www.codechef.com/users/kit28csb106",
    accent: "from-orange-500/20 to-amber-700/10",
    border: "border-orange-600/30",
    badgeColor: "bg-orange-500/20 text-orange-400"
  },
  {
    platform: "Codeforces",
    badge: "Contender",
    rating: "1060 (Peak 1071)",
    highlight: "Active Competitor",
    solved: "300+ Solved",
    url: "https://codeforces.com/profile/nihalhussain555",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    badgeColor: "bg-blue-500/20 text-blue-400"
  },
  {
    platform: "HackerRank",
    badge: "5-Star Rating",
    rating: "⭐⭐⭐⭐⭐",
    highlight: "Problem Solving",
    solved: "Core CS Mastery",
    url: "https://www.hackerrank.com/profile/kit28_24bcs106",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-400"
  }
];
