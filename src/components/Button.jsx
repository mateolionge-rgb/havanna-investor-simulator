import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) {
  const baseStyles = 'inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]',
    secondary: 'bg-stone-900 border border-stone-800 hover:border-amber-500/50 text-amber-100 hover:text-white shadow-sm hover:bg-stone-850 active:scale-[0.98]',
    outline: 'border border-amber-500/40 hover:border-amber-400 text-amber-400 hover:text-amber-300 bg-amber-500/5 hover:bg-amber-500/10 active:scale-[0.98]',
    text: 'text-amber-400 hover:text-amber-300 hover:underline px-2 py-1',
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {children}
    </button>
  );
}
