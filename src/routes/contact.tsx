import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Shankar Shakti Engineering & Metal Industries" },
      {
        name: "description",
        content:
          "Get in touch with Shankar Shakti Engineering & Metal Industries Pvt. Ltd. in Pokhara, Nepal for jaw crushers, crushing plants, service and spare parts.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:title", content: "Contact Shankar Shakti Engineering" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border">
        <div className="container-x py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Get in touch</div>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl">Let's talk about your site.</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Tell us about your feed material, target output and location. We'll come back with a sized machine and a delivered quote.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {[
            { icon: MapPin, t: "Address", b: <>Pokhara, Gandaki<br />33700 Nepal</> },
            { icon: Phone, t: "Phone", b: <>+977 985-6021853<br />+977 985-6044853<br />+977 9851190702</> },
            { icon: Mail, t: "Email", b: <>mail.shankarshakti@gmail.com</> },
            { icon: Clock, t: "Hours", b: <>Sun–Fri, 9:00 – 18:00<br />Service line: 24/7</> },
          ].map((c) => (
            <div key={c.t} className="border-l-2 border-primary pl-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <c.icon size={14} className="text-primary" /> {c.t}
              </div>
              <div className="mt-2 font-display uppercase text-lg leading-tight">{c.b}</div>
            </div>
          ))}
        </div>

        <form
          className="lg:col-span-3 border border-border bg-card/40 p-8 md:p-10"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="font-display text-3xl">Thank you.</div>
              <p className="mt-3 text-muted-foreground">
                Your enquiry has been recorded. We'll reach out within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="font-mono text-xs uppercase tracking-widest text-primary">Enquiry form</div>
              <h2 className="mt-2 text-3xl">Send us the details.</h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Site location" name="location" />
                <Field label="Required output (TPH)" name="tph" />
              </div>
              <div className="mt-5">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Project details</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Feed material, feed size, target product size, timeline…"
                />
              </div>
              <button type="submit" className="btn-ember mt-8">
                Send enquiry <Send size={16} />
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
