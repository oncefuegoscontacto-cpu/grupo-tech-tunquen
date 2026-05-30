/*
  GRUPO TECH TUNQUÉN — Empresas del grupo
  Directory of the 3 sub-brands: Vigilance, Cleanify, Oncefuegos
  Corporate tech: navy panels, cyan accents, large serif numbers, URL prominent
*/
import { ArrowUpRight, ShieldCheck, Sparkles, Gift } from "lucide-react";

const COMPANIES = [
  {
    code: "01",
    name: "Vigilance",
    url: "www.vigilance.cl",
    link: "https://www.vigilance.cl",
    category: "Seguridad Privada",
    tagline: "Protección integral 24/7",
    lead:
      "Unidad especializada en seguridad corporativa e industrial, con guardias OS-10, centro de monitoreo propio, analítica de video con IA y soluciones RPAS (drones).",
    meta: ["OS-10 vigente", "Prevención y control", "Monitoreo 24/7"],
    icon: ShieldCheck,
  },
  {
    code: "02",
    name: "Cleanify",
    url: "www.cleanify.cl",
    link: "https://www.cleanify.cl",
    category: "Aseo Domiciliario y Empresarial",
    tagline: "Limpieza residencial y empresarial premium",
    lead:
      "Soluciones de aseo domiciliario y empresarial con personal capacitado, insumos certificados y protocolos sanitarios trazables, diseñadas para hogares, edificios y oficinas con estándar hotelero.",
    meta: ["+11 operarios", "Cobertura en Santiago", "Altos estándares de calidad"],
    icon: Sparkles,
  },
  {
    code: "03",
    name: "OnceFuegos",
    url: "www.oncefuegos.cl",
    link: "https://www.oncefuegos.cl",
    category: "Regalos Corporativos",
    tagline: "Experiencias en torno al fuego limpio",
    lead:
      "Fogones de bioetanol hechos a mano con minerales chilenos: regalos corporativos únicos con producción y personalización a medida.",
    meta: ["+7 empresas clientes", "+2.000 clientes", "Producción a medida"],
    icon: Gift,
  },
];

export default function Companies() {
  return (
    <section
      id="empresas"
      className="py-24 lg:py-32 bg-gradient-to-b from-[#0B1D3D] to-[#081530] text-white relative overflow-hidden border-y border-white/10"
    >
      {/* subtle circuit pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#38A8E0 1px, transparent 1px), linear-gradient(90deg, #38A8E0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#38A8E0]" />
              <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
                Empresas del Grupo
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase leading-[1.05] tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
              Tres marcas. <br />
              <span className="text-[#38A8E0]">Un mismo directorio.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-white/70 leading-relaxed">
              Cada empresa conserva su identidad y atención especializada, pero
              comparte gobierno corporativo, sistemas de gestión y el respaldo
              financiero del holding.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {COMPANIES.map((c) => (
            <article
              key={c.code}
              className="group relative bg-[#0f2550] border border-white/10 hover:border-[#38A8E0] transition-colors duration-500 overflow-hidden reveal"
            >
              {/* top color strip */}
              <div className="h-1 w-full bg-[#38A8E0]" />

              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="font-display font-extrabold text-5xl text-white/15 tracking-tight leading-none">
                    {c.code}
                  </div>
                  <div className="h-12 w-12 rounded-sm bg-[#38A8E0]/15 border border-[#38A8E0]/40 flex items-center justify-center text-[#38A8E0]">
                    <c.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="font-display uppercase tracking-[0.14em] text-[10px] font-semibold text-[#38A8E0]">
                  {c.category}
                </div>
                <h3 className="mt-2 font-display font-extrabold uppercase text-3xl tracking-tight text-white">
                  {c.name}
                </h3>
                <p className="mt-1 font-display uppercase tracking-[0.14em] text-[11px] text-white/50">
                  {c.tagline}
                </p>

                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  {c.lead}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.meta.map((m) => (
                    <li
                      key={m}
                      className="font-display uppercase tracking-[0.12em] text-[10px] text-white/80 border border-white/20 px-2.5 py-1"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-between w-full border-t border-white/15 pt-5 font-display uppercase tracking-[0.12em] text-[12px] font-semibold text-white hover:text-[#38A8E0] transition-colors"
                >
                  {c.url}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote row */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-display uppercase tracking-[0.14em] text-[10px] text-white/50">
          <span>Holding · Grupo Tech Tunquén</span>
          <span>Contratos marco · Gobierno unificado · KPIs integrados</span>
        </div>
      </div>
    </section>
  );
}
