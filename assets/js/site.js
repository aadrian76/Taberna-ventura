(() => {
  const C = window.SITE_CONFIG, D = window.CARTA, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const get = p => p.split('.').reduce((o, k) => o && o[k], C);
  const fade = i => i.complete ? i.classList.add('ok') : (i.onload = () => i.classList.add('ok'));
  $$('[data-t]').forEach(e => e.textContent = get(e.dataset.t));
  $$('[data-h]').forEach(e => e.href = get(e.dataset.h));
  const nav = $('#nav'), bt = $('#burger');
  const abre = v => { nav.classList.toggle('open', v); bt.setAttribute('aria-expanded', v); };
  bt.onclick = () => abre(!nav.classList.contains('open'));
  nav.onclick = e => e.target.closest('a') && abre(false);
  addEventListener('keydown', e => e.key === 'Escape' && abre(false));
  const hoy = (new Date().getDay() + 6) % 7, h = $('#horas');
  if (h) h.innerHTML = C.horarios.map(([d, t], i) => `<tr${i === hoy ? ' aria-current="date"' : ''}><th scope="row">${d}</th><td>${t}</td></tr>`).join('');
  const f = C.fotos.local, fig = $('[data-foto="local"]');
  if (fig && f.src) { fig.innerHTML = `<img src="${f.src}" alt="${f.alt}" loading="lazy">`; fig.hidden = false; fade($('img', fig)); }
  const dest = $('#destacado');
  if (dest && D) {
    const todos = {}; D.secciones.forEach(s => (s.items || []).forEach(i => todos[i.nombre] = i));
    const [a, ...otros] = C.destacados.map(n => todos[n]).filter(Boolean);
    const pr = i => `<span class="pr"><span>Sala ${i.sala}</span><span>Terraza ${i.terraza}</span></span>`;
    if (a) { dest.innerHTML = (a.foto ? `<figure class="foto"><img src="${a.foto}" alt="${a.nombre}" loading="lazy"></figure>` : '') + `<h3>${a.nombre}</h3>${pr(a)}`; if (a.foto) fade($('img', dest)); }
    $('#otros').innerHTML = otros.map(i => `<li><span>${i.nombre}</span>${pr(i)}</li>`).join('');
    const md = D.secciones.find(s => s.tipo === 'menu-dia'), e = $('#mdp');
    if (md && e) e.textContent = md.precio;
  }
})();
