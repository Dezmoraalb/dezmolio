import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const experience = [
    {
      role: "Freelance Developer",
      period: "2022 - зараз",
      description: "Розробка Telegram ботів та веб-додатків для клієнтів з різних країн",
    },
    {
      role: "Junior Python Developer",
      company: "Crypto Team",
      period: "2024",
      description: "Робота над крипто-проектами та автоматизацією торгівлі",
    },
  ];

  const skills = {
    Python: ["Python", "Aiogram 3", "FastAPI", "Django", "Pandas"],
    Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    "Бази Даних": ["PostgreSQL", "MongoDB", "Redis"],
    Інше: ["Docker", "Git", "REST API", "WebSocket", "Stripe"],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Привіт, я Павло 👋
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Я — Python Full-Stack розробник з 3+ роками досвіду створення Telegram ботів та веб-додатків.
              </p>
              <p>
                Спеціалізуюсь на розробці з використанням <strong className="text-foreground">Aiogram 3</strong>, 
                створюю сучасні веб-інтерфейси на <strong className="text-foreground">React</strong> та 
                інтегрую платіжні системи як <strong className="text-foreground">Stripe</strong>.
              </p>
              <p>
                Мій підхід — це чистий код, увага до деталей та фокус на результаті клієнта. 
                Від ідеї до запуску, я супроводжую проект на всіх етапах.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold mb-8 text-foreground">Досвід Роботи</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-primary pl-6 pb-6 last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                    {exp.company && (
                      <span className="text-muted-foreground font-normal"> @ {exp.company}</span>
                    )}
                  </h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-semibold mb-8 text-foreground">Технічні Навички</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Готовий працювати разом?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Якщо у вас є ідея, яку потрібно втілити в життя, або потрібна допомога з існуючим проектом — я завжди відкритий до співпраці.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Давайте обговоримо ваш проект
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-5 h-5 mr-2" />
              Завантажити резюме
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
