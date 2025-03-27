import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const eventos = [
  {
    titulo: "Semana da Computação 2024",
    data: "15-19 de Abril, 2024",
    local: "Auditório Principal - IFSP",
    descricao: "Palestras, workshops e hackathon com profissionais da área de tecnologia.",
    categoria: "Acadêmico"
  },
  {
    titulo: "Workshop: Desenvolvimento Web Moderno",
    data: "25 de Março, 2024",
    local: "Laboratório 3 - IFSP",
    descricao: "Introdução às tecnologias mais recentes de desenvolvimento web.",
    categoria: "Workshop"
  },
  {
    titulo: "Meetup: Inteligência Artificial",
    data: "10 de Abril, 2024",
    local: "Sala 204 - IFSP",
    descricao: "Discussão sobre as últimas tendências em IA e machine learning.",
    categoria: "Meetup"
  }
];

export default function EventosPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-medium text-zinc-900 mb-6">
          Eventos
        </h1>
        <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
          Confira os próximos eventos organizados pelo Centro Acadêmico e participe das atividades acadêmicas e profissionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <Card key={index} className="overflow-hidden border-zinc-200">
              <div className="p-6">
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {evento.categoria}
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-4">{evento.titulo}</h3>
                <div className="space-y-3 text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{evento.data}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{evento.local}</span>
                  </div>
                </div>
                <p className="mt-4 text-zinc-600">{evento.descricao}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}