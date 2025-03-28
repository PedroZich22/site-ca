import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export interface EventProps {
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  categoria: string;
}

export function EventCard({
  titulo,
  data,
  local,
  descricao,
  categoria,
}: EventProps) {
  return (
    <Card className="overflow-hidden border-zinc-200">
      <div className="p-6">
        <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {categoria}
        </div>
        <h3 className="text-xl font-medium text-zinc-900 mb-4">{titulo}</h3>
        <div className="space-y-3 text-zinc-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{data}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{local}</span>
          </div>
        </div>
        <p className="mt-4 text-zinc-600">{descricao}</p>
      </div>
    </Card>
  );
}
