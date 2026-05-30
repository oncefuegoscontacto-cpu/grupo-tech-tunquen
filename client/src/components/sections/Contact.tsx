/*
  GRUPO TECH TUNQUÉN — Contacto (Corporate Tech)
  Light form panel on white + navy info panel
*/
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";

const INTERES_OPTS = [
  "Vigilance · Seguridad",
  "Cleanify · Aseo",
  "OnceFuegos · Regalos",
  "Servicio integral",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitud enviada — le respondemos a la brevedad.", {
        description: "Un ejecutivo comercial revisará su requerimiento.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#38A8E0]" />
            <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
              Contacto
            </span>
            <span className="h-px w-8 bg-[#38A8E0]" />
          </div>
          <h2 className="font-display font-extrabold uppercase text-[#0B1D3D] leading-[1.05] tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
            Escríbanos <br />
            y le <span className="text-[#38A8E0]">respondemos</span> a la brevedad.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cuéntenos su requerimiento y lo conectaremos con el equipo adecuado de
            Vigilance, Cleanify u OnceFuegos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-[0_40px_80px_-40px_rgba(11,29,61,0.25)] reveal">
          {/* Info panel */}
          <aside className="lg:col-span-4 bg-[#0B1D3D] text-white p-10 lg:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#38A8E0]/15 blur-3xl"
            />
            <h3 className="font-display font-extrabold uppercase text-2xl tracking-tight">
              Información <br /> de contacto
            </h3>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Central de atención corporativa Grupo Tech Tunquén. También puede
              contactar directamente con cada empresa visitando sus sitios.
            </p>

            <ul className="mt-10 space-y-7 relative">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-[#38A8E0] text-[#0B1D3D] flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-[0.16em] text-[10px] text-white/55 font-semibold">
                    Casa Matriz
                  </div>
                  <div className="mt-1.5 text-[15px]">
                    Peñalolén · Santiago, Chile
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-[#38A8E0] text-[#0B1D3D] flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-[0.16em] text-[10px] text-white/55 font-semibold">
                    Comercial
                  </div>
                  <a
                    href="mailto:comercial@techtunquen.cl"
                    className="mt-1.5 block text-[15px] hover:text-[#38A8E0] transition-colors"
                  >
                    comercial@techtunquen.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-[#38A8E0] text-[#0B1D3D] flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-[0.16em] text-[10px] text-white/55 font-semibold">
                    Teléfono
                  </div>
                  <a
                    href="tel:+56222000000"
                    className="mt-1.5 block text-[15px] hover:text-[#38A8E0] transition-colors"
                  >
                    +56 9 65097864
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-sm bg-[#38A8E0] text-[#0B1D3D] flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-[0.16em] text-[10px] text-white/55 font-semibold">
                    Horario Comercial
                  </div>
                  <div className="mt-1.5 text-[15px]">
                    Lun – Vie · 8:30 – 18:30<br />
                    Monitoreo 24/7 operativo
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-white/15">
              <div className="font-display uppercase tracking-[0.14em] text-[10px] text-white/50 font-semibold">
                Contacto directo por empresa
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                <li>
                  <span className="text-[#38A8E0]">Vigilance ›</span>{" "}
                  <a
                    href="https://www.vigilance.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    www.vigilance.cl
                  </a>
                </li>
                <li>
                  <span className="text-[#38A8E0]">Cleanify ›</span>{" "}
                  <a
                    href="https://www.cleanify.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    www.cleanify.cl
                  </a>
                </li>
                <li>
                  <span className="text-[#38A8E0]">Oncefuegos ›</span>{" "}
                  <a
                    href="https://www.oncefuegos.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    www.oncefuegos.cl
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Form panel */}
          <div className="lg:col-span-8 bg-white p-10 lg:p-12">
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <Field label="Empresa" name="empresa" required />
              <Field label="RUT" name="rut" />
              <Field label="Nombre completo" name="nombre" required />
              <Field label="Cargo" name="cargo" />
              <Field label="Email corporativo" name="email" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" />

              <div className="md:col-span-2">
                <label className="block font-display uppercase tracking-[0.16em] text-[10px] font-semibold text-[#0B1D3D] mb-3">
                  Empresa de interés
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERES_OPTS.map((opt) => (
                    <label
                      key={opt}
                      className="inline-flex items-center gap-2 cursor-pointer border border-[#0B1D3D]/20 hover:border-[#38A8E0] px-4 py-2 has-[:checked]:bg-[#0B1D3D] has-[:checked]:text-white has-[:checked]:border-[#0B1D3D] transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="interes"
                        value={opt}
                        className="sr-only peer"
                      />
                      <span className="font-display uppercase text-[11px] tracking-[0.12em] font-semibold">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-display uppercase tracking-[0.16em] text-[10px] font-semibold text-[#0B1D3D] mb-3">
                  Requerimiento
                </label>
                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full bg-transparent border border-[#0B1D3D]/20 focus:border-[#38A8E0] outline-none p-3 text-[#0B1D3D] transition-colors resize-none"
                  placeholder="Describa brevemente su requerimiento, tamaño de operación, ubicaciones y fecha objetivo."
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                  Al enviar acepta nuestra Política de Privacidad. Sus datos son
                  tratados de forma confidencial.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary group disabled:opacity-60"
                >
                  {loading ? "Enviando…" : "Enviar solicitud"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-display uppercase tracking-[0.16em] text-[10px] font-semibold text-[#0B1D3D] mb-3"
      >
        {label}
        {required && <span className="text-[#38A8E0]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-transparent border border-[#0B1D3D]/20 focus:border-[#38A8E0] outline-none px-3 py-2.5 text-[#0B1D3D] transition-colors"
      />
    </div>
  );
}
