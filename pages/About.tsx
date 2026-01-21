import React from 'react';
import { motion } from 'framer-motion';
import { TEAM, COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-950 mb-6">Over {COMPANY_NAME}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Waar passie voor groen en ambachtelijk vakmanschap samenkomen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-4 left-4 w-full h-full bg-stone-200 rounded-sm -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?auto=format&fit=crop&q=80&w=800" 
                alt="Onze werkwijze" 
                className="w-full h-auto rounded-sm shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-green-950 mb-6">Ons Verhaal</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Opgericht in 1998, begon {COMPANY_NAME} als een bescheiden eenmanszaak met een grote droom: tuinen creëren die mensen gelukkig maken. Door de jaren heen zijn we uitgegroeid tot een full-service hoveniersbedrijf dat bekend staat om kwaliteit en persoonlijke aandacht.
                </p>
                <p>
                  Onze filosofie is simpel: een tuin is geen statisch object, maar een levend ecosysteem dat aandacht en zorg verdient. Of het nu gaat om een strakke moderne stadstuin of een weelderige landschapstuin, wij benaderen elk project met dezelfde toewijding.
                </p>
                <p>
                  Wij geloven in duurzaamheid. Dat betekent dat we werken met verantwoorde materialen, inheemse beplanting stimuleren en zorgen voor een gezonde bodemstructuur. Zodat u niet alleen vandaag, maar ook over tien jaar nog van uw tuin geniet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'Jaren Ervaring' },
              { number: '500+', label: 'Projecten Voltooid' },
              { number: '15', label: 'Vakspecialisten' },
              { number: '100%', label: 'Klanttevredenheid' }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-green-300 mb-2">{stat.number}</div>
                <div className="text-green-100/80 uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-950 mb-4">Ons Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Maak kennis met de gezichten achter {COMPANY_NAME}. Gecertificeerde vakmensen met liefde voor het vak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                  <p className="text-green-600 font-medium mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;