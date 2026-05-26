import About from "@/components/About";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About · Roger Wang",
  description:
    "About Roger Wang. Moved to Canada, McMaster Mechatronics, three years at GM, now finishing an MS at Columbia and heading to NVIDIA.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A bit about me."
        description="Software engineer, Canadian trained, NYC based. Somewhere between systems and ML."
      />
      <About />
    </>
  );
}
