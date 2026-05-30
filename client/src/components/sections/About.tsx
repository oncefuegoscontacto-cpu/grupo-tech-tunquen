/*
  GRUPO TECH TUNQUÉN — About / Nosotros
  Corporate tech: navy band with photo + bold headline + 3 principles
*/
import { ArrowRight } from "lucide-react";

const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539545737/Lj4nSUWSthBnuQSJByrZpb/tech_transformacion-msCe8rUwHEyTV6gchGm38h.webp";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#0B1D3D] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #38A8E0 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#38A8E0]" />
              <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.75rem)]">
              Liderando la <span className="text-[#38A8E0]">Transformación</span>{" "}
              Corporativa.
            </h2>

            <p className="mt-8 text-white/85 leading-relaxed text-lg">
              Somos un equipo de profesionales enfocados en entregar soluciones
              integrales con altos estándares de excelencia.
            </p>

            <p className="mt-5 text-white/75 leading-relaxed">
              <strong className="text-white">Grupo Tech Tunquén</strong> nace en
              Chile para integrar servicios que antes operaban de forma
              independiente, consolidando seguridad, limpieza, experiencias y
              soluciones corporativas bajo una visión estratégica común.
            </p>

            <p className="mt-5 text-white/75 leading-relaxed">
              Hoy contamos con más de{" "}
              <strong className="text-white">77 colaboradores</strong> en
              nuestras unidades especializadas —Vigilance, Cleanify y OnceFuegos—,
              que operan de forma autónoma, con independencia operativa y un firme
              compromiso con la calidad.
            </p>

            {/* Principles */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { n: "01", t: "Integridad", d: "Auditoría y canal de denuncias independiente." },
                { n: "02", t: "Integración", d: "Un estándar, una factura, un ejecutivo." },
                { n: "03", t: "Innovación", d: "Tecnología aplicada a servicios tradicionales." },
              ].map((p) => (
                <div key={p.n} className="border-t-2 border-[#38A8E0] pt-4">
                  <div className="font-display text-[#38A8E0] font-bold text-sm tracking-[0.18em]">
                    {p.n}
                  </div>
                  <div className="mt-2 font-display font-bold uppercase text-white text-base tracking-tight">
                    {p.t}
                  </div>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#empresas"
              className="mt-10 inline-flex items-center gap-2 font-display uppercase tracking-[0.12em] text-[12px] font-semibold text-white border-b border-[#38A8E0] pb-1 hover:text-[#38A8E0] transition-colors group"
            >
              Conócenos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-6 reveal">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={TEAM_IMG}
                  alt="Equipo directivo de Grupo Tech Tunquén"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1D3D]/50 via-transparent to-transparent" />
              </div>
              {/* Overlay badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-6 md:-left-6 bg-[#38A8E0] text-[#0B1D3D] px-6 py-5 shadow-xl">
                <div className="font-display font-extrabold text-3xl leading-none">+5</div>
                <div className="mt-1 font-display uppercase tracking-[0.14em] text-[10px] font-semibold">
                  Años liderando el sector
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
