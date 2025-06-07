import { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_kw5m42s',
        'template_ku0nlvo',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'OyjTLmEsca-1jCuUu'
      );

      toast({
        title: 'Message Sent!',
        description: 'Your message has been sent successfully. I will get back to you soon!'
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error Sending Message',
        description: 'Something went wrong. Please try again later or email me directly at jharish.2006.2006@gmail.com',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/harish-j-05apr2006',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Harish-2006',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-accent">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-white/20 focus:border-primary"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-white/20 focus:border-primary"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background/50 border-white/20 focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-accent">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-foreground/80 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <div className="space-y-2">
                  <p className="text-foreground/70">
                    <span className="font-medium">Email:</span> jharish.2006.2006@gmail.com
                  </p>
                  <p className="text-foreground/70">
                    <span className="font-medium">Availability:</span> Open to new opportunities
                  </p>
                  <p className="text-foreground/70">
                    <span className="font-medium">Response Time:</span> Within 24 hours
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-poppins font-medium mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-card glass-hover ${link.color} transition-all duration-300`}
                    >
                      <link.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
