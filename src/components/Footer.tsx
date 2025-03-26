
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="text-primary font-display font-bold text-2xl mb-4">
              GenAI Labs
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering teams to build powerful AI solutions without code. Transform your workflow with our intuitive no-code AI platform.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <SocialLink icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialLink icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
              <SocialLink icon={<Github size={18} />} href="#" label="GitHub" />
              <SocialLink icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialLink icon={<Instagram size={18} />} href="#" label="Instagram" />
            </div>
          </div>
          
          {/* Menu links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Careers" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Press" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Documentation" />
              <FooterLink href="#" label="Tutorials" />
              <FooterLink href="#" label="Case Studies" />
              <FooterLink href="#" label="Community" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Cookie Policy" />
              <FooterLink href="#" label="GDPR Compliance" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Gen AI Labs. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with precision and care for AI enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a 
    href={href}
    aria-label={label}
    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string, label: string }) => (
  <li>
    <a 
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
    >
      {label}
    </a>
  </li>
);

export default Footer;
