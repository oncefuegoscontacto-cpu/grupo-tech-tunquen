/*
  GRUPO TECH TUNQUÉN — Nuestros Servicios (Corporate Tech)
  Light section, centered title, 3 image cards with brand/url
*/
import { ArrowUpRight, ShieldCheck, Sparkles, Gift } from "lucide-react";

type Service = {
  id: string;
  title: string;
  brand: string;
  url: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  img: string;
};

const SERVICES: Service[] = [
  {
    id: "seguridad",
    title: "Seguridad Privada",
    brand: "Vigilance",
    url: "https://www.vigilance.cl",
    tagline:
      "Guardias, monitoreo 24/7, tecnología OS-10 y soluciones RPAS (drones) para la protección de activos corporativos, residenciales e industriales.",
    icon: ShieldCheck,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663539545737/Lj4nSUWSthBnuQSJByrZpb/card_cyber-MxRsPxE6Q7Y9UVuhdt8bdE.webp",
  },
  {
    id: "aseo",
    title: "Aseo Domiciliario y Empresarial",
    brand: "Cleanify",
    url: "https://www.cleanify.cl",
    tagline:
      "Soluciones de aseo residencial y empresarial premium, con personal capacitado, insumos certificados y protocolos sanitarios trazables que garantizan resultados confiables.",
    icon: Sparkles,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663539545737/Lj4nSUWSthBnuQSJByrZpb/card_cleaning_home-TVXZFeEHX52K8gxu2b3pRK.webp",
  },
  {
    id: "regalos",
    title: "Regalos Corporativos",
    brand: "OnceFuegos",
    url: "https://www.oncefuegos.cl",
    tagline:
      "Experiencias únicas en torno al fuego limpio: fogones de bioetanol hechos a mano con minerales chilenos, creados para conectar, sorprender y dejar huella en colaboradores y clientes.",
    icon: Gift,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663539545737/Lj4nSUWSthBnuQSJByrZpb/card_gifts-ZJMpPSG7sj499MqLw7qBcn.webp",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#38A8E0]" />
            <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
              Nuestros Servicios
            </span>
            <span className="h-px w-8 bg-[#38A8E0]" />
          </div>
          <h2 className="font-display font-extrabold uppercase text-[#0B1D3D] leading-[1.05] tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
            Tres especialidades, <br />
            <span className="text-[#38A8E0]">una sola garantía</span> de servicio.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Cada empresa opera con marca propia y expertise profundo en su
            rubro, respaldada por los estándares de compliance, tecnología y
            recursos humanos del grupo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className="group glow-card relative bg-[#0B1D3D] text-white overflow-hidden reveal"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3D] via-[#0B1D3D]/50 to-transparent" />
                <div className="absolute top-5 left-5 font-display font-extrabold text-white/90 text-3xl tracking-tight">
                  0{i + 1}
                </div>
                <div className="absolute top-5 right-5 h-11 w-11 rounded-sm bg-[#38A8E0] text-[#0B1D3D] flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8 pt-6">
                <div className="font-display uppercase tracking-[0.14em] text-[10px] font-semibold text-[#38A8E0]">
                  Empresa · {s.brand}
                </div>
                <h3 className="mt-2 font-display font-bold uppercase text-xl lg:text-2xl leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-white/75 text-sm leading-relaxed">
                  {s.tagline}
                </p>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display uppercase tracking-[0.14em] text-[11px] font-semibold text-white hover:text-[#38A8E0] transition-colors"
                  >
                    {s.url.replace("https://", "")}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="font-display uppercase tracking-[0.14em] text-[10px] text-white/45">
                    B2B · B2C
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
