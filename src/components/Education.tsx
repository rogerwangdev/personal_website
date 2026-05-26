import { asset } from "@/lib/links";
import Reveal from "./Reveal";

type School = {
  name: string;
  degree: string;
  location: string;
  dates: string;
  detail: string;
};

const schools: School[] = [
  {
    name: "Columbia University",
    degree: "MS in Computer Science",
    location: "New York, NY",
    dates: "Expected Dec 2026",
    detail:
      "Coursework: Machine Learning · NLP · Algorithms · Applied Deep Learning · Interface Design.",
  },
  {
    name: "McMaster University",
    degree: "BEng in Mechatronics Engineering (Co-op)",
    location: "Hamilton, ON",
    dates: "May 2022",
    detail:
      "GPA 10.8 / 12.0 · Dean's List Scholarship (2017 to 2022).",
  },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <figure className="mb-12 overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-2xl">
          <div className="grid items-center gap-0 md:grid-cols-[1fr_1.2fr]">
            <img
              src={asset("/images/graduation.webp")}
              alt="Roger at McMaster's Iron Ring monument"
              width={1200}
              height={1600}
              className="h-full max-h-[480px] w-full object-cover"
            />
            <figcaption className="p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-wider text-(--accent)">
                The Iron Ring
              </p>
              <p className="mt-3 text-lg leading-8 text-(--muted)">
                A Canadian tradition since 1925. Every newly minted engineer
                receives one as a reminder of the obligation that comes with
                the work. I got mine at{" "}
                <span className="text-(--foreground)">McMaster</span> in the
                spring of 2022, after five years of co-op terms and a degree
                in Mechatronics Engineering.
              </p>
            </figcaption>
          </div>
        </figure>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {schools.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <article className="h-full rounded-xl border border-(--border) bg-(--card) p-6 transition-all hover:-translate-y-1 hover:border-(--accent)">
              <h2 className="text-xl font-semibold text-(--foreground)">{s.name}</h2>
              <p className="mt-1 text-(--accent)">{s.degree}</p>
              <p className="mt-3 font-mono text-sm text-(--muted)">
                {s.dates} · {s.location}
              </p>
              <p className="mt-3 leading-7 text-(--muted)">{s.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
