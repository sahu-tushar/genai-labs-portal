
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ThreeScene from './ThreeScene';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-10 md:py-20 items-center">
        {/* Left column - Text */}
        <div className="flex flex-col space-y-6 z-10">
          <div className="space-y-2">
            <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
              Transforming AI Development
            </div>
            <AnimatedText 
              text="Unlock the Full Potential of AI Without Code"
              tag="h1" 
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight"
              delay={300}
            />
            <AnimatedText 
              text="Build, deploy, and scale AI solutions without writing a single line of code. Gen AI Labs empowers teams to create powerful AI workflows with our intuitive no-code platform."
              tag="p"
              className="text-muted-foreground text-lg mt-5 max-w-xl"
              delay={600}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <button className="primary-button group">
              Get Started Free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="secondary-button">
              Schedule a Demo
            </button>
          </div>
          
          <div 
            className="hidden md:flex items-center gap-4 pt-6 animate-fade-in" 
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">500+</span> teams already building with Gen AI Labs
            </div>
          </div>
        </div>
        
        {/* Right column - 3D Scene */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          <ThreeScene />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="text-sm mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
