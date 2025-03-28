import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink, Users } from "lucide-react";

export interface ProfessorProps {
  nome: string;
  area: string;
  formacao: string;
  lattes: string;
  foto: string;
  grupos: string[];
}

export function ProfessorCard({
  nome,
  area,
  formacao,
  lattes,
  foto,
  grupos,
}: ProfessorProps) {
  return (
    <Card className="overflow-hidden border-zinc-200">
      <div className="relative h-64">
        <Image
          src={foto || "/placeholder.svg"}
          alt={nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-zinc-900 mb-2">{nome}</h3>
        <p className="text-purple-700 font-medium mb-2">{area}</p>
        <p className="text-zinc-600 text-sm mb-4">{formacao}</p>
        <div className="flex items-center gap-2 text-sm text-zinc-600 mb-4">
          <span>Grupos de Pesquisa: {grupos.join(", ")}</span>
        </div>
        <a
          href={lattes}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-800 text-sm font-medium inline-flex items-center gap-1"
        >
          Currículo Lattes <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </Card>
  );
}
