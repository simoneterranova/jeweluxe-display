
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
    <section id="chi-siamo" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://livesicilia.it/wp-content/uploads/2022/03/photo1647852268.jpeg?w=648&h=340&crop=1" 
                alt="Artigiani al lavoro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white/90 shadow-md p-6 rounded-xl w-48 reveal opacity-0" style={{ transitionDelay: '600ms' }}>
              <p className="text-gold font-playfair text-lg font-semibold">Dal 1975</p>
              <p className="text-slate-700 text-sm">Tradizione orafa italiana</p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal opacity-0" style={{ transitionDelay: '300ms' }}>
            <h2 className="section-title text-slate-800">Chi Siamo</h2>
            <p className="text-gold mb-8 font-playfair text-xl">
              Una tradizione di eleganza e artigianalità
            </p>
            <div className="space-y-6 text-slate-700">
              <p>
                Nel nostro laboratorio, ogni gioiello nasce da un percorso unico e personalizzato: accogliamo i nostri clienti, ascoltiamo le loro esigenze e disegniamo insieme il progetto, che poi realizziamo interamente a mano. Lavoriamo l'oro con strumenti tradizionali – lime, archetto, cannello a fiato – seguendo un metodo artigianale che rievoca le tecniche di cinquant'anni fa, senza l'uso di stampini o impianti di fusione.
              </p>
              <p>
                La nostra dedizione e la cura per ogni dettaglio ci hanno permesso di ricevere numerosi riconoscimenti, tra cui il primo premio al concorso biennale di oreficeria di Guardiagrele, un traguardo che testimonia il valore e l'unicità delle nostre creazioni.
              </p>
              <p>
                In ogni pezzo, si riflette non solo l'abilità tecnica, ma soprattutto il rapporto di fiducia instaurato con chi ci sceglie. Siamo orgogliose di trasformare il desiderio in arte, creando gioielli esclusivi che raccontano storie uniche e personali.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white shadow-md p-6 rounded-lg reveal opacity-0" style={{ transitionDelay: '500ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Artigianalità</h3>
                <p className="text-slate-600 text-sm">
                  Ogni gioiello è creato a mano dai nostri maestri orafi, garantendo unicità e qualità.
                </p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg reveal opacity-0" style={{ transitionDelay: '700ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Qualità</h3>
                <p className="text-slate-600 text-sm">
                  Utilizziamo solo materiali di prima scelta e gemme certificate per creare pezzi che durano nel tempo.
                </p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg reveal opacity-0" style={{ transitionDelay: '900ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Personalizzazione</h3>
                <p className="text-slate-600 text-sm">
                  Collaboriamo con i nostri clienti per realizzare pezzi unici che rispecchiano la loro individualità.
                </p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg reveal opacity-0" style={{ transitionDelay: '1100ms' }}>
                <h3 className="text-gold font-playfair text-xl mb-3">Tradizione</h3>
                <p className="text-slate-600 text-sm">
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
