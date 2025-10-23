let contraseña = "L4ultimavezKtelod1go";
contraseña = contraseña.toLowerCase();

puntos1 = contraseña.charAt(0);
puntos2 = contraseña.charAt(1);
puntos3 = contraseña.charAt(2);
puntos4 = contraseña.charAt(3);
puntos5 = contraseña.charAt(4);
puntos6 = contraseña.charAt(5);
puntos7 = contraseña.charAt(6);
puntos8 = contraseña.charAt(7);
puntos9 = contraseña.charAt(8);
puntos10 = contraseña.charAt(9);
puntos11 = contraseña.charAt(10);
puntos12 = contraseña.charAt(11);
puntos13 = contraseña.charAt(12);
puntos14 = contraseña.charAt(13);
puntos15 = contraseña.charAt(14);
puntos16 = contraseña.charAt(15);
puntos17 = contraseña.charAt(16);
puntos18 = contraseña.charAt(17);
puntos19 = contraseña.charAt(18);
puntos20 = contraseña.charAt(19);

puntos1 = 2;
puntos2 = 3;
puntos3 = 1;
puntos4 = 2;
puntos5 = 2;
puntos6 = 1;
puntos7 = 2;
puntos8 = 1;
puntos9 = 2;
puntos10 = 1;
puntos11 = 2;
puntos12 = 2;
puntos13 = 2;
puntos14 = 1;
puntos15 = 2;
puntos16 = 1;
puntos17 = 2;
puntos18 = 3;
puntos19 = 2;
puntos20 = 1;


let usuario1 = prompt("Ingresa la contraseña:");
let puntuacion1 = 0;
let puntuacion2 = 0;
let puntuacion3 = 0

lectura = 0;


for (let i = 0; i <= contraseña.length; i++){
    if (usuario1[i] == contraseña[i] && lectura == 0){  
        puntuacion1 += puntos1;  
        lectura++;     
    }
    if (usuario1[i] == contraseña[i] && lectura == 1){
        puntuacion1 += puntos2;  
        lectura++;     
    }
    if (usuario1[i] == contraseña[i] && lectura == 2){  
        puntuacion1 += puntos3;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 3){  
        puntuacion1 += puntos4;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 4){  
        puntuacion1 += puntos5;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 5){
        puntuacion1 += puntos6;  
        lectura++;     
    }
    if (usuario1[i] == contraseña[i] && lectura == 6){  
        puntuacion1 += puntos7;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 7){  
        puntuacion1 += puntos8;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 8){  
        puntuacion1 += puntos9;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 9){  
        puntuacion1 += puntos10;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 10){  
        puntuacion1 += puntos11;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 11){  
        puntuacion1 += puntos12;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 12){  
        puntuacion1 += puntos13;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 13){  
        puntuacion1 += puntos14;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 14){  
        puntuacion1 += puntos15;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 15){  
        puntuacion1 += puntos16;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 16){  
        puntuacion1 += puntos17;  
        lectura++;     
    }
    if (usuario1[i] == contraseña[i] && lectura == 17){  
        puntuacion1 += puntos18;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 18){  
        puntuacion1 += puntos19;  
        lectura++;
    }
    if (usuario1[i] == contraseña[i] && lectura == 19){  
        puntuacion1 += puntos20;  
        lectura++;
    }   
}
alert("La puntuación del primer usuario es: " + puntuacion1);

lectura = 0;

let usuario2 = prompt("Ingresa la contraseña:");

for (let i = 0; i < contraseña.length; i++){
    if (usuario2[i] == contraseña[i] && lectura == 0){  
        puntuacion2 += puntos1;  
        lectura++;     
    }
    if (usuario2[i] == contraseña[i] && lectura == 1){
        puntuacion2 += puntos2;  
        lectura++;     
    }
    if (usuario2[i] == contraseña[i] && lectura == 2){  
        puntuacion2 += puntos3;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 3){  
        puntuacion2 += puntos4;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 4){  
        puntuacion2 += puntos5;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 5){
        puntuacion2 += puntos6;  
        lectura++;     
    }
    if (usuario2[i] == contraseña[i] && lectura == 6){  
        puntuacion2 += puntos7;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 7){  
        puntuacion2 += puntos8;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 8){  
        puntuacion2 += puntos9;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 9){  
        puntuacion2 += puntos10;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 10){  
        puntuacion2 += puntos11;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 11){  
        puntuacion2 += puntos12;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 12){  
        puntuacion2 += puntos13;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 13){  
        puntuacion1 += puntos14;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 14){  
        puntuacion2 += puntos15;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 15){  
        puntuacion2 += puntos16;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 16){  
        puntuacion2 += puntos17;  
        lectura++;     
    }
    if (usuario2[i] == contraseña[i] && lectura == 17){  
        puntuacion2 += puntos18;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 18){  
        puntuacion2 += puntos19;  
        lectura++;
    }
    if (usuario2[i] == contraseña[i] && lectura == 19){  
        puntuacion2 += puntos20;  
        lectura++;
    }   
}
alert("La puntuación del segundo usuario es: " + puntuacion2);

lectura = 0;

let usuario3 = prompt("Ingresa la contraseña:");

for (let i = 0; i < contraseña.length; i++){
    if (usuario3[i] == contraseña[i] && lectura == 0){  
        puntuacion3 += puntos1;  
        lectura++;     
    }
    if (usuario3[i] == contraseña[i] && lectura == 1){
        puntuacion3 += puntos2;  
        lectura++;     
    }
    if (usuario3[i] == contraseña[i] && lectura == 2){  
        puntuacion3 += puntos3;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 3){  
        puntuacion3 += puntos4;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 4){  
        puntuacion3 += puntos5;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 5){
        puntuacion3 += puntos6;  
        lectura++;     
    }
    if (usuario3[i] == contraseña[i] && lectura == 6){  
        puntuacion3 += puntos7;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 7){  
        puntuacion3 += puntos8;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 8){  
        puntuacion3 += puntos9;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 9){  
        puntuacion3 += puntos10;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 10){  
        puntuacion3 += puntos11;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 11){  
        puntuacion3 += puntos12;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 12){  
        puntuacion3 += puntos13;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 13){  
        puntuacion3 += puntos14;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 14){  
        puntuacion3 += puntos15;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 15){  
        puntuacion3 += puntos16;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 16){  
        puntuacion3 += puntos17;  
        lectura++;     
    }
    if (usuario3[i] == contraseña[i] && lectura == 17){  
        puntuacion3 += puntos18;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 18){  
        puntuacion3 += puntos19;  
        lectura++;
    }
    if (usuario3[i] == contraseña[i] && lectura == 19){  
        puntuacion3 += puntos20;  
        lectura++;
    }   
}
alert("La puntuación del tercer usuario es: " + puntuacion3);

lectura = 50;

if (puntuacion1 > puntuacion2 && puntuacion1 > puntuacion3){
    alert("El primer usuario es el que más puntos obtuvo: " + puntuacion1);
}
else if (puntuacion2 > puntuacion1 && puntuacion2 > puntuacion3){
    alert("El segundo usuario es el que más puntos obtuvo: " + puntuacion2);
}
else if (puntuacion3 > puntuacion1 && puntuacion3 > puntuacion2){
    alert("El tercer usuario es el que más puntos obtuvo: " + puntuacion3);
}