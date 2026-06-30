'use client';

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'matched';
}

const baseClasses =
  'inline-flex select-none items-center rounded-full border-[1.5px] px-2.5 py-1 text-[11.5px] leading-none font-medium transition-colors duration-150';

const variantClasses: Record<NonNullable<TagProps['variant']>, string> = {
  default: 'border-transparent bg-muted text-muted-fg',
  matched: 'border-success bg-success-bg text-success',
};

const activeClasses = 'border-secondary bg-secondary text-white';

const interactiveClasses =
  'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary';

export function Tag({ label, active = false, onClick, variant = 'default' }: TagProps) {
  const classes = [
    baseClasses,
    active ? activeClasses : variantClasses[variant],
    onClick ? interactiveClasses : '',
    onClick && !active ? 'hover:border-accent hover:text-accent' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (onClick) {
    return (
      <button type="button" aria-pressed={active} onClick={onClick} className={classes}>
        {label}
      </button>
    );
  }

  return <span className={classes}>{label}</span>;
}
