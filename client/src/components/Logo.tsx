/*
  GRUPO TECH TUNQUÉN — Logo "Onda Tech" (Propuesta B)
  Uses the OFFICIAL icon image provided by client (navy square with isotipo).
  Variants: horizontal | vertical | mono-light | icon
*/
import { cn } from "@/lib/utils";

const ICON_URL = "/manus-storage/isotype_clean_512_96278402.png";
const FULL_LOGO_URL = "/manus-storage/logo_icon_512_1e79c2b2.png";

type LogoProps = {
  variant?: "horizontal" | "vertical" | "icon" | "mono-light" | "mono-dark" | "full";
  tone?: "light" | "dark";
  className?: string;
};

/** Isotipo oficial. El fondo se integra con el fondo navy del sitio */
export function LogoMark({
  className = "",
  rounded = false,
}: {
  className?: string;
  rounded?: boolean;
}) {
  return (
    <img
      src={ICON_URL}
      alt="Isotipo Grupo Tech Tunquén"
      className={cn(
        "object-contain select-none",
        rounded && "rounded-[6px]",
        className
      )}
      draggable={false}
    />
  );
}

export default function Logo({
  variant = "horizontal",
  tone,
  className = "",
}: LogoProps) {
  const effectiveTone: "light" | "dark" =
    tone ?? (variant === "mono-light" ? "light" : "dark");

  const textMain =
    effectiveTone === "light" ? "text-white" : "text-[#0B1D3D]";
  const textAccent = "text-[#38A8E0]";

  if (variant === "icon") {
    return <LogoMark className={className} />;
  }

  // Muestra el logo oficial completo (isotipo + texto en el ícono)
  if (variant === "full") {
    return (
      <img
        src={FULL_LOGO_URL}
        alt="Grupo Tech Tunquén"
        className={cn("object-contain select-none", className)}
        draggable={false}
      />
    );
  }

  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <LogoMark className="h-24 w-24" />
        <div className="text-center leading-tight">
          <div
            className={cn(
              "font-display font-extrabold uppercase tracking-[0.04em] text-xl",
              textMain
            )}
          >
            Grupo Tech
          </div>
          <div
            className={cn(
              "font-display font-extrabold uppercase tracking-[0.04em] text-xl mt-0.5",
              textAccent
            )}
          >
            Tunquén
          </div>
        </div>
      </div>
    );
  }

  // horizontal / mono-light / mono-dark
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <LogoMark className="h-20 w-20 md:h-24 md:w-24 shrink-0" />
      <div className="leading-none">
        <div
          className={cn(
            "font-display font-extrabold uppercase tracking-[0.04em] text-[17px] md:text-[19px]",
            textMain
          )}
        >
          Grupo Tech
        </div>
        <div
          className={cn(
            "font-display font-extrabold uppercase tracking-[0.04em] text-[17px] md:text-[19px] mt-1",
            textAccent
          )}
        >
          Tunquén
        </div>
      </div>
    </div>
  );
}
