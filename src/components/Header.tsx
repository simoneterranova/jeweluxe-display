
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      
      // If we're already on the home page, just scroll to the section
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Collezione', href: '/collection' },
    { label: 'Chi Siamo', href: '/#chi-siamo' },
    { label: 'Testimonial', href: '/#testimonial' },
    { label: 'Contatti', href: '/#contatti' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className="font-playfair text-2xl font-bold text-gold-dark">Ravalli</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleSectionClick(item.href)}
              className="text-slate-800 hover:text-gold transition-colors duration-300 gold-underline text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleSectionClick('/#contatti')}
            className="btn-gold"
          >
            Contattaci
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-800 focus:outline-none z-50"
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
            'fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 w-full px-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleSectionClick(item.href)}
                className="text-slate-800 hover:text-gold text-2xl font-playfair font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleSectionClick('/#contatti')}
              className="btn-gold mt-4 w-full flex justify-center"
            >
              Contattaci
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
