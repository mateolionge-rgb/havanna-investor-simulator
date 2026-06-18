import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { DollarSign, Sliders, ToggleLeft, ToggleRight, Landmark, Calendar, RefreshCw } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { defaultSimParams, totalInvestmentValue, scenarios } from '../data/localData';

export default function SimuladorFinanciero({
  params,
  setParams,
  useFinancing,
  setUseFinancing,
  expositionMode,
  selectedScenarioId,
  setSelectedScenarioId,
}) {


  // Calculated values state
  const [metrics, setMetrics] = useState({
    facturacion: 0,
    cogs: 0,
    regalias: 0,
    publicidad: 0,
    impuestosVentas: 0,
    costosVariables: 0,
    costosFijos: 0,
    ebitda: 0,
    impuestoGanancias: 0,
    utilidadNeta: 0,
    cuotaMutuo: 0,
    cashFlowMensual: 0,
    roiAnual: 0,
    paybackMeses: 0,
    paybackCapitalPropio: 0,
  });

  // Chart data state
  const [chartData, setChartData] = useState([]);

  // Recalculate metrics whenever params or financing toggle changes
  useEffect(() => {
    const {
      ticketPromedio,
      transaccionesMensuales,
      cogsPct,
      alquilerMensual,
      costoSueldos,
      serviciosImpuestosFijos,
      regaliasPct,
      publicidadPct,
      impuestosVentasPct,
    } = params;

    // 1. Facturación Mensual
    const facturacion = transaccionesMensuales * ticketPromedio;

    // 2. Costos Variables
    const cogs = facturacion * (cogsPct / 100);
    const regalias = facturacion * (regaliasPct / 100);
    const publicidad = facturacion * (publicidadPct / 100);
    const impuestosVentas = facturacion * (impuestosVentasPct / 100);
    const costosVariables = cogs + regalias + publicidad + impuestosVentas;

    // 3. Costos Fijos
    const costosFijos = alquilerMensual + costoSueldos + serviciosImpuestosFijos;

    // 4. EBITDA
    const ebitda = facturacion - costosVariables - costosFijos;

    // 5. Impuesto a las ganancias (30% sobre EBITDA positivo)
    const impuestoGanancias = ebitda > 0 ? ebitda * 0.30 : 0;
    const utilidadNeta = ebitda - impuestoGanancias;

    // 6. Mutuo French Amortization
    // P = USD 134.500 (Déficit de capital del caso del profesor)
    // TNA = 8.5% -> monthly r = 0.085 / 12 = 0.0070833
    // n = 36 months
    const loanPrincipal = totalInvestmentValue - 60000;
    const monthlyRate = 0.085 / 12;
    const numPayments = 36;
    const cuotaMutuo = useFinancing
      ? (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
      : 0;

    // 7. Flujo de Caja Mensual Libre
    // Durante los primeros 36 meses, si hay financiamiento, se descuenta la cuota del mutuo
    const cashFlowMensual = utilidadNeta - cuotaMutuo;

    // 8. ROI y Payback (basado en Utilidad Neta antes de la cuota del mutuo, ya que es rendimiento del activo)
    const roiAnual = utilidadNeta > 0 ? ((utilidadNeta * 12) / totalInvestmentValue) * 100 : 0;
    const paybackMeses = utilidadNeta > 0 ? totalInvestmentValue / (utilidadNeta) : 999;

    // 9. Recupero del Capital Propio
    const capitalPropioMonto = useFinancing ? 60000 : totalInvestmentValue;
    const flujoNetoLibre = useFinancing ? cashFlowMensual : utilidadNeta;
    const paybackCapitalPropio = flujoNetoLibre > 0 ? capitalPropioMonto / flujoNetoLibre : 999;

    setMetrics({
      facturacion,
      cogs,
      regalias,
      publicidad,
      impuestosVentas,
      costosVariables,
      costosFijos,
      ebitda,
      impuestoGanancias,
      utilidadNeta,
      cuotaMutuo,
      cashFlowMensual,
      roiAnual,
      paybackMeses,
      paybackCapitalPropio,
    });

    // 9. Generate 5-year (60 month) Cash Flow projection
    const initialEquityOutlay = useFinancing ? 60000 : totalInvestmentValue;
    const data = [];
    
    // Month 0
    let cumulative = -initialEquityOutlay;
    data.push({
      mes: 0,
      'Flujo de Caja': Math.round(cumulative),
      label: 'Mes 0',
    });

    for (let month = 1; month <= 60; month++) {
      // Si el mes es <= 36 y usa financiamiento, se descuenta la cuota. Si no, no.
      const currentCashFlow = useFinancing && month <= 36 ? utilidadNeta - cuotaMutuo : utilidadNeta;
      cumulative += currentCashFlow;
      data.push({
        mes: month,
        'Flujo de Caja': Math.round(cumulative),
        label: `Mes ${month}`,
      });
    }

    setChartData(data);
  }, [params, useFinancing]);

  const handleSliderChange = (key, value) => {
    if (setSelectedScenarioId) {
      setSelectedScenarioId('custom');
      localStorage.setItem('selected-scenario', 'custom');
    }
    setParams((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  const handleReset = () => {
    if (setSelectedScenarioId) {
      setSelectedScenarioId('optimista');
      localStorage.setItem('selected-scenario', 'optimista');
    }
    const optScen = scenarios.find(s => s.id === 'optimista');
    setParams(optScen ? optScen.params : defaultSimParams);
    setUseFinancing(true);
  };

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return 'USD 0';
    const sign = val < 0 ? '-' : '';
    const absVal = Math.abs(Math.round(val));
    const formattedNum = absVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${sign}USD ${formattedNum}`;
  };

  return (
    <section
      id="simulador"
      className="py-20 bg-gradient-to-b from-[#1C100A] to-[#140B07] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Simulador Financiero Interactivo"
          subtitle="Modifique las variables operativas y de financiamiento en tiempo real para proyectar la rentabilidad y el retorno de inversión del local."
          badgeText="Simulador Económico"
        />

        <div className={expositionMode ? "flex flex-col space-y-8 mt-6 max-w-4xl mx-auto pb-16" : "grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6"}>
          
          {/* Controls Panel (Left on desktop) */}
          <div className={expositionMode ? "w-full bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-6" : "lg:col-span-5 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-6"}>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center space-x-2 text-amber-400">
                <Sliders size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Parámetros Operativos</span>
              </div>
              <button
                onClick={handleReset}
                className="text-stone-500 hover:text-amber-400 transition-colors flex items-center space-x-1 text-xs font-semibold cursor-pointer"
              >
                <RefreshCw size={12} />
                <span>Resetear</span>
              </button>
            </div>

            {/* Sliders */}
            <div className={expositionMode ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-5"}>
              {/* Slider 1: Transacciones Mensuales */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Clientes Mensuales</span>
                  <span className="text-amber-400 font-mono">{params.transaccionesMensuales.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="14000"
                  step="250"
                  value={params.transaccionesMensuales}
                  onChange={(e) => handleSliderChange('transaccionesMensuales', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>4.000 transacciones</span>
                  <span>14.000 transacciones</span>
                </div>
              </div>

              {/* Slider 2: Ticket Promedio */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Ticket Promedio (USD)</span>
                  <span className="text-amber-400 font-mono">USD {params.ticketPromedio.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="15"
                  step="0.10"
                  value={params.ticketPromedio}
                  onChange={(e) => handleSliderChange('ticketPromedio', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>USD 4.00</span>
                  <span>USD 15.00</span>
                </div>
              </div>

              {/* Slider 3: COGS% */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Costo Mercadería (COGS%)</span>
                  <span className="text-amber-400 font-mono">{params.cogsPct}%</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="45"
                  step="0.5"
                  value={params.cogsPct}
                  onChange={(e) => handleSliderChange('cogsPct', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>25% (Alta eficiencia)</span>
                  <span>45% (Presión inflacionaria)</span>
                </div>
              </div>

              {/* Slider 4: Alquiler Mensual */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Alquiler Local (USD/mes)</span>
                  <span className="text-amber-400 font-mono">{formatCurrency(params.alquilerMensual)}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="7000"
                  step="100"
                  value={params.alquilerMensual}
                  onChange={(e) => handleSliderChange('alquilerMensual', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>USD 1.500</span>
                  <span>USD 7.000 (Local Premium)</span>
                </div>
              </div>

              {/* Slider 5: Sueldos */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Sueldos Personal (USD/mes)</span>
                  <span className="text-amber-400 font-mono">{formatCurrency(params.costoSueldos)}</span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="25000"
                  step="100"
                  value={params.costoSueldos}
                  onChange={(e) => handleSliderChange('costoSueldos', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>USD 2.500 (3-4 empleados)</span>
                  <span>USD 25.000 (Local Premium/Cargas)</span>
                </div>
              </div>

              {/* Slider 6: Regalías / Canon */}
              <div className={`space-y-2 ${expositionMode ? 'md:col-span-2' : ''}`}>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                  <span>Regalías / canon contractual estimado (%)</span>
                  <span className="text-amber-400 font-mono">{params.regaliasPct}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="0.5"
                  value={params.regaliasPct}
                  onChange={(e) => handleSliderChange('regaliasPct', e.target.value)}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-stone-550 font-semibold">
                  <span>0% (Sin canon)</span>
                  <span>12% (Máximo)</span>
                </div>
                <div className="text-[10px] text-stone-500 italic leading-tight mt-1">
                  Variable académica editable. No representa una condición oficial confirmada de Havanna.
                </div>
              </div>
            </div>

            {/* Financing Toggle */}
            <div className="pt-6 border-t border-stone-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Landmark size={20} className="text-amber-400" />
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-semibold leading-tight">
                    USD 134.500 a 36 meses - TNA 8,5% (Supuesto Académico)
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setUseFinancing(!useFinancing)}
                className="text-amber-400 hover:text-amber-300 transition-colors focus:outline-none cursor-pointer"
              >
                {useFinancing ? (
                  <ToggleRight size={40} className="stroke-[1.5]" />
                ) : (
                  <ToggleLeft size={40} className="stroke-[1.5] text-stone-600" />
                )}
              </button>
            </div>
          </div>

          {/* Results Panel & Projection Chart (Right on desktop) */}
          <div className={expositionMode ? "w-full flex flex-col space-y-8" : "lg:col-span-7 flex flex-col justify-between space-y-6"}>
            
            {/* Top Grid: Main Financial KPI Indicators */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${expositionMode ? 'lg:grid-cols-2' : 'lg:grid-cols-4'}`}>
              {/* indicator 1: Facturación */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Facturación / Mes</span>
                <span className="text-xl font-bold text-white font-mono mt-1">{formatCurrency(metrics.facturacion)}</span>
                <span className="text-xs text-stone-550 mt-2 font-semibold">100% ingresos de sucursal</span>
              </div>

              {/* indicator 2: Utilidad Neta Mensual */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Utilidad Neta / Mes</span>
                <span className={`text-xl font-bold font-mono mt-1 ${metrics.utilidadNeta > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                  {formatCurrency(metrics.utilidadNeta)}
                </span>
                <span className="text-xs text-stone-555 mt-2 font-semibold">Post-Impuesto Ganancias (30%)</span>
              </div>

              {/* indicator 3: Recupero del proyecto */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Recupero del proyecto</span>
                <span className="text-xl font-bold text-emerald-450 font-mono mt-1">
                  {metrics.utilidadNeta > 0 ? `${metrics.paybackMeses.toFixed(1)} meses` : 'N/A'}
                </span>
                <span className="text-xs text-stone-555 mt-2 font-semibold leading-tight">
                  Sobre inversión de USD 194.500. ROI: {metrics.roiAnual.toFixed(1)}%
                </span>
              </div>

              {/* indicator 4: Recupero del capital propio */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Recupero del cap. propio</span>
                <span className="text-xl font-bold text-emerald-400 font-mono mt-1">
                  {metrics.utilidadNeta > 0 && metrics.paybackCapitalPropio < 999 
                    ? (metrics.paybackCapitalPropio > 120 ? 'No recomendable' : `${metrics.paybackCapitalPropio.toFixed(1)} meses`)
                    : 'N/A'}
                </span>
                <span className="text-xs text-stone-555 mt-2 font-semibold leading-tight">
                  Sobre aporte propio de {useFinancing ? 'USD 60.000' : 'USD 194.500'}
                </span>
              </div>
            </div>

            {/* Middle Pane: Monthly Cash Flow Detail & Financing impact */}
            <div className="bg-stone-900/40 border border-stone-850 rounded-xl p-5 backdrop-blur-sm space-y-4">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                Detalle Mensual del Flujo de Caja
              </span>
              
              <div className={`grid gap-x-8 gap-y-2.5 text-xs ${expositionMode ? 'grid-cols-1 md:grid-cols-2 sm:text-sm' : 'grid-cols-2'}`}>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-400">
                  <span>Facturación Operativa</span>
                  <span className="font-mono text-white">{formatCurrency(metrics.facturacion)}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-400">
                  <span>(-) Costos Variables (COGS + eventuales regalías/cánones)</span>
                  <span className="font-mono text-stone-300">-{formatCurrency(metrics.costosVariables)}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-400">
                  <span>(-) Costos Fijos (Alquiler + Sueldos)</span>
                  <span className="font-mono text-stone-300">-{formatCurrency(metrics.costosFijos)}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-300 font-semibold">
                  <span>(=) EBITDA Operativo</span>
                  <span className="font-mono text-amber-400 font-bold">{formatCurrency(metrics.ebitda)}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-400">
                  <span>(-) Impuesto a las Ganancias (30%)</span>
                  <span className="font-mono text-stone-300">-{formatCurrency(metrics.impuestoGanancias)}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-300 font-semibold">
                  <span>(=) Utilidad Neta Mensual Post-Impuesto</span>
                  <span className="font-mono text-white">{formatCurrency(metrics.utilidadNeta)}</span>
                </div>
                
                {useFinancing ? (
                  <>
                    <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-400 col-span-2">
                      <div className="flex items-center space-x-1 text-[#C59B27] font-semibold">
                        <Landmark size={12} />
                        <span>(-) Cuota Mensual del Mutuo (Meses 1 a 36)</span>
                      </div>
                      <span className="font-mono text-amber-500/90 font-semibold">-{formatCurrency(metrics.cuotaMutuo)}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-300 font-bold col-span-2">
                      <span>(=) Flujo Neto Libre Mensual (Meses 1-36 después del mutuo)</span>
                      <span className={`font-mono ${metrics.cashFlowMensual > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {formatCurrency(metrics.cashFlowMensual)}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between border-b border-stone-850/60 pb-1.5 text-stone-300 font-bold col-span-2">
                    <span>(=) Flujo Neto Libre Mensual (Sin Préstamo)</span>
                    <span className="font-mono text-emerald-400">{formatCurrency(metrics.utilidadNeta)}</span>
                  </div>
                )}

                {useFinancing && (
                  <div className="text-[10px] text-amber-500/70 italic mt-1.5 col-span-2">
                    * Durante los primeros 36 meses, el flujo disponible para el profesor se reduce por el pago de la cuota del mutuo.
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Pane: Recharts Flow Projection Chart */}
            <div className={`bg-[#1C100A]/40 border border-stone-850 rounded-xl p-5 relative overflow-hidden flex-grow flex flex-col justify-between ${expositionMode ? 'h-80' : ''}`}>
              <div className="flex items-center justify-between pb-3 border-b border-stone-850/60 mb-4">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                  Proyección Flujo de Caja Acumulado (5 Años / 60 Meses)
                </span>
                <Badge variant={useFinancing ? 'gold' : 'neutral'} className="text-xs">
                  {useFinancing ? 'Inversión Inicial USD 60.000 (Capital Propio)' : 'Inversión Inicial USD 194.500 (100% Propio)'}
                </Badge>
              </div>

              {/* Recharts Area Chart */}
              <div className={`w-full font-mono text-xs relative z-10 ${expositionMode ? 'h-56' : 'h-44 sm:h-52'}`}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 5, right: 10, left: 15, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2c1a10" opacity={0.4} />
                    <XAxis
                      dataKey="mes"
                      stroke="#8c7a6b"
                      tickLine={false}
                      ticks={[0, 12, 24, 36, 48, 60]}
                      tickFormatter={(v) => `M${v}`}
                    />
                    <YAxis
                      stroke="#8c7a6b"
                      tickLine={false}
                      tickFormatter={(v) => `USD ${v/1000}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1C100A',
                        border: '1px solid #3c2314',
                        borderRadius: '8px',
                        color: '#fff',
                        fontFamily: 'monospace',
                        fontSize: '12px',
                      }}
                      formatter={(value) => [formatCurrency(value), 'Caja Acumulada']}
                      labelFormatter={(label) => `Mes de Simulación: ${label}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="Flujo de Caja"
                      stroke="#D4AF37"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorFlow)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-stone-500 italic mt-3 text-center space-y-1">
                <div>* El gráfico refleja el salto de liquidez en el mes 37 al extinguirse la obligación de pago del mutuo.</div>
                <div>* Durante los primeros 36 meses, el flujo disponible para el profesor se reduce por el pago de la cuota del mutuo.</div>
                <div>* Cuando el flujo neto libre mensual es nulo, negativo o demasiado bajo, el recupero del capital propio deja de ser económicamente razonable.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
