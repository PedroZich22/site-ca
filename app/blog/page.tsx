import { getAllPosts } from "@/lib/blog";
import { PageHeader } from "@/components/ui/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { IntroText } from "@/components/ui/intro-text";
import { BlogCard } from "@/components/shared/blog-card";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <ContentSection>
          <PageHeader
            title="Blog"
            subtitle="Publicações acadêmicas e informativas do Centro Acadêmico"
          />

          <IntroText>
            <p>
              Neste espaço, compartilhamos artigos, tutoriais e reflexões sobre
              tecnologia, ciência da computação e o ambiente acadêmico, escritos
              por alunos e professores do curso de Sistemas de Informação.
            </p>
          </IntroText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
