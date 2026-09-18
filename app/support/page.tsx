export default function SupportPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Support</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Action center</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Open tickets</h2>
          <p className="mt-2 text-sm text-slate-600">Escalation queue and triage notes appear here later.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Guides</h2>
          <p className="mt-2 text-sm text-slate-600">Usage, troubleshooting, and rollout handbooks can live here.</p>
        </article>
      </div>
    </main>
  );
}
