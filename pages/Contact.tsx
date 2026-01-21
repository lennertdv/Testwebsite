import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_NAME } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-stone-50">
      {/* HEADER */}
      <section className="bg-green-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto font-light">
              Heeft u een vraag of wilt u een vrijblijvende offerte? Wij staan voor u klaar.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CONTACT INFO COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold text-green-950 mb-6">Gegevens</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white rounded-full shadow-sm mr-4 text-green-800">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Bezoekadres</h3>
                    <p className="text-slate-600">{COMPANY_ADDRESS}</p>
                    <p className="text-sm text-slate-500 mt-1">Op afspraak geopend</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white rounded-full shadow-sm mr-4 text-green-800">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Telefoon</h3>
                    <p className="text-slate-600">
                      <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="hover:text-green-700 transition-colors">
                        {COMPANY_PHONE}
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Ma - Vr: 08:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-white rounded-full shadow-sm mr-4 text-green-800">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">E-mail</h3>
                    <p className="text-slate-600">
                      <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-green-700 transition-colors">
                        {COMPANY_EMAIL}
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Wij reageren binnen 1 werkdag</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="bg-stone-200 rounded-sm h-64 w-full relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <span className="text-slate-500 font-medium">Google Maps Integratie</span>
                    <p className="text-xs text-slate-400 mt-1">{COMPANY_ADDRESS}</p>
                 </div>
              </div>
              <img 
                 src="https://maps.googleapis.com/maps/api/staticmap?center=52.1326,5.2913&zoom=13&size=600x300&key=YOUR_API_KEY_HERE" 
                 alt="Kaartlocatie" 
                 className="w-full h-full object-cover opacity-0 group-hover:opacity-0 transition-opacity" 
                 onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </motion.div>

          {/* FORM COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-lg border border-stone-100"
          >
             {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-green-950 mb-4">Bedankt voor uw bericht!</h3>
                  <p className="text-slate-600 mb-8">
                    We hebben uw aanvraag in goede orde ontvangen. We nemen zo spoedig mogelijk contact met u op.
                  </p>
                  <Button onClick={() => setFormStatus('idle')} variant="outline">
                    Nog een bericht sturen
                  </Button>
                </div>
             ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-green-950 mb-6">Stuur een bericht</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">Voornaam</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Achternaam</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mailadres</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefoonnummer (optioneel)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Onderwerp</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white"
                    >
                      <option value="onderhoud">Tuinonderhoud</option>
                      <option value="aanleg">Tuinaanleg / Renovatie</option>
                      <option value="ontwerp">Tuinontwerp</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Uw bericht</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required
                      placeholder="Vertel ons meer over uw wensen..."
                      className="w-full px-4 py-3 rounded-sm border border-stone-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-colors bg-stone-50 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full flex items-center justify-center px-8 py-4 bg-green-850 text-white font-medium hover:bg-green-950 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed rounded-sm"
                  >
                    {formStatus === 'submitting' ? (
                      'Verzenden...'
                    ) : (
                      <>
                        Verstuur Bericht <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
             )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;