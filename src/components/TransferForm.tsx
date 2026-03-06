import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação enviada", description: "Entraremos em contato em breve." });
    setStep(1);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  const labelClass = "text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1 block";

  return (
    <div>
      {/* Trip type tabs */}
      <div className="flex gap-0 mb-10 border-b border-border">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs tracking-[0.12em] uppercase transition-colors ${
                tripType === val
                  ? "text-accent border-b-2 border-accent -mb-[1px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className={inputClass} />
              </div>
              {tripType === "hora" && (
                <div>
                  <label className={labelClass}>Horas de serviço</label>
                  <input type="number" min={1} placeholder="Quantas horas?" required className={inputClass} />
                </div>
              )}
            </div>
            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de embarque" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Endereço de destino" required className={inputClass} />
            </div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Data de Retorno</label>
                  <input type="date" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Hora de Retorno</label>
                  <input type="time" className={inputClass} />
                </div>
              </div>
            )}
            <div>
              <label className={labelClass}>Mensagem</label>
              <textarea placeholder="Observações..." rows={2} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Cupom</label>
              <input placeholder="Código do cupom" className={inputClass} />
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3.5 text-xs tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/80 transition-colors mt-4"
            >
              Próximo: Seus Dados
            </button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input placeholder="Seu nome" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className={inputClass}>
                  <option value="">Selecione</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="indicacao">Indicação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3.5 text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 text-xs tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
              >
                Solicitar Transfer
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
