/*
  GRUPO TECH TUNQUÉN — Hero (Onda Tech)
  Skyline photo + navy gradient overlay + massive uppercase headline + cyan accents
*/
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539545737/Lj4nSUWSthBnuQSJByrZpb/hero_tech_skyline-mt6kiRKiwVKN58paXg3Zd3.webp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Skyline corporativo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" style={{ opacity: 0 }} />
        {/* Gradiente inferior sutil para legibilidad del texto */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,29,61,0) 0%, rgba(11,29,61,0.55) 55%, rgba(11,29,61,0.88) 100%)",
          }}
        />
      </div>

      {/* Decorative cyan line bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] gradient-line opacity-60" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8 reveal">
            <span className="h-px w-10 bg-[#38A8E0]" />
            <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
              Grupo Empresarial · B2B · Chile
            </span>
          </div>

          <h1 className="font-display font-extrabold uppercase text-white leading-[0.95] tracking-tight reveal">
            <span className="block text-[clamp(2.6rem,6.8vw,5.8rem)]">
              Innovación y
            </span>
            <span className="block text-[clamp(2.6rem,6.8vw,5.8rem)]">
              Tecnología <span className="text-[#38A8E0]">para su</span>
            </span>
            <span className="block text-[clamp(2.6rem,6.8vw,5.8rem)]">
              Empresa.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-white/85 text-lg leading-relaxed reveal">
            En Tech Tunquén integramos{" "}
            <strong className="text-white font-semibold">seguridad</strong>,{" "}
            <strong className="text-white font-semibold">limpieza</strong>,{" "}
            <strong className="text-white font-semibold">experiencias</strong> y{" "}
            <strong className="text-white font-semibold">tecnología</strong> en un solo
            ecosistema de soluciones.
          </p>
          <p className="mt-4 max-w-2xl text-white/75 text-base leading-relaxed reveal">
            A través de nuestras unidades especializadas y aliados estratégicos líderes del
            mercado chileno, entregamos servicios de alto estándar, desde protección y
            mantenimiento hasta equipamiento tecnológico y desarrollo de imagen digital,
            páginas web y redes sociales.
          </p>
          <p className="mt-4 max-w-2xl text-white/90 text-base leading-relaxed reveal font-medium">
            Una sola marca, múltiples soluciones para personas y empresas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 reveal">
            <a href="#servicios" className="btn-primary group">
              Más Información
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#empresas" className="btn-ghost">
              Conocer el grupo
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            {[
              { v: "3", l: "Empresas del grupo" },
              { v: "5+", l: "Años de trayectoria" },
              { v: "77+", l: "Colaboradores" },
              { v: "24/7", l: "Operación continua" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-[#38A8E0]/60 pl-4">
                <div className="font-display font-extrabold text-white text-3xl md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 font-display uppercase text-[10px] tracking-[0.16em] text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner scroll indicator */}
      <div className="hidden lg:flex absolute bottom-8 right-8 flex-col items-end gap-2 text-white/60 font-display uppercase tracking-[0.14em] text-[10px]">
        <span>Edición 2026</span>
        <span className="flex items-center gap-2">
          <span className="h-px w-6 bg-white/40" />
          <ChevronDown className="h-3 w-3 animate-bounce" />
        </span>
      </div>
    </section>
  );
}
