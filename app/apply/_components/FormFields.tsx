"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const ApplicationInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <div className="space-y-2">
      <label className="text-[11px] uppercase tracking-wider font-bold text-[var(--text-secondary)] ml-1">
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className={`w-full px-5 py-3.5 rounded-2xl border bg-[var(--bg-secondary)]/30 backdrop-blur-sm transition-all duration-300 outline-none
          ${error ? "border-[var(--error)] ring-1 ring-[var(--error)]" : "border-[var(--border-primary)] focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] focus:shadow-[0_10px_20px_rgba(41,99,255,0.05)]"}
          text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-base`}
      />
      {error && (
        <span className="text-[10px] font-bold text-[var(--error)] ml-1 uppercase">
          {error}
        </span>
      )}
    </div>
  ),
);

ApplicationInput.displayName = "ApplicationInput";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const ApplicationTextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ label, error, ...props }, ref) => (
  <div className="space-y-2">
    <label className="text-[11px] uppercase tracking-wider font-bold text-[var(--text-secondary)] ml-1">
      {label}
    </label>
    <textarea
      ref={ref}
      {...props}
      rows={4}
      className={`w-full px-5 py-4 rounded-2xl border bg-[var(--bg-secondary)]/30 backdrop-blur-sm transition-all duration-300 outline-none resize-none
          ${error ? "border-[var(--error)] ring-1 ring-[var(--error)]" : "border-[var(--border-primary)] focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] focus:shadow-[0_10px_20px_rgba(41,99,255,0.05)]"}
          text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-base leading-relaxed`}
    />
    {error && (
      <span className="text-[10px] font-bold text-[var(--error)] ml-1 uppercase">
        {error}
      </span>
    )}
  </div>
));

ApplicationTextArea.displayName = "ApplicationTextArea";
