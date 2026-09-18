async function getHealthData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Health probe failed");
  }

  return response.json();
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">Health</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Live app health check</h1>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <article>
            <p className="text-sm text-slate-500">Fetched data</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">{data.title}</p>
          </article>
          <article>
            <p className="text-sm text-slate-500">Status</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-600">{data.completed ? "Healthy" : "Pending"}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
