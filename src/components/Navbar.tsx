import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Productos", href: "#productos" },
    { name: "Historia", href: "#historia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif text-cacao tracking-tighter">
            VAINILLA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cacao/70 hover:text-gold transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => window.open('https://wa.me/573156871966', '_blank')}
              className="bg-cacao text-vanilla px-6 py-2 rounded-full text-sm font-medium hover:bg-cacao/90 transition-all shadow-md"
            >
              Pedir ahora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cacao p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-vanilla flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-cacao p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-cacao hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => window.open('https://wa.me/573156871966', '_blank')}
              className="mt-4 bg-cacao text-vanilla px-10 py-4 rounded-full text-lg font-medium shadow-xl flex items-center gap-2"
            >
              <MessageCircle size={24} />
              WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky WhatsApp Button for Mobile */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://wa.me/573156871966', '_blank')}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl md:hidden"
      >
        <MessageCircle size={28} />
      </motion.button>
    </>
  );
}
