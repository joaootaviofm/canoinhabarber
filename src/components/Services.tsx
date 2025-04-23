"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 tracking-tight"
        >
          Nossos Serviços
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="cursor-default hover:scale-105 transition-all duration-300 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">
              Corte Tradicional
            </h3>
            <p className="text-gray-300 font-light">
              Corte de cabelo com técnicas tradicionais e modernas, garantindo
              um visual impecável e personalizado.
            </p>
          </div>
          <div className="cursor-default hover:scale-105 transition-all duration-300 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">
              Barba Completa
            </h3>
            <p className="text-gray-300 font-light">
              Tratamento completo para sua barba, incluindo corte, modelagem e
              hidratação para um visual sofisticado.
            </p>
          </div>
          <div className="cursor-default hover:scale-105 transition-all duration-300 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-500">
              Pacote Premium
            </h3>
            <p className="text-gray-300 font-light">
              Experiência completa com corte, barba, massagem e tratamentos
              especiais para renovar seu visual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
