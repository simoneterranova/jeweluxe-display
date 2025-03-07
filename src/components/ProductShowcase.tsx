
import React, { useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ProductShowcase = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Products data
  const products = [
    {
      id: 1,
      name: 'Anello Diamante',
      description: 'Elegante anello con diamante solitario da 1 carato montato su oro bianco 18k.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Anelli'
    },
    {
      id: 2,
      name: 'Collana Perle',
      description: 'Raffinata collana di perle australiane con chiusura in oro giallo 18k.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Collane'
    },
    {
      id: 3,
      name: 'Bracciale Zaffiro',
      description: 'Elegante bracciale tennis con zaffiri blu e diamanti su platino.',
      image: 'https://images.unsplash.com/photo-1620316113820-9f4e2d16e9ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Bracciali'
    },
    {
      id: 4,
      name: 'Orecchini Rubino',
      description: 'Splendidi orecchini pendenti con rubini birmani e pavé di diamanti.',
      image: 'https://images.unsplash.com/photo-1633810253710-aebc54ea866c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Orecchini'
    },
  ];

  // Handle carousel navigation
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.product-card').forEach((card) => {
      observer.observe(card);
    });

    return () => {
      document.querySelectorAll('.product-card').forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="collezione" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">La Nostra Collezione</h2>
          <p className="section-subtitle">Pezzi unici creati con maestria artigianale</p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-gold text-navy-dark font-medium transition-all hover:scale-105">
            Tutti
          </button>
          <button className="px-6 py-2 rounded-full border border-gold/30 text-white hover:bg-gold/10 transition-all">
            Anelli
          </button>
          <button className="px-6 py-2 rounded-full border border-gold/30 text-white hover:bg-gold/10 transition-all">
            Collane
          </button>
          <button className="px-6 py-2 rounded-full border border-gold/30 text-white hover:bg-gold/10 transition-all">
            Bracciali
          </button>
          <button className="px-6 py-2 rounded-full border border-gold/30 text-white hover:bg-gold/10 transition-all">
            Orecchini
          </button>
        </div>

        {/* Product carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card opacity-0 min-w-[300px] md:min-w-[350px] snap-start"
              >
                <div className="glass h-full overflow-hidden rounded-xl group">
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/80 z-10"></div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-gold/90 text-navy-dark text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {product.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium"
                    >
                      Dettagli
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-navy-dark/80 text-white hover:text-gold hover:bg-navy-dark/90 transition-all"
            aria-label="Precedente"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-navy-dark/80 text-white hover:text-gold hover:bg-navy-dark/90 transition-all"
            aria-label="Successivo"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-gold">
            Visualizza Tutta la Collezione
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
