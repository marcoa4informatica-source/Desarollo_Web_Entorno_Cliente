// 1) Array de IDs:
// Aquí defino los Pokémon que quiero cargar. Puedo añadir o quitar IDs según el equipo que quiera mostrar.
const equipoIds = [1, 4, 7, 25, 46, 78, 164];

// Me traigo del HTML los elementos que voy a usar:
// - botón de cargar
// - botón de limpiar
// - tbody donde voy a ir pintando las filas
// - y un elemento para mostrar el estado (mensajes de carga, errores, etc.)
const btnCargar = document.getElementById("btnCargar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tbody = document.getElementById("tbodyPokemon");
const estado = document.getElementById("estado");

// Función para limpiar la tabla y también limpiar el texto de estado.
// La uso cuando pulso “Limpiar” y también antes de cargar el equipo de nuevo.
function limpiarTabla() {
  tbody.innerHTML = "";
  estado.textContent = "";
}

// Esta función crea una fila <tr> con los datos de un Pokémon.
// Le paso un objeto con la imagen, el nombre y la experiencia base y me devuelve el <tr> listo para añadirlo.
function crearFilaPokemon({ imgUrl, nombre, baseExp }) {
  const tr = document.createElement("tr");

  // Columna Foto: creo un <td> y dentro un <img>
  const tdImg = document.createElement("td");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = nombre;
  tdImg.appendChild(img);

  // Columna Nombre
  const tdNombre = document.createElement("td");
  tdNombre.textContent = nombre;

  // Columna Experiencia base
  const tdExp = document.createElement("td");
  tdExp.textContent = baseExp;

  // Meto las celdas dentro de la fila y devuelvo la fila creada
  tr.append(tdImg, tdNombre, tdExp);
  return tr;
}

// Función principal async que carga el equipo Pokémon haciendo peticiones a la PokeAPI
async function cargarEquipo() {
  // Desactivo el botón para evitar que el usuario haga clic varias veces mientras carga
  btnCargar.disabled = true;

  // Muestro un mensaje inicial de carga
  estado.textContent = "Cargando equipo (peticiones secuenciales)...";

  // Limpio la tabla antes de empezar para no mezclar resultados antiguos con nuevos
  limpiarTabla();

  // 2) Recorro el array con for...of
  // Esto me permite usar await dentro del bucle y hacer las peticiones una por una (secuenciales).
  for (const id of equipoIds) {
    try {
      // 3) await fetch dentro del bucle => se hace la petición y espero a que termine antes de pasar al siguiente Pokémon
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      // Si la respuesta no es correcta (por ejemplo 404), lanzo un error para capturarlo en el catch
      if (!resp.ok) throw new Error(`Error HTTP ${resp.status} (id: ${id})`);

      // Convierto la respuesta a JSON para poder acceder a los datos del Pokémon
      const data = await resp.json();

      // Extraigo los datos que necesito para la tabla
      const nombre = data.name;
      const baseExp = data.base_experience;

      // Para la imagen intento primero la del "official-artwork".
      // Si no existe, uso el sprite normal, y si tampoco existe, dejo una cadena vacía.
      const imgUrl =
        data.sprites?.other?.["official-artwork"]?.front_default
        || data.sprites?.front_default
        || "";

      // 4) Por cada Pokémon, creo una fila y la añado al tbody
      tbody.appendChild(crearFilaPokemon({ imgUrl, nombre, baseExp }));

      // Voy actualizando el estado para que se vea el progreso mientras carga
      estado.textContent = `Cargado: ${nombre} (id: ${id})`;

    } catch (err) {
      // Si hay un error en un Pokémon, lo muestro en consola
      // y añado una fila de error en la tabla, pero sigo con el siguiente ID.
      console.error(err);

      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="3">No se pudo cargar el Pokémon con id/nombre: <b>${id}</b></td>`;
      tbody.appendChild(tr);

      estado.textContent = `Error con ${id}, continuando...`;
    }
  }

  // Cuando termina el bucle, significa que ya se han intentado cargar todos
  estado.textContent = "Equipo cargado";

  // Reactivo el botón para poder volver a cargar si quiero
  btnCargar.disabled = false;
}

// Eventos:
// - Al hacer click en “Cargar equipo” llamo a cargarEquipo()
// - Al hacer click en “Limpiar tabla” llamo a limpiarTabla()
btnCargar.addEventListener("click", cargarEquipo);
btnLimpiar.addEventListener("click", limpiarTabla);
