'use client';

import { useId, type SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
}

const fieldBaseClasses =
  'w-full appearance-none rounded-md border-[1.5px] border-border bg-card px-[14px] py-[10px] pr-9 text-[15px] leading-normal text-fg outline-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50';

export function Select({
  label,
  error,
  hint,
  options,
  disabled,
  className,
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={selectId} className="mb-1.5 text-[13px] font-semibold text-fg">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId ?? hintId}
          className={[fieldBaseClasses, 'h-11', error ? 'border-error' : '', className]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-fg"
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {error ? (
        <p id={errorId} className="mt-1 text-[12.5px] text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="mt-1 text-[12.5px] text-muted-fg">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
