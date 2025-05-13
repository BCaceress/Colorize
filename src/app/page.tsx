'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProcessSteps from '@/components/ProcessSteps';
import TransformationShowcase from '@/components/TransformationShowcase';
import PricingCards from '@/components/PricingCards';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Breve Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Reviva Suas Memórias de Uma Nova Forma</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nossos livros de colorir personalizados transformam suas fotos favoritas em ilustrações para colorir, 
              criando uma experiência única e divertida para você e sua família.
            </p>
            <p className="text-lg text-gray-600">
              Nossa equipe de artistas talentosos converte qualquer foto em belas ilustrações com linhas suaves
              e perfeitas para colorir, mantendo toda a essência e emoção das suas memórias.
            </p>
          </div>
        </div>
      </section>
      
      <ProcessSteps />
      <TransformationShowcase />
      
      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Por Que Escolher Nossos Livros de Colorir</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra os benefícios de transformar suas memórias em arte para colorir
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefício 1 */}
            <div className="bg-mint-green/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Presente Único</h3>
              <p className="text-gray-600">
                Crie um presente personalizado e significativo para amigos e familiares, diferente de qualquer coisa que já viram.
              </p>
            </div>
            
            {/* Benefício 2 */}
            <div className="bg-baby-pink/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-baby-pink rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Diversão Terapêutica</h3>
              <p className="text-gray-600">
                Colorir é uma atividade relaxante que reduz o estresse e a ansiedade, proporcionando momentos de tranquilidade.
              </p>
            </div>
            
            {/* Benefício 3 */}
            <div className="bg-butter-yellow/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-butter-yellow rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Memórias Duradouras</h3>
              <p className="text-gray-600">
                Preserve suas lembranças de uma forma interativa, permitindo reviver momentos especiais enquanto cria arte.
              </p>
            </div>
            
            {/* Benefício 4 */}
            <div className="bg-soft-blue/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ideal para Todas as Idades</h3>
              <p className="text-gray-600">
                Perfeito para crianças e adultos, proporcionando diversão para toda a família e momentos de conexão.
              </p>
            </div>
            
            {/* Benefício 5 */}
            <div className="bg-lavender/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Desenvolvimento Criativo</h3>
              <p className="text-gray-600">
                Estimule a criatividade e habilidades motoras finas enquanto se diverte dando vida às suas próprias memórias.
              </p>
            </div>
            
            {/* Benefício 6 */}
            <div className="bg-mint-green/10 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alta Qualidade</h3>
              <p className="text-gray-600">
                Impressão em papel premium com encadernação de alta qualidade para garantir que seu livro dure por muitos anos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <PricingCards />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}