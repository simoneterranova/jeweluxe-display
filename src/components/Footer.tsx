
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 relative">
      {/* Gold separator */}
      <div className="h-px w-full bg-gradient-gold"></div>
      
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Ravalli</h3>
            <p className="text-white/90 text-sm mb-6">
              Da generazioni, creiamo gioielli unici che celebrano l'artigianato italiano 
              e i momenti preziosi della vita.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="p-2 bg-slate-800 hover:bg-gold/20 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 bg-slate-800 hover:bg-gold/20 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a href="mailto:info@ravalli-gioielli.it" aria-label="Email" className="p-2 bg-slate-800 hover:bg-gold/20 rounded-full transition-colors">
                <Mail className="h-5 w-5 text-gold" />
              </a>
              <a href="tel:0932723553" aria-label="Telefono" className="p-2 bg-slate-800 hover:bg-gold/20 rounded-full transition-colors">
                <Phone className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Link Rapidi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/90 hover:text-gold transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#collezione" className="text-white/90 hover:text-gold transition-colors text-sm">Collezione</a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-white/90 hover:text-gold transition-colors text-sm">Chi Siamo</a>
              </li>
              <li>
                <a href="#testimonial" className="text-white/90 hover:text-gold transition-colors text-sm">Testimonial</a>
              </li>
              <li>
                <a href="#contatti" className="text-white/90 hover:text-gold transition-colors text-sm">Contatti</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6">Servizi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Gioielli Personalizzati</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Riparazioni</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Valutazioni</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Consulenza</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Incisioni</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-6">Legali</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Termini e Condizioni</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gold transition-colors text-sm">Shipping Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ravalli Mirella & Iosella S.n.c. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/70 text-sm">
              P.IVA: 01234567890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
