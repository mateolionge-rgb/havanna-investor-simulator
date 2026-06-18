import React from 'react';

export default function InfoCard({
  title,
  subtitle,
  value,
  description,
  icon: IconComponent,
  variant = 'default',
  className = '',
  footer,
}) {
  const baseCardStyles = 'relative overflow-hidden rounded-xl border p-6 transition-all duration-300 backdrop-blur-sm group';
  
  const variants = {
    default: 'bg-stone-900/40 border-stone-850 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5',
    gold: 'bg-gradient-to-br from-[#3C2314] to-[#2C1A10] border-amber-500/30 hover:border-amber-500/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.1)]',
    glass: 'bg-[#FDFBF7]/5 border-white/5 hover:border-amber-500/20',
    flat: 'bg-stone-900 border-stone-800',
  };

  const selectedCard = variants[variant] || variants.default;

  return (
    <div className={`${baseCardStyles} ${selectedCard} ${className}`}>
      {/* Decorative Gold Corner Accent on Hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-grow">
          {subtitle && (
            <span className="text-xs font-semibold tracking-wider text-amber-500/75 uppercase block">
              {subtitle}
            </span>
          )}
          
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
            {title}
          </h3>

          {value && (
            <div className="text-2xl md:text-3xl font-extrabold text-amber-400 font-mono tracking-tight py-1">
              {value}
            </div>
          )}

          {description && (
            <p className="text-sm text-stone-400 leading-relaxed font-sans">
              {description}
            </p>
          )}
        </div>

        {IconComponent && (
          <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800/80 text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-all duration-300 flex-shrink-0 ml-4 shadow-inner">
            <IconComponent size={24} className="stroke-[1.5]" />
          </div>
        )}
      </div>

      {footer && (
        <div className="mt-5 pt-4 border-t border-stone-850 text-xs text-stone-500 flex items-center justify-between">
          {footer}
        </div>
      )}
    </div>
  );
}
