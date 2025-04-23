"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="hover:scale-105 border-b border-transparent cursor-default hover:border-yellow-500 duration-300 md:text-2xl py-[2px] font-bold text-yellow-500">
              Canoinha Barbershop
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="inicio"
                spy={true}
                smooth={true}
                offset={-100}
                className="hover:scale-105 cursor-pointer duration-300 hover:border-b border-b border-transparent hover:border-yellow-500 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Início
              </Link>
              <Link
                to="sobre"
                spy={true}
                smooth={true}
                offset={-100}
                className="hover:scale-105 cursor-pointer duration-300 hover:border-b border-b border-transparent hover:border-yellow-500 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Sobre Nós
              </Link>
              <Link
                to="servicos"
                spy={true}
                smooth={true}
                offset={-100}
                className="hover:scale-105 cursor-pointer duration-300 hover:border-b border-b border-transparent hover:border-yellow-500 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Serviços
              </Link>
              <Link
                to="inicio"
                spy={true}
                smooth={true}
                offset={-100}
                className="hover:scale-105 cursor-pointer duration-300 hover:border-b border-b border-transparent hover:border-yellow-500 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contato
              </Link>
            </div>
          </div>
          <div className="cursor-default hover:scale-110 transition-all duration-300">
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              offset={-100}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer"
            >
              Agendar Horário
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
