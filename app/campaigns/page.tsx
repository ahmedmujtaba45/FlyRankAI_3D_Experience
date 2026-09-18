export default function CampaignsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Campaigns</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Active launch queue</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          "Summer growth push",
          "Creator brand refresh",
          "Retention nurture",
        ].map((campaign) => (
          <article key={campaign} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Campaign</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">{campaign}</h2>
            <p className="mt-2 text-sm text-slate-600">Placement, asset notes, and execution checkpoints live here once the real domain model is connected.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
