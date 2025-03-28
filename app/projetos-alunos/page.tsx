import { PageHeader } from "@/components/ui/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { IntroText } from "@/components/ui/intro-text";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ProjectCard,
  type ProjectProps,
} from "@/components/shared/project-card";
import {
  AchievementCard,
  type AchievementProps,
} from "@/components/shared/achievement-card";

const projetos: ProjectProps[] = [
  {
    titulo: "Sistema de Gestão de Biblioteca Digital",
    alunos: ["Maria Santos", "João Silva", "Pedro Oliveira"],
    orientador: "Dr. Carlos Mendes",
    descricao:
      "Desenvolvimento de um sistema completo para gerenciamento de acervo digital, com funcionalidades de busca avançada, controle de empréstimos e integração com bases de dados acadêmicas.",
    tecnologias: ["React", "Node.js", "MongoDB", "Docker"],
    imagem: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/",
    ano: "2023",
  },
];

const conquistas: AchievementProps[] = [
  {
    titulo: "1º Lugar na Maratona de Programação Regional",
    alunos: ["Bruno Almeida", "Carla Sousa", "Diego Mendes"],
    descricao:
      "Equipe do IFSP conquistou o primeiro lugar na etapa regional da Maratona de Programação, resolvendo 8 de 10 problemas propostos.",
    data: "Outubro de 2023",
    categoria: "Competição",
  },
];

export default function ProjetosAlunosPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <ContentSection>
          <PageHeader
            title="Projetos de Alunos"
            subtitle="Trabalhos acadêmicos desenvolvidos pelos estudantes de Sistemas de Informação"
          />

          <IntroText>
            <p>
              Conheça os projetos desenvolvidos pelos alunos do curso de
              Sistemas de Informação, demonstrando a aplicação prática dos
              conhecimentos adquiridos durante a formação e a capacidade de
              resolver problemas reais com soluções tecnológicas inovadoras.
            </p>
          </IntroText>

          <div className="space-y-12">
            {projetos.map((projeto, index) => (
              <ProjectCard key={index} {...projeto} />
            ))}
          </div>
        </ContentSection>

        <ContentSection withBorder>
          <SectionHeader title="Conquistas e Reconhecimentos" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conquistas.map((conquista, index) => (
              <AchievementCard key={index} {...conquista} />
            ))}
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
