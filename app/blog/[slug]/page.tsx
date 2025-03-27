import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Markdown from "markdown-to-jsx";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
            <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            <span>•</span>
            <span className="text-purple-700">{post.category}</span>
          </div>
          <h1 className="text-4xl font-serif font-medium text-zinc-900">
            {post.title}
          </h1>
        </header>
        <div className="max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
