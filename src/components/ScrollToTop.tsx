'use client';

import { useState, useEffect, useCallback } from 'react';
import { HiArrowUp } from 'react-icons/hi2';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour remonter en haut de la page (optimisée avec useCallback)
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Afficher le bouton quand l'utilisateur fait défiler vers le bas (avec throttling)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const shouldShow = window.pageYOffset > 300;
        setIsVisible(prev => prev !== shouldShow ? shouldShow : prev);
      }, 100);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          aria-label="Retour en haut de la page"
        >
          <HiArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;