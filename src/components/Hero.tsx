import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Download } from 'lucide-react';
import heroVideo from '@/assets/hero-video-placeholder.jpg';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url(${heroVideo})` }}
        >
          <div className="absolute inset-0 video-overlay" />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyber-blue/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyber-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-cyber-yellow/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-gradient-primary animate-glow">MAHBUB</span>
            <span className="block text-gradient-secondary">RAHMAN</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted mb-2">
              Video Editor & Graphics Designer
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting cinematic experiences through motion graphics, visual storytelling, and cutting-edge design
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group transition-smooth"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-quick" />
              View Portfolio
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="group transition-smooth"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Mahbub_Rahman_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-quick" />
              Download Resume
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-cyber-blue animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;