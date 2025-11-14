# Pasha's Portfolio - Full Stack Developer & Freelancer

Modern portfolio website showcasing my work as a Python Full-Stack Developer and Freelancer. Built with React, TypeScript, and Tailwind CSS, inspired by [mattfarley.ca](https://mattfarley.ca/).

🌐 **Live Site**: [https://dezmoraalb.github.io/dezmolio/](https://dezmoraalb.github.io/dezmolio/)

## 🚀 Features

- **Modern Design** - Clean, minimalist design with purple accent colors
- **Responsive Layout** - Fully responsive and mobile-friendly
- **Contact Form** - Integrated EmailJS for contact form submissions
- **Project Showcase** - Display of recent work and startup projects
- **Freelance Services** - Dedicated page for freelance services
- **Smooth Animations** - Smooth transitions and hover effects
- **SEO Optimized** - Optimized for search engines

## 🛠️ Technologies

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages

## 📋 Project Structure

```
dezmolio/
├── public/
│   ├── Illustrations/     # SVG illustrations
│   └── photos/            # Project images
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Contact.tsx
│   │   ├── Freelance.tsx
│   │   └── ProjectDetail.tsx
│   ├── data/              # Data files
│   │   └── projects.ts
│   ├── config/            # Configuration
│   │   └── emailjs.ts
│   └── App.tsx
├── package.json
└── vite.config.ts
```

## 🎯 Pages

1. **Home** - Hero section, skills, recent work, companies, startup projects
2. **Contact** - Contact form with EmailJS integration
3. **Freelance** - Freelance services and offerings
4. **Project Detail** - Individual project pages

## 📦 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/Dezmoraalb/dezmolio.git
cd dezmolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The site will be available at: `http://localhost:8080`

4. **Build for production**

```bash
npm run build
```

## 🚀 Deployment to GitHub Pages

The project is configured for automatic deployment to GitHub Pages.

### Deploy Command

```bash
npm run deploy
```

This command will:
1. Build the project for production
2. Deploy the `dist` folder to the `gh-pages` branch

### GitHub Pages Settings

1. Go to repository Settings → Pages
2. Select source: `Deploy from a branch`
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`
5. Save changes

The site will be available at: `https://dezmoraalb.github.io/dezmolio/`

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. Configure your EmailJS settings in `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
};
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple (`#6633FF`)
- **Accent**: Teal (`#00BFA5`)
- **Background**: White/Light Gray
- **Text**: Dark Gray/Black

### Typography

- Clean, modern sans-serif fonts
- Responsive font sizes
- Clear hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 📄 License

This project is created for portfolio purposes and is the intellectual property of Pavlo Polyukhovich.

## 👤 Author

**Pavlo Polyukhovich (Pasha)**

- 📧 Email: pasha34523452@gmail.com
- 💬 Telegram: [@pasha_polyuh](https://t.me/pasha_polyuh)
- 💼 LinkedIn: [Pavlo Poliukhovych](https://www.linkedin.com/in/pavlo-poluikhovych-09714131a/)
- 🐙 GitHub: [@Dezmoraalb](https://github.com/Dezmoraalb)
- 📝 Portfolio: [Notion](https://www.notion.so/Pavlo-Polyukhovich-861c0209446a42259af24b931fe4122d)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**  
© 2025 Pavlo Polyukhovich. All rights reserved.
