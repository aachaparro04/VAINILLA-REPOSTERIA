import { motion } from "motion/react";

export default function Storytelling() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                alt="Nuestra historia"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold/30 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold font-medium tracking-widest uppercase text-xs">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mt-4 mb-8 leading-tight">
              De nuestra cocina familiar a tu mesa.
            </h2>
            <div className="space-y-6 text-text-main/80 leading-relaxed font-light text-lg">
              <p>
                Vainilla nació de un sueño compartido en una tarde de domingo, entre el aroma a canela y el calor de un horno que nunca descansaba. Lo que comenzó como un secreto familiar, hoy es nuestra forma de compartir amor con el mundo.
              </p>
              <p>
                No somos una fábrica; somos una familia que cree en el valor de lo hecho a mano. Cada "Beso de Ángel" que sale de nuestra cocina lleva consigo horas de dedicación y la promesa de un sabor que evoca los mejores recuerdos.
              </p>
              <p className="font-serif italic text-gold text-2xl pt-4">
                "Cocinamos como si fuera para nuestra propia familia, porque para nosotros, tú ya eres parte de ella."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
