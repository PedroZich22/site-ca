import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Users } from "lucide-react";
import Link from "next/link";

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
      <h2 className="text-3xl font-serif text-zinc-900 mb-12 text-center">
        Sobre
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {links.map((item, index) => (
          <Link href={item.link} key={index}>
            <Card className="p-6 h-full hover:bg-zinc-50 transition-colors border-zinc-200">
              <div className="text-purple-700 mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600">{item.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
