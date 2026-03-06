import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import fleetImg from "@/assets/fleet-bw.jpg";

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img src={fleetImg} alt="Frota executiva" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative container mx-auto px-6">
          <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">Grupos & Eventos</p>
          <h1 className="text-4xl md:text-6xl mb-4">Solicite para<br />seu Grupo</h1>
          <p className="text-sm text-muted-foreground max-w-md">
            Logística inteligente para eventos, casamentos e turismo.
          </p>
        </div>
      </section>

      {/* Asymmetric grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-1 mb-20">
            <div className="col-span-12 md:col-span-7 bg-card p-10 flex flex-col justify-end min-h-[250px]">
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-2">Vans & Ônibus</p>
              <p className="text-sm text-muted-foreground">
                Frota completa para grupos de qualquer tamanho. De vans executivas a ônibus de última geração.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 bg-secondary p-10 flex flex-col justify-end min-h-[250px]">
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-2">Eventos & Casamentos</p>
              <p className="text-sm text-muted-foreground">
                Logística inteligente para seu evento especial com planejamento completo.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-secondary p-10 flex flex-col justify-end min-h-[200px]">
              <p className="text-xs tracking-[0.15em] uppercase text-accent mb-2">Turismo</p>
              <p className="text-sm text-muted-foreground">
                Excursões com conforto e segurança total.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 overflow-hidden min-h-[200px]">
              <img src={fleetImg} alt="Frota" className="w-full h-full object-cover grayscale" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-3">Reserva para Grupo</p>
            <h2 className="text-3xl md:text-4xl mb-10">Solicite seu orçamento</h2>
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
