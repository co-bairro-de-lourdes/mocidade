import { useState, useMemo, useRef, useEffect } from "react"
import { hymnsData, Hymn } from "@/lib/hymns-data"
import { HymnCard } from "@/components/HymnCard"
import { HymnViewer } from "@/components/HymnViewer"
import { SearchInput } from "@/components/SearchInput"
import { ThemeToggle } from "@/components/ThemeToggle"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Book, Music } from "lucide-react"

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null)
  const [lastSelectedId, setLastSelectedId] = useState<number | null>(null)
  const hymnRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const filteredHymns = useMemo(() => {
    if (!searchTerm) return hymnsData

    const term = searchTerm.toLowerCase()
    return hymnsData.filter(hymn => 
      hymn.titulo.toLowerCase().includes(term) ||
      hymn.numero.toString().includes(term) ||
      hymn.estrofes.some(estrofe => estrofe.some(line => line.texto.toLowerCase().includes(term)))
    )
  }, [searchTerm])

  useEffect(() => {
    if (selectedHymn) {
      window.scrollTo({ top: 0 })
    }
  }, [selectedHymn])

  useEffect(() => {
    if (!selectedHymn && lastSelectedId !== null) {
      const ref = hymnRefs.current[lastSelectedId]
      if (ref) {
        ref.scrollIntoView({ block: "center" })
      }
    }
  }, [selectedHymn, lastSelectedId])

  if (selectedHymn) {
    return (
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen bg-hymn-bg theme-transition">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <HymnViewer 
              hymn={selectedHymn} 
              onBack={() => setSelectedHymn(null)} 
            />
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="light">
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
              {filteredHymns.length} {filteredHymns.length === 1 ? 'hino encontrado' : 'hinos encontrados'}
            </p>
          </div>

          {/* Hymns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHymns.map((hymn) => (
              <div
                key={hymn.id}
                className="animate-slide-up"
                ref={el => hymnRefs.current[hymn.id] = el}
              >
                <HymnCard
                  hymn={hymn}
                  onClick={() => {
                    setSelectedHymn(hymn)
                    setLastSelectedId(hymn.id)
                  }}
                  searchTerm={searchTerm}
                />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredHymns.length === 0 && (
            <div className="text-center py-12">
              <Book className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum hino encontrado</h3>
              <p className="text-muted-foreground">
                Tente buscar com outros termos ou verifique a ortografia.
              </p>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Index;
