/* CONFIGURACIÓN DE TABERNA VENTURA
 * Todos los datos de contacto y horarios viven aquí. Lo que se deje vacío ('' o []) no se muestra.
 */
window.SITE_CONFIG = {
  nombre: 'Taberna Ventura',

  lema: 'Cocina de taberna para compartir, con el mar de fondo.',
  presentacion: [
    'Taberna Ventura es un sitio cercano y sin pretensiones: de los de sentarse a gusto, pedir para compartir y quedarse un rato.',
    'Tienes sala y terraza, y una carta pensada para cualquier momento del día.'
  ],

  // Contacto
  telefono: '919 35 76 18',
  telefonoHref: 'tel:+34919357618',
  direccion: '',   // sin dirección escrita: la ubicación se abre con el enlace oficial de Google Maps
  mapsUrl: 'https://maps.app.goo.gl/g258uqAEMeAGHqGz7',
  mapsEmbedUrl: '',
  instagram: 'https://www.instagram.com/taberna_ventura_/',
  instagramUsuario: '@taberna_ventura_',

  // Horarios (índice 0 = lunes … 6 = domingo; se usa para resaltar el día actual)
  horarios: [
    { dias: 'Lunes',     horario: 'Cerrado' },
    { dias: 'Martes',    horario: '10:30–00:00' },
    { dias: 'Miércoles', horario: '10:30–00:00' },
    { dias: 'Jueves',    horario: '10:30–00:00' },
    { dias: 'Viernes',   horario: '10:30–01:00' },
    { dias: 'Sábado',    horario: '11:00–01:00' },
    { dias: 'Domingo',   horario: '11:00–24:00' }
  ],

  // Opcional: URL pública de la carta para "Compartir" (por defecto, la de la página actual)
  urlCarta: ''
};
