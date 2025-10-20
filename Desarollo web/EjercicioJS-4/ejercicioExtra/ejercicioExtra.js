var apuesta1 = 210;
var apuesta2 = 207;
var apuesta3 = 200;

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
