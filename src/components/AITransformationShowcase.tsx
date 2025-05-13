import React from 'react';
import { PencilRuler } from 'lucide-react';
import { Button } from './ui/Button';

interface TransformationExample {
  id: string;
  title: string;
  description: string;
  originalImageUrl: string;
  transformedImageUrl: string;
}

const examples: TransformationExample[] = [
  {
    id: '1',
    title: 'Retrato Familiar',
    description: 'Transformação de uma foto de família em um desenho estilo livro de colorir',
    originalImageUrl: '/exemplos/original-1.jpg',
    transformedImageUrl: '/exemplos/transformado-1.jpg',
  },
  {
    id: '2',
    title: 'Paisagem do Jardim',
    description: 'Um belo jardim convertido em linhas para colorir',
    originalImageUrl: '/exemplos/original-2.jpg',
    transformedImageUrl: '/exemplos/transformado-2.jpg',
  },
  {
    id: '3',
    title: 'Momentos Especiais',
    description: 'Aniversário infantil transformado em arte para colorir',
    originalImageUrl: '/exemplos/original-3.jpg',
    transformedImageUrl: '/exemplos/transformado-3.jpg',
  },
];

interface TransformationShowcaseProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
}

const TransformationShowcase = ({ 
  title = "Veja a Mágica Acontecer", 
  subtitle = "Nossa equipe de artistas transforma suas fotos em desenhos prontos para colorir",
  showButton = true 
}: TransformationShowcaseProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-lavender/20 text-baby-pink text-sm">
            <PencilRuler className="w-4 h-4 mr-2" /> Técnica Artística Exclusiva
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {examples.map((example) => (
            <div key={example.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="aspect-[4/3] w-full relative">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={example.originalImageUrl} 
                        alt={`Foto original - ${example.title}`} 
                        className="w-full h-full object-cover"
                        // Usar imagem placeholder enquanto as imagens reais não existem
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x300?text=Foto+Original";
                        }}
                      />
                      <div className="absolute bottom-2 left-2 bg-white/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        Original
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={example.transformedImageUrl} 
                        alt={`Desenho para colorir - ${example.title}`} 
                        className="w-full h-full object-cover"
                        // Usar imagem placeholder enquanto as imagens reais não existem
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x300?text=Desenho+para+Colorir";
                        }}
                      />
                      <div className="absolute bottom-2 left-2 bg-white/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        Transformado
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-baby-pink/10 backdrop-blur-md px-4 py-1 rounded-full border border-baby-pink/30">
                  <PencilRuler className="w-4 h-4 text-baby-pink inline mr-1" /> 
                  <span className="text-xs font-medium">Arte Pronta para Colorir</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{example.title}</h3>
                <p className="text-gray-600 text-sm">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {showButton && (
          <div className="text-center">
            <Button variant="outline" size="pill">
              Ver Mais Exemplos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransformationShowcase;