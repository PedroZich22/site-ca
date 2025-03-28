"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface NavGroup {
  title: string;
  sections: NavSection[];
}

const navigation: NavGroup[] = [
  {
    title: "Instituição",
    sections: [
      {
        title: "Sobre",
        items: [
          {
            title: "Instituição e Curso",
            href: "/sobre-instituicao",
            description: "Conheça o IFSP e o curso de Sistemas de Informação",
          },
          {
            title: "Corpo Docente",
            href: "/corpo-docente",
            description: "Professores e pesquisadores do curso",
          },
        ],
      },
    ],
  },
  {
    title: "Centro Acadêmico",
    sections: [
      {
        title: "Informações",
        items: [
          {
            title: "Sobre o CA",
            href: "/sobre-ca",
            description: "Conheça o Centro Acadêmico Tim Berners-Lee",
          },
          {
            title: "Eventos",
            href: "/eventos",
            description: "Atividades e eventos organizados pelo CA",
          },
        ],
      },
    ],
  },
  {
    title: "Acadêmico",
    sections: [
      {
        title: "Conteúdo",
        items: [
          {
            title: "Projetos de Alunos",
            href: "/projetos-alunos",
            description: "Trabalhos e projetos desenvolvidos pelos estudantes",
          },
          {
            title: "Blog",
            href: "/blog",
            description: "Artigos e publicações acadêmicas",
          },
        ],
      },
    ],
  },
];

export function MegaNav() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/LogoGuaxBSI.jpg"
              alt="Logo IFSP Sistemas de Informação"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-xl text-zinc-900">
              CA Tim Berners-Lee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((group) => (
              <div key={group.title} className="relative">
                <button
                  className={cn(
                    "flex items-center gap-1 text-zinc-600 hover:text-purple-700 transition-colors",
                    activeGroup === group.title && "text-purple-700"
                  )}
                  onMouseEnter={() => setActiveGroup(group.title)}
                  onClick={() =>
                    setActiveGroup(
                      activeGroup === group.title ? null : group.title
                    )
                  }
                >
                  {group.title}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      activeGroup === group.title && "rotate-180"
                    )}
                  />
                </button>

                {activeGroup === group.title && (
                  <div
                    className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-zinc-200 z-50"
                    onMouseLeave={() => setActiveGroup(null)}
                  >
                    {group.sections.map((section) => (
                      <div key={section.title} className="p-4">
                        <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                          {section.title}
                        </div>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block group"
                              onClick={() => setActiveGroup(null)}
                            >
                              <div className="text-sm font-medium text-zinc-900 group-hover:text-purple-700">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-xs text-zinc-500 mt-0.5">
                                  {item.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 border-t border-zinc-100">
            {navigation.map((group) => (
              <div key={group.title} className="mb-4">
                <div className="font-medium text-zinc-900 mb-2">
                  {group.title}
                </div>
                {group.sections.map((section) => (
                  <div key={section.title} className="pl-4 mb-2">
                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                      {section.title}
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm text-zinc-700 hover:text-purple-700">
                            {item.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
