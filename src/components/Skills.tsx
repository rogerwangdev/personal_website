import Reveal from "./Reveal";

const groups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: [
      "C",
      "C++",
      "Python",
      "Go",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
      "PowerShell",
      "Groovy",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "Flask",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Next.js",
      "React",
      "JUnit",
      "PyTest",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Gradle",
      "Maven",
      "Linux",
      "GDB",
      "Valgrind",
      "PostgreSQL",
      "GCP",
      "Azure",
      "Databricks",
      "Grafana",
      "MATLAB",
      "Jira",
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-12">
        {groups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.08}>
            <div>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-(--accent)">
                {g.label}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-(--border) bg-(--card) px-3.5 py-2 font-mono text-sm text-(--foreground) transition-all hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
