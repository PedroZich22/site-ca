import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Code, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AcademicShowcase() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-zinc-900 mb-3 text-center">
            Excelência Acadêmica
          </h2>
          <p className="text-zinc-600 text-center max-w-3xl mx-auto">
            Conheça os projetos, pesquisas e conquistas dos estudantes e
            professores do curso de Sistemas de Informação do IFSP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-zinc-200">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Projetos de Pesquisa"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-purple-700" />
                <h3 className="text-xl font-medium text-zinc-900">
                  Projetos de Pesquisa
                </h3>
              </div>
              <p className="text-zinc-600 mb-4">
                Nossos alunos participam ativamente de projetos de iniciação
                científica e pesquisa aplicada em diversas áreas da computação.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  Inteligência Artificial
                </span>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  Segurança da Informação
                </span>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  Desenvolvimento Web
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-zinc-200">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Trabalhos de Conclusão"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-purple-700" />
                <h3 className="text-xl font-medium text-zinc-900">
                  Trabalhos de Conclusão
                </h3>
              </div>
              <p className="text-zinc-600 mb-4">
                Conheça os TCCs desenvolvidos pelos alunos, abordando problemas
                reais e propondo soluções inovadoras.
              </p>
              <Link
                href="/trabalhos-academicos"
                className="text-purple-700 hover:text-purple-800 font-medium inline-flex items-center gap-1"
              >
                Ver repositório de TCCs <span>→</span>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col h-full p-6 border-zinc-200">
            <div className="text-purple-700 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Premiações
            </h3>
            <p className="text-zinc-600 mb-4 flex-grow">
              Nossos alunos conquistaram reconhecimento em competições nacionais
              e internacionais de programação e inovação.
            </p>
            <Link
              href="/conquistas"
              className="text-purple-700 hover:text-purple-800 text-sm font-medium"
            >
              Conhecer conquistas →
            </Link>
          </Card>

          <Card className="flex flex-col h-full p-6 border-zinc-200">
            <div className="text-purple-700 mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Projetos Práticos
            </h3>
            <p className="text-zinc-600 mb-4 flex-grow">
              Desenvolvimento de sistemas reais para empresas e organizações,
              aplicando conhecimentos teóricos na prática.
            </p>
            <Link
              href="/projetos"
              className="text-purple-700 hover:text-purple-800 text-sm font-medium"
            >
              Ver projetos →
            </Link>
          </Card>

          <Card className="flex flex-col h-full p-6 border-zinc-200">
            <div className="text-purple-700 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 mb-2">
              Publicações
            </h3>
            <p className="text-zinc-600 mb-4 flex-grow">
              Artigos científicos publicados por alunos e professores em
              conferências e periódicos nacionais e internacionais.
            </p>
            <Link
              href="/publicacoes"
              className="text-purple-700 hover:text-purple-800 text-sm font-medium"
            >
              Acessar publicações →
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
