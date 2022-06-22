// Crear el array de objetos 'Pizzas'. 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly.
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano.
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.

// Por ejemplo: 'La pizza X, tiene un valor de $XXXX”. 💸

function Pizza(nombre, ingredientes, precio) {
  this.nombre = nombre;
  this.ingredientes = ingredientes;
  this.precio = precio;
}

let muzzarella = new Pizza('muzarella', ['queso'], 600);
let napolitana = new Pizza('napolitana', ['queso', 'tomate', 'albahaca'], 780);
let hawaiana = new Pizza('hawaiana', ['queso', 'ananá'], 850);
let pepperoni = new Pizza('pepperoni', ['queso', 'peperoni'], 800);
let champiñones = new Pizza('champiñones', ['queso', 'champiñones'], 970);
let fugazza = new Pizza('fugazza', ['queso, cebolla'], 750);

let pizzas = [muzzarella, napolitana, hawaiana, pepperoni, champiñones, fugazza];
let existe_pizza_barata = false;
let pizzas_impares = [];
let pizzas_nombres = [];
let pizzas_precios = [];

pizzas.forEach(pizza => {
  if (pizzas.indexOf(pizza) % 2 != 0) { pizzas_impares.push(pizza.nombre) }
  if (pizza.precio < 600) { existe_pizza_barata = true }
  pizzas_nombres.push(pizza.nombre);
  pizzas_precios.push(pizza.precio);
});

console.log(`Las pizzas con id impar son las de ${pizzas_impares}`);
if (existe_pizza_barata) { console.log('Hay al menos una pizza que vale menos de $600');
} else {
  console.log('No hay pizzas que valgan menos de $600')
}
console.log(`Las pizzas disponibles para ordenar son: ${pizzas_nombres}`);
console.log(`Los precios de las pizzas son: ${pizzas_precios}`)

console.log('---> Menu completo <---');
pizzas.forEach(pizza => {
  console.log(`Pizza de ${pizza.nombre} $${pizza.precio}`);
});