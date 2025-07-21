import React from 'react';
import Header from '../src/components/header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Services from '../src/components/Services';
import AvisClients from '../src/components/AvisClients';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="avis">
          <AvisClients />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}