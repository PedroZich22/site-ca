import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionHeader } from "@/components/ui/section-header";
import { BlogCard } from "@/components/shared/blog-card";

export function BlogSection() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section className="py-16 px-4 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between align-center mb-6">
          <SectionHeader
            title="Publicações Acadêmicas"
            description="Artigos, tutoriais e reflexões sobre tecnologia, ciência da computação e o ambiente acadêmico, escritos por alunos e professores."
          />
          <Link
            href="/blog"
            className="text-purple-700 hover:text-purple-800 font-medium"
          >
            Ver todas as publicações →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
