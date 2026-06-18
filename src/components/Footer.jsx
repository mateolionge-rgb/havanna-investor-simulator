import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#140B07] border-t border-amber-950 text-stone-400 py-12 relative overflow-hidden">
      {/* Subtle gold bottom-up glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-amber-600/5 rounded-t-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-stone-850 pb-8">
          
          {/* Logo & Project Description */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={handleScrollToTop}>
              <img src="/havanna-logo.png" className="h-9 w-auto object-contain flex-shrink-0" alt="Havanna Logo" />
              <span className="font-serif font-black tracking-wider text-amber-100 text-base uppercase">
                Havanna
              </span>
            </div>
            <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
              Modelado interactivo y análisis legal de franquicias comerciales para fines estrictamente académicos.
            </p>
          </div>

          {/* Academic Context Info */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex items-center space-x-2 text-amber-400">
              <GraduationCap size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">Cátedra Derecho Económico</span>
            </div>
            <p className="text-xs text-stone-400">
              Trabajo Práctico Universitario
            </p>
            <p className="text-[10px] text-stone-600 font-medium">
              Análisis Interdisciplinario: Derecho - Economía - Finanzas
            </p>
          </div>

          {/* Nav quick links / academic references */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Desarrollado en</span>
            <span className="text-xs text-stone-300 font-mono">React / Tailwind CSS v4</span>
            <button
              onClick={handleScrollToTop}
              className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors font-medium mt-1 cursor-pointer"
            >
              Volver al Inicio ↑
            </button>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-center text-[10px] text-stone-600 space-y-2 leading-relaxed">
          <p>
            © {new Date().getFullYear()} Havanna Investor Simulator. Desarrollado con fines educativos y de divulgación académica.
          </p>
          <p className="max-w-3xl mx-auto">
            Aviso Legal: Las proyecciones financieras, costos, tasas de mutuo y cláusulas detalladas en este simulador corresponden a valores promedio estimados del mercado de franquicias en Argentina y modelos de contratos estándares comerciales. No constituyen ofertas de contratación ni asesoría financiera vinculante oficial por parte de Havanna S.A.
          </p>
        </div>
      </div>
    </footer>
  );
}
