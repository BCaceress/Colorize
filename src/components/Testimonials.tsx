import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Oliveira',
    role: 'Mãe de 2 filhos',
    quote: 'Fiz um livro de colorir com fotos da família para meus filhos e eles adoraram! As ilustrações ficaram incríveis e a qualidade do produto final superou todas as expectativas.',
    rating: 5,
    imageUrl: '/testimonials/person1.jpg',
  },
  {
    id: '2',
    name: 'Carlos Santos',
    role: 'Presente para os avós',
    quote: 'Presentear meus avós com um livro de colorir personalizado com fotos antigas da família foi uma ideia fantástica. Eles se emocionaram muito e foi uma forma única de reviver memórias.',
    rating: 5,
    imageUrl: '/testimonials/person2.jpg',
  },
  {
    id: '3',
    name: 'Beatriz Lima',
    role: 'Professora',
    quote: 'Criei um livro para minha sala de aula com fotos dos passeios e eventos escolares. As crianças se divertem muito colorindo e reconhecendo os momentos que viveram juntos.',
    rating: 5,
    imageUrl: '/testimonials/person3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-soft-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Descubra como nossos livros de colorir personalizados estão criando momentos especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-baby-pink/10" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="relative z-10">
                  <div className="flex space-x-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div
                  className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border-2"
                  style={{ borderColor: '#FFC1CC' }}
                >
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=FFC1CC&color=fff`;
                    }}
                  />
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-baby-pink hover:text-[#ffb3c0] font-medium inline-flex items-center transition-colors"
          >
            Ver todos os depoimentos
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;