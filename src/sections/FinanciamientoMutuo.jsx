import React from 'react';
import { Landmark, ShieldCheck, Scale, Calendar, Percent, Coins, FileText, ArrowRight, ArrowDown, HelpCircle, AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';

export default function FinanciamientoMutuo() {
  const mutuoApplicationPoints = [
    {
      title: 'Mutuante',
      desc: 'El banco comercial, entidad financiera, prestamista privado o inversor que aporta el capital.',
      icon: Landmark,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Mutuario',
      desc: 'El profesor/inversor que adquiere la franquicia y asume el compromiso de devolución.',
      icon: Shield,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Objeto',
      desc: 'Préstamo dinerario destinado exclusivamente a complementar la inversión inicial.',
      icon: Coins,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Destino de Fondos',
      desc: 'Fee de ingreso, obra civil, adecuación del local, mobiliario, equipamiento, mercadería inicial, insumos y gastos de apertura.',
      icon: FileText,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Obligación Principal',
      desc: 'Devolver el capital en la misma moneda o equivalente pactado dentro del plazo de amortización convenido.',
      icon: Calendar,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Intereses',
      desc: 'Intereses pactados como compensación por el uso del dinero. Para esta simulación académica se utiliza una TNA del 8,5%, editable según las condiciones reales del mutuo (supuesto académico, no es una tasa de mercado garantizada).',
      icon: Percent,
      color: 'border-blue-900/30 bg-blue-950/10 text-blue-400',
    },
    {
      title: 'Garantías posibles',
      desc: 'Fianza personal de los socios, pagarés, prendas sobre bienes del negocio, hipotecas o cesiones de ingresos futuros.',
      icon: ShieldCheck,
      color: 'border-amber-950/30 bg-amber-950/10 text-amber-500',
    },
  ];

  return (
    <section
      id="financiamiento"
      className="py-20 bg-gradient-to-b from-[#140B07] to-[#1C100A] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Financiamiento del Capital Faltante"
          subtitle="Análisis de viabilidad del financiamiento y estructuración del contrato de mutuo dinerario para cubrir el déficit de inversión."
          badgeText="Estructura Crediticia"
        />

        {/* 1. Case Context & Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
          <div className="lg:col-span-7 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-400">
                <AlertTriangle size={18} className="text-amber-500" />
                <h4 className="text-sm font-bold uppercase tracking-wider">Necesidad de Financiamiento</h4>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed font-sans">
                El profesor cuenta con <strong className="text-white font-semibold">USD 60.000</strong> de capital propio. Como la inversión estimada asciende a <strong className="text-white font-semibold">USD 194.500</strong>, necesita financiar <strong className="text-white font-semibold">USD 134.500</strong> mediante un contrato de mutuo dinerario. Ese monto representa aproximadamente el <strong className="text-white font-semibold">69,15%</strong> de la inversión inicial.
              </p>
            </div>

            {/* Styled Calculation Panel */}
            <div className="mt-6 bg-stone-950/60 border border-stone-855 rounded-xl p-4 font-mono text-xs text-stone-300">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block mb-2">
                Cálculos del Capital Faltante y Financiamiento
              </span>
              <div className="space-y-2">
                <div>
                  <span className="text-stone-500">Capital faltante = </span>
                  <span>USD 194.500 - USD 60.000 = </span>
                  <strong className="text-amber-400">USD 134.500</strong>
                </div>
                <div>
                  <span className="text-stone-500">Porcentaje financiado = </span>
                  <span>USD 134.500 / USD 194.500 = </span>
                  <strong className="text-amber-400">69,15%</strong>
                </div>
              </div>
            </div>
          </div>

          {/* CCyCN Mutuo Explanation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/20 to-blue-950/5 border border-blue-900/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400">
                <HelpCircle size={18} />
                <h4 className="text-sm font-bold uppercase tracking-wider">¿Qué es el contrato de mutuo?</h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                El contrato de mutuo dinerario es una figura jurídica mediante la cual una parte, llamada <strong className="text-white font-semibold">mutuante o prestamista</strong>, entrega dinero a otra parte, llamada <strong className="text-white font-semibold">mutuario o deudor</strong>, quien se obliga a devolver igual cantidad de dinero en el plazo pactado, con intereses si así corresponde. En términos económicos, funciona como un préstamo destinado a financiar una inversión.
              </p>
            </div>
            
            <div className="mt-6 border-t border-blue-900/25 pt-4 text-xs sm:text-sm text-stone-400 leading-relaxed">
              <strong className="text-blue-400">Nota Legal (CCyCN):</strong> Según el Código Civil y Comercial, el mutuo es oneroso salvo pacto en contrario, por lo que normalmente genera intereses como contraprestación por el uso del capital.
            </div>
          </div>
        </div>

        {/* 2. Seven legal points list */}
        <div className="mt-16">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-6">
            Elementos del Mutuo Aplicados al Caso Havanna
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mutuoApplicationPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`border rounded-xl p-5 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300 ${point.color}`}
                >
                  <Icon size={18} className="mb-3 stroke-[1.8]" />
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {point.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-300/80 leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Two Paths of Financing (Vías) & SGR */}
        <div className="mt-20 border-t border-stone-850/60 pt-16">
          <SectionTitle
            title="Dos Vías Posibles de Financiamiento"
            subtitle="Análisis comparativo de los canales de obtención del crédito bajo la perspectiva de riesgo y flexibilidad."
            badgeText="Canales de Financiamiento"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
            {/* Via A */}
            <div className="lg:col-span-4 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <Badge variant="gold">Vía A: Inversor Privado</Badge>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Una alternativa es celebrar un mutuo con un inversor privado. Esta opción puede pactarse en dólares estadounidenses o en la moneda que acuerden las partes. Dado el monto elevado del préstamo, el mutuante probablemente exigirá una garantía fuerte para asegurar el recupero del capital.
                </p>
                
                <div className="space-y-2.5 pt-4 border-t border-stone-800/60 text-xs">
                  <div><span className="text-xs uppercase font-bold text-stone-500 block">Moneda</span> dólares estadounidenses o equivalente pactado</div>
                  <div><span className="text-xs uppercase font-bold text-stone-500 block">Garantía posible</span> hipoteca sobre inmueble, prenda, pagaré o fideicomiso</div>
                  <div><span className="text-xs uppercase font-bold text-[#D4AF37] block">Ventaja</span> mayor flexibilidad contractual</div>
                  <div><span className="text-xs uppercase font-bold text-rose-500 block">Riesgo</span> mayor exigencia de garantías y posible tasa más alta</div>
                </div>
              </div>
            </div>

            {/* Via B */}
            <div className="lg:col-span-4 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <Badge variant="neutral">Vía B: Banco Comercial</Badge>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Otra alternativa es solicitar un préstamo bancario comercial para inversión productiva o apertura de franquicia. En este caso, el banco puede financiar el proyecto en pesos, eventualmente tomando como referencia el valor económico de la inversión.
                </p>
                
                <div className="space-y-2.5 pt-4 border-t border-stone-800/60 text-xs">
                  <div><span className="text-xs uppercase font-bold text-stone-500 block">Mutuante</span> banco comercial regulado por el BCRA</div>
                  <div><span className="text-xs uppercase font-bold text-stone-500 block">Moneda</span> pesos u otra modalidad bancaria disponible</div>
                  <div><span className="text-xs uppercase font-bold text-stone-500 block">Garantía posible</span> aval, fianza, aval SGR, prenda o garantía real</div>
                  <div><span className="text-xs uppercase font-bold text-emerald-450 block">Ventaja</span> mayor formalidad y trazabilidad de fondos</div>
                  <div><span className="text-xs uppercase font-bold text-rose-500 block">Riesgo</span> análisis crediticio exigente, tasa financiera y costos bancarios</div>
                </div>
              </div>
            </div>

            {/* SGR Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1C100A] to-[#2C1A10] border border-amber-900/20 rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <Badge variant="gold" className="bg-amber-500/10 text-amber-400">Garante Alternativo: SGR</Badge>
                <h5 className="text-base font-bold text-white font-serif">Sociedad de Garantía Recíproca</h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Una SGR puede actuar como garante del profesor frente al banco. Si el banco considera riesgoso prestar el monto solicitado, la SGR puede mejorar el perfil crediticio del inversor mediante una garantía. Esto facilita el acceso al crédito bancario, aunque puede generar costos adicionales y requisitos de contragarantía propios.
                </p>
              </div>
              <div className="text-xs text-amber-500/60 mt-4 italic">
                * Clave en el Derecho Económico para la PyME.
              </div>
            </div>
          </div>
        </div>

        {/* 4. Comparison Table */}
        <div className="mt-16 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-6 text-center">
            Matriz Comparativa de Financiamiento
          </span>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 font-bold uppercase tracking-wider bg-stone-950/20">
                  <th className="py-3 px-4">Criterio</th>
                  <th className="py-3 px-4">Mutuo Privado</th>
                  <th className="py-3 px-4">Mutuo Bancario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-850/60">
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Mutuante</td>
                  <td className="py-3 px-4">Inversor privado</td>
                  <td className="py-3 px-4">Banco comercial</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Moneda</td>
                  <td className="py-3 px-4">Dólares o moneda pactada</td>
                  <td className="py-3 px-4">Generalmente pesos o modalidad bancaria disponible</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Garantía habitual</td>
                  <td className="py-3 px-4 text-rose-400">Hipoteca, prenda, pagaré o fideicomiso de garantía</td>
                  <td className="py-3 px-4 text-amber-400">SGR, aval, fianza, prenda o garantía real</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Flexibilidad</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Alta (acuerdo directo)</td>
                  <td className="py-3 px-4 text-amber-500">Media o baja (procesos regulados)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Riesgo para el profesor</td>
                  <td className="py-3 px-4 text-rose-400">Mayor presión de garantía (riesgo de ejecución rápida)</td>
                  <td className="py-3 px-4 text-amber-550">Tasa de interés variable, requisitos exigentes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Ventaja principal</td>
                  <td className="py-3 px-4 text-emerald-450 font-bold">Negociación directa y rapidez</td>
                  <td className="py-3 px-4 text-emerald-450 font-bold">Formalidad, regulación y tasas a veces subsidiadas</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-300">Desventaja principal</td>
                  <td className="py-3 px-4 text-rose-500 font-semibold">Puede ser más costoso o exigir colaterales líquidos</td>
                  <td className="py-3 px-4 text-rose-500 font-semibold">Aprobación más lenta y burocrática</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Visual Flowchart (Diagrama de 8 etapas) */}
        <div className="mt-20 border-t border-stone-850/60 pt-16">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-8 text-center">
            Diagrama del Ciclo de Financiamiento
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Step 1 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 1</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Profesor/inversor cuenta con <strong className="text-white font-semibold">USD 60.000</strong> de capital propio.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 2</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Inversión estimada Havanna totaliza <strong className="text-white font-semibold">USD 194.500</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 3</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Se identifica el capital faltante exacto: <strong className="text-white font-semibold">USD 134.500</strong>.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 4</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                El profesor celebra un <strong className="text-white font-semibold">contrato de mutuo</strong> con el mutuante.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 5</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                El mutuante entrega el capital pactado en préstamo.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 6</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                El profesor integra los fondos y <strong className="text-white font-semibold">abre la franquicia</strong>.
              </p>
            </div>

            {/* Step 7 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 7</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                La operatoria diaria del local genera <strong className="text-white font-semibold">ingresos</strong>.
              </p>
            </div>

            {/* Step 8 */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
              <span className="text-xs sm:text-sm font-bold text-amber-500 block mb-1">Paso 8</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Con esos flujos se amortiza el mutuo (pago de cuotas e intereses).
              </p>
            </div>
          </div>
        </div>

        {/* 6. Comparison of Franchise vs Mutuo contracts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8">
          <div className="space-y-3">
            <Badge variant="gold">Vínculo de Explotación</Badge>
            <h5 className="text-md font-bold text-white">Contrato de Franquicia</h5>
            <p className="text-xs text-stone-450 leading-relaxed">
              Permite explotar la marca Havanna, usar el know-how y operar bajo un sistema comercial probado. Se enfoca en la explotación económica y los lineamientos de marca.
            </p>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-stone-800 pt-6 md:pt-0 md:pl-8">
            <Badge variant="neutral" className="bg-blue-500/10 text-blue-400">Vínculo Financiero</Badge>
            <h5 className="text-md font-bold text-white">Contrato de Mutuo</h5>
            <p className="text-xs text-stone-450 leading-relaxed">
              Permite financiar el capital faltante, pero genera una obligación de devolución con intereses y posibles garantías del inversor frente al prestamista.
            </p>
          </div>
        </div>

        {/* 7. Highlighted final conclusion phrase */}
        <div className="mt-12 text-center max-w-4xl mx-auto bg-gradient-to-r from-amber-950/30 via-amber-900/10 to-amber-950/30 border border-amber-900/20 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
          <p className="text-sm md:text-base font-serif italic text-amber-250 leading-relaxed pl-2">
            "La franquicia hace viable el negocio desde el punto de vista comercial; el mutuo hace posible alcanzar el capital inicial. Pero el proyecto solo es conveniente si el flujo de fondos permite pagar la deuda sin comprometer la rentabilidad."
          </p>
        </div>

      </div>
    </section>
  );
}
