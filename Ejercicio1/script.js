function calcularTotal() {
  const precioInput = document.getElementById("precio").value.trim();
  const cantidadInput = document.getElementById("cantidad").value.trim();
  const divError = document.getElementById("mensaje-error");
  const divResultado = document.getElementById("resultado");

  divError.innerText = "";
  divResultado.innerText = "";

  // Validación: campos vacíos
  if (precioInput === "" || cantidadInput === "") {
    divError.innerText = "Error: Por favor complete todos los campos.";
    return;
  }

  const precio = parseFloat(precioInput);
  const cantidad = Number(cantidadInput);

  // Validación: precio mayor a 0
  if (isNaN(precio) || precio <= 0) {
    divError.innerText = "Error: El precio debe ser un número mayor a cero.";
    return;
  }

  // Validación: cantidad entero positivo (> 0)
  if (isNaN(cantidad) || !Number.isInteger(cantidad) || cantidad <= 0) {
    divError.innerText = "Error: La cantidad debe ser un número entero positivo.";
    return;
  }

  // Cálculo
  const subtotal = precio * cantidad;
  let descuento = 0;

  // Reto opcional: 10% de descuento si subtotal >= 100
  if (subtotal >= 100) {
    descuento = subtotal * 0.10;
  }

  const total = subtotal - descuento;

  divResultado.innerHTML = `
    Subtotal: $${subtotal.toFixed(2)}<br>
    Descuento (10%): $${descuento.toFixed(2)}<br>
    Total final: $${total.toFixed(2)}
  `;
}