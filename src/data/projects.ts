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

export const projects: Project[] = [
  {
    id: '1',
    slug: 'glyanets-bot',
    title: 'Glyanets Bot',
    shortDescription: 'Telegram бот для знайомств з геолокацією та преміум функціями',
    category: 'telegram-bot',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200',
    demo: 'https://t.me/glyanets_bot',
    status: 'active',
    year: 2024,
    problem: 'Потрібен сучасний Telegram бот для знайомств з функціями геолокації, преміум підписками та адмін-панеллю для модерації.',
    solution: 'Розробив повноцінний бот на Aiogram 3 з React адмін-панеллю. Інтегрував Stripe для платежів, PostgreSQL для зберігання даних та Redis для кешування.',
    techStack: ['Python', 'Aiogram 3', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Stripe API', 'Docker'],
  },
  {
    id: '2',
    slug: 'crypto-portfolio',
    title: 'Crypto Portfolio Tracker',
    shortDescription: 'Веб-додаток для відстеження криптовалютного портфоліо',
    category: 'web-app',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200',
    github: 'https://github.com/yourusername/crypto-tracker',
    status: 'completed',
    year: 2024,
    problem: 'Клієнт хотів зручний інструмент для відстеження криптовалютних інвестицій з реальним часом та аналітикою.',
    solution: 'Створив React додаток з інтеграцією CoinGecko API, реалтайм оновленнями цін, графіками прибутковості та експортом даних.',
    techStack: ['React', 'TypeScript', 'Recharts', 'TanStack Query', 'Tailwind CSS', 'CoinGecko API'],
  },
  {
    id: '3',
    slug: 'automation-suite',
    title: 'Business Automation Suite',
    shortDescription: 'Python скрипти для автоматизації бізнес-процесів',
    category: 'automation',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200',
    status: 'completed',
    year: 2023,
    problem: 'Компанія витрачала багато часу на рутинні задачі: обробку даних, генерацію звітів, відправку повідомлень.',
    solution: 'Розробив набір Python скриптів для автоматизації: парсинг даних з Excel/CSV, генерація PDF звітів, інтеграція з Google Sheets та автоматична відправка через Telegram.',
    techStack: ['Python', 'Pandas', 'ReportLab', 'Google Sheets API', 'Telegram Bot API', 'Schedule'],
  },
];

export const categories = [
  { id: 'all', label: 'Всі' },
  { id: 'telegram-bot', label: 'Telegram Боти' },
  { id: 'web-app', label: 'Веб-додатки' },
  { id: 'automation', label: 'Автоматизація' },
] as const;
