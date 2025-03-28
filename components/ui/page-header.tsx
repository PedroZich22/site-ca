interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-l-4 border-purple-700 pl-4 mb-8">
      <h1 className="text-4xl font-serif font-medium text-zinc-900">{title}</h1>
      {subtitle && <p className="text-zinc-600 mt-2">{subtitle}</p>}
    </div>
  );
}
