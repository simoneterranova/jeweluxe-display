
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Servizi from '@/components/Servizi';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section to scroll to from navigation
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a delay to ensure DOM is fully loaded
        setTimeout(() => {
          // Use the scroll-margin-top value set in CSS
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      
      // Clear the state to avoid scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="collezione">
          <ProductShowcase />
        </section>
        <section id="chi-siamo">
          <About />
        </section>
        <section id="servizi">
          <Servizi />
        </section>
        <section id="testimonial">
          <Testimonials />
        </section>
        <section id="contatti">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
