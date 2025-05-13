import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

interface PricingFeature {
  id: string;
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: PricingFeature[];
  color: string;
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Perfeito para um pequeno presente',
    price: 'R$99',
    features: [
      { id: '1', text: '10 páginas para colorir' },
      { id: '2', text: 'Até 10 fotos transformadas' },
      { id: '3', text: 'Capa flexível personalizada' },
      { id: '4', text: 'Papel de alta qualidade' },
      { id: '5', text: 'Entrega em 10 dias úteis' },
    ],
    color: '#E2D4F0',
    buttonText: 'Escolher Básico',
  },
  {
    id: 'standard',
    name: 'Padrão',
    description: 'Nossa opção mais popular',
    price: 'R$149',
    popular: true,
    features: [
      { id: '1', text: '20 páginas para colorir' },
      { id: '2', text: 'Até 20 fotos transformadas' },
      { id: '3', text: 'Capa dura personalizada' },
      { id: '4', text: 'Papel de alta qualidade' },
      { id: '5', text: 'Entrega em 7 dias úteis' },
      { id: '6', text: 'Personalização de texto' },
    ],
    color: '#FFC1CC',
    buttonText: 'Escolher Padrão',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para ocasiões especiais',
    price: 'R$199',
    features: [
      { id: '1', text: '30 páginas para colorir' },
      { id: '2', text: 'Até 30 fotos transformadas' },
      { id: '3', text: 'Capa dura premium' },
      { id: '4', text: 'Papel de qualidade superior' },
      { id: '5', text: 'Entrega expressa (5 dias úteis)' },
      { id: '6', text: 'Personalização de texto avançada' },
      { id: '7', text: 'Embalagem para presente' },
    ],
    color: '#AEE1F9',
    buttonText: 'Escolher Premium',
  },
];

const PricingCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Preços Simples e Transparentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano perfeito para transformar suas fotos em arte para colorir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-butter-yellow px-3 py-1 text-xs font-semibold text-gray-800">
                  Mais Popular
                </div>
              )}
              
              <div 
                className="py-5 px-6"
                style={{ backgroundColor: `${plan.color}20` }}
              >
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-gray-600 ml-2">por livro</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <Check 
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                        style={{ color: plan.color }}
                      />
                      <span className="text-gray-600">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  size="pill" 
                  className="w-full justify-center"
                  style={{ 
                    backgroundColor: plan.popular ? plan.color : 'transparent',
                    borderColor: plan.color,
                    color: plan.popular ? 'white' : plan.color
                  }}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Todos os planos incluem transformação de fotos por IA e impressão de alta qualidade. 
            Para maiores quantidades ou livros corporativos personalizados, entre em contato para um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;