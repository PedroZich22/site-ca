import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export interface ProjectProps {
  titulo: string;
  alunos: string[];
  orientador: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  github: string;
  ano: string;
}

export function ProjectCard({
  titulo,
  alunos,
  orientador,
  descricao,
  tecnologias,
  imagem,
  github,
  ano,
}: ProjectProps) {
  return (
    <Card className="overflow-hidden border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-64 md:h-auto">
          <Image
            src={imagem || "/placeholder.svg"}
            alt={titulo}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-zinc-500">{ano}</span>
            <span>•</span>
            <span className="text-purple-700 text-sm font-medium">
              Projeto de Conclusão
            </span>
          </div>
          <h3 className="text-2xl font-medium text-zinc-900 mb-3">{titulo}</h3>
          <p className="text-zinc-600 mb-4">{descricao}</p>
          <div className="mb-4">
            <p className="text-sm font-medium text-zinc-900 mb-1">Alunos:</p>
            <p className="text-sm text-zinc-600">{alunos.join(", ")}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-zinc-900 mb-1">
              Orientador:
            </p>
            <p className="text-sm text-zinc-600">{orientador}</p>
          </div>
          <div className="mb-6">
            <p className="text-sm font-medium text-zinc-900 mb-2">
              Tecnologias:
            </p>
            <div className="flex flex-wrap gap-2">
              {tecnologias.map((tech, i) => (
                <Badge key={i} variant="outline" className="bg-purple-50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-800 font-medium inline-flex items-center gap-1"
          >
            <Github className="w-4 h-4" /> Ver no GitHub{" "}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </Card>
  );
}
