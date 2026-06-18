import React, { useState } from 'react';
import { FileText, ChevronRight, Scale, Bookmark, Shield, UserCheck, Package, CreditCard, Award, Activity, ArrowRight, ArrowDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import { franchiseContractClauses } from '../data/localData';

export default function ContratoFranquicia() {
  const [activeTab, setActiveTab] = useState(franchiseContractClauses[0].id);

  const activeClause = franchiseContractClauses.find((c) => c.id === activeTab);

  const contractParts = [
    {
      title: 'Franquiciante',
      desc: 'Havanna S.A., titular exclusivo del sistema comercial, la marca y los derechos de propiedad intelectual.',
      icon: Shield,
    },
    {
      title: 'Franquiciado',
      desc: 'El profesor/inversor que financia, explota y gestiona el local comercial bajo las reglas impuestas por la marca.',
      icon: UserCheck,
    },
    {
      title: 'Objeto',
      desc: 'Uso de la marca registrada, transferencia de know-how, manuales operativos, imagen comercial y sistema de ventas.',
      icon: Package,
    },
    {
      title: 'Contraprestación',
      desc: 'Fee de ingreso inicial, inversión total y el pago periódico de regalías mensuales y fondo de publicidad.',
      icon: CreditCard,
    },
    {
      title: 'Asistencia Técnica',
      desc: 'Capacitación al personal, supervisión en el cumplimiento de estándares y asesoría comercial continua.',
      icon: Award,
    },
    {
      title: 'Autonomía',
      desc: 'El franquiciado conserva su independencia jurídica y económica frente a la marca, asumiendo su propio riesgo comercial.',
      icon: Activity,
    },
  ];

  return (
    <section
      id="contrato"
      className="py-20 bg-gradient-to-b from-[#1C100A] to-[#140B07] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="El Contrato de Franquicia Comercial"
          subtitle="Marco de estructuración legal de la inversión conforme al Código Civil y Comercial de la Nación Argentina (Arts. 1512 a 1524)."
          badgeText="Estructura Contractual"
        />

        {/* Section Intro & Definition Quote */}
        <div className="max-w-4xl mx-auto text-center mb-12 bg-stone-900/30 border border-stone-850 p-6 rounded-2xl backdrop-blur-sm">
          <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans">
            La franquicia es un contrato bilateral y por adhesión en el cual se definen obligaciones claras de cooperación comercial y transferencia tecnológica.
          </p>
          <div className="mt-4 p-4 border-l-2 border-amber-500 bg-amber-500/5 rounded-r-xl text-left">
            <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 leading-relaxed">
              "En este caso, Havanna actúa como franquiciante y el profesor/inversor como franquiciado. Havanna permite el uso de su marca, su sistema comercial, su know-how y brinda asistencia técnica o comercial continua. A cambio, el franquiciado realiza una contraprestación económica y asume el riesgo empresario del local."
            </p>
          </div>
        </div>

        {/* Grid of 6 structural cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {contractParts.map((part, index) => {
            const Icon = part.icon;
            return (
              <div
                key={index}
                className="bg-stone-900/40 border border-stone-850 rounded-xl p-5 hover:border-amber-500/20 transition-all duration-300 group flex items-start space-x-4"
              >
                <div className="p-2 bg-stone-950/80 border border-stone-800 rounded-lg text-amber-450 flex-shrink-0 group-hover:bg-amber-500/10 transition-colors">
                  <Icon size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {part.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed font-sans">
                    {part.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Scheme Diagram */}
        <div className="mt-16 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm">
          <span className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-widest block text-center mb-6">
            Esquema de Relación Contractual
          </span>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3 text-center">
            {/* Box 1 */}
            <div className="w-full lg:w-48 bg-stone-950/60 border border-stone-800 rounded-xl p-4 shadow-md">
              <span className="text-xs font-bold text-amber-500 uppercase block mb-1">Havanna S.A.</span>
              <span className="text-sm font-bold text-white block">Franquiciante</span>
              <span className="text-xs text-stone-500 mt-1 block leading-tight">Propietario del Sistema</span>
            </div>

            {/* Arrow 1 */}
            <div className="text-amber-500 flex flex-col items-center">
              <ArrowRight size={18} className="hidden lg:block animate-pulse" />
              <ArrowDown size={18} className="lg:hidden animate-pulse" />
              <span className="text-xs text-stone-500 font-semibold mt-0.5 whitespace-nowrap">Otorga Licencia</span>
            </div>

            {/* Box 2 */}
            <div className="w-full lg:w-56 bg-amber-500/5 border border-amber-500/30 rounded-xl p-4 shadow-md relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase block mb-1">Contrato de Franquicia</span>
              <span className="text-sm font-bold text-white block">Vínculo de Cooperación</span>
              <span className="text-xs text-amber-100/60 mt-1 block leading-tight">Art. 1512 CCyCN</span>
            </div>

            {/* Arrow 2 */}
            <div className="text-amber-500 flex flex-col items-center">
              <ArrowRight size={18} className="hidden lg:block animate-pulse" />
              <ArrowDown size={18} className="lg:hidden animate-pulse" />
              <span className="text-xs text-stone-500 font-semibold mt-0.5 whitespace-nowrap">Explota la Marca</span>
            </div>

            {/* Box 3 */}
            <div className="w-full lg:w-48 bg-stone-950/60 border border-stone-800 rounded-xl p-4 shadow-md">
              <span className="text-xs font-bold text-amber-500 uppercase block mb-1">Profesor / Inversor</span>
              <span className="text-sm font-bold text-white block">Franquiciado</span>
              <span className="text-xs text-stone-500 mt-1 block leading-tight">Aporta Capital y Gestión</span>
            </div>

            {/* Arrow 3 */}
            <div className="text-amber-500 flex flex-col items-center">
              <ArrowRight size={18} className="hidden lg:block animate-pulse" />
              <ArrowDown size={18} className="lg:hidden animate-pulse" />
              <span className="text-xs text-stone-500 font-semibold mt-0.5 whitespace-nowrap">Establece</span>
            </div>

            {/* Box 4 */}
            <div className="w-full lg:w-48 bg-stone-950/60 border border-stone-800 rounded-xl p-4 shadow-md">
              <span className="text-xs font-bold text-amber-500 uppercase block mb-1">Establecimiento</span>
              <span className="text-sm font-bold text-white block">Local Havanna Café</span>
              <span className="text-xs text-stone-500 mt-1 block leading-tight">Objeto de Operación</span>
            </div>
          </div>
        </div>

        {/* Tabbed Clause Analysis */}
        <div className="mt-20 border-t border-stone-850/60 pt-16">
          <SectionTitle
            title="Análisis Detallado de Cláusulas"
            subtitle="Estudio pormenorizado del clausulado contractual aplicado a la operación real y de amortización de la franquicia."
            badgeText="Análisis Crítico"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            {/* Clause Sidebar Selector */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              {franchiseContractClauses.map((clause) => (
                <button
                  key={clause.id}
                  onClick={() => setActiveTab(clause.id)}
                  className={`flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 group cursor-pointer ${
                    activeTab === clause.id
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-md shadow-amber-500/5'
                      : 'bg-stone-900/40 border-stone-850 text-stone-400 hover:text-white hover:border-stone-800 hover:bg-stone-900/60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FileText
                      size={18}
                      className={`transition-colors duration-300 ${
                        activeTab === clause.id ? 'text-amber-400' : 'text-stone-500 group-hover:text-stone-300'
                      }`}
                    />
                    <span className="text-sm font-semibold tracking-wide">{clause.title}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeTab === clause.id
                        ? 'text-amber-400 translate-x-1'
                        : 'text-stone-600 group-hover:text-stone-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Clause Detail Pane */}
            <div className="lg:col-span-8 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl relative min-h-[350px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800">
                  <div className="space-y-1">
                    <Badge variant="gold" className="text-[10px] uppercase font-semibold">
                      {activeClause.reference}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white font-serif">{activeClause.title}</h3>
                  </div>
                  
                  <div className="px-4 py-2 rounded-lg bg-stone-950/60 border border-stone-800 text-right">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block">Estipulación</span>
                    <span className="text-sm font-bold text-amber-400 font-sans">{activeClause.summary}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2 text-stone-400">
                    <Scale size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Fundamentación Legal y Operativa:</span>
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed font-sans pl-7">
                    {activeClause.description}
                  </p>
                </div>
              </div>

              {/* Practical Project Focus Box */}
              <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-start space-x-3 bg-amber-950/10 border border-amber-900/20 rounded-xl p-4 relative z-10">
                <Bookmark size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Nota de Cátedra:</span>
                  <p className="text-xs text-amber-100/70 leading-relaxed">
                    Bajo la Ley 26.994, el legislador unificó las pautas contractuales de franquicias. El contrato de Havanna es de adhesión, lo que significa que las cláusulas son predispuestas por el franquiciante, limitando el margen de negociación del inversor al ámbito del mutuo y la localización.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
