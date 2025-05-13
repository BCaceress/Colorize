import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-baby-pink to-soft-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar suas memórias em arte para colorir?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Comece agora e receba seu livro personalizado em poucos dias
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default" 
              size="pill"
              className="bg-white hover:bg-gray-100 text-baby-pink border-white"
            >
              Criar Meu Livro Agora <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="pill"
              className="border-white text-white hover:bg-white/10"
            >
              Falar com um Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;