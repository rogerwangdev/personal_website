import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills · Roger Wang",
  description:
    "Languages, frameworks, and tools I work with regularly.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The stack."
        description="Things I reach for. Not exhaustive. Just what I actually use."
      />
      <Skills />
    </>
  );
}
