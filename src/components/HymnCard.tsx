import { Hymn } from '@/lib/hymns-data'

interface HymnCardProps {
  hymn: Hymn
  onClick: () => void
  searchTerm?: string
}

export function HymnCard({ hymn, onClick, searchTerm }: HymnCardProps) {
  const highlightText = (text: string, search: string) => {
    if (!search) return text

    const parts = text.split(new RegExp(`(${search})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  const firstVerse = hymn.estrofes
    .flat()
    .map((line) => line.texto)
    .join('\n')

  return (
    <div
      className="rounded-lg border bg-hymn-card text-card-foreground shadow-sm hymn-card-hover cursor-pointer border-border/50"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-md">
            {hymn.numero}
          </div>
          <h3 className="text-lg font-semibold leading-tight tracking-tight">
            {searchTerm ? highlightText(hymn.titulo, searchTerm) : hymn.titulo}
          </h3>
        </div>
      </div>
      <div className="p-6 pt-0 max-h-24">
        <p className="text-sm text-hymn-text/80 leading-relaxed line-clamp-3">
          {searchTerm ? highlightText(firstVerse, searchTerm) : firstVerse}
        </p>
      </div>
    </div>
  )
}
