/*
  GRUPO TECH TUNQUÉN — Three-pillar strip (bajo el hero)
  White band with 3 columns + icons + short descriptions
*/
import { Briefcase, Cog, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Briefcase,
    title: "Consultoría Especializada",
    desc: "Asesoría experta para la gestión e integración de servicios corporativos en su operación.",
  },
  {
    icon: Cog,
    title: "Desarrollo e Integración",
    desc: "Soluciones y sistemas a la medida de sus necesidades operacionales y administrativas.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte y Seguridad",
    desc: "Protección y soporte 24/7 para continuidad operativa con estándares ISO.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 py-14 md:divide-x md:divide-border">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="reveal md:px-10 first:md:pl-0 last:md:pr-0 flex gap-5 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-sm bg-[#0B1D3D] text-white flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1D3D] text-[17px] uppercase tracking-tight">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-3 text-[10px] font-display uppercase tracking-[0.18em] text-[#38A8E0]">
                  0{i + 1} · Servicio transversal
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
