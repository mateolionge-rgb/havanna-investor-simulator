import React from 'react';
import { Compass, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function RecomendacionFinal({ expositionMode, onGoToSlide }) {
  const recommendations = [
    {
      title: 'Estudio de Localización y Tráfico Peatonal',
      desc: 'Dado que la rentabilidad del simulador es altamente sensible al número de transacciones mensuales, la selección del local en una zona comercial consolidada (centros comerciales o avenidas principales) es crítica para superar el punto de equilibrio.',
      icon: Compass,
    },
    {
      title: 'Financiamiento mediante Mutuo (USD 134.500)',
      desc: 'El uso del contrato de mutuo comercial para financiar USD 134.500 es viable y acelera el inicio de operaciones. Evite sobreendeudamiento para no comprometer el flujo de caja libre mensual en meses de menor consumo estacional.',
      icon: TrendingUp,
    },
    {
      title: 'Mitigación Cambiaria y Precios',
      desc: 'Los ingresos están en pesos argentinos y el mutuo está en dólares. Es esencial implementar estrategias de fijación de precios dinámicas alineadas al tipo de cambio e inflación para evitar el descalce cambiario operativo.',
      icon: AlertTriangle,
    },
    {
      title: 'Auditoría Laboral Permanente',
      desc: 'Asegure el estricto cumplimiento del Convenio Colectivo de Trabajo aplicable (e.g. Sindicato de Pasteleros) y mantenga un control documental riguroso para desactivar la aplicación de solidaridad laboral (Art. 30 LCT).',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="recomendacion"
      className="py-20 bg-gradient-to-b from-[#140B07] to-[#1C100A] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Recomendación Estratégica Final"
          subtitle="Dictamen de viabilidad jurídica y económica sintetizado para la toma de decisión del inversor."
          badgeText="Conclusión y Dictamen"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Detailed Dictamen Panel */}
          <div className="lg:col-span-5 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-stone-800">
                <Badge variant="success">Viabilidad: Alta</Badge>
                <span className="text-xs text-stone-555 uppercase tracking-widest font-bold">Dictamen del Trabajo Práctico</span>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold font-serif text-amber-200">
                  Evaluación de Viabilidad
                </h4>
                
                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  La franquicia Havanna representa una <strong className="text-white font-semibold">inversión viable y de bajo riesgo comercial</strong> debido al fuerte posicionamiento de marca ("Top of mind") y el soporte operativo del franquiciante. La tasa de supervivencia de este modelo de negocio duplica a la de emprendimientos independientes en el sector gastronómico.
                </p>

                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  Sin embargo, desde la perspectiva del <strong className="text-white font-semibold">Derecho Económico</strong>, el inversor asume cláusulas de adhesión rígidas, suministro exclusivo, eventuales costos contractuales periódicos si correspondieran y riesgo cambiario por descalce de monedas. La rentabilidad neta se consolida tras amortizar el mutuo comercial en el mes 36, elevando significativamente el flujo de caja libre neto en los últimos dos años de vigencia del contrato.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800">
              <Button
                variant="primary"
                onClick={() => {
                  if (expositionMode && onGoToSlide) {
                    onGoToSlide(5);
                  } else {
                    const el = document.getElementById('simulador');
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }
                }}
                className="w-full justify-center"
              >
                Volver a Simular
              </Button>
            </div>
          </div>

          {/* Strategic Recommendations Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <div
                  key={index}
                  className="bg-stone-900/20 border border-stone-850/60 rounded-xl p-5 hover:border-amber-500/20 hover:bg-stone-900/40 transition-all duration-300 group"
                >
                  <div className="p-2 bg-stone-950/60 border border-stone-800 rounded-lg text-amber-450 w-fit mb-3 group-hover:bg-amber-500/10 transition-colors">
                    <Icon size={16} />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {rec.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {rec.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
