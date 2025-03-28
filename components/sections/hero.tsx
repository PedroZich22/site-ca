import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-100 via-zinc-50 to-purple-50">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-purple-900/10 h-full" />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Instituto Federal de São Paulo
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-zinc-900 mb-6">
              Centro Acadêmico
              <span className="block text-purple-700">Tim Berners-Lee</span>
            </h1>
            <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
              Representando os estudantes de Sistemas de Informação e promovendo
              a excelência acadêmica no Instituto Federal de São Paulo. Um
              espaço para compartilhar conhecimento, desenvolver pesquisas e
              construir o futuro da tecnologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <Link href="/sobre-ca">Conheça o CA</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projetos-alunos">Projetos Acadêmicos</Link>
              </Button>
              <Button variant="outline" className="bg-white" asChild>
                <Link href="/eventos">Eventos Acadêmicos</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Estudantes do IFSP"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-medium text-lg">
                  Formando profissionais e pesquisadores
                </p>
                <p className="text-white/80">
                  Excelência em ensino, pesquisa e extensão
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50 to-transparent"></div>
    </section>
  );
}
