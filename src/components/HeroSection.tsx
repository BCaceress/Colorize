import React from 'react';
import { BookOpen, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 bg-gradient-to-b from-deep-purple/20 via-deep-purple/5 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-deep-purple/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          <motion.div 
            variants={fadeIn}
            className="lg:w-1/2 text-center lg:text-left"
          >            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center justify-center mb-4 px-4 py-1.5 rounded-full bg-ocean-blue/15 text-ocean-blue text-sm font-medium shadow-sm"
            >
              <BookOpen className="w-4 h-4 mr-2" /> Desenho Artístico Personalizado
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 lg:mb-8 leading-tight"
            >
              Transforme suas <span className="bg-gradient-to-r from-deep-purple to-ocean-blue bg-clip-text text-transparent">memórias</span> em arte para colorir
            </motion.h1>
              <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-600 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crie um livro de colorir personalizado único, transformando suas fotos favoritas em ilustrações detalhadas feitas por artistas experientes.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-14"
            >
              <Button variant="default" size="pill" className="w-full sm:w-auto text-base font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Criar Meu Livro <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="pill" className="w-full sm:w-auto text-base font-medium px-8 py-3 hover:bg-gray-50 transition-all duration-300">
                Ver Galeria de Exemplos
              </Button>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto lg:mx-0"
            >
              <motion.div 
                variants={fadeIn}
                className="text-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="font-bold text-ruby-red text-2xl md:text-3xl">100+</div>
                <div className="text-gray-600 text-sm mt-1">Livros Criados</div>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="text-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="font-bold text-ocean-blue text-2xl md:text-3xl flex items-center justify-center">
                  4.9 <Star className="w-4 h-4 ml-1 fill-current" />
                </div>
                <div className="text-gray-600 text-sm mt-1">Avaliação</div>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="text-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="font-bold text-warm-orange text-2xl md:text-3xl">4 dias</div>
                <div className="text-gray-600 text-sm mt-1">Produção</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="lg:w-1/2 relative"
          >
            <div className="relative mx-auto max-w-sm md:max-w-md lg:max-w-lg">
              {/* Imagem principal do livro */}
              <motion.div 
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-4 rounded-2xl shadow-2xl relative z-20"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 to-ocean-blue/10 mix-blend-overlay z-10"></div>
                  <img 
                    src="/livro-exemplo-capa.jpg" 
                    alt="Exemplo de livro de colorir personalizado" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/450x600?text=Livro+de+Colorir";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs font-semibold mb-1 uppercase tracking-wide">Livro de colorir personalizado</div>
                    <div className="text-2xl font-bold">Memórias da Família Silva</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Exemplos de páginas internas do livro (elementos decorativos) */}
              <motion.div 
                initial={{ x: -20, y: 10, rotate: -6 }}
                animate={{ x: -30, y: 20, rotate: -8 }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="absolute -bottom-8 -left-8 w-40 h-52 bg-white p-2 rounded-lg shadow-lg z-10"
              >
                <img 
                  src="/pagina-interna-1.jpg" 
                  alt="Página interna de exemplo" 
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/200x250?text=P%C3%A1gina+Interna";
                  }}
                />
                <div className="absolute top-1 right-1 bg-deep-purple/20 backdrop-blur-md rounded-full p-1.5 shadow-sm">
                  <BookOpen className="w-3 h-3 text-deep-purple" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 10, y: -10, rotate: 12 }}
                animate={{ x: 20, y: -20, rotate: 14 }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: 0.5 
                }}
                className="absolute -top-6 -right-6 w-36 h-48 bg-white p-2 rounded-lg shadow-lg z-10"
              >
                <img 
                  src="/pagina-interna-2.jpg" 
                  alt="Outra página interna de exemplo" 
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150x200?text=P%C3%A1gina+Interna";
                  }}
                />
                <div className="absolute top-1 right-1 bg-deep-purple/20 backdrop-blur-md rounded-full p-1.5 shadow-sm">
                  <BookOpen className="w-3 h-3 text-deep-purple" />
                </div>
              </motion.div>
            </div>
            
            {/* Badge decorativa */}
            <motion.div 
              initial={{ rotate: 12, scale: 0.9 }}
              animate={{ rotate: 12, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-4 right-12 md:right-24 bg-gradient-to-r from-warm-orange/90 to-warm-orange/80 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md"
            >
              Entrega em 7 dias!
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Divisor de onda na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 lg:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,80C672,53,768,75,864,101.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;