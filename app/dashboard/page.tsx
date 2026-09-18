import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Dashboard</p>
        <h1 className="text-3xl font-semibold text-slate-950">Performance snapshot</h1>
        <p className="max-w-2xl text-slate-600">This route is a placeholder for the main product dashboard and will expand into charts, KPIs, and live data cards.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Reach", "128k"],
          ["CTR", "4.8%"],
          ["Conversions", "842"],
          ["ROAS", "5.2x"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-700">
        <p className="font-semibold text-slate-900">Placeholder chart area</p>
        <p className="mt-2">This view can later host trend graphs, campaign health, and recommended next actions.</p>
        <Link href="/reports" className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Open reports route
        </Link>
      </section>
    </main>
  );
}
