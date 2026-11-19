/* Fondo submarino (capa independiente) + profundidad por scroll + cadena + aparición suave */
(function () {
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = matchMedia('(max-width: 700px)').matches;
  var dmin = parseFloat(document.body.getAttribute('data-depth-min')) || 0;

  // Peces: [y %, color, ancho px, duración s, retraso s, opacidad, ritmo de ondulación s, sentido (0 = derecha, 1 = izquierda)]
  // El sprite tiene la cabeza a la DERECHA: sin voltear nada hacia la derecha; hacia la izquierda se voltea (.rev).
  var FISH = [
    [22, '#cfe3e4', 30, 84, -20, .24, 9, 0],
    [40, '#9cc5c6', 40, 112, -64, .20, 11, 1],
    [62, '#cfe3e4', 22, 96, -35, .22, 8, 0],
    [80, '#9cc5c6', 34, 128, -90, .18, 12, 1]
  ];
  var fishSvg = '<svg viewBox="0 0 40 24" aria-hidden="true"><path fill="currentColor" d="M38 12C32 2 19 2 13 12 19 22 32 22 38 12ZM13 12 2 4v16Z"/><circle cx="31" cy="10.4" r="1.3" fill="#061D35"/></svg>';

  var isCarta = document.body.classList.contains('carta-page');
  function fishHtml(opa) {
    return FISH.slice(0, small ? 3 : FISH.length).map(function (f) {
      return '<div class="fish' + (f[7] ? ' rev' : '') + '" style="--y:' + f[0] + '%;--c:' + f[1] + ';--s:' + f[2] + 'px;--t:' + f[3] + 's;--dl:' + f[4] + 's;--o:' + (f[5] * opa).toFixed(2) + ';--b:' + f[6] + 's">' + fishSvg + '</div>';
    }).join('');
  }
  var sea = document.createElement('div');
  sea.className = 'sea';
  sea.setAttribute('aria-hidden', 'true');
  sea.innerHTML = '<div class="sea__deep"></div><div class="sea__beam sea__b1"></div><div class="sea__beam sea__b2"></div><div class="sea__beam sea__b3"></div><div class="sea__c1"></div><div class="sea__c2"></div>' +
    (isCarta ? '<div class="sea__fish">' + fishHtml(1) + '</div>' : '') + '<div class="sea__vig"></div>';
  document.body.insertBefore(sea, document.body.firstChild);
  // En el inicio los peces nadan solo en el agua libre bajo el lema: nunca cruzan textos ni fotos
  var hero = document.querySelector('.hero');
  if (hero && !isCarta) {
    var lane = document.createElement('div');
    lane.className = 'fish-lane';
    lane.setAttribute('aria-hidden', 'true');
    lane.innerHTML = fishHtml(1.7);
    hero.appendChild(lane);
  }

  // Profundidad (0 superficie → 1 fondo) y cadena que baja con el scroll
  var chain = document.querySelector('.chain-track');
  var ticking = false;
  function update() {
    ticking = false;
    var h = Math.max(1, root.scrollHeight - innerHeight);
    var d = Math.min(1, Math.max(dmin, scrollY / h * (1 - dmin) + dmin));
    root.style.setProperty('--d', d.toFixed(3));
    if (chain) {
      var drawn = scrollY + innerHeight * 0.85;
      chain.style.setProperty('--clip', Math.max(0, chain.offsetHeight - drawn) + 'px');
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  update();

  // Aparición suave
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }
})();
