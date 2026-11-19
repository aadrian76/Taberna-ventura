/* Visor de fotografías: cualquier elemento con data-big (+ data-alt) se abre ampliado, sin salir de la página. */
(function () {
  var lb = document.createElement('dialog');
  lb.className = 'lb';
  lb.setAttribute('aria-label', 'Fotografía ampliada');
  lb.innerHTML = '<button class="lb__x" type="button" aria-label="Cerrar imagen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>Cerrar</button><img alt="">';
  document.body.appendChild(lb);
  var im = lb.querySelector('img'), opener = null;

  // Escala la foto para ocupar casi toda la pantalla sin deformarla (proporción original)
  function fit() {
    if (!im.naturalWidth) return;
    var k = Math.min(innerWidth * 0.96 / im.naturalWidth, (innerHeight - 96) / im.naturalHeight, 2);
    im.style.width = Math.round(im.naturalWidth * k) + 'px';
    im.style.height = Math.round(im.naturalHeight * k) + 'px';
  }
  im.addEventListener('load', fit);
  addEventListener('resize', function () { if (lb.open) fit(); });

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-big]');
    if (!t || !lb.showModal) return;
    e.preventDefault();
    opener = t;
    im.style.width = im.style.height = '';
    im.alt = t.getAttribute('data-alt') || '';
    im.src = t.getAttribute('data-big');
    lb.showModal();
    if (im.complete) fit();
  });
  // Cerrar: botón, clic fuera de la imagen (Escape lo gestiona el propio <dialog>)
  lb.addEventListener('click', function (e) { if (e.target !== im) lb.close(); });
  lb.addEventListener('close', function () { im.removeAttribute('src'); if (opener) opener.focus({ preventScroll: true }); });
})();
