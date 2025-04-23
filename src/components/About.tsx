"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="cursor-default hover:bg-black/30 backdrop-blur-md hover:scale-110 transition-all duration-300 rounded-lg p-6">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 tracking-tight"
            >
              Nossa História
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-300 mb-4 font-light"
            >
              Fundada em 2015, a Barbearia Canoinha nasceu da paixão por
              transformar o visual masculino. Nossa equipe de barbeiros
              experientes combina técnicas tradicionais com tendências modernas
              para criar looks únicos e personalizados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-gray-300 mb-4 font-light"
            >
              Ao longo dos anos, nos tornamos referência na região, não apenas
              pelos nossos serviços, mas também pelo ambiente acolhedor e pela
              atenção especial que dedicamos a cada cliente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-gray-300 font-light"
            >
              Nossa missão é proporcionar uma experiência única, onde cada
              cliente se sinta especial e saia com um visual que reflita sua
              personalidade e estilo.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                +8 Anos
              </h3>
              <p className="text-gray-300 font-light">
                De experiência no mercado
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                +5000
              </h3>
              <p className="text-gray-300 font-light">Clientes satisfeitos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                100%
              </h3>
              <p className="text-gray-300 font-light">
                Profissionais certificados
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                4.9/5
              </h3>
              <p className="text-gray-300 font-light">
                Avaliação média dos clientes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
