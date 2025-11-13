//ejercicio 1//
// Programa que calcula el total de una compra en el supermercado

// Pedimos el precio de tres productos
let producto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
let producto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
let producto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));


let total = producto1 + producto2 + producto3;


alert("El total a pagar es: $" + total.toFixed(2));

//ejercicio 2//

// Programa que calcula el área de una pared para un banner//

let ancho = parseFloat(prompt("Ingrese el ancho de la pared en metros:"));
let alto = parseFloat(prompt("Ingrese el alto de la pared en metros:"));

let area = ancho * alto;

alert("El área de la pared es: " + area.toFixed(2) + " metros cuadrados.");

//ejercicio 3//

// Programa que calcula el perímetro de un potrero rectangular

let largo = parseFloat(prompt("Ingrese el largo del potrero en metros:"));
let ancho1 = parseFloat(prompt("Ingrese el ancho del potrero en metros:"));

let perimetro = 2 * (largo + ancho);

alert("El perímetro del potrero es: " + perimetro.toFixed(2) + " metros.");

//ejercicio 4//

// Programa que convierte grados Fahrenheit a grados Celsius

let fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit (°F):"));

let celsius = (fahrenheit - 32) * 5 / 9;

alert(fahrenheit + "°F equivalen a " + celsius.toFixed(2) + "°C");