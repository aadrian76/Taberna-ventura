# Taberna Ventura — web estática

HTML + CSS + JavaScript sin dependencias ni compilación. Solo carga tipografías de Google Fonts (Instrument Serif y Hanken Grotesk).

## Estructura
```
index.html            Página principal
carta.html            Carta digital
assets/css/styles.css Estilos de las dos páginas
assets/js/config.js   ← Teléfono, Instagram, Maps, horarios, platos de portada
assets/js/carta-data.js ← Platos, precios y alérgenos (un plato por línea)
assets/js/site.js     Cabecera, contacto, portada
assets/js/carta.js    Buscador, filtros, selector de precios, lightbox
assets/img/           Logotipos (y aquí van las fotos)
```

## Publicar en Hostinger
1. hPanel → Sitios web → tu dominio → **Administrador de archivos**.
2. Entra en `public_html` y sube el contenido de la carpeta (no la carpeta en sí): `index.html`, `carta.html` y `assets/`.
3. Abre tu dominio y comprueba `/carta.html`.

## Qué se edita y dónde
- **Contacto y horarios:** `assets/js/config.js` (se actualizan en cabecera, contacto y pie).
- **Carta:** `assets/js/carta-data.js`. Campos: `nombre`, `desc`, `alergenos`, `sala`, `terraza`.
- **Añadir foto a un plato:** sube la imagen a `assets/img/` y añade `foto:"assets/img/burrata.jpg"` a ese plato. Aparece en la carta (se amplía al pulsarla) y, si es el primero de `destacados`, en la portada con tratamiento destacado.
- **Foto del local:** `fotos.local.src` en `config.js`.
- Mantén las fotos por debajo de ~300 KB (JPG o WebP, ancho 1600 px).
