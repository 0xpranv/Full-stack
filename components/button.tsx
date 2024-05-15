import React from "react";

export const Button = ({
  children,
  className,
  onClick,
  onHover,
  variant,
}: {
  children: string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  onHover?: () => void;
}) => {
  const defaultClassName =
    variant === "secondary"
      ? "bg-slate-200 hover:bg-slate-100 text-slate-700"
      : "bg-primary hover:bg-primary/80 text-white text-lg";
  return (
    <button
      className={`rounded-lg px-4 py-1.5 font-semibold ${defaultClassName} ${className}`}
    >
      {children}
    </button>
  );
};
