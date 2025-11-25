/** 1. crearUsuario: recibe un objeto con nombre, edad y país.
 *    Si falta algún dato, usa valores por defecto.
 *    Devuelve una cadena tipo: "Juan, 20 años, España".
 */

// Definimos la función crearUsuario.
// El parámetro es un OBJETO que se desestructura en { nombre, edad, pais }.
// A cada propiedad le damos un valor por defecto por si no viene en el objeto.
// Si no se pasa ningún parámetro, el valor por defecto del objeto completo es {}.
function crearUsuario({
    nombre = "(texto no encontrado)",
    edad = "(texto no encontrado)",
    pais = "(texto no encontrado)"
} = {}) {

    // Construimos y devolvemos una cadena usando los valores recibidos (o los de defecto).
    return "Hola, " + nombre + ", tienes " + edad + " años y vives en " + pais + ".";
}

/** 2. operar: recibe dos números y una función (callback) que indica la operación.
 *    Operaciones: suma, resta, multiplicacion, suma_mul.
 */

// Función suma: recibe dos números y devuelve un texto con la operación y el resultado.
function suma(a, b) {
    return a + " + " + b + " = " + (a + b);
}

// Función resta: igual que suma, pero restando.
function resta(a, b) {
    return a + " - " + b + " = " + (a - b);
}

// Función multiplicacion: multiplica a y b y lo devuelve en formato texto.
function multiplicacion(a, b) {
    return a + " * " + b + " = " + (a * b);
}

// Función suma_mul: hace dos cosas:
// 1) Calcula la suma de a y b.
// 2) Calcula el producto de a y b.
// Devuelve un texto explicando ambas operaciones y la suma de esos resultados.
function suma_mul(a, b) {
    let s = a + b;   // suma
    let m = a * b;   // multiplicación

    return (
        a + " + " + b + " = " + s +
        " y " +
        a + " * " + b + " = " + m +
        ". La suma de las operaciones es " + (s + m)
    );
}

// Función operar: esta función NO sabe qué operación hacer.
// Recibe a, b y una función (operacion) y simplemente la ejecuta.
// Esto es un “callback”: le pasamos una función como parámetro.
function operar(a, b, operacion) {
    return operacion(a, b);
}

/** 3. aplanar: función recursiva que convierte un array de arrays en un array plano. */

// Función aplanar: si hay arrays dentro de arrays, los va "abriendo" hasta
// dejar todos los elementos en un único array.
function aplanar(arr) {
    // Aquí guardaremos el resultado final.
    let resultado = [];

    // Recorremos cada elemento del array que nos llega.
    for (let elemento of arr) {

        // Si el elemento es otro array, llamamos a aplanar otra vez (recursión).
        if (Array.isArray(elemento)) {
            let plano = aplanar(elemento);   // aplanamos ese subarray
            // Concatenamos el resultado al array resultado.
            resultado = resultado.concat(plano);
        } else {
            // Si NO es un array, lo metemos directamente en resultado.
            resultado.push(elemento);
        }
    }

    // Devolvemos el array completamente plano.
    return resultado;
}

/** 4A. listarArchivos: recorre un objeto tipo "sistema de archivos" y devuelve los nombres de archivo. */

// Simulación de sistema de archivos: carpetas como objetos y archivos como propiedades string.
const fs = {
    carpeta1: {
        archivo1: "contenido1",
        archivo2: "contenido2",
        subcarpeta: {
            archivo3: "contenido3"
        }
    },
    carpeta2: {
        archivo4: "contenido4"
    }
};

// Función listarArchivos: recorre el objeto fs (o uno similar) y
// devuelve un array con los nombres de archivo (las claves que tienen strings).
function listarArchivos(obj) {
    let archivos = [];

    // Recorremos todas las propiedades del objeto.
    for (let clave in obj) {
        let valor = obj[clave];

        // Si el valor es un string, consideramos que es un archivo.
        if (typeof valor === "string") {
            archivos.push(clave);
        }
        // Si el valor es un objeto (y no es null), lo tratamos como carpeta
        // y llamamos recursivamente a listarArchivos.
        else if (typeof valor === "object" && valor !== null) {
            archivos = archivos.concat(listarArchivos(valor));
        }
    }

    // Devolvemos todos los nombres de archivo encontrados.
    return archivos;
}

/** 4B. permutar: devuelve todas las permutaciones posibles de un array. */

