import { PageHeader } from "@/components/ui/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { IntroText } from "@/components/ui/intro-text";
import { EventCard, type EventProps } from "@/components/shared/event-card";

const eventos: EventProps[] = [
  {
    titulo: "Semana da Computação 2024",
    data: "15-19 de Abril, 2024",
    local: "Auditório Principal - IFSP",
    descricao:
      "Palestras, workshops e hackathon com profissionais da área de tecnologia.",
    categoria: "Acadêmico",
  },
  {
    titulo: "Workshop: Desenvolvimento Web Moderno",
    data: "25 de Março, 2024",
    local: "Laboratório 3 - IFSP",
    descricao:
      "Introdução às tecnologias mais recentes de desenvolvimento web.",
    categoria: "Workshop",
  },
  {
    titulo: "Meetup: Inteligência Artificial",
    data: "10 de Abril, 2024",
    local: "Sala 204 - IFSP",
    descricao:
      "Discussão sobre as últimas tendências em IA e machine learning.",
    categoria: "Meetup",
  },
];

export default function EventosPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <ContentSection>
          <PageHeader
            title="Eventos"
            subtitle="Atividades acadêmicas e profissionais organizadas pelo Centro Acadêmico"
          />

          <IntroText>
            <p>
              Confira os próximos eventos organizados pelo Centro Acadêmico e
              participe das atividades acadêmicas e profissionais que
              complementam sua formação universitária.
            </p>
          </IntroText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, index) => (
              <EventCard key={index} {...evento} />
            ))}
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
