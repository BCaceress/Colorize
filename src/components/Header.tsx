import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  return (
    <header style={{backgroundColor: '#FFC1CC', backgroundImage: 'linear-gradient(to right, #FFC1CC, #AEE1F9, #C6F2D8, #E2D4F0)'}} className="sticky top-0 z-50 shadow-lg h-20">
      <div className="w-full px-4 md:px-8 h-full flex items-center justify-between">{/* Logo e Intuito */}        <div className="flex items-center pl-0 md:pl-0 lg:pl-0">
          <Link href="/" className="flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <img src="/images/logo.png" alt="Logo" className="h-36 w-auto ml-0" />
          </Link>
          <span className="hidden sm:inline text-sm text-white font-medium border-l border-white/50 pl-3 ml-5 animate-pulse">
            Transforme fotos em livros de colorir personalizados
          </span>
        </div>{/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link
            href="/como-funciona"
            className="text-white font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Como Funciona
          </Link>
          <Link
            href="/exemplos"
            className="text-white font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Galeria
          </Link>
          <Link
            href="/precos"
            className="text-white font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Preços
          </Link>
          <Link
            href="/faq"
            className="text-white font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            FAQ
          </Link>          <Button 
            variant="outline" 
            size="pill" 
            className="ml-4 mr-0 md:mr-0 lg:mr-0 border-2 border-white text-white hover:bg-white hover:text-baby-pink font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Criar Meu Livro
          </Button>
        </nav>{/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{backgroundColor: '#FFC1CC', backgroundImage: 'linear-gradient(to bottom, #FFC1CC, #AEE1F9, #C6F2D8, #E2D4F0)'}} className="md:hidden border-t border-white/20 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-5 py-6 text-sm">
            <Link
              href="/como-funciona"
              className="text-white font-medium py-2 border-b border-white/20 hover:pl-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="/exemplos"
              className="text-white font-medium py-2 border-b border-white/20 hover:pl-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="/precos"
              className="text-white font-medium py-2 border-b border-white/20 hover:pl-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="/faq"
              className="text-white font-medium py-2 border-b border-white/20 hover:pl-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button
              variant="outline"
              size="pill"
              className="w-full justify-center mt-4 border-2 border-white text-white hover:bg-white hover:text-baby-pink font-bold shadow-md transition-all duration-300"
            >
              Criar Meu Livro
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;