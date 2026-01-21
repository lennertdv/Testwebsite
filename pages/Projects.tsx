import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, Tag } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* HEADER */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-950 mb-6">Onze Projecten</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Een selectie van onze recent gerealiseerde tuinen. Laat u inspireren door de mogelijkheden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-sm shadow-md bg-stone-200"
              >
                <motion.img 
                  layoutId={`project-image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/70 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-green-300 text-sm font-medium uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    Klik voor details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="relative bg-white rounded-sm overflow-hidden max-w-4xl w-full shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-2/3 h-64 md:h-auto bg-stone-200">
                <motion.img
                  layoutId={`project-image-${selectedProject.id}`}
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 overflow-y-auto bg-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-2 text-green-600 mb-4 text-sm font-medium uppercase tracking-wider">
                    <Tag className="w-4 h-4" />
                    <span>{selectedProject.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-green-950 mb-6">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="flex items-center text-slate-500 mb-6 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Opgeleverd: {selectedProject.date}</span>
                  </div>

                  <div className="prose prose-stone text-slate-600">
                    <p className="leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <p className="mt-4 text-sm italic text-slate-500">
                      Dit project is een voorbeeld van hoe wij luisteren naar de wensen van de klant en deze vertalen naar een duurzaam en esthetisch eindresultaat.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h4 className="font-serif font-bold text-green-950 mb-2">Interesse?</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Wilt u ook zo'n tuin? Neem contact met ons op.
                    </p>
                    <a 
                      href="/#/contact"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-850 text-white font-medium hover:bg-green-950 transition-colors rounded-sm"
                    >
                      Vraag offerte aan
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;