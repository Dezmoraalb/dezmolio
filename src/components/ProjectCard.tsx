import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const categoryLabels = {
    'telegram-bot': 'Telegram Бот',
    'web-app': 'Веб-додаток',
    'automation': 'Автоматизація',
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Badge variant="secondary" className="shrink-0">
            {categoryLabels[project.category]}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
