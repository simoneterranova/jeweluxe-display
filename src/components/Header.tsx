
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated nav items without the redundant "Contatti"
  const navItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Collezione', href: '/collection', section: 'collezione' },
    { label: 'Chi Siamo', href: '/', section: 'chi-siamo' },
    { label: 'Testimonial', href: '/', section: 'testimonial' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string, section: string }) => {
    e.preventDefault();
    
    if (item.href === '/' && isHomePage) {
      // If we're already on the homepage, just scroll to the section
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href === '/' && !isHomePage) {
      // If we're on another page and need to go to homepage + scroll
      navigate('/', { state: { scrollTo: item.section } });
    } else {
      // For regular page navigation with no scrolling (like to /collection)
      navigate(item.href);
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on homepage, just scroll to the contacts section
      const element = document.getElementById('contatti');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're elsewhere, navigate to homepage and then scroll
      navigate('/', { state: { scrollTo: 'contatti' } });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
            <a
              key={item.href + item.section}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="text-slate-800 hover:text-gold transition-colors duration-300 gold-underline text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contatti"
            onClick={handleContactClick}
            className="btn-gold"
          >
            Contattaci
          </a>
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

        {/* Mobile Menu Overlay - Fixed positioning and improved styles */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-8 w-full px-8">
              {navItems.map((item) => (
                <a
                  key={item.href + item.section}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-slate-800 hover:text-gold text-2xl font-playfair font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contatti"
                onClick={handleContactClick}
                className="btn-gold mt-6 w-3/4 flex justify-center"
              >
                Contattaci
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
