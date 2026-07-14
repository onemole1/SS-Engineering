import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, categories, type ProductCategory } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Products — Crushers, Impactors, Washing, Screens & Feeders | Shankar Shakti" },
      {
        name: "description",
        content:
          "Our full crushing equipment lineup: jaw crushers, cone crushers, VSI & HSI impactors, hydrocyclone washing systems, screens and feeders — supplied and serviced across Nepal.",
      },
      { property: "og:title", content: "Products — Shankar Shakti Engineering" },
      { property: "og:description", content: "Crushers, impactors, washing systems, screens and feeders." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function ProductsIndex() {
  const [active, setActive] = useState<ProductCategory>("Crusher");
  const filtered = products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container-x py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Our Products</div>
          <h1 className="mt-4 text-5xl md:text-7xl">Our Quality Products.</h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Every machine we supply is sized, installed and supported for Nepali quarry conditions.
            Browse the range by category — then talk to us about your feed size and target output.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="container-x py-12">
        <div className="flex flex-wrap gap-3 justify-center border-b border-border pb-8">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`font-display uppercase tracking-widest text-sm px-6 py-3 border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col border border-border hover:border-primary transition-colors bg-card/40"
            >
              <div className="aspect-square bg-background overflow-hidden flex items-center justify-center p-6">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-border flex-1 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-xl uppercase leading-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 font-display uppercase tracking-widest text-primary text-sm">
                  View details <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No products in this category yet.</p>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
