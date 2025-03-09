
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Bianchi',
      role: 'Cliente da 15 anni',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quote: 'Da anni scelgo Ravalli per i momenti speciali della mia vita. La qualità dei loro gioielli è impareggiabile, così come la loro attenzione personale.',
      rating: 5
    },
    {
      id: 2,
      name: 'Giuseppe Rossi',
      role: 'Cliente dal 2010',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quote: 'Ho acquistato l\'anello di fidanzamento qui e il servizio è stato impeccabile. Hanno creato esattamente quello che avevo in mente, rendendolo ancora più speciale.',
      rating: 5
    },
    {
      id: 3,
      name: 'Francesca Verdi',
      role: 'Cliente dal 2015',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quote: 'I loro pezzi personalizzati sono straordinari. Ogni volta che indosso i miei orecchini Ravalli ricevo complimenti. Raccomando vivamente per qualità e originalità.',
      rating: 5
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonial" className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Cosa Dicono i Clienti</h2>
          <p className="section-subtitle">Testimonianze da chi ha scelto i nostri gioielli</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative h-[400px] md:h-[350px]">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 glass p-8 md:p-12 rounded-2xl
                  ${idx === activeIndex ? 'opacity-100 translate-x-0 z-20' : 
                    idx === (activeIndex + 1) % testimonials.length ? 'opacity-0 translate-x-[100px] z-10' : 
                    'opacity-0 -translate-x-[100px] z-10'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full bg-gradient-gold blur-md opacity-50"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover border-2 border-gold/30 relative z-10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <blockquote className="text-white/90 text-lg md:text-xl italic mb-6 font-playfair">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gold/80 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-gold w-8' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
