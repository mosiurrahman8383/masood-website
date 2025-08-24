import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, Github, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/mahbubrahman',
      color: 'hover:text-cyber-blue',
      description: 'Connect on Facebook'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/mahbubrahman',
      color: 'hover:text-cyber-pink',
      description: 'Visual content & updates'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/mahbubrahman',
      color: 'hover:text-cyber-purple',
      description: 'Professional network'
    },
    {
      name: 'Behance',
      icon: ExternalLink,
      url: 'https://behance.net/mahbubrahman',
      color: 'hover:text-cyber-yellow',
      description: 'Creative portfolio'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@mahbubrahman',
      color: 'hover:text-cyber-blue',
      description: 'Video content & tutorials'
    },
    {
      name: 'X (Twitter)',
      icon: ExternalLink,
      url: 'https://x.com/mahbubrahman',
      color: 'hover:text-cyber-purple',
      description: 'Latest updates & thoughts'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyber-purple/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyber-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-smooth duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient-accent">Create</span> Together
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to bring your vision to life? Let's discuss your next project and create something extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <ContactForm />

              {/* Quick Info */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-surface-light">
                <h4 className="text-lg font-bold text-gradient-secondary mb-4">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-cyber-blue font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-cyber-purple font-medium">Open for projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">Worldwide (Remote)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <a 
                      href="mailto:mahbub@example.com" 
                      className="text-cyber-blue hover:text-cyber-purple transition-quick"
                    >
                      mahbub@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">Connect With Me</h3>
                <p className="text-muted-foreground mb-8">
                  Follow my work and connect on your preferred platform
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-card rounded-2xl p-6 shadow-xl border border-surface-light hover:shadow-2xl transition-smooth hover:scale-105 block animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-quick ${social.color}`}>
                        <social.icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-quick" />
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2 group-hover:text-gradient-primary transition-quick">
                      {social.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {social.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-16 border-t border-surface-light">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient-primary">Next Project</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to completion, I'll help bring your creative vision to life with professional quality and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-quick" />
                Start a Project
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg" 
                className="group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Mahbub_Rahman_Resume.pdf';
                  link.click();
                }}
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-quick" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;