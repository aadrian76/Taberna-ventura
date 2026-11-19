/* Inicio: pinta textos y contacto desde js/config.js. Solo se muestra lo que tiene datos reales. */
(function () {
  var C = window.SITE_CONFIG || {};
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var I = {
    tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>'
  };

  var lema = document.querySelector('[data-cfg="lema"]');
  if (C.lema && lema) lema.textContent = C.lema;
  var about = $('#about-text');
  if (C.presentacion && C.presentacion.length && about) about.innerHTML = C.presentacion.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  var cols = [];
  // Columna 1: cómo contactar
  var a = [];
  var tel = (C.telefono || '').trim();
  if (tel) a.push('<p class="tel">' + esc(tel) + '</p>');
  var btns = [];
  if (tel) btns.push('<a class="btn btn--gold" href="' + esc(C.telefonoHref || 'tel:' + tel.replace(/[^\d+]/g, '')) + '">' + I.tel + 'Llamar</a>');
  var maps = (C.mapsUrl || '').trim(), dir = (C.direccion || '').trim();
  if (!maps && dir) maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(dir);
  if (maps) btns.push('<a class="btn" href="' + esc(maps) + '" target="_blank" rel="noopener">' + I.pin + 'Cómo llegar</a>');
  var ig = (C.instagram || '').trim();
  if (ig) {
    var igUrl = /^https?:\/\//i.test(ig) ? ig : 'https://www.instagram.com/' + ig.replace(/^@/, '').replace(/\/$/, '') + '/';
    btns.push('<a class="btn" href="' + esc(igUrl) + '" target="_blank" rel="noopener">' + I.ig + 'Instagram</a>');
  }
  if (dir) a.push('<p>' + esc(dir) + '</p>');
  if (btns.length) a.push('<div class="actions">' + btns.join('') + '</div>');
  if (a.length) cols.push('<div><h3>Teléfono y ubicación</h3>' + a.join('') + '</div>');

  // Columna 2: horarios (se resalta el día actual; lunes = índice 0)
  var hrs = (C.horarios || []).filter(function (h) { return h && h.dias && h.horario; });
  if (hrs.length) {
    var today = (new Date().getDay() + 6) % 7;
    cols.push('<div><h3>Horario</h3><ul class="hours">' + hrs.map(function (h, i) { return '<li' + (hrs.length === 7 && i === today ? ' class="today"' : '') + '><span>' + esc(h.dias) + '</span><span>' + esc(h.horario) + '</span></li>'; }).join('') + '</ul></div>');
  }
  $('#contact-grid').innerHTML = cols.join('');
})();
