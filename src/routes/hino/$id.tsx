import { HymnViewer } from "@/components/HymnViewer";
import { hymnsData } from "@/lib/hymns-data";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/hino/$id")({
  component: HymnDetails,
  loader: ({ params: { id } }) => {
    const hymn = hymnsData.find((hymn) => hymn.numero === Number(id));
    if (!hymn) throw notFound();
    return { hymn };
  },
});

function HymnDetails() {
  const { hymn } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-hymn-bg theme-transition">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <HymnViewer hymn={hymn} />
      </div>
    </div>
  );
}
