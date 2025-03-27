import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white border-b border-zinc-200">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-zinc-900">
          CA Tim Berners-Lee
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/sobre-instituicao" className="text-zinc-600 hover:text-purple-700 transition-colors">
            Instituição e Curso
          </Link>
          <Link href="/sobre-ca" className="text-zinc-600 hover:text-purple-700 transition-colors">
            Centro Acadêmico
          </Link>
          <Link href="/eventos" className="text-zinc-600 hover:text-purple-700 transition-colors">
            Eventos
          </Link>
          <Link href="/blog" className="text-zinc-600 hover:text-purple-700 transition-colors">
            Blog
          </Link>
        </div>
        <Button variant="ghost" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </nav>
    </header>
  );
}