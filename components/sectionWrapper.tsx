import React from "react";

export const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return (
    <div
      className={`container mx-auto flex flex-col px-5 my-24 items-center ${className}`}
    >
      {children}
    </div>
  );
};
