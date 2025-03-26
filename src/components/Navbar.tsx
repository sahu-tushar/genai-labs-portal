
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-12",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <span className="text-primary font-display font-bold text-xl md:text-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
            GenAI Labs
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <button className="primary-button">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            <NavLinksMobile closeMenu={() => setMobileMenuOpen(false)} />
            <button className="primary-button mt-2 justify-center">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
      <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Solutions</a>
      <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
      <a href="#" className="text-foreground/80 hover:text-primary transition-colors">About</a>
    </>
  );
};

const NavLinksMobile = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <a 
        href="#features" 
        className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Features
      </a>
      <a 
        href="#" 
        className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Solutions
      </a>
      <a 
        href="#" 
        className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        Pricing
      </a>
      <a 
        href="#" 
        className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        About
      </a>
    </>
  );
};

export default Navbar;
