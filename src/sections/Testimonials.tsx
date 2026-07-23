import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Turned ambiguous requirements into a working feature faster than the rest of the team expected — and the code held up.",
    name: "Engineering Mentor",
    role: "Àkanní",
  },
  {
    quote:
      "Genuinely thinks about architecture before writing code. The dependency-graph work on Aegis was sharper than most senior engineers' first pass.",
    name: "Project Collaborator",
    role: "Aegis",
  },
  {
    quote:
      "Cares about the details a user never sees but always feels — loading states, empty states, and error copy included.",
    name: "Design Partner",
    role: "SkillIssue AI",
  },
  {
    quote:
      "Picks up new tools fast and ships. Consistently the person who unblocks everyone else on the frontend.",
    name: "Team Lead",
    role: "Àkanní",
  },
];

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="flex w-max gap-5" style={{
      animation: `${reverse ? "marquee-reverse" : "marquee"} 40s linear infinite`,
    }}>
      {items.map((t, i) => (
        <div
          key={i}
          className="glass w-[340px] shrink-0 rounded-2xl p-6 sm:w-[400px]"
        >
          <p className="text-sm leading-relaxed text-white/90">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue via-purple to-cyan" />
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Feedback"
          title="What people say about working with me."
          align="center"
        />
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>

      <div className="mt-14 flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee />
        <Marquee reverse />
      </div>
    </section>
  );
}
