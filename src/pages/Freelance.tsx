import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Globe, Bot, Smartphone, Zap } from "lucide-react";

const Freelance = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Freelance Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Transform your ideas into powerful digital solutions. I create custom bots, websites, and applications that drive results.
          </p>
        </div>
      </section>

      {/* Illustration positioned right above purple background */}
      <div className="relative -mb-20 md:-mb-32">
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}Illustrations/freelancer_vibs.svg`}
            alt="Freelancer illustration"
            className="w-full max-w-5xl h-auto px-4 relative z-10"
          />
        </div>
      </div>

      {/* Services Section with Purple Background */}
      <section className="relative bg-primary text-white pt-20 md:pt-32 pb-20">
        <div className="container-custom text-center relative z-0 pt-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Can Build For You
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you need a Telegram bot to automate your business, a modern website to showcase your brand, or a custom application to solve specific challenges, I've got you covered.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {/* Telegram Bots */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Telegram Bots</h3>
              <p className="text-white/90 mb-4">
                Automated solutions for customer service, order processing, notifications, and business workflows.
              </p>
              <ul className="text-white/80 text-sm space-y-2 text-left">
                <li>• Order management systems</li>
                <li>• Customer support automation</li>
                <li>• Payment integration</li>
                <li>• Data collection & analytics</li>
              </ul>
            </div>

            {/* Websites */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Websites & Web Apps</h3>
              <p className="text-white/90 mb-4">
                Modern, responsive websites and web applications built with cutting-edge technologies.
              </p>
              <ul className="text-white/80 text-sm space-y-2 text-left">
                <li>• Portfolio & business sites</li>
                <li>• E-commerce platforms</li>
                <li>• Custom web applications</li>
                <li>• API integrations</li>
              </ul>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-white/90 mb-4">
                Tailored applications and integrations designed specifically for your unique business needs.
              </p>
              <ul className="text-white/80 text-sm space-y-2 text-left">
                <li>• Process automation</li>
                <li>• Database solutions</li>
                <li>• API development</li>
                <li>• System integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Work With Me?
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              I know a thing or two because I've done a thing or two in my development career, and I'm committed to helping you make use of that knowledge.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Code2 className="w-12 h-12 text-primary" strokeWidth="1.5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Stack Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  From frontend to backend, databases to deployment - I handle every aspect of your project.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Smartphone className="w-12 h-12 text-primary" strokeWidth="1.5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Efficient development process ensures your project is delivered on time without compromising quality.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-primary" strokeWidth="1.5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Technologies</h3>
                <p className="text-muted-foreground text-sm">
                  Using the latest tools and frameworks to build scalable, maintainable, and future-proof solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Bot className="w-12 h-12 text-primary" strokeWidth="1.5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground text-sm">
                  I'm here for you even after project completion - maintenance, updates, and improvements are always available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. I'm here to help you build something amazing.
          </p>
          <Button size="lg" asChild>
            <Link 
              to="/contact" 
              className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Freelance;

