
import React from 'react';
import { Gem, Wrench, FileText, Pen, Compass } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => (
  <div className="glass p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg group">
    <div className="mb-4 text-gold group-hover:text-gold-dark transition-colors">
      {icon}
    </div>
    <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Servizi = () => {
  const services = [
    {
      icon: <Gem className="h-10 w-10" />,
      title: "Gioielli Personalizzati",
      description: "Creiamo gioielli su misura secondo i tuoi desideri, trasformando le tue idee in pezzi unici che raccontano la tua storia."
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Riparazioni",
      description: "Servizio professionale di riparazione per ridare vita ai tuoi gioielli preferiti, garantendo qualità e precisione in ogni dettaglio."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Valutazioni",
      description: "Valutazioni accurate e professionali dei tuoi preziosi, con certificazioni che garantiscono l'autenticità e il valore."
    },
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Consulenza",
      description: "Servizio di consulenza personalizzata per aiutarti a scegliere il gioiello perfetto per ogni occasione speciale della tua vita."
    },
    {
      icon: <Pen className="h-10 w-10" />,
      title: "Incisioni",
      description: "Personalizza i tuoi gioielli con incisioni artigianali che aggiungono un valore emotivo unico e rendono ogni pezzo speciale."
    }
  ];

  return (
    <div className="section-padding bg-cream-light" id="servizi">
      <div className="container mx-auto">
        <h2 className="section-title">I Nostri Servizi</h2>
        <p className="section-subtitle">Eccellenza e cura in ogni dettaglio</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servizi;
