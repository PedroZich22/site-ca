import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

export interface AchievementProps {
  titulo: string;
  alunos: string[];
  descricao: string;
  data: string;
  categoria: string;
  orientador?: string;
}

export function AchievementCard({
  titulo,
  alunos,
  descricao,
  data,
  categoria,
  orientador,
}: AchievementProps) {
  return (
    <Card className="p-6 border-zinc-200">
      <div className="flex items-start gap-4">
        <div className="text-purple-700 mt-1">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 hover:bg-purple-100"
            >
              {categoria}
            </Badge>
            <div className="flex items-center text-sm text-zinc-500">
              <Calendar className="w-3 h-3 mr-1" />
              {data}
            </div>
          </div>
          <h3 className="text-xl font-medium text-zinc-900 mb-2">{titulo}</h3>
          <p className="text-zinc-600 mb-4">{descricao}</p>
          <div>
            <p className="text-sm font-medium text-zinc-900 mb-1">Alunos:</p>
            <p className="text-sm text-zinc-600">{alunos.join(", ")}</p>
          </div>
          {orientador && (
            <div className="mt-2">
              <p className="text-sm font-medium text-zinc-900 mb-1">
                Orientador:
              </p>
              <p className="text-sm text-zinc-600">{orientador}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
