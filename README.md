# Grupo Tech Tunquén — Sitio Web Corporativo

Sitio web moderno y profesional para **Grupo Tech Tunquén**, grupo empresarial chileno que integra seguridad privada (Vigilance), aseo domiciliario y empresarial (Cleanify) y regalos corporativos (OnceFuegos).

## 📋 Características

- **Diseño Onda Tech**: Logo hexagonal + onda + circuito con paleta navy profundo + celeste tech
- **Responsive**: Optimizado para móvil, tablet y escritorio
- **Secciones**: Hero, Nosotros, Servicios, Empresas del Grupo, Contacto, Footer
- **Tecnología**: React 19 + Tailwind CSS 4 + Vite + TypeScript
- **Componentes**: shadcn/ui, Lucide React, Framer Motion

## 🚀 Instalación y Ejecución

### Requisitos previos
- **Node.js** 18+ (recomendado 22.x)
- **pnpm** 10+ (gestor de paquetes recomendado) o npm/yarn

### Pasos de instalación

1. **Descomprimir el ZIP** y entrar al directorio:
   ```bash
   unzip grupo-tech-tunquen-web.zip
   cd grupo-tech-tunquen-web
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   # o si usas npm:
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   pnpm dev
   # o si usas npm:
   npm run dev
   ```

   El sitio estará disponible en: **http://localhost:5173**

4. **Construir para producción**:
   ```bash
   pnpm build
   ```

   Los archivos compilados estarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
grupo-tech-tunquen-web/
├── client/
│   ├── public/
│   │   ├── assets/          # Imágenes y recursos
│   │   ├── favicon.ico      # Favicon oficial
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx       # Navegación principal
│   │   │   ├── Footer.tsx       # Pie de página
│   │   │   ├── Logo.tsx         # Componente logo
│   │   │   └── sections/        # Secciones del sitio
│   │   │       ├── Hero.tsx
│   │   │       ├── About.tsx
│   │   │       ├── Services.tsx
│   │   │       ├── Companies.tsx
│   │   │       └── Contact.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Página principal
│   │   │   └── NotFound.tsx     # Página 404
│   │   ├── contexts/            # React contexts
│   │   ├── hooks/               # Custom hooks
│   │   ├── lib/                 # Utilidades
│   │   ├── App.tsx              # Enrutador principal
│   │   ├── main.tsx             # Punto de entrada
│   │   └── index.css            # Estilos globales + Tailwind
│   └── index.html               # HTML base
├── server/                      # Placeholder para compatibilidad
├── shared/                      # Tipos compartidos
├── package.json                 # Dependencias
├── pnpm-lock.yaml              # Lock file (pnpm)
├── tsconfig.json               # Configuración TypeScript
├── vite.config.ts              # Configuración Vite
└── README.md                   # Este archivo
```

## 🎨 Paleta de Colores

- **Navy Profundo**: `#0B1D3D` — Color principal corporativo
- **Celeste Tech**: `#38A8E0` — Acento tecnológico
- **Blanco**: `#FFFFFF` — Texto sobre fondos oscuros
- **Gris Oscuro**: `#1A1A1A` — Texto secundario

## 🔧 Configuración

### Cambiar el dominio o título
Edita `client/index.html`:
```html
<title>Grupo Tech Tunquén</title>
```

### Actualizar URLs de empresas
En `client/src/components/sections/Services.tsx` y `Companies.tsx`:
```typescript
link: "https://www.vigilance.cl",  // Vigilance
link: "https://www.cleanify.cl",   // Cleanify
link: "https://www.oncefuegos.cl", // OnceFuegos
```

### Modificar formulario de contacto
El formulario está en `client/src/components/sections/Contact.tsx`. Actualmente es un demo (muestra un toast). Para enviar emails reales:
1. Conecta un servicio como **SendGrid**, **Mailgun** o **Resend**
2. Crea un endpoint backend en `server/index.ts`
3. Actualiza el handler `handleSubmit` en Contact.tsx

## 📱 Responsive Design

- **Móvil**: 320px — 640px
- **Tablet**: 641px — 1024px
- **Escritorio**: 1025px+

Usa `md:` y `lg:` breakpoints de Tailwind para ajustes.

## 🚢 Despliegue

### Opción 1: Vercel (recomendado para Next.js)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción 3: GitHub Pages
Configura `vite.config.ts`:
```typescript
export default {
  base: '/grupo-tech-tunquen/',
  // ...
}
```

Luego:
```bash
pnpm build
# Sube la carpeta `dist/` a GitHub Pages
```

### Opción 4: Servidor tradicional (Apache, Nginx)
1. Ejecuta `pnpm build`
2. Sube el contenido de `dist/` a tu servidor web
3. Configura el servidor para servir `index.html` en todas las rutas (SPA)

**Nginx ejemplo**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 📚 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 19.x | Framework UI |
| Vite | 7.x | Bundler y dev server |
| Tailwind CSS | 4.x | Estilos utilitarios |
| TypeScript | 5.6 | Tipado estático |
| shadcn/ui | Latest | Componentes UI |
| Lucide React | 0.45+ | Iconografía |
| Framer Motion | 12.x | Animaciones |
| Wouter | 3.x | Enrutamiento ligero |

## 🛠️ Scripts Disponibles

```bash
pnpm dev        # Inicia servidor de desarrollo
pnpm build      # Construye para producción
pnpm preview    # Previsualiza la build
pnpm check      # Verifica tipos TypeScript
pnpm format     # Formatea código con Prettier
```

## 📝 Notas Importantes

1. **Imágenes**: Las imágenes están en `client/public/assets/`. Para cambiarlas, reemplaza los archivos PNG.

2. **Favicon**: El favicon está en `client/public/favicon.ico`. Para cambiar, reemplaza el archivo.

3. **Fuentes**: Se usan Google Fonts (Montserrat, DM Sans, JetBrains Mono). Están cargadas en `client/index.html`.

4. **Formulario de Contacto**: Actualmente es un demo. Para hacerlo funcional, necesitas:
   - Un backend que procese los datos
   - Un servicio de email (SendGrid, Mailgun, etc.)
   - Actualizar el handler en `Contact.tsx`

## 🐛 Solución de Problemas

### El sitio no carga en desarrollo
```bash
# Limpia caché y reinstala
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Error de puertos ocupados
```bash
# Cambia el puerto en vite.config.ts o usa:
pnpm dev -- --port 3000
```

### Imágenes no aparecen
- Verifica que `client/public/assets/` contenga los archivos PNG
- En el código, usa rutas relativas: `/assets/nombre.png`

## 📞 Contacto y Soporte

- **Vigilance** (Seguridad): https://www.vigilance.cl
- **Cleanify** (Aseo): https://www.cleanify.cl
- **OnceFuegos** (Regalos): https://www.oncefuegos.cl

---

**Versión**: 1.0.0  
**Última actualización**: Mayo 2026  
**Licencia**: MIT
redeploy
