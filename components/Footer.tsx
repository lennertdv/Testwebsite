import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-green-900 rounded-full">
                <Leaf className="w-6 h-6 text-green-100" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-green-100/80 leading-relaxed text-sm">
              Wij creëren en onderhouden tuinen met passie, vakmanschap en oog voor detail. Uw persoonlijke stukje natuur, perfect verzorgd.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-green-900 rounded-full hover:bg-green-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-green-900 rounded-full hover:bg-green-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-green-900 rounded-full hover:bg-green-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-green-50">Navigatie</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-green-100/70 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-green-50">Diensten</h3>
            <ul className="space-y-4 text-sm text-green-100/70">
              <li><Link to="/diensten" className="hover:text-white transition-colors">Tuinonderhoud</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Tuinaanleg</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Boomverzorging</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Bestrating & Terrassen</Link></li>
              <li><Link to="/diensten" className="hover:text-white transition-colors">Beplantingsplannen</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-green-50">Contact</h3>
            <ul className="space-y-4 text-sm text-green-100/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-100/40">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;