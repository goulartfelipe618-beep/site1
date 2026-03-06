import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Transfer" },
    { to: "/grupos", label: "Grupos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg tracking-[0.2em] uppercase font-light text-foreground">
            Executive<span className="text-accent">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === l.to
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs tracking-[0.15em] uppercase px-6 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
          >
            Solicitar
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4 border-t border-border mt-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={`text-xs tracking-[0.15em] uppercase py-1 ${
                  location.pathname === l.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase px-6 py-2.5 bg-accent text-accent-foreground text-center mt-2"
            >
              Solicitar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
