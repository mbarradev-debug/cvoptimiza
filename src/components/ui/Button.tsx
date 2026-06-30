'use client';

import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'cta' | 'primary' | 'ghost';
type ButtonSize = 'default' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
}

const baseClasses =
  'inline-flex items-center gap-2 whitespace-nowrap rounded-md border-[1.5px] border-transparent leading-none font-semibold transition-[background-color,color,transform,box-shadow] duration-[160ms] ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-secondary disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  cta: 'bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-px hover:shadow-[0_4px_14px_var(--accent-glow)] active:translate-y-0 active:shadow-none',
  primary:
    'bg-primary text-white border-primary hover:bg-primary-mid hover:border-primary-mid hover:-translate-y-px active:translate-y-0',
  ghost: 'bg-transparent text-muted-fg border-border hover:text-fg hover:border-fg',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-5 py-2.5 text-[15px]',
  lg: 'px-8 py-[15px] text-[17px]',
};

export function Button({ variant, size = 'default', className, ...props }: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  return <button className={classes} {...props} />;
}
