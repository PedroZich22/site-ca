import { getAllPosts } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-medium text-zinc-900 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="border-zinc-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span>•</span>
                  <span className="text-purple-700">{post.category}</span>
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-2">{post.title}</h3>
                <p className="text-zinc-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-purple-700 hover:text-purple-800 font-medium"
                >
                  Ler mais →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}