import React, { useState } from 'react';
import { ShieldAlert, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { scenarios, totalInvestmentValue } from '../data/localData';

export default function Escenarios({ onApplyScenario, expositionMode, selectedScenarioId, params }) {
  // Local state for academic probabilities
  const [probs, setProbs] = useState({
    pesimista: 25,
    realista: 50,
    optimista: 25,
  });

  // Helpers for localized formatting
  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return 'USD 0';
    const sign = val < 0 ? '-' : '';
    const absVal = Math.abs(Math.round(val));
    const formattedNum = absVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${sign}USD ${formattedNum}`;
  };

  const calculateScenarioProfit = (p) => {
    const facturacion = p.transaccionesMensuales * p.ticketPromedio;
    
    const cogs = facturacion * (p.cogsPct / 100);
    const regaliasPctValue = params ? params.regaliasPct : 0;
    const publicidadPctValue = params ? params.publicidadPct : 0;
    const regalias = facturacion * (regaliasPctValue / 100);
    const publicidad = facturacion * (publicidadPctValue / 100);
    const impuestosVentas = facturacion * (p.impuestosVentasPct / 100);
    
    const costosFijos = p.alquilerMensual + p.costoSueldos + p.serviciosImpuestosFijos;
    const ebitda = facturacion - (cogs + regalias + publicidad + impuestosVentas) - costosFijos;
    const impuesto = ebitda > 0 ? ebitda * 0.30 : 0;
    return ebitda - impuesto;
  };

  const iconMap = {
    pesimista: ShieldAlert,
    realista: TrendingUp,
    optimista: Sparkles,
  };

  const sumProbs = probs.pesimista + probs.realista + probs.optimista;
  const isSumValid = sumProbs === 100;

  const getWeightedProfit = () => {
    const pesimistaScen = scenarios.find((s) => s.id === 'pesimista');
    const realistaScen = scenarios.find((s) => s.id === 'realista');
    const optimistaScen = scenarios.find((s) => s.id === 'optimista');

    const profitPes = pesimistaScen ? calculateScenarioProfit(pesimistaScen.params) : 0;
    const profitRea = realistaScen ? calculateScenarioProfit(realistaScen.params) : 0;
    const profitOpt = optimistaScen ? calculateScenarioProfit(optimistaScen.params) : 0;

    return (
      (profitPes * probs.pesimista) +
      (profitRea * probs.realista) +
      (profitOpt * probs.optimista)
    ) / 100;
  };

  const utilidadPonderada = getWeightedProfit();

  return (
    <section
      id="escenarios"
      className="py-20 bg-gradient-to-b from-[#140B07] to-[#1C100A] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          title="Análisis de Escenarios Financieros"
          subtitle="Proyección de rendimientos bajo tres hipótesis operativas para evaluar la vulnerabilidad y resiliencia de la inversión."
          badgeText="Análisis de Sensibilidad"
        />

        {/* Cards container */}
        <div className={`grid gap-6 mt-6 ${
          expositionMode 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {scenarios.map((scen) => {
            const Icon = iconMap[scen.id];
            const netProfit = calculateScenarioProfit(scen.params);
            const paybackMeses = netProfit > 0 ? totalInvestmentValue / netProfit : null;
            const roiAnual = netProfit > 0 ? ((netProfit * 12) / totalInvestmentValue) * 100 : 0;

            const isSelected = selectedScenarioId === scen.id;

            return (
              <div
                key={scen.id}
                className={`bg-stone-900/40 border rounded-2xl backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 group ${
                  expositionMode ? 'p-4 sm:p-5' : 'p-6'
                } ${
                  isSelected 
                    ? 'border-amber-400 ring-1 ring-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] bg-stone-900/70' 
                    : 'border-stone-850'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 bg-stone-950/60 border border-stone-800 rounded-lg text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-300 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{scen.name}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1.5">
                      {scen.statusBadgeText && (
                        <span className={scen.badgeColor}>
                          {scen.statusBadgeText}
                        </span>
                      )}
                      <Badge variant="neutral" className="text-[10px] font-bold">
                        P: {probs[scen.id]}%
                      </Badge>
                      {isSelected && (
                        <Badge variant="gold" className="text-[10px] font-bold py-0.5 px-2 flex items-center space-x-0.5">
                          <span>✓</span>
                          <span>Activo</span>
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed min-h-[50px]">
                    {scen.description}
                  </p>

                  {/* Variables listing */}
                  <div className="space-y-2.5 bg-stone-950/45 p-4 rounded-xl border border-stone-850/60">
                    <div className="flex justify-between text-xs text-stone-450 border-b border-stone-850/30 pb-1.5">
                      <span>Ventas Mensuales</span>
                      <span className="font-semibold text-white font-mono">{scen.params.transaccionesMensuales.toLocaleString()} t.</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-450 border-b border-stone-850/30 pb-1.5">
                      <span>Ticket Promedio</span>
                      <span className="font-semibold text-white font-mono">USD {scen.params.ticketPromedio.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-450 border-b border-stone-850/30 pb-1.5">
                      <span>COGS (Insumos)</span>
                      <span className="font-semibold text-white font-mono">{scen.params.cogsPct}%</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-450 pt-0.5">
                      <span>Utilidad Neta / Mes</span>
                      <span className={`font-bold font-mono ${netProfit > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                        {formatCurrency(netProfit)}
                      </span>
                    </div>
                  </div>

                  {/* Projections info */}
                  <div className="pt-2 space-y-1.5 text-xs text-stone-450">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span>Retorno Anual (ROI): <strong className="text-stone-300">{roiAnual.toFixed(1)}%</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span>Plazo de Recupero: <strong className="text-stone-300">{paybackMeses ? `${paybackMeses.toFixed(1)} meses` : 'N/A'}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Apply Scenario Button */}
                <div className="mt-8 pt-4 border-t border-stone-850">
                  <Button
                    variant={isSelected ? 'primary' : 'outline'}
                    onClick={() => onApplyScenario(scen.id, scen.params)}
                    className="w-full text-xs py-2 hover:bg-amber-500/10 cursor-pointer"
                  >
                    {isSelected ? 'Escenario aplicado' : 'Aplicar este escenario'}
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Probabilidad Académica Estimada Section */}
        <div className="mt-12 border-t border-stone-850/40 pt-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Probabilidad Académica Estimada</h3>
              <p className="text-xs text-stone-400">
                Modelo académico de distribución de probabilidades según factores coyunturales y supuestos de eficiencia.
              </p>
            </div>
            <div className="shrink-0">
              <Badge variant={isSumValid ? 'success' : 'danger'}>
                {isSumValid ? 'Distribución Válida (100%)' : `Suma de Probabilidades: ${sumProbs}%`}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: configurator and bar chart */}
            <div className="lg:col-span-7 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 space-y-5">
              <span className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                Configuración y Distribución
              </span>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Pesimista */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-450">
                    <span className="font-semibold text-red-400">Probabilidad Escenario Pesimista</span>
                    <span className="font-mono font-bold text-white">{probs.pesimista}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={probs.pesimista}
                    onChange={(e) => setProbs(prev => ({ ...prev, pesimista: Number(e.target.value) }))}
                    className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>

                {/* Realista */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-450">
                    <span className="font-semibold text-amber-400">Probabilidad Escenario Realista</span>
                    <span className="font-mono font-bold text-white">{probs.realista}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={probs.realista}
                    onChange={(e) => setProbs(prev => ({ ...prev, realista: Number(e.target.value) }))}
                    className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Optimista */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-450">
                    <span className="font-semibold text-emerald-400">Probabilidad Escenario Optimista</span>
                    <span className="font-mono font-bold text-white">{probs.optimista}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={probs.optimista}
                    onChange={(e) => setProbs(prev => ({ ...prev, optimista: Number(e.target.value) }))}
                    className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>
              </div>

              {/* Status Alert if not 100% */}
              {!isSumValid && (
                <div className="text-xs text-red-400 font-semibold bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>La suma de probabilidades debe ser exactamente 100%. Actualmente es {sumProbs}%.</span>
                </div>
              )}

              {/* Stacked bar */}
              <div className="space-y-2 pt-2 border-t border-stone-850/60">
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Visualización de Distribución</span>
                <div className="w-full h-5 bg-stone-950 rounded-full overflow-hidden flex border border-stone-850">
                  {probs.pesimista > 0 && (
                    <div 
                      style={{ width: `${probs.pesimista}%` }} 
                      className="h-full bg-red-500/80 transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-white"
                      title={`Pesimista: ${probs.pesimista}%`}
                    >
                      {probs.pesimista >= 10 && `${probs.pesimista}%`}
                    </div>
                  )}
                  {probs.realista > 0 && (
                    <div 
                      style={{ width: `${probs.realista}%` }} 
                      className="h-full bg-amber-500/80 transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-white border-l border-r border-stone-950/20"
                      title={`Realista: ${probs.realista}%`}
                    >
                      {probs.realista >= 10 && `${probs.realista}%`}
                    </div>
                  )}
                  {probs.optimista > 0 && (
                    <div 
                      style={{ width: `${probs.optimista}%` }} 
                      className="h-full bg-emerald-500/80 transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-white"
                      title={`Optimista: ${probs.optimista}%`}
                    >
                      {probs.optimista >= 10 && `${probs.optimista}%`}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Utilidad Esperada Ponderada */}
            <div className="lg:col-span-5 bg-stone-900/40 border border-stone-850 rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">Utilidad Esperada Ponderada</span>
                {isSumValid ? (
                  <div className="text-4xl font-black text-white font-mono mt-3 flex items-baseline">
                    {formatCurrency(utilidadPonderada)}
                    <span className="text-xs text-stone-550 font-sans ml-2 font-normal">/ mes</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-red-400 mt-3 font-mono">
                    Suma Inválida
                  </div>
                )}
                <p className="text-xs text-stone-400 mt-4 leading-relaxed">
                  La utilidad esperada ponderada es una herramienta académica de comparación que pondera el rendimiento mensual neto de cada escenario por su probabilidad estimada, no una promesa de resultado comercial.
                </p>
              </div>
            </div>

          </div>

          {/* Probabilities Disclaimer */}
          <div className="bg-stone-950/30 border border-stone-850/50 rounded-xl p-4 text-xs text-stone-400 leading-relaxed italic">
            <strong>Aclaración Académica sobre Probabilidades:</strong> Las probabilidades son estimaciones académicas para comparar escenarios. No representan una predicción real ni una rentabilidad garantizada. La probabilidad efectiva dependerá de ubicación, consumo, alquiler, salarios, financiamiento y gestión operativa.
          </div>
        </div>

        {/* General Disclaimer */}
        <div className="mt-8 text-center text-xs text-stone-500 italic max-w-3xl mx-auto leading-relaxed border-t border-stone-850/30 pt-6 space-y-1.5">
          <div>* Los escenarios son simulaciones académicas. No representan rentabilidad garantizada. La utilidad real dependerá de ubicación, alquiler, salarios, impuestos, consumo, financiamiento y eficiencia operativa.</div>
          <div>* Los escenarios no presumen regalías fijas. Cualquier canon se trata como variable contractual.</div>
        </div>

      </div>
    </section>
  );
}
