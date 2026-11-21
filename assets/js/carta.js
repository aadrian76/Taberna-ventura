(() => {
  const { alergenos: AL, secciones: SEC } = window.CARTA, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ALN = Object.fromEntries(AL.map(a => [a.id, a])), st = { q: '', ex: new Set() };
  const root = $('#carta'), cats = $('#cats'), vacio = $('#vacio');
  const plato = (i, s) => `<li class="plato" data-q="${esc(norm(s.titulo + ' ' + i.nombre + ' ' + (i.desc || '')))}" data-al="${(i.alergenos || []).join(' ')}"><div class="info"><h3>${i.nombre}</h3>${i.desc ? `<p class="desc">${i.desc}</p>` : ''}${i.alergenos ? `<p class="al">${i.alergenos.map(a => `<span><i style="--c:${ALN[a].color}"></i>${ALN[a].nombre}</span>`).join('')}</p>` : ''}${i.foto ? `<button class="thumb" data-foto="${i.foto}" data-alt="${esc(i.nombre)}" aria-label="Ampliar foto de ${esc(i.nombre)}"><img src="${i.foto}" alt="${esc(i.nombre)}" loading="lazy"></button>` : ''}</div><div class="precio"><span data-l="Sala">${i.sala}</span><span data-l="Terraza">${i.terraza}</span></div></li>`;
  const menuDia = s => `<section class="seccion negro menu-dia" id="${s.id}" data-q="${esc(norm(s.titulo + ' ' + s.platos.map(p => p.titulo + ' ' + p.opciones.join(' ')).join(' ')))}"><div class="wrap md"><div><h2>${s.titulo}</h2><p class="md-precio">${s.precio}</p><p class="sub">${s.nota}</p></div><div class="md-cols">${s.platos.map(p => `<div><h3>${p.titulo}</h3><ul>${p.opciones.map(o => `<li>${o}</li>`).join('')}</ul></div>`).join('')}</div></div></section>`;
  const seccion = s => `<section class="seccion${s.fondo === 'negro' ? ' negro' : ''}" id="${s.id}"><div class="wrap"><h2>${s.titulo}</h2>${s.subtitulo ? `<p class="sub">${s.subtitulo}</p>` : ''}<ul class="lista">${s.items.map(i => plato(i, s)).join('')}</ul>${(s.extra || []).map(x => `<div class="extra" data-q="${esc(norm(x.titulo))}"><h3>${x.titulo}</h3><p class="sub">${x.nota}</p></div>`).join('')}</div></section>`;
  root.innerHTML = SEC.map(s => s.tipo === 'menu-dia' ? menuDia(s) : seccion(s)).join('');
  cats.innerHTML = SEC.map(s => `<a href="#${s.id}">${s.titulo}</a>`).join('');
  $$('img', root).forEach(i => i.complete ? i.classList.add('ok') : i.onload = () => i.classList.add('ok'));
  $('#chips').innerHTML = AL.map(a => `<button class="chip" data-id="${a.id}" aria-pressed="false"><i style="--c:${a.color}"></i>Sin ${a.nombre.toLowerCase()}</button>`).join('');

  function filtrar() {
    let hay = false;
    $$('section', root).forEach(sec => {
      let n = 0;
      if (sec.classList.contains('menu-dia')) n = !st.q || sec.dataset.q.includes(st.q) ? 1 : 0;
      else {
        $$('.plato', sec).forEach(li => { const ok = (!st.q || li.dataset.q.includes(st.q)) && !li.dataset.al.split(' ').some(a => st.ex.has(a)); li.hidden = !ok; n += ok; });
        $$('.extra', sec).forEach(x => { const ok = !st.q || x.dataset.q.includes(st.q); x.hidden = !ok; n += ok; });
      }
      sec.hidden = !n; $(`a[href="#${sec.id}"]`, cats).hidden = !n; hay ||= n > 0;
    });
    vacio.hidden = hay;
    $('#btnAl').textContent = st.ex.size ? `Alérgenos (${st.ex.size})` : 'Alérgenos';
  }
  $('#buscar').oninput = e => { st.q = norm(e.target.value.trim()); filtrar(); };
  $('#chips').onclick = e => {
    const b = e.target.closest('.chip'); if (!b) return;
    const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
    on ? st.ex.add(b.dataset.id) : st.ex.delete(b.dataset.id); filtrar();
  };
  const reset = () => { st.ex.clear(); st.q = ''; $('#buscar').value = ''; $$('.chip').forEach(c => c.setAttribute('aria-pressed', 'false')); filtrar(); };
  $('#resetAl').onclick = $('#resetVacio').onclick = reset;
  $('#btnAl').onclick = e => { const p = $('#panelAl'); p.hidden = !p.hidden; e.currentTarget.setAttribute('aria-expanded', !p.hidden); };
  $$('[data-modo]').forEach(b => b.onclick = () => {
    root.className = 'modo-' + b.dataset.modo;
    $$('[data-modo]').forEach(x => x.setAttribute('aria-pressed', x === b));
  });

  const barra = $('.barra');
  new ResizeObserver(() => document.documentElement.style.setProperty('--bh', barra.offsetHeight + 'px')).observe(barra);
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$('a', cats).forEach(a => a.removeAttribute('aria-current'));
    const a = $(`a[href="#${e.target.id}"]`, cats); a.setAttribute('aria-current', 'true');
    cats.scrollTo({ left: a.offsetLeft - cats.clientWidth / 2 + a.clientWidth / 2, behavior: 'smooth' });
  }), { rootMargin: '-30% 0px -65% 0px' });
  $$('section', root).forEach(s => io.observe(s));

  const lb = $('#lb'), lbi = $('img', lb); let ret;
  const cerrar = () => { lb.hidden = true; document.body.style.overflow = ''; ret && ret.focus(); };
  root.addEventListener('click', e => {
    const t = e.target.closest('.thumb'); if (!t) return;
    ret = t; lbi.src = t.dataset.foto; lbi.alt = t.dataset.alt; lb.hidden = false; document.body.style.overflow = 'hidden'; $('button', lb).focus();
  });
  lb.addEventListener('click', e => { if (e.target !== lbi) cerrar(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) cerrar(); });
  filtrar();
})();
