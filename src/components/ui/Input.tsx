'use client';

import { useId, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const fieldBaseClasses =
  'w-full rounded-md border-[1.5px] border-border bg-card px-[14px] py-[10px] text-[15px] leading-normal text-fg outline-none transition-colors duration-150 placeholder:text-muted-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50';

export function Input({ label, error, hint, disabled, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 text-[13px] font-semibold text-fg">
          {label}
        </label>
      )}
      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId ?? hintId}
        className={[fieldBaseClasses, 'h-11', error ? 'border-error' : '', className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
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
