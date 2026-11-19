# Taberna Ventura · web estática (HTML + CSS + JS, sin dependencias)

## Estructura
```
index.html          Página principal (superficie → fondo marino, cadena y logotipo)
carta/index.html    Carta digital (subpágina independiente: /carta/)
css/sea.css         Escena submarina, cabecera, botones y visor de fotos (compartido)
css/home.css        Estilos del inicio     |  css/carta.css  Estilos de la carta
js/config.js        ★ Teléfono, dirección, Maps, Instagram, horarios, textos
js/sea.js           Capa submarina (luz, cáusticas, peces), profundidad y cadena
js/lightbox.js      Visor de fotografías (cualquier elemento con data-big)
js/home.js          Contacto del inicio   |  js/carta.js  Buscador, alérgenos, tarifa, compartir
data/carta.js       ★ Platos, precios y alérgenos
img/                Logotipo, favicon, foto del plato; img/platos/ = miniaturas de la carta
```

## Despliegue en Hostinger
1. hPanel → Sitios web → tu dominio → **Administrador de archivos** (o FTP).
2. Abre `public_html` y sube **el contenido** de esta carpeta (no la carpeta en sí): `index.html`, `carta/`, `css/`, `js/`, `data/`, `img/`.
3. Visita `https://tudominio.com/` y `https://tudominio.com/carta/`.
4. Código QR: apúntalo a `https://tudominio.com/carta/`.

## Datos de contacto (js/config.js)
Teléfono, enlace tel:, Google Maps, Instagram y horarios ya están cargados. `direccion` está vacía a propósito (solo se usa el enlace oficial de Maps). Lo que se deje vacío no se muestra.
Opcional: `lema`, `presentacion` (textos provisionales) y `urlCarta` (enlace a compartir).

## Añadir fotos a platos (data/carta.js)
Sube la foto a `img/platos/` y añade al plato `imagen: 'img/platos/mi-foto.jpg'` (opcional `imagenGrande`, `imagenAlt`).
Sin `imagen` el plato se muestra solo con texto. Al pulsar la foto se abre ampliada (Escape, clic fuera o «Cerrar»). Recomendado: ~320 px de ancho, JPG/WebP.

## Carta: qué se ha omitido (alcohol)
Secciones Cervezas, Vinos y Cocktel; en Café: bombón con coña y carajillos; en Temporal: cubadas y Nordes martimiller.
Todo lo demás conserva nombres, descripciones, precios y alérgenos del HTML original.

## Lista de comprobación tras publicar
- [ ] Inicio y `/carta/` cargan; logotipo y foto se ven; la foto se amplía al pulsarla.
- [ ] Carta: arranca en «Sala + Terraza»; «Solo Sala» y «Solo Terraza» (panel «Precios y alérgenos») cambian al instante.
- [ ] Buscador (icono de lupa), filtros de alérgenos y «Quitar filtros».
- [ ] Barra de categorías con resaltado al desplazarse; «Compartir» (menú nativo en móvil, copia el enlace en ordenador).
- [ ] `tel:+34919357618`, Google Maps e Instagram abren bien; horarios correctos.
- [ ] Probado a 320, 360, 390 y 430 px, y con «reducir movimiento» activado.
