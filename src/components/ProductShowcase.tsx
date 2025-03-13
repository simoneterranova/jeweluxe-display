
import React, { useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProductShowcase = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      image: 'https://imgs.search.brave.com/xfKhX861al5nb2tkrG1pitGZnMTFlh0qizEavE4Rq8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhY29uZG90dGlz/dG9yZS5jb20vY2Ru/L3Nob3AvZmlsZXMv/YnJhY2NpYWxlLWRh/LWRvbm5hLWluLWFy/Z2VudG8temlyY29u/aS1iaWFuY2hpLWUt/Ymx1LXRpcG8temFm/ZmlyaS12aWEtY29u/ZG90dGktc3RvcmUu/anBnP3Y9MTY4NjE1/OTM3OSZ3aWR0aD0x/MDgw',
      category: 'Bracciali'
    },
    {
      id: 4,
      name: 'Orecchini Rubino',
      description: 'Splendidi orecchini pendenti con rubini birmani e pavé di diamanti.',
      image: 'https://imgs.search.brave.com/h_8Ikl8VwVQY-_jJYHLBss_VEYTeWeSAGBqHvhmDQ-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/MGJyYW5kY29tbWVy/Y2UuY29tL21hYmlu/YS9wcmQvNDI2NV8y/X00uanBn',
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

  // Handle navigation to collection page
  const handleNavigateToCollection = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/collection');
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
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
    <section id="collezione" className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Le Nostre Creazioni</h2>
          <p className="section-subtitle">Gioielli unici realizzati a mano con cura</p>
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10"></div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-700 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 text-slate-800 hover:text-gold hover:bg-white/90 transition-all shadow-md"
            aria-label="Precedente"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 text-slate-800 hover:text-gold hover:bg-white/90 transition-all shadow-md"
            aria-label="Successivo"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={handleNavigateToCollection}
            className="btn-gold"
          >
            Visualizza Tutta la Collezione
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
