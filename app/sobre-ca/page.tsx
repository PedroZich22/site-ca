import { Card } from "@/components/ui/card";
import { Users, Target, HandHeart, Lightbulb } from "lucide-react";

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
        <section className="mb-16">
          <h1 className="text-4xl font-serif font-medium text-zinc-900 mb-6">
            Centro Acadêmico Tim Berners-Lee
          </h1>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            O Centro Acadêmico (CA) é a entidade representativa dos estudantes
            de Sistemas de Informação do IFSP. Nossa missão é promover a
            integração entre os alunos, defender seus interesses e contribuir
            para a qualidade do ensino.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            O que fazemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                decisões que afetam a vida acadêmica.
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                Integração
              </h3>
              <p className="text-zinc-600">
                Organizamos eventos acadêmicos, culturais e sociais que promovem
                a integração entre os alunos e o desenvolvimento profissional.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            Gestão Atual
          </h2>
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
        </section>

        <section>
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            Como Participar
          </h2>
          <div className="prose prose-zinc max-w-none">
            <p>
              O CA é uma organização aberta a todos os estudantes de Sistemas de
              Informação do IFSP. Existem várias formas de participar:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Participando das assembleias e reuniões</li>
              <li>Integrando grupos de trabalho</li>
              <li>Propondo e organizando eventos</li>
              <li>Candidatando-se à diretoria nas eleições anuais</li>
            </ul>
            <p>
              Para mais informações sobre como participar, entre em contato
              conosco através do e-mail ou nos encontre pessoalmente na sala do
              CA.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
