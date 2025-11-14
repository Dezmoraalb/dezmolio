import { Link } from "react-router-dom";
import { recentWorkProjects, startupProjects } from "@/data/projects";
import { Code2, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Full Stack Developer & Freelancer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            I code for great simple things, and I love what I do.
          </p>
          
          {/* Avatar Illustration */}
          <div className="flex justify-center mb-8">
            <img
              src={`${import.meta.env.BASE_URL}Illustrations/coding_joxb.svg`}
              alt="Coding illustration"
              className="w-64 h-64 md:w-80 md:h-80 max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Illustration positioned right above purple background */}
      <div className="relative -mb-20 md:-mb-32">
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}Illustrations/in-sync_3wdt.svg`}
            alt="In sync illustration"
            className="w-full max-w-5xl h-auto px-4 relative z-10"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="relative bg-primary text-white pt-20 md:pt-32 pb-20">
        
        <div className="container-custom text-center relative z-0 pt-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm Pasha. Nice to meet you.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Since beginning my journey as a freelance developer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Full Stack Developer */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-muted-foreground mb-6">
                  I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                </p>
                <div className="text-left space-y-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Languages I speak:</h4>
                    <p className="text-muted-foreground">Python, JavaScript, TypeScript, HTML, CSS</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Dev Tools:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• React</li>
                      <li>• Aiogram 3</li>
                      <li>• FastAPI</li>
                      <li>• PostgreSQL</li>
                      <li>• Docker</li>
                      <li>• Git</li>
                      <li>• VS Code</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

              {/* Freelancer */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Freelancer
                </h3>
                <p className="text-muted-foreground mb-6">
                  I genuinely care about people, and enjoy helping them work on their craft.
                </p>
                <div className="text-left space-y-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Experiences I draw from:</h4>
                    <p className="text-muted-foreground">Full Stack Development, Product design, Freelancing</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Freelancer Stats:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 3+ years experience</li>
                      <li>• 20+ projects completed</li>
                      <li>• 15+ happy clients</li>
                      <li>• 100% client satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Recent Work</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Here are a few past design projects I've worked on. Want to see more?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Email me
            </Link>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recentWorkProjects.map((project) => (
              <a
                key={project.id}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.replace('/', '')}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/90">{project.shortDescription}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.notion.so/Pavlo-Polyukhovich-861c0209446a42259af24b931fe4122d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              See more on Notion
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            I'm proud to have collaborated with some awesome companies:
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {/* Asia Print */}
            <a
              href="https://www.instagram.com/asiaprint_ua/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={`${import.meta.env.BASE_URL}Illustrations/photocopy_k0g7.svg`}
                alt="Asia Print"
                className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-foreground">Asia Print</h3>
            </a>

            {/* Martlet Auto */}
            <a
              href="mailto:info@martlet.com.ua"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={`${import.meta.env.BASE_URL}Illustrations/delivery-truck_mjui.svg`}
                alt="Martlet Auto"
                className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-foreground">Martlet Auto</h3>
            </a>

            {/* Brand 3 - Replace with actual data */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={`${import.meta.env.BASE_URL}Illustrations/video-influencer_7ak0.svg`}
                alt="LiveLab"
                className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-foreground">LiveLab</h3>
            </a>

            <a
              href="https://t.me/tengoku_dojo_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={`${import.meta.env.BASE_URL}Illustrations/japan_9ygx.svg`}
                alt="Tengoku"
                className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-foreground">Tengoku</h3>
            </a>

            <a
              href="https://t.me/modern_estate_agency_ukraine"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={`${import.meta.env.BASE_URL}Illustrations/build-your-home_5opd.svg`}
                alt="Estate Agency"
                className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-foreground">Estate Agency</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Startup Projects Section */}
      <section className="relative">
        {/* Purple background section - extends to half of cards */}
        <div className="bg-primary text-white pt-20 pb-32 md:pb-40">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">My Startup Projects</h2>
            <p className="text-center text-lg max-w-3xl mx-auto">
              I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.
            </p>
          </div>
        </div>

        {/* Cards positioned to overlap purple background */}
        <div className="relative -mt-24 md:-mt-32 pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {startupProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 text-foreground hover:shadow-xl transition-shadow duration-300 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon && <span className="text-3xl">{project.icon}</span>}
                    {project.image && (
                      <img
                        src={`${import.meta.env.BASE_URL}${project.image.replace('/', '')}`}
                        alt={project.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    )}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="text-sm">Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in collaborating with me?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact" className="text-lg px-8 py-6">
              Start a conversation
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
