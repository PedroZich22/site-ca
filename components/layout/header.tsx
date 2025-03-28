"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Users, GraduationCap, Info } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "Instituição",
    icon: <Info className="w-4 h-4 mr-2" />,
    items: [
      { label: "Sobre a Instituição e Curso", href: "/sobre-instituicao" },
      { label: "Corpo Docente", href: "/corpo-docente" },
    ],
  },
  {
    label: "Centro Acadêmico",
    icon: <Users className="w-4 h-4 mr-2" />,
    items: [
      { label: "Sobre o CA", href: "/sobre-ca" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    label: "Acadêmico",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
    items: [
      { label: "Projetos de Alunos", href: "/projetos-alunos" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoGuaxBSI.jpg-L8VCJY9Jagl9FGDu5AnPt2r5GLwOOS.jpeg"
              alt="Logo IFSP Sistemas de Informação"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-xl text-zinc-900">
              CA Tim Berners-Lee
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navGroups.map((group, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-zinc-600 hover:text-purple-700 transition-colors"
                  >
                    {group.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-56"
                >
                  {group.items.map((item, idx) => (
                    <DropdownMenuItem key={idx} asChild>
                      <Link
                        href={item.href}
                        className="flex items-center cursor-pointer w-full"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
          <div className="md:hidden py-4 border-t border-zinc-100">
            {navGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                <div className="flex items-center px-2 py-2 font-medium text-zinc-900">
                  {group.icon}
                  {group.label}
                </div>
                <div className="pl-6 space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block px-2 py-1.5 text-zinc-600 hover:text-purple-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
