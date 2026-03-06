import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação de grupo enviada", description: "Nossa equipe entrará em contato." });
    setStep(1);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  const labelClass = "text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Tipo de Veículo</label>
              <select className={inputClass}>
                <option value="">Selecione</option>
                <option value="van">Van Executiva</option>
                <option value="micro">Micro-ônibus</option>
                <option value="onibus">Ônibus</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Nº de Passageiros</label>
              <input type="number" min={1} placeholder="Quantidade" required className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Embarque</label>
            <input placeholder="Endereço de embarque" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Destino</label>
            <input placeholder="Endereço de destino" required className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Data/Hora de Ida</label>
              <input type="datetime-local" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Data/Hora de Retorno</label>
              <input type="datetime-local" className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Observações</label>
            <textarea placeholder="Detalhes do evento, paradas extras..." rows={2} className={`${inputClass} resize-none`} />
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
              Solicitar para Grupo
            </button>
          </div>
        </>
      )}
    </form>
  );
};
