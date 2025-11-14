export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'telegram-bot' | 'web-app' | 'automation';
  image: string;
  demo?: string;
  github?: string;
  status: 'active' | 'completed';
  year: number;
  problem: string;
  solution: string;
  techStack: string[];
  additionalImages?: string[];
}

// Recent Work projects
export const recentWorkProjects = [
  {
    id: '1',
    title: 'Asia Print',
    shortDescription: 'Telegram bot for printing and ordering printing services',
    image: '/photos/asia-print.jpg',
    demo: 'https://t.me/asia_printBOT',
  },
  {
    id: '2',
    title: 'Martlet Auto',
    shortDescription: 'Telegram bot for business process automation',
    image: '/photos/martlet-auto.jpg',
    demo: 'https://t.me/MartletAutoBot',
  },
  {
    id: '3',
    title: 'Modryna Father',
    shortDescription: 'Telegram bot for management and automation',
    image: '/photos/modryna-father.jpg',
    demo: 'https://t.me/ModrynaFather_Bot',
  },
];

// Startup Projects
export const startupProjects = [
  {
    id: '1',
    title: 'Menteerio',
    shortDescription: 'Artificial Intelligence that analyzes your problem like an experienced professional.',
    image: '/photos/menteerio-ai.jpg',
    demo: 'https://t.me/Menteerio_bot',
    icon: '',
  },
  {
    id: '2',
    title: 'Glyanets',
    shortDescription: 'Telegram bot for dating with geolocation and premium features',
    image: '/photos/glyanets.jpg',
    demo: 'https://t.me/glyanets_robot',
    icon: '',
  },
  {
    id: '3',
    title: 'Modryna Father',
    shortDescription: 'Telegram bot for management and automation',
    image: '/photos/modryna-father.jpg',
    demo: 'https://t.me/ModrynaFather_Bot',
    icon: '',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'asia-print',
    title: 'Asia Print',
    shortDescription: 'Telegram bot for printing and ordering printing services',
    category: 'telegram-bot',
    image: '/photos/asia-print.jpg',
    demo: 'https://t.me/asia_printBOT',
    status: 'active',
    year: 2024,
    problem: 'Need a Telegram bot for ordering printing services',
    solution: 'Developed a full-featured bot on Aiogram 3 with payment integration and order management.',
    techStack: ['Python', 'Aiogram 3', 'PostgreSQL', 'Stripe API'],
  },
  {
    id: '2',
    slug: 'martlet-auto',
    title: 'Martlet Auto',
    shortDescription: 'Telegram bot for business process automation',
    category: 'automation',
    image: '/photos/martlet-auto.jpg',
    demo: 'https://t.me/MartletAutoBot',
    status: 'active',
    year: 2024,
    problem: 'Need business process automation through Telegram',
    solution: 'Created a bot for automating various business processes with external API integration.',
    techStack: ['Python', 'Aiogram 3', 'PostgreSQL', 'REST API'],
  },
  {
    id: '3',
    slug: 'modryna-father',
    title: 'Modryna Father',
    shortDescription: 'Telegram bot for management and automation',
    category: 'telegram-bot',
    image: '/photos/modryna-father.jpg',
    demo: 'https://t.me/ModrynaFather_Bot',
    status: 'active',
    year: 2024,
    problem: 'Need a bot for management and automation',
    solution: 'Developed a bot with full management and automation functionality.',
    techStack: ['Python', 'Aiogram 3', 'PostgreSQL'],
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'telegram-bot', label: 'Telegram Bots' },
  { id: 'web-app', label: 'Web Apps' },
  { id: 'automation', label: 'Automation' },
] as const;
