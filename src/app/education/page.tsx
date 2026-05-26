import Education from "@/components/Education";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Education · Roger Wang",
  description:
    "MS Computer Science at Columbia University. BEng Mechatronics Engineering at McMaster.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Where I learned."
        description="Hamilton, Ontario for engineering. Now Manhattan for grad school."
      />
      <Education />
    </>
  );
}
