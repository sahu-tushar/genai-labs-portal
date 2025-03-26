
import React, { useEffect, useRef } from 'react';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const sphere = sphereRef.current;
    const box = boxRef.current;
    const ring = ringRef.current;
    
    if (!container || !sphere || !box || !ring) return;
    
    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    
    const handleResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    const animate = () => {
      targetX = mouseX * 0.03;
      targetY = mouseY * 0.03;
      
      if (sphere && box && ring) {
        sphere.style.transform = `translate(${targetX * -0.5}px, ${targetY * -0.5}px)`;
        box.style.transform = `translate(${targetX * 0.5}px, ${targetY * 0.7}px) rotate(${targetX * 0.05}deg)`;
        ring.style.transform = `translate(${targetX * 0.3}px, ${targetY * 0.4}px) rotate(${targetX * 0.03}deg)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Sphere */}
      <div 
        ref={sphereRef}
        className="absolute top-1/4 left-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300/40 to-purple-300/40 backdrop-blur-xl animate-float"
        style={{ boxShadow: "0 8px 32px -4px rgba(0, 0, 255, 0.2)", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      />
      
      {/* Box */}
      <div 
        ref={boxRef}
        className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-tr from-teal-300/30 to-blue-300/30 backdrop-blur-lg animate-float"
        style={{ 
          animationDelay: "-2s", 
          transform: "rotate(15deg)", 
          boxShadow: "0 8px 32px -4px rgba(0, 255, 255, 0.15)", 
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          borderRadius: "24% 76% 51% 49% / 44% 26% 74% 56%"
        }}
      />
      
      {/* Ring */}
      <div 
        ref={ringRef}
        className="absolute top-2/4 right-1/3 w-40 h-40 border-4 border-indigo-300/40 rounded-full animate-float"
        style={{ 
          animationDelay: "-4s", 
          boxShadow: "0 0 40px -10px rgba(79, 70, 229, 0.3)", 
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
        }}
      />
      
      {/* Dots */}
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-40 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse-subtle"
            style={{
              top: `${30 + Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${1 + Math.random()})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeScene;
