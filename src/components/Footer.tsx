import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-lg tracking-[0.2em] uppercase font-light text-foreground mb-4">
            Executive<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Transporte executivo de alto padrão.<br />
            Conforto, pontualidade e discrição.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Navegação</p>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Transfer" },
              { to: "/grupos", label: "Grupos" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Contato</p>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>contato@executivetransfer.com.br</span>
            <span>(11) 99999-9999</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} Executive Transfer
      </div>
    </div>
  </footer>
);
