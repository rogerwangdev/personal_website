import Experience from "@/components/Experience";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Experience · Roger Wang",
  description:
    "Software engineering roles: NVIDIA, General Motors Canada, McMaster TA.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked."
        description="Five years across virtualization, cloud infra, observability, and embedded systems."
      />
      <Experience />
    </>
  );
}
