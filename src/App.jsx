import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PorQueHavanna from './sections/PorQueHavanna';
import ContratoFranquicia from './sections/ContratoFranquicia';
import FinanciamientoMutuo from './sections/FinanciamientoMutuo';
import SimuladorFinanciero from './sections/SimuladorFinanciero';
import Escenarios from './sections/Escenarios';
import AnalisisJuridicoEconomico from './sections/AnalisisJuridicoEconomico';
import RecomendacionFinal from './sections/RecomendacionFinal';
import FuentesAclaraciones from './sections/FuentesAclaraciones';
import Footer from './components/Footer';
import { defaultSimParams, scenarios } from './data/localData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  // Selected Scenario ID state with localstorage caching (defaults to 'optimista')
  const [selectedScenarioId, setSelectedScenarioId] = useState(() => {
    const saved = localStorage.getItem('selected-scenario');
    return saved || 'optimista';
  });

  // Simulator state lifted to App level so scenarios can inject values
  const [params, setParams] = useState(() => {
    const saved = localStorage.getItem('selected-scenario') || 'optimista';
    const activeScen = scenarios.find(s => s.id === saved) || scenarios.find(s => s.id === 'optimista');
    return activeScen ? activeScen.params : defaultSimParams;
  });

  const [useFinancing, setUseFinancing] = useState(true);

  // Presentation Mode state with localstorage caching
  const [presentationMode, setPresentationMode] = useState(() => {
    return localStorage.getItem('presentation-mode') === 'true';
  });

  // Exposition Mode state with localstorage caching
  const [expositionMode, setExpositionMode] = useState(() => {
    return localStorage.getItem('exposition-mode') === 'true';
  });

  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = localStorage.getItem('exposition-slide');
    const parsed = parseInt(saved, 10);
    return (parsed >= 1 && parsed <= 8) ? parsed : 1;
  });

  const handleTogglePresentationMode = () => {
    setPresentationMode((prev) => {
      const next = !prev;
      localStorage.setItem('presentation-mode', String(next));
      return next;
    });
  };

  const handleToggleExpositionMode = () => {
    setExpositionMode((prev) => {
      const next = !prev;
      localStorage.setItem('exposition-mode', String(next));
      return next;
    });
  };

  const handleSlideSelect = (slideNum) => {
    setCurrentSlide(slideNum);
  };

  // Persist slide number in localstorage
  useEffect(() => {
    localStorage.setItem('exposition-slide', String(currentSlide));
  }, [currentSlide]);

  // Handle keyboard navigation for slides
  useEffect(() => {
    if (!expositionMode) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentSlide((prev) => Math.min(prev + 1, 8));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expositionMode]);

  // Scroll to top instantly on slide or mode change
  useEffect(() => {
    if (expositionMode) {
      window.scrollTo(0, 0);
    }
  }, [currentSlide, expositionMode]);

  // Callback to apply a scenario's parameters and scroll to simulator
  const handleApplyScenario = (scenarioId, scenarioParams) => {
    setSelectedScenarioId(scenarioId);
    localStorage.setItem('selected-scenario', scenarioId);
    setParams(scenarioParams);
    
    if (expositionMode) {
      setCurrentSlide(5); // Switch to Simulador Financiero slide
    } else {
      const element = document.getElementById('simulador');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className={`min-h-screen bg-[#140B07] text-stone-200 font-sans flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-300 transition-all duration-300 ${
      presentationMode ? 'presentation-mode' : ''
    } ${
      expositionMode ? 'exposition-mode' : ''
    }`}>
      {/* Sticky Header Navigation */}
      <Header 
        presentationMode={presentationMode} 
        onTogglePresentationMode={handleTogglePresentationMode}
        expositionMode={expositionMode}
        onToggleExpositionMode={handleToggleExpositionMode}
        currentSlide={currentSlide}
        onSlideSelect={handleSlideSelect}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section 1: Inicio / Hero */}
        <div className={expositionMode ? (currentSlide === 1 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <HeroSection />
        </div>

        {/* Section 2: ¿Por qué Havanna? */}
        <div className={expositionMode ? (currentSlide === 2 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <PorQueHavanna />
        </div>

        {/* Section 3: Contrato de Franquicia */}
        <div className={expositionMode ? (currentSlide === 3 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <ContratoFranquicia />
        </div>

        {/* Section 4: Financiamiento y mutuo */}
        <div className={expositionMode ? (currentSlide === 4 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <FinanciamientoMutuo />
        </div>

        {/* Section 5: Simulador Financiero */}
        <div className={expositionMode ? (currentSlide === 5 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <SimuladorFinanciero
            params={params}
            setParams={setParams}
            useFinancing={useFinancing}
            setUseFinancing={setUseFinancing}
            expositionMode={expositionMode}
            selectedScenarioId={selectedScenarioId}
            setSelectedScenarioId={setSelectedScenarioId}
          />
        </div>

        {/* Section 6: Escenarios */}
        <div className={expositionMode ? (currentSlide === 6 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <Escenarios 
            onApplyScenario={handleApplyScenario} 
            expositionMode={expositionMode}
            selectedScenarioId={selectedScenarioId}
            params={params}
          />
        </div>

        {/* Section 7: Análisis jurídico-económico y recomendación */}
        <div className={expositionMode ? (currentSlide === 7 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <AnalisisJuridicoEconomico />
          <RecomendacionFinal 
            expositionMode={expositionMode}
            onGoToSlide={handleSlideSelect}
          />
        </div>

        {/* Section 8: Fuentes y Aclaraciones */}
        <div className={expositionMode ? (currentSlide === 8 ? 'block w-full h-screen overflow-y-auto pb-32 pt-20' : 'hidden') : ''}>
          <FuentesAclaraciones />
        </div>
      </main>

      {/* Progress Bar & Controls for Exposition Mode */}
      {expositionMode && (
        <>
          {/* Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-1.5 bg-stone-950 z-[60] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              style={{ width: `${(currentSlide / 8) * 100}%` }}
            />
          </div>

          {/* Navigation Controls Overlay */}
          <div className="fixed bottom-0 left-0 right-0 lg:bottom-6 lg:right-6 lg:left-auto z-50 flex items-center justify-between lg:justify-start space-x-3 bg-stone-900/95 border-t lg:border border-amber-900/40 lg:rounded-xl p-4 lg:p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] lg:shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 w-full lg:w-auto">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 1))}
              disabled={currentSlide === 1}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all cursor-pointer font-sans text-xs font-bold ${
                currentSlide === 1
                  ? 'text-stone-600 cursor-not-allowed bg-stone-950/20 border border-transparent'
                  : 'text-amber-400 hover:text-white hover:bg-amber-500/20 bg-amber-500/5 border border-amber-500/25'
              }`}
              title="Anterior (Flecha Izquierda)"
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>
            
            <span className="text-xs font-semibold text-stone-300 select-none px-2 font-sans">
              Sección <span className="text-amber-400 font-bold font-mono text-sm">{currentSlide}</span> de <span className="font-mono text-sm">8</span>
            </span>

            <button
              onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, 8))}
              disabled={currentSlide === 8}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all cursor-pointer font-sans text-xs font-bold ${
                currentSlide === 8
                  ? 'text-stone-600 cursor-not-allowed bg-stone-950/20 border border-transparent'
                  : 'text-amber-400 hover:text-white hover:bg-amber-500/20 bg-amber-500/5 border border-amber-500/25'
              }`}
              title="Siguiente (Flecha Derecha)"
            >
              <span>Siguiente</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}

      {/* Footer */}
      {!expositionMode && <Footer />}
    </div>
  );
}
