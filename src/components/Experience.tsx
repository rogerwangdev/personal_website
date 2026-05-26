import Reveal from "./Reveal";

type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "NVIDIA Corporation",
    title: "Software Engineer Intern, Simulation and Virtualization",
    location: "Santa Clara, CA",
    dates: "May 2026 to Aug 2026 (Incoming)",
    bullets: [
      "Joining the Simulation and Virtualization team to contribute to GPU virtualization and pre-silicon simulation tooling used to model and validate next-generation NVIDIA hardware and software stacks.",
      "Will develop and automate simulation, testing, and validation workflows in C++/Python to support cross-component verification across GPU virtualization platforms.",
    ],
  },
  {
    company: "General Motors Canada, Virtualization Platform and Automation",
    title: "Software Developer, Co-simulation and Cloud Infrastructure",
    location: "Markham, ON",
    dates: "Jul 2024 to Jul 2025",
    bullets: [
      "Built and optimized CI/CD pipelines with Jenkins, GitHub Actions, and JFrog Artifactory to automate build, packaging, and release of virtual ECU artifacts. Integrated unit and system level regression testing to improve release efficiency by ~20%.",
      "Developed and automated co-simulation workflows using VEOS, VDK, AUTOVAL, and virtual ECU platforms to orchestrate signal-level simulation, validation, and system-level testing across distributed components.",
    ],
  },
  {
    company: "General Motors Canada, CTC TRACK Program",
    title: "Controls and Software Developer",
    location: "Markham, ON",
    dates: "Jul 2022 to Jul 2024",
    bullets: [
      "Built observability dashboards in Grafana using Azure Data Explorer (ADX), KQL, and Prometheus, monitoring 50+ backend microservices and tracking real-time SLIs, SLOs, and SLAs.",
      "Built a Golang microservice on Azure with ETL pipelines in Databricks and Grafana, enabling root cause analysis on performance and reliability issues at scale.",
      "Profiled ECU software performance with QNX Momentics and TraceLogger to identify scheduling, memory, and runtime optimization opportunities.",
      "Redesigned diagnostics middleware in C++ using SOLID principles on Linux, reducing CPU overhead by ~15%.",
      "Developed a Python diagnostics automation framework with PyTest and Pandas, reducing manual OBD evaluation effort by ~30%.",
    ],
  },
  {
    company: "McMaster University",
    title: "Teaching Assistant, Operating Systems (SFWRENG 3SH3)",
    location: "Hamilton, ON",
    dates: "Jan 2022 to May 2022",
    bullets: [
      "Led labs and office hours for C/C++ and operating systems, guiding students through debugging and structured problem-solving.",
    ],
  },
  {
    company: "General Motors Canada",
    title: "Embedded Control Design Co-op, Brake Diagnostics",
    location: "Markham, ON",
    dates: "Sep 2020 to Aug 2021",
    bullets: [
      "Developed brake diagnostics algorithms in MATLAB/Simulink and executed SIL/MIL simulations for model verification.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <ol className="relative space-y-12 border-l border-(--border) pl-6 sm:pl-10">
        {roles.map((role, i) => (
          <Reveal key={`${role.company}-${role.dates}`} delay={Math.min(i * 0.05, 0.2)}>
            <li className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-(--accent) bg-(--background) sm:-left-[47px]"
              />
              <div className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-6">
                <div className="text-sm text-(--muted)">
                  <div className="font-mono">{role.dates}</div>
                  <div className="mt-1">{role.location}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-(--foreground)">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-(--accent)">{role.company}</p>
                  <ul className="mt-3 space-y-2 text-(--muted)">
                    {role.bullets.map((b, k) => (
                      <li key={k} className="leading-7">
                        <span className="mr-2 text-(--accent)">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
