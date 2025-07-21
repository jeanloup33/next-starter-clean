'use client';
import React, { useState, useEffect } from 'react';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const AvisClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Data Scientist",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "La formation IA proposée par cette entreprise a complètement transformé ma carrière. Les concepts complexes sont expliqués de manière claire et pratique."
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Développeur Full Stack",
      company: "StartupIA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent accompagnement tout au long du processus de certification. L'équipe est très professionnelle et à l'écoute."
    },
    {
      id: 3,
      name: "Marie Dubois",
      role: "Chef de Projet IA",
      company: "InnovTech",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Grâce à leur programme, j'ai pu évoluer vers un poste de responsabilité en IA. La qualité de l'enseignement est remarquable."
    },
    {
      id: 4,
      name: "Pierre Laurent",
      role: "Consultant IA",
      company: "AI Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Une approche pédagogique innovante qui m'a permis de maîtriser rapidement les outils d'IA les plus récents."
    },
    {
      id: 5,
      name: "Julie Chen",
      role: "Analyste Business Intelligence",
      company: "DataFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Le suivi personnalisé et les projets pratiques m'ont donné la confiance nécessaire pour me spécialiser en IA."
    },
    {
      id: 6,
      name: "Alexandre Moreau",
      role: "Ingénieur Machine Learning",
      company: "DeepTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Formation exceptionnelle avec des cas d'usage concrets. J'ai pu appliquer immédiatement mes nouvelles compétences dans mon travail quotidien."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <HiStar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Avis de nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos apprenants qui ont transformé leur carrière grâce à nos formations IA
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Note moyenne</p>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Avis clients</p>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative" suppressHydrationWarning>
          {!mounted ? (
            <div className="flex flex-wrap justify-center gap-8">
              {testimonials.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative group">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="w-12 h-12 text-blue-500 text-6xl font-serif">"</div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Comment */}
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.comment}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative group">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-12 h-12 text-blue-500 text-6xl font-serif">"</div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Comment */}
                      <p className="text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonial.comment}"
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center space-x-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          {mounted && (
            <>
              <div className="flex justify-center space-x-4 mt-8">
                <button 
                  onClick={prevSlide}
                  className="bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all duration-300 group"
                >
                  <HiChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all duration-300 group"
                >
                  <HiChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos apprenants satisfaits
            </h3>
            <p className="text-gray-600 mb-6">
              Plus de 10 000 professionnels nous font confiance pour leur formation en Intelligence Artificielle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Voir tous les avis
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Laisser un avis
              </button>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default AvisClients;