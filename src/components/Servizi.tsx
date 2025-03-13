import React, { useEffect, useRef } from 'react';
import { Gem, Wrench, FileText, Pen, Compass } from 'lucide-react';
import ServiceCard from './ServiceCard';



const Servizi = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      const serviceElements = servicesRef.current.querySelectorAll('.service-item');
      serviceElements.forEach((el, index) => {
        el.classList.add('opacity-0');
        (el as HTMLElement).style.transitionDelay = `${index * 150}ms`;
        observer.observe(el);
      });
    }

    return () => {
      if (servicesRef.current) {
        const serviceElements = servicesRef.current.querySelectorAll('.service-item');
        serviceElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  const services = [
    {
      icon: <Gem className="h-10 w-10" />,
      title: "Gioielli Personalizzati",
      description:
        "Creiamo gioielli su misura secondo i tuoi desideri, trasformando le tue idee in pezzi unici che raccontano la tua storia.",
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Riparazioni",
      description:
        "Servizio professionale di riparazione per ridare vita ai tuoi gioielli preferiti, garantendo qualità e precisione in ogni dettaglio.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Valutazioni",
      description:
        "Valutazioni accurate e professionali dei tuoi preziosi, con certificazioni che garantiscono l'autenticità e il valore.",
    },
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Consulenza",
      description:
        "Servizio di consulenza personalizzata per aiutarti a scegliere il gioiello perfetto per ogni occasione speciale della tua vita.",
    },
    {
      icon: <Pen className="h-10 w-10" />,
      title: "Incisioni",
      description:
        "Personalizza i tuoi gioielli con incisioni artigianali che aggiungono un valore emotivo unico e rendono ogni pezzo speciale.",
    },
  ];

  return (
    <section className="section-padding bg-cream-light relative" id="servizi">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/70 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">I Nostri Servizi</h2>
          <p className="section-subtitle">Eccellenza e cura in ogni dettaglio</p>
        </div>

        <div ref={servicesRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="service-item transition-all duration-500 transform hover:-translate-y-2"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 lg:px-24">
            {services.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className="service-item transition-all duration-500 transform hover:-translate-y-2"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servizi;
