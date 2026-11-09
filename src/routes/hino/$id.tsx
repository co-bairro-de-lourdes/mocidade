import { HymnViewer } from '@/components/HymnViewer'
import { hymnsData } from '@/lib/hymns-data'
import { createFileRoute, notFound, stripSearchParams } from '@tanstack/react-router'

export const Route = createFileRoute('/hino/$id')({
  component: HymnDetails,
  validateSearch: (search: Record<string, boolean | undefined>) => ({
    isPresenting: search.isPresenting,
  }),
  loaderDeps: ({ search }) => ({ isPresenting: search.isPresenting }),
  loader: ({ params: { id } }) => {
    const hymn = hymnsData.find((hymn) => hymn.numero === Number(id))
    if (!hymn) throw notFound()
    return { hymn }
  },
})

function HymnDetails() {
  const { hymn } = Route.useLoaderData()
  const { isPresenting } = Route.useSearch()
  return (
    <div className="min-h-screen bg-hymn-bg theme-transition">
      <HymnViewer hymn={hymn} isDefaultPresenting={isPresenting} />
    </div>
  )
}
