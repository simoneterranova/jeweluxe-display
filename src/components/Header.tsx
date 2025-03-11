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

  const navItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Collezione', href: '/collection', section: 'collezione' },
    { label: 'Chi Siamo', href: '/', section: 'chi-siamo' },
    { label: 'Servizi', href: '/', section: 'servizi' },
    { label: 'Testimonial', href: '/', section: 'testimonial' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string, section: string }) => {
    e.preventDefault();
    
    if (item.href === '/' && isHomePage) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href === '/' && !isHomePage) {
      navigate('/', { state: { scrollTo: item.section } });
    } else {
      navigate(item.href);
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isHomePage) {
      const element = document.getElementById('contatti');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'contatti' } });
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 w-full',
        isScrolled 
          ? 'py-3 bg-white shadow-lg' 
          : 'py-4 bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="z-50 relative">
          <h1 className="font-playfair text-2xl font-bold text-gold-dark">Ravalli</h1>
        </Link>

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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-800 focus:outline-none z-50 relative"
          aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gold" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-white z-40 flex flex-col md:hidden"
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-16">
              <nav className="flex flex-col items-center space-y-8 w-full">
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
                  className="btn-gold mt-8 px-8 py-3 text-lg"
                >
                  Contattaci
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
