import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { IntroText } from "@/components/ui/intro-text";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ProfessorCard,
  type ProfessorProps,
} from "@/components/shared/professor-card";

const professores: ProfessorProps[] = [
  {
    nome: "Dra. Ana Silva",
    area: "Inteligência Artificial e Aprendizado de Máquina",
    formacao: "Doutorado em Ciência da Computação - USP",
    lattes: "http://lattes.cnpq.br/",
    foto: "/placeholder.svg?height=400&width=400",
    grupos: ["GPIA - Grupo de Pesquisa em Inteligência Artificial"],
  },
];

const gruposPesquisa = [
  {
    nome: "GPIA - Grupo de Pesquisa em Inteligência Artificial",
    descricao:
      "Pesquisa em aprendizado de máquina, processamento de linguagem natural e visão computacional.",
    coordenador: "Dra. Ana Silva",
    linhas: [
      "Aprendizado Profundo",
      "Processamento de Linguagem Natural",
      "Visão Computacional",
    ],
  },
];

export default function CorpoDocentePage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <ContentSection>
          <PageHeader
            title="Corpo Docente"
            subtitle="Professores e pesquisadores do curso de Sistemas de Informação"
          />

          <IntroText>
            <p>
              Conheça os professores do curso de Sistemas de Informação do IFSP,
              suas áreas de especialização e grupos de pesquisa. Nosso corpo
              docente é composto por profissionais altamente qualificados, com
              formação acadêmica sólida e experiência em diversas áreas da
              computação.
            </p>
          </IntroText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professores.map((professor, index) => (
              <ProfessorCard key={index} {...professor} />
            ))}
          </div>
        </ContentSection>

        <ContentSection withBorder>
          <SectionHeader title="Grupos de Pesquisa" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gruposPesquisa.map((grupo, index) => (
              <Card key={index} className="p-6 border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-700" />
                  <h3 className="text-xl font-medium text-zinc-900">
                    {grupo.nome}
                  </h3>
                </div>
                <p className="text-zinc-600 mb-4">{grupo.descricao}</p>
                <p className="text-sm text-zinc-600 mb-2">
                  <span className="font-medium">Coordenador:</span>{" "}
                  {grupo.coordenador}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-zinc-900 mb-2">
                    Linhas de Pesquisa:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grupo.linhas.map((linha, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                      >
                        {linha}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
