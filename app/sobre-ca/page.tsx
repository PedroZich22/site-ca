import { Card } from "@/components/ui/card";
import {
  Target,
  HandHeart,
  MessageCircle,
  Users,
  Calendar,
  BookOpen,
  HelpCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";

const diretoria = [
  {
    nome: "Sthefany Cristovam",
    cargo: "Presidente",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "Pedro Zich",
    cargo: "Vice-Presidente",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "Fabricio Guerra",
    cargo: "Financeiro",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "Nicholas Ferraz",
    cargo: "Financeiro",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "Jonas Sanjinez",
    cargo: "Marketing",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "João Vitor Leal",
    cargo: "Marketing",
    curso: "Sistemas de Informação - 5º Semestre",
  },
  {
    nome: "Gustavo da Silva",
    cargo: "Marketing",
    curso: "Sistemas de Informação - 5º Semestre",
  },
];

export default function SobreCAPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Introdução */}
        <ContentSection>
          <PageHeader
            title="Centro Acadêmico Tim Berners-Lee"
            subtitle="A voz dos estudantes de Sistemas de Informação do IFSP"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="prose prose-zinc max-w-none">
              <h2 className="text-2xl font-serif text-zinc-900 mb-4">
                O que é um Centro Acadêmico?
              </h2>
              <p>
                O Centro Acadêmico (CA) é a entidade representativa dos
                estudantes de um curso de graduação. No contexto do curso de
                Sistemas de Informação do IFSP, o CA Tim Berners-Lee atua como
                um órgão independente, eleito democraticamente pelos alunos,
                para representar seus interesses e necessidades.
              </p>
              <p>
                Como instância legítima de representação estudantil, o CA
                constitui um importante canal de comunicação entre os estudantes
                e os órgãos da instituição, como coordenação de curso, direção
                acadêmica e demais instâncias administrativas.
              </p>
              <p>
                Além da função representativa, o Centro Acadêmico promove
                atividades acadêmicas, culturais e sociais que complementam a
                formação universitária e fortalecem o senso de comunidade entre
                os estudantes.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Reunião do Centro Acadêmico"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">
                  Membros do CA em reunião com estudantes
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Missão e Funções */}
        <ContentSection>
          <SectionHeader title="Nossas Funções" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                Representação Estudantil
              </h3>
              <p className="text-zinc-600">
                Representamos os interesses dos estudantes junto à coordenação
                do curso e à direção do campus, participando ativamente das
                decisões que afetam a vida acadêmica e garantindo que a voz dos
                alunos seja ouvida.
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                Mediação e Apoio
              </h3>
              <p className="text-zinc-600">
                Atuamos como ponte entre os estudantes e a instituição,
                auxiliando na resolução de problemas acadêmicos, esclarecendo
                dúvidas sobre procedimentos institucionais e encaminhando
                demandas coletivas.
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                Integração e Desenvolvimento
              </h3>
              <p className="text-zinc-600">
                Promovemos eventos acadêmicos, culturais e sociais que
                complementam a formação universitária, incentivam a troca de
                conhecimentos e fortalecem os laços entre os estudantes do
                curso.
              </p>
            </Card>
          </div>
        </ContentSection>

        {/* Serviços e Apoio */}
        <ContentSection>
          <SectionHeader title="Como Podemos Ajudar" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-zinc-200 h-full">
              <div className="flex items-start gap-4">
                <div className="text-purple-700 mt-1">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-3">
                    Suporte Acadêmico
                  </h3>
                  <ul className="space-y-2 text-zinc-600">
                    <li>
                      • Orientação sobre procedimentos acadêmicos e
                      administrativos
                    </li>
                    <li>
                      • Esclarecimento de dúvidas sobre o curso e disciplinas
                    </li>
                    <li>• Mediação em situações de conflito acadêmico</li>
                    <li>• Encaminhamento de solicitações à coordenação</li>
                    <li>• Divulgação de oportunidades de estágio e pesquisa</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-zinc-200 h-full">
              <div className="flex items-start gap-4">
                <div className="text-purple-700 mt-1">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-3">
                    Atividades e Eventos
                  </h3>
                  <ul className="space-y-2 text-zinc-600">
                    <li>
                      • Organização da Semana Acadêmica de Sistemas de
                      Informação
                    </li>
                    <li>• Workshops e minicursos complementares</li>
                    <li>
                      • Palestras com profissionais e pesquisadores da área
                    </li>
                    <li>• Grupos de estudo e monitoria entre pares</li>
                    <li>• Eventos de integração e confraternização</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </ContentSection>

        {/* Gestão Atual */}
        <ContentSection>
          <SectionHeader title="Gestão Atual" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diretoria.map((membro, index) => (
              <Card key={index} className="p-6 border-zinc-200">
                <h3 className="text-xl font-medium text-zinc-900 mb-2">
                  {membro.nome}
                </h3>
                <p className="text-purple-700 font-medium mb-1">
                  {membro.cargo}
                </p>
                <p className="text-zinc-600 text-sm">{membro.curso}</p>
              </Card>
            ))}
          </div>
        </ContentSection>

        {/* Como Participar */}
        <ContentSection>
          <SectionHeader title="Como Participar" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose prose-zinc max-w-none">
              <p>
                O Centro Acadêmico é uma organização aberta a todos os
                estudantes de Sistemas de Informação do IFSP. Existem diversas
                formas de participar e contribuir com as atividades do CA:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <span className="font-medium">
                    Participação em assembleias:
                  </span>{" "}
                  Todos os estudantes podem participar das assembleias gerais,
                  onde são discutidas e votadas questões importantes para o
                  curso.
                </li>
                <li>
                  <span className="font-medium">Voluntariado em eventos:</span>{" "}
                  Ajude na organização e execução dos eventos promovidos pelo
                  CA, contribuindo com suas habilidades e ideias.
                </li>
                <li>
                  <span className="font-medium">Grupos de trabalho:</span>{" "}
                  Integre grupos temáticos que desenvolvem projetos específicos,
                  como comunicação, eventos acadêmicos ou iniciativas sociais.
                </li>
                <li>
                  <span className="font-medium">Proposição de atividades:</span>{" "}
                  Sugira e lidere a organização de eventos, workshops ou outras
                  atividades que considere relevantes para os estudantes.
                </li>
                <li>
                  <span className="font-medium">Candidatura à diretoria:</span>{" "}
                  Nas eleições anuais, você pode se candidatar a um cargo na
                  diretoria do CA e participar diretamente da gestão da
                  entidade.
                </li>
              </ul>
              <p className="mt-4">
                Sua participação é fundamental para fortalecer a representação
                estudantil e contribuir para a melhoria contínua do curso e da
                experiência acadêmica de todos os estudantes.
              </p>
            </div>
            <div>
              <Card className="p-6 border-zinc-200 mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-purple-700 mt-1">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-zinc-900 mb-2">
                      Próximas Eleições
                    </h3>
                    <p className="text-zinc-600 mb-4">
                      As eleições para a próxima gestão do Centro Acadêmico
                      ocorrerão em outubro de 2024. Fique atento às divulgações
                      sobre o período de inscrição de chapas e o processo
                      eleitoral.
                    </p>
                    <Link
                      href="/eventos"
                      className="text-purple-700 hover:text-purple-800 font-medium"
                    >
                      Ver calendário de eventos →
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-zinc-200">
                <div className="flex items-start gap-4">
                  <div className="text-purple-700 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-zinc-900 mb-4">
                      Entre em Contato
                    </h3>
                    <div className="space-y-4 text-zinc-600">
                      <p>
                        <span className="font-medium">E-mail:</span>{" "}
                        ca.bsi.ifsp@gmail.com
                      </p>
                      <p>
                        <span className="font-medium">Instagram:</span>{" "}
                        @ca.timbernerslee
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
