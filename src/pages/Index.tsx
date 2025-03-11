
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
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
        // Add a delay and adjust for header height
        setTimeout(() => {
          const headerHeight = 80; // Approximate header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
        <section id="home" className="pt-16 md:pt-20">
          <Hero />
        </section>
        <section id="collezione">
          <ProductShowcase />
        </section>
        <section id="chi-siamo">
          <About />
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
