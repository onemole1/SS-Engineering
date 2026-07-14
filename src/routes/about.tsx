import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CheckCircle2 } from "lucide-react";
import quarryImg from "@/assets/quarry-site.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Shankar Shakti Engineering & Metal Industries" },
      {
        name: "description",
        content:
          "Shankar Shakti Engineering & Metal Industries Pvt. Ltd. is a Pokhara-based dealer of heavy crushing equipment serving quarries and construction projects across Nepal.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:title", content: "About Shankar Shakti Engineering" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  const values = [
    { t: "Field-first", b: "Machines are chosen for what actually works on Nepali rock, not just spec sheets." },
    { t: "Uptime obsessed", b: "Wear parts and service response are as important to us as the machine itself." },
    { t: "Straight talk", b: "Clear specifications, delivered quotes and honest lead times." },
    { t: "Long-term", b: "We build customer relationships that span the life of the plant." },
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container-x py-20 md:py-28 relative">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Who we are</div>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-4xl">
            Heavy equipment,<br />local hands.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Shankar Shakti Engineering & Metal Industries Pvt. Ltd. is a
            Pokhara-based supplier of crushing equipment to quarry, mining and
            aggregate producers across Nepal. We're mechanical people first —
            our job is to make sure the machine you buy is the right one, and
            that it keeps running.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-16 items-center">
        <img src={quarryImg} alt="Crusher installation at a Nepali quarry site" width={1600} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover border border-border" />
        <div>
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">Our story</div>
          <h2 className="mt-4 text-4xl">Rooted in Pokhara, working across Nepal.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded to bring reliable, well-supported crushing equipment to Nepali quarry
              operators, Shankar Shakti has grown into a trusted dealer for producers who
              need machines that survive real conditions — abrasive feed, monsoon dust, and
              remote sites where a broken part isn't easy to replace.
            </p>
            <p>
              We work as a dealer for internationally proven crushing brands, and we back
              every install with mechanical service, spares and honest advice. When the
              machine goes down, so does the site — we operate with that in mind every day.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="container-x py-24">
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">What we stand for</div>
          <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl">Four rules we don't break.</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v) => (
              <div key={v.t} className="bg-background p-8">
                <CheckCircle2 className="text-primary" size={24} strokeWidth={1.5} />
                <div className="mt-4 font-display uppercase text-xl">{v.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto">Ready to talk equipment?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/products" className="btn-ghost">See the lineup</Link>
          <Link to="/contact" className="btn-ember">Contact us</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
