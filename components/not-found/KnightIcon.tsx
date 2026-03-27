import React from "react";

export default function KnightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M44 56H18c-1.66 0-3-1.34-3-3v-4c0-2.16 1.21-4.12 3.14-5.1l9.2-4.62c1.14-.57 1.66-1.9 1.2-3.09l-2.64-6.93c-1.32-3.45.32-7.3 3.71-8.68l2.16-.88c2.1-.86 3.49-2.9 3.49-5.17V6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2.4c0 3.83-2.35 7.28-5.92 8.71l-.95.38c-1.49.6-2.2 2.31-1.56 3.79l4.12 9.6c.58 1.36 1.98 2.16 3.44 1.97l1.26-.17c2.27-.31 4.33 1.22 4.73 3.47l.46 2.58c.34 1.89-.56 3.78-2.23 4.67L44 46v7c0 1.66-1.34 3-3 3Z"
        fill="currentColor"
      />
      <path
        d="M50 58H12c-1.1 0-2-.9-2-2s.9-2 2-2h38c1.1 0 2 .9 2 2s-.9 2-2 2Z"
        fill="currentColor"
        opacity="0.35"
      />
      <circle cx="40" cy="14" r="2.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

