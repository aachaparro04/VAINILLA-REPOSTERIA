import { motion } from "motion/react";
import { Heart, Sparkles, Gift, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <Heart className="text-gold" size={32} />,
    title: "Hecho con Amor",
    description: "Recetas familiares que han pasado de generación en generación, manteniendo la esencia artesanal."
  },
  {
    icon: <Leaf className="text-gold" size={32} />,
    title: "Ingredientes Premium",
    description: "Seleccionamos solo lo mejor: vainilla natural, cacao de origen y frutas frescas de temporada."
  },
  {
    icon: <Sparkles className="text-gold" size={32} />,
    title: "Presentación Elegante",
    description: "Cada postre es una obra de arte visual, diseñada para sorprender antes del primer bocado."
  },
  {
    icon: <Gift className="text-gold" size={32} />,
    title: "Ideal para Regalar",
    description: "Nuestros empaques están pensados para convertir un detalle en una experiencia inolvidable."
  }
];

export default function ValuePillars() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 text-text-main">{pillar.title}</h3>
              <p className="text-text-main/70 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
