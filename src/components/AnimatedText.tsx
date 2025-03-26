
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  tag = 'span',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && (!once || !hasAnimatedRef.current)) {
        setTimeout(() => {
          element.classList.add('animate-fade-in');
          element.style.opacity = '1';
          hasAnimatedRef.current = true;
        }, delay);
      } else if (!entry.isIntersecting && !once && hasAnimatedRef.current) {
        element.classList.remove('animate-fade-in');
        element.style.opacity = '0';
        hasAnimatedRef.current = false;
      }
    }, { threshold });

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [once, delay, threshold]);

  const Component = tag;

  return (
    <Component
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn("opacity-0", className)}
      style={{ opacity: 0 }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
