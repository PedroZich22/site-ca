interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  className = "",
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2
        className={`text-3xl font-serif text-zinc-900 mb-3 ${centered ? "text-center" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-zinc-600 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
