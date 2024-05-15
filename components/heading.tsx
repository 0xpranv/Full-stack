import React from "react";

export const H1 = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1
      className={`text-3xl text-primary font-bold md:text-4xl xl:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};
