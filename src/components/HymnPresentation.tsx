import { useIsMobile } from '@/hooks/use-mobile'
import { Hymn } from '@/lib/hymns-data'
import { cn } from '@/lib/utils'
import { useNavigate } from '@tanstack/react-router'
import { Minimize } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HymnPresentationProps {
  hymn: Hymn
  onClose: () => void
}

const FONT_SIZE = 40

export function HymnPresentation({ hymn, onClose }: HymnPresentationProps) {
  const [page, setPage] = useState(0)
  const hymnSize = hymn.presentationOrder?.length ?? 0

  useEffect(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    }
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
  }, [])

  const handleClosePresentation = () => {
    window.location.replace(window.location.origin + window.location.pathname)
    onClose()
  }

  const getPresentationOrder = (selectedPage) => {
    if (!hymn.presentationOrder) return 0
    return hymn.presentationOrder[selectedPage]
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPage((prev) => (prev > 0 ? prev - 1 : prev))
      } else if (e.key === 'ArrowRight') {
        setPage((prev) => (prev < hymnSize - 1 ? prev + 1 : prev))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hymnSize])

  useEffect(() => {
    const handleFullscreen = () => {
      if (!document.fullscreenElement) {
        handleClosePresentation()
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreen)
    return () => document.removeEventListener('keydown', handleFullscreen)
  }, [])

  const estrofe = hymn.estrofes[getPresentationOrder(page)]

  return (
    <div className="grow flex h-full w-full flex-col rounded-lg border bg-hymn-card text-card-foreground shadow-sm border-border/50 py-6 px-2">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="select-none flex min-h-10 min-w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-md">
          {hymn.numero}
        </div>
        <h3 className="text-xl text-center font-semibold leading-none tracking-tight text-primary">
          {hymn.titulo}
        </h3>
        <button
          onClick={handleClosePresentation}
          className="mr-4 cursor-pointer inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Minimize className="h-4 w-4" />
        </button>
      </div>

      <div
        className="hymn-content flex flex-1 items-center justify-center text-center"
        style={{ fontSize: `${FONT_SIZE}px` }}
      >
        <div className="flex flex-col space-y-6 mx-auto px-6">
          <div className="text-hymn-text leading-relaxed whitespace-pre-line">
            {estrofe.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className={cn('verse-line', {
                  italic: line.italico,
                })}
              >
                {line.texto}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
