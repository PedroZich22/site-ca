import { Card } from "@/components/ui/card";
import {
  Code2,
  BrainCircuit,
  Users,
  FlaskRound as Flask,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function SobreInstituicaoPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-serif font-medium text-zinc-900 mb-6">
            Instituto Federal de São Paulo
          </h1>
          <p className="text-lg text-zinc-600 mb-8">
            O IFSP campus São Paulo está localizado no bairro do Canindé, região
            central da cidade. O campus é a unidade mais antiga do instituto,
            funcionando desde 1909, e atualmente oferece diversos cursos
            técnicos e superiores.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            Curso de Sistemas de Informação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="prose prose-zinc">
              <p>
                O curso tem duração de 4 anos (8 semestres) e as aulas acontecem
                no período noturno. A grade curricular abrange disciplinas
                técnicas e teóricas, com foco em programação, desenvolvimento de
                software e gestão de TI.
              </p>
              <h4 className="text-xl font-medium mt-6 mb-4">
                Disciplinas Principais
              </h4>
              <ul className="list-disc list-inside">
                <li>Algoritmos e Estruturas de Dados</li>
                <li>Programação Orientada a Objetos</li>
                <li>Desenvolvimento Web</li>
                <li>Banco de Dados</li>
                <li>Redes de Computadores</li>
                <li>Engenharia de Software</li>
                <li>Sistemas Operacionais</li>
                <li>Inteligência Artificial</li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                alt="Laboratório de Informática"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                Desenvolvimento
              </h3>
              <p className="text-sm text-zinc-600">
                Java, Python, JavaScript e outras linguagens de programação
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                Projetos Práticos
              </h3>
              <p className="text-sm text-zinc-600">
                Desenvolvimento de sistemas e aplicações reais
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                Trabalho em Equipe
              </h3>
              <p className="text-sm text-zinc-600">
                Projetos colaborativos e práticas em grupo
              </p>
            </Card>
            <Card className="p-6 border-zinc-200">
              <div className="text-purple-700 mb-4">
                <Flask className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                Pesquisa
              </h3>
              <p className="text-sm text-zinc-600">
                Iniciação científica e projetos de extensão
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            Estrutura do Campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-zinc-200">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
                  alt="Laboratório"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Laboratórios
                </h3>
                <p className="text-sm text-zinc-600">
                  6 laboratórios de informática com Linux e Windows
                </p>
              </div>
            </Card>
            <Card className="border-zinc-200">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
                  alt="Biblioteca"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Biblioteca
                </h3>
                <p className="text-sm text-zinc-600">
                  Livros técnicos, periódicos e acesso a bases científicas
                </p>
              </div>
            </Card>
            <Card className="border-zinc-200">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80"
                  alt="Espaços de Estudo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Áreas de Estudo
                </h3>
                <p className="text-sm text-zinc-600">
                  Salas para estudo individual e em grupo
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif text-zinc-900 mb-8">
            Localização
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-purple-700 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-2">
                    Como Chegar
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Rua Pedro Vicente, 625 - Canindé
                    <br />
                    São Paulo - SP, 01109-010
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>Próximo à estação Armênia do Metrô (10 min a pé)</li>
                    <li>Várias linhas de ônibus param próximo ao campus</li>
                    <li>Estacionamento disponível para alunos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3235993720244!2d-46.63063492375836!3d-23.524654060400825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5882f3b95555%3A0x21440c32381f7e43!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1711484877387!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
