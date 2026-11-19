/* DATOS DE LA CARTA — editar aquí.
 * Cada plato: { name, desc?, allergens?: [ids], sala, terraza, imagen? }
 * - name, desc, sala, terraza y allergens se mantienen tal cual el HTML original.
 * - imagen (opcional): ruta a una foto real, p. ej. 'img/platos/mi-plato.jpg'.
 *   Si no hay imagen, la tarjeta NO muestra ningún hueco ni banner.
 */
window.CARTA = {
alergenos: [
 {
  "id": "gluten",
  "label": "Gluten",
  "color": "#F3722C",
  "path": "M19.5 3.5c-1.8.3-3.4 1.3-4.4 2.8-.6-.8-1.5-1.3-2.5-1.4.2 1.1.8 2 1.7 2.6-.9.6-1.9 1.4-2.6 2.4-.5-.9-1.4-1.5-2.5-1.6.2 1.1.8 2.1 1.7 2.7-.8.7-1.6 1.5-2.2 2.4-.5-.9-1.4-1.5-2.5-1.6.2 1.2.9 2.2 1.9 2.8l-3.6 3.6 1.4 1.4 3.6-3.6c.6 1 1.6 1.7 2.8 1.9-.1-1.1-.7-2-1.6-2.5.9-.6 1.7-1.4 2.4-2.2.6.9 1.6 1.5 2.7 1.7-.1-1.1-.7-2-1.6-2.5 1-.7 1.8-1.7 2.4-2.6.6.9 1.5 1.5 2.6 1.7-.1-1-.6-1.9-1.4-2.5 1.5-1 2.5-2.6 2.8-4.4l.2-1.5-1.5.2z"
 },
 {
  "id": "lacteos",
  "label": "Lácteos",
  "color": "#6F3518",
  "path": "M9 3h6v2l1.5 2.2c.3.5.5 1 .5 1.6V19c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V8.8c0-.6.2-1.1.5-1.6L9 5V3zm8 6v4h1.2c.4 0 .8-.3.8-.8V9.8c0-.4-.4-.8-.8-.8H17z"
 },
 {
  "id": "huevo",
  "label": "Huevo",
  "color": "#F8961E",
  "path": "M9.5 6C7.5 6 6 9.1 6 11.8 6 14 7.5 15.5 9.5 15.5S13 14 13 11.8C13 9.1 11.5 6 9.5 6zm5.5 3.5c-1.6 0-3 2.5-3 4.7 0 1.8 1.3 3.1 3 3.1s3-1.3 3-3.1c0-2.2-1.4-4.7-3-4.7z"
 },
 {
  "id": "pescado",
  "label": "Pescado",
  "color": "#274C9B",
  "path": "M21 12c-2.5-3.2-6.1-5-10-5-2.6 0-5 .9-7 2.4L1.5 7.5v9L4 14.6c2 1.5 4.4 2.4 7 2.4 3.9 0 7.5-1.8 10-5zm-5.2-.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
 },
 {
  "id": "moluscos",
  "label": "Moluscos",
  "color": "#4CC9F0",
  "path": "M12 4C7 4 3 7.8 3 12.5c0 2.6 1.3 4.9 3.3 6.3L8 20h8l1.7-1.2c2-1.4 3.3-3.7 3.3-6.3C21 7.8 17 4 12 4zm-4.5 12.5L5.8 9.2l1.4-.6 2 7.4-1.7.5zm3.7-.3V7.5h1.6v8.7h-1.6zm4.8.3-1.7-.5 2-7.4 1.4.6-1.7 7.3z"
 },
 {
  "id": "crustaceos",
  "label": "Crustáceos",
  "color": "#00A8E8",
  "path": "M7.5 6.5C6 6.5 5 7.6 5 9c0 .9.5 1.7 1.2 2.1L5 13H3v2h2.2l1.3 1.5L5 18.5 6.5 20l2-2h7l2 2 1.5-1.5-1.5-2L18.8 15H21v-2h-2l-1.2-1.9c.7-.4 1.2-1.2 1.2-2.1 0-1.4-1-2.5-2.5-2.5-1.1 0-2 .7-2.3 1.7-.7-.1-1.4-.2-2.2-.2s-1.5.1-2.2.2C9.5 7.2 8.6 6.5 7.5 6.5z"
 },
 {
  "id": "cacahuetes",
  "label": "Cacahuetes",
  "color": "#7209B7",
  "path": "M15.8 4.2c-1.7 0-3.1 1-3.7 2.5-.4 1-.9 1.6-1.6 2.1-1.5.7-2.5 2.2-2.5 4 0 2.5 2 4.5 4.5 4.5 1.7 0 3.2-1 3.9-2.4.4-.9.9-1.5 1.6-2 1.4-.7 2.3-2.2 2.3-3.9 0-2.6-2-4.8-4.5-4.8z"
 },
 {
  "id": "frutos_cascara",
  "label": "Frutos de cáscara",
  "color": "#E63956",
  "path": "M12 3C8.2 3 6 7.5 6 12.2 6 16.8 8.7 20 12 20s6-3.2 6-7.8C18 7.5 15.8 3 12 3zm-1.5 12.5c-.6-.9-.9-2.1-.9-3.5 0-1.8.5-3.4 1.3-4.5l.8.6c-.7 1-1.1 2.4-1.1 3.9 0 1.2.3 2.2.8 3l-.9.5zm3 0-.9-.5c.5-.8.8-1.8.8-3 0-1.5-.4-2.9-1.1-3.9l.8-.6c.8 1.1 1.3 2.7 1.3 4.5 0 1.4-.3 2.6-.9 3.5z"
 }
],
secciones: [
 {
  "id": "menu-del-dia",
  "title": "Menu del dia",
  "type": "menu-dia",
  "menuDia": {
   "courses": [
    {
     "heading": "Primer plato",
     "options": [
      "Crema de calabacin",
      "Revuelto de morcilla"
     ]
    },
    {
     "heading": "Segundo plato",
     "options": [
      "Secreto a la plancha",
      "Muslos de pollo en salsa"
     ]
    },
    {
     "heading": "Postre o café",
     "options": [
      "Helado",
      "Tarta de queso",
      "Cafe"
     ]
    }
   ],
   "price": "13,90€",
   "note": "** Preguntar por alérgenos al camarero **"
  }
 },
 {
  "id": "desayunos",
  "title": "Desayunos",
  "items": [
   {
    "name": "Colacao+Bollería",
    "sala": "3,00€",
    "terraza": "3,10€"
   },
   {
    "name": "Pincho Tortilla",
    "sala": "3,50€",
    "terraza": "3,60€"
   },
   {
    "name": "Bollería",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Cafe + T.Jamón o con Atún",
    "sala": "4,10€",
    "terraza": "4,20€"
   },
   {
    "name": "Colacao+T.Jamón",
    "sala": "4,20€",
    "terraza": "4,30€"
   },
   {
    "name": "Cafe+M.Tostada",
    "sala": "2,70€",
    "terraza": "2,80€"
   },
   {
    "name": "Café+3Churros",
    "sala": "2,90€",
    "terraza": "3,00€"
   },
   {
    "name": "Café +2churros o 1 porra",
    "sala": "2,70€",
    "terraza": "2,80€"
   },
   {
    "name": "Café + bollería",
    "sala": "2,90€",
    "terraza": "3,00€"
   },
   {
    "name": "Churro",
    "sala": "0,40€",
    "terraza": "0,40€"
   },
   {
    "name": "Porra",
    "sala": "0,80€",
    "terraza": "0,80€"
   },
   {
    "name": "Tostada con tomate",
    "sala": "2,00€",
    "terraza": "2,00€"
   },
   {
    "name": "1/2 tostada con tomate",
    "sala": "1,80€",
    "terraza": "1,80€"
   }
  ]
 },
 {
  "id": "cafe",
  "title": "Café",
  "items": [
   {
    "name": "Café Solo",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Colacao",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Cortado",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Café con leche",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Café con leche y hielo",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Café americano",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Café Americano con hielo",
    "sala": "1,90€",
    "terraza": "2,00€"
   },
   {
    "name": "Café Bombón",
    "sala": "2,60€",
    "terraza": "2,70€"
   },
   {
    "name": "Chocolate",
    "sala": "2,30€",
    "terraza": "2,40€"
   },
   {
    "name": "Vaso de leche",
    "sala": "1,30€",
    "terraza": "1,40€"
   },
   {
    "name": "Inf. Rooibos naranja",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Manzanilla",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Poleo Menta",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Té Hierbabuena",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Te verde ginsen",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Te rojo pu-erh",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Te negro",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Te frutas",
    "sala": "2,00€",
    "terraza": "2,10€"
   },
   {
    "name": "Doble de Cafe",
    "sala": "2,50€",
    "terraza": "2,60€"
   }
  ]
 },
 {
  "id": "ensaladas",
  "title": "Ensaladas",
  "items": [
   {
    "name": "Ensalada De Tomate Con Burrata",
    "sala": "13,00€",
    "terraza": "13,30€",
    "imagen": "img/platos/ensalada-tomate-burrata.jpg",
   "imagenGrande": "img/plato-ensalada-tomate-burrata.jpg",
    "imagenAlt": "Ensalada de tomate con burrata en plato de cerámica azul"
   },
   {
    "name": "Ensalada Mixta",
    "allergens": [
     "huevo",
     "pescado"
    ],
    "sala": "9,00€",
    "terraza": "9,30€"
   },
   {
    "name": "Ensalada César",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos"
    ],
    "sala": "11,00€",
    "terraza": "11,30€"
   },
   {
    "name": "Ensalada de Salmón",
    "allergens": [
     "pescado"
    ],
    "sala": "10,00€",
    "terraza": "10,30€"
   },
   {
    "name": "Ensaladilla rusa",
    "allergens": [
     "huevo",
     "pescado"
    ],
    "sala": "9,00€",
    "terraza": "9,30€"
   }
  ]
 },
 {
  "id": "raciones",
  "title": "Raciones",
  "items": [
   {
    "name": "Calamares a la romana",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos",
     "moluscos"
    ],
    "sala": "14,00€",
    "terraza": "14,30€"
   },
   {
    "name": "Bienmesabe al estilo andaluz",
    "allergens": [
     "pescado",
     "huevo",
     "gluten"
    ],
    "sala": "15,00€",
    "terraza": "15,30€"
   },
   {
    "name": "Gambas al ajillo",
    "allergens": [
     "crustaceos",
     "cacahuetes"
    ],
    "sala": "15,00€",
    "terraza": "15,30€"
   },
   {
    "name": "Gulas con gambas",
    "allergens": [
     "crustaceos",
     "pescado"
    ],
    "sala": "14,00€",
    "terraza": "14,30€"
   },
   {
    "name": "Alitas de pollo barbacoa",
    "desc": "6 unidades",
    "sala": "13,00€",
    "terraza": "13,30€"
   },
   {
    "name": "Patatas bravas/alioli",
    "sala": "8,00€",
    "terraza": "8,30€"
   },
   {
    "name": "Pimientos de padrón fritos",
    "sala": "8,00€",
    "terraza": "8,30€"
   },
   {
    "name": "Huevos rotos",
    "desc": "Con gulas, jamón o chistorra",
    "allergens": [
     "huevo"
    ],
    "sala": "13,00€",
    "terraza": "13,30€"
   },
   {
    "name": "Croquetas de jamón Caseras",
    "desc": "6 unidades",
    "allergens": [
     "gluten",
     "lacteos",
     "huevo"
    ],
    "sala": "10,00€",
    "terraza": "10,30€"
   },
   {
    "name": "Croquetas de especial  morcilla",
    "desc": "6 unidades",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos"
    ],
    "sala": "10,00€",
    "terraza": "10,30€"
   },
   {
    "name": "Chopitos",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos",
     "moluscos"
    ],
    "sala": "14,00€",
    "terraza": "14,30€"
   },
   {
    "name": "Boquerones fritos",
    "allergens": [
     "pescado",
     "huevo",
     "gluten",
     "lacteos"
    ],
    "sala": "12,00€",
    "terraza": "12,30€"
   },
   {
    "name": "Morcilla",
    "sala": "10,00€",
    "terraza": "10,30€"
   },
   {
    "name": "Oreja",
    "sala": "12,00€",
    "terraza": "12,30€"
   },
   {
    "name": "Fritura andaluza",
    "desc": "2 Personas",
    "allergens": [
     "huevo",
     "lacteos",
     "gluten",
     "pescado",
     "moluscos"
    ],
    "sala": "22,00€",
    "terraza": "22,30€"
   },
   {
    "name": "Tempura de berenjena",
    "allergens": [
     "gluten"
    ],
    "sala": "11,00€",
    "terraza": "11,30€"
   },
   {
    "name": "Morcilla en Tempura",
    "allergens": [
     "gluten"
    ],
    "sala": "11,00€",
    "terraza": "11,30€"
   },
   {
    "name": "Fingers de pollo caseras",
    "desc": "10 unidades",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos"
    ],
    "sala": "13,00€",
    "terraza": "13,30€"
   }
  ]
 },
 {
  "id": "sugerencias",
  "title": "Sugerencias",
  "items": [
   {
    "name": "Rejos crujientes",
    "allergens": [
     "huevo",
     "gluten"
    ],
    "sala": "18,00€",
    "terraza": "18,30€"
   },
   {
    "name": "Vieiras Ventura (4 Unidades)",
    "desc": "huevas de salmón",
    "sala": "12,00€",
    "terraza": "12,30€"
   },
   {
    "name": "Fitete de pollo  parmigiana",
    "desc": "Con salsa de tomate casera y queso,acompañado de patatas fritas",
    "allergens": [
     "lacteos",
     "gluten",
     "huevo"
    ],
    "sala": "20,00€",
    "terraza": "20,30€"
   },
   {
    "name": "Carpaccio de berenjena con burrata y cecina",
    "sala": "13,00€",
    "terraza": "13,30€"
   },
   {
    "name": "Sepia a la Plancha",
    "sala": "21,00€",
    "terraza": "21,30€"
   },
   {
    "name": "Pata de pulpo a la plancha con fondant de patata",
    "sala": "23,00€",
    "terraza": "23,30€"
   },
   {
    "name": "Cachopo",
    "sala": "26,00€",
    "terraza": "26,30€"
   },
   {
    "name": "Patatas revolconas con chicharrones",
    "sala": "15,00€",
    "terraza": "15,30€"
   },
   {
    "name": "Pancenta en salsa Teriyaki",
    "sala": "14,00€",
    "terraza": "14,30€"
   },
   {
    "name": "Revuelto de setas",
    "allergens": [
     "huevo"
    ],
    "sala": "13,00€",
    "terraza": "13,30€"
   },
   {
    "name": "Alcachofas a la Plancha(3 unidades)",
    "sala": "14,50€",
    "terraza": "14,80€"
   },
   {
    "name": "Huevo poche con setas trufadas",
    "sala": "11,00€",
    "terraza": "11,30€"
   }
  ]
 },
 {
  "id": "principales",
  "title": "Principales",
  "items": [
   {
    "name": "Chuletón de Ávila 300gr",
    "sala": "22,50€",
    "terraza": "22,80€"
   },
   {
    "name": "Chuletón de Avila 350gr",
    "sala": "25,50€",
    "terraza": "25,80€"
   },
   {
    "name": "Chuletón de Avila 400gr",
    "sala": "27,00€",
    "terraza": "27,30€"
   },
   {
    "name": "Chuleton de Ávila 450gr",
    "sala": "29,50€",
    "terraza": "29,80€"
   },
   {
    "name": "Chuletón de Ávila 500gr",
    "sala": "33,50€",
    "terraza": "33,80€"
   },
   {
    "name": "Chuleton de Ávila 550gr",
    "sala": "36,50€",
    "terraza": "36,80€"
   },
   {
    "name": "Chuleton de Ávila 600gr",
    "sala": "38,50€",
    "terraza": "38,80€"
   }
  ]
 },
 {
  "id": "hamburguesas",
  "title": "Hamburguesas",
  "subtitle": "Con patatas",
  "items": [
   {
    "name": "Hamburguesa De la casa",
    "allergens": [
     "gluten",
     "lacteos"
    ],
    "sala": "12,00€",
    "terraza": "12,30€"
   },
   {
    "name": "Hamburguesa Especial",
    "desc": "Buey 200gr",
    "allergens": [
     "lacteos",
     "gluten"
    ],
    "sala": "14,00€",
    "terraza": "14,30€"
   },
   {
    "name": "Hamburguesa de pollo crujiente",
    "allergens": [
     "gluten",
     "huevo",
     "lacteos"
    ],
    "sala": "11,00€",
    "terraza": "11,30€"
   },
   {
    "name": "Hamburguesa pulled Pork",
    "sala": "13,50€",
    "terraza": "13,80€"
   }
  ]
 },
 {
  "id": "bocadillos",
  "title": "Bocadillos",
  "items": [
   {
    "name": "Pan sin gluten",
    "sala": "1,70€",
    "terraza": "1,80€"
   }
  ],
  "extraSections": [
   {
    "title": "Tostas",
    "note": "Consultar variedad y disponibilidad en barra o al camarero."
   },
   {
    "title": "Embutidos y quesos",
    "note": "Consultar variedad y disponibilidad en barra o al camarero."
   },
   {
    "title": "Sandwiches",
    "note": "Consultar variedad y disponibilidad en barra o al camarero."
   }
  ]
 },
 {
  "id": "postres",
  "title": "Postres",
  "subtitle": "CASEROS",
  "subtitleUppercase": true,
  "items": [
   {
    "name": "Tarta de queso casera",
    "allergens": [
     "huevo",
     "gluten",
     "lacteos"
    ],
    "sala": "6,00€",
    "terraza": "6,30€"
   },
   {
    "name": "Tarta de queso con pistachos",
    "allergens": [
     "huevo",
     "lacteos",
     "gluten",
     "frutos_cascara"
    ],
    "sala": "6,50€",
    "terraza": "6,80€"
   },
   {
    "name": "Torrija con helado",
    "sala": "7,00€",
    "terraza": "7,30€"
   },
   {
    "name": "Cookies de cheese cake con helado",
    "sala": "5,50€",
    "terraza": "5,80€"
   },
   {
    "name": "Tarta de brownie",
    "allergens": [
     "gluten",
     "frutos_cascara",
     "lacteos",
     "huevo"
    ],
    "sala": "6,00€",
    "terraza": "6,30€"
   },
   {
    "name": "Helados",
    "desc": "No casera",
    "allergens": [
     "huevo",
     "lacteos"
    ],
    "sala": "3,50€",
    "terraza": "3,80€"
   },
   {
    "name": "Cream Cookie",
    "sala": "5,50€",
    "terraza": "5,80€"
   }
  ]
 },
 {
  "id": "temporal",
  "title": "Temporal",
  "items": [
   {
    "name": "Tappe Pequño",
    "sala": "0,20€",
    "terraza": "0,20€"
   },
   {
    "name": "Tappe Mediana",
    "sala": "0,30€",
    "terraza": "0,30€"
   },
   {
    "name": "Tappe Grande",
    "sala": "0,50€",
    "terraza": "0,50€"
   },
   {
    "name": "Bolsa",
    "sala": "0,20€",
    "terraza": "0,20€"
   },
   {
    "name": "Extra Mantequilla Melmerada Aceite",
    "sala": "0,20€",
    "terraza": "0,20€"
   }
  ]
 }
]
};
