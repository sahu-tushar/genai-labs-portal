
import React, { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import AnimatedText from './AnimatedText';
import { Code, Workflow, Cpu, Layers, Microscope, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "No-Code AI Development",
      description: "Build complex AI workflows with our intuitive drag-and-drop interface. No coding required.",
      icon: Code
    },
    {
      title: "AI Agent Management",
      description: "Deploy, monitor, and scale AI agents that automate processes and make intelligent decisions.",
      icon: Cpu
    },
    {
      title: "LangFlow Integration",
      description: "Seamlessly connect to LangFlow for powerful language processing capabilities.",
      icon: Workflow
    },
    {
      title: "Jupyter Labs Support",
      description: "For data scientists, we provide built-in Jupyter notebook integration for custom analyses.",
      icon: Microscope
    },
    {
      title: "Multi-Layer Architecture",
      description: "Connect disparate AI services into cohesive, powerful solutions with our multi-layer architecture.",
      icon: Layers
    },
    {
      title: "Performance Analytics",
      description: "Monitor and optimize your AI solutions with comprehensive performance metrics and insights.",
      icon: BarChart
    }
  ];

  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="section-padding bg-gradient-to-b from-white to-secondary/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            Our Platform
          </div>
          <AnimatedText 
            text="Powerful Features, Zero Coding"
            tag="h2"
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          />
          <AnimatedText 
            text="Gen AI Labs provides everything you need to create, deploy, and manage AI solutions without writing a single line of code."
            tag="p"
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-scale-in opacity-0"
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <AnimatedText 
            text="Ready to transform your AI development?"
            tag="h3"
            className="font-display font-semibold text-2xl md:text-3xl mb-6"
          />
          <button className="primary-button mx-auto">
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
