const apuesta1 = parseInt(prompt("Adivina la cuenta: "));
const apuesta2 = parseInt(prompt("Adivina la cuenta: "));
const apuesta3 = parseInt(prompt("Adivina la cuenta: "));

const apuestaAcertada = 213;

apuesta1 -= apuestaAcertada;
apuesta2 -= apuestaAcertada;
apuesta3 -= apuestaAcertada; 

if (apuesta1 < apuesta2 && apuesta1 < apuesta3) {
    console.log("La apuesta más cercana es la apuesta 1");
}
if (apuesta2 < apuesta1 && apuesta2 < apuesta3) {
    console.log("La apuesta más cercana es la apuesta 2");
}
else if (apuesta3 < apuesta1 && apuesta3 < apuesta2) {
    console.log("La apuesta más cercana es la apuesta 3");
}
