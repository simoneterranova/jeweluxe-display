
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Collezione', href: '#collezione' },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled ? 'py-3 bg-navy-dark/80 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="z-50">
          <h1 className="font-playfair text-2xl font-bold text-gold">Ravalli</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-gold transition-colors duration-300 gold-underline text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="btn-gold"
          >
            Contattaci
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gold" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-navy-dark/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 w-full px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-gold text-2xl font-playfair font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold mt-4 w-full flex justify-center"
            >
              Contattaci
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
