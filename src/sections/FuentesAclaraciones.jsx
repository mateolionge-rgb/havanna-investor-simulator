import React from 'react';
import { BookOpen, Scale, Award, Landmark, FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function FuentesAclaraciones() {
  const categories = [
    {
      id: 'juridica',
      title: 'Normativa Jurídica',
      badgeText: 'LEGISLACIÓN ARGENTINA',
      badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
      icon: Scale,
      items: [
        {
          name: 'Código Civil y Comercial de la Nación',
          desc: 'Regulación del contrato de franquicia comercial (arts. 1512 a 1524) y del contrato de mutuo (art. 1525 y concordantes).',
        },
        {
          name: 'Ley de Contrato de Trabajo N.º 20.744',
          desc: 'Normativa aplicable a las relaciones laborales del personal del local. La eventual solidaridad laboral debe analizarse según el caso concreto.',
        },
        {
          name: 'Ley de Defensa del Consumidor N.º 24.240',
          desc: 'Marco legal aplicable a la relación con consumidores finales, deber de información, trato digno, seguridad y responsabilidad por productos o servicios.',
        },
        {
          name: 'Ley de Marcas y Designaciones N.º 22.362',
          desc: 'Regulación sobre el uso de marca, signos distintivos y los derechos de propiedad intelectual del franquiciante.',
        },
        {
          name: 'Ley de Defensa de la Competencia N.º 27.442',
          desc: 'Marco aplicable para analizar prácticas comerciales, exclusividades territoriales, abastecimiento único y precios sugeridos.',
        },
      ],
    },
    {
      id: 'havanna',
      title: 'Fuentes Oficiales Havanna',
      badgeText: 'FUENTE OFICIAL HAVANNA',
      badgeStyle: 'bg-[#7A5C43]/15 text-[#D4B396] border-[#7A5C43]/30',
      icon: Award,
      items: [
        {
          name: 'Havanna Franquicias Argentina',
          desc: 'Datos de inversión inicial estimada, fee de ingreso, obra civil, mobiliario, equipamiento y pedido inicial de mercadería, insumos y bazar.',
        },
        {
          name: 'Havanna Franquicias',
          desc: 'Especificaciones del modelo de negocio, posicionamiento de marca, manuales de know-how y capacitación comercial.',
        },
        {
          name: 'Havanna Información para Inversores',
          desc: 'Balances anuales, estados contables consolidados, transparencia corporativa y reportes económicos del franquiciante.',
        },
        {
          name: 'Havanna en el Mundo',
          desc: 'Datos sobre la expansión internacional de la marca y el comportamiento en mercados fuera de Argentina.',
        },
      ],
    },
    {
      id: 'mercado',
      title: 'Mercado y Sector Franquicias',
      badgeText: 'MERCADO Y FRANQUICIAS',
      badgeStyle: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
      icon: BookOpen,
      items: [
        {
          name: 'Asociación Argentina de Marcas y Franquicias (AAMF)',
          desc: 'Marco sectorial, estadísticas generales de mercado y guías orientativas sobre el funcionamiento de franquicias en el país.',
        },
        {
          name: 'Información Financiera Havanna Holding S.A.',
          desc: 'Información financiera pública, balances consolidados y cotización bursátil de la sociedad controlante de la marca.',
        },
      ],
    },
    {
      id: 'financiamiento',
      title: 'Financiamiento y Garantías',
      badgeText: 'FINANCIAMIENTO',
      badgeStyle: 'bg-emerald-500/10 text-emerald-450 border-emerald-500/25',
      icon: Landmark,
      items: [
        {
          name: 'Código Civil y Comercial',
          desc: 'Contrato de mutuo: art. 1525 y concordantes. Garantías posibles: fianza, aval, SGR, prenda, hipoteca o cesión de ingresos.',
        },
        {
          name: 'Régimen de Sociedades de Garantía Recíproca',
          desc: 'Herramientas de avales y garantías para facilitar a las MiPyMEs el acceso a financiamiento y créditos comerciales.',
        },
        {
          name: 'Ley N.º 25.300 de Fomento MiPyME',
          desc: 'Disposiciones y herramientas orientadas al fomento de financiamiento productivo para pequeñas y medianas empresas.',
        },
      ],
    },
    {
      id: 'supuestos',
      title: 'Supuestos del Simulador',
      badgeText: 'SUPUESTO ACADÉMICO',
      badgeStyle: 'bg-stone-800 text-stone-300 border-stone-700',
      icon: FileText,
      items: [
        {
          name: 'Tasa Nominal Anual (TNA)',
          desc: 'Tasa Nominal Anual del 8,5% fijada como un supuesto académico editable por el usuario en la simulación.',
        },
        {
          name: 'Probabilidades de Escenarios',
          desc: 'Ponderación teórica inicial de escenarios de mercado: 25% Pesimista, 50% Realista y 25% Optimista.',
        },
        {
          name: 'Costos Operativos Estimados',
          desc: 'Valores teóricos imputados de alquiler mensual, sueldos de personal y servicios públicos a modo educativo.',
        },
        {
          name: 'Simulación Monetaria en Dólares (USD)',
          desc: 'Uso de divisa estadounidense para aislar la simulación de las distorsiones causadas por la inflación de la moneda local (ARS).',
        },
        {
          name: 'Rentabilidad no Garantizada',
          desc: 'La simulación es puramente de carácter pedagógico, no constituye una promesa de rentabilidad y posee fines de uso exclusivamente pedagógico.',
        },
        {
          name: 'Regalías / cánones contractuales',
          desc: 'Tratados como variable contractual editable. No se presentan como porcentaje oficial confirmado de Havanna.',
        },
      ],
    },
  ];

  return (
    <section
      id="fuentes"
      className="py-20 bg-gradient-to-b from-[#1C100A] to-[#140B07] text-white border-t border-amber-950/20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Fuentes, Normativa y Aclaraciones"
          subtitle="Marco normativo analizado y fuentes de información consultadas para la estructuración jurídica y económica del simulador."
          badgeText="Marco de Referencia"
        />

        {/* Categories Grid */}
        <div id="fuentes-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-stone-900/40 border border-stone-850 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-amber-500/10 hover:bg-stone-900/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 bg-stone-950/60 border border-stone-800 rounded-lg text-amber-450">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-wider">{cat.title}</h4>
                    </div>
                  </div>

                  <div className="flex">
                    <span className={`${cat.badgeStyle} inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black border transition-all tracking-wider`}>
                      {cat.badgeText}
                    </span>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3.5 text-xs text-stone-400 leading-relaxed font-sans">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="space-y-0.5">
                        <strong className="text-stone-300 font-semibold block">{item.name}</strong>
                        <span className="text-stone-450 block">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarificación Final */}
        <div id="fuentes-aclaracion" className="mt-10 bg-stone-900/60 border border-stone-850 rounded-xl p-5 backdrop-blur-sm shadow-md text-xs sm:text-sm text-stone-400 leading-relaxed italic font-sans space-y-2">
          <div>
            <strong>Aclaración de Fuentes:</strong> Las fuentes normativas fundamentan la estructura jurídica. Las fuentes oficiales y de mercado justifican los datos económicos. Los supuestos académicos permiten construir el simulador, pero no representan una promesa de rentabilidad ni condiciones contractuales reales.
          </div>
          <div>
            <strong>Regalías y Publicidad:</strong> La información pública oficial de Havanna consultada informa fee de ingreso, obra/equipamiento y pedido inicial, pero no publica un porcentaje fijo de regalías o fondo de publicidad. Por ello, estos conceptos se incorporan solo como variables contractuales o supuestos académicos editables.
          </div>
        </div>

      </div>
    </section>
  );
}
