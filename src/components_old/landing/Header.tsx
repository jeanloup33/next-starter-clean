/**
 * Composant Header pour la page d'accueil
 * Affiche le logo et le titre du starter kit
 */

import Image from "next/image";

export function Header() {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Logo et titre */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Starter Kit
          </h1>
          <div className="bg-white dark:bg-white border border-gray-300 dark:border-gray-600 rounded-[10px] p-1">
            <Image 
              src="/next.svg" 
              alt="Next.js Logo" 
              width={100} 
              height={24} 
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 