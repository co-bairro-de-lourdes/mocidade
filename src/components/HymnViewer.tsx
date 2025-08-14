import { useState } from "react"
import { Hymn } from "@/lib/hymns-data"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface HymnViewerProps {
  hymn: Hymn
  onBack: () => void
}

export function HymnViewer({ hymn, onBack }: HymnViewerProps) {
  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 28))
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12))
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Fonte:</span>
          <button 
            onClick={decreaseFontSize}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium w-8 text-center">{fontSize}</span>
          <button 
            onClick={increaseFontSize}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-lg border bg-hymn-card text-card-foreground shadow-sm border-border/50">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-6">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
              {hymn.numero}
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight text-primary">{hymn.titulo}</h3>
            <div/>
          </div>
        </div>
        
        <div className="p-6 pt-0 hymn-content text-center" style={{ fontSize: `${fontSize}px` }}>
          <div className="space-y-6 max-w-2xl mx-auto">
            {hymn.estrofes.map((estrofe, index) => (
              <div key={index} className="verse">
                <div className="text-hymn-text leading-relaxed whitespace-pre-line">
                  {estrofe.map((line, lineIndex) => (
                    <div key={lineIndex} className={cn("verse-line", { "italic": line.italico })}>
                      {line.texto}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}