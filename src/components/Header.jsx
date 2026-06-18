import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ 
  presentationMode, 
  onTogglePresentationMode, 
  expositionMode, 
  onToggleExpositionMode,
  currentSlide,
  onSlideSelect 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: '¿Por qué Havanna?', href: '#por-que-havanna', id: 'por-que-havanna' },
    { label: 'Contrato', href: '#contrato', id: 'contrato' },
    { label: 'Financiamiento', href: '#financiamiento', id: 'financiamiento' },
    { label: 'Simulador', href: '#simulador', id: 'simulador' },
    { label: 'Escenarios', href: '#escenarios', id: 'escenarios' },
    { label: 'Análisis Jurídico', href: '#analisis-juridico', id: 'analisis-juridico' },
    { label: 'Recomendación', href: '#recomendacion', id: 'recomendacion' },
    { label: 'Fuentes', href: '#fuentes', id: 'fuentes' },
  ];

  const slideMap = {
    inicio: 1,
    'por-que-havanna': 2,
    contrato: 3,
    financiamiento: 4,
    simulador: 5,
    escenarios: 6,
    'analisis-juridico': 7,
    recomendacion: 7,
    fuentes: 8
  };

  const isItemActive = (itemId) => {
    if (expositionMode) {
      return slideMap[itemId] === currentSlide;
    }
    return activeSection === itemId;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (expositionMode) return;

      // Simple intersection observer logic for active link styling
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expositionMode]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    if (expositionMode) {
      const slideNum = slideMap[targetId];
      if (slideNum && onSlideSelect) {
        onSlideSelect(slideNum);
      }
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for sticky header
          behavior: 'smooth',
        });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || expositionMode
          ? 'bg-[#1C100A]/90 border-b border-amber-900/30 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <div 
            className="flex items-center shrink-0 cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'inicio')}
          >
            <img 
              src="/havanna-logo-completo.png" 
              className="h-12 md:h-14 w-auto min-w-[180px] max-w-[260px] object-contain object-left mix-blend-normal" 
              alt="Havanna Logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isItemActive(item.id)
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/40 border border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Modo Presentación Button */}
            <button
              onClick={onTogglePresentationMode}
              className={`ml-2 px-3 py-2 rounded-md text-xs font-bold tracking-wide transition-all duration-305 cursor-pointer border ${
                presentationMode
                  ? 'text-amber-400 bg-amber-500/20 border-amber-500/45 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900/40 border-stone-800/60'
              }`}
            >
              Modo Presentación
            </button>

            {/* Modo Exposición Button */}
            <button
              onClick={onToggleExpositionMode}
              className={`ml-2 px-3 py-2 rounded-md text-xs font-bold tracking-wide transition-all duration-305 cursor-pointer border ${
                expositionMode
                  ? 'text-amber-400 bg-amber-500/20 border-amber-500/45 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900/40 border-stone-800/60'
              }`}
            >
              Modo Exposición
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] border-b border-amber-900/30 bg-[#1C100A]/95 backdrop-blur-md' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                  isItemActive(item.id)
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900 border border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Modo Presentación Mobile */}
            <button
              onClick={onTogglePresentationMode}
              className={`w-full text-left block px-4 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border mt-2 cursor-pointer ${
                presentationMode
                  ? 'text-amber-400 bg-amber-500/20 border-amber-500/45'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900 border-stone-800/60'
              }`}
            >
              Modo Presentación
            </button>

            {/* Modo Exposición Mobile */}
            <button
              onClick={onToggleExpositionMode}
              className={`w-full text-left block px-4 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border mt-2 cursor-pointer ${
                expositionMode
                  ? 'text-amber-400 bg-amber-500/20 border-amber-500/45'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900 border-stone-800/60'
              }`}
            >
              Modo Exposición
            </button>
          </div>
      </div>
    </header>
  );
}
