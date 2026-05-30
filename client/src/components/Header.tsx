/*
  GRUPO TECH TUNQUÉN — Header
  Corporate Tech: navy translucent bar, cyan underline on hover, uppercase nav
*/
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0B1D3D]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="container flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center shrink-0">
          <Logo variant="mono-light" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display uppercase tracking-[0.1em] text-[12px] font-semibold text-white/85 hover:text-white relative group transition-colors"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-[#38A8E0] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 border border-white/40 hover:bg-[#38A8E0] hover:border-[#38A8E0] hover:text-[#0B1D3D] text-white px-5 py-2.5 font-display font-semibold text-[12px] uppercase tracking-[0.08em] transition-all"
          >
            Contáctanos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-[#0B1D3D] border-t border-white/10 shadow-xl">
          <div className="container py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase tracking-[0.08em] text-sm font-semibold text-white/90 py-3 border-b border-white/10 hover:text-[#38A8E0]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#38A8E0] text-[#0B1D3D] py-3.5 text-center font-display font-bold uppercase tracking-[0.08em] text-sm"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
