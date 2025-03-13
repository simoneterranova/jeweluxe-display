
import React, { useEffect, useRef } from 'react';
import { Award, Gem, Users, History } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll('.value-card');
      valueCards.forEach((card, index) => {
        card.classList.add('opacity-0');
        (card as HTMLElement).style.transitionDelay = `${index * 150 + 300}ms`;
        observer.observe(card);
      });
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      
      if (valuesRef.current) {
        const valueCards = valuesRef.current.querySelectorAll('.value-card');
        valueCards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="chi-siamo" className="section-padding bg-cream-light relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/70 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Chi Siamo</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Una tradizione di eleganza e artigianalità dal 1991
          </p>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-20">
            {/* Image Column - Now visible on all screens */}
            <div className="md:col-span-1 lg:col-span-5 relative order-2 md:order-1 opacity-0 transition-all duration-1000" ref={imageRef}>
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] hover:shadow-2xl">
                <img 
                  src="https://livesicilia.it/wp-content/uploads/2022/03/photo1647852268.jpeg?w=648&h=340&crop=1" 
                  alt="Artigiani al lavoro" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-gold p-6 rounded-xl shadow-lg opacity-0 transition-all duration-1000" style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center mb-2">
                  <History className="h-5 w-5 text-white mr-2" />
                  <p className="text-white font-playfair text-lg font-semibold">Dal 1975</p>
                </div>
                <p className="text-white/90 text-sm">Tradizione orafa italiana</p>
              </div>
              <div className="absolute -top-6 -left-6 glass p-5 rounded-xl shadow-lg opacity-0 transition-all duration-1000" style={{ transitionDelay: '450ms' }}>
                <p className="text-gold font-playfair text-base font-medium">Artigianato Autentico</p>
                <p className="text-slate-700 text-xs">Tecniche tradizionali preservate</p>
              </div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-1 lg:col-span-7 order-1 md:order-2 opacity-0 transition-all duration-1000" ref={textRef}>
              <div className="space-y-6 text-slate-700">
                <p className="leading-relaxed">
                  La nostra attività rappresenta una perla dell'artigianato con oltre trent'anni di storia alle spalle. Abbiamo iniziato quando avevamo appena 21 e 22 anni, dopo aver completato i nostri studi e fatto apprendistato in bottega, dove abbiamo imparato il mestiere stando sedute al banco. Grazie al supporto di nostro padre, abbiamo poi avuto l'opportunità di aprire la nostra attività.
                </p>
                <p className="leading-relaxed">
                  Non ci definiamo gioielliere, ma artigiane orafe con un laboratorio dedicato alla produzione manuale di pezzi unici. Il nostro approccio è profondamente personale: seguiamo i clienti dal momento in cui entrano in negozio. L'oggetto nasce dalle nostre mani ma, soprattutto, dalla fiducia che si instaura con il cliente.
                </p>
                <p className="leading-relaxed">
                  Le nostre tecniche sono fedeli alla tradizione: fondiamo l'oro a mano senza stampini né impianti di fusione. I nostri gioielli prendono vita grazie a lima, archetto, cannello a fiato e tutti gli attrezzi tipici del mestiere di cinquant'anni fa, preservando così l'autenticità e la qualità dell'artigianato orafo tradizionale.
                </p>
                <div className="pt-4">
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div ref={valuesRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="value-card glass p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-gold-dark font-playfair text-xl mb-3 text-center group-hover:text-gold transition-colors">
                  Artigianalità
                </h3>
                <p className="text-slate-700 text-center">
                  Ogni gioiello è creato a mano, garantendo unicità e qualità in ogni dettaglio.
                </p>
              </div>
              
              <div className="value-card glass p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Gem className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-gold-dark font-playfair text-xl mb-3 text-center group-hover:text-gold transition-colors">
                  Qualità
                </h3>
                <p className="text-slate-700 text-center">
                  Utilizziamo solo materiali di prima scelta e gemme certificate per creare pezzi che durano nel tempo.
                </p>
              </div>
              
              <div className="value-card glass p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-gold-dark font-playfair text-xl mb-3 text-center group-hover:text-gold transition-colors">
                  Personalizzazione
                </h3>
                <p className="text-slate-700 text-center">
                  Collaboriamo con i nostri clienti per realizzare pezzi unici che rispecchiano la loro individualità.
                </p>
              </div>
              
              <div className="value-card glass p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <History className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-gold-dark font-playfair text-xl mb-3 text-center group-hover:text-gold transition-colors">
                  Tradizione
                </h3>
                <p className="text-slate-700 text-center">
                  Preserviamo tecniche orafe tradizionali italiane, arricchite da un design contemporaneo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
