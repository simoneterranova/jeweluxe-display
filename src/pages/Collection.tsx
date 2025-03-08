
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Product type definition for better type safety
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
};

const Collection = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('Tutti');
  
  // Products data - in a real app this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Anello Diamante',
      description: 'Elegante anello con diamante solitario da 1 carato montato su oro bianco 18k.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Anelli',
      price: '€3,500'
    },
    {
      id: 2,
      name: 'Collana Perle',
      description: 'Raffinata collana di perle australiane con chiusura in oro giallo 18k.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Collane',
      price: '€2,200'
    },
    {
      id: 3,
      name: 'Bracciale Zaffiro',
      description: 'Elegante bracciale tennis con zaffiri blu e diamanti su platino.',
      image: 'https://imgs.search.brave.com/xfKhX861al5nb2tkrG1pitGZnMTFlh0qizEavE4Rq8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhY29uZG90dGlz/dG9yZS5jb20vY2Ru/L3Nob3AvZmlsZXMv/YnJhY2NpYWxlLWRh/LWRvbm5hLWluLWFy/Z2VudG8temlyY29u/aS1iaWFuY2hpLWUt/Ymx1LXRpcG8temFm/ZmlyaS12aWEtY29u/ZG90dGktc3RvcmUu/anBnP3Y9MTY4NjE1/OTM3OSZ3aWR0aD0x/MDgw',
      category: 'Bracciali',
      price: '€4,800'
    },
    {
      id: 4,
      name: 'Orecchini Rubino',
      description: 'Splendidi orecchini pendenti con rubini birmani e pavé di diamanti.',
      image: 'https://imgs.search.brave.com/h_8Ikl8VwVQY-_jJYHLBss_VEYTeWeSAGBqHvhmDQ-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/MGJyYW5kY29tbWVy/Y2UuY29tL21hYmlu/YS9wcmQvNDI2NV8y/X00uanBn',
      category: 'Orecchini',
      price: '€3,900'
    },
    {
      id: 5,
      name: 'Anello Smeraldo',
      description: 'Magnifico anello con smeraldo colombiano centrale e diamanti a contorno.',
      image: 'https://imgs.search.brave.com/G-SqgtxO7wSQsSDy1ydz8gj2Pqw7E7Hp_CMDf9GEtno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nlcm1pbm9naW9p/ZWxsaS5pdC9pbWcv/Y21zL0ZvdG8tQ2F0/ZWdvcmllL0FuZWxs/by1TbWVyYWxkby5q/cGc',
      category: 'Anelli',
      price: '€5,200'
    },
    {
      id: 6,
      name: 'Collana Diamanti',
      description: 'Elegante collana a riviera di diamanti su oro bianco 18k, perfetta per occasioni speciali.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Collane',
      price: '€7,500'
    },
    {
      id: 7,
      name: 'Bracciale Oro Rosa',
      description: 'Delicato bracciale in oro rosa 18k con pavé di diamanti bianchi.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Bracciali',
      price: '€2,800'
    },
    {
      id: 8,
      name: 'Orecchini Perla',
      description: 'Classici orecchini con perle Akoya e piccoli diamanti su montatura in oro bianco.',
      image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Orecchini',
      price: '€1,950'
    },
  ];

  // All unique categories for filter
  const categories = ['Tutti', ...new Set(products.map(product => product.category))];
  
  // Filtered products based on active category
  const filteredProducts = activeCategory === 'Tutti' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation on page load
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
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-800 hover:text-gold transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Torna alla Home</span>
            </Link>
          </div>
          
          {/* Page title */}
          <div className="text-center mb-16">
            <h1 className="section-title">La Nostra Collezione</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Esplora la nostra selezione di gioielli artigianali creati con amore e dedizione
            </p>
          </div>
          
          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-gold text-white font-medium'
                    : 'border border-gold/30 text-slate-800 hover:bg-gold/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card opacity-0 transition-all duration-500 h-full"
              >
                <div className="glass h-full overflow-hidden rounded-xl group">
                  <div className="relative h-64 overflow-hidden">
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-xl font-semibold text-slate-800">
                        {product.name}
                      </h3>
                      {product.price && (
                        <span className="text-gold font-medium">{product.price}</span>
                      )}
                    </div>
                    <p className="text-slate-700 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium"
                    >
                      Scopri di più
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
