import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Проект не знайдено</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Повернутися до проектів
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabels = {
    'telegram-bot': 'Telegram Бот',
    'web-app': 'Веб-додаток',
    'automation': 'Автоматизація',
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад до проектів
        </Link>

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <div className="flex gap-3">
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Живе Демо
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Код
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Проблема</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Рішення</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Технічний Стек</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Тип</p>
                <p className="font-medium text-foreground">{categoryLabels[project.category]}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Статус</p>
                <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                  {project.status === 'active' ? 'Активний' : 'Завершений'}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Рік</p>
                <p className="font-medium text-foreground">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
