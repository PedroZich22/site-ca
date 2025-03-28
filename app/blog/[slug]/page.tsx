import { CustomMarkdown } from "@/components/custom-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPostBySlug((await params).slug);

  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-20">
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                <span>•</span>
                <span className="text-purple-700">{post.category}</span>
              </div>
              <div className="border-l-4 border-purple-700 pl-4">
                <h1 className="text-4xl font-serif font-medium text-zinc-900">
                  {post.title}
                </h1>
              </div>
            </header>
            <div className="prose prose-zinc max-w-none">
              <CustomMarkdown content={post.content} />
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-200">
              <Link
                href="/blog"
                className="text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Voltar para o blog
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
