import { asset, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/links";
import Reveal from "../Reveal";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_20%_0%,color-mix(in_oklch,var(--accent)_22%,transparent)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.15] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <Reveal mode="mount" delay={0.05}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-(--muted)">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-(--accent)" />
              Based in NYC · open to chats
            </p>
          </Reveal>

          <Reveal mode="mount" delay={0.15}>
            <h1 className="text-5xl font-semibold tracking-tight text-(--foreground) sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-(--accent)">Roger</span>.
            </h1>
          </Reveal>

          <Reveal mode="mount" delay={0.25}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              Software engineer who likes building reliable systems. Cloud
              infrastructure, virtualization, and the occasional ML side
              project. Incoming SWE Intern at NVIDIA.
            </p>
          </Reveal>

          <Reveal mode="mount" delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center rounded-md bg-(--foreground) px-5 text-sm font-medium text-(--background) transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--accent)/20"
              >
                <DocumentIcon />
                <span className="ml-2">Resume</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-(--border) px-5 text-sm font-medium text-(--foreground) transition-all hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
              >
                <GitHubIcon />
                <span className="ml-2">GitHub</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-(--border) px-5 text-sm font-medium text-(--foreground) transition-all hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
              >
                <LinkedInIcon />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal mode="mount" delay={0.2}>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-full bg-(--accent)/20 blur-3xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-2xl">
              <img
                src={asset("/images/headshot.webp")}
                alt="Roger Wang"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.73V1.73C24 .77 23.21 0 22.22 0Z" />
    </svg>
  );
}
