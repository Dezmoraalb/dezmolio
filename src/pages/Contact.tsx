import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, sendEmailFallback, initEmailJS } from "@/config/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);
  
  // Handle email validation with English messages
  const handleEmailInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.validity.valueMissing) {
      target.setCustomValidity('Please enter an email address.');
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity('Please enter a valid email address.');
    } else {
      target.setCustomValidity('');
    }
  };
  
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    handleChange(e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Try to send via EmailJS
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
      } else {
        // If EmailJS doesn't work, use fallback
        console.log('EmailJS not working, using fallback');
        sendEmailFallback(formData);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Opening email client...",
          description: "Your email client will open with the message.",
        });
      }
      
    } catch (error) {
      console.error('Error sending:', error);
      // In case of critical error, use fallback
      try {
        sendEmailFallback(formData);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Opening email client...",
          description: "Your email client will open with the message.",
        });
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        setSubmitStatus('error');
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Avatar Illustration - positioned so header ends at its middle */}
          <div className="flex justify-center -mt-16 md:-mt-20 mb-12">
            <img
              src={`${import.meta.env.BASE_URL}Illustrations/coding_joxb.svg`}
              alt="Coding illustration"
              className="w-40 h-40 md:w-48 md:h-48 max-w-full"
            />
          </div>

          {/* Greeting */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Thanks for taking the time to reach out.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              How can I help you today?
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-foreground mb-3">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-foreground mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleEmailInput}
                  onInvalid={handleEmailInvalid}
                  required
                  placeholder="your.email@example.com"
                  className="w-full h-12 text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-base font-medium text-foreground mb-3">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full h-12 text-base"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium text-foreground mb-3">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or question..."
                rows={8}
                className="w-full text-base"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-base font-bold h-auto rounded-full"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
