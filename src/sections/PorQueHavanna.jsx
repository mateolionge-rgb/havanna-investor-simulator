import React from 'react';
import { Award, CheckSquare, Layers, Calendar, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import InfoCard from '../components/InfoCard';
import { whyHavannaPoints } from '../data/localData';

export default function PorQueHavanna() {
  // Map string icon names to Lucide icons
  const iconMap = {
    Award: Award,
    CheckSquare: CheckSquare,
    Layers: Layers,
    Calendar: Calendar,
    Shield: Shield,
  };

  return (
    <section
      id="por-que-havanna"
      className="py-20 bg-gradient-to-b from-[#140B07] to-[#1C100A] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="¿Por qué elegir la franquicia Havanna?"
          subtitle="Análisis económico del posicionamiento de mercado de la marca líder en alfajores y cafetería premium."
          badgeText="Valor de Marca"
        />

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {whyHavannaPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || Award;
            return (
              <InfoCard
                key={index}
                title={point.title}
                description={point.description}
                icon={Icon}
                variant="default"
                className="hover:translate-y-[-4px] h-full"
              />
            );
          })}
        </div>

        {/* Highlighted final phrase */}
        <div className="mt-12 text-center max-w-3xl mx-auto bg-gradient-to-r from-amber-950/40 via-amber-900/10 to-amber-950/40 border border-amber-900/30 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-600 to-amber-400" />
          <p className="text-sm sm:text-base md:text-lg font-serif italic text-amber-250 leading-relaxed pl-2">
            "No se propone invertir en una cafetería cualquiera, sino en un sistema comercial probado, con marca reconocida y estructura contractual definida."
          </p>
        </div>

        {/* Brand Strength Statistics */}
        <div className="mt-16 bg-stone-900/40 border border-stone-850 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-1">
              <span className="text-4xl md:text-5xl font-extrabold text-amber-400 font-mono">+75</span>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Años de Historia</p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">Fundada en 1947 en Mar del Plata, consolidándose como líder indiscutida.</p>
            </div>
            
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-stone-800/80 pt-6 sm:pt-0 sm:pl-6">
              <span className="text-4xl md:text-5xl font-extrabold text-amber-400 font-mono">+250</span>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Puntos de Venta</p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">Presencia en toda Argentina y exportación a más de 10 países de América y Europa.</p>
            </div>

            <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-stone-800/80 pt-6 lg:pt-0 lg:pl-6">
              <span className="text-4xl md:text-5xl font-extrabold text-amber-400 font-mono">100M+</span>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Alfajores anuales</p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">Volumen masivo de producción en su planta modelo automatizada.</p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-stone-800/80 pt-6 sm:pt-0 sm:pl-6 font-mono">
              <span className="text-4xl md:text-5xl font-extrabold text-amber-400 font-mono">100%</span>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Reconocimiento</p>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed font-sans">Top of mind indiscutido en la categoría alfajores artesanales y cafetería.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
