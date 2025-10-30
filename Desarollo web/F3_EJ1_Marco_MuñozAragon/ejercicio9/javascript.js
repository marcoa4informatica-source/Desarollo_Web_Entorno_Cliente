//9. Escriba una función de JavaScript para poner en mayúscula la primera letra
//de cada palabra en una cadena

let cadena = prompt("Introduce una cadena de texto:");

function primeraEnMayuscula (cadena) {
    cadena = cadena.toLocaleUpperCase().charAt(0) + cadena.slice(1);
    return (cadena);
}
alert(primeraEnMayuscula(cadena));
