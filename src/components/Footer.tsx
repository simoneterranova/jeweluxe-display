
import React, { useState } from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock, Shield, CreditCard, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    setEmail('');
    // Show success message or toast notification
  };

  return (
    <footer className="bg-white relative">
      {/* Gold separator */}
      <div className="h-px w-full bg-gradient-gold"></div>
      
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-gold-dark mb-6">Ravalli</h3>
            <p className="text-slate-700 text-sm mb-6">
              Da generazioni, creiamo gioielli unici che celebrano l'artigianato italiano 
              e i momenti preziosi della vita.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ravalligioielli" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-cream hover:bg-gold/10 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a href="https://facebook.com/ravalligioielli" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-cream hover:bg-gold/10 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a href="mailto:info@ravalli-gioielli.it" aria-label="Email" className="p-2 bg-cream hover:bg-gold/10 rounded-full transition-colors">
                <Mail className="h-5 w-5 text-gold" />
              </a>
              <a href="tel:0932723553" aria-label="Telefono" className="p-2 bg-cream hover:bg-gold/10 rounded-full transition-colors">
                <Phone className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-playfair text-lg font-semibold text-gold-dark mb-6">Link Rapidi</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-700 hover:text-gold transition-colors duration-300 text-sm">Home</a>
              </li>
              <li>
                <a href="/collection" className="text-slate-700 hover:text-gold transition-colors duration-300 text-sm">Collezione</a>
              </li>
              <li>
                <a href="/#chi-siamo" className="text-slate-700 hover:text-gold transition-colors duration-300 text-sm">Chi Siamo</a>
              </li>
              <li>
                <a href="/#servizi" className="text-slate-700 hover:text-gold transition-colors duration-300 text-sm">Servizi</a>
              </li>
              <li>
                <a href="/#contatti" className="text-slate-700 hover:text-gold transition-colors duration-300 text-sm">Contatti</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="font-playfair text-lg font-semibold text-gold-dark mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-slate-700 text-sm">Via Pellico Silvio, 2, 97013 COMISO (RG), Italia</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-slate-700 text-sm">0932 723553</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-slate-700 text-sm">info@ravalli-gioielli.it</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <div className="text-slate-700 text-sm">
                  <p>Lun-Ven: 9:00-13:00, 15:00-19:00</p>
                  <p>Sab-Dom: Chiuso</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter section removed */}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gold mr-2" />
              <span className="text-slate-700 text-xs">Pagamenti Sicuri</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-gold mr-2" />
              <span className="text-slate-700 text-xs">Qualità Garantita</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-gold mr-2" />
              <span className="text-slate-700 text-xs">Metodi di Pagamento</span>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="flex justify-center space-x-4 mb-8">
            <img src="/visa.svg" alt="Visa" className="h-6" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/paypal.svg" alt="PayPal" className="h-6" />
            <img src="/amex.svg" alt="American Express" className="h-6" />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gold/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-700 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ravalli Mirella & Iosella S.n.c. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-slate-700 text-sm">
              P.IVA: 01234567890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
