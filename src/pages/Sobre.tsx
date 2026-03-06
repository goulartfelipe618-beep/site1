import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Sobre = () => {
  const diferenciais = [
    "Carro Premium",
    "Wi-Fi a Bordo",
    "Pontualidade",
    "Segurança",
    "Motorista Profissional",
    "Mimos a Bordo",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">Quem Somos</p>
          <h1 className="text-4xl md:text-6xl mb-4">Sobre Nós</h1>
          <p className="text-sm text-muted-foreground max-w-md">
            Conheça nossa história e nossos diferenciais.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl leading-tight">
                Mais de 15 anos transformando trajetos em experiências
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fundada por um entusiasta da direção com mais de 15 anos de estrada, a Executive Transfer
                nasceu do desejo de transformar cada trajeto em uma experiência de conforto, segurança e pontualidade.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nosso compromisso é oferecer um serviço de transporte executivo com excelência,
                discrição e atenção aos detalhes. Cada viagem é planejada para que você chegue ao
                seu destino com tranquilidade.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contamos com uma frota moderna de sedãs executivos, SUVs, vans e ônibus, sempre
                higienizados e revisados. Nossos motoristas são profissionais treinados, bilíngues
                e comprometidos com a sua satisfação.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border">
              {diferenciais.map((d) => (
                <div key={d} className="bg-background p-8 text-center">
                  <p className="text-xs tracking-[0.15em] uppercase text-accent">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
