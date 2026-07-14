import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Wrench, Settings, Truck, ShieldCheck, HeartHandshake, ClipboardCheck } from "lucide-react";
import detailImg from "@/assets/quarry-site.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Service & Parts — Shankar Shakti Engineering" },
      {
        name: "description",
        content:
          "Installation, commissioning, preventive maintenance and genuine spare parts for crushing plants across Nepal.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:title", content: "Service & Parts — Shankar Shakti" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Services() {
  const services = [
    { icon: ClipboardCheck, t: "Site assessment", b: "Feed analysis, layout planning and machine sizing before you commit to a purchase." },
    { icon: Truck, t: "Delivery & rigging", b: "Freight coordination, offloading and positioning at your quarry site." },
    { icon: Settings, t: "Installation & commissioning", b: "Mechanical erection, electrical wiring, no-load and load trials." },
    { icon: Wrench, t: "Preventive maintenance", b: "Scheduled inspections, lubrication programs and wear-part monitoring." },
    { icon: ShieldCheck, t: "Genuine spare parts", b: "Manganese jaw plates, toggle plates, bearings, drive belts held in inventory." },
    { icon: HeartHandshake, t: "Operator training", b: "On-site training for crusher operators and maintenance crews." },
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={detailImg} alt="" width={1200} height={900} className="w-full h-full object-cover" />
        </div>
        <div className="container-x py-20 md:py-28 relative">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Service & parts</div>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl">Keep the plant running.</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            A crusher is only as valuable as its uptime. We back every machine we sell
            with hands-on service and parts availability across Nepal.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.t} className="bg-background p-8">
              <s.icon className="text-primary" size={28} strokeWidth={1.5} />
              <div className="mt-5 font-display uppercase text-xl">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">Response</div>
            <h2 className="mt-4 text-4xl md:text-5xl">Downtime is expensive. We treat it that way.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Break-down call? Our team in Pokhara mobilises with common wear parts in the vehicle.
              For most jobs in Gandaki and adjacent provinces we're on-site within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+9779856044853" className="btn-ember">Service hotline: +977 985-6044853</a>
              <Link to="/contact" className="btn-ghost">Request service</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "24 h", v: "Typical response, Gandaki" },
              { k: "500+", v: "Wear parts in stock" },
              { k: "365", v: "Days on call" },
              { k: "1", v: "Point of contact" },
            ].map((s) => (
              <div key={s.v} className="border border-border p-6 bg-card/40">
                <div className="font-display text-4xl text-ember">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
