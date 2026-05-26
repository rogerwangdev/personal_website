import HeroV2 from "@/components/home/HeroV2";
import { EMAIL } from "@/lib/links";

export default function Home() {
  return (
    <>
      <HeroV2 />
      <section className="border-t border-(--border)">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
          <p className="text-lg text-(--muted)">
            Got something to build, or just want to say hi?
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-11 items-center justify-center rounded-md border border-(--border) bg-(--card) px-6 text-sm font-medium text-(--foreground) transition-all hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
          >
            {EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
