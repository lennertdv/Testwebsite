import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558905544-3ded61434c56?auto=format&fit=crop&q=80&w=1920")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-green-300 font-medium tracking-wider text-sm uppercase mb-4 block">
              Meesters in groen sinds 1998
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Uw droomtuin,<br/> onze passie en vakmanschap.
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl font-light leading-relaxed">
              Van compleet tuinontwerp tot vakkundig onderhoud. Wij creëren rustgevende buitenruimtes waar kwaliteit en natuur samenkomen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/diensten" variant="primary" icon>Onze Diensten</Button>
              <Button to="/contact" variant="white">Offerte Aanvragen</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Vakmanschap', desc: 'Gecertificeerde hoveniers met oog voor detail en jarenlange ervaring.' },
              { title: 'Betrouwbaarheid', desc: 'Afspraak is afspraak. Wij werken transparant en communiceren helder.' },
              { title: 'Duurzaamheid', desc: 'Wij gebruiken milieuvriendelijke methoden en duurzame materialen.' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="bg-green-50 p-4 rounded-full mb-6 text-green-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-950 mb-4">Onze Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Of het nu gaat om een complete renovatie of periodiek onderhoud, wij bieden een totaaloplossing voor uw tuin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-950/20 group-hover:bg-green-950/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-sm shadow-md">
                    <service.icon className="w-6 h-6 text-green-800" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Button to="/diensten" variant="outline" className="w-full text-sm py-2">Lees meer</Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/diensten" variant="primary">Bekijk alle diensten</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-green-950 text-white relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-green-800/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Wat klanten zeggen</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-900/50 p-8 rounded-sm backdrop-blur-sm border border-green-800 hover:border-green-600 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-green-100 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-green-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-950 mb-6">
            Klaar om uw tuin te transformeren?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Neem vrijblijvend contact met ons op voor een kennismakingsgesprek of een offerte op maat.
          </p>
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Neem contact op
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;