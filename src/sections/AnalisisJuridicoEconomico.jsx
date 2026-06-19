import React from 'react';
import { Scale, BookOpen, AlertCircle, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import { juridicoEconomicoPoints } from '../data/localData';

export default function AnalisisJuridicoEconomico() {
  const iconMap = {
    'Ley de Franquicias (Arts. 1512-1524 CCyCN)': BookOpen,
    'Descalce de Monedas e Inflación': AlertCircle,
    'Solidaridad Laboral (Art. 30 LCT vs CCyCN)': Scale,
    'Responsabilidad por Calidad y Producto': Shield,
    'Obligaciones y repago del mutuo': Scale,
  };

  return (
    <section
      id="analisis-juridico"
      className="py-20 bg-gradient-to-b from-[#1C100A] to-[#140B07] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Análisis Jurídico-Económico Integrado"
          subtitle="Evaluación de riesgos legales, regulatorios y cambiarios asociados a la operación comercial en Argentina."
          badgeText="Perspectiva Derecho Económico"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {juridicoEconomicoPoints.map((point, index) => {
            const Icon = iconMap[point.title] || Scale;
            const isFullWidth = index === 4; // Fifth card spans full width for balance
            return (
              <div
                key={index}
                className={`bg-stone-900/40 border border-stone-850 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 group ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
                      {point.category}
                    </span>
                    
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 bg-stone-950/60 border border-stone-800 rounded text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-300 transition-colors">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {point.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed font-sans">
                    {point.description}
                  </p>

                  {/* Bullets if they exist */}
                  {point.bullets && (
                    <ul className="mt-3.5 space-y-2 text-xs text-stone-400 leading-relaxed font-sans border-t border-stone-800/40 pt-3.5">
                      {point.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                          <span>
                            <strong className="text-stone-300 font-semibold">{bullet.label}:</strong> {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Focus box */}
                <div className="mt-5 pt-4 border-t border-stone-800/60 flex items-start space-x-2 bg-amber-950/5 p-3 rounded-lg border border-amber-900/10">
                  <Scale size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      {point.focusLabel ? `${point.focusLabel}:` : 'Foco de Derecho Económico:'}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300/80 leading-relaxed font-serif italic">
                      {point.legalFocus}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
