import type { ReactNode } from 'react';

type CardElement = 'div' | 'article' | 'section';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: CardElement;
  hover?: boolean;
}

const baseClasses = 'rounded-lg border border-border bg-card shadow-md';
const hoverClasses = 'transition-shadow duration-[160ms] ease-brand hover:shadow-lg';

export function Card({ children, className, as: Component = 'div', hover = false }: CardProps) {
  const classes = [baseClasses, hover ? hoverClasses : '', className].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
}
