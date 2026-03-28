import { motion } from "motion/react";
import { MessageCircle, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Beso de Ángel",
    description: "Nuestra creación estrella: una nube de vainilla con capas de crema suave y un toque secreto de la casa.",
    price: "$12.500",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Tarta de Chocolate Real",
    description: "Intenso chocolate premium con una base crujiente de almendras y flor de sal.",
    price: "$14.000",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    name: "Cheesecake de Frutos Rojos",
    description: "Textura cremosa inigualable con coulis natural de moras y frambuesas silvestres.",
    price: "$11.500",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    name: "Éclair de Vainilla Bourbon",
    description: "Masa choux ligera rellena de crema pastelera infusionada con vainilla natural.",
    price: "$8.500",
    image: "https://images.unsplash.com/photo-1621236304195-06bb1d5f48ae?q=80&w=800&auto=format&fit=crop",
    featured: false
  }
];

export default function ProductGrid() {
  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hola! Me gustaría pedir el postre: ${productName}`);
    window.open(`https://wa.me/573156871966?text=${message}`, '_blank');
  };

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-xs">Nuestra Selección</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text-main mt-2">Favoritos de la Casa</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Star size={10} fill="currentColor" />
                    Producto Estrella
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="bg-white text-text-main px-6 py-2 rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Pedir ahora
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-text-main">{product.name}</h3>
                  <span className="text-gold font-medium">{product.price}</span>
                </div>
                <p className="text-text-main/60 text-sm leading-relaxed mb-6 italic">
                  "{product.description}"
                </p>
                <button
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full py-3 border border-cream rounded-xl text-text-main text-sm font-medium flex items-center justify-center gap-2 hover:bg-cream transition-colors"
                >
                  <MessageCircle size={16} className="text-gold" />
                  Pedir por WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
