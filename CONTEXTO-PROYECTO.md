# Formation 360 - Contexto del Proyecto

Documento que resume el contexto, decisiones y trabajo realizado en el proyecto.

---

## Resumen del Proyecto

**Formation 360 Soccer & Life Program** es una landing page para una academia de fútbol con coaching integral. Pertenece a **Familia Noronha**. La web combina formación deportiva, mental, emocional y en valores.

---

## Estructura del Repositorio

```
formation360/
├── web/                    # Landing page React + Vite
│   ├── public/             # Assets estáticos (logo, favicon)
│   │   └── logo-formation360.png
│   ├── src/
│   │   ├── App.jsx         # Componente principal
│   │   ├── App.css         # Estilos
│   │   ├── SocialIcons.jsx # Iconos redes sociales (Facebook, Instagram, TikTok)
│   │   ├── translations.js # Textos ES/EN
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js      # base: '/formation360/' para GitHub Pages
├── .github/workflows/
│   └── deploy.yml          # Despliegue automático a GitHub Pages
├── logo-formation360.png   # Logo original
├── PROYECTO COACHING DEPORTIVO INTEGRAL.pdf
├── Proyecto1FORMATION 360 SOCCER.pdf
├── datos.pdf
├── CONTEXTO-PROYECTO.md    # Este archivo
├── DEPLOY.md               # Instrucciones de despliegue
└── .gitignore
```

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **React** | Frontend |
| **Vite** | Build y dev server |
| **CSS** | Variables, responsive, animaciones |
| **GitHub Pages** | Hosting público |
| **GitHub Actions** | CI/CD - build y deploy automático |

### Próximas tecnologías (planificadas)
- Node.js (backend)
- MySQL (base de datos)
- PWA (Progressive Web App)
- Notificaciones push
- Sistema de correos
- Intranet

---

## Contenido Extraído de los PDFs

### Filosofía (3 pilares)
1. **Ser Humano Primero** - Antes que futbolistas, son personas
2. **Formación 360°** - Técnico, táctico, físico, mental, emocional, espiritual
3. **Coaching Horizontal** - El entrenador como facilitador, no juez

### Estructura de sesión (60 min)
- Círculo de intención (5 min)
- Activación técnica consciente (15 min)
- Juegos tácticos con coaching (20 min)
- Físico emocional por estaciones (10 min)
- Visualización y gratitud (5 min)

### Servicios
- Entrenamiento técnico
- Entrenamiento mental
- Valores y carácter
- Seguimiento personalizado
- Staff técnico, coaching deportivo, preparación física
- Representación de jugadores
- Coaching para padres y alumnos

---

## Paleta de Colores (del logo)

| Variable | Color | Uso |
|----------|-------|-----|
| `--azul-oscuro` | #0a1628 | Fondo principal |
| `--azul-profundo` | #0d2847 | Gradientes |
| `--azul-vibrante` | #1e88e5 | Acentos, iconos |
| `--azul-electrico` | #42a5f5 | Hover, detalles |
| `--naranja` | #ff6b35 | CTAs, acentos |
| `--naranja-intenso` | #f4511e | Gradientes botones |
| `--blanco` | #ffffff | Texto principal |
| `--gris-plata` | #94a3b8 | Texto secundario |

---

## Decisiones de Diseño

### Responsive
- Breakpoints: 380px (móvil pequeño), 480px, 768px (móvil), 1024px (tablet)
- Header fijo con `scroll-margin-top` en secciones para evitar overlap
- Menú hamburguesa en móvil
- Logo circular en header, hero y footer

### Bilingüe (ES/EN)
- Archivo `translations.js` con todas las cadenas
- Selector ES/EN en header
- Preferencia guardada en `localStorage` (`formation360-lang`)

### Redes Sociales
- Facebook, Instagram, TikTok
- Iconos circulares en header (desktop) y footer
- URLs configurables en `src/SocialIcons.jsx`

### Logo
- Imagen con `border-radius: 50%` para forma circular
- Rutas con `import.meta.env.BASE_URL` para GitHub Pages

### Modo claro / oscuro
- Tema por defecto: **claro**. Selector sol/luna en header.
- Preferencia guardada en `localStorage` (`formation360-theme`).
- Variables CSS por tema: fondos, texto, tarjetas.

### Ubicación (Gainesville, GA · USA)
- Dirección: **3327 Harmony Church Rd, Gainesville, GA 30507**
- Mapa embebido (Google Maps) y botón "Ver en Google Maps"
- Enlaces "Cómo llegar" desde Norte (Dahlonega), Sur (Atlanta), Este (Athens), Oeste (Rome)

### Resultados / Beneficios
- 10 tarjetas con título + descripción (combinación de resultados originales + beneficios de imagen)
- Autoconocimiento, cohesión, potencial, gestión emocional, motivación, concentración, liderazgo, planificación, resiliencia, técnica/táctica
- Grid 3 columnas (desktop), 2 (tablet), 1 (móvil)

### Estructura de sesión (Programa)
- Solo **tiempo + título** (sin descripciones)
- Tiempo en círculos: número arriba, "min" abajo (formato uniforme)
- Línea de tiempo vertical con degradado azul–naranja

### Tarjetas con pastel (modo claro)
- En modo claro las tarjetas usan pasteles suaves por sección (azul, menta, lavanda, melocotón)
- Formulario de contacto con fondo pastel suave (`--form-bg`)

### Clase de prueba gratuita
- Bloque "Síguenos en redes" (Facebook, Instagram, TikTok) para generar seguidores
- Mensaje "Ven con un amigo" para animar a traer compañeros
- Iconos sociales dentro del módulo de contacto

### WhatsApp flotante
- Botón fijo esquina inferior derecha
- Número: **+1 678 381 5907**
- Enlace a `wa.me` con mensaje predeterminado
- Estilo verde WhatsApp (#25d366)

---

## GitHub Pages

- **URL en vivo:** https://liamfranki.github.io/formation360/
- **Base path:** `/formation360/` (configurado en `vite.config.js`)
- **Deploy:** Automático en cada push a `main`
- **Settings → Pages:** Source = GitHub Actions

---

## Correcciones Realizadas

1. **Logo no visible en producción** - Rutas absolutas `/logo-formation360.png` fallaban. Solución: usar `import.meta.env.BASE_URL + 'logo-formation360.png'`
2. **Workflow fallaba** - `npm ci` con cache causaba errores. Solución: usar `npm install` sin cache

---

## Cómo Actualizar

- **Redes sociales:** Editar `web/src/SocialIcons.jsx` → `SOCIAL_LINKS`
- **WhatsApp:** Editar `web/src/App.jsx` → `WA_NUMBER` y `WA_MESSAGE`
- **Textos:** Editar `web/src/translations.js`
- **Estilos:** Editar `web/src/App.css`
- **Deploy:** Hacer `git push origin main` → GitHub Actions despliega automáticamente

---

*Documento generado como contexto del proyecto Formation 360.*  
*Última actualización: Marzo 2026*
