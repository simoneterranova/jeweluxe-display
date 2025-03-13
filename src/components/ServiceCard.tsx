import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription?: string;
}

const ServiceCard = ({ icon, title, description, longDescription }: ServiceProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="glass p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg group h-full rounded-xl border border-gold/10 hover:border-gold/30 cursor-pointer">
          <div className="mb-4 text-gold group-hover:text-gold-dark transition-colors">
            {icon}
          </div>
          <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-slate-800">
            {title}
          </h3>
          <p className="text-slate-600 text-sm md:text-base">{description}</p>
          <div className="mt-4 text-gold text-sm font-medium">
            Scopri di più
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center font-playfair text-2xl">
            <span className="text-gold mr-3">{icon}</span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-slate-700">
            {longDescription || description}
          </p>
          <div className="bg-cream-dark/30 p-4 rounded-lg border border-gold/10">
            <h4 className="font-medium text-slate-800 mb-2">Perché scegliere questo servizio</h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Esperienza e professionalità garantite</li>
              <li>Attenzione ai dettagli e alla qualità</li>
              <li>Servizio personalizzato secondo le tue esigenze</li>
              <li>Utilizzo di tecniche e materiali di prima scelta</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceCard;