import type React from "react";

interface IntroTextProps {
  children: React.ReactNode;
}

export function IntroText({ children }: IntroTextProps) {
  return <div className="prose prose-zinc max-w-none mb-12">{children}</div>;
}
