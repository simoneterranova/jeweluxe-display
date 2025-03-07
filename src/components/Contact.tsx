
import React, { useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (addressRef.current) observer.observe(addressRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (addressRef.current) observer.unobserve(addressRef.current);
    };
  }, []);

  return (
    <section id="contatti" className="section-padding bg-gradient-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-navy-light/30 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Contattaci</h2>
          <p className="section-subtitle">Siamo qui per rispondere alle tue domande</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className="glass p-8 rounded-2xl opacity-0"
          >
            <h3 className="font-playfair text-2xl text-white mb-6">Inviaci un messaggio</h3>
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-navy-light/50 border border-white/10 focus:border-gold/50 rounded-md p-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-navy-light/50 border border-white/10 focus:border-gold/50 rounded-md p-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/80 text-sm mb-1">Oggetto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-navy-light/50 border border-white/10 focus:border-gold/50 rounded-md p-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm mb-1">Messaggio</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-navy-light/50 border border-white/10 focus:border-gold/50 rounded-md p-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                    placeholder="Il tuo messaggio..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center"
              >
                Invia Messaggio
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div 
            ref={addressRef} 
            className="flex flex-col justify-between opacity-0"
          >
            <div>
              <h3 className="font-playfair text-2xl text-white mb-6">Informazioni di Contatto</h3>
              <p className="text-white/70 mb-8">
                Siamo lieti di assistere personalmente ogni cliente. Non esitare a contattarci 
                per qualsiasi informazione o per fissare un appuntamento per una consulenza personalizzata.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Indirizzo</h4>
                    <p className="text-white/70">Via Pellico Silvio, 2, 97013 COMISO (RG)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Telefono</h4>
                    <p className="text-white/70">0932 723553</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-white/70">info@ravalli-gioielli.it</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Orari di Apertura</h4>
                    <p className="text-white/70">
                      Lun - Ven: 9:00 - 13:00, 16:00 - 20:00<br />
                      Sabato: 9:00 - 13:00, 16:00 - 19:00<br />
                      Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass mt-12 p-4 rounded-xl h-[200px] flex items-center justify-center">
              <p className="text-white/60 text-center">
                Mappa di Google integrata qui
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
