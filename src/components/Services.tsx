import React from 'react';
import { 
  HiBadgeCheck, 
  HiUserGroup, 
  HiLightningBolt, 
  HiChip, 
  HiTrendingUp,
  HiStar,
  HiClock,
  HiGlobe
} from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Formation Personnalisée IA",
      subtitle: "Apprentissage adapté à votre niveau",
      description: "Parcours d'apprentissage sur-mesure avec IA adaptive qui s'ajuste à votre rythme et style d'apprentissage. Projets pratiques, mentorat 1:1 et accès à nos labs exclusifs.",
      icon: HiChip,
      features: [
        "IA adaptive personnalisée",
        "Projets réels d'entreprise",
        "Mentorat individuel",
        "Accès labs exclusifs"
      ],
      price: "À partir de 299€/mois",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      bgGradient: "from-blue-50 to-purple-50",
      popular: true
    },
    {
      id: 2,
      title: "Certification Professionnelle",
      subtitle: "Validez vos compétences IA",
      description: "Obtenez des certifications reconnues par l'industrie. Évaluations pratiques, projets portfolio et badge numérique vérifié pour booster votre carrière.",
      icon: HiBadgeCheck,
      features: [
        "Certifications reconnues",
        "Évaluations pratiques",
        "Portfolio professionnel",
        "Badge numérique vérifié"
      ],
      price: "À partir de 199€/certification",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50",
      popular: false
    },
    {
      id: 3,
      title: "Accompagnement Carrière",
      subtitle: "Transition vers l'IA garantie",
      description: "Programme complet de reconversion avec garantie emploi. Coaching carrière, réseau d'entreprises partenaires et suivi post-formation pendant 12 mois.",
      icon: HiTrendingUp,
      features: [
        "Garantie emploi",
        "Coaching carrière dédié",
        "Réseau entreprises",
        "Suivi 12 mois"
      ],
      price: "À partir de 499€/mois",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGradient: "from-orange-50 to-red-50",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <HiLightningBolt className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos solutions innovantes pour maîtriser l'Intelligence Artificielle et transformer votre carrière
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                  service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <HiStar className="w-4 h-4" />
                      <span>Populaire</span>
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}>
                    Découvrir ce service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <HiClock className="w-5 h-5 text-blue-500" />
              <span className="text-sm">Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <HiUserGroup className="w-5 h-5 text-purple-500" />
              <span className="text-sm">Communauté active</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <HiGlobe className="w-5 h-5 text-indigo-500" />
              <span className="text-sm">Accès mondial</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre carrière ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Rejoignez plus de 10 000 professionnels qui ont déjà fait le choix de l'excellence avec nos formations IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center">
              Consultation gratuite
            </a>
            <a href="#services" className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center">
              Voir tous nos programmes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;