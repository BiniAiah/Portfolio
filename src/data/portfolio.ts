export interface NavItem {
  id: string
  label: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: string
  items: Skill[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  role: string
  period: string
  organization: string
  description: string
  highlights: string[]
  tech: string[]
  image: string
  imageAlt: string
  featured: boolean
  github: string | null
}

export interface Certification {
  title: string
  issuer: string
  icon: string
}

export interface Achievement {
  title: string
  event: string
  organization: string
  year: string
  description: string
  icon: string
  highlight: boolean
}

export interface Language {
  name: string
  level: string
  value: number
}

export const profile = {
  name: 'John Floyd Macahibag',
  firstName: 'John Floyd',
  initials: 'JM',
  roles: ['Full-Stack Developer', 'ML Enthusiast', 'IT Undergraduate', 'Problem Solver'],
  headline: 'IT Undergraduate · Full-Stack Developer · ML Enthusiast',
  summary:
    'Information Technology undergraduate with academic project experience in web development, PostgreSQL database management, system integration, machine learning, data generation, and feature engineering. Proficient in Python, JavaScript, TypeScript, and C#, with practical experience developing database-driven applications and integrating biometric systems.',
  location: 'Lapu-Lapu City, Cebu, Philippines',
  email: 'macahibaglloyd@gmail.com',
  gmailCompose:
    'https://mail.google.com/mail/?view=cm&fs=1&to=macahibaglloyd@gmail.com&su=Portfolio%20Inquiry',
  phone: '+63 963 875 8810',
  github: 'https://github.com/BiniAiah',
  githubUsername: 'BiniAiah',
  photo: 'assets/images/profile.jpg',
  photoPlaceholder: 'assets/images/profile-placeholder.svg',
  resume: 'assets/docs/resume.pdf',
  availability: 'Open to OJT and entry-level opportunities',
  expectedGraduation: 'July 2027',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { label: 'Projects', value: '3+', icon: 'fa-solid fa-diagram-project' },
  { label: 'PSC XI 2026', value: 'Top 4', icon: 'fa-solid fa-trophy' },
  { label: 'Graduating', value: '2027', icon: 'fa-solid fa-graduation-cap' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    description: 'Building responsive interfaces and database-driven applications.',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'TypeScript', icon: 'fa-solid fa-t' },
      { name: 'C#', icon: 'fa-solid fa-hashtag' },
      { name: 'SQL', icon: 'fa-solid fa-database' },
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'jQuery', icon: 'fa-solid fa-bolt' },
    ],
  },
  {
    title: 'Databases & DevOps',
    description: 'Managing data, source control, and automated delivery.',
    icon: 'fa-solid fa-server',
    items: [
      { name: 'SQL Server', icon: 'fa-solid fa-database' },
      { name: 'PostgreSQL', icon: 'fa-solid fa-layer-group' },
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Turning messy real-world data into reliable predictions.',
    icon: 'fa-solid fa-brain',
    items: [
      { name: 'Random Forest', icon: 'fa-solid fa-tree' },
      { name: 'Synthetic Data Generation', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Feature Engineering', icon: 'fa-solid fa-sliders' },
    ],
  },
  {
    title: 'AI-Assisted Development',
    description: 'Accelerating delivery with AI tools — every output reviewed and tested before use.',
    icon: 'fa-solid fa-robot',
    items: [
      { name: 'Claude Code', icon: 'fa-solid fa-comment-dots' },
      { name: 'Codex', icon: 'fa-solid fa-terminal' },
      { name: 'OpenCode', icon: 'fa-solid fa-code' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'bangkago',
    title: 'BangkaGo',
    subtitle: 'Inter-Island Logistics and Transportation Demand Prediction System with Real-Time Vessel Tracking',
    role: 'Programmer & ML Pipeline Developer',
    period: 'Jan 2026 – Present',
    organization: 'Cebu Technological University – Main Campus',
    description:
      'An app and web-based logistics platform that connects island communities with real-time vessel tracking, passenger booking, and parcel management.',
    highlights: [
      'Architected and developed an app and web-based logistics platform featuring real-time vessel tracking, passenger booking, and parcel management.',
      'Generated and engineered synthetic passenger booking datasets using Python, incorporating real-world rules from Bangkero interviews to support Random Forest model training.',
      'Supported frontend and backend development, PostgreSQL database management, and machine learning model integration, ensuring seamless operation of the system.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Random Forest', 'TypeScript'],
    image: 'assets/images/project-bangkago.svg',
    imageAlt: 'BangkaGo inter-island logistics platform preview',
    featured: true,
    github: null,
  },
  {
    id: 'senior-citizen',
    title: 'Senior Citizen Assistance System',
    subtitle: 'Biometric-Verified Financial Aid Distribution',
    role: 'Programmer',
    period: 'Aug 2025 – Dec 2025',
    organization: 'Cebu Technological University – Main Campus',
    description:
      'A web-based system that digitizes and accelerates the distribution of financial aid to local senior citizens.',
    highlights: [
      'Developed a web-based system to digitize and accelerate the distribution of financial aid to local senior citizens.',
      'Implemented biometric fingerprint scanning using an SDK to replace traditional manual logging (name/signature), significantly reducing verification time and preventing duplicate claims.',
      'Built the admin dashboard for registration and tracking plus the biometric verification module using C#, HTML, CSS, and JavaScript.',
    ],
    tech: ['C#', 'HTML', 'CSS', 'JavaScript', 'Fingerprint SDK'],
    image: 'assets/images/project-senior.svg',
    imageAlt: 'Senior Citizen Assistance System preview',
    featured: false,
    github: null,
  },
  {
    id: 'jkl-vince',
    title: 'JKL Vince Furniture',
    subtitle: 'Client Services and Inventory Management',
    role: 'Programmer',
    period: 'Jan 2024 – Sep 2024',
    organization: 'JKL Vince Furniture, Brgy. Rizal, Pinamungajan, Cebu',
    description:
      'A web-based information system streamlining core business operations, from inventory tracking to appointment booking and customer service.',
    highlights: [
      'Developed a web-based information system covering inventory tracking, appointment booking, and customer service.',
      'Engineered features to automate appointment scheduling and improve response times for client inquiries, enhancing overall customer engagement.',
      'Implemented centralized PostgreSQL database management to ensure accurate real-time inventory tracking and support the company\u2019s growth and efficiency.',
    ],
    tech: ['PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    image: 'assets/images/project-jkl.svg',
    imageAlt: 'JKL Vince Furniture inventory system preview',
    featured: false,
    github: null,
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Cebu Technological University – Main Campus',
  period: 'Aug 2023 – Present',
  expected: 'Expected graduation: July 2027',
  location: 'Cebu, Philippines',
  focus: ['Web Development', 'Database Management', 'System Integration', 'Machine Learning'],
}

export const certifications: Certification[] = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy (NetAcad)',
    icon: 'fa-solid fa-shield-halved',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Top 4 Overall (Top 25 Finalist)',
    event: 'Philippine Start-up Challenge (PSC XI)',
    organization: 'DICT Region VII – Central Visayas',
    year: '2026',
    description:
      'Placed Top 4 overall out of the Top 25 finalists at the Philippine Start-up Challenge XI held at Bai Hotel, representing Cebu Technological University.',
    icon: 'fa-solid fa-trophy',
    highlight: true,
  },
]

export const languages: Language[] = [
  { name: 'Cebuano', level: 'Native', value: 100 },
  { name: 'English', level: 'Conversational', value: 70 },
  { name: 'Tagalog', level: 'Conversational', value: 65 },
]

export const quickFacts = [
  { label: 'Location', value: profile.location, icon: 'fa-solid fa-location-dot' },
  { label: 'Email', value: profile.email, icon: 'fa-solid fa-envelope' },
  { label: 'Expected graduation', value: profile.expectedGraduation, icon: 'fa-solid fa-graduation-cap' },
  { label: 'Availability', value: profile.availability, icon: 'fa-solid fa-circle-check' },
]
