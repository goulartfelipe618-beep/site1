import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Contato = () => {
  const info = [
    { label: "E-mail", value: "contato@executivetransfer.com.br", href: "mailto:contato@executivetransfer.com.br" },
    { label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">Fale Conosco</p>
          <h1 className="text-4xl md:text-6xl mb-4">Contato</h1>
          <p className="text-sm text-muted-foreground max-w-md">
            Entre em contato conosco.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="space-y-0 divide-y divide-border">
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 group"
              >
                <div>
                  <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">{i.label}</p>
                  <p className="text-sm text-foreground">{i.value}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors text-lg">→</span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 text-xs tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
