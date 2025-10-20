//** 11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
// Celsius, Fahrenheit.
// [Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
// Fahrenheit]
// Salida esperada :
// 60 ° C es 140 ° F
// 45 ° F es 7.222222222222222 ° C

const c = parseInt(prompt("Escribe la temperatura en Celsius:"));

const f = (c * 9/5) + 32;

console.log(c + "°C es " + f + "°F");

const f2 = parseInt(prompt("Escribe la temperatura en Fahrenheit:"));

const c2 = (f2 - 32) * 5/9;

console.log(f2 + "°F es " + c2 + "°C");




