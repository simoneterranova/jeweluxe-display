
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation sequence
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.classList.add('animate-fade-in');
      title.style.animationDelay = '300ms';
    }

    if (subtitle) {
      subtitle.classList.add('animate-fade-in');
      subtitle.style.animationDelay = '600ms';
    }

    if (cta) {
      cta.classList.add('animate-fade-in');
      cta.style.animationDelay = '900ms';
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/public/lovable-uploads/01cf5c78-afcc-4369-8f58-32c0522eacaf.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-hero-overlay z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef} 
            className="opacity-0 font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow"
          >
            Gioielli che Raccontano <span className="gold-shimmer">Eleganza</span>
          </h2>
          <p 
            ref={subtitleRef} 
            className="opacity-0 text-lg md:text-xl text-white/85 mb-12 max-w-2xl mx-auto"
          >
            Da generazioni, creiamo pezzi unici che celebrano l'artigianato italiano e i momenti preziosi della vita.
          </p>
          <div ref={ctaRef} className="opacity-0 flex flex-col md:flex-row gap-6 justify-center">
            <a href="#collezione" className="btn-gold">
              Esplora la Collezione
            </a>
            <a href="#chi-siamo" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white hover:text-gold transition-colors border border-white/20 hover:border-gold/50 rounded-md">
              Scopri la Nostra Storia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#collezione" className="flex flex-col items-center text-white/70 hover:text-gold transition-colors">
          <span className="text-sm mb-2">Scorri</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
