import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { STATS } from "@/data/site";

export function Stats() {
  return (
    <section className="relative border-y border-[var(--border)] bg-white/[0.015] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-6 md:gap-10">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
