import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const projects = [
    {
      name: "Webvium Browser",
      description:
        "The flagship Android browser focused on speed, privacy and customization.",
      status: "Active",
    },
    {
      name: "Web App",
      description: "Convert websites into lightweight Android applications.",
      status: "Active",
    },
    {
      name: "Webvium Launcher",
      description: "A modern Android launcher currently under development.",
      status: "Coming Soon",
    },
    {
      name: "Webvium VPN",
      description: "Archived project.",
      status: "Deprecated",
    },
    {
      name: "Webvium Search",
      description: "Archived project.",
      status: "Deprecated",
    },
  ];

  const extensions = [
    "Disable Control Shift C",
    "Floating Console",
    "Browser Storage Inspector",
    "Webvium Ad Blocker",
    "Awesome New Tab",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.25),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="mt-8 text-5xl font-bold md:text-8xl">
            Lightweight
            <br />
            Software
            <br />
            Built For Speed
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-zinc-400">
            From Android browsers and website-to-app conversion tools to browser
            extensions and future web technologies, Webvium is an ecosystem
            focused on performance, privacy, and simplicity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/downloads"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 hover:bg-blue-700 text-white"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Now
            </a>

            <a
              href="#products"
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-4 hover:border-zinc-500"
            >
              Explore Products
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="border-y border-zinc-800 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold">8+</h3>
            <p className="text-zinc-400">Years Development</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-zinc-400">Independent</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5</h3>
            <p className="text-zinc-400">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">∞</h3>
            <p className="text-zinc-400">Ideas</p>
          </div>
        </div>
      </section>

      {/* Browser Features */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Built Into The Browser</h2>

            <p className="mt-4 text-zinc-400">
              Powerful tools integrated directly into Webvium.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="mt-3 text-zinc-400">
                Lightweight architecture designed for speed.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Privacy</h3>
              <p className="mt-3 text-zinc-400">
                User control and privacy-first browsing.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Customization</h3>
              <p className="mt-3 text-zinc-400">
                Personalize the browser to your workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Native Tools</h3>
              <p className="mt-3 text-zinc-400">
                Many features are built directly into the browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-zinc-800 py-24" id="products">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            The Webvium Ecosystem
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-zinc-800 p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.name}</h3>

                  <span className="text-sm text-zinc-400">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 text-zinc-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions */}

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">Browser Extensions</h2>

          <p className="mt-4 text-center text-zinc-400">
            Upcoming utilities for desktop browsers.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {extensions.map((extension) => (
              <div
                key={extension}
                className="rounded-2xl border border-zinc-800 p-6"
              >
                <h3 className="text-xl font-semibold">{extension}</h3>

                <p className="mt-3 text-zinc-400">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}

      <section className="border-t border-zinc-800 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Development Journey
          </h2>

          <div className="mt-16 space-y-8">
            <div className="flex gap-6">
              <div className="font-bold text-blue-400">2018</div>
              <div>Webvium Browser development begins.</div>
            </div>

            <div className="flex gap-6">
              <div className="font-bold text-blue-400">2023</div>
              <div>Web App launches.</div>
            </div>

            <div className="flex gap-6">
              <div className="font-bold text-blue-400">2025</div>
              <div>Extension ecosystem announced.</div>
            </div>

            <div className="flex gap-6">
              <div className="font-bold text-blue-400">2026</div>
              <div>Webvium Launcher announced.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">Start Browsing With Webvium</h2>

          <p className="mt-6 text-xl text-zinc-400">
            Download the latest version and experience a lightweight Android
            browser designed for speed.
          </p>

          <a
            href="/downloads"
            className="mt-10 inline-flex rounded-xl bg-blue-600 text-white px-8 py-4"
          >
            Download Now
          </a>
        </div>
      </section>
    </div>
  );
}
