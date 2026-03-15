# Cómo publicar Formation 360 en vivo con GitHub Pages

## Paso 1: Habilitar GitHub Pages en tu repositorio

1. Abre tu repositorio: **https://github.com/LiamFranKi/formation360**
2. Haz clic en **Settings** (Configuración)
3. En el menú izquierdo, busca y haz clic en **Pages**
4. En **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions**
   - (Si aparece "Deploy from a branch", cámbialo a **GitHub Actions**)

## Paso 2: Hacer push del workflow

El archivo `.github/workflows/deploy.yml` está configurado. Cada vez que hagas `git push` a la rama `main`, GitHub construirá y publicará automáticamente tu web.

Desde la carpeta del proyecto:

```bash
cd c:\formation360
git add .
git commit -m "Configurar despliegue GitHub Pages"
git push origin main
```

## Paso 3: Esperar el despliegue

1. Ve a la pestaña **Actions** de tu repositorio
2. Verás un workflow en ejecución "Deploy to GitHub Pages"
3. Cuando termine (icono verde ✓), tu web estará lista

## Paso 4: Tu link en vivo

Tu web estará disponible en:

**https://liamfranki.github.io/formation360/**

Cada vez que hagas `git push origin main`, GitHub Actions volverá a desplegar y en 1–2 minutos verás los cambios en esa misma URL. Puedes compartir este link con quien quieras.

---

## Si algo falla

- **404 en las rutas:** Ya está configurado el `base` en Vite para GitHub Pages
- **El workflow falla:** Revisa la pestaña Actions para ver el error concreto
- **La página tarda en aparecer:** Puede tardar 1-2 minutos tras el primer deploy
