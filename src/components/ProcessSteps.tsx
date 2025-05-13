import React from 'react';
import { Upload, Sparkles, BookOpen, Truck } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const steps: Step[] = [
  {
    id: '1',
    title: 'Envie Suas Fotos',
    description: 'Faça upload das fotos favoritas que você deseja transformar em desenhos para colorir.',
    icon: <Upload className="w-6 h-6" />,
    color: '#FFC1CC',
    bgColor: '#FFC1CC20',
  },
  {
    id: '2',
    title: 'Transformação por IA',
    description: 'Nossa tecnologia de IA avançada converte automaticamente suas fotos em ilustrações para colorir.',
    icon: <Sparkles className="w-6 h-6" />,
    color: '#AEE1F9',
    bgColor: '#AEE1F920',
  },
  {
    id: '3',
    title: 'Livro Personalizado',
    description: 'Criamos seu livro com capa personalizada, contendo todas as imagens transformadas para colorir.',
    icon: <BookOpen className="w-6 h-6" />,
    color: '#FFF4B3',
    bgColor: '#FFF4B320',
  },
  {
    id: '4',
    title: 'Entrega Rápida',
    description: 'Seu livro personalizado é impresso em alta qualidade e entregue diretamente na sua casa.',
    icon: <Truck className="w-6 h-6" />,
    color: '#C6F2D8',
    bgColor: '#C6F2D820',
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Como Funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformar suas memórias em arte para colorir é simples com nossa tecnologia de IA
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Linha de conexão entre os passos */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="relative z-10">
                  <div 
                    className="flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div 
                      className="w-16 h-16 mb-4 rounded-full flex items-center justify-center shadow-md bg-white"
                      style={{ boxShadow: `0 0 0 8px ${step.bgColor}` }}
                    >
                      <div 
                        className="text-white rounded-full p-3"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full w-full">
                      <div className="text-xl font-bold mb-1" style={{ color: step.color }}>
                        <span className="text-sm font-normal text-gray-500 mr-2">Passo</span> {step.id}
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;