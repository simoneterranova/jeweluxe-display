
import React, { useEffect } from 'react';

const About = () => {
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
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="chi-siamo" className="section-padding bg-cream-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://livesicilia.it/wp-content/uploads/2022/03/photo1647852268.jpeg?w=648&h=340&crop=1" 
                alt="Artigiani al lavoro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-gold p-6 rounded-xl w-48 reveal opacity-0" style={{ transitionDelay: '600ms' }}>
              <p className="text-gold-dark font-playfair text-lg font-semibold">Dal 1975</p>
              <p className="text-white text-sm">Tradizione orafa italiana</p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <h2 className="section-title">Chi Siamo</h2>
            <p className="text-gold-dark mb-8 font-playfair text-xl">
              Una tradizione di eleganza e artigianalità
            </p>
            <div className="space-y-6 text-slate-700">
              <p>
                La nostra attività rappresenta una perla dell'artigianato con oltre trent'anni di storia alle spalle. Abbiamo iniziato quando avevamo appena 21 e 22 anni, dopo aver completato i nostri studi e fatto apprendistato in bottega, dove abbiamo imparato il mestiere stando sedute al banco. Grazie al supporto di nostro padre, abbiamo poi avuto l'opportunità di aprire la nostra attività.
              </p>
              <p>
                Non ci definiamo gioielliere, ma artigiane orafe con un laboratorio dedicato alla produzione manuale di pezzi unici. Il nostro approccio è profondamente personale: seguiamo i clienti dal momento in cui entrano in negozio. L'oggetto nasce dalle nostre mani ma, soprattutto, dalla fiducia che si instaura con il cliente. Prepariamo su carta il progetto del gioiello e lo realizziamo in modo esclusivo e unico per quella persona. Ogni creazione è completamente personalizzata.
              </p>
              <p>
                Le nostre tecniche sono fedeli alla tradizione: fondiamo l'oro a mano senza stampini né impianti di fusione. I nostri gioielli prendono vita grazie a lima, archetto, cannello a fiato e tutti gli attrezzi tipici del mestiere di cinquant'anni fa, preservando così l'autenticità e la qualità dell'artigianato orafo tradizionale.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '500ms' }}>
                <h3 className="text-gold-dark font-playfair text-xl mb-3">Artigianalità</h3>
                <p className="text-slate-700 text-sm">
                  Ogni gioiello è creato a mano, garantendo unicità e qualità.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '700ms' }}>
                <h3 className="text-gold-dark font-playfair text-xl mb-3">Qualità</h3>
                <p className="text-slate-700 text-sm">
                  Utilizziamo solo materiali di prima scelta e gemme certificate per creare pezzi che durano nel tempo.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '900ms' }}>
                <h3 className="text-gold-dark font-playfair text-xl mb-3">Personalizzazione</h3>
                <p className="text-slate-700 text-sm">
                  Collaboriamo con i nostri clienti per realizzare pezzi unici che rispecchiano la loro individualità.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '1100ms' }}>
                <h3 className="text-gold-dark font-playfair text-xl mb-3">Tradizione</h3>
                <p className="text-slate-700 text-sm">
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
