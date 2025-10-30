//*6. Escriba una función de JavaScript para ocultar direcciones de correo
//electrónico y protegerlas de usuarios no autorizados.
//console.log (protege_email (" rob_hood@example.com "));
//" rob ... @ example.com "
let correo = (prompt("Introduzca su correo electrónico:"));

function protege_email(correo) {
  let indiceArroba = correo.indexOf("@");
  let parte1 = correo.substring(0, 3);
  let parte2 = correo.substring(indiceArroba);
  return parte1 + "..." + parte2;
}
let usuario = protege_email(correo);
alert("Su correo ahora es: " + usuario);

