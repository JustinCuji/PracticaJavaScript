function verificarPassword() {
  const pwd = document.getElementById("password").value;

  // Regla 1: Al menos 8 caracteres
  const tieneLongitud = pwd.length >= 8;

  // Regla 2: Contiene al menos un dígito (evaluado sin Expresiones Regulares)
  let tieneDigito = false;
  for (let i = 0; i < pwd.length; i++) {
    const char = pwd[i];
    if (char >= '0' && char <= '9') {
      tieneDigito = true;
      break;
    }
  }

  // Regla 3: Libre de espacios
  let tieneEspacios = false;
  for (let i = 0; i < pwd.length; i++) {
    if (pwd[i] === ' ') {
      tieneEspacios = true;
      break;
    }
  }
  const sinEspacios = !tieneEspacios;

  // Actualizar UI
  actualizarRegla("regla-longitud", tieneLongitud);
  actualizarRegla("regla-digito", tieneDigito);
  actualizarRegla("regla-espacios", sinEspacios);

  const mensajeFinal = document.getElementById("mensaje-final");
  if (tieneLongitud && tieneDigito && sinEspacios) {
    mensajeFinal.innerText = "Cumple todas las reglas";
    mensajeFinal.style.color = "#155724";
  } else {
    mensajeFinal.innerText = "";
  }
}

function actualizarRegla(idElem, seCumple) {
  const elem = document.getElementById(idElem);
  if (seCumple) {
    elem.className = "cumple";
  } else {
    elem.className = "nocumple";
  }
}

// Reto opcional: Verificación en tiempo real mientras se escribe
document.getElementById("password").addEventListener("input", verificarPassword);