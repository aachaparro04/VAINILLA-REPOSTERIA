import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "El Beso de Ángel es, sin duda, el mejor postre que he probado en mi vida. La presentación es impecable.",
    author: "Carolina Méndez",
    role: "Cliente frecuente"
  },
  {
    text: "Pedí una tarta para el cumpleaños de mi madre y todos quedaron fascinados. Se nota la calidad de los ingredientes.",
    author: "Andrés Felipe",
    role: "Celebración familiar"
  },
  {
    text: "Vainilla se ha convertido en mi opción número uno para regalos corporativos. Siempre quedo muy bien.",
    author: "Mariana Ríos",
    role: "Empresaria"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-pink-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-text-main">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-vanilla border border-cream relative"
            >
              <Quote className="text-gold/20 absolute top-6 right-6" size={40} />
              <p className="text-text-main/80 italic mb-6 relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="font-medium text-text-main">{t.author}</p>
                <p className="text-gold text-xs uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
