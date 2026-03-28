import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, MessageCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

export default function GeminiRecommender() {
  const [input, setInput] = useState("");
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRecommendation(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Actúa como un experto sommelier de postres para "VAINILLA Repostería". 
        Nuestros productos son: 
        1. Beso de Ángel (Vainilla, capas de crema, suave).
        2. Tarta de Chocolate Real (Chocolate premium, almendras, sal).
        3. Cheesecake de Frutos Rojos (Cremoso, moras y frambuesas).
        4. Éclair de Vainilla Bourbon (Masa choux, crema pastelera).

        El usuario dice: "${input}". 
        Recomienda el postre ideal de forma elegante, breve y persuasiva. Máximo 3 líneas.`,
      });

      setRecommendation(response.text || "Te recomendamos nuestro 'Beso de Ángel', perfecto para cualquier ocasión especial.");
    } catch (error) {
      console.error(error);
      setRecommendation("Para tu ocasión, nada supera a nuestro clásico 'Beso de Ángel'. ¡Te va a encantar!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-pink text-text-main overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gold/20 rounded-lg">
              <Sparkles className="text-gold" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">¿No sabes qué elegir?</h2>
          </div>
          
          <p className="text-text-main/70 mb-10 text-lg font-light">
            Cuéntanos para qué ocasión es el postre (un cumpleaños, un regalo, un antojo personal) y nuestra IA te recomendará la opción perfecta.
          </p>

          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && getRecommendation()}
              placeholder="Ej: Es para el aniversario con mi esposa, le encanta el chocolate..."
              className="w-full bg-white/50 border border-text-main/10 rounded-2xl py-5 px-6 pr-16 text-text-main placeholder:text-text-main/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              onClick={getRecommendation}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-gold text-text-main rounded-xl hover:bg-gold-light transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {recommendation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-10 p-6 bg-gold/10 border border-gold/20 rounded-2xl"
              >
                <p className="text-xl font-serif italic text-gold-light leading-relaxed">
                  "{recommendation}"
                </p>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => window.open(`https://wa.me/573156871966?text=Hola! Me recomendaron este postre: ${recommendation}`, '_blank')}
                    className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors"
                  >
                    <MessageCircle size={18} />
                    Pedir recomendación por WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
