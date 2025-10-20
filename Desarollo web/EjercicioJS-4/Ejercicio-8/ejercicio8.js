/**
 * 8. Escriba un programa JavaScript en el que el programa tome un número entero
aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
aproximado. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
"No coincide".
 */

// Generar un número entero aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// Solicitar al usuario que ingrese un número aproximado
const numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 10: "), 10);
// Comparar la entrada del usuario con el número aleatorio
if (numeroUsuario === numeroAleatorio) {
    console.log("Buen trabajo");
} else {
    console.log("No coincide");
}
