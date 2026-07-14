import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Wrench, Truck, HardHat, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/lib/products";
import heroImg from "@/assets/hero-crusher.jpg";
import quarryImg from "@/assets/quarry-site.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shankar Shakti Engineering — Jaw Crushers & Crushing Plants, Nepal" },
      {
        name: "description",
        content:
          "Shankar Shakti Engineering & Metal Industries Pvt. Ltd. supplies heavy-duty jaw crushers and complete crushing plants to quarries, mines and aggregate producers across Nepal.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Capabilities />
      <ProductStrip />
      <ProcessSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Heavy jaw crusher operating in a quarry"
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      <div className="relative container-x pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Est. Pokhara, Nepal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display">
            Built to <span className="text-ember">crush.</span>
            <br />
            Engineered to last.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Shankar Shakti Engineering & Metal Industries Pvt. Ltd. supplies
            heavy-duty jaw crushers and complete crushing plants — spec'd,
            installed and serviced for the toughest quarries in Nepal.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="btn-ember">
              View Equipment <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border bg-background/70 backdrop-blur">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { k: "20+", v: "Years in the field" },
            { k: "500 TPH", v: "Peak crushing capacity" },
            { k: "77+", v: "Districts served" },
            { k: "24/7", v: "Field service" },
          ].map((s) => (
            <div key={s.v} className="px-4 md:px-8 py-6">
              <div className="font-display text-3xl md:text-4xl text-ember">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Primary Crushing",
    "Aggregate Production",
    "Quarry Solutions",
    "Field Service",
    "Spare Parts",
  ];
  return (
    <div className="border-b border-border bg-card/40 overflow-hidden">
      <div className="container-x py-4 flex items-center gap-8 whitespace-nowrap overflow-x-auto no-scrollbar">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-display uppercase tracking-widest text-sm text-muted-foreground">{t}</span>
            <span className="text-primary">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Capabilities() {
  const caps = [
    { icon: HardHat, title: "Heavy Rock", body: "Machines specified for granite, basalt and river-bed aggregates common across Nepali quarries." },
    { icon: Wrench, title: "Field Service", body: "Trained technicians on call for installation, commissioning, wear-part changeover and preventive maintenance." },
    { icon: Truck, title: "Nationwide Delivery", body: "Logistics arranged from our Pokhara base to sites in the Terai, hills and remote project locations." },
    { icon: Shield, title: "Genuine Parts", body: "Manganese jaw plates, toggle plates, bearings and drive belts held in inventory to minimise downtime." },
  ];
  return (
    <section className="container-x py-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">
            What we do
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Crushing equipment, supplied and supported.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We're a dealer and service partner for proven crushing equipment.
            Our job is to size the right machine for your rock, deliver it to
            site, and keep it running.
          </p>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
          {caps.map((c) => (
            <div key={c.title} className="bg-background p-8 group hover:bg-card transition-colors">
              <c.icon className="text-primary" size={28} strokeWidth={1.5} />
              <div className="mt-5 font-display uppercase text-xl">{c.title}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductStrip() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">
              The lineup
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl max-w-xl">
              Jaw crushers for every stage of the pit.
            </h2>
          </div>
          <Link to="/products" className="btn-ghost self-start md:self-auto">
            All products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group block border border-border bg-background hover:border-primary transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.category}
                </div>
                <div className="mt-2 font-display text-2xl uppercase">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-display uppercase tracking-widest text-primary">
                  Specs <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", t: "Assessment", b: "We visit or review site data — rock type, feed size, target output and space constraints." },
    { n: "02", t: "Specification", b: "The right jaw crusher and auxiliary equipment are matched to your throughput and CSS targets." },
    { n: "03", t: "Delivery & Install", b: "We coordinate freight to site, mechanical installation and electrical commissioning." },
    { n: "04", t: "Service & Parts", b: "Scheduled maintenance visits and same-region spare parts keep uptime high." },
  ];
  return (
    <section className="container-x py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={quarryImg}
            alt="Site crew inspecting crushing equipment at a Nepal quarry"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover border border-border"
          />
        </div>
        <div>
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">
            How we work
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl">
            From site visit to full production.
          </h2>
          <div className="mt-10 space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 border-l-2 border-border pl-5 hover:border-primary transition-colors">
                <div className="font-display text-3xl text-primary min-w-[3ch]">{s.n}</div>
                <div>
                  <div className="font-display uppercase text-lg">{s.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative border-t border-border">
      <div className="container-x py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Ready to spec your plant?</div>
          <h2 className="mt-6 text-5xl md:text-7xl">
            Tell us about your <span className="text-ember">rock.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Send us your feed size, required output and location. We'll come back with a sized machine and a delivered quote.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-ember">Request Quote <ArrowRight size={18} /></Link>
            <a href="tel:+9779856021853" className="btn-ghost">Call +977 985-6021853</a>
          </div>
        </div>
      </div>
    </section>
  );
}
