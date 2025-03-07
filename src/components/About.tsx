
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
    <section id="chi-siamo" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581974944026-5d6ed762f617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Artigiani al lavoro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-gold p-6 rounded-xl w-48 reveal opacity-0" style={{ transitionDelay: '600ms' }}>
              <p className="text-gold font-playfair text-lg font-semibold">Dal 1975</p>
              <p className="text-white/80 text-sm">Tradizione orafa italiana</p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <h2 className="section-title">Chi Siamo</h2>
            <p className="text-gold mb-8 font-playfair text-xl">
              Una tradizione di eleganza e artigianalità
            </p>
            <div className="space-y-6 text-white/80">
              <p>
                Ravalli Mirella & Iosella S.n.c. è una storica gioielleria italiana fondata nel 1975 a Comiso. 
                La nostra passione per l'arte orafa e l'attenzione ai dettagli ci ha permesso di creare gioielli che 
                rappresentano l'eccellenza dell'artigianato italiano.
              </p>
              <p>
                Ogni nostro pezzo racconta una storia di dedizione, creatività e maestria, tramandando valori e tecniche 
                di lavorazione che si sono perfezionate nel corso di generazioni.
              </p>
              <p>
                Il nostro laboratorio unisce sapientemente tradizione e innovazione, creando gioielli che non sono semplici 
                accessori, ma vere opere d'arte da indossare, destinate a diventare cimeli di famiglia.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '500ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Artigianalità</h3>
                <p className="text-white/70 text-sm">
                  Ogni gioiello è creato a mano dai nostri maestri orafi, garantendo unicità e qualità.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '700ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Qualità</h3>
                <p className="text-white/70 text-sm">
                  Utilizziamo solo materiali di prima scelta e gemme certificate per creare pezzi che durano nel tempo.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '900ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Personalizzazione</h3>
                <p className="text-white/70 text-sm">
                  Collaboriamo con i nostri clienti per realizzare pezzi unici che rispecchiano la loro individualità.
                </p>
              </div>
              <div className="glass p-6 reveal opacity-0" style={{ transitionDelay: '1100ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Tradizione</h3>
                <p className="text-white/70 text-sm">
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
