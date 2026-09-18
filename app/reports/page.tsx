export default function ReportsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">Reports</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Exportable delivery insights</h1>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Weekly narrative</h2>
          <p className="mt-3 text-slate-600">Summary notes, spend pacing, audience quality, and content visibility are placed here as future sections.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Recent exports</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Performance CSV</li>
            <li>• Audience snapshot</li>
            <li>• Channel spend summary</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
