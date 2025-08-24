import { useEffect, useRef, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
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

  const skills = [
    { name: 'Adobe After Effects', level: 95 },
    { name: 'Premiere Pro', level: 90 },
    { name: 'Photoshop', level: 85 },
    { name: 'Adobe Illustrator', level: 80 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`transition-smooth duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">About</span> Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 scale-105" />
                <img 
                  src={profilePhoto} 
                  alt="Mahbub Rahman - Video Editor & Graphics Designer" 
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-2 border-surface-light hover:scale-105 transition-smooth"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient-secondary">
                  Professional Video Editor & Graphics Designer
                </h3>
                <p className="text-muted leading-relaxed">
                  Professional Video Editor & Graphics Designer with experience in After Effects, 
                  Premiere Pro, Photoshop, and Adobe Illustrator. I specialize in creating compelling 
                  visual narratives and bringing creative visions to life.
                </p>
                <p className="text-muted leading-relaxed">
                  From concept to completion, I deliver high-quality video content and stunning 
                  graphics that captivate audiences and elevate brands. Every project receives 
                  meticulous attention to detail and creative excellence.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gradient-accent">Core Skills</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
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

export default About;