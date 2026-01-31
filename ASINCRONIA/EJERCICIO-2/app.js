// Primero me traigo del HTML los elementos que voy a usar:
// - botones para cargar, filtrar y ver todos
// - el tbody donde voy a pintar las filas
// - y un elemento de estado para ir mostrando mensajes al usuario
const btnCargar = document.getElementById("btnCargar");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnVerTodos = document.getElementById("btnVerTodos");
const tbody = document.getElementById("tbodyProductos");
const estado = document.getElementById("estado");

// Creo una “cache” (memoria) para guardar los productos una vez los cargo.
// Así cuando filtro NO tengo que volver a llamar a la API.
let productosCache = [];

// Función sencilla para limpiar la tabla: dejo el tbody vacío
function limpiarTabla() {
  tbody.innerHTML = "";
}

// Esta función se encarga de pintar la tabla.
// Le paso un array de productos y ella crea las filas.
function pintarTabla(productos) {
  // Antes de pintar, limpio lo que hubiese
  limpiarTabla();

  // Si el array viene vacío, muestro un mensaje dentro de la tabla y corto la función
  if (productos.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4">No hay productos que mostrar.</td>`;
    tbody.appendChild(tr);
    return;
  }

  // Recorro todos los productos y por cada uno creo una fila <tr>
  for (const p of productos) {
    const tr = document.createElement("tr");

    // Columna Título
    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = p.title;

    // Columna Precio (le añado el símbolo €)
    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = `${p.price} €`;

    // Columna Stock
    const tdStock = document.createElement("td");
    tdStock.textContent = p.stock;

    // Columna Marca:
    // Uso el operador ?? para poner "(sin marca)" si viene null/undefined
    const tdMarca = document.createElement("td");
    tdMarca.textContent = p.brand ?? "(sin marca)";

    // Meto las celdas en la fila y la fila en el tbody
    tr.append(tdTitulo, tdPrecio, tdStock, tdMarca);
    tbody.appendChild(tr);
  }
}

// 1) Función async que obtiene todos los productos desde la API
async function obtenerProductos() {
  // Aviso en pantalla que estoy cargando y desactivo el botón para evitar clicks repetidos
  estado.textContent = "Cargando productos...";
  btnCargar.disabled = true;

  try {
    // Hago la petición a la API
    const resp = await fetch("https://dummyjson.com/products");

    // Si no es una respuesta OK, lanzo error para que lo maneje el catch
    if (!resp.ok) throw new Error(`Error HTTP ${resp.status}`);

    // Convierto la respuesta a JSON
    const data = await resp.json();

    // La API devuelve un objeto y dentro el array viene en data.products
    // Lo guardo en la cache para poder filtrar sin volver a pedirlo
    productosCache = data.products;

    // Actualizo el estado y pinto la tabla completa
    estado.textContent = `Cargados ${productosCache.length} productos`;
    pintarTabla(productosCache);
  } catch (err) {
    // Si algo falla (red, API, etc.) lo muestro en consola y aviso en pantalla
    console.error(err);
    estado.textContent = "Error cargando productos (mira la consola)";
    limpiarTabla();
  } finally {
    // Pase lo que pase, vuelvo a habilitar el botón
    btnCargar.disabled = false;
  }
}

// 3) Botón "Filtrar por stock bajo":
// Limpio y muestro SOLO los productos con stock < 10
function filtrarStockBajo() {
  // Si todavía no he cargado productos, no puedo filtrar
  if (productosCache.length === 0) {
    estado.textContent = "Primero carga los productos.";
    return;
  }

  // Uso filter para quedarme con los que tengan stock menor que 10
  const filtrados = productosCache.filter(p => p.stock < 10);

  // Actualizo el estado y pinto la tabla con el resultado filtrado
  estado.textContent = `Mostrando stock bajo (<10): ${filtrados.length} productos`;
  pintarTabla(filtrados);
}

// Función para volver a mostrar TODOS los productos (sin filtros)
function verTodos() {
  // Si no hay nada cargado, aviso
  if (productosCache.length === 0) {
    estado.textContent = "Primero carga los productos.";
    return;
  }

  // Repinto la tabla con la cache completa
  estado.textContent = `Mostrando todos: ${productosCache.length} productos`;
  pintarTabla(productosCache);
}

// Eventos:
// - Click en "Cargar" => llama a obtenerProductos (fetch + pintar)
// - Click en "Filtrar" => pinta solo stock bajo
// - Click en "Ver todos" => vuelve a pintar todo
btnCargar.addEventListener("click", obtenerProductos);
btnFiltrar.addEventListener("click", filtrarStockBajo);
btnVerTodos.addEventListener("click", verTodos);
