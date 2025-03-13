
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';

// Product type definition for better type safety
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  // Additional fields for detailed view
  details?: string;
  materials?: string;
  dimensions?: string;
};

const Collection = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('Tutti');
  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Products data - in a real app this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Anello Diamante',
      description: 'Elegante anello con diamante solitario da 1 carato montato su oro bianco 18k.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Anelli',
      price: '€3,500',
      details: 'Questo anello solitario presenta un diamante taglio brillante di 1 carato, certificato GIA, con colore G e purezza VS1. La montatura è realizzata in oro bianco 18k con finitura lucida.',
      materials: 'Oro bianco 18k, diamante naturale da 1 carato.',
      dimensions: 'Dimensione anello: 13 (IT) / 53 (EU). Larghezza fascia: 2mm.'
    },
    {
      id: 2,
      name: 'Collana Perle',
      description: 'Raffinata collana di perle australiane con chiusura in oro giallo 18k.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Collane',
      price: '€2,200',
      details: 'Questa elegante collana è composta da 45 perle australiane selezionate a mano, con diametro di 8-9mm e eccellente lustro. La chiusura a moschettone è realizzata in oro giallo 18k.',
      materials: 'Perle australiane, oro giallo 18k.',
      dimensions: 'Lunghezza: 45cm. Diametro perle: 8-9mm.'
    },
    {
      id: 3,
      name: 'Bracciale Zaffiro',
      description: 'Elegante bracciale tennis con zaffiri blu e diamanti su platino.',
      image: 'https://imgs.search.brave.com/xfKhX861al5nb2tkrG1pitGZnMTFlh0qizEavE4Rq8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhY29uZG90dGlz/dG9yZS5jb20vY2Ru/L3Nob3AvZmlsZXMv/YnJhY2NpYWxlLWRh/LWRvbm5hLWluLWFy/Z2VudG8temlyY29u/aS1iaWFuY2hpLWUt/Ymx1LXRpcG8temFm/ZmlyaS12aWEtY29u/ZG90dGktc3RvcmUu/anBnP3Y9MTY4NjE1/OTM3OSZ3aWR0aD0x/MDgw',
      category: 'Bracciali',
      price: '€4,800',
      details: 'Questo bracciale tennis presenta 25 zaffiri blu naturali dal Ceylon alternati con 26 diamanti taglio brillante. La montatura è realizzata in platino 950 con chiusura di sicurezza a doppio scatto.',
      materials: 'Platino 950, zaffiri blu naturali (totale 5ct), diamanti (totale 1.5ct, colore G, purezza VS).',
      dimensions: 'Lunghezza: 18cm. Larghezza: 3.5mm.'
    },
    {
      id: 4,
      name: 'Orecchini Rubino',
      description: 'Splendidi orecchini pendenti con rubini birmani e pavé di diamanti.',
      image: 'https://imgs.search.brave.com/h_8Ikl8VwVQY-_jJYHLBss_VEYTeWeSAGBqHvhmDQ-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/MGJyYW5kY29tbWVy/Y2UuY29tL21hYmlu/YS9wcmQvNDI2NV8y/X00uanBn',
      category: 'Orecchini',
      price: '€3,900',
      details: 'Questi orecchini pendenti presentano due rubini birmani a goccia di 1.5ct ciascuno, circondati da un pavé di diamanti. La montatura è in oro bianco 18k con chiusura a farfalla di sicurezza.',
      materials: 'Oro bianco 18k, rubini birmani naturali (totale 3ct), diamanti (totale 0.8ct).',
      dimensions: 'Lunghezza: 3.2cm. Larghezza: 1cm.'
    },
    {
      id: 5,
      name: 'Anello Smeraldo',
      description: 'Magnifico anello con smeraldo colombiano centrale e diamanti a contorno.',
      image: 'https://imgs.search.brave.com/G-SqgtxO7wSQsSDy1ydz8gj2Pqw7E7Hp_CMDf9GEtno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nlcm1pbm9naW9p/ZWxsaS5pdC9pbWcv/Y21zL0ZvdG8tQ2F0/ZWdvcmllL0FuZWxs/by1TbWVyYWxkby5q/cGc',
      category: 'Anelli',
      price: '€5,200',
      details: 'Questo anello presenta uno smeraldo colombiano taglio ottagonale di 1.8ct, circondato da 16 diamanti taglio brillante. La montatura è in oro bianco 18k con dettagli milgrain.',
      materials: 'Oro bianco 18k, smeraldo colombiano naturale (1.8ct), diamanti (totale 0.65ct, colore F, purezza VS).',
      dimensions: 'Dimensione anello: 14 (IT) / 54 (EU). Dimensioni pietra centrale: 7x5mm.'
    },
    {
      id: 6,
      name: 'Collana Diamanti',
      description: 'Elegante collana a riviera di diamanti su oro bianco 18k, perfetta per occasioni speciali.',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Collane',
      price: '€7,500',
      details: 'Questa collana a riviera presenta 31 diamanti taglio brillante di dimensioni graduate, montati a griffe su oro bianco 18k. Chiusura a moschettone con sicurezza.',
      materials: 'Oro bianco 18k, diamanti naturali (totale 5ct, colore F-G, purezza VS-SI).',
      dimensions: 'Lunghezza: 42cm. Diametro diamanti: da 3mm a 5mm.'
    },
    {
      id: 7,
      name: 'Bracciale Oro Rosa',
      description: 'Delicato bracciale in oro rosa 18k con pavé di diamanti bianchi.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Bracciali',
      price: '€2,800',
      details: 'Questo bracciale flessibile è realizzato in oro rosa 18k con un delicato pavé di diamanti bianchi su tutta la superficie. La chiusura è a scomparsa con sicurezza.',
      materials: 'Oro rosa 18k, diamanti bianchi (totale 1.2ct, colore F, purezza VS).',
      dimensions: 'Lunghezza: 17cm. Larghezza: 4mm.'
    },
    {
      id: 8,
      name: 'Orecchini Perla',
      description: 'Classici orecchini con perle Akoya e piccoli diamanti su montatura in oro bianco.',
      image: 'https://imgs.search.brave.com/OnOW7v6T1H1X6WCUtpyv74NiZMyI2SGzc_zKBWXIYo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXJl/bGVpLmNvbS9jZG4v/c2hvcC9maWxlcy9z/aG9wXzAwMDFfMjMx/Ml9QZXJsZW5zdGVj/a2VyX0ZsYXRsYXkt/MS5qcGc_dj0xNzIx/ODI0MDg5JndpZHRo/PTMwMDA',
      category: 'Orecchini',
      price: '€1,950',
      details: 'Questi eleganti orecchini presentano perle Akoya di 8mm di diametro con eccellente lustro, sormontate da un piccolo diamante taglio brillante. La montatura è in oro bianco 18k con chiusura a farfalla.',
      materials: 'Oro bianco 18k, perle Akoya (8mm), diamanti (totale 0.1ct).',
      dimensions: 'Lunghezza totale: 1.5cm. Diametro perla: 8mm.'
    },
  ];

  // All unique categories for filter
  const categories = ['Tutti', ...new Set(products.map(product => product.category))];
  
  // Filtered products based on active category
  const filteredProducts = activeCategory === 'Tutti' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Enhanced scroll to top when component mounts
  useEffect(() => {
    // Method 1: Using scrollTo with instant behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate scroll
    });
    
    // Method 2: Using scrollTop as a backup to ensure it works
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
    
    // Method 3: Force layout recalculation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
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
          {selectedProduct ? (
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)} 
            />
          ) : (
            <>
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
                onClick={() => setSelectedProduct(product)}
              >
                <div className="glass h-full overflow-hidden rounded-xl group cursor-pointer">
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
                    <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-700 text-sm mb-4">
                      {product.description}
                    </p>
                    {product.price && (
                      <span className="text-gold font-medium">{product.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
