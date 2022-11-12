const pizzas = [{
        id:1,
        nombre:'Pizza Napolitana',
        ingredientes:['Mozzarella','Tomate', 'Hojas de albahaca'],
        precio:300
    },
    {
        id:2,
        nombre:'Pizza Jamon y Morron',
        ingredientes:['Jamon', 'Morron', 'Salsa', 'Pimiento rojo'],
        precio:700
    },
    {
        id:3,
        nombre:'Pizza con Champiñones',
        ingredientes:['Queso Parmesano', 'Champiñones', 'Cebolla', 'Aceitunas'],
        precio:450
    },
    {
        id:4,
        nombre:'Pizza 4 quesos',
        ingredientes:['Mozzarella', 'Provolone', 'Parmesano', 'Gorgonzola'],
        precio:650,
    },
    {
        id:5,
        nombre:'Pizza Fugazzeta',
        ingredientes:['Mozzarella', 'Cebolla', 'Aceitunas'],
        precio:570,
    },
    {
        id:6,
        nombre:'Pizza Carbonara',
        ingredientes:['Huevo', 'Parmesano', 'Pimienta'],
        precio:420,
    },
]

/* ========= EJERCICIO A  ========
*/

console.log('Ejercicio A');

const pizzasConIdImpar = pizzas.filter((pizza) => { return pizza.id % 2 !== 0 });

pizzasConIdImpar.forEach(pizza => console.log(`La ${pizza.nombre} tiene id impar`));


/* ========= EJERCICIO B  ========*/

console.log('Ejercicio B');

const hayPizzasAMenosDe = (precio) => {
    return pizzas.some(pizza => {
        return pizza.precio < precio})
     ? console.log(`Hay pizzas con un precio menor a $${precio}`)
     : console.log(`No hay pizzas con un precio menor a $${precio}`);
}
hayPizzasAMenosDe(600);

/* ========= EJERCICIO C  ========*/

console.log('Ejercicio C');

const pizzasConPrecio = pizzas.forEach( (pizza) => 
console.log(`La ${pizza.nombre} tiene un precio de ${pizza.precio}$`));

/* ========= EJERCICIO D  ========*/

console.log('Ejercicio D')

const ingredientesDePizzas = pizzas.forEach( (pizza) => {
    console.log(`- Ingredientes ${pizza.nombre}:`);
    pizza.ingredientes.forEach( (ingredientesPizzaActual) => 
    console.log(`      + ${ingredientesPizzaActual}`));
})