import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">          <div>
            <Link href="/" className="inline-block mb-4">
              <img src="/images/logo.png" alt="Logo" className="h-28 w-auto" />
            </Link>
            <p className="text-gray-600 mb-6">
              Transformamos suas fotos favoritas em arte para colorir, criando momentos especiais para toda a família.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow text-baby-pink hover:text-[#ffb3c0]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow text-baby-pink hover:text-[#ffb3c0]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow text-baby-pink hover:text-[#ffb3c0]"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/como-funciona" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/exemplos" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Galeria de Exemplos
                </Link>
              </li>
              <li>
                <Link href="/precos" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Preços e Planos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/devolucoes" className="text-gray-600 hover:text-baby-pink transition-colors">
                  Política de Devoluções
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-baby-pink mr-3 mt-0.5" />
                <span className="text-gray-600">
                  <a href="mailto:contato@memoriasilustradas.com.br" className="hover:text-baby-pink transition-colors">
                    contato@memoriasilustradas.com.br
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-baby-pink mr-3 mt-0.5" />
                <span className="text-gray-600">
                  <a href="tel:+5511999999999" className="hover:text-baby-pink transition-colors">
                    (11) 99999-9999
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-baby-pink mr-3 mt-0.5" />
                <span className="text-gray-600">
                  São Paulo, SP
                  <br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Memórias Ilustradas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;