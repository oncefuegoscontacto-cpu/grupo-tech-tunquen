/*
  GRUPO TECH TUNQUÉN — 404 (Onda Tech)
*/
import { useLocation } from "wouter";
import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0B1D3D] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #38A8E0 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <header className="container py-8 relative">
        <Logo variant="mono-light" />
      </header>

      <main className="container flex-1 flex flex-col justify-center py-16 relative max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#38A8E0]" />
          <span className="font-display uppercase tracking-[0.24em] text-[11px] font-semibold text-[#38A8E0]">
            Error 404
          </span>
        </div>
        <div className="font-display font-extrabold text-[clamp(6rem,18vw,14rem)] leading-none tracking-tighter">
          4<span className="text-[#38A8E0]">0</span>4
        </div>
        <h1 className="mt-6 font-display font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-tight">
          Página no encontrada.
        </h1>
        <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
          El documento que buscaba no forma parte de nuestro sitio. Regrese a la
          portada para continuar explorando el grupo.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="mt-10 btn-primary group self-start"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Volver a la portada
        </button>
      </main>

      <footer className="container py-8 font-display uppercase tracking-[0.14em] text-[10px] text-white/45 font-semibold relative">
        © 2026 Grupo Tech Tunquén · Documento no encontrado
      </footer>
    </div>
  );
}
