import React from 'react';

export default function Badge({ children, className = '', variant = 'gold' }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300';
  
  const variants = {
    gold: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.05)]',
    brown: 'bg-amber-950/40 text-amber-200 border-amber-800/30',
    cream: 'bg-[#F7F2E8] text-[#3C2314] border-[#EFE9DB]',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    neutral: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  const selectedVariant = variants[variant] || variants.gold;

  return (
    <span className={`${baseStyles} ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
}
