//** 9. Escriba un programa JavaScript para calcular los días que quedan hasta la
// próxima Navidad. 

const diaNav = 11;
const mesNav = 12;

const diaUsuario = parseInt(prompt("¿Qué día es hoy?"));
const mesUsuario = parseInt(prompt("¿Qué mes es hoy?"));


if (diaNav >= diaUsuario) {
console.log("Faltan " + (diaNav - diaUsuario) + " días y " + (mesNav - mesUsuario) + " para Navidad.");
} else {
    console.log("Faltan " + (30 - (diaUsuario - diaNav)) + " días y " + (mesNav - mesUsuario) +" meses para Navidad.");
}
