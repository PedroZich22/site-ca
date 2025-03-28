import { Card } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, BookOpen, Users, Building } from "lucide-react";

export default function SobreInstituicaoPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Instituição Section */}
        <section className="mb-20">
          <div className="border-l-4 border-purple-700 pl-4 mb-8">
            <h1 className="text-4xl font-serif font-medium text-zinc-900">
              Instituto Federal de São Paulo
            </h1>
            <p className="text-zinc-600 mt-2">
              Uma instituição centenária de educação pública federal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="prose prose-zinc max-w-none">
              <h2 className="text-2xl font-serif text-zinc-900 mb-4">
                História e Tradição
              </h2>
              <p>
                O Instituto Federal de Educação, Ciência e Tecnologia de São
                Paulo (IFSP) teve sua origem em 1909, como Escola de Aprendizes
                Artífices. É uma das instituições mais antigas do Brasil, com
                mais de um século dedicado à educação pública de qualidade.
              </p>
              <p>
                Ao longo de sua história, a instituição passou por diversas
                transformações, sendo conhecida como Liceu Industrial de São
                Paulo, Escola Industrial de São Paulo, Escola Técnica de São
                Paulo, Escola Técnica Federal de São Paulo e Centro Federal de
                Educação Tecnológica de São Paulo (CEFET-SP), até se tornar
                Instituto Federal em 2008.
              </p>
              <p>
                Essa trajetória reflete a evolução do ensino profissional e
                tecnológico no Brasil, acompanhando as mudanças sociais,
                políticas e econômicas do país, sempre mantendo o compromisso
                com a formação integral dos estudantes.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Fachada histórica do IFSP"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">
                  Fachada histórica do campus São Paulo
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif text-zinc-900 mb-6">
              O Campus São Paulo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Vista aérea do campus São Paulo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    Vista do campus São Paulo
                  </p>
                </div>
              </div>
              <div className="prose prose-zinc max-w-none">
                <p>
                  O campus São Paulo está localizado no bairro do Canindé,
                  região central da cidade. Como unidade mais antiga do
                  instituto, o campus possui uma infraestrutura consolidada, com
                  laboratórios, bibliotecas, auditórios e espaços de
                  convivência.
                </p>
                <p>
                  Atualmente, o campus oferece cursos técnicos integrados ao
                  ensino médio, cursos técnicos subsequentes, cursos superiores
                  de tecnologia, licenciaturas, bacharelados e pós-graduação,
                  atendendo a diferentes perfis de estudantes e necessidades
                  educacionais.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-zinc-200">
                <div className="text-purple-700 mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Infraestrutura
                </h3>
                <p className="text-zinc-600 text-sm">
                  O campus conta com laboratórios modernos, biblioteca com
                  acervo especializado, auditórios, espaços de convivência e
                  instalações acessíveis.
                </p>
              </Card>
              <Card className="p-6 border-zinc-200">
                <div className="text-purple-700 mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Ensino, Pesquisa e Extensão
                </h3>
                <p className="text-zinc-600 text-sm">
                  A instituição se fundamenta no tripé acadêmico, integrando
                  atividades de ensino com projetos de pesquisa e ações de
                  extensão junto à comunidade.
                </p>
              </Card>
              <Card className="p-6 border-zinc-200">
                <div className="text-purple-700 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Comunidade Acadêmica
                </h3>
                <p className="text-zinc-600 text-sm">
                  Formada por estudantes, professores e técnicos-administrativos
                  que compartilham o compromisso com a educação pública de
                  qualidade.
                </p>
              </Card>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-8">
            <MapPin className="w-5 h-5 text-purple-700 mt-1" />
            <div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                Localização
              </h3>
              <p className="text-zinc-600 mb-4">
                Rua Pedro Vicente, 625 - Canindé
                <br />
                São Paulo - SP, 01109-010
              </p>
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
        </section>

        {/* Curso Section */}
        <section className="mb-16 pt-16 border-t border-zinc-200">
          <div className="border-l-4 border-purple-700 pl-4 mb-8">
            <h1 className="text-4xl font-serif font-medium text-zinc-900">
              Bacharelado em Sistemas de Informação
            </h1>
            <p className="text-zinc-600 mt-2">
              Formação acadêmica em tecnologia com perspectiva humanística
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="prose prose-zinc max-w-none">
              <h2 className="text-2xl font-serif text-zinc-900 mb-4">
                Visão Geral
              </h2>
              <p>
                O curso de Bacharelado em Sistemas de Informação do IFSP tem
                como objetivo formar profissionais com sólida base científica,
                capacidade crítica e visão humanística. O programa integra
                conhecimentos teóricos e práticos, preparando os estudantes para
                compreender e atuar nos diversos contextos da tecnologia da
                informação.
              </p>
              <p>
                Com duração de 4 anos (8 semestres) e aulas no período matutino,
                o curso foi estruturado para atender às diretrizes curriculares
                nacionais e às demandas da sociedade contemporânea, considerando
                os aspectos éticos, sociais e ambientais relacionados à
                tecnologia.
              </p>
              <p>
                A formação acadêmica busca o equilíbrio entre fundamentos
                teóricos e aplicações práticas, incentivando a participação dos
                estudantes em atividades de pesquisa, extensão e inovação,
                elementos essenciais para uma formação integral.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Estudantes em atividade acadêmica"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">
                  Estudantes em atividade acadêmica
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif text-zinc-900 mb-6">
              Abordagem Acadêmica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-zinc-200">
                <h3 className="text-xl font-medium text-zinc-900 mb-4">
                  Fundamentos Científicos
                </h3>
                <p className="text-zinc-600 mb-4">
                  O curso fundamenta-se em princípios científicos sólidos,
                  abordando teorias, metodologias e paradigmas que constituem a
                  base do conhecimento em Sistemas de Informação. Esta abordagem
                  proporciona aos estudantes uma compreensão profunda dos
                  conceitos fundamentais da área.
                </p>
                <p className="text-zinc-600">
                  A formação científica é complementada por atividades de
                  iniciação à pesquisa, que estimulam o pensamento crítico e a
                  capacidade de investigação, preparando os estudantes para
                  contribuir com o avanço do conhecimento em sua área.
                </p>
              </Card>
              <Card className="p-6 border-zinc-200">
                <h3 className="text-xl font-medium text-zinc-900 mb-4">
                  Perspectiva Humanística
                </h3>
                <p className="text-zinc-600 mb-4">
                  O curso adota uma perspectiva humanística, considerando os
                  impactos sociais, éticos e culturais da tecnologia. Os
                  estudantes são incentivados a refletir sobre o papel da
                  tecnologia na sociedade e a desenvolver soluções que
                  contribuam para o bem-estar coletivo.
                </p>
                <p className="text-zinc-600">
                  Esta abordagem integra conhecimentos de diferentes áreas, como
                  filosofia, sociologia e ética, proporcionando uma formação
                  ampla que vai além dos aspectos técnicos e prepara os
                  estudantes para atuar de forma responsável e consciente.
                </p>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif text-zinc-900 mb-6">
              Integração Acadêmica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-zinc-200">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Pesquisa
                </h3>
                <p className="text-zinc-600 text-sm">
                  Os estudantes têm a oportunidade de participar de projetos de
                  iniciação científica, grupos de pesquisa e eventos acadêmicos,
                  contribuindo para a produção de conhecimento na área.
                </p>
              </Card>
              <Card className="p-6 border-zinc-200">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Extensão
                </h3>
                <p className="text-zinc-600 text-sm">
                  Atividades de extensão promovem a interação entre a academia e
                  a comunidade, permitindo a aplicação do conhecimento em
                  contextos reais e o desenvolvimento de habilidades sociais.
                </p>
              </Card>
              <Card className="p-6 border-zinc-200">
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  Eventos Acadêmicos
                </h3>
                <p className="text-zinc-600 text-sm">
                  Seminários, workshops e semanas temáticas complementam a
                  formação, proporcionando contato com diferentes perspectivas e
                  promovendo o debate sobre temas relevantes.
                </p>
              </Card>
            </div>
          </div>

          <div className="prose prose-zinc max-w-none">
            <h2 className="text-2xl font-serif text-zinc-900 mb-4">
              Comunidade Acadêmica
            </h2>
            <p>
              O curso de Sistemas de Informação do IFSP constitui uma comunidade
              acadêmica diversa e colaborativa, formada por estudantes,
              professores e técnicos-administrativos. Esta comunidade
              compartilha o compromisso com a educação pública de qualidade e
              com os valores institucionais.
            </p>
            <p>
              Os estudantes são incentivados a participar ativamente da vida
              acadêmica, por meio de representações estudantis, como o Centro
              Acadêmico, e de iniciativas que promovem o desenvolvimento
              coletivo e a troca de experiências.
            </p>
            <p>
              O ambiente acadêmico favorece o diálogo, o respeito à diversidade
              e a construção coletiva do conhecimento, elementos essenciais para
              uma formação integral e para o desenvolvimento de profissionais
              conscientes de seu papel na sociedade.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
