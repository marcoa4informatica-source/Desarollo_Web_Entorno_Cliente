// Cojo del HTML todos los elementos que voy a necesitar para trabajar con el DOM:
// - el input donde escribo la búsqueda
// - los botones de buscar y limpiar
// - el tbody donde voy a pintar los resultados
// - el párrafo de estado (mensajes tipo "buscando...")
// - y el div de mensajes (para avisar si no hay resultados, etc.)
const input = document.getElementById("inputBusqueda");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tbody = document.getElementById("tbodyResultados");
const estado = document.getElementById("estado");
const mensaje = document.getElementById("mensaje");

// Función para limpiar la tabla: dejo el tbody vacío
function limpiarTabla() {
  tbody.innerHTML = "";
}

// Función para mostrar un mensaje al usuario.
// Pongo el div visible y escribo el texto que me pasen.
function mostrarMensaje(texto) {
  mensaje.style.display = "block";
  mensaje.textContent = texto;
}

// Función para ocultar el mensaje.
// Lo escondo y además limpio el texto por si luego muestro otro distinto.
function ocultarMensaje() {
  mensaje.style.display = "none";
  mensaje.textContent = "";
}

// Esta función me sirve para “acortar” la descripción y que no me rompa la tabla.
// Si no hay descripción, devuelvo string vacío.
// Si la descripción es más larga que el máximo, la corto y le añado "..."
function descripcionCorta(desc, max = 80) {
  if (!desc) return "";
  return desc.length > max ? desc.slice(0, max) + "..." : desc;
}

// Esta función pinta los productos en la tabla.
// Primero limpio la tabla y luego recorro el array de productos creando una fila por cada uno.
function pintarResultados(productos) {
  limpiarTabla();

  for (const p of productos) {
    // Creo una fila <tr>
    const tr = document.createElement("tr");

    // Columna de imagen:
    // Creo un <td> y dentro un <img>.
    // Para la URL intento usar thumbnail, si no, la primera imagen del array, y si no hay nada, dejo "".
    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = p.thumbnail || (p.images && p.images[0]) || "";
    img.alt = p.title;
    tdImg.appendChild(img);

    // Columna nombre/título del producto
    const tdNombre = document.createElement("td");
    tdNombre.textContent = p.title;

    // Columna descripción corta (uso la función de recorte)
    const tdDesc = document.createElement("td");
    tdDesc.textContent = descripcionCorta(p.description, 90);

    // Columna descuento (lo muestro como porcentaje)
    const tdDescuento = document.createElement("td");
    tdDescuento.textContent = `${p.discountPercentage}%`;

    // Meto todas las celdas dentro de la fila y la fila dentro del tbody
    tr.append(tdImg, tdNombre, tdDesc, tdDescuento);
    tbody.appendChild(tr);
  }
}

// Función principal async para buscar productos en la API
async function buscar() {
  // Antes de buscar, oculto mensajes anteriores y limpio la tabla
  ocultarMensaje();
  limpiarTabla();

  // Leo lo que ha escrito el usuario y le hago trim para quitar espacios al principio/final
  const q = input.value.trim();

  // Si no hay texto, no llamo a la API y aviso al usuario
  if (!q) {
    estado.textContent = "Escribe algo para buscar.";
    return;
  }

  // Desactivo el botón para evitar que se dispare varias veces mientras carga
  btnBuscar.disabled = true;
  estado.textContent = `Buscando "${q}"...`;

  try {
    // Construyo la URL con encodeURIComponent para que espacios y caracteres raros no rompan la URL
    const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`;

    // Hago la petición a la API
    const resp = await fetch(url);

    // Si la respuesta no es OK (200-299), lanzo error para que caiga al catch
    if (!resp.ok) throw new Error(`Error HTTP ${resp.status}`);

    // Paso la respuesta a JSON
    const data = await resp.json();

    // La API me devuelve un objeto y dentro viene el array "products"
    // Si por lo que sea no existe, uso array vacío con ?? []
    const productos = data.products ?? [];

    // Si no hay productos, muestro el mensaje del reto
    if (productos.length === 0) {
      estado.textContent = "Búsqueda completada";
      mostrarMensaje("No se encontraron productos que coincidan con tu búsqueda");
      return;
    }

    // Si hay resultados, actualizo estado y pinto la tabla
    estado.textContent = `Encontrados: ${productos.length} productos`;
    pintarResultados(productos);

  } catch (err) {
    // Si ocurre cualquier error (red, API, etc.) lo muestro por consola y aviso al usuario
    console.error(err);
    estado.textContent = "Error realizando la búsqueda (mira la consola)";
    mostrarMensaje("No se pudieron cargar los resultados. Intenta de nuevo.");
  } finally {
    // En cualquier caso, vuelva a funcionar el botón de buscar
    btnBuscar.disabled = false;
  }
}

// Función para “resetear” todo: input, estado, mensajes, tabla, y devolver foco al input
function limpiarTodo() {
  input.value = "";
  estado.textContent = "";
  ocultarMensaje();
  limpiarTabla();
  input.focus();
}

// Eventos:
// - Al hacer click en Buscar -> ejecuto buscar()
// - Si pulso Enter dentro del input -> también ejecuto buscar()
// - Al hacer click en Limpiar -> ejecuto limpiarTodo()
btnBuscar.addEventListener("click", buscar);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscar();
});

btnLimpiar.addEventListener("click", limpiarTodo);
