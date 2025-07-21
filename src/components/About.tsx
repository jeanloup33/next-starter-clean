import React from 'react';
import { HiLightBulb, HiAcademicCap, HiUsers, HiTrendingUp, HiStar, HiHeart } from 'react-icons/hi';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Histoire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 2021, nous révolutionnons l'apprentissage de l'Intelligence Artificielle 
            en rendant cette technologie accessible à tous.
          </p>
        </div>

        {/* Timeline et contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="space-y-6 relative">
              {/* Ligne verticale de timeline */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600"></div>
              
              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <HiLightBulb className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2021 - La Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fondée en pleine révolution de l'IA, notre société est née d'une conviction : 
                    l'Intelligence Artificielle ne doit plus être réservée aux experts. Nous avons créé 
                    une plateforme pour démocratiser ces connaissances essentielles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2022 - L'Innovation Pédagogique</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Développement de notre méthode d'apprentissage unique, alliant théorie et pratique. 
                    Nos premiers étudiants découvrent l'IA à travers des projets concrets et des cas d'usage réels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <HiUsers className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2023 - La Communauté</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Création d'une communauté dynamique de plus de 10 000 apprenants. 
                    Lancement de nos programmes avancés et partenariats avec les leaders de l'industrie.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <HiTrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2024 - L'Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aujourd'hui, nous sommes fiers d'avoir formé des milliers de professionnels 
                    qui transforment leurs carrières grâce à l'IA. Notre mission continue !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques et valeurs */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nos Valeurs
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <HiStar className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600 text-sm">Des formations de qualité supérieure</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <HiUsers className="w-8 h-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessibilité</h4>
                    <p className="text-gray-600 text-sm">L'IA pour tous, quel que soit le niveau</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <HiHeart className="w-8 h-8 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Passion</h4>
                    <p className="text-gray-600 text-sm">L'amour de l'innovation et du partage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 text-sm">Années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Cours disponibles</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600 text-sm">Projets réalisés</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support expert</div>
              </div>
            </div>
          </div>
        </div>

        {/* Citation inspirante */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <blockquote className="text-xl lg:text-2xl font-medium mb-4">
            "L'Intelligence Artificielle n'est pas l'avenir, c'est le présent. 
            Notre mission est de vous donner les clés pour le maîtriser."
          </blockquote>
          <cite className="text-blue-200">— Équipe Fondatrice, 2021</cite>
        </div>
      </div>
    </section>
  );
};

export default About;