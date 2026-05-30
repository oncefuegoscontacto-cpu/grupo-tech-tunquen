/*
  GRUPO TECH TUNQUÉN — Footer (Onda Tech)
  Deep navy footer with cyan accents + direct links to the 3 companies
*/
import Logo from "./Logo";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#081530] text-white overflow-hidden border-t border-white/10">
      {/* cyan top line */}
      <div className="h-[2px] gradient-line opacity-60" />

      <div className="container pt-20 pb-10">
        {/* CTA strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#38A8E0]" />
              <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
                Construyamos juntos
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
              Lleve su operación al <br />
              <span className="text-[#38A8E0]">siguiente nivel.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 flex flex-col justify-end gap-4">
            <a
              href="mailto:contacto@techtunquen.cl"
              className="group flex items-center justify-between border-b border-white/20 pb-3 hover:border-[#38A8E0] transition-colors"
            >
              <span className="font-display text-lg md:text-xl">
                contacto@techtunquen.cl
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="tel:+56222000000"
              className="group flex items-center justify-between border-b border-white/20 pb-3 hover:border-[#38A8E0] transition-colors"
            >
              <span className="font-display text-lg md:text-xl">+56 9 65097864</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          <div className="col-span-2 lg:col-span-4">
            <Logo variant="mono-light" />
            <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-sm">
              Grupo empresarial chileno. Integramos seguridad privada, aseo
              empresarial y domiciliario y regalos corporativos bajo una sola
              marca.
            </p>
            <div className="mt-6 font-display uppercase tracking-[0.14em] text-[10px] text-white/45 font-semibold">
              Casa Matriz — Peñalolén, Santiago · Chile
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {[Linkedin, Instagram, Facebook].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-9 w-9 rounded-sm border border-white/20 hover:border-[#38A8E0] hover:bg-[#38A8E0] hover:text-[#0B1D3D] flex items-center justify-center transition-colors"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <div className="font-display uppercase tracking-[0.16em] text-[10px] text-[#38A8E0] font-semibold mb-5">
              Grupo
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#empresas" className="text-white/80 hover:text-white transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display uppercase tracking-[0.16em] text-[10px] text-[#38A8E0] font-semibold mb-5">
              Empresas del grupo
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.vigilance.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Vigilance · Seguridad
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cleanify.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Cleanify · Aseo
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.oncefuegos.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  OnceFuegos · Regalos
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display uppercase tracking-[0.16em] text-[10px] text-[#38A8E0] font-semibold mb-5">
              Legal
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Canal de denuncias
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-display uppercase tracking-[0.14em] text-[10px] text-white/45 font-semibold">
          <span>© 2026 Grupo Tech Tunquén — Todos los derechos reservados</span>
          <span>RUT: 76.543.210-K · Santiago de Chile</span>
        </div>
      </div>
    </footer>
  );
}
