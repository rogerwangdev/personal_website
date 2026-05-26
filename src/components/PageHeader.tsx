import Reveal from "./Reveal";

type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function PageHeader({ title, eyebrow, description }: Props) {
  return (
    <header className="relative border-b border-(--border)">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_20%_0%,color-mix(in_oklch,var(--accent)_14%,transparent)_0%,transparent_70%)]"
      />
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Reveal mode="mount">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-(--accent)">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
