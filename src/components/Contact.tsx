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
    <section id="contatti" className="section-padding bg-cream-light relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/70 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Contattaci</h2>
          <p className="section-subtitle">Siamo qui per rispondere alle tue domande</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            ref={addressRef} 
            className="grid md:grid-cols-2 gap-10 transition-opacity duration-500"
          >
            {/* Contact Information Column */}
            <div className="glass p-8 rounded-xl border border-gold/10 shadow-md">
              <h3 className="font-playfair text-2xl text-slate-800 mb-6 flex items-center">
                <Mail className="h-6 w-6 text-gold mr-3" />
                <span>Informazioni di Contatto</span>
              </h3>
              <p className="text-slate-700 mb-8">
                Siamo lieti di assistere personalmente ogni cliente. Non esitare a contattarci 
                per qualsiasi informazione o per fissare un appuntamento per una consulenza personalizzata.
              </p>

              <div className="space-y-6">
                <div className="flex items-start hover:bg-cream-dark/30 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <a 
                      href="https://www.google.com/maps?q=Via+Pellico+Silvio,+2,+97013+COMISO+RG" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-5 w-5 text-gold" />
                    </a>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-medium">Indirizzo</h4>
                    <a 
                      href="https://www.google.com/maps?q=Via+Pellico+Silvio,+2,+97013+COMISO+RG" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-gold transition-colors"
                    >
                      Via Pellico Silvio, 2, 97013 COMISO (RG)
                    </a>
                  </div>
                </div>

                <div className="flex items-start hover:bg-cream-dark/30 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <a href="tel:0932723553">
                      <Phone className="h-5 w-5 text-gold" />
                    </a>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-medium">Telefono</h4>
                    <a href="tel:0932723553" className="text-slate-700 hover:text-gold transition-colors">0932 723553</a>
                  </div>
                </div>

                <div className="flex items-start hover:bg-cream-dark/30 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <a href="mailto:info@ravalli-gioielli.it">
                      <Mail className="h-5 w-5 text-gold" />
                    </a>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-medium">Email</h4>
                    <a href="mailto:info@ravalli-gioielli.it" className="text-slate-700 hover:text-gold transition-colors">info@ravalli-gioielli.it</a>
                  </div>
                </div>

                <div className="flex items-start hover:bg-cream-dark/30 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-slate-800 font-medium">Orari di Apertura</h4>
                    <div className="text-slate-700 space-y-1">
                      <p className="flex justify-between gap-4">
                        <span className="font-medium min-w-[90px]">Lun - Ven:</span>
                        <span>9:00 - 13:00, 16:00 - 20:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Sabato:</span>
                        <span>Chiuso</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Domenica:</span>
                        <span>Chiuso</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="flex flex-col">
              <div className="glass p-8 rounded-xl border border-gold/10 shadow-md mb-6">
                <h3 className="font-playfair text-2xl text-slate-800 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-gold mr-3" />
                  <span>Dove Trovarci</span>
                </h3>
                <p className="text-slate-700 mb-2">Vieni a trovarci nel nostro laboratorio nel centro di Comiso.</p>
              </div>
              
              <div className="glass p-4 rounded-xl overflow-hidden flex-grow shadow-lg border border-gold/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.6570374103053!2d14.602901975586835!3d36.946361972205686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1311a3a970415555%3A0x974aaae6f52c6794!2sVia%20Silvio%20Pellico%2C%202%2C%2097013%20Comiso%20RG!5e0!3m2!1sit!2sit!4v1741374345416!5m2!1sit!2sit" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Posizione Ravalli Gioielli"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
