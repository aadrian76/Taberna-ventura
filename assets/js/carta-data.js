/* DATOS DE LA CARTA — editar aquí para cambiar platos, precios o alérgenos.
   Cada plato ocupa una línea: nombre, desc (opcional), alergenos (opcional), sala, terraza.
   Para añadir una fotografía a un plato: foto:"assets/img/archivo.jpg" (se abre ampliada al pulsarla). */
window.CARTA = {
 alergenos: [{"id":"gluten","nombre":"Gluten","color":"#F3722C"},{"id":"lacteos","nombre":"Lácteos","color":"#6F3518"},{"id":"huevo","nombre":"Huevo","color":"#F8961E"},{"id":"pescado","nombre":"Pescado","color":"#274C9B"},{"id":"moluscos","nombre":"Moluscos","color":"#4CC9F0"},{"id":"crustaceos","nombre":"Crustáceos","color":"#00A8E8"},{"id":"cacahuetes","nombre":"Cacahuetes","color":"#7209B7"},{"id":"frutos_cascara","nombre":"Frutos de cáscara","color":"#E63956"}],
 secciones: [
  {"id":"menu-del-dia","titulo":"Menú del día","tipo":"menu-dia","fondo":"negro","platos":[{"titulo":"Primer plato","opciones":["Crema de calabacin","Revuelto de morcilla"]},{"titulo":"Segundo plato","opciones":["Secreto a la plancha","Muslos de pollo en salsa"]},{"titulo":"Postre o café","opciones":["Helado","Tarta de queso","Cafe"]}],"precio":"13,90€","nota":"** Preguntar por alérgenos al camarero **"},
  {"id":"desayunos","titulo":"Desayunos","items":[
    {"nombre":"Colacao+Bollería","sala":"3,00€","terraza":"3,10€"},
    {"nombre":"Pincho Tortilla","sala":"3,50€","terraza":"3,60€"},
    {"nombre":"Bollería","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Cafe + T.Jamón o con Atún","sala":"4,10€","terraza":"4,20€"},
    {"nombre":"Colacao+T.Jamón","sala":"4,20€","terraza":"4,30€"},
    {"nombre":"Cafe+M.Tostada","sala":"2,70€","terraza":"2,80€"},
    {"nombre":"Café+3Churros","sala":"2,90€","terraza":"3,00€"},
    {"nombre":"Café +2churros o 1 porra","sala":"2,70€","terraza":"2,80€"},
    {"nombre":"Café + bollería","sala":"2,90€","terraza":"3,00€"},
    {"nombre":"Churro","sala":"0,40€","terraza":"0,40€"},
    {"nombre":"Porra","sala":"0,80€","terraza":"0,80€"},
    {"nombre":"Tostada con tomate","sala":"2,00€","terraza":"2,00€"},
    {"nombre":"1/2 tostada con tomate","sala":"1,80€","terraza":"1,80€"}
  ]},
  {"id":"cafe","titulo":"Café","items":[
    {"nombre":"Café Solo","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Colacao","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Cortado","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Café con leche","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Café con leche y hielo","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Café americano","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Café Americano con hielo","sala":"1,90€","terraza":"2,00€"},
    {"nombre":"Café Bombón","sala":"2,60€","terraza":"2,70€"},
    {"nombre":"Chocolate","sala":"2,30€","terraza":"2,40€"},
    {"nombre":"Vaso de leche","sala":"1,30€","terraza":"1,40€"},
    {"nombre":"Inf. Rooibos naranja","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Manzanilla","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Poleo Menta","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Té Hierbabuena","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Te verde ginsen","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Te rojo pu-erh","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Te negro","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Te frutas","sala":"2,00€","terraza":"2,10€"},
    {"nombre":"Doble de Cafe","sala":"2,50€","terraza":"2,60€"}
  ]},
  {"id":"ensaladas","titulo":"Ensaladas","items":[
    {"nombre":"Ensalada De Tomate Con Burrata","sala":"13,00€","terraza":"13,30€"},
    {"nombre":"Ensalada Mixta","alergenos":["huevo","pescado"],"sala":"9,00€","terraza":"9,30€"},
    {"nombre":"Ensalada César","alergenos":["huevo","gluten","lacteos"],"sala":"11,00€","terraza":"11,30€"},
    {"nombre":"Ensalada de Salmón","alergenos":["pescado"],"sala":"10,00€","terraza":"10,30€"},
    {"nombre":"Ensaladilla rusa","alergenos":["huevo","pescado"],"sala":"9,00€","terraza":"9,30€"}
  ]},
  {"id":"raciones","titulo":"Raciones","items":[
    {"nombre":"Calamares a la romana","alergenos":["huevo","gluten","lacteos","moluscos"],"sala":"14,00€","terraza":"14,30€"},
    {"nombre":"Bienmesabe al estilo andaluz","alergenos":["pescado","huevo","gluten"],"sala":"15,00€","terraza":"15,30€"},
    {"nombre":"Gambas al ajillo","alergenos":["crustaceos","cacahuetes"],"sala":"15,00€","terraza":"15,30€"},
    {"nombre":"Gulas con gambas","alergenos":["crustaceos","pescado"],"sala":"14,00€","terraza":"14,30€"},
    {"nombre":"Alitas de pollo barbacoa","desc":"6 unidades","sala":"13,00€","terraza":"13,30€"},
    {"nombre":"Patatas bravas/alioli","sala":"8,00€","terraza":"8,30€"},
    {"nombre":"Pimientos de padrón fritos","sala":"8,00€","terraza":"8,30€"},
    {"nombre":"Huevos rotos","desc":"Con gulas, jamón o chistorra","alergenos":["huevo"],"sala":"13,00€","terraza":"13,30€"},
    {"nombre":"Croquetas de jamón Caseras","desc":"6 unidades","alergenos":["gluten","lacteos","huevo"],"sala":"10,00€","terraza":"10,30€"},
    {"nombre":"Croquetas de especial  morcilla","desc":"6 unidades","alergenos":["huevo","gluten","lacteos"],"sala":"10,00€","terraza":"10,30€"},
    {"nombre":"Chopitos","alergenos":["huevo","gluten","lacteos","moluscos"],"sala":"14,00€","terraza":"14,30€"},
    {"nombre":"Boquerones fritos","alergenos":["pescado","huevo","gluten","lacteos"],"sala":"12,00€","terraza":"12,30€"},
    {"nombre":"Morcilla","sala":"10,00€","terraza":"10,30€"},
    {"nombre":"Oreja","sala":"12,00€","terraza":"12,30€"},
    {"nombre":"Fritura andaluza","desc":"2 Personas","alergenos":["huevo","lacteos","gluten","pescado","moluscos"],"sala":"22,00€","terraza":"22,30€"},
    {"nombre":"Tempura de berenjena","alergenos":["gluten"],"sala":"11,00€","terraza":"11,30€"},
    {"nombre":"Morcilla en Tempura","alergenos":["gluten"],"sala":"11,00€","terraza":"11,30€"},
    {"nombre":"Fingers de pollo caseras","desc":"10 unidades","alergenos":["huevo","gluten","lacteos"],"sala":"13,00€","terraza":"13,30€"}
  ]},
  {"id":"sugerencias","titulo":"Sugerencias","fondo":"negro","items":[
    {"nombre":"Rejos crujientes","alergenos":["huevo","gluten"],"sala":"18,00€","terraza":"18,30€"},
    {"nombre":"Vieiras Ventura (4 Unidades)","desc":"huevas de salmón","sala":"12,00€","terraza":"12,30€"},
    {"nombre":"Fitete de pollo  parmigiana","desc":"Con salsa de tomate casera y queso,acompañado de patatas fritas","alergenos":["lacteos","gluten","huevo"],"sala":"20,00€","terraza":"20,30€"},
    {"nombre":"Carpaccio de berenjena con burrata y cecina","sala":"13,00€","terraza":"13,30€"},
    {"nombre":"Sepia a la Plancha","sala":"21,00€","terraza":"21,30€"},
    {"nombre":"Pata de pulpo a la plancha con fondant de patata","sala":"23,00€","terraza":"23,30€"},
    {"nombre":"Cachopo","sala":"26,00€","terraza":"26,30€"},
    {"nombre":"Patatas revolconas con chicharrones","sala":"15,00€","terraza":"15,30€"},
    {"nombre":"Pancenta en salsa Teriyaki","sala":"14,00€","terraza":"14,30€"},
    {"nombre":"Revuelto de setas","alergenos":["huevo"],"sala":"13,00€","terraza":"13,30€"},
    {"nombre":"Alcachofas a la Plancha(3 unidades)","sala":"14,50€","terraza":"14,80€"},
    {"nombre":"Huevo poche con setas trufadas","sala":"11,00€","terraza":"11,30€"}
  ]},
  {"id":"principales","titulo":"Principales","items":[
    {"nombre":"Chuletón de Ávila 300gr","sala":"22,50€","terraza":"22,80€"},
    {"nombre":"Chuletón de Avila 350gr","sala":"25,50€","terraza":"25,80€"},
    {"nombre":"Chuletón de Avila 400gr","sala":"27,00€","terraza":"27,30€"},
    {"nombre":"Chuleton de Ávila 450gr","sala":"29,50€","terraza":"29,80€"},
    {"nombre":"Chuletón de Ávila 500gr","sala":"33,50€","terraza":"33,80€"},
    {"nombre":"Chuleton de Ávila 550gr","sala":"36,50€","terraza":"36,80€"},
    {"nombre":"Chuleton de Ávila 600gr","sala":"38,50€","terraza":"38,80€"}
  ]},
  {"id":"hamburguesas","titulo":"Hamburguesas","subtitulo":"Con patatas","items":[
    {"nombre":"Hamburguesa De la casa","alergenos":["gluten","lacteos"],"sala":"12,00€","terraza":"12,30€"},
    {"nombre":"Hamburguesa Especial","desc":"Buey 200gr","alergenos":["lacteos","gluten"],"sala":"14,00€","terraza":"14,30€"},
    {"nombre":"Hamburguesa de pollo crujiente","alergenos":["gluten","huevo","lacteos"],"sala":"11,00€","terraza":"11,30€"},
    {"nombre":"Hamburguesa pulled Pork","sala":"13,50€","terraza":"13,80€"}
  ]},
  {"id":"bocadillos","titulo":"Bocadillos","extra":[{"titulo":"Tostas","nota":"Consultar variedad y disponibilidad en barra o al camarero."},{"titulo":"Embutidos y quesos","nota":"Consultar variedad y disponibilidad en barra o al camarero."},{"titulo":"Sandwiches","nota":"Consultar variedad y disponibilidad en barra o al camarero."}],"items":[
    {"nombre":"Pan sin gluten","sala":"1,70€","terraza":"1,80€"}
  ]},
  {"id":"postres","titulo":"Postres","subtitulo":"CASEROS","fondo":"negro","items":[
    {"nombre":"Tarta de queso casera","alergenos":["huevo","gluten","lacteos"],"sala":"6,00€","terraza":"6,30€"},
    {"nombre":"Tarta de queso con pistachos","alergenos":["huevo","lacteos","gluten","frutos_cascara"],"sala":"6,50€","terraza":"6,80€"},
    {"nombre":"Torrija con helado","sala":"7,00€","terraza":"7,30€"},
    {"nombre":"Cookies de cheese cake con helado","sala":"5,50€","terraza":"5,80€"},
    {"nombre":"Tarta de brownie","alergenos":["gluten","frutos_cascara","lacteos","huevo"],"sala":"6,00€","terraza":"6,30€"},
    {"nombre":"Helados","desc":"No casera","alergenos":["huevo","lacteos"],"sala":"3,50€","terraza":"3,80€"},
    {"nombre":"Cream Cookie","sala":"5,50€","terraza":"5,80€"}
  ]},
  {"id":"temporal","titulo":"Temporal","items":[
    {"nombre":"Tappe Pequño","sala":"0,20€","terraza":"0,20€"},
    {"nombre":"Tappe Mediana","sala":"0,30€","terraza":"0,30€"},
    {"nombre":"Tappe Grande","sala":"0,50€","terraza":"0,50€"},
    {"nombre":"Bolsa","sala":"0,20€","terraza":"0,20€"},
    {"nombre":"Extra Mantequilla Melmerada Aceite","sala":"0,20€","terraza":"0,20€"}
  ]}
 ]
};
