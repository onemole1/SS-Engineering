import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getProduct, products, type Product } from "@/lib/products";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name ?? "Product"} — Shankar Shakti Engineering` },
        {
          name: "description",
          content: p?.tagline ?? "Heavy-duty crushing equipment from Shankar Shakti Engineering.",
        },
        { property: "og:url", content: `/products/${params.slug}` },
        { property: "og:title", content: p?.name ?? "Product" },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrBoundary,
  component: ProductPage,
});

function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container-x py-32 text-center">
        <h1 className="text-5xl">Product not found</h1>
        <Link to="/products" className="btn-ember mt-8 inline-flex">Back to products</Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ErrBoundary({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container-x py-32 text-center">
        <h1 className="text-4xl">Something went wrong loading this product.</h1>
        <button className="btn-ember mt-8" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container-x py-8">
          <Link to="/products" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">
            <ArrowLeft size={14} /> All products
          </Link>
        </div>
        <div className="container-x pb-16 grid md:grid-cols-2 gap-12 items-start">
          <div className="border border-border bg-card overflow-hidden">
            <img src={product.image} alt={product.name} width={1200} height={900} className="w-full aspect-[4/3] object-cover" />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{product.category}</div>
            <h1 className="mt-3 text-4xl md:text-6xl">{product.name}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{product.tagline}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-ember">Request quote <ArrowRight size={18} /></Link>
              <a href="tel:+9779856021853" className="btn-ghost">Call sales</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="font-mono text-[10px] uppercase tracking-widest border border-border px-3 py-1.5 text-muted-foreground">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">Highlights</div>
          <h2 className="mt-4 text-3xl md:text-4xl">Why it works.</h2>
          <ul className="mt-8 space-y-4">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="divider-slash font-mono text-xs uppercase tracking-[0.25em] text-primary">Specifications</div>
          <h2 className="mt-4 text-3xl md:text-4xl">Technical data.</h2>
          <div className="mt-8 border border-border">
            {product.specs.map((s, i) => (
              <div key={s.label} className={`flex justify-between p-4 ${i !== product.specs.length - 1 ? "border-b border-border" : ""}`}>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="font-display uppercase text-right">{s.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground font-mono">
            Specifications are indicative. Final configuration confirmed at quotation.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="container-x py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl">More equipment</h2>
            <Link to="/products" className="btn-ghost">All products</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group border border-border bg-background hover:border-primary transition-colors">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} width={1200} height={900} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.category}</div>
                  <div className="mt-2 font-display text-2xl uppercase">{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
