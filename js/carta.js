/* Carta: render editorial desde data/carta.js, buscador, alérgenos, tarifa, categorías, compartir */
(function () {
  var D = window.CARTA, C = window.SITE_CONFIG || {};
  var AL = {}; D.alergenos.forEach(function (a) { AL[a.id] = a; });
  var SECS = D.secciones;
  var $ = function (s) { return document.querySelector(s); };
  var menu = $('#menu'), tabs = $('#tabs'), q = $('#q'), bar = $('#bar');
  var state = { q: '', ex: {}, active: null, lock: null };

  var norm = function (s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var exList = function () { return Object.keys(state.ex).filter(function (k) { return state.ex[k]; }); };
  var alLabel = function (id) { return AL[id] ? AL[id].label : id; };

  function itemVisible(it) {
    if (it.allergens && it.allergens.some(function (a) { return state.ex[a]; })) return false;
    if (!state.q) return true;
    return norm(it.name + ' ' + (it.desc || '')).indexOf(state.q) > -1;
  }
  function menuDiaVisible(s) {
    if (!state.q) return true;
    var t = s.menuDia.courses.map(function (c) { return c.heading + ' ' + c.options.join(' '); }).join(' ');
    return norm(s.title + ' ' + t).indexOf(state.q) > -1;
  }

  function dish(it) {
    var ph = '';
    if (it.imagen) { // solo se pinta si existe una fotografía real
      var big = '../' + (it.imagenGrande || it.imagen), alt = it.imagenAlt || 'Foto de ' + it.name;
      ph = '<button class="dish__ph zoomable" type="button" data-big="' + esc(big) + '" data-alt="' + esc(alt) + '" aria-label="Ampliar foto: ' + esc(it.name) + '"><img src="../' + esc(it.imagen) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async" width="320" height="429"></button>';
    }
    var al = (it.allergens || []).length ? '<p class="al">Alérgenos: ' + it.allergens.map(function (a) { return esc(alLabel(a).toLowerCase()); }).join(', ') + '</p>' : '';
    return '<li class="dish' + (ph ? ' has-ph' : '') + '">' + ph + '<div class="dish__txt"><h3>' + esc(it.name) + '</h3>' + (it.desc ? '<p class="desc">' + esc(it.desc) + '</p>' : '') + al + '</div>' +
      '<div class="pr"><b class="s">' + esc(it.sala) + '</b><b class="t">' + esc(it.terraza) + '</b></div></li>';
  }

  function render() {
    var vis = [], html = '';
    SECS.forEach(function (s) {
      var open = '<section class="sec" id="' + s.id + '" aria-labelledby="h-' + s.id + '">';
      if (s.type === 'menu-dia') {
        if (!menuDiaVisible(s)) return;
        vis.push(s.id);
        var m = s.menuDia;
        html += open + '<div class="sec__h"><h2 id="h-' + s.id + '">' + esc(s.title) + '</h2></div><div class="mdia__top"><span class="mdia__p">' + esc(m.price) + '</span></div>' +
          m.courses.map(function (c) { return '<div class="course"><h3>' + esc(c.heading) + '</h3><ul>' + c.options.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>'; }).join('') +
          '<p class="mnote">' + esc(m.note) + '</p></section>';
        return;
      }
      var items = (s.items || []).filter(itemVisible);
      var extras = (!state.q && !exList().length) ? (s.extraSections || []) : [];
      if (!items.length && !extras.length) return;
      vis.push(s.id);
      html += open + '<div class="sec__h"><div style="flex:1;min-width:0"><h2 id="h-' + s.id + '">' + esc(s.title) + '</h2>' + (s.subtitle ? '<small>' + esc(s.subtitle) + '</small>' : '') + '</div>' +
        (items.length ? '<div class="cols" aria-hidden="true"><span class="s">Sala</span><span class="t">Terraza</span></div>' : '') + '</div>' +
        '<ul class="list">' + items.map(dish).join('') + extras.map(function (e) { return '<li class="note"><h3>' + esc(e.title) + '</h3><p>' + esc(e.note) + '</p></li>'; }).join('') + '</ul></section>';
    });
    menu.innerHTML = html;
    $('#empty').hidden = vis.length > 0;
    renderTabs(vis);
    updateActive();
  }

  function renderTabs(vis) {
    tabs.innerHTML = SECS.map(function (s) {
      var on = vis.indexOf(s.id) > -1;
      return '<button type="button" class="tab" data-t="' + s.id + '"' + (on ? '' : ' disabled') + (state.active === s.id ? ' aria-current="true"' : '') + '>' + esc(s.title) + '</button>';
    }).join('');
    var cur = tabs.querySelector('[aria-current]'); if (cur) centerTab(cur);
  }
  function centerTab(el) {
    var l = el.offsetLeft, r = l + el.offsetWidth, v0 = tabs.scrollLeft, v1 = v0 + tabs.clientWidth;
    if (l >= v0 + 24 && r <= v1 - 24) return; // ya visible: no mover
    tabs.scrollTo({ left: l - tabs.clientWidth / 2 + el.offsetWidth / 2, behavior: 'smooth' });
  }

  function updateActive() {
    var secs = menu.querySelectorAll('.sec'), line = bar.offsetHeight + 40, cur = secs.length ? secs[0].id : null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= line) cur = s.id; });
    if (state.lock && document.getElementById(state.lock)) cur = state.lock;
    if (cur === state.active) return;
    state.active = cur;
    tabs.querySelectorAll('.tab').forEach(function (p) { var on = p.dataset.t === cur; if (on) { p.setAttribute('aria-current', 'true'); centerTab(p); } else p.removeAttribute('aria-current'); });
  }

  // --- Paneles: buscador y precios/alérgenos ---
  var searchBtn = $('#searchBtn'), searchRow = $('#searchRow'), optBtn = $('#optBtn'), optPanel = $('#optPanel');
  function toggle(btn, panel, other, otherPanel) {
    var open = panel.hidden;
    panel.hidden = !open; btn.setAttribute('aria-expanded', open);
    if (open && other) { otherPanel.hidden = true; other.setAttribute('aria-expanded', 'false'); }
    if (open && panel === searchRow) q.focus();
    setBar();
  }
  searchBtn.addEventListener('click', function () { toggle(searchBtn, searchRow, optBtn, optPanel); });
  optBtn.addEventListener('click', function () { toggle(optBtn, optPanel, searchBtn, searchRow); });

  // --- Tarifa (inmediato, sin re-render) ---
  document.querySelectorAll('.seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      menu.dataset.mode = b.dataset.mode;
      document.querySelectorAll('.seg button').forEach(function (o) { o.setAttribute('aria-checked', o === b ? 'true' : 'false'); });
    });
  });

  // --- Buscador ---
  q.addEventListener('input', function () { state.q = norm(q.value.trim()); render(); });

  // --- Alérgenos ---
  $('#algList').innerHTML = D.alergenos.map(function (a) { return '<button type="button" class="alg" data-a="' + a.id + '" aria-pressed="false">' + esc(a.label) + '</button>'; }).join('');
  $('#algList').addEventListener('click', function (e) {
    var b = e.target.closest('.alg'); if (!b) return;
    var id = b.dataset.a; state.ex[id] = !state.ex[id]; b.setAttribute('aria-pressed', state.ex[id] ? 'true' : 'false');
    algUI(); render();
  });
  function algUI() {
    var l = exList(), badge = $('#algBadge');
    badge.hidden = !l.length; badge.textContent = l.length;
    $('#algReset').hidden = !l.length;
  }
  $('#algReset').addEventListener('click', function () {
    state.ex = {}; document.querySelectorAll('.alg').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); }); algUI(); render();
  });

  // --- Categorías ---
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    var t = document.getElementById(b.dataset.t); if (!t) return;
    state.lock = b.dataset.t; updateActive();
    t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + b.dataset.t);
  });
  ['wheel', 'touchstart', 'keydown'].forEach(function (ev) { addEventListener(ev, function () { state.lock = null; }, { passive: true }); });
  function setBar() { document.body.style.setProperty('--bar', bar.offsetHeight + 'px'); }
  if ('ResizeObserver' in window) new ResizeObserver(setBar).observe(bar);

  var tick = false;
  addEventListener('scroll', function () {
    if (tick) return; tick = true;
    requestAnimationFrame(function () { tick = false; updateActive(); });
  }, { passive: true });

  // --- Compartir ---
  var toast = $('#toast'), tt;
  function say(m) { toast.textContent = m; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('on'); }, 2600); }
  $('#shareBtn').addEventListener('click', function () {
    var url = C.urlCarta || location.href.split('#')[0], title = 'Carta de ' + (C.nombre || 'Taberna Ventura');
    if (navigator.share) { navigator.share({ title: title, url: url }).catch(function () {}); return; }
    function fallback() {
      var t = document.createElement('textarea'); t.value = url; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} document.body.removeChild(t); say(ok ? 'Enlace copiado' : 'No se pudo copiar: ' + url);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { say('Enlace copiado'); }, fallback); else fallback();
  });

  render(); setBar();
  if (location.hash) { var h = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (h) setTimeout(function () { h.scrollIntoView(); }, 60); }
})();
