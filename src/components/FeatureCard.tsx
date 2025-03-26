
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
  className
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 hover-card-animation card-glow",
        className
      )}
      style={{
        animationDelay: `${100 * index}ms`,
      }}
    >
      <div className="mb-6 bg-primary/10 rounded-xl p-3 w-fit">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
