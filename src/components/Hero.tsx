"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Estilo e Tradição em Cada Corte
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
        >
          Na Barbearia Canoinha, transformamos seu visual com técnicas modernas
          e um toque clássico. Venha experimentar a melhor experiência em
          cuidados masculinos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="#agendar"
            className="duration-300 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-md text-lg font-semibold"
          >
            Agendar Agora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
