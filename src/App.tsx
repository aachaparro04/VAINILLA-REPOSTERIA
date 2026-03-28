/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValuePillars from "./components/ValuePillars";
import ProductGrid from "./components/ProductGrid";
import Storytelling from "./components/Storytelling";
import Testimonials from "./components/Testimonials";
import Occasions from "./components/Occasions";
import GeminiRecommender from "./components/GeminiRecommender";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-pink-soft selection:bg-gold/30 selection:text-text-main">
      <Navbar />
      
      <main>
        <Hero />
        
        <ValuePillars />
        
        <ProductGrid />
        
        <Storytelling />
        
        <Occasions />

        <GeminiRecommender />
        
        <Testimonials />

        {/* Final CTA Section */}
        <section className="py-24 bg-brand-pink text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">
                ¿Listo para endulzar tu día?
              </h2>
              <p className="text-text-main/70 mb-10 text-lg">
                Haz tu pedido hoy y descubre por qué somos la repostería favorita de quienes celebran con el corazón.
              </p>
              <button
                onClick={() => window.open('https://wa.me/573156871966?text=Hola! Quiero hacer un pedido.', '_blank')}
                className="inline-flex items-center gap-3 bg-white text-text-main px-10 py-5 rounded-full text-lg font-medium hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Pedir por WhatsApp
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
