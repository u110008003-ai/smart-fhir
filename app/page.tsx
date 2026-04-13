import { SmartFhirLaunch } from "@/components/smart-fhir-launch";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)] px-6 py-8 text-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="rounded-[2.4rem] border border-[color:var(--color-line)] bg-[color:var(--color-panel-deep)] p-8 text-white shadow-[0_28px_90px_-50px_rgba(8,17,31,0.75)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
            SMART FHIR Launchpad
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
            A standalone SMART on FHIR app shell you can actually build on.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200">
            This app is no longer bundled inside the infection repurposing product. It stands on its
            own as a lightweight SMART launch, callback, and patient-context workspace.
          </p>
        </header>

        <SmartFhirLaunch />
      </div>
    </main>
  );
}
