import React from 'react';

export default function SectionTitle({
  title,
  subtitle,
  badgeText,
  align = 'center',
  className = '',
}) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const currentAlign = alignmentStyles[align] || alignmentStyles.center;

  return (
    <div className={`flex flex-col mb-12 ${currentAlign} ${className}`}>
      {badgeText && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 uppercase mb-3 animate-pulse">
          {badgeText}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-stone-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      
      <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mt-4" />
    </div>
  );
}
