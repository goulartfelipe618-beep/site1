import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import sedanImg from "@/assets/sedan-bw-1.jpg";
import interiorImg from "@/assets/sedan-bw-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img src={sedanImg} alt="Sedã executivo" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 pb-20 md:pb-28">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 max-w-3xl">
            Transporte Executivo<br />
            <span className="text-accent">de Alto Padrão</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-md tracking-wide">
            Sua viagem com o conforto e a pontualidade que você merece.
          </p>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={sedanImg} alt="Sedã exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={interiorImg} alt="Interior premium" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: "Veículos Premium", sub: "Sedãs executivos de última geração" },
              { label: "Wi-Fi a Bordo", sub: "Conectividade durante todo o trajeto" },
              { label: "Pontualidade", sub: "Compromisso absoluto com seus horários" },
              { label: "Motorista Bilíngue", sub: "Profissionais experientes e discretos" },
            ].map((f) => (
              <div key={f.label} className="bg-background p-8 text-center">
                <p className="text-xs tracking-[0.15em] uppercase text-accent mb-2">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">Reserva</p>
            <h2 className="text-3xl md:text-4xl mb-10">Solicite seu Transfer</h2>
            <TransferForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
