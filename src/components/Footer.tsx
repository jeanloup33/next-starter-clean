import React from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  IA Formation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Votre partenaire de confiance pour maîtriser l'Intelligence Artificielle et transformer votre carrière professionnelle.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Formations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Formation IA
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Deep Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    Certification
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HiLocationMarker className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Avenue de l'Innovation<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <HiPhone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    +33 1 23 45 67 89
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <HiMail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:contact@iaformation.fr" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    contact@iaformation.fr
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="text-md font-semibold mb-3">Newsletter</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 text-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 IA Formation. Tous droits réservés.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Fait avec</span>
                <HiHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>en France</span>
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;