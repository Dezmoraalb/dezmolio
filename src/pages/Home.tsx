import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Python та React розробник, що перетворює ідеї на Telegram-ботів та веб-додатки
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Проектів у цій категорії поки немає
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
