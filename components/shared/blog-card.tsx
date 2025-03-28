import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ slug, title, date, category, excerpt }: BlogPost) {
  return (
    <Card className="border-zinc-200 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
          <span>{new Date(date).toLocaleDateString("pt-BR")}</span>
          <span>•</span>
          <span className="text-purple-700">{category}</span>
        </div>
        <h3 className="text-xl font-medium text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-600 mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-purple-700 hover:text-purple-800 font-medium mt-auto"
        >
          Ler mais →
        </Link>
      </div>
    </Card>
  );
}