// Función permutar: genera todas las permutaciones posibles de los elementos de un array.
// Usa una técnica de backtracking (prueba y retrocede).
function permutar(arr) {
    let resultado = [];

    // Función interna (anidada) para ir construyendo las permutaciones.
    function backtrack(actual, restantes) {
        // Caso base: si no quedan elementos disponibles, guardamos la combinación actual.
        if (restantes.length === 0) {
            resultado.push(actual);
            return;
        }

        // Recorremos los elementos restantes y vamos eligiendo cada uno.
        for (let i = 0; i < restantes.length; i++) {
            // Añadimos un elemento al array actual.
            let nuevoActual = actual.concat(restantes[i]);

            // Creamos un nuevo array de restantes sin el elemento que acabamos de usar.
            let nuevosRestantes = restantes.slice(0, i).concat(restantes.slice(i + 1));

            // Llamada recursiva con el nuevo estado.
            backtrack(nuevoActual, nuevosRestantes);
        }
    }

    // Llamamos por primera vez con un array vacío y todos los elementos disponibles.
    backtrack([], arr);

    // Devolvemos todas las permutaciones.
    return resultado;
}

/* ========= Conexión con la interfaz ========= */

// Esperamos a que el DOM esté cargado para poder acceder a los elementos HTML.
document.addEventListener("DOMContentLoaded", function () {

    /* EJERCICIO 1: crearUsuario */

    const ej1Btn = document.getElementById("ej1-btn");           // Botón de ejercicio 1
    const ej1Res = document.getElementById("ej1-resultado");     // Contenedor del resultado

    // Comprobamos que el botón existe en la página.
    if (ej1Btn) {
        ej1Btn.addEventListener("click", function () {
            // Leemos los valores de los inputs y quitamos espacios al principio y final.
            const nombre = document.getElementById("ej1-nombre").value.trim();
            const edad = document.getElementById("ej1-edad").value.trim();
            const pais = document.getElementById("ej1-pais").value.trim();

            // Llamamos a crearUsuario pasando un objeto.
            // Si el campo está vacío, mandamos undefined para que salte el valor por defecto.
            const mensaje = crearUsuario({
                nombre: nombre || undefined,
                edad: edad || undefined,
                pais: pais || undefined
            });

            // Mostramos el mensaje en el elemento resultado.
            ej1Res.textContent = mensaje;
        });
    }

    /* EJERCICIO 2: operar */

    const ej2Btn = document.getElementById("ej2-btn");           // Botón ejercicio 2
    const ej2Res = document.getElementById("ej2-resultado");     // Resultado ejercicio 2

    if (ej2Btn) {
        ej2Btn.addEventListener("click", function () {
            // Convertimos los valores de los inputs a Number (por defecto vienen como string).
            const a = Number(document.getElementById("ej2-a").value);
            const b = Number(document.getElementById("ej2-b").value);
            const op = document.getElementById("ej2-op").value;  // tipo de operación elegida

            let fn; // Aquí guardaremos la función que corresponda (suma, resta, etc.)

            // Según el valor de "op", asignamos la función adecuada.
            switch (op) {
                case "suma":
                    fn = suma;
                    break;
                case "resta":
                    fn = resta;
                    break;
                case "multiplicacion":
                    fn = multiplicacion;
                    break;
                case "suma_mul":
                    fn = suma_mul;
                    break;
                default:
                    // Si no coincide con ninguna, mostramos un mensaje de error y salimos.
                    ej2Res.textContent = "Operación no válida.";
                    return;
            }

            // Llamamos a operar, pasando los números y la función seleccionada (callback).
            const resultado = operar(a, b, fn);

            // Mostramos el resultado en el HTML.
            ej2Res.textContent = resultado;
        });
    }

    /* EJERCICIO 3: aplanar */

    const ej3Btn = document.getElementById("ej3-btn");           // Botón ejercicio 3
    const ej3Res = document.getElementById("ej3-resultado");     // Resultado ejercicio 3

    if (ej3Btn) {
        ej3Btn.addEventListener("click", function () {
            // Array de ejemplo con arrays anidados.
            const datos = [1, [2, [3, 4]], 5];

            // Llamamos a aplanar para convertirlo en un array plano.
            const plano = aplanar(datos);

            // Mostramos el array original y el plano usando JSON.stringify.
            ej3Res.innerHTML = `
                <div>Original: <code>${JSON.stringify(datos)}</code></div>
                <div>Plano: <code>${JSON.stringify(plano)}</code></div>
            `;
        });
    }

    /* EJERCICIO 4A: listarArchivos */

    const ej4aBtn = document.getElementById("ej4a-btn");         // Botón ejercicio 4A
    const ej4aRes = document.getElementById("ej4a-resultado");   // Resultado ejercicio 4A

    if (ej4aBtn) {
        ej4aBtn.addEventListener("click", function () {
            // Obtenemos los nombres de archivo del objeto fs.
            const archivos = listarArchivos(fs);

            // Los mostramos en pantalla como una lista dentro de corchetes.
            ej4aRes.innerHTML = `
                <div>Archivos encontrados:</div>
                <div><code>[${archivos.join(", ")}]</code></div>
            `;
        });
    }

    /* EJERCICIO 4B: permutar */

    const ej4bBtn = document.getElementById("ej4b-btn");         // Botón ejercicio 4B
    const ej4bRes = document.getElementById("ej4b-resultado");   // Resultado ejercicio 4B

    if (ej4bBtn) {
        ej4bBtn.addEventListener("click", function () {
            const texto = document.getElementById("ej4b-input").value;

            // Separamos por comas, quitamos espacios y filtramos vacíos.
            const partes = texto
                .split(",")
                .map(v => v.trim())
                .filter(v => v !== "");

            // Intentamos convertir cada valor a número.
            // Si no es un número (NaN), lo dejamos como string.
            const arr = partes.map(v => {
                const n = Number(v);
                return isNaN(n) ? v : n;
            });

            // Calculamos todas las permutaciones.
            const perms = permutar(arr);

            // Pintamos cada permutación en una línea distinta.
            ej4bRes.innerHTML = perms
                .map(p => "<code>[" + p.join(", ") + "]</code>")
                .join("<br>");
        });
    }
});

