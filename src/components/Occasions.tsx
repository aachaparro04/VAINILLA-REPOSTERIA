import { motion } from "motion/react";

const occasions = [
  {
    title: "Regalos Especiales",
    image: "https://images.unsplash.com/photo-1544480542-9500603c97be?q=80&w=800&auto=format&fit=crop",
    desc: "Sorprende a esa persona especial con un detalle que endulce su día."
  },
  {
    title: "Cumpleaños",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
    desc: "Celebra la vida con sabores que todos recordarán."
  },
  {
    title: "Fechas Importantes",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
    desc: "Día de la Madre, del Padre o aniversarios. Estamos en tus mejores momentos."
  }
];

export default function Occasions() {
  return (
    <section className="py-24 bg-brand-pink-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-xs">Momentos Vainilla</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text-main mt-2">Perfecto para cada ocasión</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {occasions.map((occ, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <img
                src={occ.image}
                alt={occ.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/90 via-brand-pink/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-vanilla mb-2">{occ.title}</h3>
                <p className="text-vanilla/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {occ.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
