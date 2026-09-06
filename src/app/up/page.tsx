import Reveal from "@/components/common/Reveal";

export const dynamic = "force-static";

export default function UpPage() {
  return (
    <div>
      <section className="flex min-h-screen flex-col justify-center px-5 py-24 relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto w-full max-w-5xl">
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary">
              System Status
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"
          >
            Application Up
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            Everything is running normally. All systems are operational.
          </Reveal>

          <Reveal>
            <div className="mt-10 rounded-xl border border-border bg-surface-2 p-5 text-left">
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-8">
                  <dt className="text-neutral-500">Status</dt>
                  <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                    UP
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-8">
                  <dt className="text-neutral-500">Environment</dt>
                  <dd className="font-medium text-neutral-600 dark:text-neutral-400">
                    {process.env.NODE_ENV}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-8">
                  <dt className="text-neutral-500">Timestamp</dt>
                  <dd className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {new Date().toISOString()}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
