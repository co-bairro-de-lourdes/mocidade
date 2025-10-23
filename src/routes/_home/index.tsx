import { HymnCard } from "@/components/HymnCard";
import { SearchInput } from "@/components/SearchInput";
import { ThemeToggle } from "@/components/ThemeToggle";
import { hymnsData } from "@/lib/hymns-data";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Book, Music } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/_home/")({
  component: Home,
});

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const hymnRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const navigate = useNavigate();

  const filteredHymns = useMemo(() => {
    if (!searchTerm) return hymnsData;

    const term = searchTerm.toLowerCase();
    return hymnsData.filter(
      (hymn) =>
        hymn.titulo.toLowerCase().includes(term) ||
        hymn.numero.toString().includes(term) ||
        hymn.estrofes.some((estrofe) =>
          estrofe.some((line) => line.texto.toLowerCase().includes(term)),
        ),
    );
  }, [searchTerm]);

  return (
    <div className="select-none min-h-screen bg-hymn-bg theme-transition">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Music className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Cânticos</h1>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar por título, número ou conteúdo..."
          />
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredHymns.length}{" "}
            {filteredHymns.length === 1
              ? "hino encontrado"
              : "hinos encontrados"}
          </p>
        </div>

        {/* Hymns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHymns.map((hymn) => (
            <div
              key={hymn.id}
              className="animate-slide-up"
              ref={(el) => (hymnRefs.current[hymn.id] = el)}
            >
              <HymnCard
                hymn={hymn}
                searchTerm={searchTerm}
                onClick={() => {
                  navigate({
                    to: "/hino/$id",
                    params: { id: hymn.numero.toString() },
                  });
                }}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredHymns.length === 0 && (
          <div className="text-center py-12">
            <Book className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nenhum hino encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente buscar com outros termos ou verifique a ortografia.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
