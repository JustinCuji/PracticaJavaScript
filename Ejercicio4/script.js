function agregarTarea() {
  const input = document.getElementById("nueva-tarea");
  const textoTarea = input.value.trim();

  // Validación: Impedir tareas vacías o compuestas solo por espacios
  if (textoTarea === "") {
    alert("Por favor ingresa un texto válido para la tarea.");
    return;
  }

  const ul = document.getElementById("lista-tareas");

  // Crear elementos
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.innerText = textoTarea;

  // Evento toggle para tachar/destachar estilo CSS
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("completada");
    } else {
      span.classList.remove("completada");
    }
  });

  // Contenedor izquierdo (checkbox + texto)
  const divIzquierdo = document.createElement("div");
  divIzquierdo.appendChild(checkbox);
  divIzquierdo.appendChild(span);
  span.style.marginLeft = "8px";

  // Reto opcional: Botón de eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.innerText = "Eliminar";
  btnEliminar.className = "btn-eliminar";
  btnEliminar.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(divIzquierdo);
  li.appendChild(btnEliminar);
  ul.appendChild(li);

  // Limpiar campo tras agregar
  input.value = "";
  input.focus();
}