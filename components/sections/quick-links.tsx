import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

const links = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Sobre a Instituição e Curso",
    description:
      "Conheça a instituição IFSP e o curso de Sistemas de Informação.",
    link: "/sobre-instituicao",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Sobre o CA",
    description: "Conheça o Centro Acadêmico Tim Berners-Lee.",
    link: "/sobre-ca",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Eventos",
    description: "Confira os próximos eventos do CA e da instituição.",
    link: "/eventos",
  },
];

export function QuickLinks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Conheça Mais"
          description="Explore informações sobre a instituição, o centro acadêmico e os eventos que promovemos."
          centered={true}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((item, index) => (
            <Card key={index} className="border-zinc-200 overflow-hidden">
              <div className="p-6">
                <div className="text-purple-700 mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="text-purple-700 hover:text-purple-800 font-medium"
                >
                  Saiba mais →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
