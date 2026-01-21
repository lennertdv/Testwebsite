import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-green-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Onze Diensten
          </motion.h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto font-light">
            Wij bieden een compleet pakket aan diensten voor de particuliere en zakelijke tuinbezitter.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4'} w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-60`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover rounded-sm shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-6 right-6 z-20 bg-white p-4 rounded-full shadow-lg">
                    <service.icon className="w-8 h-8 text-green-800" />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-green-950 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-800" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button to="/contact" variant="outline">Meer informatie</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-green-950 mb-6">Staat uw klus er niet tussen?</h2>
          <p className="text-slate-600 mb-8">
            Wij leveren maatwerk. Neem contact op om uw specifieke wensen te bespreken.
          </p>
          <Button to="/contact" variant="primary">Neem contact op</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;