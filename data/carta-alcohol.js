/* DATOS DE ALCOHOL — se carga justo después de data/carta.js (ver carta/index.html).
 * Añade las secciones Cervezas, Vinos y Cocktel, y restaura en Café (café bombón con coña y carajillos)
 * y en Temporal (cubadas y Nordes martimiller). Nombres, descripciones y precios copiados tal cual del HTML original.
 * Para volver a ocultar el alcohol basta con quitar la etiqueta <script> de data/carta-alcohol.js en carta/index.html.
 */
(function () {
  var S = window.CARTA.secciones;
  var byId = function (id) { for (var i = 0; i < S.length; i++) if (S[i].id === id) return S[i]; return null; };
  if (byId('cervezas')) return; // ya aplicado

  // Café y Temporal: lista completa original (mismo orden que el HTML original)
  var cafe = byId('cafe'), temporal = byId('temporal');
  if (cafe) cafe.items = [
    { name: 'Café Solo', sala: '1,90€', terraza: '2,00€' },
    { name: 'Colacao', sala: '2,00€', terraza: '2,10€' },
    { name: 'Cortado', sala: '1,90€', terraza: '2,00€' },
    { name: 'Café con leche', sala: '1,90€', terraza: '2,00€' },
    { name: 'Café con leche y hielo', sala: '1,90€', terraza: '2,00€' },
    { name: 'Café americano', sala: '1,90€', terraza: '2,00€' },
    { name: 'Café Americano con hielo', sala: '1,90€', terraza: '2,00€' },
    { name: 'Café Bombón', sala: '2,60€', terraza: '2,70€' },
    { name: 'Café bombón con coña', sala: '3,20€', terraza: '3,30€' },
    { name: 'Chocolate', sala: '2,30€', terraza: '2,40€' },
    { name: 'Vaso de leche', sala: '1,30€', terraza: '1,40€' },
    { name: 'Carajillo Crema  de ruavieja', sala: '2,50€', terraza: '2,60€' },
    { name: 'Carrajillo Baileys', sala: '2,80€', terraza: '2,90€' },
    { name: 'Carajillo Veterano', sala: '2,40€', terraza: '2,50€' },
    { name: 'Carajillo Terry', sala: '2,40€', terraza: '2,50€' },
    { name: 'Carrajillo Torre 5', sala: '2,40€', terraza: '2,50€' },
    { name: 'Inf. Rooibos naranja', sala: '2,00€', terraza: '2,10€' },
    { name: 'Manzanilla', sala: '2,00€', terraza: '2,10€' },
    { name: 'Poleo Menta', sala: '2,00€', terraza: '2,10€' },
    { name: 'Té Hierbabuena', sala: '2,00€', terraza: '2,10€' },
    { name: 'Te verde ginsen', sala: '2,00€', terraza: '2,10€' },
    { name: 'Te rojo pu-erh', sala: '2,00€', terraza: '2,10€' },
    { name: 'Te negro', sala: '2,00€', terraza: '2,10€' },
    { name: 'Te frutas', sala: '2,00€', terraza: '2,10€' },
    { name: 'Doble de Cafe', sala: '2,50€', terraza: '2,60€' }
  ];
  if (temporal) temporal.items = [
    { name: 'Tappe Pequño', sala: '0,20€', terraza: '0,20€' },
    { name: 'Tappe Mediana', sala: '0,30€', terraza: '0,30€' },
    { name: 'Tappe Grande', sala: '0,50€', terraza: '0,50€' },
    { name: 'Bolsa', sala: '0,20€', terraza: '0,20€' },
    { name: 'Extra Mantequilla Melmerada Aceite', sala: '0,20€', terraza: '0,20€' },
    { name: 'Cubada normal con refresco con Vaso de plastico', sala: '7,00€', terraza: '7,00€' },
    { name: 'Cubada de Puerto india tranquility seagram legentario', sala: '7,50€', terraza: '7,50€' },
    { name: 'Cubada especial Chivas black label', sala: '13,00€', terraza: '13,30€' },
    { name: 'Nordes martimiller', sala: '9,00€', terraza: '9,30€' }
  ];

  // Secciones nuevas, justo después de Café y antes de Ensaladas
  var nuevas = [
    { id: 'cervezas', title: 'Cervezas', items: [
    { name: 'Doble de cerveza', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Doble De Cerveza Con Limon', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Doble De Cerveza Con Casera', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Doble De Cerveza Sin Alcohol', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Doble De Cerveza Sin con Limon', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Doble De Cerveza sin Con Casera', desc: '33cl', sala: '3,00€', terraza: '3,10€' },
    { name: 'Jarra de cerveza', desc: '50Cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Jarra De Cerveza Con Limon', desc: '50cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Jarra De Cerveza Con Casera', desc: '50cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Jarra De Cerveza Sin Alcohol', desc: '50cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Jarra De Cerveza Sin Con Limon', desc: '50cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Jarra De Cerveza Sin Con Casera', desc: '50cl', sala: '3,90€', terraza: '4,00€' },
    { name: 'Tercio de Mahou', sala: '3,10€', terraza: '3,20€' },
    { name: 'Tercio de Mahou 0.0', sala: '3,10€', terraza: '3,20€' },
    { name: 'Radler', sala: '3,10€', terraza: '3,20€' },
    { name: 'Tercio sin gluten', sala: '3,20€', terraza: '3,30€' },
    { name: 'Tercio Mahou Reserva', sala: '3,50€', terraza: '3,60€' },
    { name: 'Alhambra Reserva Verde', sala: '3,30€', terraza: '3,40€' },
    { name: 'Alhambra Reserva Roja', sala: '3,40€', terraza: '3,50€' },
    { name: 'Tercio Maestra', sala: '3,40€', terraza: '3,50€' },
    { name: 'Tercio Coronita', sala: '3,30€', terraza: '3,40€' },
    { name: '1906', sala: '3,30€', terraza: '3,40€' },
    { name: 'Lucia', sala: '3,10€', terraza: '3,20€' },
    { name: 'Calimocho', sala: '3,80€', terraza: '3,90€' },
    { name: 'Tinto de Verano', desc: 'Vaso sidra', sala: '3,00€', terraza: '3,10€' },
    { name: 'Tinto verano de Ventura', sala: '4,50€', terraza: '4,60€' },
    { name: 'Mojito', sala: '6,80€', terraza: '7,10€' },
    { name: 'Vermut', sala: '3,30€', terraza: '3,40€' },
    { name: 'Radron  De Manzana', sala: '2,80€', terraza: '2,90€' },
    { name: 'Aperol', sala: '5,50€', terraza: '5,80€' }
  ] },
    { id: 'vinos', title: 'Vinos', items: [
    { name: 'Copa de Rioja crianza', sala: '3,00€', terraza: '3,10€' },
    { name: 'Copa de Rioja crianza Lan', sala: '3,20€', terraza: '3,30€' },
    { name: 'Copa de Ramón Bilbao', sala: '3,70€', terraza: '3,80€' },
    { name: 'Copa de Ribera', sala: '3,00€', terraza: '3,10€' },
    { name: 'Copa de verdejo', sala: '2,90€', terraza: '3,00€' },
    { name: 'Copa de verdejo lan', sala: '3,20€', terraza: '3,30€' },
    { name: 'Copa De Albariño', sala: '3,30€', terraza: '3,40€' },
    { name: 'Copa de vino Godello', sala: '3,50€', terraza: '3,60€' },
    { name: 'Copa de Alma', sala: '3,00€', terraza: '3,10€' },
    { name: 'Copa dulce maria', sala: '2,90€', terraza: '3,00€' },
    { name: 'Copa de rosado', sala: '2,70€', terraza: '2,80€' },
    { name: 'Vino Con Casera', sala: '2,80€', terraza: '3,10€' },
    { name: 'Botella De Vino Verdejo', sala: '15,00€', terraza: '15,50€' },
    { name: 'Botella Alma', sala: '15,00€', terraza: '15,30€' },
    { name: 'Botella Vino Arnaiz Ribera', sala: '15,00€', terraza: '15,50€' },
    { name: 'Botella Vino Rioja Crianza Arnaiz', sala: '15,00€', terraza: '15,50€' },
    { name: 'Botella Vino Lan', sala: '17,00€', terraza: '17,50€' },
    { name: 'Botella Ramon Bilbao', sala: '19,00€', terraza: '19,50€' },
    { name: 'Botella de vino dulce maría', sala: '15,00€', terraza: '15,50€' },
    { name: 'Caipiriña', sala: '8,00€', terraza: '8,30€' }
  ] },
    { id: 'cocktel', title: 'Cocktel', items: [
    { name: 'Nordes martimiller', sala: '9,00€', terraza: '9,30€' },
    { name: 'Mojito con espuma', sala: '6,80€', terraza: '7,10€' },
    { name: 'Cairipina de maracuya', sala: '7,60€', terraza: '7,90€' },
    { name: 'Piña colada', desc: 'Preparada en una piña fresca', sala: '10,50€', terraza: '10,80€' }
  ] }
  ];
  var pos = S.indexOf(cafe) + 1;
  S.splice.apply(S, [pos, 0].concat(nuevas));
})();
