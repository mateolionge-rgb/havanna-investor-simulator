import React from 'react';
import { Landmark, TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function HeroSection() {
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#1C100A] via-[#24150E] to-[#140B07] text-white"
    >
      {/* Background Decorative Ambient Blurs */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-[#3C2314]/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Gold Grid Lines (subtle overlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(#3c2314_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Copy (Left on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge variant="gold" className="text-xs uppercase tracking-widest px-3 py-1 font-semibold animate-pulse">
                Derecho Económico y Financiero
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Havanna <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                Investor Simulator
              </span>
            </h1>

            <p className="text-lg font-medium text-amber-100/90 max-w-xl mx-auto lg:mx-0 font-serif italic">
              Análisis jurídico y económico de una inversión en franquicia
            </p>

            <p className="text-sm sm:text-base text-stone-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
              Una propuesta interactiva integral para evaluar la viabilidad jurídica, económica y financiera de invertir en una franquicia Havanna. Analice cláusulas contractuales, esquemas de financiamiento por mutuo y simule rendimientos bajo múltiples escenarios de mercado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="primary"
                onClick={() => handleScrollTo('simulador')}
                className="w-full sm:w-auto px-8 py-3.5"
              >
                <TrendingUp size={18} className="mr-2" />
                Ver simulador
              </Button>

              <Button
                variant="secondary"
                onClick={() => handleScrollTo('contrato')}
                className="w-full sm:w-auto px-8 py-3.5"
              >
                <Landmark size={18} className="mr-2 text-amber-400" />
                Ver estructura contractual
              </Button>
            </div>
          </div>

          {/* Investment Executive Summary Card (Right on desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-stone-900/60 border border-amber-900/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative group transition-all duration-300 hover:border-amber-500/40 hover:shadow-amber-500/5">

              {/* Gold light corner effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500" />

              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center space-x-2">
                  <img src="/havanna-logo.png" className="w-9 h-9 object-contain flex-shrink-0" alt="Havanna Logo" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Resumen Ejecutivo</span>
                </div>
                <Badge variant="success">Fase Inicial</Badge>
              </div>

              <div className="py-6 space-y-2">
                <span className="text-xs font-semibold text-amber-500/90 uppercase tracking-wide block">Inversión Estimada Total</span>
                <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight flex items-baseline">
                  USD 194.500
                  <span className="text-xs text-stone-500 font-sans ml-2 font-normal">FOB Estimado</span>
                </div>
                <p className="text-xs text-stone-400 pt-1 leading-relaxed">
                  Basado en una sucursal estándar (cafetería y retail) con adecuación edilicia, equipamiento completo, pedido inicial de insumos y fee de ingreso de marca incluido.
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-stone-800">
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Fee de Ingreso: <strong className="text-white">USD 19.500</strong></span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Obra Civil, Muebles y Equipos: <strong className="text-white">USD 150.000</strong></span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Mercadería, Insumos y Bazar: <strong className="text-white">USD 25.000</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Plazo contractual sugerido: <strong className="text-white">4 a 5 años</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Financiamiento propuesto: <strong className="text-white">USD 134.500 mediante mutuo</strong></span>
                </div>
              </div>

              <div className="mt-6 text-center text-stone-500 text-[10px] italic">
                * Datos para análisis académico en la materia Derecho Económico.
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => handleScrollTo('por-que-havanna')}>
          <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Comenzar Análisis</span>
          <ChevronDown size={18} className="text-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
