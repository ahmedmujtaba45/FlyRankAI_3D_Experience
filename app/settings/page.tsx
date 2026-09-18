export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Workspace preferences</h1>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          ["Project identity", "Brand, team sync, and default objective"],
          ["Notifications", "Alerts, reminders, deployment events"],
          ["Integrations", "Connected channels and auth state"],
          ["Regions", "Geo-restricted access and data residency"],
        ].map(([title, description]) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
