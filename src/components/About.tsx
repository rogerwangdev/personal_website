import { asset } from "@/lib/links";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-8 text-(--muted)">
            <p>Hey, I&apos;m Roger.</p>

            <p>
              I grew up in Scarborough and finished high school at{" "}
              <span className="text-(--foreground)">
                Blessed Cardinal Newman
              </span>
              , then moved to Hamilton for Mechatronics Engineering at McMaster.
              Five years, a stack of co-op terms, and an{" "}
              <span className="text-(--foreground)">Iron Ring</span> later, I
              graduated.
            </p>

            <p>
              Right after undergrad I joined General Motors Canada through their{" "}
              <span className="text-(--foreground)">TRACK program</span>. It&apos;s
              a rotation gig, so I cycled through four different teams over two
              years before landing at my final placement. Got to touch
              diagnostics, observability, virtualization, the kind of work that
              teaches you how messy real systems actually are.
            </p>

            <p>
              After that I came down to NYC for grad school. I&apos;m finishing
              my MS in Computer Science at{" "}
              <span className="text-(--foreground)">Columbia</span>{" "}
              now, and this summer I&apos;m joining{" "}
              <span className="text-(--foreground)">NVIDIA</span>{" "}
              on the Simulation and Virtualization team.
            </p>

            <p>
              What I actually enjoy: systems that don&apos;t break under load,
              infra you can reason about, and ML problems where the hard part is
              the data and the deployment, not the model. Lately I&apos;ve been
              working on a research project that detects scam calls using a mix
              of speech recognition, acoustic features, and carrier attestation
              signals.
            </p>

            <p>
              Off the laptop:{" "}
              <span className="text-(--foreground)">basketball</span>,{" "}
              <span className="text-(--foreground)">badminton</span>, and{" "}
              <span className="text-(--foreground)">snowboarding</span>. I picked
              up snowboarding in 2023 and have been pretty obsessed with it
              since. Trying to get out west at least once a winter.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-xl lg:sticky lg:top-24">
            <img
              src={asset("/images/casual.webp")}
              alt="Roger on a trip"
              width={787}
              height={1400}
              className="h-auto w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </div>
  );
}
