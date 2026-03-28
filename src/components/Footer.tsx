import { motion } from "motion/react";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-10 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif text-cacao mb-6 tracking-tighter">VAINILLA</h2>
            <p className="text-cacao/70 max-w-sm leading-relaxed mb-8">
              Repostería artesanal premium enfocada en crear experiencias sensoriales y momentos inolvidables para ti y los tuyos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white rounded-full text-cacao hover:text-gold hover:shadow-md transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-cacao hover:text-gold hover:shadow-md transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-cacao hover:text-gold hover:shadow-md transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-cacao mb-6 uppercase text-xs tracking-widest">Navegación</h4>
            <ul className="space-y-4 text-cacao/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-gold transition-colors">Productos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-cacao mb-6 uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-cacao/60 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                Bogotá, Colombia
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-gold" />
                +57 315 687 1966
              </li>
              <li className="italic mt-4 text-cacao/40">
                "Hecho con amor, para momentos especiales."
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-cacao/5 text-center text-cacao/40 text-xs">
          <p>© {new Date().getFullYear()} VAINILLA Repostería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
