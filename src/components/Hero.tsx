import { motion } from "motion/react";
import { ShoppingBag, MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/573156871966?text=Hola%20Vainilla!%20Me%20gustaría%20hacer%20un%20pedido.', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1920&auto=format&fit=crop"
          alt="Postre artesanal premium"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-vanilla/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block text-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">
            Repostería Artesanal Familiar
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-cacao mb-6 leading-[1.1] text-balance">
            Creamos momentos que se quedan en el <span className="italic">corazón</span>.
          </h1>
          <p className="text-lg md:text-xl text-cacao/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Postres premium elaborados con ingredientes de origen y el cuidado de una tradición familiar que celebra cada detalle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-cacao text-vanilla rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-cacao/90 transition-colors"
            >
              <MessageCircle size={20} />
              Ordenar ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cacao text-cacao rounded-full font-medium flex items-center justify-center gap-2 hover:bg-cacao/5 transition-colors"
            >
              <ShoppingBag size={20} />
              Ver productos
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-cacao"></div>
      </div>
    </section>
  );
}
