"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Button = ({
  children,
  className,
  onClick,
  onHover,
  variant,
  redirectPath,
}: {
  children: string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  onHover?: () => void;
  redirectPath?: string;
}) => {
  const router = useRouter();
  const defaultClassName =
    variant === "secondary"
      ? "bg-slate-200 hover:bg-slate-100 text-slate-700"
      : "bg-primary hover:bg-primary/80 text-white text-lg";
  return (
    <button
      className={`rounded-lg px-4 py-1.5 font-semibold ${defaultClassName} ${className}`}
      onClick={() => {
        //@ts-ignore
        router.push(redirectPath | "/");
      }}
    >
      {children}
    </button>
  );
};
