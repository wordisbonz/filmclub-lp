import { StorySection } from "@/components/StorySection";
import { WaitlistForm } from "@/components/WaitlistForm";

const manifesto = [
  {
    lines: [
      "you don't need to buy more gear.",
      "you don't need to attend any more seminars.",
      "you don't need to watch another film tutorial.",
      "& you really don't need to watch more movies."
    ]
  },
  {
    lines: ["all you need is a community & a deadline."]
  },
  {
    lines: [
      "and we get it, when the internet is filled with so much noise, its hard to focus, hard to stay on track on a goal."
    ]
  },
  {
    lines: [
      "on top of everything else, its hard creating things when you're alone."
    ]
  },
  {
    lines: ["that's why we're building filmclub."]
  },
  {
    lines: [
      "for 6 weeks, you'll go from idea, script, filming, editing & premiering your first movie."
    ]
  },
  {
    lines: [
      "each week is an online class, where you'll learn from someone who has been in your shoes but isn't too far off from where you are and where you want to be."
    ]
  },
  {
    lines: [
      "you'll learn things like how to pick an idea, how to just get to writing, how to light, frame, edit, etc."
    ]
  },
  {
    lines: ["this is 100% free."]
  },
  {
    lines: [
      "the only thing we want in return is for you to have a completed movie."
    ]
  },
  {
    lines: [
      "and there hasn't been a more perfect opportunity to create one until now."
    ]
  },
  {
    lines: [
      "the internet is more than just apps, ads & ai.",
      "the internet could be anything we want it to be."
    ]
  },
  {
    lines: ["and for us, we want it to create the next generation of filmmakers."]
  }
];

export default function HomePage() {
  const dots = [0, 1, 2];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 text-center sm:px-10">
        <p className="font-display text-5xl leading-[1.15] text-stone-900 sm:text-6xl lg:text-[10vw]">
          for the procrastinating filmmaker
          <span className="ml-3 inline-flex items-center gap-2 align-baseline">
            {dots.map((index) => (
              <span key={index} className="dot dot-inline" style={{ animationDelay: `${index * 350}ms` }} />
            ))}
          </span>
        </p>
      </section>

      {/* Manifesto Sections */}
      <div className="relative mx-auto w-full max-w-[600px] px-6 pb-28">
        {manifesto.map((paragraph, index) => (
          <div key={index} className="py-8">
            <div className="space-y-1 text-left">
              {paragraph.lines.map((line, lineIndex) => (
                <p key={lineIndex} className="text-left text-lg font-semibold leading-normal text-stone-900 sm:text-xl">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Waitlist Form */}
      <StorySection className="flex flex-col items-center justify-center pb-20">
        <WaitlistForm className="w-full max-w-2xl" />
      </StorySection>
    </main>
  );
}
