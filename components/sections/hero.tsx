import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-purple-100 via-zinc-50 to-purple-50">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-purple-900/10 h-full" />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-zinc-900 mb-6">
            Centro Acadêmico
            <span className="block text-purple-700">Tim Berners-Lee</span>
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Representando os estudantes e promovendo a integração acadêmica no
            Instituto Federal de São Paulo. Um espaço para compartilhar
            conhecimento, experiências e construir o futuro da tecnologia
            juntos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-white" asChild>
              <Link href="/eventos">Próximos Eventos</Link>
            </Button>
            <Button variant="ghost" className="text-purple-700" asChild>
              <Link href="/sobre-ca">Conheça o CA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
