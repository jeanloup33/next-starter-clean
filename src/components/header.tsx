'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiHome, HiInformationCircle, HiCog, HiMail, HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Titre à gauche */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl sm:text-2xl font-bold hover:text-blue-200 transition-colors duration-200">
              IA Formation
            </Link>
          </div>

          {/* Navigation desktop - cachée sur mobile */}
          <nav className="hidden md:flex space-x-2">
            <button onClick={() => scrollToSection('home')} className="group flex items-center space-x-2 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <HiHome className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Accueil</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="group flex items-center space-x-2 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <HiInformationCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>À propos</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="group flex items-center space-x-2 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <HiCog className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
              <span>Services</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="group flex items-center space-x-2 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Bouton hamburger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-800 p-2 rounded-lg focus:outline-none transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <HiMenu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile - affiché quand isMenuOpen est true */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gradient-to-r from-blue-800 to-purple-700 bg-opacity-90 rounded-lg mt-2 backdrop-blur-sm">
            <button
              onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
              className="group flex items-center space-x-3 text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 w-full text-left"
            >
              <HiHome className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Accueil</span>
            </button>
            <button
              onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
              className="group flex items-center space-x-3 text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 w-full text-left"
            >
              <HiInformationCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>À propos</span>
            </button>
            <button
              onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }}
              className="group flex items-center space-x-3 text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 w-full text-left"
            >
              <HiCog className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Services</span>
            </button>
            <button
              onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
              className="group flex items-center space-x-3 text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 w-full text-left"
            >
              <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;