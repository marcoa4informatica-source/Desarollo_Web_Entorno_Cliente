//* 28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
// en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango 

const num1 = (prompt("Ingrese un número entero:"));
const num2 = (prompt("Ingrese otro número entero:"))

resultado = false;
if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99))
    resultado = true;   

alert(resultado);
