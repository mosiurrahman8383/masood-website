import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'cinematic', name: 'Cinematic' },
    { id: 'ads', name: 'Advertisements' },
    { id: 'podcast', name: 'Podcast' },
    { id: 'graphics', name: 'Graphics' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Epic Brand Commercial',
      category: 'cinematic',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
      duration: '2:30',
      description: 'Cinematic brand story with dynamic motion graphics'
    },
    {
      id: 2,
      title: 'Tech Product Launch',
      category: 'ads',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      duration: '1:15',
      description: 'High-energy product showcase with sleek animations'
    },
    {
      id: 3,
      title: 'Podcast Intro Sequence',
      category: 'podcast',
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
      duration: '0:45',
      description: 'Animated podcast branding with sound design'
    },
    {
      id: 4,
      title: 'Music Video Graphics',
      category: 'graphics',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      duration: '3:45',
      description: 'Synchronized motion graphics for music video'
    },
    {
      id: 5,
      title: 'Documentary Trailer',
      category: 'cinematic',
      thumbnail: 'https://images.unsplash.com/photo-1489599735854-648f56b2b8fe?w=600&h=400&fit=crop',
      duration: '1:30',
      description: 'Emotional storytelling with cinematic editing'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'ads',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      duration: '0:30',
      description: 'Viral social media content with trendy effects'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`transition-smooth duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-secondary">Featured</span> Work
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover my latest projects showcasing creative storytelling and technical excellence
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'hero' : 'outline-hero'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="transition-smooth"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-smooth hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-16 h-16 bg-cyber-blue rounded-full flex items-center justify-center glow-primary hover:scale-110 transition-quick cursor-pointer">
                      <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-lg">
                    {project.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-surface px-3 py-1 rounded-full text-cyber-blue font-medium capitalize">
                      {project.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-cyber-blue transition-quick" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;