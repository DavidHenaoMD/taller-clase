//ejercicio 1//
// Programa que calcula el total de una compra en el supermercado

// Pedimos el precio de tres productos
let producto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
let producto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
let producto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));


let total = producto1 + producto2 + producto3;


alert("El total a pagar es: $" + total.toFixed(2));