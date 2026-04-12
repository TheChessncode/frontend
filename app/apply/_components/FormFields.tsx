"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const ApplicationInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <div className="space-y-2">
      <label className="text-[11px] tracking-wider font-bold text-[var(--text-secondary)] ml-1">
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className={`w-full px-4 py-3 rounded-2xl border bg-[var(--bg-secondary)]/30 backdrop-blur-sm transition-all duration-300 outline-none
          ${error ? "border-[var(--error)] ring-1 ring-[var(--error)]" : "border-[var(--border-primary)] focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] focus:shadow-[0_10px_20px_rgba(41,99,255,0.05)]"}
          text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-base`}
      />
      {error && (
        <span className="text-[10px] font-bold text-[var(--error)] ml-1">
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
    <label className="text-[11px] tracking-wider font-bold text-[var(--text-secondary)] ml-1">
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
      <span className="text-[10px] font-bold text-[var(--error)] ml-1">
        {error}
      </span>
    )}
  </div>
));

ApplicationTextArea.displayName = "ApplicationTextArea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const ApplicationSelect = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ label, options, error, ...props }, ref) => (
  <div className="space-y-2">
    <label className="text-[11px] tracking-wider font-bold text-[var(--text-secondary)] ml-1">
      {label}
    </label>
    <div className="relative">
      <select
        ref={ref}
        {...props}
        className={`w-full px-4 py-3 rounded-2xl border bg-[var(--bg-secondary)]/30 backdrop-blur-sm transition-all duration-300 outline-none appearance-none
          ${error ? "border-[var(--error)] ring-1 ring-[var(--error)]" : "border-[var(--border-primary)] focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] focus:shadow-[0_10px_20px_rgba(41,99,255,0.05)]"}
          text-[var(--text-primary)] text-base cursor-pointer`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-[var(--bg-primary)] text-[var(--text-primary)]"
          >
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    {error && (
      <span className="text-[10px] font-bold text-[var(--error)] ml-1">
        {error}
      </span>
    )}
  </div>
));

ApplicationSelect.displayName = "ApplicationSelect";

interface SignaturePadProps {
  label: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SignaturePad = ({
  label,
  error,
  value,
  onChange,
}: SignaturePadProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.lineWidth = 2;
        context.lineCap = "round";
        context.strokeStyle = "var(--text-primary)";
        setCtx(context);
      }
    }
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    ctx?.beginPath();
    ctx?.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    ctx?.closePath();
    const canvas = canvasRef.current;
    if (canvas) {
      onChange(canvas.toDataURL());
    }
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      onChange("");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <label className="text-[11px] tracking-wider font-bold text-[var(--text-secondary)] ml-1">
          {label}
        </label>
        <button
          type="button"
          onClick={clear}
          className="text-[10px] font-bold text-[var(--brand-primary)] hover:opacity-70 transition-opacity"
        >
          Clear
        </button>
      </div>
      <div
        className={`relative w-full aspect-[3/1] rounded-2xl border bg-[var(--bg-secondary)]/30 backdrop-blur-sm transition-all duration-300 overflow-hidden
          ${error ? "border-[var(--error)] ring-1 ring-[var(--error)]" : "border-[var(--border-primary)] focus-within:border-[var(--brand-primary)] focus-within:bg-[var(--bg-primary)]"}
        `}
      >
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="w-full h-full cursor-crosshair touch-none"
        />
      </div>
      {error && (
        <span className="text-[10px] font-bold text-[var(--error)] ml-1">
          {error}
        </span>
      )}
    </div>
  );
};