/* ================== EXTENSIONES ================== */
/** Extension - Ejercicio 1
 * Crear una función operar(a, b, callback)
 * que reciba dos números y una función.
 * Usamos esa función para hacer suma, resta o multiplicación.
 */

// Funciones simples de operación
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Función operar: recibe dos números y una función (callback)
// y devuelve el resultado de aplicar esa función.
function operarExtension(a, b, callback) {
    return callback(a, b);
}

/** Extension - Ejercicio 2
 * Función que devuelve otra función que suma
 * un número fijo a otro número.
 */

// Esta función recibe un número fijo
// y devuelve otra función.
function crearSumador(numeroFijo) {
    // Esta función interna suma el número fijo al número que le pasemos.
    return function (otroNumero) {
        return numeroFijo + otroNumero;
    };
}

/** Extension - Ejercicio 3
 * Expresión de función (function expression)
 * que valida si una cadena tiene más de 10 caracteres.
 */

// Aquí NO usamos "function nombre() {}",
// sino que guardamos la función en una constante.
const esCadenaLarga = function (texto) {
    return texto.length > 10;
};

/** Extension - Ejercicio 4
 * Convertir esta declaración:
 * function greet() { return "Hola"; }
 * en una expresión de función.
 */

// Igual que antes: guardamos la función en una constante.
const greet = function () {
    return "Hola";
};

/* ========= Conexión con la interfaz – Extensiones ========= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===== Extension 1: operar con callback sencillo ===== */

    const ext1Btn = document.getElementById("ext1-btn");
    const ext1Res = document.getElementById("ext1-resultado");

    if (ext1Btn) {
        ext1Btn.addEventListener("click", function () {
            const a = Number(document.getElementById("ext1-a").value);
            const b = Number(document.getElementById("ext1-b").value);
            const op = document.getElementById("ext1-op").value;

            let fn; // aquí guardamos la función que toque

            if (op === "suma") {
                fn = sumar;
            } else if (op === "resta") {
                fn = restar;
            } else if (op === "multiplicacion") {
                fn = multiplicar;
            } else {
                ext1Res.textContent = "Operación no válida.";
                return;
            }

            const resultado = operarExtension(a, b, fn);
            ext1Res.textContent = "Resultado: " + resultado;
        });
    }

    /* ===== Extension 2: función que devuelve un sumador ===== */

    const ext2Btn = document.getElementById("ext2-btn");
    const ext2Res = document.getElementById("ext2-resultado");

    if (ext2Btn) {
        ext2Btn.addEventListener("click", function () {
            const fijo = Number(document.getElementById("ext2-fijo").value);
            const numero = Number(document.getElementById("ext2-numero").value);

            // Creamos un sumador con el número fijo.
            const sumador = crearSumador(fijo);

            // Usamos el sumador con el otro número.
            const resultado = sumador(numero);

            ext2Res.textContent = fijo + " + " + numero + " = " + resultado;
        });
    }

    /* ===== Extension 3: validador de cadena larga ===== */

    const ext3Btn = document.getElementById("ext3-btn");
    const ext3Res = document.getElementById("ext3-resultado");

    if (ext3Btn) {
        ext3Btn.addEventListener("click", function () {
            const texto = document.getElementById("ext3-texto").value;

            // Usamos la función esCadenaLarga (function expression).
            const esLarga = esCadenaLarga(texto);

            if (esLarga) {
                ext3Res.textContent = "La cadena TIENE más de 10 caracteres.";
            } else {
                ext3Res.textContent = "La cadena NO tiene más de 10 caracteres.";
            }
        });
    }

    /* ===== Extension 4: greet como expresión de función ===== */

    const ext4Btn = document.getElementById("ext4-btn");
    const ext4Res = document.getElementById("ext4-resultado");

    if (ext4Btn) {
        ext4Btn.addEventListener("click", function () {
            // Llamamos a la función greet (guardada en una constante).
            const mensaje = greet();
            ext4Res.textContent = mensaje;
        });
    }

});
