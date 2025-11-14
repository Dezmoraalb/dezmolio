import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Повідомлення надіслано!",
      description: "Дякую за ваше повідомлення. Я зв'яжусь з вами найближчим часом.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Зв'язатися зі мною
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Є питання, пропозиція проекту, або просто хочете поговорити? 
              Я завжди відкритий до нових можливостей.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ім'я
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ваше ім'я"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Повідомлення
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Розкажіть про ваш проект або питання..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Надсилання..." : "Надіслати повідомлення"}
                </Button>
              </form>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 text-foreground">
                  Прямі Контакти
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="mailto:pasha34523452@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>pasha34523452@gmail.com</span>
                  </a>

                  <a
                    href="https://t.me/pasha_polyuh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    <span>@pasha_polyuh (Пріоритет)</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  💡 Швидка відповідь
                </h3>
                <p className="text-sm text-muted-foreground">
                  Найшвидший спосіб зв'язатися зі мною — це Telegram. 
                  Зазвичай відповідаю протягом кількох годин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
