import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-display text-lg font-bold">SS</div>
            <div className="font-display uppercase tracking-wide text-lg">Shankar Shakti</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Heavy-duty crushing equipment supplied and serviced across Nepal.
            Built for quarries, mines and construction aggregate producers.
          </p>
        </div>

        <div>
          <div className="font-display uppercase tracking-wider text-xs text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/services" className="hover:text-primary">Service</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display uppercase tracking-wider text-xs text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /> Pokhara, Gandaki 33700, Nepal</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-primary shrink-0" /> <span>+977 985-6021853<br />+977 985-6044853<br />+977 9851190702</span></li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-primary shrink-0" /> mail.shankarshakti@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} Shankar Shakti Engineering & Metal Industries Pvt. Ltd.</div>
          <div className="uppercase tracking-widest">Made in Nepal · Built for the field</div>
        </div>
      </div>
    </footer>
  );
}
