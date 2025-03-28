import type React from "react";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  withBorder?: boolean;
}

export function ContentSection({
  children,
  className = "",
  withBorder = false,
}: ContentSectionProps) {
  return (
    <section
      className={`mb-20 ${withBorder ? "pt-16 border-t border-zinc-200" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
